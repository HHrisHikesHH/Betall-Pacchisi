# Project Documentation

This directory holds the founding documentation for an immersive, illustrated storytelling experience built on the tales of **Vikram and Betal (Betal Pachisi)**. The application's final name has not been chosen. "Betall-Pacchisi" is only the repository name.

These documents exist so that any collaborator can understand what the project is, what has been decided, and what is still open, without needing the original conversations. That includes a human, a new ChatGPT conversation, or a new Claude Code session.

> **Start here if you are new:** read [HANDOFF.md](HANDOFF.md) first, then [PROJECT_VISION.md](PROJECT_VISION.md) and [DECISIONS.md](DECISIONS.md).

## Status labels

### Project status labels (used in every document)

Every substantial point in these documents carries one of four labels:

| Label | Meaning |
|---|---|
| **APPROVED** | Explicitly decided by the user, who is the creative director. Change only with the user's explicit agreement. |
| **PROPOSED** | A recommendation from a collaborator. It is not binding until the user accepts it. |
| **OPEN** | Needs further discussion. No answer should be assumed. |
| **RESEARCH REQUIRED** | Needs evidence, source checking, or verification before anyone relies on it. |

A point with no label should be read as descriptive context, not as a decision. Where a section derives guidance from an approved decision without the user having approved the specific wording, it is labelled PROPOSED.

### Decision lifecycle states (used only in DECISIONS.md)

[DECISIONS.md](DECISIONS.md) also uses two **historical** states for register entries that are no longer current:

- **SUPERSEDED**: replaced by a later decision.
- **REJECTED**: a proposal the user declined.

These are not project status labels. They record what happened to an entry, and they do not apply to points in other documents.

### Recorded user preferences

A **recorded preference** (`PREF-###`, kept in [DECISIONS.md](DECISIONS.md#recorded-user-preferences)) notes what the user currently leans towards. **It is not a decision.** The related question stays OPEN.

## Documents and what each one governs

| Document | Authoritative for |
|---|---|
| [HANDOFF.md](HANDOFF.md) | Current status, completed work, and the next recommended task. It summarises the others and is never the authority on a decision. |
| [PROJECT_PLAN.md](PROJECT_PLAN.md) | Product milestones, the current milestone, next tasks, dependencies and acceptance criteria. Never the authority on a decision. |
| [STORYTELLING_NORTH_STAR.md](STORYTELLING_NORTH_STAR.md) | Central creative reference (D-036): the project's storytelling identity, source-adaptation rules and the working definition of the 25 tales, as a practical guide for writers and reviewers. Approved as D-036 (2026-11-17); the decisions it cites are authoritative in DECISIONS.md. |
| [PROJECT_VISION.md](PROJECT_VISION.md) | Why the project exists, the intended reader experience, scope, and guiding principles. |
| [DECISIONS.md](DECISIONS.md) | **The single register of decisions**: approved, proposed, and rejected. If another document disagrees with it, the register wins until the conflict is resolved. |
| [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) | Narrator behaviour, creative freedom, literary standards, tone, and what to avoid in prose. |
| [SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md) | How sources are identified, compared, cited, and verified, plus copyright caution and the policy on researching Osho. |
| [STORY_WORKFLOW.md](STORY_WORKFLOW.md) | The process from research to approval for each story, the roles involved, the three-draft minimum, and record-keeping. |
| [ART_DIRECTION.md](ART_DIRECTION.md) | Visual identity, illustration pacing, character consistency, and atmosphere in visual form. |
| [AUDIO_DIRECTION.md](AUDIO_DIRECTION.md) | Music, ambience, sound accents, silence, preloading expectations, and audio licensing. |
| [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) | The organised list of unresolved creative, product, research, and technical questions. |
| [selection/](selection/README.md) | The **selection dossier** for the 27 candidate families: per-candidate evidence and assessment, overlap comparisons, a collection overview, a research triage, a register of outside leads, and the owner's decision sheet. It prepares the choice of the 25 (Q-411) and never makes it. |
| [research/](research/) | Research reports, such as [SOURCE_TRADITIONS_COMPARISON.md](research/SOURCE_TRADITIONS_COMPARISON.md) and the candidate-tale inventory [CANDIDATE_TALE_CATALOGUE.md](research/CANDIDATE_TALE_CATALOGUE.md) (an inventory, not a selection). They supply evidence for decisions but never make them; their status labels show what has been verified. |

## Maintenance rules

1. **Decisions live in one place.** Record every decision in [DECISIONS.md](DECISIONS.md) first. Other documents may explain a decision but should link to its ID (for example `D-004`) rather than restate it in different words.
2. **Never silently promote a proposal.** Something becomes APPROVED only when the user explicitly approves it. Record the date and the source of the approval.
3. **Closing an open question.** When the user resolves an item in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md), mark it resolved there, add the decision to [DECISIONS.md](DECISIONS.md), and update the documents affected.
4. **Avoid duplication.** If you find yourself copying text from one document into another, link to it instead.
5. **Do not invent.** Do not add project details, story content, source citations, or technical choices that nobody has decided or verified. If something is a guess, label it PROPOSED or RESEARCH REQUIRED.
6. **Describe only what exists.** Do not write about future features as though they have been built.
7. **Update HANDOFF.md at the end of each meaningful work session** so the next collaborator knows where things stand.
8. **Keep creative content separate from engineering.** Story drafts, approved texts, and research notes must never live where a software change could overwrite them. See `D-015` in [DECISIONS.md](DECISIONS.md).
