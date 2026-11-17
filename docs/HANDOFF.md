# Handoff

*Last updated: 2026-11-17*

Read this first when you start a new session on this project. It summarises the current state and links to the authoritative documents. **It is never the authority on a decision.** [DECISIONS.md](DECISIONS.md) is.

## Current status

**The project is at its foundation stage.** Only documentation and research exist.

- **Source research is in progress, in two open pull requests.**
  - **PR #2** contains the comparative report ([research/SOURCE_TRADITIONS_COMPARISON.md](research/SOURCE_TRADITIONS_COMPARISON.md)).
  - **PR #3** contains an independent review by a separate AI session (`docs/research/SOURCE_TRADITIONS_REVIEW.md`, on PR #3's branch). It has now covered **all checklist items R1–R24** and the report's **§§9–14**.
  - The review's first-round corrections **C1–C13** were applied to PR #2. The reviewer found 10 verified and 3 partially verified (C2, C6, C12).
  - Its second-round corrections **A1–A12**, and the three residual issues, are incorporated into PR #2.
  - **The final independent confirmation is complete** (PR #3 §8, on PR #2 at `ede52de`). It found C1–C13 and A1–A12 in place and listed nine minor citation, consistency and wording issues (**R-1 to R-9**), which have now been applied to PR #2. Those last fixes have not themselves been re-reviewed. The reviewer judged the report sufficient for the user to **begin discussing** Q-401 and Q-410, not to treat a decision as settled.
  - The independent review is an AI review, **not a human specialist review**. Some claims remain unverified because editions (the 1805 Hindi print, Forbes's text, the Braj, the 1915 KSS print, Kṣemendra's text) or specialist language review were not available.
  - **Q-401** (primary source tradition) and **Q-410** (how the 25 tales are counted) remain open. No source tradition has been selected.
- **No story drafting has begun.**
- No story blueprints have been produced.
- No art style, artwork, or audio exists.
- No technology has been chosen and no application code exists.
- The application has **no approved name**. "Betall-Pacchisi" is only the repository name.

## The project in one paragraph

This is an immersive, illustrated, sound-supported retelling of the 25 Vikram–Betal tales (Betal Pachisi). The aim is for the whole experience to feel like entering a narrated Indian story, not like visiting a website. Each story works on the surface for any reader and rewards attentive readers with depth that emerges naturally, without forced morals. Hindi is written first and English is a literary adaptation made afterwards. Every story is researched against its textual traditions, revised through at least three drafts, independently critiqued and verified, and approved by the user, who is the creative director. See [PROJECT_VISION.md](PROJECT_VISION.md).

## Approved decisions, in summary

Full wording and IDs are in [DECISIONS.md](DECISIONS.md).

- **Scope:** the 25 Betal Pachisi tales only, for now. Other folk stories are future scope. No name chosen.
- **Experience:** an immersive story, not a conventional website. Layered reading. No forced morals, and room for several interpretations.
- **Narration:** the manner of telling adapts to each moment. Occasional purposeful direct address, never lectures.
- **Creative freedom:** *broad imagination, disciplined relevance*.
- **Language:** Hindi and English at launch, switched with a toggle (not side by side). **Hindi is written, verified, and approved first, and only then adapted into English.** English is a literary adaptation. More languages later, such as Marathi and Kannada.
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
| 2026-11-17 | Final independent confirmation (PR #3 §8) of the report at `ede52de`: all earlier corrections confirmed; nine minor issues R-1 to R-9 listed. All nine applied to PR #2 (unsupported 11th-century dating removed; Kṣemendra count wording aligned between §§6 and 12.A; contradictory phrases in §§12.A and 12.C fixed; Emeneau pp. 66–73 and Barker pp. 182 and 359 cited; authorial inferences labelled; specialist review worded consistently as a recommendation; status statements updated). |

## Major unresolved questions

The full list is in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md). The most consequential are:

- **Q-401**: which source tradition is the primary literary foundation (RESEARCH REQUIRED; research compiled, independently reviewed and confirmed by an AI session, see Current status).
- **Q-410**: how the approved "25 tales" are counted, given that the traditions differ.
- **Q-101 / Q-107**: book behaviour (scroll, page-turn, or hybrid) and the reading layout.
- **Q-201 / Q-203**: the final art style and the look of Vikram and Betal.
- **Q-002**: how the frame story is presented.
- **Q-405**: how the independent writer, critic, and verifier roles will be staffed.
- **Q-001**: the application's name.

## Proposals waiting for the user's decision

P-001 to P-007 in [DECISIONS.md](DECISIONS.md#proposals-awaiting-the-users-decision): story record structure, project bibliography, character model sheets, audio asset register, source comparison as the next task, sound-design guardrails, and English adaptation guidelines.

## Recommended next task

**Finish verifying the source research before Q-401 is decided.**

1. **Decide whether to commission specialist readings** (recommended, not an approved requirement): a Hindi/Braj reader for Hindi IX, XV, XX and XXIV, and ideally the 1805 print or Forbes's text; a Sanskritist to spot-check the KSS and Śivadāsa readings; the Durgaprasad–Parab print of the KSS; and Kṣemendra's text.
2. **The user then discusses and decides Q-401 and Q-410**, using the options in §13 and the questions in §14 of the report. The final confirmation (PR #3 §8) judged the report sufficient to begin that discussion, not to treat a decision as settled.
3. **Optionally**, have the R-1 to R-9 fixes spot-checked by someone other than the author; they change wording and citations, not findings.

P-005 (making the source comparison the next task) has not been formally approved; the research was carried out at the user's request. Neither PR #2 nor PR #3 has been merged.

**Do not begin writing any story** until the research has been confirmed and the user has chosen the literary foundation.

## Notes for the next session

- Check `git log` and this file for anything newer before starting.
- Do not start implementation, install dependencies, or choose technology unless the user asks.
- Update this file at the end of your session.
