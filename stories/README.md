# Story records

This tree holds the **editorial records** for every tale and for the frame (D-045). It is kept apart from `content/` (what the app reads) and from `src/` (code), so that software changes cannot overwrite creative work (D-015).

- **One folder per stable research ID** (`TC-NNN`, `FRAME`), never renamed. Public titles, slugs and order are fields, not folder names.
- **Workflow:** [docs/STORY_WORKFLOW.md](../docs/STORY_WORKFLOW.md) (§6 for the production additions). **Charter:** [docs/ETHICAL_CHARTER.md](../docs/ETHICAL_CHARTER.md). **Plan:** [docs/production/PRODUCTION_PLAN.md](../docs/production/PRODUCTION_PLAN.md).
- **Never overwrite a draft.** Every revision is a new `draft-N.md`. Each critique names the draft it reviews.
- **`approved.md` is written only on the user's explicit approval and never edited afterwards.** Its normalised body's sha256 is recorded in `status.md` and in the published `content/` file. A later change starts a new revision cycle.
- **Review status** is always one of: AI review completed · Human review completed (role, date, scope) · Human review not obtained. An AI-reviewed text is never described as human-verified.
- Unapproved text never goes into `content/` (D-047).

Current slate: [SLATE.md](SLATE.md).
