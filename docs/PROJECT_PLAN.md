# Project Plan

*Last updated: 2026-11-18*

A practical milestone plan. Decisions live in [DECISIONS.md](DECISIONS.md); current status in [HANDOFF.md](HANDOFF.md). Milestones after the current one are a direction, not a commitment: reorder them as we learn.

## Working method (D-037)

Build the smallest usable version, put it in front of the user, learn, iterate. Open research and creative questions are tracked in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) but block only the work that truly depends on them.

## Milestones

### M0. Research foundation: done
Documentation, source-tradition comparison, North Star, candidate tale catalogue, N1 and N3 evidence (PRs #1 to #8, all merged).

### M1. Reading vertical slice: **current** (built on `feature/reading-mvp`, awaiting the user's review)
**Goal:** one complete reading journey with placeholder content.
**Acceptance criteria:**
- [x] Collection landing page with title, intro and the list of entries.
- [x] Open an individual story; comfortable single-column reading layout.
- [x] Previous and next navigation; back to the collection.
- [x] Works at phone (375px) and desktop widths with no horizontal scrolling; light and dark.
- [x] Loading, empty and not-found states.
- [x] Stories are files in `content/`; adding or replacing one needs no code change; invalid files fail tests and the build (the build runs the content tests).
- [x] Placeholder entries are labelled in the list, on the page and in their own text.
- [x] Tests, typecheck and production build pass.
- [ ] User has reviewed it in a browser and merged the branch.

### M2. Shareable preview and reading polish: next
**Next tasks (smallest first):**
1. Deploy the static build to a preview URL so the user can read on their own phone (choose a host; Q-502). Needs SPA fallback for `/kathaen/<slug>` deep links.
2. Typography pass with a real Hindi sample of literary prose (not a tale from the collection, or one marked as a sample): font, size, line height, measure (Q-105).
3. Remember the reader's position (last story opened, scroll position) in the browser only.
4. Reader text-size control, if the review shows a need.
**Dependencies:** user feedback on M1; a hosting choice (reversible).
**Acceptance:** the user can open a link on their phone and read comfortably; typography choices are recorded as working choices.

### M3. First real Hindi tale
**Goal:** replace one placeholder with a tale that has passed the story workflow.
**Dependencies:** the user's choice of at least one tale and how far Q-401/Q-411 must be settled for it; the workflow in [STORY_WORKFLOW.md](STORY_WORKFLOW.md) (research and blueprint, three drafts, independent verification, user approval, D-019 to D-022).
**Acceptance:** the tale's file has `status: approved`, its records exist, and it reads well in the app. App work needed: likely none beyond what the text reveals (long tales, section breaks, the Vetāla's question).

### M4. English edition and language toggle
**Dependencies:** at least one approved Hindi tale and its English adaptation (D-012, D-013).
**Tasks:** `content/stories/en/`, `content/collection.en.json`, `src/i18n/en.ts`, a toggle (D-011), language in the URL, `lang` attributes.
**Acceptance:** a reader switches language on a story and lands on the same story.

### M5. Illustration and layout
**Dependencies:** art direction (Q-201, Q-203), layout and book behaviour (Q-101, Q-106, Q-107; PREF-001).
**Tasks:** image slots in the story format, text-left / illustration-right composition on wide screens, a mobile behaviour, image loading.

### M6. Atmosphere and audio
**Dependencies:** audio direction (P-006, Q-303), licensed assets (D-029), loading strategy (D-028).

## Not planned yet
Accounts, payments, AI generation features, a CMS, a backend. Revisit only if a milestone needs one.
