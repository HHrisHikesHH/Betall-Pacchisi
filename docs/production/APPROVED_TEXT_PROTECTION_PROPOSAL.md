# Approved-text protection: revised architecture proposal (revision 2)

> **Status: PROPOSAL. D-052 is preserved: the principle is approved; this architecture is not.** Nothing here is implemented. **No repository setting was changed, no signing key was generated, no workflow, checker, tag or lock file was added to the repository.** Written by one AI session on 2026-11-21 after the user asked for a revision. The prototype was run locally; **nothing was tested on GitHub** (§7 says why and how it should be).
>
> **Revision history.** Revision 1 (same day) used a `pull_request_target` workflow. This revision drops it: GitHub blocks that event by default in public repositories from 2 December 2026 (§2). Revision 1's tag-and-check design is kept; a small append-only lock file, a post-merge audit and a release gate are added.

## 1. What changed from revision 1

| Revision 1 | Revision 2 | Why |
|---|---|---|
| Required check on `pull_request_target` | **Plain `pull_request` check, plus a post-merge `push` audit on `main`, plus a release gate** | `pull_request_target` is blocked by default on public repos from 2 Dec 2026 and this repo has no policy allowing it (§2) |
| Tags are the only anchor | Tags stay the anchor; **`tools/protect/approvals.lock`** (append-only, one line per expected tag) makes a **missing or deleted tag detectable** | A deleted tag silently removed protection (revision 1, honest gap) |
| R5 not tested separately | **R5 tested independently** (§6) | Requested |
| Rulesets described from memory | **Checked against GitHub's pages and this repo's API** (§3). Several points are *not stated by GitHub* and are marked | Requested |
| Roles implied | **Owner / Claude / never-available credentials specified** (§8) | Requested |

## 2. `pull_request_target` after 2 December 2026

**Sources read** (4 pages, via a fetching subagent): the [GitHub changelog, 2 Nov 2026](https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2/), [Securely using pull_request_target](https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target), [Control workflow execution](https://docs.github.com/en/actions/how-tos/administer/control-workflow-execution), [REST: Actions policies](https://docs.github.com/en/rest/actions/policies).

| Finding | Evidence |
|---|---|
| From 2 Dec 2026 GitHub blocks `pull_request_target` **by default in public repositories** (Free, Team, Enterprise Cloud) unless an Actions event policy explicitly allows it | Changelog. The rule "initially runs in evaluate mode"; brownouts ran or were scheduled for 9 and 16 Nov |
| **This repo has no event policy.** `GET /repos/HHrisHikesHH/Betall-Pacchisi/actions/policies` returned `{"total_count":0,"policies":[]}` (read-only call, 2026-11-21) | Repo API |
| A `pull_request_target` workflow that never executes PR code is **not documented as exempt**. The pages describe the *event* as blocked; that a no-checkout workflow is also blocked is **my inference** | The pages do not carve out an exception |
| An allow policy can be scoped to specific workflow file paths, via `restrict_action_events` and `conditions.workflow_path` | REST page. Per-branch scoping: not stated |
| `pull_request` "runs the workflow file from the merge commit of the pull request" | Securely-using page. So a PR can edit the workflow that checks it |
| Conflicts the pages do not reconcile: "all public repositories" vs "repositories using the default policy before GA"; and "evaluate is only available with GitHub Enterprise" vs the changelog's evaluate mode | Both pages |

**Conclusion: revision 1's workflow would be affected.** It would be blocked from 2 December unless the owner adds an Actions event policy allowing `pull_request_target` for that one file. That means extra configuration and a standing exception to a security default, for a one-maintainer project. **Rejected.** The design below uses no `pull_request_target` and needs no event policy.

## 3. GitHub ruleset facts (what is verified and what is not)

**Verified on this repo (read-only API):** the repository already has an active repository-level ruleset, "Branch Protect" (`deletion`, `non_fast_forward`, on all branches, **no bypass actors**). So repository rulesets work on this plan (public, personal account). The REST rule-type names `deletion` and `non_fast_forward` are observed. The repo has no tag-target ruleset.

**From GitHub's [available rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets), [about rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets), [creating rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository) and [troubleshooting required status checks](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/troubleshooting-required-status-checks):**

| Topic | What GitHub says | Status |
|---|---|---|
| Restrict creations / updates / deletions | Each limits the action on matching "branches or tags" to users with bypass permission | Stated |
| Creation if "restrict creations" is off | Not stated explicitly; the only stated effect is that creation is not restricted. Tag creation then follows ordinary repository write permission | **Inferred** |
| Empty bypass list and admins | Not stated. Admins are listed among actors "eligible for bypass", so an empty list should mean **no one, admins included** | **Inferred** |
| Who can edit or disable a ruleset; audit of ruleset changes | Enforcement can be changed "without deleting the ruleset". Who may do it, and whether changes are audited: not stated | **Not stated** |
| Tag rulesets | The creating page has a "Tag protections" section. The available-rules page does not say which rules apply to tags. **REST names for tag rules: not stated** | **Unverified for this repo** |
| Required signatures | Written about commits on branches. **Whether it applies to tags: not stated** | **Do not rely on it** |
| Plan availability | Org-wide rulesets need Team/Enterprise. Repo-level on Free public: not stated, but the existing ruleset proves it works here | Verified for branch rulesets only |
| Evaluate (dry-run) mode | Mentioned once on the creating page; the pages list only Active and Disabled; availability on Free public: not stated | **Do not rely on it** |
| Required status checks | The check must pass on the latest SHA. A workflow skipped by path/branch filters leaves its check **Pending and blocks merging**. Workflow checks count only for events `push`, `pull_request`, `pull_request_review`, `pull_request_target`, `deployment`, `deployment_status` (a `workflow_dispatch` run does not satisfy it). Name matching rules are not described | Stated, except matching |
| "Require workflows" | Not mentioned on any page read | **Not stated; assume org-only** |

**What this means for the owner's tag requirement.** The owner must create signed approval tags but must not gain a bypass that lets them modify or delete one:

- Tag ruleset on `refs/tags/approved/*` with **Restrict updates, Restrict deletions and Block force pushes enabled, the bypass list EMPTY, and Restrict creations NOT enabled.**
- Result (on the documented wording): any user with write access, the owner, can **create** a matching tag, and **no one**, the owner included, can update or delete it while the ruleset is active.
- **Limit that cannot be designed away:** the owner, as repository admin, can edit or disable the ruleset (GitHub does not state otherwise). So "cannot modify" means "must first disable the ruleset, a deliberate, separate act". Detection of that is in §5.
- **Unverified until tried:** that these three rules are offered for the tag target on this repo and behave as read. Step 3 of the checklist (§9) tests this on a throwaway pattern before any real tag exists.

## 4. Alternatives for a trusted required check

Goal: a check the PR being checked cannot weaken.

| Option | Cannot be weakened by the PR? | Cost | Verdict |
|---|---|---|---|
| **A. `pull_request_target`** (revision 1) | Yes (runs base workflow) | **Blocked by default from 2 Dec; needs an event policy** | **Rejected** |
| **B. Plain `pull_request` check** | **No.** Workflow file comes from the PR merge commit; a PR could make the job always pass | Trivial. Same-repo PRs by the owner; fork PRs get a read-only token and no secrets | **Use for fast feedback only** |
| **C. `push`-to-`main` audit** | **Yes**, after merge: the workflow that runs is the one already on `main` | Trivial. Detective, not preventive. Compares the commit before and after the push | **Use** |
| **D. Release gate in the deploy workflow** (runs from `main`, verifies every approved text against its tag before publishing) | **Yes** for what readers see: nothing unverified ships | Small; added when the deploy workflow exists (R8) | **Use** (the real guarantee) |
| **E. Rulesets "Require workflows"** | Yes | Not documented as available; assumed org-only | **Not available** |
| **F. Local verification before merge** (owner runs the checker from a clean `main` checkout) | Yes (runs outside GitHub) | Manual; not enforced | **Optional habit** |
| **G. `workflow_run`** | Partly | Docs warn that `workflow_run` workflows that fetch and run PR code are vulnerable; adds indirection | **Rejected** |

**Recommendation: B + C + D.** B gives fast, required feedback on ordinary PRs. C closes the hole B cannot: if a PR weakens the workflow and passes, the post-merge audit (running the already-merged workflow from `main`) fails and the commit is reverted. D guarantees nothing unverified is ever published. **What this does not give: prevention of a merged weakened workflow.** It gives detection within minutes plus a revertable history, and a release that cannot ship the change. That is stated plainly in §5.

## 5. The revised architecture

**Parts (five small things):**

| Part | Content |
|---|---|
| `tools/protect/check.py` | One stdlib Python file (~130 lines in the prototype). Reads only Git |
| `tools/protect/allowed_signers` | The owner's SSH **public** key |
| `tools/protect/approvals.lock` | Append-only, one line per approval: `tag blob sha256` |
| One workflow file | Job 1, `pull_request`, check name **`protect-approved`**. Job 2, `push` to `main`, runs the audit comparing `before` and `after` |
| Signed annotated tags `approved/<id>-<lang>-r<N>` | **The independent record.** Message: `id`, `lang`, `revision`, `path`, `blob`, `sha256` |

**Rules:** R1 an approved file is immutable (blob id compared against the tag, not against its own front matter). R2 every `approved/*` tag must verify against `allowed_signers` as it stands on the **base**. R3 a published `status: approved` file must match the newest tag's `sha256`. R4 an `approved.md` with no tag is a warning on a PR and a failure in the audit. **R5 an English file may be approved only if a Hindi approval tag exists.** R6 no PR touches both `src/` and `content/`/`stories/` (D-015). R7 tooling changes (`.github/`, `tools/protect/`) stand alone. **R8 `approvals.lock` is append-only** against the base. **R9 every lock line needs a valid, matching tag** (so a missing, moved or replaced tag fails).

**Keep normal development PRs mergeable.**
- **No `paths:` filter** on the workflow. A skipped job leaves a required check Pending and blocks merging (GitHub's troubleshooting page). The job always runs; on a PR with no approved text it passes in seconds.
- **No required reviews, no CODEOWNERS.** The owner cannot approve their own PR and has no bypass actors, so a review rule would block every PR. Not used.
- **Recommended:** make **R6 and R7 warnings, not failures**, until the pilots show whether they cause friction (a one-line choice; the prototype tested them as failures).
- Docs-only and content PRs unrelated to approved text are unaffected by R1 to R5, R8, R9.

**Lifecycle (one maintainer):** (1) the owner says yes in chat; (2) a PR adds `approved.md` (CI warns, R4); owner merges; (3) **the owner signs and pushes the tag** on the merge commit; (4) a tooling-only PR appends the lock line (it must match the tag, R9); (5) a content-only PR publishes the copy (R3). A revision never edits an approved file: it gets a new path, a new tag with `supersedes`, a new lock line.

### What can and cannot be detected if the tag ruleset is disabled or bypassed

| Event | Detected? | By what |
|---|---|---|
| A tag is **deleted** | **Yes** | R9 (lock expects it) in the next PR check and the push audit |
| A tag is **moved**, or re-created unsigned | **Yes** | R2 (signature, blob must match the tagged commit); R9 |
| A **forged** tag (rogue key, unsigned) | **Yes** | R2: only keys in the base's `allowed_signers` count |
| `approved.md` edited **with the ruleset off** but tag and lock intact | **Yes** | R1 |
| Lock file edited to remove a line, **in a PR** | **Yes** | R8 against the base |
| Lock edited **by direct push** to `main` | **Yes, after the fact** | Push audit compares `before` and `after` (R8). Needs the push audit to be enabled. (The existing ruleset has no bypass actors, so a direct push also needs the ruleset disabled first) |
| Ruleset disabled, tag deleted, lock line removed, **and** the audit workflow disabled or edited, all by the owner | **No.** Only Git history shows it | This is the owner overriding everything (§6, threat model). Not preventable |
| A weakened workflow that passes the PR check | **Not at PR time**; **yes after merge** by the push audit; **cannot ship** via the release gate | B, C, D |
| Ruleset **disabled** silently (nothing else changed) | **Not detected by the checker.** GitHub does not state that ruleset changes are audited | Owner discipline: re-check the ruleset when tagging (checklist) |
| Signing key stolen | **No**: the signature is valid | Key custody (§8) |

## 6. Threat model

| Actor / event | Goal | Controls | Residual risk |
|---|---|---|---|
| **Honest mistake** (editing an approved file, publishing stale text) | None | R1, R3, R9, check on every PR | Low |
| **Claude session using the owner's `gh` login** | Could alter, tag or reconfigure by accident or error | No signing key (§8); R2 rejects unsigned/foreign tags; R1, R3, R9; recommended **non-admin token for Claude sessions** (§8) | **High until the token is restricted:** with the owner's admin login a session could disable the ruleset. The signing key, not the login, is the barrier to forging approval |
| **Fork PR author** (public repo) | Smuggle an edit | Fork PRs get a read-only token and no secrets under `pull_request`; R1–R9 apply; the owner merges | Low. The check runs no PR code (reads Git only) |
| **Malicious same-repo PR weakening the workflow** | Pass a bad edit | Visible in the diff (R7); push audit and release gate | Medium: not preventable at PR time without org features |
| **Owner error** (tags the wrong commit, forgets the lock) | None | R2 blob match; R9 fails until the lock matches; R4 audit | Low |
| **Owner account compromise** | Anything | Out of scope for repository controls | Use 2FA and a hardware key; not solved here |
| **The owner, deliberately** | Change approved text | None can stop an admin. The design makes it a deliberate, multi-step, **visible-in-history** act | By design |

## 7. Evidence

### 7.1 Local prototype (outside the repo; scratch files deleted)
A ~130-line stdlib checker (R1–R9) run against a throwaway Git repository with **real SSH-signed annotated tags** (an owner key and a rogue key); the base commit's logic judged each PR head. **All cases below behaved as expected; nothing else is claimed.**

| Case | Result |
|---|---|
| Docs-only; adding a draft; tooling-only PR | pass |
| Edit `approved.md`; edit it **and** the published copy; edit the published copy only; delete; rename | fail (R1 / R3) |
| Forged tag signed with a rogue key; edit + add the rogue key to `allowed_signers` in the same PR | fail (R2; signers read from base) |
| New `approved.md`, no tag yet | pass with warning (R4) |
| Published `approved` file with no tag | fail (R3) |
| **R5 independent:** a *valid* English tag, **no** Hindi tag, English file published | **fails only on R5** (no R3 failure) |
| **Deleted** tag (lock present) | fail (R9) |
| **Moved** tag (re-created unsigned over changed text) | fail (R2, R9) |
| **Unsigned** extra `approved/*` tag; tag signed by a **non-allowed** key | fail (R2) |
| Lock file emptied in a PR | fail (R8) |
| Valid revision 2 (new path, signed tag with `supersedes`), then publish | pass |
| Publish text not matching the newest tag; edit the old revision file | fail (R3 / R1) |
| `src/` + `content/` in one PR; tooling mixed with other files | fail (R6 / R7; recommended as warnings, §5) |

**Honest gaps:** a **missing tag with no lock line** is only a warning (R4), which is why the lock exists; the harness reproduced this in revision 1. **A weakened workflow was not tested** (it is a GitHub-side property). Case wording was fixed during testing (test harness faults, not design faults).

### 7.2 GitHub: **not tested**
Request 6 asked for the required check to be tested on GitHub. **I did not do this**, because doing it needs a workflow, a ruleset and tags, and the instructions forbid adding workflows or changing repository settings, and I did not create a separate repository without being asked. The facts in §§2–3 come from GitHub's pages and read-only API calls, not from running the design. **What must be proven on GitHub before anyone relies on this**, on a throwaway branch and a throwaway tag pattern `approved-test/*` (or a private scratch repository the owner creates):

| # | Test | Pass condition |
|---|---|---|
| G1 | A tag ruleset on `approved-test/*` with updates, deletions and force-push blocked, empty bypass list, creation unrestricted | The owner can **create** a tag; **cannot** delete or move it (`git push --delete`, `git push -f`); both are rejected by GitHub |
| G2 | The same, as repository admin, via the API | Confirms an empty bypass list binds admins |
| G3 | Edit then disable the ruleset | Records exactly what the UI and the API show, and whether any history or log entry exists |
| G4 | A required status check named `protect-approved` on the existing branch ruleset | A PR with no matching job can't merge; a passing job can; **a workflow with a `paths:` filter leaves a docs PR stuck** (confirm, then don't use filters) |
| G5 | A PR that edits the workflow to always pass | Passes at PR time (confirms B's weakness); the push audit then fails after merge |
| G6 | `pull_request` workflow from a fork PR | Read-only token, no secrets |
| G7 | Required check naming and recency (the "past seven days" wording) | Does a quiet week make the check unavailable? |

## 8. Who does what

**The owner (only):**
1. Generate the SSH signing key, **hardware-backed (FIDO2, `ed25519-sk`) or passphrase-protected, never loaded where Claude sessions run.**
2. Create the tag ruleset and add the required status check in repository settings.
3. Create and push every `approved/*` tag, from a terminal outside any Claude session, after saying yes in chat.
4. Merge PRs. Re-check that the ruleset is still active when tagging.
5. Provide Claude sessions with a **non-admin credential** (a fine-grained token with contents and pull-request write only, no Administration), so a session cannot edit rulesets or settings. (The current `gh` login has admin rights; the proposal's independence depends on this change.)

**Claude may:** write and run the checker and fixtures locally; open tooling-only, content-only and docs PRs; append a lock line that matches an existing tag; prepare approval packets; run the checker against a PR before the owner merges; report failures.

**Claude must never:**
- hold, generate, read, copy or request the **signing private key, its passphrase, an unlocked ssh-agent, or a hardware-key PIN**;
- create, sign, move or delete an `approved/*` tag, or push one;
- edit rulesets, event policies, branch protection or other repository settings, or hold a credential that can;
- merge a PR, or mark a story approved without the owner's explicit yes in chat;
- add itself or any automation to a bypass list.

**Credentials that must never be available to Claude:** the SSH signing private key and any passphrase; a loaded `SSH_AUTH_SOCK` for that key; a hardware-key PIN; an admin-scoped GitHub token (use a restricted one); the owner's GitHub password and 2FA codes.

## 9. Owner setup checklist (nothing is done; do these only if you approve the architecture)

1. **Decide:** approve or change this architecture (D-052 stays as is until you do). Choose whether R6 and R7 fail or warn.
2. **Create a restricted token for Claude sessions** (no Administration) and use it in place of your admin login for sessions.
3. **Generate the signing key** (hardware-backed if possible). Share only the public key.
4. **Rehearse on a throwaway tag pattern** (`approved-test/*`): create the tag ruleset (updates, deletions, force-push blocked; empty bypass list; creation unrestricted); create and then try to delete and move a tag (tests G1, G2); note what disabling the ruleset shows (G3).
5. **Ask Claude to implement** the checker, `allowed_signers`, an empty lock file and the workflow in **one tooling-only PR**, with fixtures for every case in §7.1.
6. **Merge it; add the required status check `protect-approved`** to the existing ruleset. Test G4 to G7 with throwaway PRs; confirm an ordinary docs PR still merges.
7. **Create the real tag ruleset on `approved/*`** (updates, deletions, force-push blocked; empty bypass; creation unrestricted). Delete the `approved-test/*` tags only after disabling that rehearsal ruleset.
8. **Rehearse once on a fake story:** approve, tag, add the lock line, publish, then attempt a forbidden edit and a tag deletion.
9. **Only then** approve a real story. This can all happen in parallel with the pilots; no pilot reaches approval before its Draft 3, critique and verification.

## 10. Minimal and maintainable

Five items (§5), one workflow file with two jobs, no third-party actions beyond the official checkout action, which should be **pinned to a full commit SHA** when added (I could not verify one here). The checker reads Git and runs no PR code. A story approval adds three steps for the owner (tag, then a lock line, then publish). The lock file is the only addition to revision 1's tag design and it exists solely so a deleted tag is detected.

## 11. Still open

- G1 to G7 are unproven on GitHub (§7.2).
- Whether to restrict Claude's credential (step 2) is the owner's choice; without it, the independence argument is weaker (§6).
- R6 and R7 fail-or-warn.
- Q-415 stays open until the owner approves or changes this architecture.
