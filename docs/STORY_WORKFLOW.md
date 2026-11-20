# Story Workflow

This document describes the process every story goes through, from research to approval. It applies decisions D-012 and D-019 to D-022 in [DECISIONS.md](DECISIONS.md). Writing standards are in [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md), and source rules are in [SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md).

## 1. Principles

**APPROVED**

- **At least three substantial writing iterations** per story. Three is a **minimum, not a quota**: revise further whenever the story is not ready. (D-019)
- **One-shot generation is never an acceptable final process.** (D-019)
- **The author must not approve their own work.** Use separate writer, critic, and verifier roles wherever practical. Do not rely on an AI model to validate its own output without independent review. (D-020)
- **Everything is kept.** Drafts, critiques, source notes, revision history, and approval status are all preserved. (D-021)
- **The user is the final creative director and approval authority.** (D-022)
- **Hindi first.** The English adaptation begins only after the Hindi story is approved. (D-012)

## 2. Roles

*Role separation is APPROVED (D-020). The specific "Must not" limits for the researcher and critic are PROPOSED.*

| Role | Responsibility | Must not |
|---|---|---|
| **Researcher** | Finds and compares sources, and prepares the blueprint (Stage 1). | Present unverified claims as fact. |
| **Writer** | Writes and revises drafts. | Approve their own draft, or act as its critic or verifier. |
| **Critic** | Gives a candid, specific editorial critique of each draft against [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md). | Rewrite the story themselves in place of critiquing it. Rewriting is the writer's job. |
| **Verifier** | Checks the final draft against the identified sources and reviews creative additions (Stage 5). | Be the same person or AI session that wrote the draft. |
| **Creative director (the user)** | Gives final approval, settles disputes, and decides open questions. | — |

**On AI collaborators:** when AI does more than one role, each role should run as a **separate, independent session or instance** with its own instructions. A session must not critique or verify text it produced itself. Wherever practical, a human or a differently prompted model should review AI output. The user's approval is always required at the end. *Exactly how these roles will be staffed (people, models, or a mix) is OPEN: see `Q-405`.*

## 3. Stages

### Stage 1: Research and story blueprint

Produced by the researcher and shared by both languages.

- Identify which source traditions contain this tale, and the differences between them. (See [SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md) §5.)
- Establish:
  - the central plot and chronology,
  - the characters and their relationships,
  - the riddle or dilemma, and Vikram's resolution,
  - the essential events that any retelling must keep.
- Record which elements, if any, are borrowed from different traditions and why (D-034; practical guide in [STORYTELLING_NORTH_STAR.md](STORYTELLING_NORTH_STAR.md) §7), and note any D-035 distinctness question (a repeated plot counts separately only with a genuinely different dilemma or a substantially different story) for the user. Which tales form the 25 is `Q-411`, decided by the user, not tale by tale.
- Note the emotional and thematic **possibilities**, without imposing a fixed interpretation.
- *PROPOSED:* note candidate atmosphere moments (time, weather, setting, intensity) and candidate illustration moments. These are notes for later work and not decisions.
- List the open questions this tale raises.

**Exit:** a blueprint the writer can work from, with sources cited.

### Stage 2: Draft 1 (Hindi)

Produced by the writer.

- Write the **complete** Hindi story.
- Focus on structure, coherence, character motivation, dialogue, atmosphere, curiosity, and emotional engagement.
- Mark creative additions so they can be traced (see [SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md) §6).

**Then:** the critic writes **Critique 1**.

### Stage 3: Draft 2 (substantive editorial revision)

Produced by the writer in response to Critique 1. Examine:

- weak passages,
- pacing,
- artificial dialogue,
- character behaviour that does not convince,
- missed emotional opportunities,
- forced philosophical observations.

**Then:** the critic writes **Critique 2**.

### Stage 4: Draft 3 (demanding literary revision)

Produced by the writer in response to Critique 2. Examine:

- the opening,
- suspense and reveals,
- narrative rhythm,
- emotional depth,
- believability,
- whether deeper insights emerge naturally or feel imposed.

**Then:** the critic writes **Critique 3**. If the story is not ready, the cycle repeats (Draft 4, Critique 4, and so on) before moving to Stage 5.

### Stage 5: Independent verification and approval

- **Source verification** (verifier): check the story against the identified sources. Confirm that the essential events are present and that no claim presented as fact is unsupported.
- **Review of additions** (verifier): examine each significant creative addition against the "disciplined relevance" test in [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) §2.
- **Editorial check** (critic): confirm the story meets the literary standards.
- **Approval** (the user): the Hindi story is marked **APPROVED** only on the user's explicit decision.

### Stage 6: English literary adaptation

Begins **only after the Hindi story is APPROVED**. (D-012)

- Adapt from the **approved Hindi text**, using the shared blueprint for context.
- The adaptation is literary, not word-for-word (D-013). See [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md) §4 for its approved requirements and the proposed working guidelines (P-007).
- **PROPOSED:** the English version goes through its own writer and critic iterations, then a check that it preserves the meaning, impact, atmosphere, and depth of the approved Hindi, then the user's approval. *The number of iterations and who does the check are OPEN: see `Q-403`.*

### After approval

*PROPOSED:* if an approved Hindi story is changed later, the change should go through critique and the user's approval again. **Whether and how the English adaptation is then updated is OPEN** (`Q-403`).

## 4. Story status values

**PROPOSED.** These will be used once story work begins.

| Status | Meaning |
|---|---|
| `research` | Stage 1 in progress |
| `blueprint-ready` | Blueprint complete and cited |
| `hindi-draft-N` | Hindi draft N written, critique pending or done |
| `hindi-verification` | Stage 5 in progress |
| `hindi-approved` | Approved by the user |
| `english-draft-N` | English adaptation draft N |
| `english-approved` | Approved by the user |
| `revision-requested` | The user or a verifier has sent it back |

## 5. Record-keeping

**APPROVED (D-021):** keep drafts, critiques, source notes, revision history, and approval status.

### Proposed record-keeping structure

**Historical proposal (P-001), now SUPERSEDED by D-045 (2026-11-21).** The approved structure is in §6.3 below and in [production/PRODUCTION_PLAN.md](production/PRODUCTION_PLAN.md) §10. The sketch below is kept as the record of the original proposal.

```
stories/
  NN-<short-slug>/
    status.md            # current status, history of status changes, approvals with dates
    research/
      sources.md         # traditions, editions, variant record
      blueprint.md       # Stage 1 output
    hi/
      draft-1.md
      critique-1.md
      draft-2.md
      critique-2.md
      draft-3.md
      critique-3.md
      verification.md    # Stage 5 report
      approved.md        # only created on the user's approval
    en/
      draft-1.md
      critique-1.md
      ...
      approved.md
```

The folder location and naming, including how tales are numbered, are subject to the user's approval and to `Q-406`.

**Whatever structure is adopted:**

- Never overwrite a draft. Each revision is a new draft.
- Each critique names the draft it reviews.
- Each approval records **who approved, when, and which exact text** (for example, a Git commit).
- Approved text is changed only through the revision process above.

## 6. Production additions (APPROVED 2026-11-21: D-041, D-042, D-045, D-046, D-047)

These add to §§1–5 and replace nothing in them. D-019's stages and three-draft minimum, D-020's independence, D-021's record-keeping and D-022's approval authority are unchanged. The full working detail is in [production/PRODUCTION_PLAN.md](production/PRODUCTION_PLAN.md) §§9–10. The ethical standard is [ETHICAL_CHARTER.md](ETHICAL_CHARTER.md).

### 6.1 Stages with ethics gates (D-042)

| Stage | Adds to | What happens |
|---|---|---|
| **A1 Research** | Stage 1 | Starts **from** the dossier, N1, N3 and the slate audit; fills gaps and verifies. Does not repeat completed research. |
| **A2 Blueprint** | Stage 1 | Source question and answer verbatim; the adapted question and answer in D-041 form; role table (charter §3.6); safeguards; confidence. |
| **A3 Ethics pre-review** | new gate | Ethics reviewer(s) by risk tier, plus the challenger for MAJOR REWRITE tales and the frame. Must pass the **honest-difficulty test** (D-041). Composed answers or reasoning and dilemma changes go to the user in a **batched A3 packet**. |
| **B Drafts 1–3+** | Stages 2–4 | Critique 2 includes an ethics and character section. |
| **C Verification** | Stage 5 | A **fresh verifier, never the writer**, reads the sources and the final draft, not the writer's notes. It adds a charter check. |
| **D Approval** | Stage 5 | The approval packet states the **review status** (§6.4). |
| **E English** | Stage 6 | A separate adapter, a critic and a fresh fidelity verifier. |

### 6.2 Roles and contexts (D-046)
Separate AI contexts wherever independence matters. A context is reused only within its own sequence (a writer across drafts, a critic across critiques). **The verifier is always fresh.** Review effort scales with risk: ADAPT tales get one combined ethics reviewer; MAJOR REWRITE tales get two ethics reviewers plus the challenger; the frame gets the strongest review. Unresolved ethical dissent is always recorded and escalated.

### 6.3 Records (D-045)
```
stories/
  README.md, SLATE.md
  FRAME/                      # same layout as a tale, plus segments.md
  TC-NNN/                     # stable research ID, never renamed
    status.md                 # status history, approvals (who, when, commit, sha256), review status, reconciliation notes
    research/sources.md, research/additions.md
    blueprint.md
    ethics/blueprint-review.md, ethics/challenge.md
    hi/draft-N.md, hi/critique-N.md, hi/verification.md, hi/approval-packet.md, hi/approved.md
    en/draft-N.md, en/critique-N.md, en/fidelity-check.md, en/approval-packet.md, en/approved.md
```
Drafts are never overwritten. `approved.md` is immutable and bound by a sha256 of its normalised body, recorded in `status.md` and in the published `content/` file (D-047). A later change starts a new revision cycle and needs a new approval.

### 6.4 Review status (D-046)
Every `status.md` and approval packet records exactly one of:
- `AI review completed`
- `Human review completed` (role, date, scope, notes file)
- `Human review not obtained` (and why)

An AI-reviewed text is **never** described as human-verified. Human Hindi literary and sensitivity readers are recommended, not blocking. The priority texts are listed in the production plan §9.4.

