# Decision Register

This is the **authoritative record** of project decisions. Other documents explain and apply these decisions. They link here by ID and do not replace this register.

## Status convention

The first four statuses are the project status labels used across all documents (see [README.md](README.md#status-labels)). The last two are lifecycle states used only for register entries that are no longer current.

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
- Give new entries the next free ID. Decisions use `D-###`, proposals use `P-###`, recorded user preferences use `PREF-###`, and open questions use `Q-###` (in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md)).
- A proposal that has been carried out without becoming a standing decision is marked **COMPLETED**, with a note, and is kept. A proposal the user approves keeps its P-ID and points to the new D-ID.
- A **recorded preference** is not a decision. See [Recorded user preferences](#recorded-user-preferences).
- To change an approved decision, add a new entry that supersedes it. Do not edit the original wording.

**Source of approvals:** the user's project foundation brief, 2026-11-16, for D-001 to D-033. **D-034 and D-035** record agreements the user stated in the task brief of 2026-11-17 (the user's own words in chat). The register wording is a collaborator's formalisation of them, The user **reviewed and approved D-034 and D-035 exactly as written, and approved P-008 (recorded as D-036), in chat on 2026-11-17**. **D-037** records the user's product-development brief of 2026-11-18 (the user's own words in chat; register wording is a collaborator's summary). **D-038 to D-048** record the user's approval, in chat on 2026-11-21, of the 19-story production plan (revision 2, [production/PRODUCTION_PLAN.md](production/PRODUCTION_PLAN.md)), together with the user's answers to direct questions the same day (rejected and suspended candidates, audience, the 25-tale goal, human review, TC-003, the frame ascetic, the pilots). The register wording is a collaborator's formalisation of that plan. **D-049 to D-053** record the user's replies of 2026-11-21 to the post-merge follow-up review ([production/PLAN_FOLLOWUP_REVIEW.md](production/PLAN_FOLLOWUP_REVIEW.md)); the wording is a collaborator's formalisation.

---

## Approved decisions

### Scope and identity

| ID | Decision | Status |
|---|---|---|
| D-001 | The project begins with the **25 tales associated with Vikram–Betal (Betal Pachisi)**. | APPROVED |
| D-035 | **Definition of "the 25 tales"** (refines D-001; added 2026-11-17). The collection is **25 distinct tales narrated by Betal** (Betal as teller within the story world; this does not decide the project's narrating voice, `Q-005`). The outer Vikram–Betal frame narrative is separate and **not counted** among the 25. A repeated underlying plot is **not automatically a separate tale**; it may count separately only if it has a **genuinely different central dilemma** or is **substantially different as a story**. The final collection must have **meaningful variety** across dilemmas, characters, conflicts, emotions and forms of storytelling. This is the project's editorial definition. It does not claim that any historical tradition counts this way, and it is **not** a selection of which 25 tales (`Q-411`). | APPROVED |
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
| D-033 | **The underlying storyteller's sensibility is constant even though the manner of telling changes.** Beneath every voice, the storyteller is deeply wise, well-read, observant, introspective, and perceptive. Readers should occasionally discover insights an ordinary reading might miss. This does **not** mean the narration always sounds philosophical, solemn, or like a lecture. Insights emerge naturally from events, characters, and circumstances. The narrator does not keep announcing its wisdom or explaining every hidden meaning. The narrator's gender, identity, biography, and whether it is presented as human or AI are **not decided** (`Q-005`). | APPROVED |
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
| D-036 | **The Storytelling North Star is the central creative reference** (approved 2026-11-17; formerly P-008). [STORYTELLING_NORTH_STAR.md](STORYTELLING_NORTH_STAR.md) is adopted as the central creative reference for writers and reviewers, including its entertainment-first emphasis ("Entertainment draws the reader in. Storytelling holds them there. Reflection is what may stay with them.") and its practical checklist (§10). Where it restates an earlier decision, the earlier decision's register entry remains authoritative. | APPROVED |
| D-034 | **Source adaptation: no single-recension binding** (added 2026-11-17). The project is not bound rigidly to one recension or textual tradition. A tale may draw its setup, characters, plot development, dilemma or ending from different traditions, including combinations that never existed historically as one version. Combinations must not be random or merely novel. They must preserve the tale's essential identity and central dilemma, and its causality, character motivation and emotional logic, and be chosen because they make a stronger story. Source editions, variants, borrowed elements and creative additions are tracked internally (D-017). D-034 does not exclude a single primary tradition with recorded borrowings. A creative invention is **never presented as historically attested**. This does **not** choose a primary tradition, a source hierarchy, or the frame's source (`Q-401`, `Q-408`, `Q-002` remain open). | APPROVED |

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
| D-027 | **Background music and environmental sound are important** to the experience. They are meant to make reading more engaging and immersive. Potential elements are environmental sound (rain, wind, leaves, water, thunder, fire, birds), instrumental music that follows the emotional movement, carefully placed narrative sound accents, and silence used deliberately. *The principle that audio supports reading without competing with it, and the specific sound-design guardrails, are PROPOSED (P-006). They are not part of this decision.* | APPROVED |
| D-028 | Music and sound assets are **prepared and preloaded** for reading. The loading approach still needs to be designed, and it must not be assumed that every large asset downloads on the first page load. | APPROVED |
| D-029 | **Usage rights and licensing must be checked for every audio asset.** | APPROVED |

### Product and technology

| ID | Decision | Status |
|---|---|---|
| D-030 | **No technology stack or architecture has been approved.** No framework, hosting, database, backend, storage, audio delivery, or authentication choice has been made. The long-term aim is a simple, maintainable application that does not compromise the storytelling. | APPROVED; first sentence **superseded by D-037** (2026-11-18). The long-term aim still stands. |
| D-031 | The illustrated work at `https://visualsarkarsm.com/work-detail/118` (shared by the user, tracking parameter removed) is **a reference for illustrated storytelling and composition, not a design to copy**. The user liked it to some extent. | APPROVED |

| D-037 | **Move from research-heavy preparation to agile product development** (user brief, 2026-11-18). Build a usable version, learn from it, and improve in iterations; open research questions are not development blockers. The working product assumption is a **browser-based, Hindi-first reading experience**, with English adaptation later. The application shell may be built before the 25 tales are selected or drafted, using **clearly labelled placeholder content** that is never presented as an authentic tale. Collaborators may make **reasonable, reversible technical decisions** without waiting for approval. The first stack chosen under this decision (Vite, React, TypeScript, react-router, Vitest; story files in `content/`) is a **working choice**, not a permanent architecture decision. Out of scope for the first MVP: final selection of tales, story authorship, accounts, AI generation, audio, illustration, payments, CMS, unnecessary backend. | APPROVED |

D-032 is not used. It briefly held the layout preference now recorded as PREF-001.

---

### Production, ethics and release (approved 2026-11-21)

Applied in [ETHICAL_CHARTER.md](ETHICAL_CHARTER.md), [production/PRODUCTION_PLAN.md](production/PRODUCTION_PLAN.md), [production/SLATE_AUDIT.md](production/SLATE_AUDIT.md), [production/FRAME_PROPOSAL.md](production/FRAME_PROPOSAL.md) and [STORY_WORKFLOW.md](STORY_WORKFLOW.md).

| ID | Decision | Status |
|---|---|---|
| D-038 | **First-release slate and release strategy** (formerly P-009). The **first release** is 19 tales, TC-001, 002, 003, 006, 007, 008, 010, 013, 015, 016, 018, 019, 020, 021, 022, 024, 025, 026, 027, plus the continuous Vikram–Betal frame. They are *selected for production*, not approved as adaptations. **Suspended:** TC-004, 005, 012, 014, 017, 023, which may be reconsidered only at the user's request and then go through the full process. **Rejected:** TC-009, 011, excluded unless the user reopens them. A first-release tale is dropped only by the user's decision, and the lead then presents replacement candidates for the user's decision, never a silent substitution. The ethical charter is never weakened to keep the number. **The long-term goal stays 25 distinct tales (D-001, D-035, unchanged).** The remaining tales are added **after launch** through the same selection, ethics and production process. Research on them never delays the first release. Conditions recorded by the user: TC-025 is locked into the working pool; TC-026 and TC-027 are provisional, with their evidence limitations kept. | APPROVED |
| D-039 | **Ethical Editorial Charter** (formerly P-010). [ETHICAL_CHARTER.md](ETHICAL_CHARTER.md) binds all tales, the frame, interface copy and reader-facing notes. It is *informed by* Dr B. R. Ambedkar's documented principles; **no text may claim or imply his endorsement**, and quotations are verified against *Writings and Speeches* before use. It adds constraints on what a story may endorse and **does not rank above D-036**: both apply together, and a real conflict between them is escalated to the user. | APPROVED |
| D-040 | **Caste treatment** (formerly P-011): charter §3.2. **Keep caste visible when it matters, and make sure discrimination is called out and never normalised.** It uses the three-way label test (connected → keep and make visible; encodes worth → only as a character's belief or an in-story demand; idle tag → may drop only after the slate-level pattern audit), no collective judgement of any group, brahmans included, and a slate-wide pattern audit. | APPROVED |
| D-041 | **Verdict-change protocol and honest-difficulty test** (formerly P-012). When a source verdict or its reasoning breaks the charter, the blueprint records the source verdict verbatim, the problem, the adapted verdict and whether the dilemma changed. **The user approves at the blueprint stage (A3) any change to the dilemma, and any answer or reasoning that is our own composition** (for "why" questions the reasoning is the answer). Every adapted tale must pass the honest-difficulty test: a thoughtful reader could defensibly reach a verdict other than Vikram's. An adapted verdict is never presented as attested. | APPROVED |
| D-042 | **Ethics gates in the story workflow** (formerly P-013): an ethical review at the blueprint (A3) and an independent charter check at verification. These are added to D-019's stages and three-draft minimum, which are unchanged. | APPROVED |
| D-043 | **The frame is a continuous arc** (formerly P-014), not a repeated preface. Resolves Q-002 (presentation). The working base is [production/FRAME_PROPOSAL.md](production/FRAME_PROPOSAL.md): KSS structure, no servitude ending, Vikram's killing kept morally live, TC-024 as the fixed climax with later additions inserted before it. **The ascetic is unmarked by sect** (user, 2026-11-21). Betal's motive, the "freed" or "departs" ending and the size of the divine coda stay open until the frame's A3 packet. This does not decide Q-401 or Q-005. | APPROVED |
| D-044 | **Audience: adults** (formerly P-018; user answer, 2026-11-21). Resolves Q-004. Violence and sexuality are handled with literary restraint and not softened for children. Adult content is never an excuse to romanticise coercion or linger on violence for spectacle. | APPROVED |
| D-045 | **Story records and stable IDs** (formerly P-015; supersedes P-001's structure). Editorial records live in a top-level `stories/` tree, separate from `content/` and `src/`. The TC-ID is the permanent research ID, and public titles, slugs and order are fields. Drafts are never overwritten. `approved.md` is immutable and bound by a sha256 of its normalised body, recorded in `status.md` and in the published file. Resolves Q-406. | APPROVED |
| D-046 | **Role staffing and human review** (formerly P-016). Every role runs in a separate AI context, reused only within its own sequence (a writer across drafts, a critic across critiques). **The verifier is always fresh and never the writer.** Review effort scales with risk (ADAPT, MAJOR REWRITE, frame). Human Hindi literary and sensitivity readers are **recommended, not blocking**. Every record states one of *AI review completed*, *Human review completed* (role, date, scope) or *Human review not obtained*, and AI review is never described as human-verified. Resolves Q-405. | APPROVED |
| D-047 | **Live-reader content gate** (formerly P-017). Only `status: approved` texts with a matching approval hash, and clearly labelled placeholders, may appear in a production build. Drafts never do. Adding a tale after launch is a content-only change that cannot alter approved texts. Applies D-015 and narrows Q-506. | APPROVED |
| D-048 | **Story-specific creative directions** (formerly P-019; user, 2026-11-21, stated in chat and **not found in any earlier repository record**). TC-001: preserve the justice-and-inquiry dilemma while examining the accomplices' guilt; the king's duty to inquire must not erase their responsibility. TC-002: protect Mandāravatī's agency without making her responsible for men's threats. TC-003: never reproduce the gendered verdict as a collective judgement; any revised dilemma must stay genuinely difficult; if that cannot be done honestly, recommend rejection (the user chose the conditional rewrite). TC-004: remains suspended. TC-025: locked in; preserve Rūpavatī's humanity and agency; do not endorse the source's explanation that blames her. TC-026: provisional, with the low-confidence warning and the Newari alternative kept in the research record; Mūladeva's answer is the primary direction unless the evidence audit finds a material problem. TC-027: provisional, with the low-confidence warning kept; use the duty-to-protect explanation (a king is accountable for failing to protect citizens entrusted to his authority), clearly marked as not in the source, and invent no explanation for Vidyādhara's murder. Pilots: TC-013 and TC-001, then TC-025. | APPROVED |
| D-049 | **First-release gate amended** (formerly P-022; user, 2026-11-21, in chat: "I want faster delivery with whatever is ready to ship"). The **target stays 19 tales plus the frame, and the long-term goal stays 25** (D-001, D-035). **The first release ships with whatever has completed approval in Hindi and English and is ready**; it is not held for the full 19. Tales not ready (including a rejected TC-003 and any replacement) are added after launch through the same process. If a tale is rejected, the lead still presents replacement candidates for the user's decision, and nothing is substituted silently. The charter and the approval workflow are not weakened. **No minimum release size was set** (see Q-416). Amends the "first release is the 19" gate of D-038 and the "as soon as all 19 pass" wording in PRODUCTION_PLAN §0 and §11.1. | APPROVED |
| D-050 | **Suspended candidates stay suspended until the site is live** (formerly P-023; user, 2026-11-21). TC-004, 005, 012, 014, 017 and 023 are not researched, activated or used as replacements before launch; the "under research" state proposed in P-023 is **not adopted**. They may be reconsidered after launch, or earlier only at the user's explicit request (D-038). | APPROVED |
| D-051 | **Working rules for TC-015 and TC-002** (formerly P-020 and P-021; user, 2026-11-21, "keep it for now"). **TC-015:** Śaśiprabhā's consent is described as given to the lover after the disguise was disclosed, never as informed consent to the scheme; the deceptions were engineered by Mūladeva with each claimant a knowing participant. **TC-002:** Mandāravatī's agency is voice, a labelled wish, and presence, not outcome; no speech of hers ratifies the verdict; the telling does not claim she decides. **Provisional:** the blueprint stage re-tests them and any composed answer goes through the A3 packet (D-041). Details: [production/PLAN_FOLLOWUP_REVIEW.md](production/PLAN_FOLLOWUP_REVIEW.md) §§1–2. | APPROVED (working rules, provisional) |
| D-052 | **Approved-text protection, principle only** (formerly P-024; user, 2026-11-21). (1) A hash stored beside its own text is insufficient. (2) Approved stories must be protected against accidental or unauthorised modification. (3) A minimal, technically verified implementation is proposed and **must exist before the first story is approved, without delaying the pilots**. **The technical architecture is not approved.** The proposal is [production/APPROVED_TEXT_PROTECTION_PROPOSAL.md](production/APPROVED_TEXT_PROTECTION_PROPOSAL.md). No repository setting is changed by this decision. Does not yet amend the mechanism in D-045 and D-047. | APPROVED (principle only) |
| D-053 | **Frame ascetic terminology deferred** (formerly P-025; user, 2026-11-21). **D-043's decision that the antagonist is unmarked by sect remains approved.** The name Kṣāntiśīla and the phrase "sādhak of the burning ground" are **not settled** and are decided after the frame source research (A1) and review. Until then, adaptation drafts avoid *tantrik*, *Kāpālika*, *aghori* and named orders. | APPROVED |

## Recorded user preferences

**These are not decisions.** A preference records the user's current leaning, so collaborators can take it into account when they explore options. The decision it relates to stays **OPEN** until the user decides, and it may then be confirmed, changed, or dropped.

| ID | Preference | Related open questions | Decision status |
|---|---|---|---|
| PREF-001 | The user **currently likes** text on the left with one or two relevant illustrations on the right, arranged with deliberate composition. | `Q-101`, `Q-106`, `Q-107` | OPEN: no layout has been approved |

---

## Proposals awaiting the user's decision

These recommendations were made while writing this documentation. They are **not binding**.

| ID | Proposal | Where it appears | Status |
|---|---|---|---|
| P-001 | Keep per-story editorial records (blueprint, drafts, critiques, verification reports, approvals) in a dedicated content area of the repository, structured as described in [STORY_WORKFLOW.md](STORY_WORKFLOW.md#proposed-record-keeping-structure). | STORY_WORKFLOW.md | **SUPERSEDED by D-045** (2026-11-21): the structure was refined and approved as D-045 (`stories/` tree, stable TC-IDs, hash-bound approvals). |
| P-002 | Keep a single project bibliography, with one entry per edition actually consulted, and have story notes cite entries by key. | SOURCE_AND_RESEARCH_POLICY.md | PROPOSED |
| P-003 | Keep a character visual reference ("model sheet") for each recurring character before producing story illustrations at scale. | ART_DIRECTION.md | PROPOSED |
| P-004 | Keep an audio asset register that records each asset's source, licence, and attribution requirements. | AUDIO_DIRECTION.md | PROPOSED |
| P-005 | Make a source comparison of the major Betal Pachisi traditions the next major task (see [HANDOFF.md](HANDOFF.md)). | HANDOFF.md | **COMPLETED** (2026-11-17): the comparison was carried out at the user's request and merged (PRs #2, #3). This is a record of completion only. P-005 was **not** retroactively approved as a standing decision and was **not** rejected. |
| P-006 | Sound-design principle and guardrails: audio should support reading and never compete with it; no lyrics; avoid distracting volume spikes; avoid constant or unnecessary music; use sound accents sparingly; avoid sound that contradicts the scene. | AUDIO_DIRECTION.md §1, §3 | PROPOSED |
| P-007 | Working guidelines for the English adaptation: freedom to reshape language, imagery, and rhythm; no new plot events; do not settle interpretations the Hindi leaves open; record and review noticeable departures. | EDITORIAL_GUIDE.md §4 | PROPOSED |
| P-008 | Adopt [STORYTELLING_NORTH_STAR.md](STORYTELLING_NORTH_STAR.md) as the central creative reference for writers and reviewers, including its emphasis on entertainment first (guiding line: "Entertainment draws the reader in. Storytelling holds them there. Reflection is what may stay with them."), its checklist in §10, and its wording as a whole. Its content rests on D-005 to D-009, D-012, D-013, D-033 to D-035 and the user's brief of 2026-11-17, but the document as a synthesis is not yet approved. | STORYTELLING_NORTH_STAR.md | **APPROVED → D-036** (2026-11-17) |
| P-009 | First-release slate and release strategy. | production/PRODUCTION_PLAN.md §0, §2 | **APPROVED → D-038** (2026-11-21) |
| P-010 | Ethical Editorial Charter. | ETHICAL_CHARTER.md | **APPROVED → D-039** (2026-11-21) |
| P-011 | Caste treatment rule. | ETHICAL_CHARTER.md §3.2 | **APPROVED → D-040** (2026-11-21) |
| P-012 | Verdict-change protocol and honest-difficulty test. | production/PRODUCTION_PLAN.md §2 | **APPROVED → D-041** (2026-11-21) |
| P-013 | Ethics gates in the workflow. | STORY_WORKFLOW.md | **APPROVED → D-042** (2026-11-21) |
| P-014 | Frame as a continuous arc. | production/FRAME_PROPOSAL.md | **APPROVED → D-043** (2026-11-21) |
| P-015 | Story records and stable IDs (refines P-001). | production/PRODUCTION_PLAN.md §10 | **APPROVED → D-045** (2026-11-21) |
| P-016 | Role staffing and human review. | production/PRODUCTION_PLAN.md §9 | **APPROVED → D-046** (2026-11-21) |
| P-017 | Live-reader content gate. | production/PRODUCTION_PLAN.md §11 | **APPROVED → D-047** (2026-11-21) |
| P-018 | Audience: adults. | production/PRODUCTION_PLAN.md §2 | **APPROVED → D-044** (2026-11-21) |
| P-019 | Story-specific creative directions. | production/SLATE_AUDIT.md §5.0 | **APPROVED → D-048** (2026-11-21) |
| P-020 | **TC-015 consent wording.** Describe Śaśiprabhā's consent as given to the lover after the disguise was disclosed, but not informed consent to the scheme; never as "fully informed". Describe the two deceptions as engineered by Mūladeva with each claimant a knowing participant. Verse-level facts to be settled by the blueprint's A1. | production/PLAN_FOLLOWUP_REVIEW.md §1 | APPROVED → D-051 (working rules, provisional) (2026-11-21) |
| P-021 | **TC-002 agency limits.** Mandāravatī's agency stays in voice, wish and presence, not outcome. Her pre-death wish is labelled our invention. No post-revival speech may ratify the verdict. The telling must not claim she decides. | production/PLAN_FOLLOWUP_REVIEW.md §2 | APPROVED → D-051 (working rules, provisional) (2026-11-21) |
| P-022 | **First-release target stays 19.** A TC-003 rejection triggers replacement candidates and the user's approval. A release with fewer than 19 only by the user's explicit decision. The two sentences that read as "ships with 18" / "or with fewer" are not authority for a smaller release. | production/PLAN_FOLLOWUP_REVIEW.md §3 | APPROVED → D-049 (changed: ship what is ready, 19 stays the target) (2026-11-21) |
| P-023 | **Suspended-candidate states:** *suspended*, *under research (not active)*, *active*. Research may be done for post-launch expansion or to prepare replacement options; no blueprint, draft, content file or slate change until the user's selection approval is recorded. | production/PLAN_FOLLOWUP_REVIEW.md §4 | **Not adopted as proposed.** The user chose: stay suspended until the site is live → D-050 (2026-11-21) |
| P-024 | **Approved-text protection.** A hash beside the text it authenticates is not sufficient. Adopt: baseline comparison against the protected target branch; an append-only approvals ledger anchored by user-created protected tags; the embedded hash demoted to a build consistency check; a protected checker run from the base commit; repository protections; and a revision process that never edits an approved file. | production/PLAN_FOLLOWUP_REVIEW.md §5 | APPROVED in principle → D-052; **architecture not approved** (see the proposal) (2026-11-21) |
| P-025 | **Frame ascetic wording.** Until decided, avoid *tantrik*, *Kāpālika*, *aghori* and any named order, and treat "sādhak of the burning ground" and the name Kṣāntiśīla as provisional. | production/PLAN_FOLLOWUP_REVIEW.md §6 | APPROVED as a deferral → D-053 (2026-11-21) |

## Rejected proposals

None yet.

## Superseded decisions

| Entry | Superseded by | Note |
|---|---|---|
| D-038, "the first release is" the 19 as a release gate | D-049 (2026-11-21) | The target of 19 and the goal of 25 stand; the first release ships with whatever has completed approval. The rest of D-038 (slate, suspended and rejected lists, replacement rule) is unchanged except that D-050 keeps the suspended tales suspended until launch. |
| D-030, first sentence ("No technology stack or architecture has been approved") | D-037 (2026-11-18) | The user authorised reversible technical choices for the MVP. D-030's aim of a simple, maintainable application that does not compromise the storytelling still applies. |

## Register corrections

These corrections were made before the register was first merged, during the user's review of PR #1 on 2026-11-16. Their purpose was to record accurately what had and had not been approved.

| Entry | Correction |
|---|---|
| D-027 | The principle "audio supports reading and does not compete with it" and the guardrails on lyrics, volume spikes, and constant music were moved out of the approved decision into P-006. The user had not separately confirmed them, and confirmed this reclassification on 2026-11-16. |
| D-032 → PREF-001 | The layout preference moved out of the approved decisions into *Recorded user preferences*. |
| D-033 | Added at the user's direction: the narrator's underlying sensibility, from earlier project discussions. |
| P-007 | The English adaptation restrictions in EDITORIAL_GUIDE.md were reclassified from approved to PROPOSED. |
