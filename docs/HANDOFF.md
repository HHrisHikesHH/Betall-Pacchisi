# Handoff

*Last updated: 2026-11-17 (TC-023 decision recorded)*

Read this first when you start a new session on this project. It summarises the current state and links to the authoritative documents. **It is never the authority on a decision.** [DECISIONS.md](DECISIONS.md) is.

## Current status

**The project is at its foundation stage.** Only documentation and research exist.

- **Source research is complete and merged.** PR #1 (foundation), PR #2 (comparative report, [research/SOURCE_TRADITIONS_COMPARISON.md](research/SOURCE_TRADITIONS_COMPARISON.md)) and PR #3 (independent AI review, [research/SOURCE_TRADITIONS_REVIEW.md](research/SOURCE_TRADITIONS_REVIEW.md)) are all merged into `main`. The review's corrections were applied and confirmed. **Limitations remain:** the review was by a separate AI session, not a human specialist. Kṣemendra's text, the Newari version and the Bhaviṣya Purāṇa version were not read directly, and several language-sensitive readings (Hindi IX, XV, XX, XXIV) still need a Hindi/Braj specialist. See the report's §15. No tradition has been selected.
- **North Star established (2026-11-17).** PR #4 is merged into `main`. It added [STORYTELLING_NORTH_STAR.md](STORYTELLING_NORTH_STAR.md) (**D-036 approved**, formerly P-008; **P-005 completed**) and recorded **D-034** (no single-recension binding; combine across traditions under stated rules) and **D-035** (what "the 25 tales" means), all approved by the user on 2026-11-17. **Q-410 is resolved by D-035.** Q-401 is narrowed, not resolved.
- **Candidate tale catalogue (2026-11-17): complete.** [research/CANDIDATE_TALE_CATALOGUE.md](research/CANDIDATE_TALE_CATALOGUE.md) is an inventory of 27 candidate story families (24 shared core, 3 Jambhaladatta-only; the Hindi body-entering plot XXII/XXIV is one family, TC-023, see the decision below), a separate frame comparison, a PROPOSED way to assess the variety of the eventual collection, and a prioritised research list. It draws on the existing comparison report only (no new primary reading) and is not exhaustive. **It does not select, rank, or choose a source.** The catalogue (PR #5) is merged into `main`. **Q-401, Q-408, Q-411 and Q-002 remain open. No final 25 have been selected, and no story drafting has begun.**
- **TC-023 decision (user, 2026-11-17), an application of D-035, not a new decision:** Hindi XXII and XXIV count as **one candidate family and one slot (TC-023), with two distinct recorded source variants**. This is **not** a selection of TC-023 for the final 25; Q-411 stays open. The full reading and comparison (PR #6, [research/HINDI_XXII_XXIV_COMPARISON.md](research/HINDI_XXII_XXIV_COMPARISON.md); AI-assisted, no specialist Hindi/Braj verification) is the evidence record. The question is closed: do not reopen it.
- No story blueprints have been produced and **no story drafting has begun**.
- No art style, artwork, or audio exists.
- No technology has been chosen and no application code exists.
- The application has **no approved name**. "Betall-Pacchisi" is only the repository name.

## The project in one paragraph

This is an immersive, illustrated, sound-supported retelling of the 25 Vikram–Betal tales (Betal Pachisi). The aim is for the whole experience to feel like entering a narrated Indian story, not like visiting a website. Each story works on the surface for any reader and rewards attentive readers with depth that emerges naturally, without forced morals. Hindi is written first and English is a literary adaptation made afterwards. Every story is researched against its textual traditions, revised through at least three drafts, independently critiqued and verified, and approved by the user, who is the creative director. See [PROJECT_VISION.md](PROJECT_VISION.md).

## Approved decisions, in summary

Full wording and IDs are in [DECISIONS.md](DECISIONS.md).

- **Scope:** the 25 Betal Pachisi tales only, for now. **"25 tales" means 25 distinct tales narrated by Betal, with the outer frame not counted (D-035).** Other folk stories are future scope. No name chosen.
- **Experience:** an immersive story, not a conventional website. Layered reading. No forced morals, and room for several interpretations.
- **Narration:** the manner of telling adapts to each moment. Occasional purposeful direct address, never lectures.
- **Creative freedom:** *broad imagination, disciplined relevance*.
- **Language:** Hindi and English at launch, switched with a toggle (not side by side). **Hindi is written, verified, and approved first, and only then adapted into English.** English is a literary adaptation. More languages later, such as Marathi and Kannada.
- **Creative reference (D-036):** [STORYTELLING_NORTH_STAR.md](STORYTELLING_NORTH_STAR.md), including its entertainment-first emphasis and checklist.
- **Source adaptation (D-034):** not bound to one recension. Elements from different traditions may be combined for a stronger story, with essential identity, dilemma, causality and emotional logic preserved, everything recorded, and no invention presented as attested. No primary tradition has been chosen.
- **Sources:** research and compare the traditions before choosing a foundation. Cite editions, track variants, and separate source material from additions. Osho may be studied for technique only: no impersonation, attribution, fabricated quotes, or implied endorsement.
- **Workflow:** research and blueprint, then Drafts 1 to 3 (a minimum), then independent verification, then the user's approval. Separate writer, critic, and verifier roles. Keep every record.
- **Illustration:** cinematic pacing. AI-generated and unmistakably Indian. Traditions to research, not to combine blindly. Coherent direction and consistent characters.
- **Atmosphere:** led by the story (time, weather, setting, emotion, intensity). Changes happen naturally and are not chosen by the reader.
- **Audio:** ambience, instrumental music, narrative sound accents, and deliberate silence. Assets prepared and preloaded, with the loading strategy still to be designed. Licensing checked for every asset. (The principle that audio supports reading without competing, and guardrails such as no lyrics, are PROPOSED: P-006.)
- **Technology:** nothing chosen. Keep it simple and maintainable. Creative content is kept separate from code.
- **Narrator sensibility:** a deeply wise, observant, perceptive storyteller beneath every voice. Insight emerges from the story and is never announced. Narrator identity is undecided.

**Recorded preference, not a decision (PREF-001):** the user currently likes text on the left with one or two illustrations on the right.

## Completed work

| Date | Work |
|---|---|
| 2026-11-16 | Created the documentation foundation in `docs/` on branch `docs/project-foundation` (PR #1). |
| 2026-11-16 | Refinement pass after the user's review: added the narrator sensibility (D-033), corrected the source attribution, and corrected status labels (see *Register corrections* in DECISIONS.md). |
| 2026-11-16 | Initial comparative research (PR #2) into the Vetālapañcaviṃśati / Betal Pachisi traditions, on branch `research/source-traditions-comparison`. Covers Somadeva, Kṣemendra, Śivadāsa, Jambhaladatta, the Braj/Hindi lineage, and other witnesses. Partly complete: Kṣemendra's text, the Newari version, and the Bhaviṣya Purāṇa version were not read directly (see the report's §15). |
| 2026-11-16 | Independent review of R1–R14 by a separate AI session (PR #3). Its corrections C1–C13 were re-checked against the sources and incorporated into the report on PR #2, together with qualified wording on the copyright of historical texts (§11). |
| 2026-11-17 | Second independent-review pass (PR #3 §7) covering the applied C1–C13, R15–R24 and §§9–14. Its corrections A1–A12 and the residual issues in C2, C6 and C12 were re-checked where possible and incorporated into the report on PR #2. Main changes: the Hindi readings in tales XV and XX are now described as partial, translation-sensitive shifts needing a Hindi specialist; Śivadāsa's printed ending is shown to be textually mixed; Kṣemendra's date and priority are marked as not established; the Newari relationship is described as compatible views, not a dispute; evaluative wording in §§9, 12–14 neutralised. |
| 2026-11-17 | Final independent confirmation (PR #3 §8) of the report at `ede52de`: the reviewer found the earlier corrections applied (C12, C13, A6 and A10 were marked "Applied, needs qualification" in PR #3 §8.2; the review did not independently establish every underlying historical finding); nine minor issues R-1 to R-9 listed. All nine applied to PR #2 (unsupported 11th-century dating removed; Kṣemendra count wording aligned between §§6 and 12.A; contradictory phrases in §§12.A and 12.C fixed; Emeneau pp. 66–73 and Barker pp. 182 and 359 cited; authorial inferences labelled; specialist review worded consistently as a recommendation; status statements updated). Later commits `db86261` (Barker coverage row, report §2.2) and `6a2e67a` (S10 source-register entry, report §10) aligned the Barker records with the four page-image passages (IX p. 182, XV p. 270, XX p. 332, XXIV p. 359). |
| 2026-11-17 | PRs #2 and #3 merged into `main` (merge commits `4f545d8`, `3cf6b93`). Started the North Star task: created STORYTELLING_NORTH_STAR.md, added D-034, D-035, P-008 and Q-411, resolved Q-410, and cross-referenced the other documents. An independent read-only Opus review of the branch found no blockers, 4 moderate and 6 minor issues (restated approved wording incomplete; entertainment-first labelling; D-035 vs Q-005; Q-401 over-narrowed; wording-confirmation caveat; source labels; authority pointers; Q-411 piecemeal risk; stale research-report lines; README status). All were corrected in the follow-up commit. |
| 2026-11-17 | PR #4 merged (North Star; D-034, D-035, D-036 approved; P-005 completed). Built [research/CANDIDATE_TALE_CATALOGUE.md](research/CANDIDATE_TALE_CATALOGUE.md) on branch `docs/candidate-tale-catalogue`: inventory only, from the existing report, with no selection, ranking or source choice. |
| 2026-11-17 | PR #5 (catalogue) merged. Read Hindi XXII and XXIV in full against KSS 23 and Ś 22 (PR #6); independent Opus review applied (four substantive findings, including Uhle's manuscript B and recension *f* evidence); narrow factual corrections made to report §8.5 and catalogue §5.A. **The user then decided: XXII and XXIV are one slot (TC-023) with two recorded variants.** |

## Major unresolved questions

The full list is in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md). The most consequential are:

- **Q-401**: which tradition (or combination) is the primary literary foundation (RESEARCH REQUIRED; D-034 removes rigid single-recension binding but does not exclude a single primary tradition with recorded borrowings).
- **Q-411**: which 25 tales form the collection under D-035 (Q-410, the counting definition, is resolved). The candidate pool is mapped in [research/CANDIDATE_TALE_CATALOGUE.md](research/CANDIDATE_TALE_CATALOGUE.md); the choice is the user's.
- **Q-101 / Q-107**: book behaviour (scroll, page-turn, or hybrid) and the reading layout.
- **Q-201 / Q-203**: the final art style and the look of Vikram and Betal.
- **Q-002**: how the frame story is presented.
- **Q-405**: how the independent writer, critic, and verifier roles will be staffed.
- **Q-001**: the application's name.

## Proposals waiting for the user's decision

P-001 to P-004, P-006 and P-007 in [DECISIONS.md](DECISIONS.md#proposals-awaiting-the-users-decision): story record structure, project bibliography, character model sheets, audio asset register, sound-design guardrails, and English adaptation guidelines. (P-005 is completed and P-008 is approved as D-036; both stay in the register as a record.)

## Recommended next task

PR #6 is finished once the user merges it. The user has said the project then moves on; **the next phase is the user's to name**. The open items, in the user's order, are:

1. Choose which catalogue research to do first (the catalogue's §10, N1 to N9; N2 is done). The most useful for the eventual choice is N1, extracting each core tale's question, answer and essential events. Nothing has been commissioned.
2. Decide whether to commission specialist readings (recommended, not required): a Hindi/Braj reader for Hindi IX, XV, XX, XXII and XXIV; a Sanskritist to spot-check KSS, Śivadāsa and Uhle's manuscript B / recension *f* readings; Kṣemendra's text. See the report's §15 and the comparison's §14.
3. Discuss Q-401 (primary foundation or combination; report §13 options 1–6 all remain open), Q-408 (source hierarchy), Q-411 (which 25 tales) and Q-002 (the frame), using the report's §§13–14 and the catalogue.

**Do not begin writing any story or choose a final tradition, the narrator's identity (Q-005), Hindi register (Q-402), art, audio, layout or technology** until the user decides.

## Notes for the next session

- Check `git log` and this file for anything newer before starting.
- Do not start implementation, install dependencies, or choose technology unless the user asks.
- Update this file at the end of your session.
