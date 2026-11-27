#!/usr/bin/env node
// PreToolUse guard (plain Node, no dependencies). A local safety net:
//
//   1. Writing `status: approved` into content/stories/** ASKS the user (D-083), and so does
//      editing a content file that is already `status: approved`.
//   2. A git commit that mixes src/ with content/ or stories/ is DENIED (D-015).
//   3. Pushing to main, committing or merging on main, and `gh pr merge` are DENIED (the user merges).
//
// Output: JSON permission decision on stdout; silence means "no opinion".

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { isAbsolute, resolve } from "node:path";

const decide = (permissionDecision, reason) => {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision, permissionDecisionReason: `[repo guard] ${reason}` },
    }),
  );
  process.exit(0);
};

const CONTENT_STORY = /(^|\/)content\/stories\/[^/]+\/[^/]+\.md$/;
const APPROVED = /^status:\s*approved\s*$/m;
const frontMatter = (text) => text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";

function checkFile(input, cwd) {
  const raw = input.file_path || input.notebook_path;
  if (!raw) return;
  const p = isAbsolute(raw) ? raw : resolve(cwd, raw);
  if (!CONTENT_STORY.test(p)) return;
  if (existsSync(p) && APPROVED.test(frontMatter(readFileSync(p, "utf8")))) {
    decide("ask", `${raw} is approved text (status: approved). Confirm the user asked for this change.`);
  }
  const incoming = input.content ?? input.new_string ?? "";
  if (APPROVED.test(incoming)) {
    decide("ask", `Writing status: approved into ${raw}. Only the user approves (D-083); add approved_on and approved_commit. Confirm.`);
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
      const refspecs = seg.split(/\s+/).slice(2).filter((a) => !a.startsWith("-")).slice(1);
      const toMain = refspecs.some((r) => /(^|:)(refs\/heads\/)?main$/.test(r.replace(/^\+/, "")));
      if (toMain || (refspecs.length === 0 && branch === "main")) decide("deny", "Pushing to main is not allowed. Push a feature branch and open a PR.");
    }
    if (/^git\s+merge\b/.test(seg) && branch === "main") decide("deny", "Merging into main is not allowed. The user merges.");
    if (/^git\s+commit\b/.test(seg)) {
      if (branch === "main") decide("deny", "Committing on main is not allowed. Create a feature branch first.");
      const staged = git(cwd, "diff", "--cached", "--name-only").split("\n");
      const all = /\s-[a-zA-Z]*a/.test(seg) || /--all\b/.test(seg) ? staged.concat(git(cwd, "diff", "--name-only").split("\n")) : staged;
      const files = all.filter(Boolean);
      const code = files.some((f) => f.startsWith("src/"));
      const content = files.some((f) => f.startsWith("content/") || f.startsWith("stories/"));
      if (code && content) decide("deny", "This commit mixes src/ with content/ or stories/ (D-015). Commit them separately.");
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
