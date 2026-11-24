# Betal Pachisi: project orientation

A browser-based, Hindi-first reading experience for the 25 Vikram–Betal tales (Betal Pachisi). English adaptation comes later. The app has no approved name; "Betall-Pacchisi" is only the repository name.

**Current phase:** agile product development (D-037). Build a usable version, learn, iterate. Open research questions are not blockers. Status: [docs/HANDOFF.md](docs/HANDOFF.md). Plan: [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md).

## Mandatory: operating protocol

**Every new Claude Code session must read and follow [docs/CLAUDE_OPERATING_PROTOCOL.md](docs/CLAUDE_OPERATING_PROTOCOL.md)** (authority and conflict resolution, startup, modes, evidence, story workflow, repository discipline, reviews, roles and independence, reporting) before doing any task. It is the single protocol for all Claude-led work; no other AI tool is part of the workflow. This file is only the orientation; the protocol governs how you work. Nothing in it is permission to commit, push, open a PR or merge: those need the task's explicit authorisation, and merging is always the user's.

Startup, in order: the protocol; [docs/README.md](docs/README.md) (authority map); [docs/HANDOFF.md](docs/HANDOFF.md) (a **dated snapshot**, never an authority); the [docs/DECISIONS.md](docs/DECISIONS.md) entries the task touches; then live git and GitHub state (`git status --short --branch`, `git log -1`, open PRs). A Claude **conversation** (not Claude Code) starts from [docs/AI_SESSION_START.md](docs/AI_SESSION_START.md).

## Stack and commands

Vite + React 19 + TypeScript + react-router-dom 7, tests with Vitest + jsdom + Testing Library. Static site, no backend. These are working, reversible choices (D-037).

```bash
npm install         # once
npm run dev         # local dev server (http://localhost:5173)
npm test            # unit and page tests
npm run typecheck
npm run build       # typecheck + production build into dist/
npm run preview     # serve the built site (http://localhost:4173)
```

## Where things live

- `content/`: creative content, kept separate from code (D-015).
  - `content/collection.hi.json`: collection title, subtitle, intro.
  - `content/stories/hi/<slug>.md`: one story per file. Front matter `order`, `slug`, `title`, `summary`, `status` (`placeholder` | `draft` | `approved`), then paragraphs separated by blank lines. Adding a file adds a story; no code change. Invalid files fail the tests and the build with a message naming the file.
- `src/content/`: loader, front-matter parser, validation. `src/pages/`: collection, story reader, not-found. `src/i18n/hi.ts`: all interface text.
- `stories/`: per-story editorial records (D-045): research, blueprints, drafts, critiques, verification, approvals. Never read by the app; only approved text is copied into `content/` (D-047).
- Production: [docs/production/PRODUCTION_PLAN.md](docs/production/PRODUCTION_PLAN.md) is the governing plan for stories; [docs/ETHICAL_CHARTER.md](docs/ETHICAL_CHARTER.md) binds every tale and the frame.
- `docs/`: project documentation and research. [docs/DECISIONS.md](docs/DECISIONS.md) is the authority on every decision.

## Working rules

- **Never present invented text as an authentic tale.** Until a tale has gone through the story workflow ([docs/STORY_WORKFLOW.md](docs/STORY_WORKFLOW.md)), story files are `status: placeholder` and say so in their text. The reader shows a placeholder banner for them.
- Hindi first; English only after the Hindi is approved (D-012). Do not write or adapt tales unless the user asks.
- Software changes must not overwrite story content (D-015): content edits and code edits go in separate commits.
- Make reasonable, reversible technical decisions without waiting; record anything the user decides in DECISIONS.md, never promote a proposal silently.
- Keep docs proportional. Update [docs/HANDOFF.md](docs/HANDOFF.md) and [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md) at the end of a meaningful session.
- Work on a feature branch; run `npm test` and `npm run build` before committing. Never merge to `main` yourself: the user merges.
- Documentation-only changes also run `npm run docs:check` (links, anchors, decision IDs, status consistency).

Note: story bodies are **plain text**, not Markdown. `*bold*` or `# heading` show literally. Keep it that way until a real tale needs formatting.
