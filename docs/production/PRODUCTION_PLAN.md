# Betal Pachisi — 19-Story Production and Application Plan

> **Status: APPROVED by the user (creative director) in chat on 2026-11-21** (revision 2, after the user's review of revision 1). This is the **governing production plan** for the first release and for post-launch expansion. The research, the four independent reviews, the dissent and the evidence are all kept: see [SLATE_AUDIT.md](SLATE_AUDIT.md) and [reviews/](reviews/). Decisions it records are in [../DECISIONS.md](../DECISIONS.md) (D-038 to D-048), which stays the authority. Written by the lead (an AI coordinator); first-person notes are the lead's record.

> **Amendments after approval:** D-049 (release ships with whatever is ready; 19 stays the target), D-050 (suspended candidates stay suspended until the site is live), D-054 (any release needs the completed frame and TC-024), D-051 to D-053 (see [../DECISIONS.md](../DECISIONS.md)). Where this plan says the first release is "the 19" or waits for all 19, D-049 governs.

> **Post-merge status (documentation correction, 2026-11-21).** **Milestone A is complete.** [PR #9](https://github.com/HHrisHikesHH/Betall-Pacchisi/pull/9) (reading MVP, merge commit `64cb4fa`) and [PR #12](https://github.com/HHrisHikesHH/Betall-Pacchisi/pull/12) (this plan and the editorial foundation, merge commit `554088f`) are **merged into `main`**, both on 2026-11-20 UTC. **R0 is completed.** The reading MVP and the editorial foundation are now on `main`. **No story blueprints and no story drafts have been produced yet.** The next production milestone is **B**: the frame blueprint, then the two pilot stories **TC-013** and **TC-001** (§11.1). Statements below that describe PR #9 as open or its code as absent from `main` are a **dated historical record** of 2026-11-21 before the merges, and are marked as such; they are not current. The plan's decisions and research history are unchanged.

## 0. Two targets: first release and long-term collection

| | **First release** | **Long-term collection** |
|---|---|---|
| Content | **The 19 first-release stories** (TC-001, 002, 003, 006, 007, 008, 010, 013, 015, 016, 018, 019, 020, 021, 022, 024, 025, 026, 027), **plus the continuous frame** | **25 distinct Betal-narrated tales** (D-001, D-035 unchanged). The frame is not counted |
| When | As soon as all 19 pass approval in Hindi and English, with text only | After launch, by incremental additions to the live collection |
| Source of stories | The active slate | Six more tales: from the **suspended pool** (TC-004, 005, 012, 014, 017, 023; *not* automatic), or from **bounded outside investigation** under the existing rule (SUPPLEMENTARY_MATERIAL_REGISTER.md:23, where the user decides promotion) |
| Standard | The full charter and workflow | **The same** charter and workflow, with no lowering of the distinct-tale standard (D-035) or the evidence standard to reach 25 |

- **The charter is not weakened to keep the number.** If a first-release story cannot be adapted without endorsing something unacceptable, the lead recommends rejection with the evidence and presents **replacement candidates for the user's decision**. Nothing is substituted silently.
- **Research on the remaining six never delays the 19.** It runs as a separate, low-priority stream (§11, Milestone D).
- **Additions after launch must not disturb approved stories.** Repository and app safeguards make adding a story a content-only change (§§10–11). The frame is built to accept new tales before its climax (§8.5).

## Context

The user has chosen 19 of the 27 candidate families (TC-001, 002, 003, 006, 007, 008, 010, 013, 015, 016, 018, 019, 020, 021, 022, 024, 025, 026, 027) as the **active production slate**, plus the outer Vikram–Betal frame as a separate driving narrative. They also want an **ethical editorial charter** based on Dr B. R. Ambedkar's documented principles. Under it, caste may stay visible but is never normalised, gender is treated with equal moral standards and real agency, and power is held to account. No story is drafted until every candidate has been audited. This plan covers the audit, the frame, the per-story workflow, the record structure and the application roadmap. Once approved, the work can go story by story and reach the user only at escalation points and final approvals.

**What I inspected** *(historical: the statements about `main` and PR #9 describe the state before the merges)*. I read every governing doc and checked the repo state. `CLAUDE.md` and `docs/PROJECT_PLAN.md` are **not on `main`**; they exist only on the unmerged PR #9 branch. I also read the 19 dossiers through three independent reviewers (§4), with my own check of the TC-026/027 warnings. Ambedkar's texts were read in online reproductions (§3). The draft was then challenged by a fourth, independent reviewer (§5, reconciliation item 9), whose corrections are applied or disputed explicitly. PR #9 code was read on `origin/feature/reading-mvp`.

**Repository facts that shape the plan: historical snapshot, as written 2026-11-21 before PR #9 and PR #12 merged. Not current.** *Current state: `origin/main` = `554088f`; PR #9 and PR #12 are merged; no PR was open at the 2026-11-21 post-merge check; the application code, `CLAUDE.md`, `docs/PROJECT_PLAN.md` and D-037 are on `main`.*
- `origin/main` = `3ef800c` (PR #11 merged). The local `main` is stale at `d339fef`.
- PR #9 (`feature/reading-mvp`, head `19556ae`) is **OPEN, CONFLICTING** with `origin/main`: README.md and docs/HANDOFF.md, because PRs #10 and #11 merged after it. A test merge-tree shows only those two files conflict.
- **D-037** (agile product phase) and the superseding of D-030's first sentence exist **only on PR #9's branch**. On `main` the next free decision ID is D-037, but that ID is taken by PR #9. **All new entries in this plan therefore start at D-038 / P-009 / Q-412** so nothing collides.

## 1. Executive summary

- **Two targets.** The **first release is 19 stories plus the frame**, text only, in Hindi and English. The **long-term collection is 25 tales**, reached by adding stories to the live app through the same process. The 19 are never held back for the remaining six (§0, §11).
- **The slate holds, with one open call.** **13 are ADAPT and 6 are MAJOR REWRITE: TC-003, 015, 019, 020, 025 and 027.** None is rejected outright. **TC-003** works only if a rewrite can find an honestly hard comparison: the comparative question form is attested, but every source answers "women". Otherwise it should be rejected, and replacement candidates are listed (§7). TC-026 follows your direction (Mūladeva's answer, provisional). The challenger's wish to suspend it is recorded as dissent.
- **Revision 2 changes:**
  - **Caste stays visible when it matters.** A three-way label test and a slate-wide pattern audit replace "drop when irrelevant".
  - **TC-008** keeps the brahman brothers, because the source ties them to their father's sacrifice. The satire is aimed at their *abhimāna*, not their birth.
  - **TC-002** no longer makes Mandāravatī responsible for the men's threats. She has a wish of her own that is overruled. She cannot decide the outcome without collapsing the riddle, and the plan says so.
  - **Your story directions** are recorded as D-048. They were not in any repository record before.
- **Four independent reviews, and dissent is kept.** Source/literary, caste/power and gender/agency reviewers audited the slate, and a fourth reviewer then challenged the whole draft. That challenger caught three factual errors of mine and a pattern of over-correction. Its two strongest points are now rules:
  - **Honest difficulty:** no fix may make Vikram obviously right.
  - **No laundering of coercion into "choice".**
- **Composed answers and reasoning come back to you once, batched**, at the blueprint stage (D-041).
- **Most fixes come from the sources themselves.** We can choose attested variants instead of inventing:
  - TC-010: KSS over J's rejection ending.
  - TC-015: Śivadāsa's deceit reasoning.
  - TC-016: KSS and Ś reasoning over Hindi XV's Kshatriya reasoning.
  - TC-020: the KSS open ending, plus Ś 19's mother.
  - TC-026: J's answer, with the Newari's answer argued as the attested rival.

  Where we must invent (TC-003's answer, TC-025's reasoning, TC-027's duty-to-protect reasoning), the invention is labelled ours. Rival positions are argued at full strength, never as strawmen, and nobody lectures.
- **The biggest single ethical risk is the frame, not a tale.** Every tradition makes the villain a member of a religious sect or an artisan caste, and several end with the spirit enslaved. The proposed frame uses the **KSS structure**, keeps the ascetic **unmarked by sect**, and ends without servitude (as KSS does). It keeps Vikram's killing of the ascetic **morally live**, so the night ends with the king examined, not vindicated. Its working shape runs from obligation to an honest "I did not know" in TC-024.
- **The charter is grounded and honest.** Six principles are checked against reproductions of Ambedkar's texts (*Annihilation of Caste* §§IV, XIV; *Castes in India*, 1916; the Constituent Assembly speech of 25 Nov 1949). Two more are marked "to verify". A widely quoted line on women's progress has an unconfirmed date and place, so it is **barred from quotation**. Our extensions are labelled as ours, and nothing implies that he endorsed the project. Human sensitivity readers are recommended, but they are not a blocker.
- **The process is the same one, with two ethics gates added, and it costs far less.** One gate comes at the blueprint and one at verification. Each specialist's context is reused across its own sequence (writer across drafts, critic across critiques). **The verifier is always fresh and never the writer.** Review effort scales with risk: **8 contexts per ADAPT tale, 10 per MAJOR REWRITE, 11 for the frame**, about 175 in all, down from 240–400. Dissent is recorded and escalated. Human readers have explicit statuses, and AI review is never called human-verified. Two pilot tales (TC-013 and TC-001) calibrate Hindi register and length. TC-025 follows, then the rest, 2–3 at a time. The frame blueprint comes first.
- **The app reuses PR #9's code.** PR #9 is a sound M1 but **conflicts with `main`** (README.md, docs/HANDOFF.md), and it holds D-037. Next steps:
  - R0: merge `main` into the PR #9 branch and resolve the two conflicts (no force-push). The user then merges it.
  - R1–R3: a strict text format, derived from the pilot drafts; a manifest of reading order; hash-bound approvals; a build gate so that unapproved stories cannot ship.
  - R4–R8: Hindi/English toggle, reading polish, frame-aware navigation, tests, and a preview deploy.

  Text only. No assets until the stories and the frame are complete (Milestone E). Adding a tale after launch is a content-only change, with stable slug-based URLs and untouchable approved texts.

## 2. Decision-register updates (recorded in DECISIONS.md)

The rules are preserved. Nothing is deleted and superseded rows link forward. **The user approved these entries on 2026-11-21** by approving this plan; the register wording is in [../DECISIONS.md](../DECISIONS.md). On approval each P-ID points to its D-ID. The register is edited on a docs branch. The user merges.

| New ID | Proposal | Effect on existing entries |
|---|---|---|
| **P-009 → D-038** | **First-release slate and release strategy** (user, 2026-11-21). The **first release** is the 19 families TC-001, 002, 003, 006, 007, 008, 010, 013, 015, 016, 018, 019, 020, 021, 022, 024, 025, 026, 027, plus the frame. They are *selected for production*, not approved as adaptations. A story that fails the ethical audit or the workflow is dropped only **by the user's decision** (STORY_WORKFLOW §1). The lead then presents replacement candidates for the user's decision, never a silent substitution. **The long-term goal stays 25 tales** (D-001, D-035). Further tales are added **after launch** through the same selection, ethics and production process (§0, §11 Milestone D). **SUSPENDED (6):** TC-004, 005, 012, 014, 017, 023. They may be reconsidered only at the user's request. Pending comparisons noted by the user: TC-004 vs 017, TC-005 vs 009, and TC-012/014/023. **REJECTED (2):** TC-009, TC-011. They stay excluded unless the user reopens them. **Conditions the user recorded (2026-11-21):** TC-025 is locked into the working pool. TC-026 and TC-027 are provisional, and their evidence limitations are kept. TC-001, 002 and 003 carry safeguards on accomplice guilt, Mandāravatī's agency and the gendered verdict respectively. The frame is separate and not counted (D-035 unchanged on that point). | **D-001 and D-035 are unchanged.** The 25-tale goal and the definition both stand, and **nothing is superseded**. **Q-411** stays OPEN, with a note: "first release of 19 set by D-038; six places remain for post-launch expansion". **Q-003** (production and release order) → partly resolved by D-038: launch with the 19 and expand afterwards. |
| **P-019 → D-048** | **Story-specific creative directions** (user, 2026-11-21, stated in chat). **They are not found in any earlier repository record**: the decision sheet's owner fields are blank (`SELECTION_DECISION_SHEET.md:3`), so they are recorded here for the first time, worded as in §5.0. Directions cover TC-001, 002, 003, 004 (suspended), 025, 026 and 027. | New. The dossiers stay unchanged as evidence. |
| **P-010 → D-039** | **Ethical Editorial Charter** (§3), binding on all tales *and* the frame. It **adds** constraints on what a story may endorse and **does not rank** itself above D-036. Both apply together: the charter sets what may be endorsed, the North Star how it is told. A real conflict between them is escalated to the user. *(Challenger: an override clause would quietly change D-036's standing. Accepted.)* | Adds a new doc `docs/ETHICAL_CHARTER.md`. D-036 is unchanged. |
| **P-011 → D-040** | **Caste treatment rule** (charter §3.2), stated as a standalone decision so that reviewers can cite it by ID. | New. |
| **P-012 → D-041** | **Verdict-change protocol.** When a source verdict or its reasoning breaks the charter, the blueprint records (a) the source verdict verbatim with its reference, (b) the problem, (c) the adapted verdict and reasoning, (d) whether the central dilemma changed. **The user approves, at the blueprint stage (A3), any adapted verdict that changes the dilemma *or* any answer or reasoning that is our own composition.** For "why" questions such as TC-020 and TC-025, the reasoning *is* the answer, so it counts. A reasoning change drawn from an attested variant goes through the normal Stage D approval. Every adapted tale must also pass the **honest-difficulty test**: after the change, could a thoughtful reader defensibly reach a verdict different from Vikram's? Nowhere is the adapted verdict presented as attested. | Applies D-017 and D-034. |
| **P-013 → D-042** | **Ethics gate added to the workflow.** Stage A gets an ethical review and Stage C an independent charter check. D-019's minimum of three drafts and its stages stay as they are; this adds to them and replaces nothing. | Supplements D-019 and D-020. STORY_WORKFLOW.md is updated. |
| **P-014 → D-043** | **Frame as a continuous arc** (§8). It is not a repeated preface. | Resolves **Q-002** (presentation), not Q-401 (the frame's source). The base proposed in §8 needs separate approval. |
| **P-015 → D-045** (replaces P-001's detail) | **Story record structure and stable IDs** (§10). The TC-ID stays the permanent research ID. Public titles, slugs and order are separate fields. | P-001 → *SUPERSEDED by P-015* (proposal history kept). Resolves **Q-406** on approval. |
| **P-016 → D-046** | **Role staffing** (§9): every role runs as a separate AI session. The verifier is a fresh session that never sees the writer's notes. **Human readers are recommended, not blocking** (user, 2026-11-21). Every record states one of three review statuses, **AI review completed**, **Human review completed** (role, date, scope), or **Human review not obtained**. An AI-reviewed text is never described as human-verified (§9.4). | Resolves **Q-405** on approval. |
| **P-017 → D-047** | **Live-reader content gate** (§11): only `status: approved` texts and labelled placeholders may appear in a production build. Drafts never do. | Applies D-015. Narrows Q-506. |
| **P-018 → D-044** | **Audience: adults** (user answer, 2026-11-21; resolves **Q-004**). Violence and sexuality are handled with literary restraint and are not softened for children. The charter still applies in full, so adult content is never an excuse to romanticise coercion or linger on violence for spectacle. | Q-004 → RESOLVED → D-044 |
| **Q-412** (new, OPEN) | Should reader-facing material (an "about this collection" note) mention the ethical charter or Dr Ambedkar at all? Recommendation: no mention without the user's explicit decision, and never wording that implies endorsement. | |
| **Q-413** (new, OPEN) | What is the order of the tales within the collection? The collection order cannot follow any one tradition, because there are 19 tales with gaps. | Recommendation in §8. Replaces part of Q-003. |

Housekeeping, which needs no decision: HANDOFF.md and the docs index are updated to match. The README, North Star and D-037 "25" wording stays, because the goal is still 25. PR #9's D-037 keeps its ID. **Sequencing:** PR #9 also edits DECISIONS.md ("Superseded decisions"), so this docs PR is based on `main` **after** PR #9 is merged (R0). If the user prefers not to wait, it can be based on the PR #9 branch.

## 3–8. Charter, audit and frame

These sections are kept as separate documents so that reviewers can cite them directly:

- §3 Ethical Editorial Charter → [../ETHICAL_CHARTER.md](../ETHICAL_CHARTER.md)
- §§4–7 Slate audit (matrix, notes, story directions, pattern audit, serious problems, rewrites) → [SLATE_AUDIT.md](SLATE_AUDIT.md)
- §8 Frame proposal and its ethical review → [FRAME_PROPOSAL.md](FRAME_PROPOSAL.md)

## 9. Story-production workflow and specialist-agent plan

The approved core stays as it is: Hindi first, at least three drafts, independent criticism and verification, the user's approval, and every record kept (D-012, D-019–D-022). The additions are the ethics gates (D-042) and explicit roles.

### 9.1 Stages per story (and for the frame, as `FRAME`)

| Stage | Output (file, §10) | Done by | Exit gate |
|---|---|---|---|
| **A1 Research** | `research/sources.md` (variant register: every witness, number, edition, page or verse, evidence label), `research/chronology.md` | Researcher | Every claim cited, or marked "unverified" |
| **A2 Blueprint** | `blueprint.md`: chronology, motivations, essential events, source question and answer *verbatim*, adapted question and answer (D-041 form), role table (§3.6), safeguards, open questions, confidence | Researcher + lead | — |
| **A3 Ethics pre-review** | `ethics/blueprint-review.md` | Ethics reviewer(s) by tier (§9.2); **plus the challenger for MAJOR REWRITE tales and the frame** | **Honest-difficulty test** passed. A **block** means the blueprint is revised. Composed answers or reasoning and dilemma changes go to the user in a **batched A3 packet** (D-041). Otherwise escalate **only** on the §12 triggers |
| **B Draft 1 → Critique 1** | `hi/draft-1.md`, `hi/critique-1.md` | Writer; Literary critic | — |
| **Draft 2 → Critique 2** | `hi/draft-2.md`, `hi/critique-2.md` (literary, plus an **ethics & character** section) | Writer; Critic + ethics reviewer | — |
| **Draft 3 → Critique 3** | `hi/draft-3.md`, `hi/critique-3.md` | Writer; Critic | If not ready, Draft 4 and onward. Three is a minimum |
| **C Verification** | `hi/verification.md`: source accuracy, chronology and causality, variant choices, additions (D-009 test), charter clauses, agency, ending vs adaptation, dilemma still hard | **Verifier**: a fresh session that reads the sources and the draft, **not** the writer's notes or critiques | Any FAIL goes back to B |
| **D User approval** | Lead's `hi/approval-packet.md`: final text, change log, source notes, verifier findings, limitations. On a yes: `hi/approved.md` + `status.md` (who, when, commit) | User | Only the user's explicit yes |
| **E English** | `en/draft-N.md`, `en/critique-N.md`, `en/fidelity-check.md` (meaning, impact, atmosphere, depth vs the approved Hindi), `en/approval-packet.md`, `en/approved.md` | English writer (a different session from the Hindi writer); critic; fidelity verifier | User's approval. P-007's working rules are used as guidance |

### 9.2 Specialist roles: efficient but independent (revision 2)
**Principle:** a separate context wherever independence matters, and one reused context across a legitimate sequence of work where reuse does not compromise it. No two agents do the same task. No agent repeats completed research: A1 **starts from** the dossier, N1, N3 and this audit, and fills only gaps or does specific verification.

| Role | Context policy | Brief | Must not |
|---|---|---|---|
| **Lead** (this coordinator) | One coordinating context for the project, not counted per story | Commission work, reconcile, record dissent, write approval packets, run the pattern audit | Write or critique a story's prose; settle a reserved decision |
| **Researcher** | **One context per story**, covering A1 and A2 | Gap-filling research, variant register, chronology, blueprint draft | Re-do research that is already recorded; present inference as attestation |
| **Hindi writer** | **One context per story**, kept across Drafts 1 to N | Drafts and revisions | Critique or verify its own text |
| **Literary critic** | **One context per story**, kept across Critiques 1 to N (it never writes) | Independent critique of each substantial draft (North Star §10, EDITORIAL_GUIDE §§4–5) | Rewrite the story |
| **Ethics reviewer(s)** | **ADAPT:** one combined caste/power and gender/agency context, used at A3 and for Critique 2's ethics section. **MAJOR REWRITE and frame:** two separate contexts (caste/power; gender/agency) | Charter §§3.2–3.6, honest-difficulty test | Insert lectures |
| **Challenger** | **MAJOR REWRITE tales and the frame only**: one context, used at A3 and again at C | Argue against the ethical conclusions; look for missed harms | Average or defer |
| **Verifier** | **Always a fresh context, never reused, never the writer's.** It reads the sources and the final draft, **not** the writer's notes or critiques | Source accuracy, chronology, variants, additions, charter, agency, ending, dilemma | **Non-negotiable:** independence from the writer |
| **English adapter** | One context per story, across English drafts | Literary adaptation of the approved Hindi | Be the Hindi writer |
| **English critic and fidelity verifier** | One critic context; **a fresh fidelity verifier** | Critique; meaning, impact and depth against the approved Hindi | — |

**Context budget per story (Hindi + English), replacing my earlier 12–20:**

| Risk tier | Hindi contexts | English contexts | Total |
|---|---|---|---|
| **ADAPT** (13 tales) | researcher, writer, critic, ethics (combined), verifier = **5** | adapter, critic, fidelity verifier = **3** | **8** |
| **MAJOR REWRITE** (6) | + second ethics reviewer + challenger = **7** | **3** | **10** |
| **Frame** (strongest review) | researcher, writer, critic, two ethics reviewers, challenger, verifier = **7**, plus a second verifier for the climax chapter | **3** | **11** |

That comes to about **175 contexts for the first release**, against 240–400 under revision 1. The minimum of three substantial Hindi drafts, independent criticism, source verification and your explicit approval are all unchanged. Extra drafts (Draft 4 and beyond) reuse the same writer and critic contexts.

**Disagreement rule.** When reviewers disagree, the lead's reconciliation note in `status.md` names each side and what decided it. Dissent is kept, not averaged. An unresolved ethical dissent is an escalation trigger.

### 9.3 Throughput and order
- **The frame blueprint (A1–A3) comes first**, because the tales' transitions depend on it. The frame's own drafting runs **alongside** the tales: its final chapter (TC-024 and the ending) is drafted last.
- **Pilots:** **TC-013** and **TC-001**, taken through A–D before scaling up. Both are well attested across KSS, Ś and the Hindi, so they can calibrate the Hindi register (Q-402) against a Hindi witness. 013 is compact with a reasoning-vocabulary change; 001 is long with a reasoning change, and it also tests the frame's opening (KSS tale 1). **TC-025 goes third**, as the first composed-reasoning tale. *Changed from my draft's 006 and 025 after the challenger showed that 006 is not light and 025 has no Hindi witness.*
- After the pilots, run **2–3 tales in parallel**, each on its own branch `story/TC-0NN-hi`, with one PR per story stage-set. Commits contain content only.
- **Risk-based review:** ADAPT gets the standard workflow; MAJOR REWRITE gets the separate ethics reviewers and the challenger at A3 and C; the frame gets the strongest review. **Any unresolved ethical dissent is recorded and escalated**, whatever the tier.
- The user sees: (1) this plan; (2) **one batched A3 packet** for composed reasoning and dilemma changes (003, 015 if changed, 019 if rebuilt, 020, 025, 027), plus the frame blueprint; (3) other escalations, if any; (4) each Stage D packet; (5) each Stage E packet. Nothing else is routine supervision.
- **Slate-level checks, run twice** (lead plus one challenger context): first on all blueprints, before most drafting, when changes are cheap; then on the final texts. They cover how each group appears across the slate (§3.2.9, §5.3), how often the "she chooses" device is used (§3.3.6), repetition of answer patterns (both 010 and 019 answer "the thief"; three superlative comparisons with the same logic), and how many tales include suicides.

### 9.4 Human review strategy (D-046: recommended, not blocking)
**Three statuses, recorded in each story's `status.md` and approval packet. They are never blurred.**

| Status | Meaning |
|---|---|
| `AI review completed` | All AI roles have done their stages. **This is never described as "verified" by a person.** |
| `Human review completed` | A named role (Hindi literary reader or sensitivity reader), date, scope and the notes file. A human reader's notes go to the lead, are reconciled like any review, and dissent is recorded. |
| `Human review not obtained` | Not yet arranged, unavailable, or declined. The packet says which. |

**Priorities**, highest risk first:
1. The frame: religious representation and Vikram's violence.
2. TC-020: child sacrifice and caste.
3. TC-008: caste satire.
4. TC-019: a daughter's sale and consent.
5. TC-024: coerced marriage.
6. TC-003, 015 and 025: gender verdicts.
7. TC-016: self-sacrifice.

**When a human reader helps most:**
- **(a) At A3, on the blueprints** of the frame and the MAJOR REWRITE tales. A short read here is the cheapest point to change direction.
- **(b) On a pilot's Draft 2 or 3,** where a Hindi literary reader calibrates the register (Q-402) for every later story.
- **(c) Before Stage D,** for the priority texts above.

You arrange readers. The plan proceeds without them and records the status. **Nothing in the first release is delayed by recruitment.** A missing reader is shown in the packet, so your approval is made with that knowledge.

## 10. Content-record structure

Editorial records live in a **top-level `stories/`** tree. It is separate from `content/` (what the app reads) and from `src/` (code), as D-015 requires. This refines P-001 / STORY_WORKFLOW §5.

```
stories/
  README.md                 # how records work; status values (STORY_WORKFLOW §4)
  SLATE.md                  # one row per TC-ID + FRAME: status, branch, last approval commit
  FRAME/                    # the outer narrative, same layout as a tale, plus:
    segments.md             #   map of frame segments ↔ the tales they bracket
  TC-016/                   # stable research ID, never renamed
    status.md               # status history; approvals (who, when, exact commit); reconciliation notes
    research/sources.md     # variant register (SOURCE_AND_RESEARCH_POLICY §5)
    research/additions.md   # source events / interpretive choices / creative additions (§6)
    blueprint.md
    ethics/blueprint-review.md, ethics/challenge.md
    hi/draft-1.md … critique-1.md … verification.md, approval-packet.md, approved.md
    en/draft-1.md … fidelity-check.md, approval-packet.md, approved.md
```

Rules: a draft is never overwritten (every revision is a new `draft-N`). Each critique names the draft it reviews. `approved.md` is written only on the user's yes and is immutable afterwards. A later change starts a new `revision-N/` cycle and needs a new approval. Public title, slug and collection order are **fields**, not folder names, so they can change while the TC-ID stays fixed.

**Publishing to the app.** A separate commit copies `stories/TC-016/hi/approved.md` to `content/stories/hi/<slug>.md` and adds front matter `id: TC-016`, `status: approved` and `approved_sha256: <hash of the normalised body>`. The same hash, with the approving commit, is recorded in `status.md`. A commit SHA alone breaks under squash or rebase merges and shallow CI clones (challenger), so the hash is the binding reference. App validation rejects an `approved` file whose body hash does not match. A CI rule fails any change to an existing `approved.md`. Together these are the mechanical guard against software edits overwriting approved text.

## 11. Production and release roadmap, then the application work

### 11.1 Milestones
| Milestone | Contents | Exit | Your role |
|---|---|---|---|
| **A: Editorial foundation** | Approve this plan. Docs PR with the charter, register entries D-038 to D-048, the audit, the frame proposal and the workflow. Scaffold `stories/`. **R0** (bring PR #9 current) can run in parallel. | Docs PR merged | Approve the plan; merge the docs PR and PR #9 |

**Status after the merges (2026-11-21): Milestone A is COMPLETE.** PR #12 (docs) and PR #9 (reading MVP) are merged and R0 is done. **Milestone B has not started:** its first work is the frame blueprint (A1–A3), then the pilots TC-013 and TC-001. No blueprint or draft exists yet.
| **B: Story production** | (1) Frame blueprint (A1–A3). (2) **Pilots TC-013 and TC-001** through to Stage D, which also calibrates Hindi style (Q-402), length and critique format. (3) **One batched A3 packet**: composed reasoning and dilemma changes, plus the frame blueprint. (4) The first blueprint-stage pattern audit. (5) The remaining tales, 2–3 at a time, TC-025 first. (6) Each Hindi story finalised individually (Stage D). (7) The frame drafted alongside, its climax last. (8) English adaptations (Stage E), started per tale as soon as its Hindi is approved, not after all 19. (9) The final-text pattern audit. | All first-release stories and the frame approved in Hindi and English | A3 packet; each Stage D and Stage E packet; escalations only |
| **C: First release** | Application steps R1 to R8 complete (R1 derived from the pilot drafts). Approved texts published to `content/` through hash-bound commits. Navigation, the Hindi/English toggle, accessibility (Q-111 baseline) and 375px-to-desktop behaviour verified. **Release with the 19** if all pass (or with fewer, if you reject any). *[Amended by D-049, 2026-11-21: 19 remains the target, and the first release ships with whatever has completed approval in Hindi and English; it is not held for the full 19. This applies to §0's "as soon as all 19 pass" too. See [../DECISIONS.md](../DECISIONS.md).]* **No waiting for illustrations, background sound or music.** | Public release | Approve the release; hosting choice |
| **D: Post-launch expansion to 25** | Repeated until 25 tales are published: (1) bounded candidate research (suspended pool or outside leads, under the existing rule); (2) distinctness (D-035) and source-confidence evaluation; (3) ethical and literary assessment (A3 standard); (4) **your selection approval**; (5) production through the same workflow; (6) approved Hindi and English added to the live collection; (7) the reading-order manifest updated, the tale's frame segments written (§8.5), and the release made; (8) repeat. | 25 tales live | Selection approval and Stage D/E approvals per tale |
| **E: Visual and audio production** | Only after the written stories **and** the frame are complete: art direction, illustration, background sound, music, sound effects (Q-201 onward, Q-301 onward). Asset slots are added to the content format **only then**. | — | All art and audio decisions |

**Milestone D work does not block Milestones B and C.** Before launch it is limited to low-priority research notes, so the first release is never held for the remaining six.

### 11.2 Safeguards for adding stories after launch
- **Adding a tale is a content-only change.** Its own `stories/TC-NNN/` records; its `content/stories/<lang>/<slug>.md` files; a manifest entry; its frame segments. **No application code changes.**
- **Stable addresses.** URLs and resume-reading are keyed by **slug or ID, never by number or position**, so inserting a tale never breaks a reader's link or bookmark. Displayed numbers come from the manifest.
- **Approved texts are untouchable by additions.** The hash binding plus the CI rule against edits to `approved.md` (§10) mean a later addition cannot alter an approved story. A manifest change is reviewed as content.
- **Release notes per release:** tales added, frame segments changed, review status (AI or human) for each new text.

### 11.3 Application work, based on PR #9 as it stands

**Repository state: historical snapshot, re-checked 2026-11-21 for this revision, before the merges. Not current (PR #9 and PR #12 are now merged into `main`; see the post-merge status above).** `origin/main` is still `3ef800c`. PR #9 is still OPEN and CONFLICTING, at head `19556ae`. It remains the only open PR. The working checkout is on `docs/immersive-readme` (merged as PR #11), with untracked `dist/`, `node_modules/`, `.DS_Store` and `betal-pachisi-readme-package/`, which are not touched. The execution steps re-check this state before acting. No merges, force-pushes or deletions are made without your approval.

**The state of PR #9:** it is a solid M1 slice. Collection page, story reader, prev/next, loading, empty and not-found states, a placeholder banner, and strict build-time validation of `content/stories/hi/*.md` (`src/content/stories.ts`, `src/content/frontmatter.ts`) are all there. The body is **plain paragraphs only** (`toParagraphs`), and that is the main gap. It is **conflicting** with `origin/main` in README.md and docs/HANDOFF.md, and it is the only place D-037, CLAUDE.md and PROJECT_PLAN.md exist. The plan below reuses all of it and replaces nothing.

| Step | Work | Reuses | Approval |
|---|---|---|---|
| **R0 (COMPLETED 2026-11-21: `main` was merged into `feature/reading-mvp` at `6583a9e`; PR #9 was then merged by the user as `64cb4fa`)** | Bring PR #9 current. Merge `origin/main` into `feature/reading-mvp` (no force-push) and resolve the two conflicts. **README:** keep main's immersive root README and add PR #9's dev/run section under it. **HANDOFF:** *rewrite* the "Current status" bullets so they are true after the merge ("application code exists on main…"), keep the 673ed37 caveat (HANDOFF line 18), and drop PR #9's "after a final independent review" line. Rerun `npm test` and `npm run build`. | — | **User merged PR #9** (done) |
| **R1 Content format v2: derived from the pilot drafts** | *Not built speculatively* (PR #9's CLAUDE.md says to keep plain text "until a real tale needs formatting"). Once the TC-013 and TC-001 Draft 1s exist, add a **new body module**, not an extension of `frontmatter.ts` (whose own comment asks for a real parser). It is a **small, strict block grammar**, likely covering section headings, scene breaks, verse, **embedded-narrative levels** (needed for TC-003's and TC-025's tales-within-tales), Betal's question and Vikram's answer. Frame segments are separate files ordered by the manifest, not inline blocks. Anything unknown **fails validation with file and line**. Emphasis needs a real italic/weight strategy for Devanagari (only Noto Serif Devanagari 400 and 600 are loaded, so oblique is synthetic). | New `src/content/body.ts`; `types.ts`; tests | Reversible (D-037) |
| **R2 Front matter v2 + manifest** | New fields: `id` (TC-### or FRAME-##), `kind` (`tale`/`frame`), `lang`, `approved_sha256`. A `content/collection.<lang>.json` **order manifest** lists entries in reading order, with frame segments interleaved. **Migration:** `order` is currently required and drives `ui.storyNumber`, so numbering moves to the manifest. Tales are numbered; frame segments are not. The validator enforces: unique ids; every manifest entry exists; `approved` requires the hash; an English file may be `approved` only if its Hindi twin is. | `buildStories`, `collection.hi.json` | Reversible |
| **R3 Live-reader gate (P-017)** | The production build fails if any `content/` file has `status: draft`. Drafts live only in `stories/`. Placeholders stay allowed and labelled. | Build script already runs the content tests | P-017 |
| **R4 Languages** | `content/stories/en/`, `collection.en.json`, `src/i18n/en.ts` with the same keys (a type check enforces parity). Routes are `/:lang/…`, with **redirects from the existing `/kathaen/:slug`**. `<html lang>` is set per route (it is currently a static `hi`). The toggle keeps the same story and scroll position; the preference is stored in localStorage with try/catch (a working choice for Q-110). When no approved English exists: a clear "English adaptation in preparation" state, never machine text. `lang` attributes and font switching are included. | `ui` object pattern, router | Reversible; Q-110 behaviour noted for the user |
| **R5 Reading experience** | Typography pass for Devanagari and Latin (Q-105, working choice). Measure and line-height, a text-size control, resume-reading (local only). Styled blocks for the Betal question and Vikram answer, as text-only design, with **semantic markup** for the question, answer and verse. Q-111 accessibility baseline: contrast, reduced motion, and screen-reader landmarks. An **error boundary** catches a failed lazy-chunk load after a redeploy (today there is only Suspense). 375px to desktop with no horizontal scroll, light and dark. | `styles.css`, existing a11y focus handling | Reversible |
| **R6 Frame-aware navigation** | The "continue the night" flow is frame segment → tale → frame segment. The collection page shows the journey with tale entries nested. "Next" follows the manifest. | `findNeighbours` → manifest-driven | Reversible |
| **R7 Validation & tests** | Unit tests per block type and per invalid construct; cross-language parity tests; the `approved_sha256` body-hash check and the "no edits to `approved.md`" rule (§10); page tests for the toggle, not-found per language, and the empty state per language. CI: `npm test`, `npm run build`, plus a check that a PR does not touch both `src/` and `content/`/`stories/` (D-015). | Vitest setup | Reversible |
| **R8 Preview deploy** | Static host preview with SPA fallback (Q-502, reversible). | — | Choice of host: user FYI, not blocking |

Not now: illustrations, backgrounds, music and SFX (postponed by the user); accounts; backend; CMS. Image and audio slots are **not** added to the format until art and audio work begins, which avoids speculative schema. Engineering PRs never contain story content, and story PRs never contain code.

## 12. Decisions: settled and still open

**Already decided by you (2026-11-21), and recorded, not re-asked:**
- The first release of 19, the long-term goal of 25, and post-launch expansion (§0).
- Rejected (TC-009, 011) and suspended (TC-004, 005, 012, 014, 017, 023).
- Audience: adults (D-044).
- Human readers recommended, not blocking (D-046).
- The story directions for TC-001, 002, 003, 004, 025, 026 and 027 (D-048, §5.0).
- Keep caste visible when it matters (§3.2).

**Settled by the user's approval of this plan and answers in chat (2026-11-21):**
1. **This plan as the governing production plan**: the charter, register entries D-038 to D-048, the audit's direction (13 ADAPT, 6 MAJOR REWRITE), the revised TC-008 and TC-002 treatments, the workflow, the record structure and the milestones.
2. **TC-003:** pursue the conditional rewrite. If A3 finds no honestly hard comparison, the lead recommends rejection and brings replacement candidates (SLATE_AUDIT §7).
3. **The frame ascetic:** unmarked by sect (FRAME_PROPOSAL §8.4).
4. **Pilots:** TC-013 and TC-001, then TC-025.
5. **Docs base:** this docs PR is based on the PR #9 branch after `main` was merged into it (R0).

**Still open, and coming to the user in Milestone B:** the batched A3 packet (composed reasoning, dilemma changes, and the frame blueprint: Betal's motive, "freed" vs "departs", the size of the divine coda); the Hindi register (Q-402) from the pilot samples; each Stage D/E packet. **Irreversible repository actions** (merging PR #9, the docs PR, every story and engineering PR) are always the user's.

**Needed before the first Draft 1, which the pilot can surface:**
- **Q-402, Hindi register.** Recommendation: literary but readily readable Hindi, closer to Hindustani in narration and dialogue, with Sanskrit vocabulary reserved for ritual, verse and Betal's riddling moments. The two pilot Draft 1s include a short register sample for the user's reaction, so the user is not asked in the abstract.

**Research tasks the plan schedules (no decision needed):** verify charter principles 7 and 8 and the CAD page reference; N4 for TC-016 (J 24) and TC-007 (J 7) before their A1 closes; full-text checks of every witness a blueprint borrows from.

**Escalations that may arise later (only these):** a reviewer recommends REJECT; a verdict change alters the dilemma (D-041); a change destroys a tale's identity; an unresolved source claim affects a story; an irreversible repository action (merges).

**Not needed now:** Q-005 narrator identity (kept open; §8 no longer fixes who narrates the frame), Q-001 name, art and audio (postponed by the user), Q-412 reader-facing mention of the charter, and hosting (a reversible working choice).

## Execution checklist (Milestone A)

**Executed: steps 0 to 4 were carried out in PR #12 (merged `554088f`); step 5 is Milestone B and has not started. Original text follows.** Once the plan is approved, the first execution steps are docs only, on a branch `production/19-slate-plan` based on `main` after PR #9's merge, or on the PR #9 branch if the user prefers:**
0. Re-check `git` and PR state; stop and report if anything changed.
1. Add D-038 to D-048 as APPROVED or PROPOSED, exactly as the user approves them. Mark P-001 superseded by P-015. **Leave D-001, D-035 and D-036 untouched.** Resolve Q-004, Q-002 (presentation), Q-405 and Q-406 by ID. Annotate Q-411 (still OPEN). Add Q-412 and Q-413.
2. Create `docs/ETHICAL_CHARTER.md` (§3), `docs/production/SLATE_AUDIT.md` (§§4–7, with the reviewers' reports attached as appendices and dissent preserved), `docs/production/FRAME_PROPOSAL.md` (§8), and STORY_WORKFLOW.md updates (§9).
3. Scaffold `stories/` (README, SLATE.md, FRAME/ and 19 TC folders with `status.md` only, status `research`, review status `AI review not started`).
4. Update HANDOFF.md and the docs README. The root README count stays, because the goal is still 25.
5. Then start the frame blueprint and the pilot blueprints (TC-013, TC-001), each in its own session, following §9.

**How the user checks it:** a docs PR diff. `git diff` shows that no historical register entry was deleted or reworded (only new rows, P-001's status cell, and Q-status cells changed). D-001, D-035 and D-036 are byte-identical. Every charter quotation has a link and a section. TC-026/027 rows still carry their verbatim warnings.

**Engineering verification (R0 to R7):** `npm test`, `npm run typecheck` and `npm run build` all pass. Negative fixtures prove that the validator rejects unknown block syntax, a `draft` file in `content/`, an `approved` file without a matching `approved_sha256`, an edit to an existing `approved.md`, and English approved without Hindi approved. A manual browser check at 375px and desktop, in light and dark, covers: the collection, a story with every block type (placeholder text), the toggle keeping position, and not-found and empty states in both languages.

