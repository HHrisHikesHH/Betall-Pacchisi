# Project Plan

*Last updated: 2026-11-25*

A practical milestone plan. Decisions live in [DECISIONS.md](DECISIONS.md); current status in [HANDOFF.md](HANDOFF.md). Milestones after the current one are a direction, not a commitment: reorder them as we learn.

## Next tasks: design reset (2026-11-25)

Plan approved in conversation, not yet recorded; brief in [DESIGN_BRIEF.md](DESIGN_BRIEF.md). It runs ahead of the Milestone E order below, which stays as written until the user decides ([packet](DESIGN_DECISION_PACKET.md)).

1. The user answers the decision packet.
2. Style test, no code: image prompts for the frame-opening scene.
3. `/pothi` prototype, one PR; the live site stays untouched.
4. Later: frame writing (workflow gates apply), sound sourcing and register, full redesign.

## Production milestones (approved 2026-11-21)

The **governing plan** for stories and release is [production/PRODUCTION_PLAN.md](production/PRODUCTION_PLAN.md) §11. Its milestones are:

| Milestone | In short |
|---|---|
| **A: Editorial foundation** | Charter, register entries D-038 to D-048, slate audit, frame proposal, `stories/` scaffold; **complete**: PR #12 and PR #9 are merged into `main` (2026-11-20 UTC) and R0 is done |
| **B: Story production** | Frame blueprint; pilots TC-013 and TC-001, then TC-025; one batched A3 packet; the other first-release tales; Hindi then English approvals |
| **C: First release** | Text-only app (application steps R1 to R8 below, which absorb the old M2 to M4); release with the 19 that pass approval |
| **D: Post-launch expansion** | Add tales through the same process until the collection reaches 25 |
| **E: Visual and audio** | Only after the written stories and the frame are complete (the old M5 and M6) |

The engineering milestones below stay as the record of M0–M1 and as the task lists. **Where they differ in order, the production plan governs.** Notable changes: M3 ("first real Hindi tale") is now the two pilots in Milestone B. The story-body format follows staged R1 (D-059): initial implementation from TC-001 Hindi Draft 1, then validation against all actual Hindi drafts selected for the first release; TC-013 is not an R1 prerequisite. Asset slots wait for Milestone E.

## Working method (D-037)

Build the smallest usable version, put it in front of the user, learn, iterate. Open research and creative questions are tracked in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) but block only the work that truly depends on them.

## Milestones

### M0. Research foundation: done
Documentation, source-tradition comparison, North Star, candidate tale catalogue, N1 and N3 evidence (PRs #1 to #8, all merged).

### M1. Reading vertical slice: **done and merged** (PR #9, merge commit `64cb4fa`)
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
- [x] The user merged the branch (PR #9). A browser review by the user is not recorded in the repository.

### M2. Shareable preview and reading polish: later (scheduled in Milestone C, steps R4 to R8; the production plan governs the order)
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
