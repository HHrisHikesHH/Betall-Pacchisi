# Design brief: the user's brief of 2026-11-25

> **The user's brief, given in chat on 2026-11-25 (IST). Wording by a collaborator (an AI context), in substance.** It was written from session handoff F (claude.ai Project doc `claude/session-handoff-2026-11-25-f.md`), not from the chat itself. Only text in quotation marks under a "User" label or in a "user's words" position is the user's own wording; quotations of repository documents are marked as such.
>
> **This is not a decision register.** [DECISIONS.md](DECISIONS.md) governs. The decisions drawn from this brief were put to the user in [DESIGN_DECISION_PACKET.md](https://github.com/HHrisHikesHH/Betall-Pacchisi/blob/58d00606394f38801e94e4c258c431b02457f7aa/docs/DESIGN_DECISION_PACKET.md), answered on 2026-11-25 and recorded as D-063 to D-074. Nothing in this brief itself closes an item in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md).

**Labels:** **User** = the user's words or choices. **Coordinator** = a note, diagnosis or observation by the coordinating Claude context. **Unverified** = not checked or tested.

## Why this is written down

**User:** "we don't want to forget and deviate mid-project and end up creating Avengers when we started Betal Pacchisi". Handoff F asks for the whole brief to be recorded.

## Verdict on the live app

**User:** "Looks like a generic blog app", at about 5% of the vision. Nothing is Indian except the SVG style: not the font, look, UI, music or reading canvas. The user has not yet read the story text. Story work is phase 2, after the app is in good shape.

**Coordinator (diagnosis, recorded in handoff F as verified):** the vision was already recorded ([PROJECT_VISION.md](PROJECT_VISION.md): "Not a conventional website", feeling like "entering a story", principle 6; D-024 "unmistakably Indian"), but the visual and audio questions stayed OPEN (Q-101 to Q-106, Q-201 to Q-205, Q-301 to Q-305; PREF-001; D-031), and the launch filled them with defaults: a cream and brown blog palette and Noto Serif Devanagari ([../src/styles.css](../src/styles.css) lines 3 to 27).

## 1. Feeling (User)

The reader is mesmerised by the beauty alone: "such a beautiful place to read, like a well-gifted book". Unique, not a blog: no generic text, images and table of contents.

## 2. Origin and storytelling goal (User)

- The idea came from hearing Osho narrate the Vikram–Betal frame story (the ascetic, the fruit with gems, the call to adventure).
- Captivating telling with small wisdom nuggets.
- Three layers: entertainment for those who want stories; craft for the attentive; wisdom for the wise.
- The app must elevate this, with full immersion through every sense possible.

**Constraint:** Osho's narration cannot be used (copyright). D-018 governs: technique may be studied; Osho material is never quoted or imitated.

## 3. Look (User)

- The whole app should feel like a beautiful Indian painting, with the words written on the canvas, "touching the old Indian traditional art form".
- The website is the frame of a painting.
- Later collections may use different traditions (Mahabharata, Ramayana, Jataka). Betal Pachisi uses one tradition. (Other collections are outside the current scope, D-002.)

## 4. References (User's choice)

| Link as written | What to take |
|---|---|
| `visualsarkarsm.com/work-detail/118` (Kalidas book; see D-031) | Full-bleed painted spreads, text set in the painting's quiet areas, one classical serif, no UI chrome |
| `grandoldbooks.com/books/chandrakanta` | Take its PAINTINGS (dense AI miniature style, night blue, gold), NOT its interface (generic dark app) |

**All links in this brief are references for study only.** No third-party image or text is copied into the repository (D-029, D-031, Q-205). **Coordinator's reading:** taking its paintings means taking the painting style, not its files.

## 5. Reference images the user chose

Handoff F records that all 13 images were opened on 2026-11-25 (not reopened for this document) and that 10 of the 13 are Rajasthani or Mughal court miniatures. The short descriptions are the handoff's.

| # | Link as written | Description |
|---|---|---|
| 1 | <https://www.harekrsna.com/sun/features/01-12/miniatures96a.jpg> | Wide narrative scene in horizontal bands, red border, moon |
| 2 | <https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/75093/277733/handmade%2Fdownscaled%2Fh_u5o6hdhtcu_2000x2000__32225.1702115816.jpg?c=2&imbypass=on> (page: <https://www.fizdi.com/rajasthani-painting-art_236_51808-handpainted-art-painting-12in-x-15in/>) | Fizdi: Rajasthani woman with lotus |
| 3 | `r12` (see base path below) | Mewar |
| 4 | `r13` | Marwar |
| 5 | `r9` | Kishangarh, Bani Thani |
| 6 | `r8` | Bundi |
| 7 | <https://cdn.rajasthanstudio.com/2026/04/Kishangarh-Khushnarayan-ji-artwork-3.png> | Stylised swirling storm clouds, dark sky: a model for Betal's night |
| 8 | <https://www.drishtiias.com/images/uploads/1699446077_Painting%20by%20Raja%20Ravi%20Verma.png> | Raja Ravi Varma |
| 9 | <https://www.drishtiias.com/images/uploads/1699445228_Mysore%20Paintings.png> | Mysore |
| 10 | <https://webneel.com/daily/sites/default/files/images/daily/09-2018/1-indian-painting-krishna-radha.jpg> | Modern digital, Krishna–Radha |
| 11 | <https://webneel.com/daily/sites/default/files/images/daily/12-2013/16-mughal-paintings.JPG> | Mughal |
| 12 | `.../13-mughal-paintings-women.jpg` (expanded against the base of #11: <https://webneel.com/daily/sites/default/files/images/daily/12-2013/13-mughal-paintings-women.jpg>) | Mughal |
| 13 | `.../2-mughal-paintings.jpg` (expanded the same way: <https://webneel.com/daily/sites/default/files/images/daily/12-2013/2-mughal-paintings.jpg>) | Mughal |

Images 3 to 6 come from the article <https://rajasthanstudio.com/do-you-know-rajasthan-is-a-land-of-painting-schools/>, under the base path `https://cdn.rajasthanstudio.com/wp-content/uploads/2021/12/`. Their full file names and extensions are not recorded, so they are not expanded.

- **User (clarification):** Ravi Varma and the modern Krishna–Radha were chosen for **feeling** (emotion, intimacy), not style. So: miniature style, with faces able to carry emotion.
- **Coordinator (common thread):** jewel colours (vermilion, saffron, deep green, lapis), gold detail, flat patterned architecture, profile faces with almond eyes, painted borders, stylised skies.

## 6. The user's answers to the design questions (User)

Handoff F says there were 18 questions and records the answers by topic; the numbered questions are not preserved there.

| Topic | Answer |
|---|---|
| Opening | A pothi |
| Page movement | Page-turn preferred; scroll as fallback |
| Phone | The reader is asked to turn to landscape; the web app goes full screen "like a video" for full immersion. Portrait still works but is less immersive; designing this smartly is the project's job |
| Native app | Only after the web app succeeds |
| Border and surface | A thin border with the painting edge to edge (a thick border may not suit phones). Surface: aged paper (fits the pothi) |
| Laptop | Supported too. Phone reading should be landscape |
| Art tradition | One tradition for Betal Pachisi, Rajasthani/Mughal miniature (from the images); different traditions for other collections later |
| Darkness | "as dark as the story and storytelling needs": eerie but beautiful; gore only where it conveys the point, never for its own sake |
| Images | The user generates them, with free tools for now, maybe paid later. Licence check before use (Q-205). The user asked whether the Claude plan can make them; the answer recorded: it cannot make raster paintings; Claude writes prompts and SVG only |
| Type | Decorative calligraphy for names and titles; a readable traditional face for body text. Be creative with fonts to convey things without saying them, without distracting |
| Wisdom | Inside the narration (as Osho does; D-018 applies) AND an optional margin layer for interested readers, hidden by default |
| Riddle | At least prompt the reader to think before Vikram's answer: "create a void in their mind, then fill it" |
| Sound | Film-like scoring led by emotion; the user dislikes no instrument. For example a fierce damru in intense scenes, bansuri for love or peace, and combinations |
| Sound sources | Royalty-free first, AI-generated second. The user suggested the YouTube Audio Library (**Unverified:** its terms). Asset register per D-029 |
| Spoken narration | Yes, eventually, tied to future YouTube videos (two birds, one stone) |
| Phase 2 | Starts with the frame story, then TC-001. Existing frame records: [chronology](../stories/FRAME/research/chronology.md) (KSS 12.8.23–33: the bhikṣu Kṣāntiśīla, fruit, gem; the request for a brave helper is in the following verses, 12.8.34–36) and [blueprint](../stories/FRAME/blueprint.md); D-057 Decision A plans a frame-only first loop |
| Live site | Keep the current live site up during the rebuild |

**Unverified type candidates, to test (not chosen; licences not checked):** Tiro Devanagari Hindi (body); Rozha One or Yatra One (titles).

## 7. Coordinator note

**Coordinator:** a pothi is a long horizontal leaf and a phone held sideways is long and horizontal, so "turn your phone, the pothi opens" fits physically.

## Parked

**Grandpa-narrator opening.** The idea: children are glued to phones; a grandfather brings stories, because wisdom told directly is stored as fact and forgotten, while wisdom told as a story connects. **User:** "forget grandpa for now." Recorded as a parked idea only.

## The plan

The user replied "approved" on 2026-11-25 at 15:11 IST. Status of this plan: **approved in conversation, not yet recorded** in DECISIONS.md. (The design decisions D-063 to D-074 were recorded afterwards; they do not record the plan as a whole.)

| Step | Content |
|---|---|
| A | Record the vision: this brief and a draft decision packet, in one docs-only PR |
| B | Style test, no code: image prompts for one scene, the frame opening (the ascetic offering a fruit at Vikram's court), landscape about 2:1 to 2.2:1 with a calm area for text, in two variants: (1) Mewar/Bundi narrative miniature, (2) Kishangarh-led faces with emotion. Free, tool-agnostic; no ethical-charter issues (the ascetic unmarked by sect, D-043). The user generates and picks |
| C | Prototype, one PR: a new `/pothi` route with the live site untouched: a pothi cover that opens; "turn your phone" with full screen in landscape and a portrait fallback; page-turn with scroll fallback; aged paper and thin border; new Devanagari typography; text on the user's chosen painting (art in `src/assets/scenes-override/` or a new asset path). Tests, typecheck and build; checked at 844×390 and 1280 px in a browser, then on the user's Realme phone |
| D | Later: frame story writing (story workflow gates apply), sound sourcing and register, full app redesign, the grandpa idea (parked) |

## Check every design PR against this

1. Is it "such a beautiful place to read, like a well-gifted book", and not a blog of text, images and a table of contents?
2. Does it feel like an Indian painting with the words on the canvas, a thin border, the painting edge to edge, on aged paper?
3. Is it Rajasthani/Mughal miniature only for Betal Pachisi, with faces that can carry emotion?
4. Does it open as a pothi, and turn pages, with scroll as the fallback?
5. Does phone landscape give full-screen immersion, while portrait still works and a laptop is supported?
6. Are titles calligraphic and body text a readable traditional face, with nothing distracting?
7. Is it only as dark as the story needs: eerie but beautiful, no gore for its own sake?
8. Does it serve all three layers, keep margin wisdom hidden by default, and leave the reader room to think before Vikram answers?
9. Does sound follow the emotion, royalty-free first and AI-generated second, with every asset licence-checked and registered?
10. Are references studied and never copied, the grandpa idea still parked, and the live site still up?
