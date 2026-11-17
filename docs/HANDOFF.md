# Handoff

*Last updated: 2026-11-17 (North Star task)*

Read this first when you start a new session on this project. It summarises the current state and links to the authoritative documents. **It is never the authority on a decision.** [DECISIONS.md](DECISIONS.md) is.

## Current status

**The project is at its foundation stage.** Only documentation and research exist.

- **Source research is complete and merged.** PR #1 (foundation), PR #2 (comparative report, [research/SOURCE_TRADITIONS_COMPARISON.md](research/SOURCE_TRADITIONS_COMPARISON.md)) and PR #3 (independent AI review, [research/SOURCE_TRADITIONS_REVIEW.md](research/SOURCE_TRADITIONS_REVIEW.md)) are all merged into `main`. The review's corrections were applied and confirmed. **Limitations remain:** the review was by a separate AI session, not a human specialist. Kṣemendra's text, the Newari version and the Bhaviṣya Purāṇa version were not read directly, and several language-sensitive readings (Hindi IX, XV, XX, XXIV) still need a Hindi/Braj specialist. See the report's §15. No tradition has been selected.
- **Current phase (2026-11-17): establishing the Storytelling North Star** (branch `docs/storytelling-north-star`, PR to `main`). This adds [STORYTELLING_NORTH_STAR.md](STORYTELLING_NORTH_STAR.md) (PROPOSED, P-008) and records two agreements the user stated: **D-034** (no single-recension binding; combine across traditions under stated rules) and **D-035** (what "the 25 tales" means). **Q-410 is resolved by D-035.** **Q-411** (which 25 tales) is new. Q-401 is narrowed, not resolved.
- No story blueprints have been produced.
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

## Major unresolved questions

The full list is in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md). The most consequential are:

- **Q-401**: which tradition (or combination) is the primary literary foundation (RESEARCH REQUIRED; D-034 removes rigid single-recension binding but does not exclude a single primary tradition with recorded borrowings).
- **Q-411**: which 25 tales form the collection under D-035 (Q-410, the counting definition, is resolved).
- **Q-101 / Q-107**: book behaviour (scroll, page-turn, or hybrid) and the reading layout.
- **Q-201 / Q-203**: the final art style and the look of Vikram and Betal.
- **Q-002**: how the frame story is presented.
- **Q-405**: how the independent writer, critic, and verifier roles will be staffed.
- **Q-001**: the application's name.

## Proposals waiting for the user's decision

P-001 to P-008 in [DECISIONS.md](DECISIONS.md#proposals-awaiting-the-users-decision): story record structure, project bibliography, character model sheets, audio asset register, source comparison as the next task, sound-design guardrails, and English adaptation guidelines, and **P-008 (adopt the North Star as the central creative reference, wording to be confirmed)**.

## Recommended next task

**The user reviews the North Star and the wording of D-034, D-035 and P-008**, and confirms or corrects them. Then, in the user's order:

0. Confirm or close **P-005** (source comparison as next task, now overtaken by the completed research).
1. Decide whether to commission specialist readings (recommended, not required): a Hindi/Braj reader for Hindi IX, XV, XX and XXIV; a Sanskritist to spot-check KSS and Śivadāsa readings; Kṣemendra's text. See the report's §15.
2. Discuss Q-401 (primary foundation or combination; report §13 options 1–6 all remain open), Q-408 (source hierarchy) and Q-411 (which 25 tales), using the report's §§13–14. The report did not settle any of them.

**Do not begin writing any story or choose a final tradition, the narrator's identity (Q-005), Hindi register (Q-402), art, audio, layout or technology** until the user decides.

## Notes for the next session

- Check `git log` and this file for anything newer before starting.
- Do not start implementation, install dependencies, or choose technology unless the user asks.
- Update this file at the end of your session.
