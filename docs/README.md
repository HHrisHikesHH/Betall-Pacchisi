# Project Documentation

This directory holds the founding documentation for an immersive, illustrated storytelling experience built on the tales of **Vikram and Betal (Betal Pachisi)**. The application's final name has not been chosen. "Betall-Pacchisi" is only the repository name.

These documents exist so that any collaborator can understand what the project is, what has been decided, and what is still open, without needing the original conversations. That includes a human, a new Claude conversation, or a new Claude Code session.

> **Start here if you are new:** an AI collaborator reads [CLAUDE_OPERATING_PROTOCOL.md](CLAUDE_OPERATING_PROTOCOL.md) first (a Claude conversation starts from [AI_SESSION_START.md](AI_SESSION_START.md); a Claude Code session from [../CLAUDE.md](../CLAUDE.md)). Everyone then reads [HANDOFF.md](HANDOFF.md) (a dated snapshot), [PROJECT_VISION.md](PROJECT_VISION.md) and [DECISIONS.md](DECISIONS.md).

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
| [CLAUDE_OPERATING_PROTOCOL.md](CLAUDE_OPERATING_PROTOCOL.md) | **The single operating protocol for all Claude-led work**: Claude conversation (coordinator), Claude Code sessions (executor) and fresh contexts used as independent critics or verifiers (§K). Covers authority and conflict resolution, approval states, startup, Quick/Standard/Deep modes, evidence and research discipline (coverage model, claim-to-evidence minimums), the mandatory story workflow gates, engineering and repository discipline (feature branches, no merging, commit/push/PR only when authorised), task prompts, reviews, session closure and reporting. Claude conversation and Claude Code are two working surfaces, **not** two independent reviewers by default. It is a working instruction set, **not** the authority on decisions, sources, story progress or GitHub state. |
| [AI_SESSION_START.md](AI_SESSION_START.md) | A short startup card to paste into a new Claude conversation or Claude Code session. Points to the protocol; sets no policy. |
| [PROJECT_PLAN.md](PROJECT_PLAN.md) | Product milestones, the current milestone, next tasks, dependencies and acceptance criteria. Never the authority on a decision. |
| [STORYTELLING_NORTH_STAR.md](STORYTELLING_NORTH_STAR.md) | Central creative reference (D-036): the project's storytelling identity, source-adaptation rules and the working definition of the 25 tales, as a practical guide for writers and reviewers. Approved as D-036 (2026-11-17); the decisions it cites are authoritative in DECISIONS.md. |
| [PROJECT_VISION.md](PROJECT_VISION.md) | Why the project exists, the intended reader experience, scope, and guiding principles. |
| [DECISIONS.md](DECISIONS.md) | **The single register of decisions**: approved, proposed, and rejected. If another document disagrees with it, the register wins until the conflict is resolved. |
| [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) | Narrator behaviour, creative freedom, literary standards, tone, and what to avoid in prose. |
| [SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md) | How sources are identified, compared, cited, and verified, plus copyright caution and the policy on researching Osho. |
| [STORY_WORKFLOW.md](STORY_WORKFLOW.md) | The process from research to approval for each story, the roles involved, the three-draft minimum, and record-keeping. |
| [ART_DIRECTION.md](ART_DIRECTION.md) | Visual identity, illustration pacing, character consistency, and atmosphere in visual form. |
| [AUDIO_DIRECTION.md](AUDIO_DIRECTION.md) | Music, ambience, sound accents, silence, preloading expectations, and audio licensing. |
| [DESIGN_BRIEF.md](DESIGN_BRIEF.md) | The user's design brief of 2026-11-25 (look, reading experience, references, answers), recorded in substance, with an anti-drift checklist for design PRs. **Not** a decision register. |
| [DESIGN_DECISION_PACKET.md](DESIGN_DECISION_PACKET.md) | **Draft, PROPOSED** design decisions awaiting the user's answer. Decides nothing until recorded in DECISIONS.md. |
| [HOSTING.md](HOSTING.md) | How the static site is built and served (Cloudflare Pages settings, SPA fallback, GitHub Pages fallback). Provisional (Q-502); records no decision. |
| [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) | The organised list of unresolved creative, product, research, and technical questions. |
| [ETHICAL_CHARTER.md](ETHICAL_CHARTER.md) | The **ethical editorial charter** (D-039, D-040): caste, gender and agency, human dignity and power, informed by Dr B. R. Ambedkar's documented principles, with no claim of his endorsement. Binding on every tale and the frame, alongside the North Star. |
| [production/](production/PRODUCTION_PLAN.md) | The **governing production plan** for the 19-story first release and post-launch expansion to 25 (D-038 to D-048), the [slate audit](production/SLATE_AUDIT.md) with the [independent reviews](production/reviews/), the [frame proposal](production/FRAME_PROPOSAL.md), the post-merge [plan follow-up review](production/PLAN_FOLLOWUP_REVIEW.md), and the [approved-text protection proposal](production/APPROVED_TEXT_PROTECTION_PROPOSAL.md). |
| [../stories/](../stories/README.md) | Per-story **editorial records** (D-045): status, research, blueprints, drafts, critiques, verification, approvals. Kept apart from `content/` and the application code (D-015). |
| [selection/](selection/README.md) | The **selection dossier** for the 27 candidate families: per-candidate evidence and assessment, overlap comparisons, a collection overview, a research triage, a register of outside leads, and the owner's decision sheet. It prepares the choice of the 25 (Q-411) and never makes it. |
| [archive/](archive/) | Superseded working documents kept as history, such as the former [ChatGPT protocol](archive/CHATGPT_OPERATING_PROTOCOL_2026-11-23.md). **They govern nothing.** |
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
