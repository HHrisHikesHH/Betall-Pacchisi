# Pothi prototype art and fonts

Used only by the `/pothi` prototype (`src/pothi/`). This is not approved art direction: Q-204 (image tool) and Q-205 (licensing) stay **OPEN**.

## `court-offering.webp`

| Item | Record |
|---|---|
| Original | 1860 × 845 PNG, not committed. sha256 `7c6bfbcdbdedf55ac6f000870b1b50fce7ee9724defecc48e3f5e61087fc50d7` |
| This file | WebP, quality 86, same pixel size, 421,266 bytes, sha256 `38b48c4da2b5540e6bec76e8dd0af4ccfc508f0a89c5d45c8ed23b6aab15c542`, converted with Pillow |
| Provenance | Supplied by the user on 2026-11-25 as a replacement for the first prototype painting, which the user rejected |
| Content credentials | The original's C2PA metadata, read by the coordinator, names ChatGPT / gpt-image, `digitalSourceType` `trainedAlgorithmicMedia`. **The WebP conversion drops that metadata** |
| Terms | [OpenAI Terms of Use](https://openai.com/policies/row-terms-of-use/), effective 2026-01-01, read by the coordinator on 2026-11-25: as between the user and OpenAI, and to the extent permitted by law, the user owns the Output; output may not be unique; it must not be represented as human-generated |
| Not checked | OpenAI's usage and sharing policies were not read. The copyright status of AI-generated images is unverified. This repository is public |

The reader says the picture is AI-made: on the cover, and on every leaf.

### Known art issues (to fix before final art)

- The old man has an earring, a thin neck cord, a bangle and an apparent small tuft of hair. These may read as caste or religious markers; the blueprint calls for no caste marker on the ascetic (D-043).

The king receives the fruit himself and has no halo.

The picture is also not a scene from the sample text shown beside it; the cover says so.

## Fonts

Installed from npm; licence read from each package's `package.json` and `LICENSE` file in `node_modules` on 2026-11-25. All are under the SIL Open Font License 1.1.

| Package (version) | Use | Copyright line in `LICENSE` |
|---|---|---|
| `@fontsource/tiro-devanagari-hindi` (5.3.0) | Body text | Copyright 2020 The Indigo Project Authors |
| `@fontsource/rozha-one` (5.3.0) | Titles (default) | Copyright (c) 2014 Indian Type Foundry |
| `@fontsource/yatra-one` (5.3.0) | Titles with `/pothi?title=yatra` | Copyright 2014 The Yatra Project Authors |

The cover, borders and paper texture are drawn in code (SVG and CSS); no image was downloaded.
