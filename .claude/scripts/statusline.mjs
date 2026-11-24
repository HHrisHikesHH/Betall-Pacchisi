#!/usr/bin/env node
// Claude Code status line: branch, dirty flag, tale progress, what waits on the user.
// Reads the session JSON on stdin (uses workspace.current_dir), prints one line.

import { execFileSync } from "node:child_process";
import { readSlate, summarise } from "./slate.mjs";

let input = "";
process.stdin.on("data", (c) => (input += c));
process.stdin.on("end", () => {
  let cwd = process.cwd();
  try {
    const j = JSON.parse(input || "{}");
    cwd = j.workspace?.current_dir || j.cwd || cwd;
  } catch {}

  const git = (...args) => {
    try {
      return execFileSync("git", ["-C", cwd, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    } catch {
      return "";
    }
  };
  const root = git("rev-parse", "--show-toplevel") || cwd;
  const branch = git("branch", "--show-current") || "detached";
  const dirty = git("status", "--porcelain") ? "*" : "";

  let story = "";
  try {
    const s = summarise(readSlate(root));
    const wait = s.waitingOnUser.length ? ` · ⏳ you: ${s.waitingOnUser.join(", ")}` : "";
    story = ` · ✅ ${s.approvedHi}/${s.tales} hi · frame ${s.frame}${wait}`;
  } catch {}

  const warn = branch === "main" ? " ⚠ on main" : "";
  process.stdout.write(`⎇ ${branch}${dirty}${warn}${story}`);
});
