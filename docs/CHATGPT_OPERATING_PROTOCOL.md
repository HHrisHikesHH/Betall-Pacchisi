# ChatGPT Operating Protocol

*Created 2026-11-23. Governs how ChatGPT works on this project. It is **not** the authority on decisions, sources, story progress or GitHub state; those are named in §A.*

**Arrangement.** The user starts an ordinary ChatGPT conversation with: "Read and follow `docs/CHATGPT_OPERATING_PROTOCOL.md` before answering. Then handle my request: [request]". Nothing here depends on Projects, Custom Instructions or memory. **The repository is the persistent source of truth;** ChatGPT memory and conversation history are navigation aids only. The user is the creative director and final decision-maker (D-022). No proposal, AI review, Claude report or merged PR equals the user's approval.

Repository: `HHrisHikesHH/Betall-Pacchisi`. "Claude" means a Claude Code session working in a checkout. A separate Claude protocol is a later task and does not exist yet.

---

## A. Authority and conflict resolution

Authority depends on the subject. There is no single global ranking.

| Subject | Governing authority |
|---|---|
| What the user has decided | [DECISIONS.md](DECISIONS.md) (approved entries only; PROPOSED and PREF entries are not decisions). Where another document disagrees, the register wins ([README.md](README.md), maintenance rule 1) |
| What to do in the current task | The user's **latest explicit instruction**. A *temporary execution instruction* ("park X, do Y now") changes the order of work for now and does **not** amend a decision. Only the user's explicit approval creates or changes a decision, and it is then recorded in DECISIONS.md |
| What a source says | The actual cited source text and edition, as examined. A summary of a source (including the comparison report, the dossier or any AI note) is a lead until traced to the text |
| Whether research is complete | The evidence records and their source-coverage detail (for example [SOMADEVA_TALE_EVIDENCE.md](research/SOMADEVA_TALE_EVIDENCE.md), `stories/<ID>/research/`), not a status line |
| Story or frame progress | `stories/<ID>/status.md` plus the deliverables that actually exist in that folder ([STORY_WORKFLOW.md](STORY_WORKFLOW.md) §4, §6; [../stories/SLATE.md](../stories/SLATE.md)) |
| Branches, commits, PRs, merges | Live GitHub state, checked now |
| Which document governs which subject | [README.md](README.md), table "Documents and what each one governs" |
| Current status and next task | [HANDOFF.md](HANDOFF.md), as a **dated snapshot**. It never overrides decisions, evidence or live GitHub |
| ChatGPT's own workflow | This protocol |

### Mandatory conflict-resolution sequence

When two statements disagree:

1. **Identify** the exact conflicting statements and the files or sources they come from.
2. **Determine** which authority governs the subject (table above).
3. **Check** timestamps, commit history, branches and current GitHub state.
4. **Check** the user's latest explicit instruction.
5. **Decide** whether one record is stale or the conflict is genuinely unresolved.
6. **Resolve** only when the evidence and authority make the answer clear.
7. **Otherwise** state the conflict and ask the user **one** focused question.
8. **Name** the exact records that need correction.

Never silently pick the convenient version. Never let a stale handoff override GitHub, an approved decision or actual evidence.

---

## B. Startup procedure for every new chat

1. Read this protocol.
2. Read [README.md](README.md) (authority map, status labels, maintenance rules).
3. Read [HANDOFF.md](HANDOFF.md) as a **snapshot** (check its "Last updated" date and header).
4. Read [DECISIONS.md](DECISIONS.md).
5. Check current `main` HEAD, and live PR and branch state when the question depends on repository progress (§C, "GitHub state").
6. Classify the task into one of the seven categories in §F.
7. Read the **smallest sufficient** set of task-specific governing documents and actual evidence.
8. Record the paths and sections that support the answer; cite them (§C).

In later messages of the same chat, recheck only what may have changed (GitHub state, files the user says changed). Do not blindly reread everything.

**If repository access is unavailable**, say so at the start. Do not substitute memory or earlier conversation for current evidence, and mark every project claim "not verified against the repository".

---

## C. Claim-to-evidence procedure

Before any material factual claim about the project, check it against the evidence in this table. Inspect the real document, deliverable, diff or GitHub state; do not rely on a summary of it.

| Claim type | Minimum evidence |
|---|---|
| **Research complete** | The evidence record itself, with source coverage per witness (§D list). A status line, a handoff sentence or a PR title is not enough. Say which witnesses were read, how, and which were not |
| **Source statement** | The passage in the cited edition (verse, page or section), actually examined this session or quoted from a record that itself cites it. Record the edition, the language read, and whether AI-read or specialist-verified |
| **User-approved decision** | An APPROVED entry in [DECISIONS.md](DECISIONS.md), or the user's explicit statement in this chat. A PROPOSED entry, a recommendation or "the plan says" is not approval |
| **Story or frame status** | `stories/<ID>/status.md` **and** the files it names (blueprint, drafts, critiques, `approved.md`) |
| **Deliverable completed** | The file exists at the stated path on the stated branch or `main`, covers every item of the acceptance criteria, and a diff or read confirms it |
| **AI review / human review** | The review file itself, the draft it names, and its review-status line ([STORY_WORKFLOW.md](STORY_WORKFLOW.md) §6.4). "AI review completed" is never "human-verified" |
| **Branch, commit, PR status** | Live GitHub now (`gh`, the web UI or API): PR state, merge commit, branch head, checks |
| **Next task and dependencies** | The governing plan ([production/PRODUCTION_PLAN.md](production/PRODUCTION_PLAN.md) §11), the relevant decision, the user's latest instruction, and what actually exists |

### Rules

- Cite exact repository paths and sections in every user-facing answer that states a project fact. Link commits and PRs where relevant.
- Label each statement as a **source fact**, **repository fact**, **user instruction**, **inference** or **recommendation**. Do not blend them.
- Say plainly when a claim cannot be verified, and why.
- Never say a source has been read unless the text was actually examined. Never call AI reading "verified" in the specialist sense ([SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md) §10; D-020).
- **Presentation is proportionate.** Multi-claim status reports and substantial reviews get a compact evidence table (claim | evidence | status). Simple questions get short inline references, not a table.

---

## D. Efficiency and non-repetition

The system must prevent: repeated research; re-reading large sources without a specific reason; recreating existing documents; reopening settled decisions; several Claude prompts for one task because the first was incomplete; nested task-within-task growth; endless review cycles; partial work reported as complete; unsupported or guessed progress; asking the user for what the repository or chat already holds.

### Gap-first workflow

1. Define the outcome.
2. Inventory existing work and evidence.
3. Identify exactly what is missing.
4. Explain why it is missing or insufficient.
5. Do only the missing work.
6. Validate against acceptance criteria.
7. Close with evidence and remaining limitations.

### Source coverage vocabulary

When recording or reporting source work, classify each witness as exactly one of:

- Full original-language reading
- Full reading in translation
- Partial reading
- Selected excerpt
- Secondary-source account
- OCR-only reading
- Title or concordance-level correspondence
- Unread
- Not yet verified

(Existing records already use this kind of detail, for example the "Witnesses used" table in [../stories/FRAME/research/sources.md](../stories/FRAME/research/sources.md) §1. Reuse their wording; do not reclassify upward.)

### Rules

- **Reuse valid existing evidence.** Reopen a source only for: a specific passage needed to verify an unresolved claim; a known error; a different edition; or the user's explicit request for independent checking.
- **Incomplete scope is stated as incomplete:** list what remains and mark the task incomplete. Do not write "done" or "complete" until every acceptance criterion is met.
- **One request, one coherent task, one consolidated Claude prompt.** Claude completes every in-scope step, including required file updates and validation. Do not split obvious sequential substeps into separate prompts.
- **Ask the user only** when an unresolved matter materially blocks the work or needs their approval. Otherwise state a clear, bounded assumption and continue.
- Do not broaden a task with unrelated recommendations or subprojects. Report discovered inconsistencies separately; do not fix them silently.

---

## E. Operating modes

ChatGPT picks a mode automatically if the user does not. The user may choose one.

| Mode | Use for | What it requires |
|---|---|---|
| **QUICK** | Simple questions, explanations, narrow checks | Startup (§B) still applies. Read only the specific records the question needs. Answer directly; do not expand the task |
| **STANDARD** | Normal project work, planning, editorial discussion, Claude prompts, status reports | Inspect governing documents, existing deliverables and relevant GitHub state. Reconcile previous work before recommending more |
| **DEEP** | Primary-source research, complex audits, difficult reviews, important decisions | Trace source evidence and per-witness coverage, cross-document consistency, history and diffs. Verify every acceptance criterion. State limitations and unresolved issues. Never present partial research as complete |

### First-message templates

Copy one, replace the bracket. The mode word is part of the template; the user need not repeat it later.

```text
Read and follow docs/CHATGPT_OPERATING_PROTOCOL.md before answering. Then handle my request: [request]
```

```text
Read and follow docs/CHATGPT_OPERATING_PROTOCOL.md before answering. Use QUICK mode. [request]
```

```text
Read and follow docs/CHATGPT_OPERATING_PROTOCOL.md before answering. Use STANDARD mode. [request]
```

```text
Read and follow docs/CHATGPT_OPERATING_PROTOCOL.md before answering. Use DEEP mode. [request]
```

The first template lets ChatGPT choose the mode. If the repository is private, the user also supplies access (connector, pasted files or links) as part of the first message.

---

## F. Task-specific workflows

Use [README.md](README.md)'s authority table. Do not create new sources of truth. Each workflow assumes §B has been done.

### 1. Research and source verification

- **Read:** [SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md) §§3–7, §10; the story's `stories/<ID>/status.md` and brief; existing evidence ([research/SOMADEVA_TALE_EVIDENCE.md](research/SOMADEVA_TALE_EVIDENCE.md), [research/JAMBHALADATTA_ADDITIONAL_TALES_EVIDENCE.md](research/JAMBHALADATTA_ADDITIONAL_TALES_EVIDENCE.md), [research/CANDIDATE_TALE_CATALOGUE.md](research/CANDIDATE_TALE_CATALOGUE.md), [selection/story-buckets/](selection/README.md)); the story's `research/` folder if it exists.
- **Verify:** per-witness coverage using the §D vocabulary; every claim cited to edition and verse or page, or marked "unverified"; what needs a Sanskritist or Hindi specialist.
- **Complete when:** every acceptance item in the task or brief is met, limits are stated, and the record separates source fact from interpretation.
- **Do not assume:** that AI reading equals specialist reading; that a concordance match means the content is the same; that one tradition is the base (Q-401 is open; D-034 allows combination); that an OCR text is collated with a print edition.

### 2. Project progress and status

- **Read:** [HANDOFF.md](HANDOFF.md) (snapshot), [PROJECT_PLAN.md](PROJECT_PLAN.md), [production/PRODUCTION_PLAN.md](production/PRODUCTION_PLAN.md) §11, [../stories/SLATE.md](../stories/SLATE.md), the relevant `stories/<ID>/status.md`.
- **Verify:** every status claim against live GitHub (`main` HEAD, PR state) and the actual files; compare the handoff's date with recent commits; use an evidence table.
- **Complete when:** each claim has evidence or an explicit "not verified", and stale records are named.
- **Do not assume:** that the handoff is current; that an open or merged PR means approval; that a status field means the deliverable exists.

### 3. Preparing prompts for Claude

- **Read:** §G of this protocol; the governing documents and evidence for the task (do the research first); [../CLAUDE.md](../CLAUDE.md) for the repository's working rules.
- **Verify:** every path and section cited in the prompt exists; every decision cited is APPROVED; the base branch and PR state are current.
- **Complete when:** the prompt meets all twelve §G elements and is self-contained for a fresh session.
- **Do not assume:** that Claude may touch unrelated files, decisions, approved text, or merge; that Claude will rediscover context; that a prompt may leave a user decision for Claude.

### 4. Editorial reasoning and user decisions

- **Read:** [DECISIONS.md](DECISIONS.md); [STORYTELLING_NORTH_STAR.md](STORYTELLING_NORTH_STAR.md); [EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md); [ETHICAL_CHARTER.md](ETHICAL_CHARTER.md); [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md); the story's `status.md`, blueprint and critiques.
- **Verify:** whether the question is already decided (cite the decision), already open (cite Q-id), or new. Present options with the evidence for each and one recommendation, labelled as such.
- **Complete when:** the user has what they need to decide, with a single clear question, and the entry to record is identified (decision, resolved Q-id, affected documents).
- **Do not assume:** that a PROPOSED item, a PREF entry or an AI critique is a decision; that approval of one story or point carries to another; that the narrator's identity (Q-005) or art direction is settled.

### 5. Reviewing Claude's work

- **Read:** §H of this protocol; the exact prompt; Claude's report; the changed files and diff.
- **Verify:** as §H.
- **Complete when:** the consolidated review (§H) is delivered with a verdict.
- **Do not assume:** that the report is accurate; that tests passed because the report says so; that a commit message describes the diff.

### 6. Project planning and prioritisation

- **Read:** [production/PRODUCTION_PLAN.md](production/PRODUCTION_PLAN.md) §11, [PROJECT_PLAN.md](PROJECT_PLAN.md), [HANDOFF.md](HANDOFF.md) "Recommended next task", the relevant decisions (D-038 to D-058), [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md).
- **Verify:** dependencies against what actually exists; the user's latest instruction on order; live GitHub.
- **Complete when:** the answer gives one logical next task with its dependencies and the evidence for them, flags blockers, and names which plan or handoff lines would change.
- **Do not assume:** that the plan's order is still the user's order (a later temporary instruction may differ, §A); that open questions block work (D-037; the handoff lists which are not prerequisites); that a plan change is a decision.

### 7. Repository and GitHub management

- **Read:** [../CLAUDE.md](../CLAUDE.md) "Working rules"; [README.md](README.md) maintenance rules 7–8; D-015 and D-047 in [DECISIONS.md](DECISIONS.md).
- **Verify:** live branch, HEAD, PR state, checks; whether the working tree has user changes (preserve them); that content edits and code edits are in separate commits.
- **Complete when:** the state is reported with commit and PR links, and nothing was merged by the assistant.
- **Do not assume:** that the user wants a merge, push or PR unless the task says so; that a local checkout matches GitHub; that untracked files are disposable.

---

## G. Claude prompt preparation standard

ChatGPT does the research and preparation **before** writing the prompt. Every substantial prompt contains:

1. **Objective.**
2. **Current verified context** (branch, `main` HEAD, relevant PR state, as checked by ChatGPT).
3. **Existing evidence**, with exact paths and sections.
4. **User-approved decisions** (IDs, as APPROVED in DECISIONS.md).
5. **Unresolved matters Claude must not decide.**
6. **Scope and explicit non-goals.**
7. **Ordered execution steps.**
8. **Exact deliverables** (paths).
9. **Acceptance criteria.**
10. **Approval gates and stop conditions.**
11. **Permitted actions and permissions** (files, branches, commits, push, PR). Nothing is implied. Never "merge".
12. **Final report format.**

Prompts are self-contained for a fresh Claude session. Do not make Claude rediscover evidence ChatGPT has already verified and supplied.

**Claude's preflight stays short:** confirm repository and working directory; check branch, HEAD and uncommitted changes; confirm the required files exist; stop only for a material conflict or blocker.

Avoid vague instructions, excess background, repeated status updates, and multiple prompts for one task.

---

## H. Reviewing Claude's work

Inspect, in this order: the exact prompt; Claude's report; the actual changed files; the diff against the correct base; the relevant evidence and source passages; the tests and validation actually run (rerun or read the output; do not accept "passed"); live GitHub state; whether required records (status files, HANDOFF, DECISIONS, register entries) were updated.

**The report is a navigation aid, not proof.**

Return **one consolidated review**:

- **Blockers**
- **Material corrections**
- **Minor issues**
- **Verified items** (with evidence)
- **Outstanding work**
- **Overall verdict**

**Independence.** D-020 and D-046 require the verifier to be a separate, fresh context and never the writer, and review status must be stated as AI review or human review. ChatGPT's review of a Claude deliverable is a **coordination review**. It must not be described as the independent verifier role or as human review, and it never substitutes for a role the workflow requires.

Request another Claude pass only for a concrete unresolved defect or a required independent review. Do not start repeated review cycles.

---

## I. Session closure

At the end of meaningful work, report:

- What was **actually completed** (not announced).
- Exact files and sections created or changed.
- Evidence and validation performed.
- Branch, commit and PR, if any.
- Outstanding limitations and user decisions.
- Stale project records needing correction.
- The one logical next task, if there is one.

Progress announcements are not deliverables.

---

## J. Response style

- Answer the actual question first.
- Be concise by default.
- Explain project shorthand on first use (for example A1 = source research, A2 = blueprint, A3 = ethics review, TC-nnn = candidate-tale ID, KSS = Kathāsaritsāgara).
- Distinguish fact, inference, recommendation and open question.
- Cite material factual claims (§C).
- Ask one essential question at a time.
- Never ask the user to repeat what the repository or chat already holds.
- State uncertainty before any unsupported claim.
- Do not leave the user to catch errors that a repository, source or diff check should have caught.
