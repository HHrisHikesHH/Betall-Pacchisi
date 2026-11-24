# Claude Code tooling

These are plain files in the repo, with no dependency on any Claude account or plugin. They load for whoever opens the project.

| File | What it does |
|---|---|
| `settings.json` | Pre-approves the routine checks (tests, build, docs:check, read-only git). It also wires the guard hook and the status line. |
| `hooks/guard.mjs` | Runs before every file edit and shell command. **Blocks:** edits to an existing `stories/**/approved.md`; edits to a `content/` file with `status: approved`; commits that mix `src/` with `content/` or `stories/` (D-015); committing, merging or pushing on `main`; `gh pr merge`. **Asks first:** creating an `approved.md`; writing `status: approved` into `content/`; shell commands that write to or remove an `approved.md`. |
| `scripts/slate.mjs` | Reads every `stories/*/status.md` and reports progress. Run `node .claude/scripts/slate.mjs`, or add `--json` for the full state. |
| `scripts/statusline.mjs` | Status line, e.g. `⎇ branch* · ✅ 0/19 hi · frame blueprint-ready · ⏳ you: TC-001`. |
| `commands/next.md` | `/next [proposed task]` names the one action that moves a tale toward release. Anything waiting on the user comes first, and it flags work that moves no tale forward. |
| `commands/start.md`, `review-pr.md`, `closeout.md` | Protocol §B, §H and §I. |
| `launch.json` | Dev (5173) and preview (4173) servers for the desktop app's browser pane. |

The guard is a local safety net. It is not the CI rule planned in PRODUCTION_PLAN R7, and it does not settle D-052 or Q-415. A `git commit` is checked against what is staged at that moment, so a `git add` chained in the same command is not seen. If the guard blocks something the user genuinely wants, the user can do it themselves or edit this folder.

`settings.local.json` (if present) is for personal, machine-only values and is not committed.
