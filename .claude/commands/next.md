---
description: Name the single next action that moves a tale toward release (anti-drift check)
allowed-tools: Read Bash(node .claude/scripts/slate.mjs *) Bash(git status *) Bash(git log *) Bash(git fetch *) Bash(gh pr list *)
---

Purpose: keep the project moving toward released tales. Do not edit, commit or push anything.

1. Run `node .claude/scripts/slate.mjs --json` and `gh pr list`. For any story marked `waitingOnUser`, and for the one or two tales furthest along, read its `status.md` (and only the file its "Current status" names as the next input, e.g. a decision packet). Do not read the whole repository.
2. Pick **one** action, in this priority:
   1. something **waiting on the user** (a decision packet, an approval, an open PR to merge): name the file and the exact decisions or action needed;
   2. the next **stage step** for the tale closest to approval (STORY_WORKFLOW.md stages: A1 → A2 → A3 → Draft 1 → critiques → verification → approval packet);
   3. otherwise, the next tale to start, by slate order.
3. If `$ARGUMENTS` proposes a task, judge it against step 2: if it is docs, process or tooling work that moves no tale forward, say so plainly and say what it delays.

Reply in **8 lines or fewer**:

- `Next:` the one action, who does it (you or Claude), and the file;
- `Why:` one line;
- `Unblocks:` what becomes possible after it;
- `Progress:` approved tales / total, and the frame status;
- `Drift:` only if step 3 applies.
