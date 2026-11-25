# Design decision packet: `D-063` to `D-074`

> **ANSWERED AND RECORDED, 2026-11-25. Kept as history.** The user answered every entry in chat on 2026-11-25 at 16:03 IST, and the answers are recorded as D-063 to D-074 in [DECISIONS.md](DECISIONS.md#design-reading-experience-sound-and-order-of-work-approved-2026-11-25). **The register governs**, including which added clauses and choices were taken. This packet was prepared on 2026-11-25 by an AI context from [DESIGN_BRIEF.md](DESIGN_BRIEF.md). Everything below this note is the text as drafted, before the answers: its recommendations, risks, "Settles" lines and statements of what was then open or unrecorded are not current status. The IDs are in code style because they did not yet exist in the register when it was drafted.
>
> At drafting time the only thing already approved was the plan (A: record the vision; B: style test; C: `/pothi` prototype; D: later): the user's "approved", 2026-11-25 15:11 IST, approved in conversation, not recorded in DECISIONS.md (D-063 to D-074 do not record the plan as a whole). Approving the plan did not approve the wording below.

## Answer here

| ID | One-line decision | Recommendation | Needs a choice? |
|---|---|---|---|
| `D-063` | The experience opens as a pothi | Approve | No |
| `D-064` | Phone: landscape, full screen; portrait fallback | Approve | No |
| `D-065` | Page-turn preferred; scroll fallback | Approve | No |
| `D-066` | Aged paper, thin border, painting edge to edge, words on it | Approve, A | Yes: A or B |
| `D-067` | Rajasthani/Mughal miniature for Betal Pachisi | Approve, A | Yes: A or B |
| `D-068` | Only as dark as the storytelling needs | Approve | No |
| `D-069` | Calligraphic titles, readable traditional body face | Approve | No |
| `D-070` | Wisdom in the narration plus a hidden margin layer | Approve, A and keep | Yes: A or B; margin keep or defer |
| `D-071` | Prompt the reader to think before Vikram answers | Approve, A | Yes: A or B |
| `D-072` | Film-like scoring; royalty-free first, AI second | Approve, A | Yes: A or B |
| `D-073` | Phase 2 story work starts with the frame, then TC-001 | Approve, A | Yes: A or B (**sequencing conflict**) |
| `D-074` | Grandpa-narrator opening parked | Approve | No |

**Reply in one line**, for example: `approve all as recommended` or `approve all except 070: B, margin defer; 072: B`.

## The entries

"Wording" is the proposed register text, taken from the brief only. A sentence marked **Added clause** is not from the brief: it limits scope or follows from a choice, and enters the register only if you accept it. "Settles" says what it closes in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) once recorded.

### `D-063` Pothi opening
- **Wording:** The reading experience opens as a pothi.
- **Settles:** Q-101 in part (the book form). Not Q-102.
- **Conflicts and risks:** none found with an approved decision. A pothi cover must not invent an application name (D-003; Q-001 open). How it opens is not decided here.

### `D-064` Landscape full screen with portrait fallback
- **Wording:** On a phone the reader is asked to turn to landscape, and the web app goes full screen "like a video" for full immersion. Portrait still works, though it is less immersive. A laptop is supported too.
- **Settles:** Q-106 in part. Not Q-111.
- **Conflicts and risks:** browser support for full screen and orientation lock varies. **iPhone Safari in particular is UNVERIFIED here**, and no browser was tested for this packet. So the portrait layout must be complete on its own: all text, art and controls usable without full screen or rotation. The current app's 375 px portrait criterion ([PROJECT_PLAN.md](PROJECT_PLAN.md), M1) should keep passing.

### `D-065` Page-turn with scroll fallback
- **Wording:** Page-turn is the preferred way of reading; scroll is the fallback.
- **Settles:** Q-101 in substance (page-turn with a scroll fallback). When the fallback applies, and Q-102 controls, stay open.
- **Conflicts and risks:** pages must reflow across phone sizes and text sizes; accessibility, including reduced motion, is open (Q-111).

### `D-066` Aged paper, thin border, painting edge to edge
- **Wording:** The reading surface is aged paper with a thin border and the painting edge to edge. The words are written on the painted canvas, and the website is the frame of the painting.
- **Settles:** Q-107 and Q-109 in part.
- **Conflicts and risks:** PREF-001 (text on the left, one or two illustrations on the right; [DECISIONS.md](DECISIONS.md#recorded-user-preferences)) **would be displaced**; it is a preference, not a decision, so this is your call. Text on a painting risks readability and contrast, especially for long Hindi passages on a small screen (Q-105, Q-111 open). The Kalidas reference places text in the painting's quiet areas, so each painting needs such an area.
- **Choice:** **A (recommended):** text on the painting replaces PREF-001 on all screens. **B:** text on the painting for phones; keep the left/right layout open for laptops (Q-107). Added clause under B: "The laptop layout stays open."

### `D-067` Art tradition for Betal Pachisi
- **Wording:** The art for Betal Pachisi uses one tradition, Rajasthani/Mughal miniature painting, with faces able to carry emotion. Other collections may use different traditions later.
- **Settles:** Q-201 in part (the tradition; the school or variant waits for the style test). Q-202 not settled (it asks about variation between stories). Not Q-203, Q-204 or Q-205.
- **Conflicts and risks:**
  - Q-201 is marked RESEARCH REQUIRED and asks for the traditions to be researched first ([ART_DIRECTION.md](ART_DIRECTION.md) §3). That research has not been done.
  - D-025 requires consistent characters. A painting for each scene with the same faces, from free tools, is untested: tool and method are open (Q-204), rights need research (Q-205), model sheets are only proposed (P-003). The brief does not say "one painting per scene"; that is a possible reading of "painting edge to edge" and D-023 allows one image to stay through a passage.
  - Images of the ascetic must keep him unmarked by sect (D-043, D-053, D-055 R1; charter §3.2 point 8). Miniature conventions for holy men could mark him.
- **Choice:** **A (recommended):** approve the tradition now; pick the variant after the style test, and settle the consistency method before images are made at scale. **B:** hold this entry until you have seen the test images and a consistency trial.

### `D-068` Darkness rule
- **Wording:** The experience is "as dark as the story and storytelling needs": eerie but beautiful; gore only where it conveys the point, never for its own sake.
- **Added clause (recommended):** This changes no earlier decision: D-044, D-055, D-058 and the ethical charter continue to govern.
- **Settles:** no open question.
- **Conflicts and risks:** the rule is **subject to** D-044 (literary restraint; no lingering on violence for spectacle), D-055 R4 (the heart-and-head offering is restrained, no applause), D-058 item 6 (the rite uses source-attested details only; nothing sect-coded or grotesque added) and [ETHICAL_CHARTER.md](ETHICAL_CHARTER.md) §§3.3 to 3.5. The gore clause must not be read as loosening these. Pictures and sound can exceed restraint even where the words do not. Which rite details a restrained staging keeps is still open ([blueprint](../stories/FRAME/blueprint.md) B22).

### `D-069` Typography approach
- **Wording:** Names and titles use decorative calligraphy; body text uses a readable traditional face. Fonts may be used creatively to convey things without saying them, without distracting.
- **Settles:** Q-105 in part (the approach for Hindi; faces, sizes and English stay open).
- **Conflicts and risks:** the candidates in the brief (Tiro Devanagari Hindi; Rozha One or Yatra One) are **unverified**: not tested, licences not checked. Decorative titles and conjuncts need testing at phone size.

### `D-070` Wisdom layering
- **Wording:** Wisdom is carried inside the narration, and an optional margin layer, hidden by default, is available to interested readers.
- **Added clause under A:** In the narration it is shown through what the narration notices and what happens, not announced. No earlier decision or frame drafting rule changes.
- **Added clause under B:** The narrator may voice small pieces of it. The frame blueprint's voice rule is to be revised to allow this.
- **Settles:** Q-112 in part (a reader-facing layer exists). Not Q-005, not Q-404.
- **Tension 1, wisdom inside the narration, as Osho does:**
  - [Frame blueprint](../stories/FRAME/blueprint.md) §1.3: "The frame never explains itself." §1.4: no address to a listener or reader, no narratorial wisdom (a drafting rule under D-055 R8). D-055 R2: the narration shows Betal's laugh, not his reasons.
  - D-006 (no forced philosophy), D-007 (the narrator is not an outside lecturer), D-008 (direct address only occasionally; never long lectures), D-033 (wisdom is not announced), charter §3.5 (the charter adds no speeches).
  - D-018: Osho's technique may be studied; never imitate or quote him.
  - D-005 (layered reading) supports the aim.
- **Tension 2, margin layer:** D-006, and [PROJECT_VISION.md](PROJECT_VISION.md) "Not a philosophy lecture" and "narrated, not lectured". Hidden by default lowers the risk but notes can still explain meanings the story leaves open. The layer is story content: it needs the story workflow and a content format it does not have (story bodies are plain text).
- **Choice 1:** **A (recommended):** wisdom shown, not announced. **B:** narrator may voice it; needs the frame rule revised and a check of D-006, D-007, D-008 and D-033 first.
- **Choice 2:** **keep (recommended):** approve the margin layer now; its content goes through the story workflow, and no note imposes one reading. **defer:** drop the margin clause from the wording until a sample exists.

### `D-071` Riddle pause
- **Wording:** At a riddle, the reader is at least prompted to think before Vikram's answer.
- **Settles:** no open question.
- **Conflicts and risks:**
  - D-057 Decision B puts the head-burst penalty with the first shipped tale's question, before Vikram answers or falls silent. A pause must not separate or hide that statement.
  - The frame-only first loop (D-057 Decision A; blueprint B10a) has no tale and no riddle, so it gets no pause.
  - At TC-024 Vikram does not know and does not answer (blueprint B16: not to read as wisdom or a wise refusal). A pause there could make his silence look chosen.
  - A prompt written into the frame's narration would address the reader, which blueprint §1.4 rules out.
- **Choice:** **A (recommended):** the pause is made by the interface or pacing, outside story prose, only where Vikram answers; TC-024 is decided at its own review. Added clause: "The prompt is not written into the story prose." **B:** it may be narration (D-008 direct address), tale by tale; in the frame this needs the voice rule revised.

### `D-072` Film-like scoring and sound sourcing order
- **Wording:** Sound is scored like a film, led by emotion; no instrument is ruled out by taste (for example a fierce damru in intense scenes, a bansuri for love or peace, and combinations). Sources are royalty-free first and AI-generated second. Every asset is licence-checked (D-029) and entered in an asset register.
- **Settles:** Q-301 and Q-305 in part. Not Q-302, Q-303 or Q-304.
- **Conflicts and risks:**
  - P-006 guardrails are **still PROPOSED**: no distracting volume spikes, no constant or unnecessary music, sparing accents ([AUDIO_DIRECTION.md](AUDIO_DIRECTION.md) §3). A fierce damru and continuous film scoring could break them. D-027 (silence used deliberately) and D-026 (the story leads) still apply.
  - D-029 requires the licence check; the register itself was only proposed (P-004). This wording would adopt a register for sound.
  - The YouTube Audio Library's terms for use in a web app are **unverified**. Rights in AI-generated audio are unchecked.
  - Today's sound is generated in the browser, off until tapped, silent at set moments, and not yet heard by the user ([LAUNCH_EXCEPTIONS.md](LAUNCH_EXCEPTIONS.md), audio row; handoff F). Coordinator's judgement in handoff F: a synthesiser cannot sound Indian.
  - Real files raise loading questions (D-028, Q-303).
- **Choice:** **A (recommended):** approve the wording; leave P-006 proposed and decide it after you have heard one scored scene. **B:** approve it together with P-006 as limits on the score.

### `D-073` Frame story first in phase 2
- **Wording:** Story work is phase 2, after the app is in good shape. It starts with the frame story, then TC-001.
- **Added clause under A:** Design and app work may run before it; this amends the order in [PRODUCTION_PLAN.md](production/PRODUCTION_PLAN.md) §11.1, which places visual and audio production (Milestone E) after the written stories and the frame.
- **Settles:** Q-003 in part (production order of these two). Not Q-413.
- **Conflicts and risks:**
  - **Sequencing conflict:** the governing plan puts art and audio after the stories and frame (§11.1, repeated in §11.3 "Not now" and [PROJECT_PLAN.md](PROJECT_PLAN.md) "Asset slots wait for Milestone E"). Plan steps B and C run ahead of that. The conversation approval is not yet recorded.
  - The frame is `blueprint-ready`, not approved: some A3 findings stay open, including the rite's kit, and human review is not obtained ([status](../stories/FRAME/status.md)). Workflow gates apply.
  - TC-001's deferred Critique 2 and review (D-062) are deferred, not waived; this order does not cancel them.
  - D-054 (frame and TC-024 required for a full first release) is unchanged.
- **Choice:** **A (recommended):** record the amendment, so the approved plan and the register agree. **B:** record only the story order; then the prototype needs a logged exception in [LAUNCH_EXCEPTIONS.md](LAUNCH_EXCEPTIONS.md) or must wait.

### `D-074` Grandpa-narrator idea parked
- **Wording:** The grandpa-narrator opening idea is parked ("forget grandpa for now."). It is recorded as a parked idea only.
- **Settles:** nothing. Q-005 stays open.
- **Conflicts and risks:** none while parked. If revived, a grandfather narrator would touch Q-005, D-055 R8 and blueprint §1.4.
