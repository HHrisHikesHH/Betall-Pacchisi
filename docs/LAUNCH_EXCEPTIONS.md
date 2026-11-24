# Launch exceptions register

*Created 2026-11-24. A working register, not a decision.* The user decided, in chat on 2026-11-24 at 21:31 IST, to launch the app with **one tale, TC-001 Hindi Draft 2, shown as a clearly labelled unreviewed draft**, and to record every rule bent for that launch in one place so it can be revisited. The only recorded decision is [D-062](DECISIONS.md); this file lists what follows from it and what else is provisional. Nothing here approves any text, image, sound or interpretation.

Each row names the rule or decision, what the launch does instead, why, when to revisit it, and the risk. A rule that is not in this table is not bent. Evidence for the draft's status: [../stories/TC-001/status.md](../stories/TC-001/status.md).

| Rule or decision | What we do instead at launch | Why | Revisit when | Risk |
|---|---|---|---|---|
| D-047 (drafts never appear in a production build) | TC-001 Hindi Draft 2 is published in `content/` with `status: draft` and a visible banner saying it is an unreviewed draft, not approved text (D-062) | The user wants a usable app now and to learn from real reading | When TC-001 is reviewed and approved; then the file is replaced by the approved text | A reader may take an AI draft for a finished tale; the banner and the `draft` badge are the only mitigation |
| D-046, D-020 (separate critic; human review recommended) | Critique 2 and human review are deferred, not waived; planned for the end of the week of 2026-11-24, on the live text | The user chose speed; Draft 2 answered Critique 1 only | End of the week of 2026-11-24 | The only checks so far are by AI contexts; no Hindi specialist, Sanskritist or sensitivity reader has read it |
| D-038, D-049, D-054 (first-release gate: the frame completed through its ending and TC-024, approved in Hindi and English) | The first release ships one unapproved tale, with no frame and no TC-024 | The user's launch decision (D-062) | Before any release described as the first full release | The product is much smaller than the approved slate; D-054 is not met |
| D-024, D-025 (art style and character look not decided) | Provisional original SVG illustrations. The user may later supply AI-generated images from prompts Claude writes. Q-204 (image tool) and Q-205 (licensing) are OPEN | Illustration is wanted at launch; no style is decided | Before any AI-generated image is added, and when the art direction is decided | Provisional art may be replaced; AI images carry unresolved rights questions |
| D-027, D-028, D-029 (audio assets, loading, licence check) | Sound is generated in the browser from code, so there are no audio files and no licence check is needed. Real music may come later with an audio asset register. Q-301 and Q-305 are OPEN. Assets load lazily | Avoids unlicensed or heavy audio at launch | When real music or recorded sound is wanted | Synthesised sound may not suit the tale; no musical direction is decided |
| D-052 (approved-text protection) | Not built | It is required before the first story is APPROVED, not before this draft is shown | Before TC-001 or any story is approved | Without it, an approved text could be altered by accident; nothing is approved yet |
| Q-402 (Hindi register) | The draft uses a provisional default register; a Hindi specialist check is pending | The register is undecided | When a Hindi specialist reviews it | Register and idiom may change on review |
| Q-502 (hosting) | A provisional hosting choice | A host is needed to publish | When the hosting decision is taken | Low; the site is static and can move |
| H2 repo cleanup (slimming HANDOFF; guard-hook gaps) | Deferred | Launch comes first | After launch | Documentation drift; the guard hook has known gaps |
| The story title (no decision) | The title "कमल के तीन इशारे" is provisional and is the user's to change | The app needs a title to show | When the user chooses | A changed title may need a new slug and links |
| D-043, D-057 (the frame, Betal and Vikram around the tales) | The tale ships standalone, with no frame, pending D-043 and D-057 (Decision B) | The frame is not written | When the frame is drafted and approved | The reader meets the tale without the Vikram-Betal setting |

## Not changed by this register

The ethical charter ([ETHICAL_CHARTER.md](ETHICAL_CHARTER.md)), D-060, D-061, English-after-Hindi (D-012), and every other rule stay in force. The draft's text is not edited for launch: it is copied as it stands in [../stories/TC-001/hi/draft-2.md](../stories/TC-001/hi/draft-2.md).
