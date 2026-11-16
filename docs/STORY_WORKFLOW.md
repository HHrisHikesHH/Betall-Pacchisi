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
- Note the emotional and thematic **possibilities**, without imposing a fixed interpretation.
- Note candidate atmosphere moments (time, weather, setting, intensity) and candidate illustration moments. These are notes for later work and not decisions.
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
- The adaptation is literary, not word-for-word (D-013). It goes through its own writer and critic iterations, followed by a **faithfulness check against the approved Hindi** and the user's approval. *How many iterations the English version needs, and who checks faithfulness, is OPEN: see `Q-403`.*

### After approval

If an approved Hindi story is changed later, the change must go through critique and the user's approval again. **Whether and how the English adaptation is then updated is OPEN** (`Q-403`).

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

**PROPOSED (P-001).** This is not yet created or approved. It is kept separate from any future application code, in line with D-015.

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
