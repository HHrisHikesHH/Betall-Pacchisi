# Story records

The editorial records for the frame and every tale. The app never reads this tree. Only the text the user has reviewed goes into `content/`, and content and code commits stay separate (D-015).

- **One folder per stable ID** (`TC-NNN`, `FRAME`). The public title, slug and order are front-matter fields, not folder names.
- Each folder holds `brief.md`, `hi/draft.md`, `hi/critique.md` and `hi/revised.md`, plus `research/` where it exists. See [STORY_WORKFLOW.md](../docs/STORY_WORKFLOW.md).
- `brief.md` files written before 2026-11-27 (TC-001, TC-013) are inputs to the new briefs, which replace them.
- Status lives only in [SLATE.md](SLATE.md). Callbacks live in [CALLBACKS.md](CALLBACKS.md).
- The older records (traces, ethics packets, earlier drafts and critiques) were deleted in the reset. They are still readable at commit `58d0060` (D-085).
