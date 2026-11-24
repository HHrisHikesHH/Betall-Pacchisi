# Scene image overrides

Drop a file here named after an art id to replace that scene's built-in SVG. No code change.

- Names: `<art-id>.webp`, `.jpg` or `.png` (if several exist, the last one alphabetically wins; keep one).
- Art ids: `cover`, `lake`, `workshop`, `window`, `cremation`, `king`, `gate` (see `src/scenes/artIds.ts`).
- Shape: landscape 5:3 (for example 1200 x 720); it is cropped to fit, shown at most about 160 px tall on a phone. No text inside the image.
- Files are picked up at build time (`import.meta.glob`); restart `npm run dev` after adding one.
- Alt text and mood still come from the story's `*.scenes.json`.
- Rights: record the source and licence before adding an AI or third-party image (Q-204, Q-205 are open).
