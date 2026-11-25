# Pothi prototype art and fonts

Used only by the `/pothi` prototype (`src/pothi/`). This is not approved art direction: Q-204 (image tool) and Q-205 (licensing) stay **OPEN**.

## `court-fruit.webp`

| Item | Record |
|---|---|
| Original | 1860 × 846 PNG, not committed. sha256 `f4214a0a0ab83784f7c27f1940d53cec6d9b2b2a1546fa79e85927860f1ac383` |
| This file | WebP, quality 88, same pixel size, converted with Pillow |
| Provenance | Supplied by the user on 2026-11-25; made from the "Mewar/Bundi" prompt variant |
| Content credentials | The original's C2PA metadata, read by the coordinator, names ChatGPT / gpt-image, `digitalSourceType` `trainedAlgorithmicMedia`. **The WebP conversion drops that metadata** |
| Terms | [OpenAI Terms of Use](https://openai.com/policies/row-terms-of-use/), effective 2026-01-01, read by the coordinator on 2026-11-25: as between the user and OpenAI, and to the extent permitted by law, the user owns the Output; output may not be unique; it must not be represented as human-generated |
| Not checked | OpenAI's usage and sharing policies were not read. The copyright status of AI-generated images is unverified. This repository is public |

The reader says the picture is AI-made: on the cover, and on every leaf.

### Known art issues (to fix in final art)

- The visitor hands the fruit to the treasurer; in the source the king takes it and passes it on (Kathāsaritsāgara 12.8.23–27).
- The king has a halo.
- The visitor has a faint cord at the neck.

The picture is also not a scene from the sample text shown beside it; the cover says so.

## Fonts

Installed from npm; licence read from each package's `package.json` and `LICENSE` file in `node_modules` on 2026-11-25. All are under the SIL Open Font License 1.1.

| Package (version) | Use | Copyright line in `LICENSE` |
|---|---|---|
| `@fontsource/tiro-devanagari-hindi` (5.3.0) | Body text | Copyright 2020 The Indigo Project Authors |
| `@fontsource/rozha-one` (5.3.0) | Titles (default) | Copyright (c) 2014 Indian Type Foundry |
| `@fontsource/yatra-one` (5.3.0) | Titles with `/pothi?title=yatra` | Copyright 2014 The Yatra Project Authors |

The cover, borders and paper texture are drawn in code (SVG and CSS); no image was downloaded.
