---
description: Write the end-of-session report (protocol §I), ending with a machine-readable block
---

Write the session closure report required by `docs/CLAUDE_OPERATING_PROTOCOL.md` §I
(including "After a PR merges" if a PR was merged). Keep it to **25 lines or fewer**, then the block.

Report only what you checked in this session (§D, §J): completed and not completed;
files and sections changed; tests and validation actually run, with results; branch,
commit and PR state read live from git and GitHub; open questions and blockers; any
user decision needed; one logical next task.

If the task forbids it, do not edit `docs/HANDOFF.md`; say what should be recorded instead.

End with this block, filled from live state (write `none` where empty):

```text
branch:
commit_sha:
pr_url:
files_changed:
checks_run:
```
