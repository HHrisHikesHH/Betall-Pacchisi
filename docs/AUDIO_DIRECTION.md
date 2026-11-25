# Audio Direction

This document records the role of sound in the reading experience. It applies decisions D-026 to D-029 and D-072 in [DECISIONS.md](DECISIONS.md). It separates three kinds of content:

| Kind | Sections | Status |
|---|---|---|
| Experience direction set by the user | §1 (first part), §2, §4, §5 (first part), §7 (first part) | APPROVED |
| Sound-design principle and recommendations | §1 (second part), §3 | PROPOSED (P-006) |
| Implementation considerations: loading, controls, asset register | §5 (second part), §6, §7 (second part) | PROPOSED or OPEN |

The user's design brief of 2026-11-25 is in [DESIGN_BRIEF.md](DESIGN_BRIEF.md); D-072 bears on sound ([DECISIONS.md](DECISIONS.md); the answered [packet](DESIGN_DECISION_PACKET.md) is history).

## 1. Role of audio

**APPROVED (D-027)**

Background music and environmental sound are **important parts of the experience**. They are meant to make reading more engaging and immersive, helping the reader *be inside* the story.

**PROPOSED (P-006), not an approved requirement:** audio should support reading and never compete with it. This guardrail was recommended during discussions and has not been confirmed by the user.

## 2. Elements

**APPROVED (D-027).** These are the kinds of sound the user has named as potential elements:

| Element | Examples | Purpose |
|---|---|---|
| **Environmental ambience** | Rain, wind, leaves, flowing water, thunder, fire, birds | Place the reader in the setting, time, and weather |
| **Instrumental music** | Music that follows the story's emotional movement | Support mood and emotional change without telling the reader what to feel |
| **Narrative sound accents** | Footsteps, distant sounds | Mark a specific moment, sparingly and with care |
| **Silence** | Deliberate absence of sound | A storytelling technique in its own right: for tension, stillness, or weight |

Silence is a **choice**, not a gap. Some moments are strongest with nothing playing.

**APPROVED (D-072):** sound is scored like a film, led by emotion; no instrument is ruled out by taste (for example a fierce damru in intense scenes, a bansuri for love or peace, and combinations).

## 3. Sound-design guardrails

**PROPOSED (P-006).** These came up as recommendations in project discussions. They follow from the proposed principle in §1 that audio supports reading. The user has not confirmed them.

- **No lyrics.** Words in music compete with words on the page.
- **No distracting volume spikes.**
- **No constant or unnecessary music.** Music should not play just because it can.
- **Sparing sound accents**, so they do not become a gimmick.
- **No audio that contradicts the scene**, such as birdsong during a midnight storm.
- **No music whose cultural character clashes with the Indian identity of the work.** *The musical direction is partly set by D-072; the rest is OPEN (`Q-301`).*

## 4. Story-led changes

**APPROVED (D-026)**

Sound follows the same rule as the rest of the atmosphere. **The story leads.** Changes in ambience or music happen at **natural story moments**, such as a change of scene, weather, time, or emotional intensity. They do not happen every few paragraphs, and the reader does not choose them.

How sound transitions behave (crossfades, how quickly they happen, how they line up with reading position) is OPEN (`Q-302`).

## 5. Preloading and performance

**APPROVED (D-028)**

- The user wants music and sound assets **prepared and preloaded** for the reading experience, so sound is ready when the story needs it.
- **The loading strategy has not been designed.** Do **not** assume every large asset should download on the first page load.

PROPOSED: things the eventual loading design should consider (not decisions):

- What a reader needs before the story starts, compared with what can load while they read.
- Preloading ahead of the reader's position in the story.
- Behaviour on slow or metered connections and on mobile.
- File formats, compression, and the total audio size per story.
- Browser autoplay restrictions, and how the reader first enables sound.

All of these depend on technology choices that have **not** been made (D-030). They are tracked as `Q-303`.

## 6. Reader controls

**OPEN (`Q-304`).** Whether readers can mute, adjust volume, or switch off music and ambience separately, and whether sound is on or off by default, has not been decided. This is separate from atmosphere choice: readers do **not** choose the atmosphere (D-026), but some control over sound may still be appropriate.

## 7. Licensing

**APPROVED (D-029):** usage rights and licensing **must be checked for every audio asset**.

**APPROVED (D-072):** sources are royalty-free first and AI-generated second, and every asset is licence-checked (D-029) and entered in an asset register.

PROPOSED (P-004): keep an **audio asset register** that records, for each file:

- what it is and where it is used,
- its source (composer, recordist, library, or generation tool),
- the licence and its terms (commercial use, modification, redistribution),
- any attribution requirement,
- who checked the licence, and when.

No asset should be used in the experience until its entry is complete. Beyond the sourcing order in D-072, where the audio comes from (for example commissioned or recorded) is OPEN (`Q-305`).
