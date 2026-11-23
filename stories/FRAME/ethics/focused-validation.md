# FRAME focused validation of blueprint revision 2

> Editorial record (D-045). **AI review only. `Human review not obtained`.** Not Sanskritist, Hindi literary, sensitivity or Tantra-studies validation. 2026-11-22.

## 1. How it was run (stated as it happened)

| Item | Fact |
|---|---|
| Reviewer | A fresh subagent context started from the integrating session, given the file list, the decision summaries and nine questions, and **not** the integrating session's conclusions. It was told not to edit files and did not. |
| Model | Requested Opus 5.5 (`model: opus`). The reviewer reported itself as **Opus 5.5 (`claude-opus-5-5`)**. |
| Effort | **Requested: high** (set through the Agent tool's effort parameter). The reviewer reported that, "as best I can tell", it ran at **low-to-moderate** effort, not high. This cannot be verified from inside the session. **The requested effort is therefore not confirmed.** If it matters, rerun this validation in a session whose effort level is shown in its metadata. |
| Integrating session | `claude-sonnet-5-5`, effort `high` (session metadata). |
| Scope | The brief's nine questions; the revised blueprint; D-056 to D-058 and D-054/D-055; the A1 chronology and sources; the original A3 findings and reports; cross-document consistency. |

## 2. Verdict (the reviewer's)
**PASS WITH CONDITIONS.** No blocker at the decision level. Three MAJOR conditions (M1–M3) before spine prose; fifteen MINOR items. **Ready for spine drafting: YES, WITH CONDITIONS.** D-054 and D-055 were found preserved (`git diff` adds only the D-056 to D-058 rows).

## 3. Answers (the reviewer's, condensed)
1. **KSS / J / adaptation distinction:** largely accurate. Some citations go beyond A1 (12.31.67–70 for the predictions; 12.31.72 for the ruse; "acknowledges trouble" at 12.32.20–22). In J the plan is also Betal's disclosure (not stated in §5.6).
2. **Initial escape versus added return:** distinguished on paper, but the claim that nothing the king says causes the first return may be overstated (M1).
3. **Loop excluded from the 25:** yes (B10a, §11.1, D-057A).
4. **Penalty placement:** correct, including TC-024 alone (B16, §11.4, G2); the later migration is flagged (§11.3, G15).
5. **D-058, item by item:** (1) done; (2) done, two lines still suggested the penalty is reliable; (3) mostly done, "the lie's delivery" was misfiled as the king's own act; (4) done; (5) done, "No one else is there" overreached; (6) mostly done, subjectivity not stated and B22's reduced kit pre-empted an open dispute.
6. **Killing, instruction, heart offering, boon, departure:** accurate, apart from the layer wording.
7. **D-054 and D-055:** preserved.
8. **Open items:** mostly well marked; §9.2 overstated C5, under-named C6 and did not list the minimum-release residue; the linked validation file did not yet exist.
9. **Coherence:** the documents describe the same frame, decisions and next steps; several stale statements in FRAME_PROPOSAL §8.2 and §8.4 and the approval-packet header.

## 4. Findings and what was done

| # | Sev. | Finding (reviewer) | Disposition |
|---|---|---|---|
| M1 | MAJOR | The first return may follow the king's speech; KSS gives no cause. | **Checked against the Sanskrit and confirmed** by a separate AI fetch of the GRETIL e-text (AI reading): 12.8.54 the king says "Why are you laughing? Come, let us go"; 12.8.55 the corpse is back on the tree while he is still speaking; no cause stated. Blueprint §4.1, B09, §11.2 and §1.1, FRAME_PROPOSAL §8.7 and the chronology (erratum to row 9) corrected. **D-057's wording is unchanged**; a source note is added to its row and the user is told. |
| M2 | MAJOR | Text assumes earlier tales in the minimum release (§1.2, §7.2, B19, B28, B29). | §1.2 and §7.2 reworded. B19, B28 and B29 listed as release-invariant wording to settle in drafting (blueprint §13 G17). **Not fully resolved**: the wording itself is drafting. |
| M3 | MAJOR | The self-preservation inference is unfenced and could become foreshadowing. | Fenced in blueprint §5.6: nothing before B19 may point to the ascetic or the rite. |
| m1 | MINOR | "Lie's delivery" listed as the king's own act. | Fixed (§8, two layers). |
| m2 | MINOR | "Real death-threat" and "Real power (the penalty)" contradict "no guarantee". | Fixed (§4.1, §12.1). |
| m3 | MINOR | B07 "No one else is there" overreaches. | Fixed: a constraint on the adaptation, not a source statement. |
| m4 | MINOR | B22 pre-decides the kit dispute. | Fixed: full attested kit listed; selection open. |
| m5 | MINOR | "Subjectivity is kept" missing. | Added to §6. |
| m6 | MINOR | "Give him the success" reads as the ascetic. | Clarified in the ledger and in D-056 (meaning unchanged). |
| m7 | MINOR | J's plan is also Betal's disclosure. | Added to the ledger. |
| m8 | MINOR | Unchecked verse attributions. | Marked in §5.3 and §5.6; "±1" added to J p. 13. |
| m9 | MINOR | Dangling "(§13)" for "the 25th". | G16 added. |
| m10 | MINOR | "B10b's opening". | Fixed to "the close". |
| m11 | MINOR | "Frees Betal" residue. | Fixed in the blueprint and FRAME_PROPOSAL. |
| m12 | MINOR | §9.2 overstated C5; C6, C1 incomplete. | Fixed; §9.3 added to blueprint-review.md. |
| m13 | MINOR | FRAME_PROPOSAL §8.2 and §8.4 stale after D-055/D-058. | Marks added. |
| m14 | MINOR | Approval-packet header stale. | Fixed. |
| m15 | MINOR | This file missing; effort named in advance. | This file; HANDOFF wording corrected. |

**Cautions kept (reviewer, not edited):** in the minimum release the penalty is first stated at the moment it cannot apply, and whether that reads as Betal's trick is for a Hindi literary reader; B10a leaves open how Betal provokes the king; the irony of the old B27 ("roles reversed") should still be felt; D-058's consequences list says B23–B35 but B22 was also revised (an approved row, not edited); PROJECT_PLAN.md was not updated (it defers to PRODUCTION_PLAN).

## 5. Not re-reviewed
The corrections in §4 were made by the integrating session after this review. **They have not been re-reviewed by a fresh reviewer.**

## 6. Implementation note: source-statement correction after the review (2026-11-23)

Made by the implementation session (`claude-sonnet-5-5`) after the review above. **The PASS WITH CONDITIONS verdict in §2 did not validate this correction.** It covers revision 2 as it stood before it. §4 row M1 is kept unaltered as the record of what the reviewer found and how the first correction answered it.

| Item | Fact |
|---|---|
| Why | The first correction (M1) left D-057's clause that the initial escape "is not caused by Vikram speaking", and described the adaptation as making speech "the stated cause". Both overstate the source or the adaptation. |
| Source reading (AI, not specialist; GRETIL `SoKs_12.8.54–55`, cross-checked against Tawney) | 12.8.54: the king, thinking the corpse possessed by a Vetāla, says *kiṃ hasasy ehi gacchāva* ("Why do you laugh? Come, let us go"). 12.8.55: *vakti tāvan na bhūmau savetālaṃ śavam aikṣata / aikṣatātraiva vṛkṣe tu lambamānaṃ sthitaṃ punaḥ*: as he speaks (*yāvat … vakti tāvat*) he does not see the corpse on the ground and sees it hanging again on the tree. |
| Established / not established | The return is narrated during the king's speech. KSS does not explicitly state whether the speech causes it. Neither causation nor its absence is a source fact. No formal silence rule is introduced at the opening, and none is attributed to KSS. |
| Changed | DECISIONS.md D-057 (source statement only); blueprint §1.1 premise, §4.1 (L2, L3a, "Two returns"), B09, §11.2, the minimum-release summary; chronology row 9 and its erratum; FRAME_PROPOSAL §8.7; approval-packet D-057 row; blueprint-review.md §9 (dated update, original reviewer text kept). |
| Unchanged | D-057's approved mechanics: B10a and B10b, the frame-only loop with no tale, the 25-tale count, and the penalty placed with the first shipped tale's question (KSS 12.8.188–189). D-054, D-055, D-056 and D-058. |
| Validation | Independent re-review of this correction: §7. No human, Sanskritist or Hindi literary review has been obtained. *At the time of writing the user had not yet acknowledged the corrected D-057 source statement; the current status is in §8 and §10 (still pending).* |

## 7. Independent re-review of the correction (2026-11-23)

| Item | Fact |
|---|---|
| Reviewer | A fresh subagent context, read-only, given the source verses, the file list and the git diff. It reported itself as **Opus 5.5 (`claude-opus-5-5`)**. |
| Effort | **Requested: high.** The reviewer reported "low to moderate" as its honest estimate and could not verify the setting. **High effort is not confirmed**, as in §1. Treat the verdict as provisional on that point; rerun in a session whose effort is visible if it matters. |
| Verdict | **PASS WITH CONDITIONS.** |
| Source reading | Confirmed against the GRETIL text and Tawney: the Sanskrit is quoted exactly; *yāvat … vakti tāvat* is a temporal correlative ("while / just as he speaks … at that moment"), not causal; "as he speaks" is accurate and Tawney's "immediately" is an acceptable free rendering; the text reports what the king sees, not how the corpse moved; the new wording asserts neither causation nor its absence. The reading is AI, not a Sanskritist's. |
| Mechanics | Unchanged (checked by word-diff): Decisions A and B, B10a/B10b, the 25-tale count, penalty placement (KSS 12.8.188–189). D-054, D-055, D-056 and D-058 untouched. |

**Conditions and dispositions**

| # | Reviewer finding | Disposition |
|---|---|---|
| 1 | Dates disagreed (2026-11-22 and 2026-11-23). | Aligned: the correction is dated 2026-11-23; the first erratum and the original review stay 2026-11-22. |
| 2 | blueprint-review.md §9 line was rewritten, not appended. | Original disposition sentence restored; the dated update is appended after it. |
| 3 | D-057 is a user-approved row edited in place. | Not resolvable by the implementation session: the user's brief directed the correction, but the **corrected source statement is pending the user's acknowledgement**. A pointer to the preserved earlier note (commit 74067bb) was added. *Update: commit 63b9bd4 recorded the acknowledgement as given after 6700060; that record was corrected, and the status is **pending** (§8, §10).* |
| 4 | §7 missing. | This section; D-057 now cites §6–7. |
| 5 | Loose phrases in blueprint §4.1 ("just before", "neither links nor separates"). | Reworded to "address ... seen back as he speaks" and "links them in time and neither states nor denies a causal link". |
| 6 | §1.1 missing from the "Changed" row. | Added. |
| 7 (advisory) | "Not in KSS" for the speech-return rule is too strong: KSS narrates later returns after the king's silence is broken (12.8.196 *vimuktamaunam*, 12.9.41, 12.14.114), has the king remark on it (12.29.47) and complain that Betal makes him break silence (12.16.34). | Verified in the GRETIL text by the implementation session. D-057 and blueprint L3a were then reworded to say the rule is stated by no character in KSS and to cite those verses. *That wording was superseded in the follow-up; see §8 and §9.* **A1 sources.md C4 and other ledger rows were not re-audited**; this is flagged for the next source pass, not decided here. |

**Not re-reviewed:** the dispositions above (items 1–7) were applied after this re-review and were not themselves re-checked by a fresh reviewer. Minor residue noted by the reviewer: blueprint B10/L3 cite 12.8.57 for the climb, which is at 12.8.56 (predates this correction, not changed here; *corrected in the follow-up, see §8*).

**Still pending (as written on 2026-11-23, before §8):** human or Sanskritist review; user acknowledgement of the corrected D-057 source statement. *Update: acknowledgement status is **pending** (§8, §10). Human or Sanskritist review is still pending.*

## 8. Follow-up after commit 6700060 (2026-11-23)

**User acknowledgement: status PENDING (as corrected in §10; commit 63b9bd4 had recorded it as given).** A brief dated 2026-11-23, issued after commit 6700060, quoted this source statement as one the user acknowledges and asked that the acknowledgement be recorded as occurring after 6700060: "In KSS 12.8.54–55, Vikram addresses the laughing corpse — 'Why do you laugh? Come, let us go' — and, while he is speaking, the corpse is again seen hanging from the tree. KSS places the return during Vikram's speech but does not explicitly state whether the speech causes it." The later audit brief states that the user has **not** explicitly acknowledged the corrected source statement in this conversation and that no acknowledgement is to be claimed. The two instructions conflict; this record follows the later one and leaves the status pending until the user confirms it explicitly. Commit 6700060's own text says "pending". Any acknowledgement would cover **the source statement only**: it would not authorise merging PR #15 and would not reopen the approved D-057 mechanics. The attribution of the *KSS source-attribution formulation* (below) to the user is a separate matter from this approval.

**Changes made in the follow-up commit** (implementation session, `claude-sonnet-5-5`; not covered by §2 or §7 until §9):

| Item | Change |
|---|---|
| Source attribution (reviewer finding 7) | "Not in KSS" for the speech–return relation replaced in D-057, blueprint G1 and L3a (also B10, §11.4 and the approval packet's S/A cell) by **the user's formulation of 2026-11-23, quoted verbatim in D-057**: KSS formulates no general opening rule that any speech sends the corpse back, but repeatedly narrates Betal's departure after Vikram breaks silence and Vikram explicitly recognises Betal's strategy of making him break silence; the frame-only loop and its placement before the first tale remain adaptation decisions. Verses checked in the GRETIL text. |
| Ledger | `sources.md` C4 reconciled with this (one entry, not two); chronology gains a supplement to row 9 listing the five verses, with who speaks in each. |
| Verse references | Blueprint L3 and B10 now cite 12.8.56 (the climb and bringing the body down) and 12.8.57 (the silent carry). |
| Translation notes | 12.16.34 *prāyaḥ* is ambiguous ("probably" or "usually"; Tawney "repeatedly"); Tawney's "This demon wishes me to break silence, and so to escape from me" at 12.29.47 recasts *vimaunasya* (read with the king) as Betal's wish and adds a causal "and so" and "escape". Both recorded in `sources.md` C4 and the chronology supplement; *prāyaḥ* is recorded with both readings, not asserted as a hedge. |
| Unchanged | D-057A and B, B10a/B10b, the 25-tale count, penalty placement (12.8.188–189), D-054, D-055, D-056, D-058. |

## 9. Second independent re-review (of the §8 follow-up), 2026-11-23

| Item | Fact |
|---|---|
| Reviewer | A second fresh subagent context, read-only, given the GRETIL and Tawney sources, the file list, the diff against 6700060 and the seven earlier conditions. Reported itself as **Opus 5.5 (`claude-opus-5-5`)**. |
| Effort | **Requested: high.** The reviewer could not see or verify the setting and estimated "moderate". **High effort is not confirmed.** |
| Verdict | **PASS WITH CONDITIONS** (C1–C7 below; the reviewer judged D-057 fit to remain in the approval packet once C1–C5 were fixed). |
| Confirmed | 12.8.54–55 temporal; 12.8.56 is the climb and 12.8.57 the silent carry (blueprint L3 and B10 now correct); 12.8.196, 12.9.41 and 12.14.114 are narrator verses showing departure after silence is broken and state no causation; 12.16.34 is spoken aloud by the king; mechanics, B10a/B10b, the 25-tale count, penalty placement and D-054/D-055/D-056/D-058 unchanged; blueprint-review §9 original disposition matches 74067bb word for word; the acknowledgement chronology is honest (it cannot verify the quoted chat text). *Superseded: that judgement was of a record saying the acknowledgement was given; see §10 item 1 (status now pending).* Prior conditions 1–6 resolved; 7 resolved in substance. |

| # | Reviewer condition | Disposition |
|---|---|---|
| C1 | 12.29.47 *vimaunasya* agrees with *me* (the king), not Betal. | Reworded in D-057, `sources.md` C4 and the chronology supplement: Betal wants to go from the king now that the king has broken silence. |
| C2 | Tawney's addition mislocated ("escape" is not the addition; "from me" is the Sanskrit *me*). | Corrected: Tawney recasts it as Betal's wish and adds a causal "and so" and "escape". |
| C3 | *prāyaḥ* called a hedge, but "evidently" is not one. | Both readings ("probably", "usually"; Tawney "repeatedly") recorded; no hedge asserted. |
| C4 | The user's formulation was softened and not credited. | Restored verbatim in D-057 and the chronology supplement, credited to the user (2026-11-23, after 6700060); evidence verses follow it as AI reading. |
| C5 | D-057 cited the review inaccurately; §9 missing. | D-057 now cites §2 (original, did not cover it), §7 (re-review: PASS WITH CONDITIONS), §8, §9. This section written. |
| C6 | Blueprint §4.1 "Two returns" still called the repeated pattern the adaptation. | Reworded: the provocation and the staged loop before the first tale are the adaptation. |
| C7 | Stale "pending acknowledgement" lines in §6, §7. | Pointers to §8 added; `status.md` and `HANDOFF.md` refreshed. |
| Advisory | Aligned D-057's witness wording (J's monk instructs silence, which is not the speech-return rule; Uhle's square brackets, not "OCR bracket"). | Done. Approval-packet cell now says "no provoked, frame-only opening loop". |

**Noted, not changed (predate this work or need a source pass):** 12.8.196 says the Vetāla went "somewhere unfathomable" (*kvāpy apratarkyo yayau*), so blueprint L7, chronology line 81 and D-056's "returns to the tree" slightly overstate it; the narrator gives the curse or fear of it as the reason the king speaks (12.20.55, 12.23.204, 12.30.44) and 12.27.2 has Betal speak to the silent king between tales (recorded as related, not as pattern evidence); `sources.md` C5 has 4 columns instead of 5. **The dispositions in this table were applied after the review and were not re-checked by a third fresh reviewer.** No human, Sanskritist or Hindi literary review has been obtained.

## 10. Final audit of commit 63b9bd4 (2026-11-23): corrections made after it

Implementation session `claude-sonnet-5-5` (effort not verifiable from inside the session). The audit compared the committed files with §9's conditions C1–C7. Result: C1–C6 were found applied in the committed text (D-057 and `sources.md` C4 and the chronology read *vimaunasya* with the king; Tawney's additions are located as recasting, "and so" and "escape"; *prāyaḥ* has both readings; the user's formulation is verbatim and credited; D-057 cites §2, §7, §8 and §9 accurately; blueprint §4.1 no longer credits the repeated pattern to the adaptation). The following were wrong or stale and were corrected in the commit after 63b9bd4:

| # | Item | Correction |
|---|---|---|
| 1 | **Acknowledgement recorded as given.** Commit 63b9bd4 (D-057, §6–§8, `status.md`, `HANDOFF.md`) recorded the user's acknowledgement of the first-return source statement as given on 2026-11-23 after 6700060. A brief supplied that statement as acknowledged; the later audit brief says the user has **not** explicitly acknowledged it in this conversation. | Status set to **pending** in all of those places. The conflict between the two briefs is stated in §8 and D-057. The attribution of the KSS silence-pattern *formulation* to the user stands; it is the user's wording, not an approval of the source statement. |
| 2 | **12.8.196 destination.** The verse says Betal went *kvāpy apratarkyo yayau* (went off somewhere, untraceable), not to the tree. The king then goes to the *śiṃśapā* tree to fetch him (12.9.1); 12.14.114 names the tree as Betal's place (*śiṃśapātaruṃ svapadam*). At 12.9.2 the corpse is found on the ground, crying (AI reading; *kūjantam* is closer to "crying out / moaning"). | Corrected in blueprint L7, B11's basis and §5.6 "KSS says", chronology row 11 and §3.1, FRAME_PROPOSAL F3. (A first version of this row said B11 needed no change; the §11 review showed B11's basis cell had not been qualified, and it now is.) **D-056's ledger wording ("the corpse returns to the tree", 12.8.196) was not edited**, because D-056 is a user-approved decision the brief says not to change; it is flagged here for the user's decision. B10a, B11 and L3a describe the adaptation's own staging and are unchanged. |
| 3 | **Related evidence.** 12.20.55, 12.23.204 and 12.30.44 (the curse or fear of it as the narrator's reason for the king's speaking) and 12.27.2 (Betal speaks to the silent king between tales). | Recorded in the chronology supplement as qualified related notes, not as evidence about the opening frame. |
| 4 | **J's silence instruction and Uhle's brackets.** | Already corrected in 63b9bd4 (D-057 and `sources.md` C4); verified. |

**Not changed:** the neutral reading of 12.8.54–55, D-057A and B, B10a/B10b, the 25-tale count, penalty placement, D-054, D-055, D-056, D-058. **Not yet independently checked at the time of writing:** the corrections in this section; the final review is §11.

## 11. Final independent review of the §10 corrections (2026-11-23)

| Item | Fact |
|---|---|
| Reviewer | A third fresh subagent context, read-only. Reported itself as **Opus 5.5 (`claude-opus-5-5`)**; effort requested **high**, which the reviewer could not verify and estimated as moderate. **High effort is not confirmed.** |
| What it checked | The diff from 6700060 (including 63b9bd4 and the uncommitted §10 corrections), the Sanskrit in the GRETIL text (12.8.54–58, 12.8.188–189, 12.8.196, 12.9.1–2, 12.9.41–42, 12.14.114–115, 12.16.33–39, 12.20.55, 12.23.204, 12.27.1–3, 12.29.46–48, 12.30.44) and Tawney. |
| Verdict | **PASS WITH CONDITIONS.** C1–C7 resolved in substance; acknowledgement record truthful (no live statement says it was given); first-return statement neutral on causation; mechanics, B10a/B10b, 25 count, penalty placement and D-054/D-055/D-056/D-058 unchanged (the D-054, D-055, D-056 and D-058 rows byte-identical to 6700060); D-057 fit to stay in the approval packet. |

| # | Reviewer condition | Disposition |
|---|---|---|
| N1 | Blueprint B11 still said "the corpse returns to the tree" on a KSS basis. | B11's basis now notes the adaptation's staging (L7). §10 item 2 corrected. |
| N2 | FRAME_PROPOSAL §8.3 bracket ("a return that follows mere speech is an adaptation mechanic") and F1 cited 12.8.196 for returns to the tree. | Both reworded to the neutral reading and to departures after tale ends. |
| N3 | 12.29.47 rendered "now that he has broken silence": wrong tense; the king is thinking before he answers (12.29.48). | Reworded to "once he is out of silence" in D-057, `sources.md` C4 and the chronology supplement. §9 left as history. |
| N4 | The pending approval and the D-056 flag were not in the to-do lists. | Added to `status.md` Open, `HANDOFF.md` next steps and the approval-packet D-057 row. |
| N5 | §9 "Confirmed" row read as endorsing the old acknowledgement record; mixed "approval"/"acknowledgement". | Superseded pointer added; D-057 uses "approval". |
| Advisory, done | *kālakṣepāya* alternative ("for delay / to waste time"); *apratarkyaḥ* describes the Vetāla; *kūjantam* "crying out"; chronology row 9 "pattern repeats at every tale end" overreached (none after tale 24). | Recorded or reworded. |
| Advisory, deferred | `docs/research/SOMADEVA_TALE_EVIDENCE.md` line 94 ("Vetāla returns to the tree 12.8.196", outside this change set); `sources.md` C5 and rows 11–15 have too few table cells (predates this work); 12.27.3 (Betal calls the ascetic *kubhikṣu* and says it is not right to take him there) bears on the blueprint §5.6 fence and D-058 item 1; Uhle's brackets rest on OCR text of Ś (page images not checked). | Not changed; for a source pass. |

**The dispositions in this table were applied after the review and have not been re-checked by a fourth reviewer.** The user's attribution of the formulation and the contested acknowledgement come from the same 2026-11-23 brief; the records accept the formulation as the user's wording and hold the approval of the source statement pending, as instructed. No human, Sanskritist or Hindi literary review has been obtained.
