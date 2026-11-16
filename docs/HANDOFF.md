# Handoff

*Last updated: 2026-11-16*

Read this first when you start a new session on this project. It summarises the current state and links to the authoritative documents. **It is never the authority on a decision.** [DECISIONS.md](DECISIONS.md) is.

## Current status

**The project is at its foundation stage.** Only documentation exists.

- No story research, blueprints, or drafts have been produced.
- No art style, artwork, or audio exists.
- No technology has been chosen and no application code exists.
- The application has **no approved name**. "Betall-Pacchisi" is only the repository name.

## The project in one paragraph

This is an immersive, illustrated, sound-supported retelling of the 25 Vikram–Betal tales (Betal Pachisi). The aim is for the whole experience to feel like entering a narrated Indian story, not like visiting a website. Each story works on the surface for any reader and rewards attentive readers with depth that emerges naturally, without forced morals. Hindi is written first and English is a literary adaptation made afterwards. Every story is researched against its textual traditions, revised through at least three drafts, independently critiqued and verified, and approved by the user, who is the creative director. See [PROJECT_VISION.md](PROJECT_VISION.md).

## Approved decisions, in summary

Full wording and IDs are in [DECISIONS.md](DECISIONS.md).

- **Scope:** the 25 Betal Pachisi tales only, for now. Other folk stories are future scope. No name chosen.
- **Experience:** an immersive story, not a conventional website. Layered reading. No forced morals, and room for several interpretations.
- **Narration:** an adaptive narrator whose voice suits each moment. Occasional purposeful direct address, never lectures.
- **Creative freedom:** *broad imagination, disciplined relevance*.
- **Language:** Hindi and English at launch, switched with a toggle (not side by side). **Hindi is written, verified, and approved first, and only then adapted into English.** English is a literary adaptation. More languages later, such as Marathi and Kannada.
- **Sources:** research and compare the traditions before choosing a foundation. Cite editions, track variants, and separate source material from additions. Osho may be studied for technique only: no impersonation, attribution, fabricated quotes, or implied endorsement.
- **Workflow:** research and blueprint, then Drafts 1 to 3 (a minimum), then independent verification, then the user's approval. Separate writer, critic, and verifier roles. Keep every record.
- **Illustration:** cinematic pacing. AI-generated and unmistakably Indian. Traditions to research, not to combine blindly. Coherent direction and consistent characters.
- **Atmosphere:** led by the story (time, weather, setting, emotion, intensity). Changes happen naturally and are not chosen by the reader.
- **Audio:** ambience, instrumental music, sparing accents, and silence. No lyrics or spikes. Assets prepared and preloaded, with the loading strategy still to be designed. Licensing checked for every asset.
- **Technology:** nothing chosen. Keep it simple and maintainable. Creative content is kept separate from code.
- **Layout:** the user currently *likes* text on the left with one or two illustrations on the right. This is a preference, not a decision.

## Completed work

| Date | Work |
|---|---|
| 2026-11-16 | Created the documentation foundation in `docs/` on branch `docs/project-foundation`. |

## Major unresolved questions

The full list is in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md). The most consequential are:

- **Q-401**: which source tradition is the primary literary foundation (RESEARCH REQUIRED).
- **Q-101 / Q-107**: book behaviour (scroll, page-turn, or hybrid) and the reading layout.
- **Q-201 / Q-203**: the final art style and the look of Vikram and Betal.
- **Q-002**: how the frame story is presented.
- **Q-405**: how the independent writer, critic, and verifier roles will be staffed.
- **Q-001**: the application's name.

## Proposals waiting for the user's decision

P-001 to P-005 in [DECISIONS.md](DECISIONS.md#proposals-awaiting-the-users-decision): story record structure, project bibliography, character model sheets, audio asset register, and making source comparison the next task.

## Recommended next task

**PROPOSED (P-005):** *Comparative survey of the Betal Pachisi source traditions.*

Following [SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md), produce a cited research document that, for each candidate tradition (Kshemendra, Somadeva's *Kathasaritsagara*, Shivadasa, Jambhaladatta, Lallū Lāl and other Braj/Hindi adaptations, and any others found):

1. identifies accessible editions and translations with full bibliographic details,
2. compares the frame story, the number and order of tales, and the conclusions,
3. notes significant differences in characterisation and resolution,
4. marks every claim as verified (with citation) or unverified,
5. ends with options for Q-401 (the primary foundation) for the user to decide, **without deciding it**.

This is a research task. It should not produce any story drafts. Its findings should then be reviewed independently before the user makes a decision.

## Notes for the next session

- Check `git log` and this file for anything newer before starting.
- Do not start implementation, install dependencies, or choose technology unless the user asks.
- Update this file at the end of your session.
