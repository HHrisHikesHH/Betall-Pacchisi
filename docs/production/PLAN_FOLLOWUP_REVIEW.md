# Plan follow-up review: six targeted issues (2026-11-21)

> **Status: the user replied on 2026-11-21 and the outcomes are recorded as D-049 to D-053 in [../DECISIONS.md](../DECISIONS.md).** Outcomes: §1 and §2 approved as provisional working rules (D-051); §3 **changed** by the user to "ship what is ready, 19 stays the target" (D-049); §4 **not adopted**, the candidates stay suspended until the site is live (D-050); §5 approved **in principle only**, with a new, simpler architecture proposal in [APPROVED_TEXT_PROTECTION_PROPOSAL.md](APPROVED_TEXT_PROTECTION_PROPOSAL.md) that **supersedes §5's design** (D-052); §6 deferred until Session 2's research (D-053). The analysis below is kept as written, as the record of what was proposed. **Original status: PROPOSALS AND OPEN QUESTIONS.** This is a narrow review of the merged revision 2 plan ([PRODUCTION_PLAN.md](PRODUCTION_PLAN.md), [SLATE_AUDIT.md](SLATE_AUDIT.md), [FRAME_PROPOSAL.md](FRAME_PROPOSAL.md)), requested by the user after the merges of PR #9 and PR #12. It was written by one AI session. It is **AI analysis only**: no Sanskritist, specialist or human reader has checked it, and no primary text was re-read for it. The register entries it proposes (P-020 to P-025, Q-414, Q-415) are in [../DECISIONS.md](../DECISIONS.md) and [../OPEN_QUESTIONS.md](../OPEN_QUESTIONS.md) as **PROPOSED** and **OPEN**. **D-038 to D-048 are not rewritten.**

## 0. How the findings are classified

| Class | Meaning | Where it is handled |
|---|---|---|
| **A. Factual or documentation correction** | The records are wrong or out of date. No judgement involved | Already made in this PR (post-merge status), or listed in §7 as wording the audit should carry |
| **B. Proposed policy clarification** | The approved text is ambiguous or incomplete. A clarification is suggested | P-020 to P-025. Not binding until the user approves |
| **C. Decision requiring the user's approval** | It changes a source identity, a dilemma, a composed answer, a release rule or repository settings | Marked **USER** below. Nothing proceeds on it without the user |

| # | Issue | Class | Needs the user |
|---|---|---|---|
| 1 | TC-015: what Śaśiprabhā knew | A (wording), B (P-020) | Yes, at the A3 packet if a composed answer results |
| 2 | TC-002: Mandāravatī after revival | B (P-021) | Yes, her added wish is our composition |
| 3 | First release stays 19 | A (two sentences contradict D-038), B (P-022) | Yes |
| 4 | Suspended candidates | B (P-023) | Yes |
| 5 | Protection of approved text | B (P-024), C (repository settings) | Yes |
| 6 | The frame ascetic | B (P-025), C (his name and role words) | Yes |

---

## 1. TC-015: what Śaśiprabhā knew, and what she consented to

**What the repository records** (N1, [SOMADEVA_TALE_EVIDENCE.md](../research/SOMADEVA_TALE_EVIDENCE.md) TC-015, KSS 12.22; read from the record only, not re-read in the Sanskrit for this review):

| Point | Record | Source of the claim |
|---|---|---|
| She and Manaḥsvāmin fall in love at first sight; he carries her from the elephant; **she does not know his name** | KSS 3–19 | N1 |
| The king, fearing a brahman's curse, puts the "girl" (Manaḥsvāmin in disguise) to eat and sleep beside her | KSS 27–33. The "old brahman" is Mūladeva in disguise | N1 |
| She **confides her lovesickness to the new "friend"**. He then removes the pill and reveals himself. N1 records her "shame and wonder" (54). They marry by the *gāndharva* rite (mutual consent, secret) | KSS 34–56 | N1 |
| The record does **not** say what she knew of Mūladeva's plan, of the lie told to her father, of the later gift of the "girl" to the minister's son, or of Mṛgāṅkavatī's seduction | silent | N1 gives no verse for any of these |
| Her father gives her openly to Śaśin, who is disguised as the old brahman's "son"; **no consultation of her wishes is recorded** | KSS 100–105 | N1 |
| Variants: Ś 14 and Hindi XIV add a pregnancy. In J 13 the lover is a bard's son and the change is by a charm | | N1, N3 §3.1 |

**Finding (class A, and class B).** The audit's phrase "her prior consent" and "the lover had her consent" ([SLATE_AUDIT.md](SLATE_AUDIT.md) §5, TC-015) is true only in a narrow sense, and it must not be allowed to harden into "fully informed consent". On the record:

1. **Her consent to the marriage was given after the disguise was disclosed to her** (on N1's account of 34–56). So at the moment of marriage she knew the man was her rescuer in disguise. That is the strongest fact for the lover's side, and it is not nothing.
2. **But the access that produced that moment was obtained by a false identity.** She confided her desire to someone she believed was a girl, who had been placed beside her by a lie to her father. The intimacy of the "friend" stage was obtained under a materially false identity.
3. **She is not recorded as knowing the scheme.** Her consent was to the man, not to the plot around her: the deception of the king, the second "marriage" of the disguised lover to the minister's son, and the seduction of Mṛgāṅkavatī are not shown as known to her.
4. **Her consent to Śaśin is never sought at all**, and Śaśin enters through the same trickster's disguise.
5. **Her consent was also not free of the engineered situation.** Mūladeva built the setting in which only one man could reach her.

So the faithful description is: **consent given to the lover after disclosure of the disguise, but not informed consent to the scheme, and obtained inside a situation built by deceit.** "Consent under a materially false identity" describes the *first* stage truthfully; the later marriage came after disclosure.

**A second wording point.** The audit says "Both deceptions were Mūladeva's". On N1's account, Mūladeva **engineered** both, but **Manaḥsvāmin is a knowing participant in the first** (he takes the pill and lives as the girl) **and the sole actor in the Mṛgāṅkavatī seduction** (83–99), and Śaśin knowingly plays the "son" in the second. The sentence should say "engineered by Mūladeva, with each claimant a knowing participant in his own", so that neither claimant is cleared. This matters for the honest-difficulty test: if the lover is made a mere pawn, the dilemma softens.

**Unverified, and to be settled by the blueprint's A1.** (a) The verse-level text of 12.22.34–56: whether she speaks, what she says, and whether "shame and wonder" is followed by explicit agreement. (b) Whether Ś 14 or the Hindi show her knowing more. (c) Whether J 13's changes (a bard's son; a charm) alter what she knew. None of this was verified here.

**Proposal P-020 (class B).** Until A1 settles (a) to (c): the TC-015 blueprint and every later document describe her consent as above, and never as "informed". Any answer that treats her consent as decisive for either man is **our composition** and goes to the user at A3 (D-041). **USER** if the answer changes.

**Strongest counter-view, kept.** One reading says her own affection, expressed at first sight and again after the reveal, is her real consent, and that calling it "tainted" overweights Mūladeva. The proposal does not discard that: it is why her consent stays a factor in the dispute. It only forbids the words "fully informed".

---

## 2. TC-002: can Mandāravatī make a meaningful choice after revival?

**The source** (N1, KSS 12.9.8–40): she makes no recorded choice, speaks nowhere, and has no recorded wish. The father withholds her from all three. After revival the three men quarrel "overcome with desire". The riddle asks whose wife she is, and the answer sorts the men into father, "counted" son and "called" husband by their *acts* (reviver, bone-bearer, ash-keeper).

**Test: where could a post-revival choice go?**

| Option | What it does to the riddle | Honest assessment |
|---|---|---|
| **A. She chooses one of the three** | If she chooses the ash-keeper, her preference *coincides* with Vikram's answer and seems to ratify it. If she chooses another, Vikram's answer visibly overrules her | The first **launders** the verdict into consent, the second changes the dilemma into "do acts outrank her will?". **Both change the dilemma (D-041)** |
| **B. She refuses all three** | Her refusal denies the premise ("whose wife?") and the riddle collapses, or it must be re-asked as a different question | Strong for her dignity and **destroys the classification riddle**. Not recommended inside this tale. The audit already warns of this |
| **C. She states a preference and it changes nothing** | The riddle survives. Her voice is heard and then overridden by the men and the verdict | Honest, and it shows the cost. But it risks becoming a token gesture if staged as "she chose, and it did not matter" for effect |
| **D. She has a wish before death, is a person in the room at revival, and is not asked afterwards** (the audit's current proposal) | The riddle survives. Her agency is in desire, voice and perception, not outcome | **The least exaggerated.** The audit already says plainly that she cannot decide the outcome |

**Finding.** A *decisive* choice after revival cannot be added without breaking the riddle, as the audit says. The audit's option D is the sound one. Three constraints would keep it honest (class B, **P-021**):

1. **Label the wish as our invention** in the blueprint and in `additions.md`. KSS records no wish for her.
2. **Do not let any post-revival speech of hers resolve or ratify the verdict.** If she speaks, what she says must not point at the ash-keeper, the bone-bearer or the reviver in a way that makes Vikram's answer look approved by her.
3. **Do not claim the story gives her agency.** The accurate claim is: the telling lets her *be present* and *voice a wish that is overruled*. The reader is left with the question the source never asks. This is a limit, and the blueprint and the approval packet should say so in those words.

**Not recommended:** any scene in which she "accepts" the outcome. That would turn the verdict into her choice. **USER:** the added wish and the staging are our composition and go to A3.

---

## 3. First release: 19 remains the target

**Finding (class A).** Two sentences in the approved documents read as if the target could fall to 18 by itself:

- [SLATE_AUDIT.md](SLATE_AUDIT.md) §7: "the first release ships with 18 and nothing is substituted silently."
- [PRODUCTION_PLAN.md](PRODUCTION_PLAN.md) §11.1, Milestone C: "Release with the 19 if all pass (or with fewer, if you reject any)."

They sit beside D-038, which is stricter: a first-release tale is dropped **only by the user's decision**, and the lead then **presents replacement candidates for the user's decision**. The user has now said it directly: **19 stays the target, a TC-003 rejection must trigger replacement candidates and the user's approval, and the target is not silently lowered to 18.** The two sentences contradict that reading and should not be read as authority for a smaller release. They have **not been rewritten**: this PR adds a marked note beside each.

**Proposal P-022 (class B, USER).**

1. **TC-003 rejected** (by the user, per D-038 and D-048) → the lead prepares **replacement candidates** and the user selects. The slate stands at "19 target, 18 in production, 1 pending replacement" until then.
2. **The target remains 19.** Reaching a release with fewer than 19 is possible **only by an explicit user decision**, recorded in the register, taken after the user has seen the replacement candidates.
3. **Replacement assessment is not activation.** See §4.
4. The existing rider stands: a replacement joins the first release only if it completes the full workflow without delaying the others; otherwise it is the first post-launch addition, still under the 25-tale goal.

**Dependency.** Whether TC-003 survives is decided at A3 (SLATE_AUDIT §7). Nothing here predicts that outcome.

---

## 4. Suspended candidates

**What the approved text says.** D-038: suspended (TC-004, 005, 012, 014, 017, 023) "may be reconsidered only at the user's request and then go through the full process". PRODUCTION_PLAN §0 and §11.1 Milestone D: research may be done on the suspended pool for post-launch expansion, but "*not* automatic", with "your selection approval" as step (4). SLATE_AUDIT §7 lists them as starting points for replacements.

**The gap.** The text allows research and also says "reconsidered only at the user's request". Read strictly, those can be taken to conflict, and it does not say what research *may* produce, or what makes a candidate **active**.

**Proposal P-023 (class B, USER).** Three states, so that nothing changes silently:

| State | Meaning | What may exist |
|---|---|---|
| **Suspended** (current) | Not in production, not a replacement option | Existing dossiers only |
| **Under research** (new, not active) | The lead or a researcher may gather evidence for **post-launch expansion** or to prepare replacement options | Research notes and assessment (A1-level evidence, a recommendation). **No `blueprint.md`, no draft, no `content/` file, no slate row change** |
| **Active** | Selected for production | **Only by the user's selection approval**, recorded as a decision (D-number). Until then SLATE.md and the register keep it as suspended |

Rules: (1) research on a suspended candidate never delays the 19 (already in D-038); (2) a research note recommends and never promotes; (3) the pending comparisons the user named (TC-004 vs 017, TC-005 vs 009, TC-012/014/023) remain the user's to decide; (4) outside candidates follow the existing supplementary-register rule.

---

## 5. Approved-text protection

**The weakness in the approved design.** D-045 and D-047 bind an approved text to `approved_sha256`, "recorded in `status.md` and in the published file", and PRODUCTION_PLAN §10 adds "a CI rule fails any change to an existing `approved.md`". Three problems:

1. **A hash stored beside the content it authenticates proves nothing alone.** A change to the text and to the hash in the same commit passes any check that compares only the two.
2. **There is no CI.** The repository has no `.github/` directory and no workflow. The "CI rule" in §10 does not exist yet and is an unbuilt promise.
3. **The check, the ledger and the approved files all live in the same repository the change comes from.** A pull request can edit the checker as easily as the text.

**Design principle.** Compare against something the change cannot edit: the **protected target branch as it stands before the change**, plus an **independent record** of approval.

### 5.1 The proposed design (P-024)

**Protected set.** Every `stories/*/{hi,en}/approved.md` (and `revision-N/…`), every `content/stories/**` file whose front matter says `status: approved`, and the approvals ledger.

| Layer | What it does | Defeats |
|---|---|---|
| **L1. Baseline comparison against the target branch** | On every PR to `main`, a job takes the **merge base with `main`** (a commit the PR cannot rewrite) and lists the protected files that exist there. At the PR head, each must exist at the same path with a **byte-identical blob** (compare git object ids, not front matter). Any modify, delete or rename of a protected path fails the job. The text is compared to the **base blob**, never to the hash in its own file | Edit text and hash together |
| **L2. Independent approval record** | An **append-only ledger** `stories/approvals/LEDGER.jsonl`, one line per approval: `id`, `lang`, `revision`, `sha256` of the normalised body, `approved_commit`, `approver`, `date`, `supersedes` (previous sha or empty). **Independence comes from outside the PR:** a **protected, annotated tag** `approved/TC-013-hi-r1` created **by the user** on the approving merge commit (ideally signed). The tag cannot be changed by a pull request and is protected by a tag ruleset. A scheduled and post-merge audit job checks, for every ledger line, that the tag exists, that its commit contains a blob whose sha256 matches, and that the ledger on `main` is a **strict prefix-extension** of its earlier state (lines are never changed or removed) | Edit the ledger to match edited text; quietly drop a line |
| **L3. The embedded hash is demoted** | `approved_sha256` in a published file is a **consistency check for the build**. The build compares it to the **ledger entry read from the base branch**, never to the file itself. Normalisation is specified once: UTF-8, LF, Unicode NFC, one trailing newline, hash over body bytes. L1 uses raw blobs, so it does not depend on normalisation | Hash forgery inside a file; Devanagari encoding differences |
| **L4. Protect the checker** | `.github/**`, the checker script and CODEOWNERS are CODEOWNERS-protected for the user. The workflow runs the **checker from the base commit**, not from the PR head, so a PR cannot weaken the rule it is judged by (the usual caveat: a workflow that checks out untrusted code must not run with secrets; the check needs none) | Edit the rule in the same PR |
| **L5. Branch and tag protection (repository settings)** | Required status check, required review by the user as CODEOWNER on protected paths, no force-push and no deletion on `main`, tag ruleset on `approved/*`, linear or merge-commit policy chosen deliberately | Rewriting history; squash changing commit ids |

### 5.2 The rule for revising approved text (separately approved process)

A revision **never edits** an approved file. The only way to change what an approved story says:

1. **Open.** The user opens a revision: a PR adds `stories/TC-x/revision-N/OPENED.md` (reason, scope, reference to the user's instruction). It touches no approved file. CODEOWNER review is the record.
2. **Produce.** The full workflow runs inside `revision-N/` (drafts, critiques, verification). Old files stay where they are, forever.
3. **Approve.** On the user's explicit yes, `revision-N/hi/approved.md` is added as a **new file**; a new ledger line carries `supersedes`; the user creates the new protected tag.
4. **Publish.** A **separate, content-only** commit replaces the published file. The change is allowed only if the new body's hash equals the **newest ledger entry for that id and language**, whose tag exists, and the PR changes nothing under `src/` (D-015).
5. **A first approval** has no base blob to compare. It is accepted if the ledger line, the new file and the user's CODEOWNER review agree; the post-merge audit then requires the tag.

**CI rule.** Reject any PR that modifies, deletes or renames a protected path unless **steps 1 to 3 are present in the base branch already** (the `OPENED.md` and the new approved revision with its ledger line and tag) and the change is step 4.

### 5.3 Tests that must exist before the rule is trusted (R7)
Each of these must **fail**: edit `approved.md`; edit it and its embedded hash together; edit it, the hash and the ledger line together; delete or rewrite a ledger line; rename `approved.md`; change a published copy only; edit the checker in the same PR; publish an English file whose Hindi twin is not approved; merge a content change with a `src/` change. One must **pass**: a properly opened, approved and tagged revision.

### 5.4 Honest limits
- **The owner can override everything**, because the owner controls the repository. These controls stop accidents, automation and AI sessions. They do not stop the user, and they are not meant to.
- **Settings are the user's.** Branch protection, CODEOWNERS enforcement and tag rulesets are repository settings that an AI session cannot, and should not, set. **USER.**
- **An AI session never creates an approval tag or a ledger line on its own authority.** Approval comes only from the user's explicit yes in chat (D-046, STORY_WORKFLOW).
- This costs real work (a workflow, a checker, fixtures). It belongs in R7 and need not block the pilots, because no story is approved yet. It **must** exist before the first story is approved.

**Open question Q-415:** should D-045 and D-047 be amended to state that the embedded hash alone is not sufficient, and adopt L1 to L5? Recommendation: yes, before the first approval.

---

## 6. The frame ascetic: name, phrase and imagery

**The question.** The user's decision (D-043) is that the ascetic is **unmarked by sect**. The working-base *wording* in [FRAME_PROPOSAL.md](FRAME_PROPOSAL.md) §8.2 is not itself a decision: it keeps the name **Kṣāntiśīla** and calls him "**a sādhak of the burning ground**". Does that wording, or the imagery around it, still imply a living religious identity?

**What the repository records** (FRAME_PROPOSAL §8.1; nothing was re-read for this review):

| Witness | What it calls him |
|---|---|
| KSS | a Buddhist *bhikṣu* named Kṣāntiśīla |
| Ś | a yogī; *digambara* (Jain) in the printed ending |
| J | a *kāpālika* |
| Hindi | a devotee who was a potter (prehistory) |

**Findings, with their limits.**

1. **The name.** In the one witness we are using for structure, **Kṣāntiśīla is the name of a Buddhist monk**. Keeping the name keeps that association for any reader who knows it. The repository holds no evidence on how widely the name or the *-śīla* ending is recognised as Buddhist, and **no claim about that is made here**. The risk is real but unquantified. The proposal's own account of the name's irony ("patience") is a literary point, not a historical one.
2. **The phrase.** *Sādhak* (practitioner of *sādhanā*) is a general term used across several living traditions. It is **a religious or ritual role, not a neutral one**. "**Of the burning ground**" (*śmaśāna*) points at the cremation-ground practice that the proposal itself says it wants to avoid labelling ("tantrik", Kāpālika). So "unmarked by sect" is achieved for **sect** but not for **religious practice**. The phrase moves him from a named community to an unnamed practice.
3. **The imagery.** The proposal already avoids skulls and Bhairava iconography. Ash, matted hair, a trident, saffron, a cremation ground at night and a hidden fruit-gift are **visual conventions** shared with how Hindi film and television draw a stock villain. This review makes **no historical claim** about any real community. It notes only that the convention exists in popular drawing, the proposal's own challenger said as much about "tantrik", and that illustration is postponed to Milestone E, when it will have to be checked again.
4. **The act.** What the source ties to him is **an individual's attempt at human sacrifice for personal power**. No source in the repository ties human sacrifice to a living religious community, and none shows it as that community's practice. This is what the charter's §3.2.8 test depends on (an individual's acts, not a collective's character) and it holds, but **it holds only if the telling does not present the act as what such practitioners do.**
5. **The risk the user named is not removed by the current wording.** A reader meeting "a *sādhak* of the burning ground" is likely to read "a tantric". The wording lowers the risk. It does not end it.

**Options (for the frame's A3, class C, USER).**

| Option | For | Against |
|---|---|---|
| **1. Keep the name and the phrase** (current working base) | Closest to KSS and to the proposal's irony | Name keeps a Buddhist association; phrase implies a living practice |
| **2. Keep the name, drop the practice words**: he is a man who has learned a rite and means to use it, with no title that names a discipline | Keeps KSS's irony and the research link | Name's association remains |
| **3. Drop the name and the practice words**: defined by what he wants and does, named by his own claim or by Betal | Removes both the sect and practice signals | Loses KSS's attested name (a recorded invention); weaker mystery if he stays a stock "stranger" |
| **4. Option 2 or 3 plus a counterweight in events**: the burning ground has people who tend it and who treat the ascetic's rite as foreign, shown in passing as people (FRAME_PROPOSAL §8.3), not as spokesmen | Individualises him against the setting | Must not turn the cremation-ground workers into a caste-coded device (charter §3.2); needs the caste reviewer |

**Recommendation (one option, not the only one):** Option 2 or 3 with Option 4 handled at A3 by the caste/power reviewer. Decide **after** Session 2's source research establishes exactly what each witness calls him, because the answer to "is Kṣāntiśīla sectarian in the source or only in our reading" is a research finding, not a guess.

**Proposal P-025 (class B):** until the user decides, the blueprint and every segment draft avoid the words *tantrik*, *Kāpālika*, *aghori* and any named order, **and treat "sādhak" as provisional**, not as settled wording. **Q-414 (class C, USER):** the ascetic's name and role words.

---

## 7. Corrections made, and wording the audit should carry

**Made in this PR (class A):** the post-merge status in HANDOFF, PROJECT_PLAN and PRODUCTION_PLAN; R0 marked completed; the repository snapshot and the §11.3 "repository state" paragraph marked as dated history; and marked pointer notes beside the two "18" sentences (§3) and the TC-015 consent wording (§1).

**Left for the blueprint stage (not edited here):** the TC-015 wording in §1; the TC-002 constraints in §2; any rewording of SLATE_AUDIT §5. D-038 to D-048 are untouched.

## 8. Decisions that need the user (summary)

| # | Decision | Why it is yours |
|---|---|---|
| P-020 | Describe TC-015 consent as above; never "informed" | Changes how the dilemma is framed |
| P-021 | Keep Mandāravatī's agency to voice and presence; add a labelled wish | A composed addition (D-041) |
| P-022 | Target stays 19; fewer only by your decision after seeing replacements | Release rule (D-038) |
| P-023 | Suspended candidates: research allowed, activation only by your approval | Selection |
| P-024, Q-415 | Approved-text protection design; amend D-045 and D-047 | Policy and repository settings |
| P-025, Q-414 | The ascetic's name and role words | Source identity (D-043) |
