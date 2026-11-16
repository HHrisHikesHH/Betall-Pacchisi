# Handoff

*Last updated: 2026-11-16*

Read this first when you start a new session on this project. It summarises the current state and links to the authoritative documents. **It is never the authority on a decision.** [DECISIONS.md](DECISIONS.md) is.

## Current status

**The project is at its foundation stage.** Only documentation and research exist.

- **Source research is in progress, in two open pull requests.**
  - **PR #2** contains the initial comparative report ([research/SOURCE_TRADITIONS_COMPARISON.md](research/SOURCE_TRADITIONS_COMPARISON.md)).
  - **PR #3** contains an independent review of its checklist items R1–R14 (`docs/research/SOURCE_TRADITIONS_REVIEW.md`, on PR #3's branch). That review proposed corrections C1–C13, which have been incorporated into PR #2 and are awaiting verification.
  - **R15–R24** and the report's **§§9–14** still require review.
  - **Q-401** (primary source tradition) and **Q-410** (how the 25 tales are counted) remain open.
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

## Major unresolved questions

The full list is in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md). The most consequential are:

- **Q-401**: which source tradition is the primary literary foundation (RESEARCH REQUIRED; initial research compiled and partly reviewed, see Current status).
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

1. **Check the incorporated corrections.** PR #3 reviewed R1–R14 and proposed corrections C1–C13. The report's author has incorporated them into PR #2 (see the report's *Revision history*). The incorporation itself still awaits verification: someone other than the author should confirm that each correction was applied accurately.
2. **Review what has not been reviewed yet:** items **R15–R24** (dates and authorship, relationships between traditions, bibliography, licences, copyright) and the judgements in **§§9–14** of the report.
3. **Close the gaps that need a human specialist**, where possible: the Hindi original (Barker 1855 or Forbes), the Durgaprasad–Parab print of the KSS, and Kṣemendra's text.
4. **The user then decides Q-401 and Q-410**, using the options in §13 and the questions in §14 of the report.

P-005 (making the source comparison the next task) has not been formally approved; the research was carried out at the user's request. Neither PR #2 nor PR #3 has been merged.

**Do not begin writing any story** until the research has been verified and the user has chosen the literary foundation.

## Notes for the next session

- Check `git log` and this file for anything newer before starting.
- Do not start implementation, install dependencies, or choose technology unless the user asks.
- Update this file at the end of your session.
