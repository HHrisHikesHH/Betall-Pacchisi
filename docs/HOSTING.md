# Hosting

*Working note, 2026-11-24. Q-502 (hosting) is still open; Cloudflare Pages is a provisional choice by the coordinator and is **not deployed**. This records no decision (see [LAUNCH_EXCEPTIONS.md](LAUNCH_EXCEPTIONS.md)).*

The app is a static single-page site: no server, no environment secrets. `npm run build` writes everything to `dist/`.

## Cloudflare Pages (provisional)

In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.

| Setting | Value |
|---|---|
| Repository | `HHrisHikesHH/Betall-Pacchisi` |
| Production branch | `main` |
| Framework preset | None (or Vite; the values below are what matter) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (empty) |
| Environment variable | `NODE_VERSION` = `22` (the repo has no `engines` or `.nvmrc`; development uses Node 22) |
| Preview deployments | On for all non-production branches, so each PR gets a preview URL |

`npm run build` runs the type check and the content tests before building, so a broken story file fails the deploy instead of shipping.

**Deep links.** `public/_redirects` contains `/*    /index.html   200`. Vite copies it to `dist/_redirects`. Without it, opening or refreshing `/kathaen/<slug>` would return a 404, because only `/` exists as a file. Cloudflare serves real files (assets, `favicon.svg`) first and falls back to `index.html` for every other path.

`vite.config.ts` has `base: '/'`, which is correct for a Pages domain (`*.pages.dev` or a custom domain at the root).

## GitHub Pages (fallback)

Possible, but it needs extra work:

- A project site is served under `/Betall-Pacchisi/`, so `base` must change to `'/Betall-Pacchisi/'` (and the router needs a matching `basename`). A custom domain at the root keeps `base: '/'`.
- GitHub Pages ignores `_redirects`. It serves `404.html` for unknown paths, so deep links only work if `dist/404.html` is a copy of `index.html` (the router then renders the page, though the response status is 404, which is poor for search engines and link previews).
- It needs a workflow that builds and publishes `dist/`; none is in the repository.

Any other static host works the same way: serve `dist/` and fall back to `index.html` for unknown paths.
