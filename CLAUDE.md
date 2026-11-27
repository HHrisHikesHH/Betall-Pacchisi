# Betal Pachisi

A Hindi-first web reading experience of the Vikram–Betal tales: the frame plus 19 tales in the first release (D-038), with 25 as the goal. English comes later (D-012). "Betall-Pacchisi" is only the repo name.

**The goal is published stories.** Every story PR changes `content/` (D-084). A PR that only changes process is allowed only when it unblocks writing.

## Read first (and only)

1. This file.
2. Live state: `git status --short --branch`, `git log -1`, open PRs (`gh api repos/HHrisHikesHH/Betall-Pacchisi/pulls`).
3. [stories/SLATE.md](stories/SLATE.md): the only status table.
4. Then what the task needs: [docs/STORY_WORKFLOW.md](docs/STORY_WORKFLOW.md), [docs/NARRATOR_VOICE.md](docs/NARRATOR_VOICE.md), [docs/ETHICAL_CHARTER.md](docs/ETHICAL_CHARTER.md), and the [docs/DECISIONS.md](docs/DECISIONS.md) entries it touches.

## Roles

- **The user** decides creative and story matters, approves decisions and texts, and merges every PR.
- **The coordinator** (a Claude conversation) runs the workflow, picks models, writes PRs and checks results from the files. It may branch, commit, push and open PRs for a given task. It never merges.

## Rules that stay

- **Decisions:** only the user decides. Record his decisions in DECISIONS.md with the date; never promote a proposal silently.
- **`approved`** means the user approved it. The story's front matter then carries `approved_on` and `approved_commit` (D-083). Ask before writing `status: approved`.
- **Content and code stay separate** (D-015). Never mix `src/` with `content/` or `stories/` in one commit.
- **Never present invented text as an authentic tale.** Unreviewed text is `status: placeholder` or `draft`, and the reader labels it.
- **Spend effort only where it pays off later** (D-085). No new process documents, trace files or review loops (D-082).

## Stack and commands

Vite + React 19 + TypeScript + react-router-dom 7; Vitest + jsdom. Static site, no backend. Hosting: [docs/HOSTING.md](docs/HOSTING.md).

```bash
npm install
npm run dev          # http://localhost:5173
npm test
npm run build        # typecheck + build
npm run docs:check   # links and decision IDs; CI runs it
```

## Where things live

- `content/stories/hi/<slug>.md`: what the app shows. The front matter is `order`, `slug`, `title`, `summary`, `status` (`placeholder` | `draft` | `approved`). The body is **plain text**, with paragraphs separated by blank lines.
- `content/collection.hi.json`: collection title and intro. `src/i18n/hi.ts`: all interface text.
- `stories/<ID>/`: brief, draft, critique, revision, research. See [stories/README.md](stories/README.md). Callbacks: [stories/CALLBACKS.md](stories/CALLBACKS.md).
- Source notes: `docs/selection/story-buckets/`, [docs/production/SLATE_AUDIT.md](docs/production/SLATE_AUDIT.md), [docs/production/FRAME_PROPOSAL.md](docs/production/FRAME_PROPOSAL.md), `docs/research/`.
- Design (parked, D-088): `docs/DESIGN_BRIEF.md`, `docs/ART_DIRECTION.md`, `docs/AUDIO_DIRECTION.md`.
- Old process documents were deleted in the reset of 2026-11-27. They are still readable at commit `58d0060`.
