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
