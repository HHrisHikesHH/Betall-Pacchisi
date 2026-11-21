# Approved-text protection: minimal implementation proposal

> **Status: PROPOSAL. The principle is approved (D-052); this architecture is not.** Nothing in this document has been implemented. **No repository setting was changed and no workflow, script or tag was added to the repository.** It replaces the heavier five-layer sketch in [PLAN_FOLLOWUP_REVIEW.md](PLAN_FOLLOWUP_REVIEW.md) §5 (an append-only ledger is dropped: see §3). Written by one AI session; the prototype below was run locally, not on GitHub.

## 1. The approved principle (D-052)

1. A hash stored beside its own text is insufficient.
2. Approved stories must be protected against accidental or unauthorised modification.
3. A minimal, technically verified implementation proposal is prepared (this document).
4. It must exist **before the first story is approved**, and it **must not delay the pilots** (no story is approved until after Draft 3 and verification, so there is time).

## 2. The project's actual constraints (read from GitHub on 2026-11-21, read-only)

| Fact | Consequence |
|---|---|
| Public repository on a personal account (`HHrisHikesHH`); **one collaborator, the owner** | No second human reviewer exists. **PR authors cannot approve their own PRs**, so a ruleset rule of "1 required approval" would block every PR the owner opens, and with no bypass actor the owner could not merge. **Do not require reviews.** CODEOWNERS review is likewise unusable |
| An active ruleset "Branch Protect" already blocks **branch deletion and force-push** on all branches, **no bypass actors**; no status-check, review or tag rule | History rewrite on `main` is already prevented. Missing: a required check and a tag rule |
| No classic branch protection | Not needed; the ruleset is the mechanism |
| Actions enabled; **default workflow token is read-only**; Actions may not approve PRs; no SHA-pinning requirement | Good defaults. A workflow cannot create tags with the default token |
| **No `.github/` directory exists** | There is no CI today. Every protection below is unbuilt |
| The user's `gh` login has admin rights, and AI sessions in this project run with that login | **The honest weakness:** an AI session can, technically, do anything the owner can, including creating a tag. Only a **signature made with a key the AI session does not hold** separates "the user approved" from "a session said so" |

*Not verified live (confirm against GitHub's documentation when implementing, on a test branch):* the exact `pull_request_target` behaviour for the check; the rule types a tag ruleset offers; whether a required status check from a workflow of that name can be enforced for a personal-account public repo. They are standard features, but I did not test them against GitHub.

## 3. The minimal design: signed tags are the approval record

**Idea.** One mechanism, three parts, no new data store:

1. **The approval is a signed annotated Git tag** the user creates on the merge commit that added `approved.md`. Name: `approved/TC-013-hi-r1`. Its message carries `id`, `lang`, `revision`, `path`, `blob` (the git object id of `approved.md`), `sha256` (of the normalised body). It is signed with an **SSH signing key** the user holds (`gpg.format=ssh`), ideally on a hardware key or behind a passphrase, so that an AI session sharing the user's login cannot make one.
2. **A tag ruleset on `refs/tags/approved/*`** blocks update and deletion (and, optionally, creation except by the owner). A pull request cannot move a tag; a ruleset with no bypass actors cannot be talked around.
3. **A required status check, "protect-approved"**, runs on every PR. It compares the PR head against the **base** and against every valid `approved/*` tag (rules R1 to R7, §4).

**Why no ledger.** My first sketch added `LEDGER.jsonl`. A ledger lives in the same repository the change comes from; the signed tag is the independent record and makes the ledger redundant. One mechanism is less to maintain. The cost is stated in §6: **tags are the single anchor**, so the tag ruleset is essential.

**Normalisation (for the published copy only).** UTF-8; CRLF to LF; Unicode NFC; leading and trailing blank lines stripped; one trailing newline; SHA-256 over those bytes. Protection of `approved.md` itself uses the raw git blob id, so it does not depend on normalisation.

## 4. The rules the check enforces

| Rule | What it enforces |
|---|---|
| **R1** | Every file named by a valid approval tag is **immutable forever**: at the PR head it must exist at the same path with the **same blob id** as the tag recorded. Edit, delete or rename fails |
| **R2** | Every `approved/*` tag must verify against `tools/protect/allowed_signers` **as it stands on the base branch** (not the PR's copy), carry all required fields, and match the commit it points to. An invalid tag fails the check |
| **R3** | Any `content/stories/**` file with `status: approved` needs a valid tag for its `id` and `lang`, and its normalised body hash must equal the newest revision's `sha256`. A published approved file may not lose its status or vanish |
| **R4** | An `approved.md` with no tag: a **warning** on a PR (the approval PR cannot be tagged before it is merged); a **failure** in the post-merge audit |
| **R5** | An English file may be `approved` only if the Hindi twin has a valid tag |
| **R6** | A PR may not touch both `src/` and `content/` or `stories/` (D-015) |
| **R7** | A PR that changes `.github/` or `tools/protect/` must change nothing else, so tooling edits are always visible on their own |

**Revisions never edit an approved file.** A revision lives at a new path (`stories/TC-013/revision-2/hi/approved.md`), gets a **new tag** with `revision: 2` and `supersedes: <old tag>`, and the published copy may then change to match the newest tag. The old file stays protected.

**Lifecycle (practical for one maintainer):**
1. Pipeline finishes; the user says yes in chat.
2. PR adds `approved.md` and the status record. CI warns (R4). The user merges.
3. **The user signs and pushes the tag** on the merge commit (one command, documented). A post-merge job turns green only once a valid tag exists.
4. A separate content-only PR publishes the copy; R3 now passes.

## 5. GitHub-specific design points

- **Workflow trigger and the PR-edits-the-workflow problem.** A normal `pull_request` workflow runs the workflow file **from the PR**, so a PR could weaken it. Proposal: trigger on **`pull_request_target`**, which runs the workflow definition from the **base** branch. **Never execute PR code in it:** it checks out the base for the checker and fetches the PR head **as data only** (`git fetch origin refs/pull/N/head`), and the checker uses only `git` read commands. No `npm`, no PR scripts. `permissions: contents: read`, no secrets.
- **Third-party actions.** Use none, or only the official checkout action pinned to a full commit SHA (SHA to be filled and checked at implementation; I could not verify one here). The checker is one stdlib Python file.
- **Required check.** Add "protect-approved" as a required status check in the existing ruleset, and a **tag ruleset** on `approved/*` (restrict updates and deletions). These are the repository settings; **only the user can make them.**
- **Self-approval.** Not needed anywhere: the design has **no required reviews**. The user's explicit chat yes plus their signature is the approval.
- **Sole maintainer can override.** The owner is a repository admin. The ruleset has no bypass actors today, which is good, but the owner could edit the ruleset itself. This is by design (§6).

## 6. Prototype test (local, outside the repository)

I wrote a ~100-line stdlib checker implementing R1 to R7 and ran it against a throwaway Git repository with **real SSH-signed tags** (two keys: owner and a rogue). The scratch files were deleted and are not in the repository. The checker runs as it would in CI: the base commit's logic against the PR head.

| # | Case | Expected | Result |
|---|---|---|---|
| 0 | Untouched / docs only | pass | **pass** |
| a | Edit `approved.md` | fail | **fail** (R1) |
| b | Edit `approved.md` **and** the published copy together | fail | **fail** (R1, R3) |
| b2 | Edit the published copy only | fail | **fail** (R3) |
| b3 | Delete `approved.md` | fail | **fail** (R1) |
| e | Rename `approved.md` | fail | **fail** (R1) |
| c | Add a forged tag signed with a rogue key | fail | **fail** (R2) |
| c2 | Edit text **and** add the rogue key to `allowed_signers` in the same PR | fail | **fail** (signers are read from the base) |
| f | New `approved.md` with no tag yet | pass with warning | **pass, warning** (R4) |
| g | Published `approved` file with no tag | fail | **fail** (R3) |
| h | English `approved` with no tag | fail | **fail** (R3) |
| i | `src/` and `content/` in one PR | fail | **fail** (R6) |
| j | Tooling change mixed with other files | fail | **fail** (R7) |
| j2 | Tooling-only PR | pass | **pass** |
| k | Add a draft file | pass | **pass** |
| l | Valid revision 2 (new path, new tag), then publish | pass | **pass** |
| m | Publish text that does not match the newest tag | fail | **fail** (R3) |
| n | Edit the old revision-1 file after revision 2 exists | fail | **fail** (R1) |

**Honest gaps in the test.**
- **R5 (English needs Hindi) was not exercised separately**: case h failed on R3 first. It needs its own case before implementation.
- **Deleting a tag removes the protection for that file**, and the checker only warns (R4) at PR time. It cannot see a tag that is gone. **The tag ruleset is therefore essential, not optional.** A post-merge audit that compares the tag list against a committed list of expected tags would catch it, at the cost of the ledger I dropped; I do not recommend it for now.
- The test used a local repository. **GitHub behaviour (rulesets, `pull_request_target`, required checks) was not tested.**
- Two checker details were wrong on my first run (a leftover test tag, an empty commit); they were harness faults, fixed, not design faults.

## 7. What this does not protect against

- **The owner, deliberately.** An admin can edit the ruleset, sign any tag, or merge a weakened checker. The controls stop accidents, automation and sessions without the signing key. They do not stop the person who owns the repository.
- **A signing key left unprotected.** If the SSH key sits unlocked on a disk an AI session can read, the signature proves nothing. The key must not be reachable by sessions.
- **The window between merging `approved.md` and signing the tag** (R4 warns, the audit fails). It is short and visible.
- **A tag that is deleted if the ruleset is not active.**

## 8. Work plan (not part of this PR)

| Step | What | Who | When |
|---|---|---|---|
| 1 | Review this proposal; approve the architecture or change it | User | After the pilots start, **before the first Stage D approval** |
| 2 | Create an SSH signing key; add `tools/protect/allowed_signers` | User (key); implementer (file) | Same PR as step 3 |
| 3 | Add `tools/protect/check.py`, the workflow, and fixtures covering cases above plus R5 | Implementer, one tooling-only PR | Parallel to the pilots |
| 4 | Add the required check and the `approved/*` tag ruleset | **User** (repository settings) | After step 3 merges, tested on a throwaway PR and tag |
| 5 | Rehearse once on a fake story: approve, tag, publish, attempt a forbidden edit | Implementer + user | Before the first real approval |

It adds nothing to the pilots' critical path: pilots reach approval only after Draft 3, critique and verification.
