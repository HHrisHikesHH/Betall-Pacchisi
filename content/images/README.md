# Story images

Put each image at `content/images/<story-slug or shared>/<scene-id>.webp` (`.jpg` and `.png` also work). The review panel (`?review=1`) shows each scene's key and the full prompt to copy. Without a file the reader shows a placeholder.

Frame: 1860 × 845, figures in the left 63% (the text covers the right side). See `content/art.json`.

## Motion (optional)

`<scene-id>.motion.json` next to the image adds gentle life without touching the painting. Positions are percentages of the whole painting; each element moves only inside its `window` (percent of one shared `cycle` in seconds), so the scene moves in turns. Keep everything left of the text area (x below about 59).

- `effects`: `breeze` (light passing over a `box`), `glow` (warm light at `x`, `y`, radius `r`), `glint` (a sparkle), `motes` (dust in a `box`). Drawn in code; no files.
- `layers`: transparent cut-outs of the artwork at `<scene-id>/<file>.webp|png`, each with `box`, `motion` (`sway`, `breathe`, `bob`, `blink`), optional `origin` and `amount`. If a layer moves a part that is painted in the base, add `"plate": "plate.webp"` (the painting with that part removed). If any listed file is missing, all layers are skipped and the plain painting shows.

Readers who ask for reduced motion see the still painting. Example: `katha-ka-aarambh/daily-fruit.motion.json`.
