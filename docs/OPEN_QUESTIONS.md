# Open Questions

This is the organised list of unresolved decisions. **None of these may be treated as decided.** A collaborator may attach a recommendation to a question, marked PROPOSED, but only the user can resolve one.

## How to use this list

- Each question has an ID (`Q-###`). Other documents refer to it by that ID.
- **Status:** `OPEN` (needs discussion) or `RESEARCH REQUIRED` (needs evidence first).
- **Resolving a question:** once the user decides, mark it `RESOLVED → D-###`, add the decision to [DECISIONS.md](DECISIONS.md), and update the documents affected. Do not delete resolved questions.
- **Adding questions:** use the next free number in the right section.

| Range | Area |
|---|---|
| Q-0xx | Identity and scope |
| Q-1xx | Product and reading experience |
| Q-2xx | Art and visuals |
| Q-3xx | Audio |
| Q-4xx | Research and editorial |
| Q-5xx | Technical |

---

## Identity and scope

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-001 | What will the application be called? | OPEN | No name approved (D-003). The repository name is not a working title. |
| Q-002 | How is the outer frame story of King Vikram and the Betal presented around the individual tales: as a story of its own, as an introduction, or woven between tales? | OPEN | The answer depends partly on Q-401. |
| Q-003 | In what order will the tales be produced and released? Does the experience launch with all 25 tales, or with a subset? | OPEN | |
| Q-004 | Who is the intended audience (age range, familiarity with the tales), and should any tales or content be handled differently for younger readers? | OPEN | Some tales may involve mature themes. RESEARCH REQUIRED once sources are compared. |
| Q-005 | What is the narrator's identity, if any: gender, persona, biography, and whether it is presented as human or AI? Or does it remain an unnamed storytelling presence? | OPEN | The sensibility is approved (D-033). The identity is not. |

## Product and reading experience

**Major future discussions:** how the "book" behaves and how the reading layout works (Q-101 to Q-107).

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-101 | **Book behaviour:** continuous scrolling, page-turning, or a hybrid? | OPEN | A major future discussion. |
| Q-102 | What are the reading navigation and controls (moving forward and back, chapters or scenes, bookmarks, resuming)? | OPEN | Controls should serve immersion (D-004). |
| Q-103 | How often do illustrations appear, and how does the rhythm vary between scenes? | OPEN | Must follow cinematic pacing (D-023). |
| Q-104 | How do illustrations enter, stay, and change as the reader moves through a scene? | OPEN | |
| Q-105 | What are the typography and visual treatment for Hindi (Devanagari) and English text? | OPEN | Both scripts must read beautifully. |
| Q-106 | How does reading behave on mobile, given the preferred text-left, illustrations-right layout? | OPEN | PREF-001 is a preference, not a decision. |
| Q-107 | **Reading layout:** confirm or revise the text-left, illustrations-right composition, and decide whether it varies by scene. | OPEN | A major future discussion. Reference: D-031. Preference: PREF-001. |
| Q-108 | How many shared atmosphere themes are there (for example, combinations of time, weather, and setting), and how are they defined? | OPEN | Atmosphere is story-led (D-026). |
| Q-109 | How does atmosphere show in the interface itself (colour, light, texture, motion) beyond the illustrations and audio? | OPEN | |
| Q-110 | How does the language toggle behave: where it sits, whether it keeps the reader's position, and whether it remembers a preference? | OPEN | Toggle approved (D-011). Behaviour not decided. |
| Q-111 | What accessibility requirements apply (readable contrast, reduced motion, alternatives to audio, screen-reader support)? | OPEN | |
| Q-112 | Is any reader-facing material provided beyond the story itself, such as notes on sources or variants? | OPEN | See also Q-404. |

## Art and visuals

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-201 | What is the final art style? | OPEN / RESEARCH REQUIRED | Research the traditions named in [ART_DIRECTION.md](ART_DIRECTION.md) §3 first. |
| Q-202 | How far may the visual treatment vary between stories within one coherent direction? | OPEN | D-025 |
| Q-203 | How should Vikram, Betal, and other recurring characters look? | OPEN / RESEARCH REQUIRED | Check how the sources describe them. |
| Q-204 | Which image-generation tools or models are used, and how is character consistency maintained? Are prompts and settings recorded? | OPEN | |
| Q-205 | What are the usage rights and licensing terms for AI-generated artwork? | RESEARCH REQUIRED | |

## Audio

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-301 | What is the musical direction (instruments, traditions, character)? | OPEN / RESEARCH REQUIRED | Guardrails such as avoiding lyrics are PROPOSED (P-006). |
| Q-302 | How do sound transitions behave, and how do they line up with the reader's position? | OPEN | |
| Q-303 | What is the audio preloading and loading strategy? | OPEN | Preloading expected (D-028). Not everything should load at first page load. |
| Q-304 | What sound controls do readers get, and is sound on or off by default? | OPEN | |
| Q-305 | Where does the audio come from: commissioned, licensed libraries, generated, or recorded? | OPEN | Licensing checks required (D-029). |

## Research and editorial

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-401 | Which source tradition (or combination) is the primary literary foundation? | RESEARCH REQUIRED | Decide only after comparing traditions (D-016). |
| Q-402 | What register of Hindi is used (how Sanskritised, how colloquial), and does it vary by story or character? | OPEN | |
| Q-403 | How many iterations does the English adaptation need, who checks its faithfulness to the Hindi, and how are later Hindi revisions carried into English? | OPEN | |
| Q-404 | Should readers be shown which parts are source and which are our additions, or does this stay internal? | OPEN | Recording it internally is required (D-017). |
| Q-405 | How are the writer, critic, and verifier roles staffed (people, separate AI sessions, different models, or a mix)? | OPEN | Independence is required (D-020). |
| Q-406 | Where and how are story records stored, and how are tales numbered and named? | OPEN | See P-001 in [DECISIONS.md](DECISIONS.md). |
| Q-407 | What target length or range should a story have? | OPEN | Length should follow the story (no filler, D-006). |
| Q-408 | Which source hierarchy is adopted? | OPEN | Draft hierarchy is PROPOSED in [SOURCE_AND_RESEARCH_POLICY.md](SOURCE_AND_RESEARCH_POLICY.md) §3. |
| Q-409 | What are the copyright position and permissions for any Osho material the project might reference? | RESEARCH REQUIRED | D-018 |

## Technical

Nothing technical has been approved (D-030). These questions are for later discussion.

| ID | Question | Status | Notes |
|---|---|---|---|
| Q-501 | Which framework and technology stack? | OPEN | Must stay simple and maintainable. |
| Q-502 | Which hosting provider? | OPEN | |
| Q-503 | Is a database or backend needed at all? | OPEN | |
| Q-504 | How are images and audio stored and delivered? | OPEN | Related to Q-303. |
| Q-505 | Are readers asked to sign in at all? If so, how? | OPEN | |
| Q-506 | How is creative content kept technically separate from code, so approved stories cannot be overwritten by accident? | OPEN | The requirement is approved (D-015). The mechanism is not. |
| Q-507 | How should content be structured so more languages (such as Marathi and Kannada) can be added later? | OPEN | D-014 |
