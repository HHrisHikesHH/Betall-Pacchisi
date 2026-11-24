# TC-001 focused A3 re-check of the revised blueprint

> Editorial record (D-042, D-045, D-046). **A focused re-check, not a new full A3 review and not a rewrite.** It contains no scene prose, no dialogue and no Hindi. It approves nothing, decides no user-owned or specialist question, and changes neither the blueprint, the A1 research nor the original A3 report ([blueprint-review.md](blueprint-review.md), "the A3 report"). Scope: [../blueprint.md](../blueprint.md) §13.3. The A3 report is the baseline; findings are cited as "F*n*", conditions as "C*n*".

## 1. Reviewer identity and independence

| Field | Value |
|---|---|
| Stage | **Focused A3 re-check**, TC-001 (ADAPT, substantial): the second half of the A3 gate (A3 report §9.5) |
| Date | 2026-11-24 |
| Reviewer | Claude Code session, model Claude Opus 5.5 (`claude-opus-5-5`). This context cannot see or verify its own effort setting |
| Independence | **A fresh context.** It did not write [blueprint-review.md](blueprint-review.md), did not write or revise [../blueprint.md](../blueprint.md) or [../research/additions.md](../research/additions.md), and took no part in the A3 review or the reconciliation. It had no access to those sessions' working context and read their outputs only as records under review. This meets the separation the blueprint asks for (§13.3, "Role separation") |
| Role after this task | This context is the TC-001 **combined ethics-review context** (PRODUCTION_PLAN §9.2). Under D-046 it is reused later for the ethics and character section of Critique 2. It does not write prose and is not the literary critic |
| Review status | **AI review only. `Human review not obtained`.** No Sanskritist, Hindi specialist or sensitivity reader has read the blueprint, the A3 report or this re-check |
| Instruction | A task prompt pasted by the user (a temporary execution instruction, protocol §A), checked against the live repository before acting |

## 2. What was reviewed

| Object | Exact state |
|---|---|
| Repository state | `origin/main` = **`2426954fce93acd86b1d9db91c13d9dcad6fe5cf`** (merge of PR #23), fetched and verified in this session. Worked on a new branch `story/TC-001-hi-completion-20261124` cut from that commit, in a separate git worktree (the main checkout has an untracked folder that is not part of this task; at the user's choice it was left untouched) |
| **Blueprint reviewed** | `stories/TC-001/blueprint.md` as at `2426954`; last changed in **`ff290a56ab6714d1741f91b6ede5e2020f705698`** (`ff290a5`, the three wording corrections after `dfde325`); git blob `34d9a4d` |
| Ledger reviewed | `stories/TC-001/research/additions.md` as at `2426954`; last changed in **`dfde325`**; git blob `cc4ea71` |
| Baseline | A3 report as committed in `ac64cec` (reviewed `b10641c`); unchanged since |
| Also read | `status.md`, `brief.md`, `research/sources.md` (§3 in full; §§5, 8, 11 at the passages cited below), `research/chronology.md` (Ś15), `stories/SLATE.md`; D-012, D-041, D-042, D-045, D-046, D-048, D-057; STORY_WORKFLOW §6; PRODUCTION_PLAN §§9.1–9.4; Charter §§3.2–3.6; North Star §10 |
| Fresh source reading | To test F1, F2, F9, F10 and F12 against the text rather than the records' account of it, this context re-extracted **KSS 12.8.148–150, 159–160, 166–167, 174–185 and 193–195** from the GRETIL TEI e-text (Durgaprasad–Parab 1915 basis, the edition A1 names; not collated with the print). **The wording matches the blueprint's and A1's citations.** This is an AI reading, not a specialist one. Ś, the Hindi and J were not re-read; they are relied on as A1 records them. Nothing else was re-read |

**Labels:** SRC source fact; INF inference; UNV unverified or unknown; COMP the project's composition; **REC** this reviewer's recommendation.

## 3. Outcome at a glance

| Item | Result |
|---|---|
| **Verdict** | **PASS.** The A3 gate is passed on this revision. The batched D-041 decision packet is prepared: [a3-decision-packet.md](a3-decision-packet.md) |
| Original findings | **15 of 15 addressed:** 13 resolved; F5 and F13 resolved as blueprint rules, with their risk left to be tested in the draft (as the A3 report intended for drafting constraints); F14 correctly routed to the lead's slate audit |
| New observations | **N-1** (MINOR): Option B, as written, would give Padmāvatī a share in her parents' deaths. **N-2** (MINOR): a recorded reading of KSS 150 that bears on the counter-case is not used. Neither blocks the gate; both are carried into the decision packet (§5) |
| Honest-difficulty test | **PASS** (fresh assessment, §6) |
| C1–C8 | C2, C3, C4, C5, C7, C8 **PASS** at blueprint level; C1 PASS at blueprint level, tested in the draft; **C6 cannot be tested on an outline** and stays a drafting risk (§7) |
| Draft 1 | **Not started and not authorised.** It waits for the user's D-041 decisions (§9) |

## 4. Finding-by-finding re-check

"Resolved" means the correction answers the finding's substance, not only that the revision map points somewhere. Section references are to the blueprint unless marked "add." (additions.md).

| # | Severity (A3) | Where the revision answers it | Result | Reason |
|---|---|---|---|---|
| **F1** | MAJOR | §3 (third bullet); §4.1 chain rows "Asking the accuser…" and "Taking her away", and the SRC / INF / UNV table; §9.5 item 3; §9.6; §9.8 (a), (e), (f); §10 counter-case 1, 2, 5; C4; add. IC-19, IC-20 | **Resolved** | See §4.1 below. Both strongest points now lead the counter-case: the accuser's aim and prescription behind the sentence (150, 181 *tadgirā*), and the removal of a living daughter (183–184), stated **without** any claim that the men knew the parents' belief, foresaw the deaths or withheld a message (§4.1 UNV row; §10 item 2). The knowledge-conditional framing is gone from C4. Vikram's reply is set out and labelled contestable. Residual points: N-2, and the observation in §4.1 (iii) |
| **F2** | MODERATE | §2.3 "King's checks"; B15; §4.1 (two rows, split); §5.5; §9.5 item 4; §10 king's case 2–3, counter-case 4; C2; R9; OQ-21; add. SE-14, IC-09 | **Resolved** | Verified against 178 (*buddhvā tanmauktikāvalīm*), 179 (the old woman's report), 180 (*utpannaniścayaḥ*, then *svayaṃ tasyāntikaṃ gatvā*) and 181 (*pṛṣṭvā ca nigrahaṃ … tadgirā*). Every list now gives two checks bearing on guilt, then the conviction, then a consultation **on punishment**. No passage still counts the visit as an inquiry into guilt |
| **F3** | MODERATE | §3 (fourth bullet); §9.5 item 5 (a)–(d); §9.6; §9.8 (b); C7 | **Resolved** | The answer target (the king) is kept apart from the allocation of these deaths, which is left open as Option A or B for the user. Items 1–4 do not presuppose either: item 3's reply ("they do not transfer the sentence away") is compatible with both, and item 1 speaks only of the accomplices' other acts. **No section silently decides between A and B.** See N-1 on how Option B is worded |
| **F4** | MODERATE | §2.3 "Parents"; B19; §5.6; §7.3; §8.1 note; R1; OQ-20; §9.8 (h); add. IC-12 | **Resolved** | The possible *anugamana* sense is recorded as a possibility (UNV), not as fact. The manner of the mother's death stays unstated; no devotional or *sati*-like diction; the death is never framed as virtue. No manner of death is invented, and no decision is forced: (h) waits for a Sanskritist. The trace of harm is not erased, because "followed him" stays (Charter §3.2.5) |
| **F5** | MODERATE | B17–B18; §5.1 "May be added" (placement); R2 | **Resolved as a drafting rule** | Her grief at 183 (*śocantīm*, verified) stays visible; no relief, welcome, recognition or expectation of rescue; the supposition is described as neither hope nor betrayal. The blueprint controls the sequence, which was the gap. Whether the prose meets it is for Draft 1, Critique 2 and Stage C |
| **F6** | MODERATE | §9.5 item 2 | **Resolved** | "The same standard" now covers evidence: the only charge comes from the accuser (148–149, CHAR), was never put to her, and the reasoning does not assign guilt on an untested accuser's word while faulting the king for doing so. It does not over-correct into clearing her (C8 kept), and it limits what Vikram may say about the food |
| **F7** | MODERATE | §5.1 "Inferred"; §8.3 closing limit; R3 | **Resolved** | The *dhūrtā* echo, if used, is never applied to her alone, never as the narrator's verdict and never in a "women's wiles" form; the Hindi trigger words are named. Her intelligence is shown as intelligence |
| **F8** | MODERATE | §6 father row and notes; §5.6; §7.3; R4 | **Resolved** | The household is substantial and skilled, with no invented poverty, and no character is given caste or class contempt as a motive. The asymmetry is political power. (B5's "poor" refers to the servant, which is the source's description at 93–99, not the family) |
| **F9** | MINOR | §2.3 "King's omissions"; B13; B15; §4.1; §5.5; §9.5 item 4; §10 king's case 2; R9; add. IC-09 | **Resolved** | 167 verified: the guards seize him while "seeking the thief because of the report of the robbery of the *dantaghāṭa*'s daughter" (*dantaghāṭasutāmoṣajñapteś cauregaveṣibhiḥ*). The revision records the report and says, everywhere, that who made it and whether the king knew of it are not recorded. **Drafting note:** listing "no use of the report" among the king's omissions leans towards implying he had it; R9 forbids saying so. Critique 2 should check this |
| **F10** | MINOR | §2.3 "Verdict"; B16; §4.1; §5.6; §10 king's case 4; C5; add. IC-09 | **Resolved** | 181 verified: *pitṛbhyāṃ śocyamānāyāḥ* places their lament at the expulsion. Every former "witness" or "present" is now replaced or labelled INF at most, and the tale may not imply they could have been questioned before the sentence |
| **F11** | MINOR | §5.2 (preamble and table); R5; OQ-12 | **Resolved** | Three different evidence states (recorded desire and initiative; a rite named by the narrator; grief and no recorded consent), not "three silences". No consent is inferred from desire, the rite's label or the later life, and the desire the narrator records is not erased |
| **F12** | MINOR | §5.2 "Marking"; B12; R6; add. CB-N11 | **Resolved** | 159–160 verified: the narrator reports her *madyaniśceṣṭām*, marked and stripped of ornaments, with no sexual contact narrated. CB-N11 records Ś's sequence (union, then *vaikalya*, then the nail-mark; Ś p. 11 ll. 1–5, matching chronology.md Ś15) as not adopted. R6 makes the drink the prince's planned incapacitation (154), never her choice or fault |
| **F13** | MINOR | §2.3 "False account"; B14; §11 rows "Community-level stereotyping" and "*ḍākinī* accusation"; R7; add. IC-15 | **Resolved as a drafting rule** | The account keeps the mechanics that make it persuasive (the mark and where it is, the necklace from her throat, the prince's heart that echoes the king's loss: 174–177, verified) and loses sect markers. The mirroring between the lie (175 *pānamattā*, 176 the trident) and the violation stays legible; no horror set-piece. The living harm of false witchcraft accusations is named. **Drafting note:** "a deity" and the *ḍākinī* charge are still religious content; R7 governs how generic they become, and Critique 2 should check that the account stays both persuasive and unmarked |
| **F14** | MINOR (lead) | §11 slate-level notes; [../../../docs/HANDOFF.md](../../../docs/HANDOFF.md) "Recommended next task" | **Correctly routed** | Recorded as a lead-level item for the blueprint-stage pattern audit (Charter §3.2.9), not a TC-001 defect; SLATE_AUDIT is rightly not changed. It remains outstanding at slate level |
| **F15** | MINOR | B6; R8; add. IC-04 | **Resolved** | The servant's report stays unreliable as told, the narration never confirms the decoded rebuke, and only her own explicit act at B7 carries willingness. That prevents a "no means yes" template without denying her purposeful signals (the lake signs, B3, and the entry, B7, stay hers). No gendered generalisation is introduced |

### 4.1 F1 in detail

**(i) The accuser's prescribed sentence.** 150 is SRC: having alleged the poison, the minister's son tells the prince to give up his anger at her and says he will think out a means for carrying her off (*kuryās tvaṃ haraṇe yuktiṃ vakṣyāmy ālocya yām aham*). 180–181 are SRC: the king goes to the "ascetic", asks about her punishment and expels her on his word. The blueprint states both as facts and labels the connection, that the sentence was the route by which the aim was achieved, as INF (§4.1 table; §10 counter-case 1). It also records, correctly, that the source does not say the minister's son had this sentence in mind before he was asked (§4.1 UNV row). **Resolved, and labelled correctly.**

**(ii) The removal.** 183–184 are SRC: the two men, out of disguise and mounted, come to her grieving at day's end, console her, set her on a horse and take her to their kingdom, where the prince lives content. §10 counter-case 2 now argues that taking a living daughter to another kingdom may have made it harder for her parents to learn she lived, and that the narrative shows no one else learning it (INF from silence). It says plainly that this argument needs no claim about the men's knowledge, foresight or withholding. **The revision also declined one overstatement in the A3 report:** the A3 report's §4.2 item 3 called the removal "secret", but 183–184 contain no word for secrecy, and the blueprint now records "the source does not say the removal was secret" (§4.1 UNV row; add. IC-19). This re-check agrees with the blueprint over the A3 report on that point.

**(iii) Is the alternative now at full strength?** Mostly yes. One asymmetry of tone remains, and it is driven by the evidence, not by bias. The king's route is stated firmly ("makes her parents' grief … predictable", §10 king's case 5), because the parents' recorded belief ("eaten in the forest", 185) is about the sentence's content. The removal's route is hedged ("may have made it harder"), because nothing about it is narrated. This is honest labelling, not an understatement. The packet should present item 2 at its strongest honest form: the two men are the only people the tale shows knowing that she lived, and her parents died believing her dead (decision packet, item F).

**(iv) Does Vikram's reply answer the alternative without dismissing it?** §9.5 item 3 gives him three grounds: a judge owns the sentence he adopts; taking the punishment from the sole accuser is the very fault the source names (194–195); and the fatal belief is a belief about what that sentence would bring (181, 185). This answers counter-case item 1 directly. It answers item 2 **only by locating the origin of the belief in the sentence**. It does not refute the argument that the belief persisted while the two men knew the truth. The blueprint is explicit that the reply "is an argument a reader may reject" and that the alternative must stand in the events (§9.5 item 3, "What the reasoning does not claim"; C4; F5). **That is not a defect.** A reply that defeated item 2 outright would weaken the honest-difficulty test. But the user should approve the reasoning knowing that this is how far it goes (packet, items A and E).

## 5. New observations from the re-check (not in the A3 report)

| ID | Severity | Observation | Effect and handling |
|---|---|---|---|
| **N-1** | MINOR | §9.5 item 5 (d) defines **Option B** as "the king, with **the three** sharing responsibility for these deaths". In KSS 187 "the three" are the minister's son, the prince **and Padmāvatī**. As worded, Option B would assign her a share in her own parents' deaths. That contradicts §9.5 item 2 ("her presence in the question is never treated as implying a share in her parents' deaths") and risks the victim-blame Charter §3.3.3 forbids. The blueprint does not flag it | **Not blocking**, because Option B is a user choice, not a blueprint commitment. The decision packet (item B) shows the problem and asks the user, if B is preferred, whether it covers **the two men only**. After the user decides, the blueprint's §9.5 item 5 should be corrected to match (a reconciliation task, not done here) |
| **N-2** | MINOR | KSS 150's first half, *tan muñca manyum etasyāṃ bandhutyāgān mahātmanaḥ*, has two recorded readings (sources.md §11.1, row 12.8.150). A1's parse is "because of the abandonment of kin". **Tawney (p. 240) reads it as an instruction to persuade her to leave her relations.** On Tawney's reading, separation from her family was part of the scheme's design from 150. That would strengthen counter-case item 1 **without** any claim that the men foresaw the parents' belief or deaths. Neither the blueprint nor the A3 report uses or mentions this | **Not blocking.** The honest-difficulty test passes without it (§6), and the reading is UNV. The packet (item F) presents it as an unresolved reading, so the user sees the counter-case's maximum. **REC:** add *bandhutyāgān mahātmanaḥ* (150) to the Sanskritist questions (with OQ-6 or OQ-21) at the next blueprint reconciliation. Until then the tale and the reasoning must not rely on either reading |

**Noted, no action:** the blueprint's header and §§1, 10 and 13.3 still say "focused A3 re-check pending". That was true when they were written. They were not edited, because this task does not permit edits to the blueprint. The status records (status.md, SLATE.md, HANDOFF.md) now carry the result.

## 6. Honest-difficulty test (D-041; Charter §3.5): fresh assessment

The test: could a thoughtful reader defensibly reach a verdict other than Vikram's, on the actual events and reasoning?

**The alternative, at its strongest honest form, on the events the blueprint keeps (KSS order).**
1. The minister's son's own words set the aim: carry her off (150, SRC). The king took the punishment from him and expelled her on his word (181 *tadgirā*, SRC). The sentence was the accuser's prescription, and it delivered the accuser's aim (INF).
2. The deception was built to beat an ordinary judge. It predicted a mark that the king's own trusted woman then found (175–179, SRC). Nothing in front of him pointed at the holy man as the one who made it.
3. Every link but the sentence is theirs: the drink, the iron, the theft, the sale, the lie (154–177, SRC). Their acts are a necessary condition of the deaths.
4. When the parents died believing her eaten, the two men had her alive in their own kingdom (183–185, SRC). The tale shows no one else knowing she lived (INF from silence). Their contentment and the parents' deaths share one verse's "but" (184–185).
5. (Unresolved reading, N-2) On Tawney's reading of 150, separating her from her relations was part of the plan.

A reader who holds that whoever designs and steers a harmful outcome owns its consequences more than the deceived instrument has a real, event-based argument. Points 1 and 4 rest on recorded events. **The alternative is defensible, not merely theoretical.**

**Vikram's verdict is also defensible.** A judge owns the sentence he adopts. Letting the only accuser set the punishment is the procedural fault the source itself names (194–195). The parents' fatal belief is about the forest, which is what the sentence consisted of (181–182, 185). A reader who holds that power carries the duty to examine, and that grief makes this duty heavier, not lighter, has an equally real argument.

**Neither side is a straw man.** The revision gives the counter-case the accuser's prescription and the removal; it does not weaken Betal (C4, F5). It does not make Vikram obviously right: his reply is labelled contestable, and it does not dispose of point 4. It does not tilt the reader through Padmāvatī: the poison stays unresolved (C8) and the evidence standard is the same for her (F6).

**Result: PASS.** It is not conditional on any further blueprint correction. It remains conditional, as every blueprint-stage result is, on the draft meeting C1–C8 (§7), which Draft 2's ethics section and Stage C must test again.

## 7. Conditions C1–C8: reassessment

| | Condition | A3 result | Re-check result | Reason |
|---|---|---|---|---|
| C1 | The king's evidence is persuasive | AT RISK | **PASS at blueprint level; drafting test** | R7 keeps the account's mechanics and removes only sect markers (F13). Whether the prose persuades is for the draft |
| C2 | His checks are shown as real checks | AT RISK | **PASS** | Two checks, conviction, then the consultation on punishment, consistently (F2); verified against 178–181 |
| C3 | The accomplices' wrongs are fully visible | PASS | **PASS** | Unchanged: B10–B14, §4.1, §9.5 item 1, IC-13 |
| C4 | The sentence is central; the alternative's two strongest points stand in the events | AT RISK | **PASS** | Restated as A3 required: the removal is neither a proven second cause nor a knowledge-conditional omission; nothing is added about a message (F1) |
| C5 | Omissions specific; reach not overclaimed | PASS with corrections | **PASS** | 167 added with its limits (F9); the parents' presence labelled INF (F10); drafting note on 167 (§4, F9) |
| C6 | No narrator or character states the thesis | AT RISK (drafting) | **AT RISK (drafting); cannot be tested on an outline** | R9 gives the method (who is summoned and heard; no list by the narrator; no statecraft lecture). If the user extends Betal's objection (packet item E), the risk of speeches rises, and Critique 2 must check both voices |
| C7 | The answer never turns on the accomplices being lesser or innocent; scope stated | AT RISK | **PASS**, with N-1 | The scope is stated in four parts and left to the user (F3). N-1 is carried in the packet |
| C8 | The poison stays unresolved | PASS | **PASS** | IC-06 unchanged; F6 does not clear her |

Failure signs F1–F5 (blueprint §10): none is present in the revised blueprint. F3 ("all equally guilty") would become a live risk only if the user chooses Option B, and more so if Option B includes Padmāvatī (N-1). F4 and F5 stay drafting risks.

## 8. Limitations and review status

- **Human and specialist review: not obtained.** The original A3 and this re-check are both AI reviews. Neither is a human, Sanskritist, Hindi-specialist or sensitivity-reader review, and neither is the Stage C verifier. Record status: `Human review not obtained`.
- **Source coverage, unchanged from sources.md §3:** KSS read in full by AI from an e-text not collated with the 1915 print; Ś and the Hindi read on page images by AI; J's translation pp. 19–25 through OCR only; BKM and Ryder not read. This re-check's own reading covers only the KSS verses listed in §2.
- **Readings this re-check relied on, all still for a Sanskritist:** 150 (*haraṇe yuktim*; and *bandhutyāgān mahātmanaḥ*, N-2); 167 *jñapti*; 180 *utpannaniścayaḥ*; 181 *nigraha*, *tadgirā*; 182cd (OQ-4); 185 *anujagāma*, *vyapādi* (OQ-20). If a specialist reads 180–181 otherwise, F2 and the counter-case must be re-examined (OQ-21).
- **The mother's manner of death stays unstated.** Item (h) is deferred until a qualified specialist reading exists.
- **Drafting-stage risks remain by design:** C1, C6, F5, F9 (the robbery report), F13, F4 (diction) and F7 can only be tested on Hindi text. They go to Critique 2's ethics section (this context) and to Stage C.
- **Q-401, Q-402, Q-408 and Q-413 are not touched.** Q-402 will be calibrated on the Hindi Draft 1 sample; Q-413 does not block drafting.

## 9. Verdict and next step

**Verdict: PASS.** The revision resolves the A3 report's MAJOR finding and all seven MODERATE findings. It resolves or correctly routes all seven MINOR findings. The honest-difficulty test passes on a fresh assessment. No ESCALATE trigger applies: no rejection is recommended; nothing destroys the tale's identity; no unresolved source claim decides the story; there is no unresolved ethical dissent (this re-check agrees with the A3 report's direction, and departs from it only on "secret", in the blueprint's favour); no irreversible action is proposed. The dilemma-change questions are already routed to the user under D-041.

**The A3 gate is passed. TC-001 is not complete, and nothing in the blueprint is approved.**

**Next:** the user answers the batched D-041 decision packet, [a3-decision-packet.md](a3-decision-packet.md). After that, a narrow blueprint reconciliation records the decisions (including N-1 and N-2), and only then does Hindi Draft 1 begin, with its register sample (Q-402). **Draft 1 must not start before the user's decisions are explicitly given.**
