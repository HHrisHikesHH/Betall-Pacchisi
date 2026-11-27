# Claude Code tooling

Plain files with no dependencies. They load for whoever opens the project.

| File | What it does |
|---|---|
| `settings.json` | Pre-approves the routine checks and wires up the guard and the status line. |
| `hooks/guard.mjs` | **Asks first** before writing `status: approved` into `content/`, and before editing an approved content file (D-083). **Blocks** commits that mix `src/` with `content/` or `stories/` (D-015), committing, merging or pushing on `main`, and `gh pr merge`. |
| `scripts/slate.mjs` | Reads [stories/SLATE.md](../stories/SLATE.md) and reports progress (`--json` for the full state). |
| `scripts/statusline.mjs` | Status line, e.g. `⎇ branch* · ✅ 0/19 hi · frame not-started`. |
| `commands/start.md`, `commands/next.md` | `/start` reports state; `/next` names the one action that moves a tale forward. |
| `launch.json` | Dev (5173) and preview (4173) servers for the desktop app's browser pane. |

A `git commit` is checked against what is staged at that moment, so a `git add` in the same command is not seen.
