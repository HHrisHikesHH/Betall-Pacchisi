---
description: Name the single next action that moves a tale toward publication (anti-drift check)
allowed-tools: Read Bash(node .claude/scripts/slate.mjs *) Bash(git status *) Bash(git log *) Bash(gh api repos/HHrisHikesHH/Betall-Pacchisi/pulls*)
---

Purpose: keep the project moving toward published tales (D-084). Do not edit, commit or push anything.

1. Run `node .claude/scripts/slate.mjs --json` and list open PRs.
2. Pick **one** action, in this priority:
   1. something **waiting on the user** (`user-review`, a brief needing his look under D-081, a PR to merge);
   2. the next workflow step ([docs/STORY_WORKFLOW.md](../../docs/STORY_WORKFLOW.md)) for the tale closest to publication;
   3. otherwise the next tale in the reading order.
3. If `$ARGUMENTS` proposes a task that changes no `content/` and unblocks no writing, say so plainly.

Reply in **6 lines or fewer**: `Next:` (the action, who does it, and the file), `Why:`, `Progress:` (approved/19 and the frame status), and `Drift:` (only if step 3 applies).
