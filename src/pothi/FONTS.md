# Reader fonts

Served from npm packages (`@fontsource/*` 5.3.0), self-hosted by the build. All are licensed under the SIL Open Font License 1.1.

| Package | Use | Copyright line in `LICENSE` |
|---|---|---|
| `@fontsource/tiro-devanagari-hindi` | Body text (default) | Copyright 2020 The Indigo Project Authors |
| `@fontsource/noto-serif-devanagari` | Body text, reader's choice (400 only) | Copyright 2022 The Noto Project Authors |
| `@fontsource/mukta` | Body text, reader's choice (400 only) | Copyright (c) 2014 Girish Dalvi, Ek Type |
| `@fontsource/rozha-one` | Titles | Copyright (c) 2014 Indian Type Foundry |
| `@fontsource/yatra-one` | Titles with `?title=yatra` | Copyright 2014 The Yatra Project Authors |

The reader picks the body face in the Aa panel (`src/reader/prefs.ts`); titles always keep Rozha One. Check the copyright lines against each package's `LICENSE` when upgrading.
