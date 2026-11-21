# Open Questions

This is the organised list of unresolved decisions. **None of these may be treated as decided.** A collaborator may attach a recommendation to a question, marked PROPOSED, but only the user can resolve one.

## How to use this list

- Each question has an ID (`Q-###`). Other documents refer to it by that ID.
- **Status:** `OPEN` (needs discussion) or `RESEARCH REQUIRED` (needs evidence first).
- **Resolving a question:** once the user decides, mark it `RESOLVED → D-###`, add the decision to [DECISIONS.md](DECISIONS.md), and update the documents affected. Do not delete resolved questions.
- **Adding questions:** use the next free number in the right section.

| Range | Area |
|---|---|
| Q-0xx | Identity and scope |
| Q-1xx | Product and reading experience |
| Q-2xx | Art and visuals |
| Q-3xx | Audio |
| Q-4xx | Research and editorial |
| Q-5xx | Technical |

---

## Identity and scope

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-001 | What will the application be called? | OPEN | No name approved (D-003). The repository name is not a working title. |
| Q-002 | How is the outer frame story of King Vikram and the Betal presented around the individual tales: as a story of its own, as an introduction, or woven between tales? | RESOLVED → D-043 | The answer depends partly on Q-401. **Resolved 2026-11-21 (D-043):** the frame is a continuous story arc, not a repeated introduction, with short frame segments bracketing each tale. Working base: [production/FRAME_PROPOSAL.md](production/FRAME_PROPOSAL.md). The frame's *source* stays open (Q-401). |
| Q-003 | In what order will the tales be produced and released? Does the experience launch with all 25 tales, or with a subset? | OPEN (partly resolved by D-038) | **D-038 (2026-11-21):** launch with the 19 first-release tales plus the frame; add the remaining tales after launch. Order within the collection is Q-413. |
| Q-004 | Who is the intended audience (age range, familiarity with the tales), and should any tales or content be handled differently for younger readers? | RESOLVED → D-044 | Some tales may involve mature themes. RESEARCH REQUIRED once sources are compared. **Resolved 2026-11-21 (D-044):** adults. |
| Q-005 | What is the narrator's identity, if any: gender, persona, biography, and whether it is presented as human or AI? Or does it remain an unnamed storytelling presence? | OPEN | The sensibility is approved (D-033). The identity is not. |

## Product and reading experience

**Major future discussions:** how the "book" behaves and how the reading layout works (Q-101 to Q-107).

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-101 | **Book behaviour:** continuous scrolling, page-turning, or a hybrid? | OPEN | A major future discussion. |
| Q-102 | What are the reading navigation and controls (moving forward and back, chapters or scenes, bookmarks, resuming)? | OPEN | Controls should serve immersion (D-004). |
| Q-103 | How often do illustrations appear, and how does the rhythm vary between scenes? | OPEN | Must follow cinematic pacing (D-023). |
| Q-104 | How do illustrations enter, stay, and change as the reader moves through a scene? | OPEN | |
| Q-105 | What are the typography and visual treatment for Hindi (Devanagari) and English text? | OPEN | Both scripts must read beautifully. |
| Q-106 | How does reading behave on mobile, given the preferred text-left, illustrations-right layout? | OPEN | PREF-001 is a preference, not a decision. |
| Q-107 | **Reading layout:** confirm or revise the text-left, illustrations-right composition, and decide whether it varies by scene. | OPEN | A major future discussion. Reference: D-031. Preference: PREF-001. |
| Q-108 | How many shared atmosphere themes are there (for example, combinations of time, weather, and setting), and how are they defined? | OPEN | Atmosphere is story-led (D-026). |
| Q-109 | How does atmosphere show in the interface itself (colour, light, texture, motion) beyond the illustrations and audio? | OPEN | |
| Q-110 | How does the language toggle behave: where it sits, whether it keeps the reader's position, and whether it remembers a preference? | OPEN | Toggle approved (D-011). Behaviour not decided. |
| Q-111 | What accessibility requirements apply (readable contrast, reduced motion, alternatives to audio, screen-reader support)? | OPEN | |
| Q-112 | Is any reader-facing material provided beyond the story itself, such as notes on sources or variants? | OPEN | See also Q-404. |

## Art and visuals

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-201 | What is the final art style? | OPEN / RESEARCH REQUIRED | Research the traditions named in [ART_DIRECTION.md](ART_DIRECTION.md) §3 first. |
| Q-202 | How far may the visual treatment vary between stories within one coherent direction? | OPEN | D-025 |
| Q-203 | How should Vikram, Betal, and other recurring characters look? | OPEN / RESEARCH REQUIRED | Check how the sources describe them. |
| Q-204 | Which image-generation tools or models are used, and how is character consistency maintained? Are prompts and settings recorded? | OPEN | |
| Q-205 | What are the usage rights and licensing terms for AI-generated artwork? | RESEARCH REQUIRED | |

## Audio

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-301 | What is the musical direction (instruments, traditions, character)? | OPEN / RESEARCH REQUIRED | Guardrails such as avoiding lyrics are PROPOSED (P-006). |
| Q-302 | How do sound transitions behave, and how do they line up with the reader's position? | OPEN | |
| Q-303 | What is the audio preloading and loading strategy? | OPEN | Preloading expected (D-028). Not everything should load at first page load. |
| Q-304 | What sound controls do readers get, and is sound on or off by default? | OPEN | |
| Q-305 | Where does the audio come from: commissioned, licensed libraries, generated, or recorded? | OPEN | Licensing checks required (D-029). |

## Research and editorial

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-401 | Which source tradition (or combination) is the primary literary foundation? | RESEARCH REQUIRED | Decide only after comparing traditions (D-016). A comparison is in [research/SOURCE_TRADITIONS_COMPARISON.md](research/SOURCE_TRADITIONS_COMPARISON.md). A separate AI session has reviewed all checklist items R1–R24 and the report's §§9–14 (PR #3). Its corrections C1–C13 and A1–A12 have been incorporated into the report. A final independent confirmation (PR #3 §8) found them in place and listed nine minor issues (R-1 to R-9), which have since been applied; it judged the report sufficient to begin discussing this question, not to settle it. The review is not a human specialist review, and some claims remain unverified. The report does not resolve this question, and no tradition has been selected. **Narrowed by D-034 (2026-11-17):** the project is not bound to a single recension, and tales may combine elements across traditions under stated rules. D-034 does not exclude a single primary tradition with recorded borrowings, and D-016 still anticipates a primary literary foundation. Options 1–6 in report §13 remain open, as do the frame's source, conflict-weighing and Q-408, Q-002. |
| Q-402 | What register of Hindi is used (how Sanskritised, how colloquial), and does it vary by story or character? | OPEN | |
| Q-403 | How many iterations does the English adaptation need, who checks its faithfulness to the Hindi, and how are later Hindi revisions carried into English? | OPEN | |
| Q-404 | Should readers be shown which parts are source and which are our additions, or does this stay internal? | OPEN | Recording it internally is required (D-017). |
| Q-405 | How are the writer, critic, and verifier roles staffed (people, separate AI sessions, different models, or a mix)? | RESOLVED → D-046 | Independence is required (D-020). **Resolved 2026-11-21 (D-046):** separate AI contexts per role, a fresh verifier who is never the writer, risk-based review, human readers recommended and not blocking, with review status always recorded. |
| Q-406 | Where and how are story records stored, and how are tales numbered and named? | RESOLVED → D-045 | See P-001 in [DECISIONS.md](DECISIONS.md). **Resolved 2026-11-21 (D-045):** a top-level `stories/` tree keyed by stable TC-IDs; public titles, slugs and order are fields. |
| Q-407 | What target length or range should a story have? | OPEN | Length should follow the story (no filler, D-006). |
| Q-408 | Which source hierarchy is adopted? | OPEN | Draft hierarchy is PROPOSED in [SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md) §3. |
| Q-409 | What are the copyright position and permissions for any Osho material the project might reference? | RESEARCH REQUIRED | D-018 |
| Q-410 | How should the approved "25 tales" (D-001) be counted, given that traditions differ? **Somadeva:** 24 tales plus a concluding 25th, stated in the text. **Śivadāsa:** 24 tales plus the conclusion counted as the 25th; one manuscript variant has a different 25th story. **Jambhaladatta:** 25 narrated tales in Emeneau's text; **Emeneau hypothesises** (1934, §4) that Jambhaladatta's original had 27, an attributed scholarly hypothesis, not an established fact. **Hindi:** 25 numbered tales, with the body-entering plot told twice (XXII and XXIV) and the final riddle and frame conclusion within XXV. **Kṣemendra:** the edition has 25 headings, but its internal tale count and concordance are not yet verified. | RESOLVED → D-035 | The counting definition is settled by D-035: 25 distinct tales narrated by Betal, the frame excluded, repeated plots counted separately only with a genuinely different dilemma or substantially different story, with meaningful variety. The historical counts listed here are unchanged evidence from the comparison (§6, §14), and D-035 does not claim traditions agree with it. **Which 25 tales** is not resolved: see Q-411. |
| Q-411 | Which 25 tales form the collection, applying D-035? This includes how the 25th unit is filled where a tradition's 25th is the frame's conclusion (Somadeva, Śivadāsa), how the Hindi plot told twice (XXII and XXIV) is judged (*this part is settled by the user's application of D-035: one slot, TC-023, with two variants; see the catalogue §5.A; it does not select TC-023*), and whether any tale comes from outside the traditions compared (constrained by D-001 and D-002: tales associated with Vikram–Betal; other folk stories are out of scope; wholly invented tales would need the user's explicit decision). | OPEN | Raised 2026-11-17. Depends on Q-401, and on the story-by-story variant work. Not to be decided before the user chooses how to proceed. The candidate pool (27 families identified so far, not exhaustive) is mapped in [research/CANDIDATE_TALE_CATALOGUE.md](research/CANDIDATE_TALE_CATALOGUE.md); it is an inventory and resolves nothing. **2026-11-21:** D-038 sets the first release of 19 and keeps the goal of 25. Six places remain for post-launch expansion, from the suspended pool or bounded outside investigation, decided by the user. |
| Q-412 | Should reader-facing material (for example an "about this collection" note) mention the ethical charter or Dr B. R. Ambedkar at all? | OPEN | Raised 2026-11-21. Recommendation: no mention without the user's explicit decision, and never wording that implies endorsement (D-039). |
| Q-413 | In what order are the tales read within the collection? | OPEN | Raised 2026-11-21. Recommendation ([production/FRAME_PROPOSAL.md](production/FRAME_PROPOSAL.md) §8.3): KSS sequence for the tales it contains, TC-024 last; the J-only tales placed for variety; final order approved with the frame blueprint. Order is held in a manifest, so later additions do not renumber links. |
| Q-414 | What is the frame ascetic's name and role wording, given that Kṣāntiśīla is a Buddhist *bhikṣu*'s name in KSS and "sādhak of the burning ground" may still imply a living religious practice? | OPEN (deferred, D-053) | Raised 2026-11-21. Options and a recommendation in [production/PLAN_FOLLOWUP_REVIEW.md](production/PLAN_FOLLOWUP_REVIEW.md) §6, to be decided after the frame's source research (A1) shows what each witness calls him. D-043 ("unmarked by sect") is unchanged. | **Deferred by the user (D-053)** until the frame source research (Session 2) and review.
| Q-415 | Should D-045 and D-047 be amended so that an embedded hash alone is not the protection for approved text, adopting the baseline-comparison, ledger, tag and revision-process design? | PARTLY RESOLVED (principle, D-052) | Raised 2026-11-21. Design and honest limits in [production/PLAN_FOLLOWUP_REVIEW.md](production/PLAN_FOLLOWUP_REVIEW.md) §5. No CI exists yet. Needed before the first story is approved; repository settings are the user's. Sits beside Q-506. | **The principle is approved (D-052); the architecture is not.** Proposal: [production/APPROVED_TEXT_PROTECTION_PROPOSAL.md](production/APPROVED_TEXT_PROTECTION_PROPOSAL.md).
| Q-416 | Is there a minimum for the first release (for example the frame plus a number of tales), or does it ship with whatever is ready (D-049)? | RESOLVED → D-054 | Raised 2026-11-21. D-049 set no minimum. A release with the frame's climax, TC-024, unfinished would break the frame (FRAME_PROPOSAL §8.5), so the user may want TC-024 and the frame to be a condition. Not decided. | **Resolved 2026-11-21 (D-054):** the frame and TC-024 are required; no other minimum.

## Technical

D-037 (2026-11-18) allows reasonable, reversible technical choices for the MVP. The working choices below can be revisited; none is a permanent architecture decision.

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-501 | Which framework and technology stack? | WORKING CHOICE (D-037) | Vite + React + TypeScript + react-router, tested with Vitest. Reversible. Must stay simple and maintainable. |
| Q-502 | Which hosting provider? | OPEN | |
| Q-503 | Is a database or backend needed at all? | OPEN | The MVP is a static site with no backend. |
| Q-504 | How are images and audio stored and delivered? | OPEN | Related to Q-303. |
| Q-505 | Are readers asked to sign in at all? If so, how? | OPEN | |
| Q-506 | How is creative content kept technically separate from code, so approved stories cannot be overwritten by accident? | WORKING CHOICE (D-037) | The requirement is approved (D-015). MVP mechanism: story files live in `content/`, outside `src/`, and are validated at build and test time. Protection of *approved* text (for example review rules or a separate content repository) is still open. |
| Q-507 | How should content be structured so more languages (such as Marathi and Kannada) can be added later? | OPEN | D-014. MVP layout is per-language folders (`content/stories/hi/`) and UI strings per language (`src/i18n/hi.ts`); only Hindi exists. |
