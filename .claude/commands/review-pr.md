---
description: Coordination review of a pull request (protocol §H)
argument-hint: [pr-number]
allowed-tools: Read Bash(git fetch *) Bash(git diff *) Bash(git log *) Bash(git show *) Bash(gh pr view *) Bash(gh pr diff *) Bash(gh pr checks *) Bash(npm test) Bash(npm run typecheck) Bash(npm run build) Bash(npm run docs:check)
---

Review pull request #$ARGUMENTS in `HHrisHikesHH/Betall-Pacchisi` by following
`docs/CLAUDE_OPERATING_PROTOCOL.md` §H (Reviews), steps 1 to 6.

Read the PR description and the task prompt it came from, fetch the head branch, read
the real diff against its base, verify cited evidence against the files, and rerun the
validation (including `npm run docs:check`) rather than accepting "passed".

Classify findings as blockers, material corrections, minor issues and items verified (say how).
State the review kind: a **coordination review**. If you wrote or shaped the work, say so;
it is not independent review, not human review and not user approval (§H step 6, §K).

Do not comment on the PR, push, approve or merge unless the user asks.
