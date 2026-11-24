#!/usr/bin/env node
// PreToolUse guard (plain Node, no dependencies). A local safety net for the
// repository rules; it does not replace the CI rules planned in PRODUCTION_PLAN R7.
//
//   1. stories/**/approved.md: editing an existing one is DENIED (immutable, PRODUCTION_PLAN §10);
//      creating one ASKS the user (written only on the user's explicit yes).
//   2. content/stories/**: editing a file whose front matter is `status: approved` is DENIED;
//      writing `status: approved` into a content file ASKS the user (the publish step, D-047).
//   3. git commit that would mix src/ with content/ or stories/ is DENIED (D-015).
//   4. Pushing to main, committing or merging on main, and `gh pr merge` are DENIED
//      (the user merges; protocol §F).
//   5. Shell commands that write to or delete an approved.md ASK the user.
//
// Output: JSON permission decision on stdout; silence means "no opinion".

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { isAbsolute, resolve } from "node:path";

const decide = (permissionDecision, reason) => {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision,
        permissionDecisionReason: `[repo guard] ${reason}`,
      },
    }),
  );
  process.exit(0);
};

const APPROVED_MD = /(^|\/)stories\/.+\/approved\.md$/;
const CONTENT_STORY = /(^|\/)content\/stories\/[^/]+\/[^/]+\.md$/;
const isApprovedFrontMatter = (text) => {
  const fm = text.match(/^---\n([\s\S]*?)\n---/);
  return !!fm && /^status:\s*approved\s*$/m.test(fm[1]);
};

function checkFile(input, cwd) {
  const raw = input.file_path || input.notebook_path;
  if (!raw) return;
  const p = isAbsolute(raw) ? raw : resolve(cwd, raw);
  const exists = existsSync(p);

  if (APPROVED_MD.test(p)) {
    if (exists) decide("deny", `${raw} is approved text and immutable. A change needs a new revision-N/ cycle and a new approval.`);
    decide("ask", `Creating ${raw}. approved.md is written only on the user's explicit yes. Confirm the user approved this tale.`);
  }

  if (CONTENT_STORY.test(p)) {
    if (exists && isApprovedFrontMatter(readFileSync(p, "utf8"))) {
      decide("deny", `${raw} is published approved text (status: approved). It must not be edited.`);
    }
    const incoming = input.content ?? input.new_string ?? "";
    if (/^status:\s*approved\s*$/m.test(incoming)) {
      decide("ask", `Writing status: approved into ${raw}. Publishing needs a recorded approval and a matching approved_sha256 (D-047). Confirm.`);
    }
  }
}

function git(cwd, ...args) {
  try {
    return execFileSync("git", ["-C", cwd, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
}

function checkBash(cmd, cwd) {
  const segments = cmd.split(/&&|\|\||;|\n/).map((s) => s.trim()).filter(Boolean);
  const branch = git(cwd, "branch", "--show-current");

  for (const seg of segments) {
    if (/^gh\s+pr\s+merge\b/.test(seg)) decide("deny", "Merging a PR is never authorised. The user merges.");

    if (/^git\s+push\b/.test(seg)) {
      const args = seg.split(/\s+/).slice(2).filter((a) => !a.startsWith("-"));
      const refspecs = args.slice(1);
      const toMain = refspecs.some((r) => /(^|:)(refs\/heads\/)?main$/.test(r.replace(/^\+/, "")));
      if (toMain || (refspecs.length === 0 && branch === "main")) {
        decide("deny", "Pushing to main is not allowed. Push the feature branch and open a PR.");
      }
    }

    if (/^git\s+merge\b/.test(seg) && branch === "main") {
      decide("deny", "Merging into main is not allowed. The user merges.");
    }

    if (/^git\s+commit\b/.test(seg)) {
      if (branch === "main") decide("deny", "Committing on main is not allowed. Create a feature branch first.");
      const staged = git(cwd, "diff", "--cached", "--name-only").split("\n");
      const all = /\s-[a-zA-Z]*a/.test(seg) || /--all\b/.test(seg)
        ? staged.concat(git(cwd, "diff", "--name-only").split("\n"))
        : staged;
      const files = all.filter(Boolean);
      const code = files.some((f) => f.startsWith("src/"));
      const content = files.some((f) => f.startsWith("content/") || f.startsWith("stories/"));
      if (code && content) {
        decide("deny", "This commit mixes src/ with content/ or stories/. Content and code go in separate commits (D-015). Unstage one side.");
      }
      const changedTracked = git(cwd, "diff", "--cached", "--diff-filter=MDR", "--name-only").split("\n");
      if (changedTracked.some((f) => APPROVED_MD.test(f))) {
        decide("deny", "This commit modifies or deletes an existing approved.md, which is immutable.");
      }
    }

    if (/approved\.md/.test(seg) && /(\bsed\s+-i|\bperl\s+-[a-z]*i|>|\btee\b|\brm\b|\bmv\b|\bcp\b|\btruncate\b|\bgit\s+(rm|mv|checkout|restore)\b)/.test(seg)) {
      decide("ask", `This shell command may write to or remove an approved.md: "${seg.slice(0, 160)}". Confirm.`);
    }
  }
}

let raw = "";
process.stdin.on("data", (c) => (raw += c));
process.stdin.on("end", () => {
  let ev;
  try {
    ev = JSON.parse(raw);
  } catch {
    process.exit(0);
  }
  const cwd = ev.cwd || process.cwd();
  const input = ev.tool_input || {};
  if (["Write", "Edit", "MultiEdit", "NotebookEdit"].includes(ev.tool_name)) checkFile(input, cwd);
  if (ev.tool_name === "Bash" && typeof input.command === "string") checkBash(input.command, cwd);
  process.exit(0);
});
