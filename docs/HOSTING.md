# Hosting

*Working note, 2026-11-24. Q-502 (hosting) is still open; Cloudflare is a provisional choice by the coordinator. This records no decision (see [LAUNCH_EXCEPTIONS.md](https://github.com/HHrisHikesHH/Betall-Pacchisi/blob/58d00606394f38801e94e4c258c431b02457f7aa/docs/LAUNCH_EXCEPTIONS.md)). The first deploy attempt (Cloudflare build log, 2026-11-24 18:16 UTC) went through the Workers path, not Pages.*

The app is a static single-page site: no server, no environment secrets. `npm run build` writes everything to `dist/`.

## Cloudflare (provisional)

In the Cloudflare dashboard: **Workers & Pages → Create → connect the Git repository**. The dashboard may create a *Workers* project whose deploy command is `npx wrangler deploy`; that is what happened on 2026-11-24, and it is supported. The repository carries `wrangler.jsonc` (assets from `dist`, `not_found_handling: single-page-application`), so both the Workers and the Pages path work from the settings below.

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

**Branch previews.** For non-production branches the build log of 2026-11-25 shows the deploy command `npx wrangler preview`, which fails without a `previews` block in `wrangler.jsonc`. The block is present and empty ([Cloudflare: Previews configuration](https://developers.cloudflare.com/workers/previews/configuration/)).

**Deep links.** `wrangler.jsonc` sets `not_found_handling` to `single-page-application`: any path that is not a real file returns `index.html` with status 200, so opening or refreshing `/kathaen/<slug>` works. There is deliberately **no** `public/_redirects`: the Workers deploy rejected `/*    /index.html   200` with error 100324 ("Infinite loop detected"), which failed the first deploy. Checked locally with `wrangler dev` (workerd): `/`, `/kathaen/kamal-ke-teen-ishare` and an unknown path all return 200 `text/html`; real assets such as `/favicon.svg` return their own type.

`vite.config.ts` has `base: '/'`, which is correct for a Pages domain (`*.pages.dev` or a custom domain at the root).

## GitHub Pages (fallback)

Possible, but it needs extra work:

- A project site is served under `/Betall-Pacchisi/`, so `base` must change to `'/Betall-Pacchisi/'` (and the router needs a matching `basename`). A custom domain at the root keeps `base: '/'`.
- GitHub Pages has no SPA fallback setting. It serves `404.html` for unknown paths, so deep links only work if `dist/404.html` is a copy of `index.html` (the router then renders the page, though the response status is 404, which is poor for search engines and link previews).
- It needs a workflow that builds and publishes `dist/`; none is in the repository.

Any other static host works the same way: serve `dist/` and fall back to `index.html` for unknown paths.
