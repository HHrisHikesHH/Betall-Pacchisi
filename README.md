# Betall-Pacchisi

A browser-based, Hindi-first reading experience for the Betal Pachisi (Vikram and Betal) tales. The current version is an early reading prototype: the collection, story pages and navigation work, but **every story entry is clearly labelled placeholder content**. The real tales have not yet been selected or written.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

Other commands: `npm test` (tests), `npm run typecheck`, `npm run build` (production build into `dist/`), `npm run preview` (serve the build at http://localhost:4173).

## Add or edit a story

Each story is one Markdown file in `content/stories/hi/`. See [CLAUDE.md](CLAUDE.md#where-things-live) for the format. No code changes are needed.

## Documentation

Start with [docs/HANDOFF.md](docs/HANDOFF.md) (current status) and [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md) (milestones). The full documentation index is [docs/README.md](docs/README.md).
