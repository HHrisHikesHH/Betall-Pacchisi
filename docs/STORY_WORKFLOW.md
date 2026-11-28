# Story workflow

One path from source notes to a published tale (D-080). There are no extra rounds. Output rule: every story PR changes `content/` (D-084).

```text
Brief ──► Draft ──► Critique ──► Revision ──► Sanitation ──► User review ──► Publish
Sonnet    Opus      Sonnet       Opus         Haiku          the user        content/
          (once)    (separate    (once)       (batches +
                     context)                  continuity)
```

## 1. Brief (Sonnet)

`stories/<ID>/brief.md` is one page, built from:

- `docs/selection/story-buckets/<ID>.md`
- [SLATE_AUDIT.md §5](production/SLATE_AUDIT.md#5-individual-audit-notes)
- the research files: `stories/<ID>/research/` where they exist, otherwise the `docs/research/` evidence files
- [CALLBACKS.md](../stories/CALLBACKS.md), for a callback only where the tale has a real use for one (D-087)
- any still-relevant question from the frozen [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md)

It has these sections:

1. **Source beats.** The events in order, each one marked *source* or *ours*.
2. **Riddle and verdict.** Betal's question; the source answer; our answer, and whether it changes (D-041).
3. **Locked directions.** The user's directions, copied word for word from D-048, D-051 and D-055 to D-061 wherever they touch this tale. Write "none" if none do.
4. **Charter points.** The [Ethical Charter](ETHICAL_CHARTER.md) risks specific to this tale.
5. **Voice plan.** Which [NARRATOR_VOICE](NARRATOR_VOICE.md) devices fit (1–3 "and you too" turns), plus any callbacks.
6. **Glossary.** Names and places in Hindi spelling, for the sanitation step.

**The user's look at the brief** is required only for TC-001, TC-003, TC-025, TC-026 and TC-027 (D-081). All other briefs go straight to the draft.

## 2. Draft (Opus, once)

The draft is written from the brief, [NARRATOR_VOICE.md](NARRATOR_VOICE.md), the [Editorial Guide](EDITORIAL_GUIDE.md) and the charter. It goes to `stories/<ID>/hi/draft.md`. The narrator is Voice A (D-078).

The draft comes with its scene file (`stories/<ID>/hi/scenes.json`, same format as the published one): a picture at least every 400 words and at every plot change, with prompt and sound cues (D-092, D-093). Recurring scenes use the shared ones (D-095).

## 3. Critique (Sonnet, separate context)

There is one critique, in `stories/<ID>/hi/critique.md`. It checks:

- **Craft:** grip, pacing, and whether the voice obeys NARRATOR_VOICE (its devices, limits and avoid list).
- **Every source beat**, checked against the brief.
- **The riddle and the verdict**, checked against the brief.
- **The Ethical Charter as a checklist.** Keep §3.0 (standing and honesty), the barred quotation, and rule 9 (the slate-level pattern audit).

Every finding gives a location, the problem, and the fix it recommends.

## 4. Revision (Opus, once)

The revision answers the critique and goes to `stories/<ID>/hi/revised.md`. Drafts are never overwritten (D-045). A short note at the end of `critique.md` says which findings were taken and which were declined, and why.

## 5. Sanitation (Haiku)

- Work in batches of 30–40 paragraphs, using the brief's glossary. The output is **an error table only** (paragraph, error, fix): spelling, mātrā, names, punctuation, repeated words.
- Then do one continuity read of the whole story (names, facts, time and place).
- The coordinator applies the fixes.
- Then mark highlights (D-097) in one pass, following the marks and limits in D-097. A script confirms that the text without marks is unchanged.

## 6. User review (always)

The user reads the text on the live site or in the PR. If he rejects it, it gets one revision that he directs. Then it ships as a labelled `draft` or is parked (D-082). There are no loops.

## 7. Publish

The text goes to `content/stories/hi/<slug>.md` and its scene file beside it as `<slug>.scenes.json`. The build fails without one.

- Before approval it is `status: draft`, labelled in the reader.
- After the user approves: `status: approved`, `approved_on: YYYY-MM-DD`, `approved_commit: <sha>` (D-083).
- Content and code commits stay separate (D-015).
- Update the row in [SLATE.md](../stories/SLATE.md).

## Status values (SLATE.md)

`not-started` · `brief` · `draft` · `critique` · `revised` · `user-review` · `published-draft` · `approved` · `parked`

## Models

| Step | Model | Why |
|---|---|---|
| Brief, Critique | Sonnet | Reading and checking against fixed inputs |
| Draft, Revision | Opus | Hindi prose quality |
| Sanitation | Haiku | Small batches, mechanical errors |

The coordinator (the Claude conversation) runs every step and checks its result from the files, not from an agent's report.
