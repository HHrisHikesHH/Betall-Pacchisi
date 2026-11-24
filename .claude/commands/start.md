---
description: Run the startup procedure and report repository state in 15 lines or fewer
allowed-tools: Read Bash(git status *) Bash(git branch *) Bash(git log *) Bash(git fetch *) Bash(gh pr list *) Bash(gh pr view *)
---

Run `docs/CLAUDE_OPERATING_PROTOCOL.md` §B (Startup procedure) in full, in order.
Do not edit, commit or push anything.

Then report in **15 lines or fewer**:

- branch, HEAD (short SHA) and whether the working tree is clean; list untracked or modified files that are not yours;
- `origin/main` HEAD and open PRs (number, title, head branch);
- the current task as you understand it and the mode (§C), or "no task yet";
- any conflict between `docs/HANDOFF.md` and live git or GitHub state (§A, Conflict resolution);
- the permissions the task grants (§F), or "none stated".

Recheck facts live; do not repeat the HANDOFF snapshot from memory.
