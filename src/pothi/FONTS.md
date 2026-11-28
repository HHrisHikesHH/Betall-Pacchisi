# Reader fonts

Served from npm packages (`@fontsource/*` 5.3.0), self-hosted by the build. All are licensed under the SIL Open Font License 1.1.

| Package | Use | Copyright line in `LICENSE` |
|---|---|---|
| `@fontsource/tiro-devanagari-hindi` | Body text (default), "पोथी" | Copyright 2020 The Indigo Project Authors |
| `@fontsource/eczar` | Body text, reader's choice "दमदार" (400 only) | Copyright 2014 The Eczar Project Authors |
| `@fontsource/kalam` | Body text, reader's choice "हस्तलिखित" (400 only; taller line gap via `data-font`) | Copyright (c) 2014 Indian Type Foundry |
| `@fontsource/mukta` | Body text, reader's choice "सादा" (400 only) | Copyright (c) 2014 Girish Dalvi, Ek Type |
| `@fontsource/rozha-one` | Titles | Copyright (c) 2014 Indian Type Foundry |
| `@fontsource/yatra-one` | Titles with `?title=yatra` | Copyright 2014 The Yatra Project Authors |

The reader picks the body face in the Aa panel (`src/reader/prefs.ts`); titles always keep Rozha One. Check the copyright lines against each package's `LICENSE` when upgrading.

Noto Serif Devanagari was removed: it looked too like Tiro. A saved choice of it loads as Tiro.
