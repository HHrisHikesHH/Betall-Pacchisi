#!/usr/bin/env node
// Live slate state, read from stories/<ID>/status.md (plain Node, no dependencies).
// Used by the status line and by /next. Never writes anything.
//
//   node .claude/scripts/slate.mjs          one-line summary
//   node .claude/scripts/slate.mjs --json   full state as JSON
//
// Collection-agnostic: it reads every <root>/stories/*/status.md. A later collection
// (e.g. jataka/) only needs the same status.md table rows.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.env.SLATE_ROOT
  ? resolve(process.env.SLATE_ROOT)
  : resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");

const field = (text, name) => {
  const m = text.match(new RegExp(`^\\|\\s*${name}\\s*\\|\\s*(.*?)\\s*\\|\\s*$`, "mi"));
  return m ? m[1] : null;
};

export function readSlate(root = ROOT) {
  const dir = join(root, "stories");
  if (!existsSync(dir)) return [];
  const out = [];
  for (const id of readdirSync(dir).sort()) {
    const file = join(dir, id, "status.md");
    if (!existsSync(file)) continue;
    const text = readFileSync(file, "utf8");
    const current = field(text, "Current status") ?? "";
    const title = (text.match(/^#\s+[^:]+:\s*(.+)$/m) || [])[1] ?? id;
    const hi = field(text, "Hindi approval") ?? "none";
    const en = field(text, "English approval") ?? "none";
    out.push({
      id,
      title,
      status: (current.match(/`([^`]+)`/) || [])[1] ?? "unknown",
      waitingOnUser: /awaiting (the )?user|awaiting your|needs the user'?s decision/i.test(current),
      approvedHi: !/^(none|—|-)?$/i.test(hi.trim()),
      approvedEn: !/^(none|—|-)?$/i.test(en.trim()),
      file: `stories/${id}/status.md`,
    });
  }
  return out;
}

export function summarise(slate) {
  const tales = slate.filter((s) => s.id !== "FRAME");
  const frame = slate.find((s) => s.id === "FRAME");
  const byStatus = {};
  for (const t of tales) byStatus[t.status] = (byStatus[t.status] ?? 0) + 1;
  return {
    tales: tales.length,
    approvedHi: tales.filter((t) => t.approvedHi).length,
    approvedEn: tales.filter((t) => t.approvedEn).length,
    frame: frame?.status ?? "—",
    byStatus,
    waitingOnUser: slate.filter((s) => s.waitingOnUser).map((s) => s.id),
  };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const slate = readSlate();
  const sum = summarise(slate);
  if (process.argv.includes("--json")) {
    console.log(JSON.stringify({ summary: sum, stories: slate }, null, 2));
  } else {
    const stages = Object.entries(sum.byStatus).map(([k, v]) => `${k} ${v}`).join(", ");
    const wait = sum.waitingOnUser.length ? ` · waiting on you: ${sum.waitingOnUser.join(", ")}` : "";
    console.log(`Approved ${sum.approvedHi}/${sum.tales} hi · frame ${sum.frame} · ${stages}${wait}`);
  }
}
