#!/usr/bin/env node
// Live slate state, read from stories/SLATE.md (plain Node, no dependencies).
// Used by the status line and by /next. Never writes anything.
//
//   node .claude/scripts/slate.mjs          one-line summary
//   node .claude/scripts/slate.mjs --json   full state as JSON

import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.env.SLATE_ROOT ? resolve(process.env.SLATE_ROOT) : resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");

export function readSlate(root = ROOT) {
  const file = join(root, "stories", "SLATE.md");
  if (!existsSync(file)) return [];
  const out = [];
  for (const line of readFileSync(file, "utf8").split("\n")) {
    const c = line.split("|").map((s) => s.trim());
    if (!/^(FRAME|TC-\d{3})$/.test(c[1] ?? "")) continue;
    out.push({
      id: c[1],
      title: c[2],
      status: c[5]?.match(/`([^`]+)`/)?.[1] ?? "unknown",
      approved: !!c[6] && c[6] !== "—",
      note: c[7] ?? "",
    });
  }
  return out.map((s) => ({ ...s, waitingOnUser: s.status === "user-review" }));
}

export function summarise(slate) {
  const tales = slate.filter((s) => s.id !== "FRAME");
  const byStatus = {};
  for (const t of tales) byStatus[t.status] = (byStatus[t.status] ?? 0) + 1;
  return {
    tales: tales.length,
    approvedHi: tales.filter((t) => t.approved).length,
    frame: slate.find((s) => s.id === "FRAME")?.status ?? "—",
    byStatus,
    waitingOnUser: slate.filter((s) => s.waitingOnUser).map((s) => s.id),
  };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const slate = readSlate();
  const sum = summarise(slate);
  if (process.argv.includes("--json")) console.log(JSON.stringify({ summary: sum, stories: slate }, null, 2));
  else {
    const stages = Object.entries(sum.byStatus).map(([k, v]) => `${k} ${v}`).join(", ");
    const wait = sum.waitingOnUser.length ? ` · waiting on you: ${sum.waitingOnUser.join(", ")}` : "";
    console.log(`Approved ${sum.approvedHi}/${sum.tales} hi · frame ${sum.frame} · ${stages}${wait}`);
  }
}
