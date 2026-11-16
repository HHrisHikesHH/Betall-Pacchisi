# Decision Register

This is the **authoritative record** of project decisions. Other documents explain and apply these decisions. They link here by ID and do not replace this register.

## Status convention

| Status | Meaning | Who can set it |
|---|---|---|
| **APPROVED** | Explicitly decided by the user. Binding on all collaborators. | The user only |
| **PROPOSED** | Recommended by a collaborator and awaiting the user's decision. Not binding. | Any collaborator |
| **OPEN** | Recognised as needing a decision, with no recommendation accepted yet. These live in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md). | Any collaborator |
| **RESEARCH REQUIRED** | Cannot be decided until evidence is gathered. | Any collaborator |
| **SUPERSEDED** | Replaced by a later decision. Keep the entry and link to its replacement. | The user only |
| **REJECTED** | A proposal the user declined. Keep it so the same idea is not proposed again without new reasons. | The user only |

### Rules

- **Never silently turn a proposal into an approved decision.** A proposal moves to APPROVED only after the user explicitly says so. Record the date and how the approval was given.
- Never delete a decision. Mark it SUPERSEDED or REJECTED and say why.
- Give new entries the next free ID. Decisions use `D-###`, proposals use `P-###`, and open questions use `Q-###` (in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md)).
- To change an approved decision, add a new entry that supersedes it. Do not edit the original wording.

**Source of all approvals below:** the user's project foundation brief, 2026-11-16.

---

## Approved decisions

### Scope and identity

| ID | Decision | Status |
|---|---|---|
| D-001 | The project begins with the **25 tales associated with Vikram–Betal (Betal Pachisi)**. | APPROVED |
| D-002 | Other Indian folk stories may come later but are **outside the current scope**. | APPROVED |
| D-003 | **The application's final name has not been decided.** Do not invent a name, and do not treat any working title (including the repository name) as approved. | APPROVED |
| D-004 | The experience as a whole should feel like **entering a beautifully narrated, illustrated Indian story**. It is not a conventional website that happens to contain stories. | APPROVED |
| D-005 | **Layered reading.** A reader can enjoy the surface story without any philosophical background. A more attentive reader should find deeper insight, layers of meaning, human psychology, and perspectives that reward reflection and rereading. | APPROVED |
| D-006 | **No artificial morals, forced philosophy, needless complexity, or filler.** Do not assume a tale has one simple moral. Where appropriate, leave room for several interpretations. | APPROVED |

### Narration and creative freedom

Applied in [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md).

| ID | Decision | Status |
|---|---|---|
| D-007 | **The narrator adapts** to the needs of each story and moment. The voice may be contemplative, expressive, humorous, suspenseful, warm, challenging, or quiet. The narrator is not an outside lecturer or a fixed philosophical character. Narration is part of the story experience. | APPROVED |
| D-008 | **Occasional direct address to the reader** is acceptable when it meaningfully deepens understanding of a character's situation, emotions, stakes, thoughts, dilemma, or decision. It must not become an excuse for long lectures or disconnected commentary. | APPROVED |
| D-009 | **Broad imagination, disciplined relevance.** Writers have substantial freedom to deepen sensory detail, psychology, atmosphere, dialogue, tension, and philosophical implication where this serves the story. Additions must stay faithful to the story's identity, purpose, emotional requirements, and essential events. | APPROVED |

### Language

| ID | Decision | Status |
|---|---|---|
| D-010 | The application **launches in Hindi and English**. | APPROVED |
| D-011 | Readers switch languages with a **toggle**. The two languages are not shown side by side. | APPROVED |
| D-012 | **Hindi first.** Each story goes through research and a shared blueprint, then the Hindi story is written and refined, then it passes Hindi editorial and source verification. **Only after the Hindi story is approved** is the English version created. See [STORY_WORKFLOW.md](STORY_WORKFLOW.md). | APPROVED |
| D-013 | English is a **natural literary adaptation**, not a word-for-word translation. It must preserve the story's emotional impact, meaning, atmosphere, and depth. | APPROVED |
| D-014 | The design should **eventually allow more languages**, such as Marathi and Kannada. These are not launch requirements. | APPROVED |

### Content and engineering separation

| ID | Decision | Status |
|---|---|---|
| D-015 | **Creative content and engineering implementation stay separate.** Software changes must not be able to overwrite approved story content by accident. | APPROVED |

### Sources and research

Applied in [SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md).

| ID | Decision | Status |
|---|---|---|
| D-016 | The textual traditions of Betal Pachisi must be **researched and compared before a primary literary foundation is chosen**. The familiar modern version is not automatically the oldest or the definitive one. | APPROVED |
| D-017 | Research must identify the actual source and edition used, record differences between important variants, separate source material from our own additions, record bibliographic details, and verify historical and textual claims before they appear in a final story. | APPROVED |
| D-018 | Osho's storytelling and discourses may be studied for technique, layered interpretation, and narrative effectiveness. Never impersonate him, attribute new passages or opinions to him, fabricate quotations, or imply his endorsement. Keep genuine references distinct from our own interpretation, and check copyright before reproducing protected material. | APPROVED |

### Editorial workflow

Applied in [STORY_WORKFLOW.md](STORY_WORKFLOW.md).

| ID | Decision | Status |
|---|---|---|
| D-019 | Every story goes through five stages: research and blueprint, Draft 1, Draft 2, Draft 3, then independent verification and approval. **At least three substantial writing iterations are required.** Three is a minimum, not a quota. A one-shot draft is never an acceptable final process. | APPROVED |
| D-020 | **The author must not approve their own work.** Use separate writer, critic, and fact-checker roles wherever practical. An AI model must not be the only check on its own output. | APPROVED |
| D-021 | Keep drafts, critiques, source notes, revision history, and approval status. | APPROVED |
| D-022 | **The user is the final creative director and approval authority.** | APPROVED |

### Illustration and visual identity

Applied in [ART_DIRECTION.md](ART_DIRECTION.md).

| ID | Decision | Status |
|---|---|---|
| D-023 | **Cinematic illustration pacing.** An illustration may stay on screen through a longer passage or scene. Important events and emotional turning points may get dedicated artwork. Illustrations must reinforce the reader's mental imagery and are never generic decoration. | APPROVED |
| D-024 | The artwork is **AI-generated** and **unmistakably Indian** in visual character. It should draw on the richness of Indian visual traditions such as cave paintings and murals, miniature painting, traditional portraits and illustration, and temple and sculptural art. These are **inspirations to research**. They are not a decision to combine every style. | APPROVED |
| D-025 | The project must eventually settle on a **coherent art direction**. Vikram, Betal, and recurring characters must look consistent across illustrations. Style and composition serve each story's setting and emotional atmosphere. *The art style itself is still OPEN; see `Q-201`.* | APPROVED |
| D-026 | **The story leads the atmosphere.** The reading experience responds to time of day, weather, physical setting, emotional atmosphere, and dramatic intensity. Changes happen naturally at fitting moments, not every few paragraphs. Readers do not choose the atmosphere themselves. | APPROVED |

### Audio

Applied in [AUDIO_DIRECTION.md](AUDIO_DIRECTION.md).

| ID | Decision | Status |
|---|---|---|
| D-027 | **Background music and environmental sound are important** to the experience. They include ambience, instrumental music that follows the emotional movement, carefully placed sound accents, and deliberate silence. Audio supports reading and must not compete with it: no lyrics, no distracting volume spikes, and no constant unnecessary music. | APPROVED |
| D-028 | Music and sound assets are **prepared and preloaded** for reading. The loading approach still needs to be designed, and it must not be assumed that every large asset downloads on the first page load. | APPROVED |
| D-029 | **Usage rights and licensing must be checked for every audio asset.** | APPROVED |

### Product and technology

| ID | Decision | Status |
|---|---|---|
| D-030 | **No technology stack or architecture has been approved.** No framework, hosting, database, backend, storage, audio delivery, or authentication choice has been made. The long-term aim is a simple, maintainable application that does not compromise the storytelling. | APPROVED |
| D-031 | The illustrated work at `https://visualsarkarsm.com/work-detail/118` (shared by the user, tracking parameter removed) is **a reference for illustrated storytelling and composition, not a design to copy**. The user liked it to some extent. | APPROVED |
| D-032 | The user **currently likes** text on the left with one or two relevant illustrations on the right, arranged with deliberate composition. This records a preference, **not a final layout decision**. See `Q-101`–`Q-107`. | APPROVED (as a stated preference only) |

---

## Proposals awaiting the user's decision

These recommendations were made while writing this documentation. They are **not binding**.

| ID | Proposal | Where it appears | Status |
|---|---|---|---|
| P-001 | Keep per-story editorial records (blueprint, drafts, critiques, verification reports, approvals) in a dedicated content area of the repository, structured as described in [STORY_WORKFLOW.md](STORY_WORKFLOW.md#proposed-record-keeping-structure). | STORY_WORKFLOW.md | PROPOSED |
| P-002 | Keep a single project bibliography, with one entry per edition actually consulted, and have story notes cite entries by key. | SOURCE_AND_RESEARCH_POLICY.md | PROPOSED |
| P-003 | Keep a character visual reference ("model sheet") for each recurring character before producing story illustrations at scale. | ART_DIRECTION.md | PROPOSED |
| P-004 | Keep an audio asset register that records each asset's source, licence, and attribution requirements. | AUDIO_DIRECTION.md | PROPOSED |
| P-005 | Make a source comparison of the major Betal Pachisi traditions the next major task (see [HANDOFF.md](HANDOFF.md)). | HANDOFF.md | PROPOSED |

## Rejected proposals

None yet.

## Superseded decisions

None yet.
