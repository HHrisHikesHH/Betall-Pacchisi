# Comparative Study of the Vetālapañcaviṃśati / Betal Pachisi Traditions

| | |
|---|---|
| **Status** | Research compilation, **independently reviewed by a separate AI session, including a final confirmation (PR #3 §8).** The review in [PR #3](https://github.com/HHrisHikesHH/Betall-Pacchisi/pull/3) (file `docs/research/SOURCE_TRADITIONS_REVIEW.md`; now merged into `main` with PR #3) covers checklist items R1–R24 and §§9–14. Its first-round corrections C1–C13 were applied at `ae61239` (the reviewer found 10 verified and 3 partially verified); its second-round corrections A1–A12, and the three residual issues, were applied at `03c2d3f`. The final confirmation (PR #3 §8, reviewer commit `7318a33`, on `ede52de`) found those corrections applied (it marked C12, C13, A6 and A10 "Applied, needs qualification" in §8.2; the review did not independently establish every underlying historical finding) and listed nine minor issues, R-1 to R-9. These were applied in later commits and checked by a subsequent independent review at `6a2e67a`. The polish at `1f21961` was separately reviewed, and the remaining issues that review raised are corrected in this revision. Some claims remain unverified for want of editions or specialist language review. **The review is not a human specialist review. No source tradition has been selected, and Q-401 remains open.** See [Independent Review Required](#independent-review-required). |
| **Decision supported** | `Q-401` in [OPEN_QUESTIONS.md](../OPEN_QUESTIONS.md): which tradition (or combination) becomes the primary literary foundation. **This report does not decide Q-401.** |
| **Compiled** | 2026-11-16, by an AI research session (Claude Code) working from digitised scans and e-texts |
| **Governing policy** | [SOURCE_AND_RESEARCH_POLICY.md](../SOURCE_AND_RESEARCH_POLICY.md) |
| **Scope** | Research only. No story drafts, blueprints, artwork, or application code. |

---

## Contents

1. [How to read this report](#1-how-to-read-this-report)
2. [Method and what was actually consulted](#2-method-and-what-was-actually-consulted)
3. [Principal findings](#3-principal-findings)
4. [Source studies](#4-source-studies)
5. [The frame narrative compared](#5-the-frame-narrative-compared)
6. [Number and order of tales](#6-number-and-order-of-tales)
7. [Tale concordance](#7-tale-concordance)
8. [Detailed comparisons of selected tales](#8-detailed-comparisons-of-selected-tales)
9. [Characterisation and literary treatment](#9-characterisation-and-literary-treatment)
10. [Editions, translations, and source quality](#10-editions-translations-and-source-quality)
11. [Copyright and permissions](#11-copyright-and-permissions)
12. [Comparative synthesis](#12-comparative-synthesis)
13. [Implications for the project and options for Q-401](#13-implications-for-the-project-and-options-for-q-401)
14. [Questions for the user before choosing](#14-questions-for-the-user-before-choosing)
15. [Research limitations and outstanding work](#15-research-limitations-and-outstanding-work)
16. [Independent Review Required](#independent-review-required)
17. [Bibliography](#17-bibliography)

---

## Revision history

| Date | Change |
|---|---|
| 2026-11-16 | Initial compilation (commit `94663c9`, PR #2). |
| 2026-11-16 | An independent review of R1–R14 (PR #3, `docs/research/SOURCE_TRADITIONS_REVIEW.md`) proposed corrections C1–C13. The author re-checked each against the sources before applying it (the outcome is recorded under [Independent Review Required](#independent-review-required)). C1: Jambhaladatta's frame ending (§4.D, §5, §9, §12.C). C2 and C3: the body-entering tales (§3, §7, §8.5). C4: Kṣemendra's lambaka number (§4.A). C5: Somadeva's ending citations (§5). C6: Śivadāsa's ending (§5). C7: the Śivadāsa 20 question (§8.4). C8 and C9: Ryder (§3, §4.G, §6, §7). C10: the exact Hindi–Śivadāsa mapping (§4.E, §6). C11: Somadeva's reasoning in KSS 10 (§8.1). C12: Barker's translation as a second English rendering of the Hindi (§8.1, §8.3, §8.4). C13: the Jambhaladatta tale 10 pages (§8.1). §11's wording on the copyright of historical texts was also qualified. (Commit `ae61239`.) |
| 2026-11-17 | A second independent-review pass (PR #3 §7, reviewer commit `02febde`) examined the applied C1–C13 at `ae61239`, checklist items R15–R24, and §§9–14, and proposed corrections A1–A12. The author re-checked the reviewer's evidence where local copies allowed (Uhle text p. 62 and p. XIV; Emeneau §1 and §6; Jørgensen pp. 213–214; Barker pp. 270 and 332 on page images) before applying them. **A1:** Jīmūtavāhana's practice across births against caste (§3, §8.3, §12.C). **A2:** Maṇivarman's question, desire against delusion and love (§3, §8.4, §12.C). **A3 and residual C6:** Śivadāsa's printed frame ending and the verses Uhle attributes to Kṣemendra (§4.C, §5, §12.A, §12.C, §13). **A4 and residual C2:** KSS 23 has the ascetic dance, not laugh (§3, §8.5). **A5:** Emeneau p. 71 cited as note 10, correcting an OCR misreading (checklist R2). **A6:** Kṣemendra's date is conditional, and relative priority is not established (§3, §4.A, §12.A, §12.D). **A7 and A8:** the Newari tradition: Jørgensen and Emeneau compatible; the 1801 and 1675 manuscripts distinguished (§3, §4.F, §12.A, §15). **A9:** "1884" for Uhle in Penzer and Emeneau (§4.C, §10, §15). **A10:** evaluative wording neutralised and its basis stated (§9, §12.D, §13, §14). **A11:** bibliographic details, with the level of evidence stated (§17). **A12:** Francke 1921 added as a Tibetan research lead (§4.F, §10, §15, §17). **Residual C12:** Barker's printed Hindi for XV and XX is now cited (§1, §2.2, §8.3, §8.4). Also: §14 counts, and two new questions on the authoritative Hindi text and specialist reading; the human-specialist wording in §2.2 aligned with D-020. |
| 2026-11-17 | Editorial cleanup requested by the user before final confirmation: §13 Option 1's copyright wording now separates the underlying Sanskrit from the GRETIL e-text's licence; §12.A's Kṣemendra row attributes the 24-tale count to Emeneau and states that the internal count and frame are unverified; §13's literary-potential rows replace unscaled ratings with evidence-qualified opportunities and limitations. |
| 2026-11-17 | The final independent confirmation (PR #3 §8, reviewer commit `7318a33`, on `ede52de`) found C1–C13, A1–A12 and the editorial cleanup in place, and listed nine minor issues, R-1 to R-9. All nine are applied here: R-1, the §5 Ś variant list notes that the printed text also has the servant request; R-2, Barker's printed Hindi for IX (p. 182) and XXIV (p. 359), re-read by the author on page images, is now cited in §§1, 8.1, 8.5 and 14 with the same AI-reading label as XV and XX; R-3, §3 item 5 cites S07 pp. 66–73; R-4, the unsupported "11th-century" dating is removed from §11 and §13 Option 1; R-5, "Rich verse" (§12.A) and "doubles" (§12.C, Option 3) are replaced with neutral descriptions; R-6, the §6 Kṣemendra row now matches §12.A, and the §7 K-column note names the two tales checked; R-7, authorial inferences in Options 3 and 4 are labelled, bases are given for Option 4's textual consistency and Option 6's verification burden, Option 4's "weaker recension" is attributed to Emeneau, Option 6 gains a literary-potential row, and §13 notes that the literary-potential evidence is not like-for-like; R-8, specialist-review wording is harmonised as a recommendation (§§3, 8.1, 8.4, 12.C, 13, 14 Q6, 15); R-9, status statements now record the final confirmation. No finding about frames, endings, order, counts or answers changes. Two later commits then aligned the Barker records with the four page-image passages: `db86261` (the Barker coverage row in §2.2) and `6a2e67a` (the S10 entry in the §10 source register). |
| 2026-11-18 | Six narrow corrections from the N1 primary-text reading ([SOMADEVA_TALE_EVIDENCE.md](SOMADEVA_TALE_EVIDENCE.md) §6, PR #7), each marked in place: §7 row 11 (TC-011: the third queen's hand-marks are *kiṇa*, the blisters are the second queen's; Dharmadhvaja, not Guṇaśekhara, is the queens' husband in Ś and Hindi); §7 row 18 (TC-018: fate is not a Hindi-only addition relative to Ś); §8.6 (TC-007: the non-difference is of answer, not reasoning); §8.4 (TC-021: Caṇḍī's revival of all three, 12.28.86–91); §9 Ambiguity row (TC-024: Vikrama did not know the answer; "by design" qualified as interpretation). No other section was changed. |

---

## 1. How to read this report

### Evidence labels

Every finding carries one of these labels, as required by the research brief:

| Label | Meaning in this report |
|---|---|
| **VERIFIED — primary text** | Confirmed directly in an identified primary text or scholarly edition (including the text of an edition read through a scan). |
| **VERIFIED — scholarly source** | Stated by a credible scholarly source that was read for this report, but not independently confirmed in the primary text. |
| **PROVISIONAL** | Plausible and partly supported, but needing confirmation (often because it depends on OCR, a translation, or an inference). |
| **UNVERIFIED** | A lead or claim not adequately established. |
| **DISPUTED** | Credible sources disagree. The competing claims are shown. |
| **NOT ACCESSIBLE** | The evidence could not be consulted in this session. |

Two further cautions apply throughout:

- **"VERIFIED — primary text" here never means the whole text was read.** It means the specific passage cited was read. Section 2 says exactly what was read.
- **Where a comparison depends on a translation** (most importantly the Hindi, read through Platts's English), this is stated next to the finding.

### Abbreviations and source IDs

Sources are cited as `[S01]`, `[S02]`, and so on. Full details are in the [Bibliography](#17-bibliography).

| Abbreviation | Meaning |
|---|---|
| **KSS** | Somadeva, *Kathāsaritsāgara*. Verse references follow the Durgaprasad–Parab 1915 numbering as encoded on GRETIL: lambaka.taraṅga.verse, e.g. 12.17.61 [S01, S02]. Tawney/Penzer number the same taraṅgas continuously as chapters 75–99. |
| **BKM** | Kṣemendra, *Bṛhatkathāmañjarī* |
| **Ś** | Śivadāsa's *Vetālapañcaviṃśati*, as edited by Uhle 1881 [S06] |
| **J** | Jambhaladatta's *Vetālapañcaviṃśati*, as edited and translated by Emeneau 1934 [S07]. Unless stated otherwise, this is the text Emeneau printed, which is the **Bengali recension**. |
| **W** | The Nepali-recension manuscript of Jambhaladatta used by Emeneau (Cambridge Add. 1655) [S07] |
| **Hindi** | The Hindi/Hindustani *Baitāl Pachīsī* lineage. Read through Platts's 1871 English translation of Duncan Forbes's Hindi text [S11], and through Barker's 1855 edition [S10]. Barker prints the Hindi with a word-by-word interlinear English gloss and a separate free translation. Barker's Devanagari is unreadable in the OCR. For four passages (IX, XV, XX, XXIV) the independent reviewer read **Barker's printed Hindi on page images**, and this report's author re-read all four on the same page images (IX on p. 182, XV on p. 270, XX on p. 332, XXIV on p. 359). Both readers are AI models, not Hindi specialists. Nothing here is a reading of the 1805 Calcutta print, of Forbes's text, or of any Braj text. Elsewhere, agreement between Platts and Barker gives two 19th-century English renderings, not verification of the Hindi. |
| **KSS n**, **Ś n**, **J n**, **Hindi n** | Tale n in that tradition's own numbering |

---

## 2. Method and what was actually consulted

### 2.1 Approach

1. Located digitised primary texts, editions, and translations through GRETIL (Göttingen) and the Internet Archive. These are mostly scans from the Digital Library of India and North American university libraries.
2. Read the **Sanskrit of the KSS Vetāla section** directly in the GRETIL e-text, which is based on the Durgaprasad–Parab 1915 edition. I mapped every tale's verse range, and read each tale's opening, the Vetāla's question, and Vikrama's answer.
3. Read the **introductions** of Uhle 1881 (German) and Emeneau 1934 (English) in full, as far as the OCR allowed.
4. Read the **text of Śivadāsa's recension** in Uhle 1881 (Sanskrit, through OCR) tale by tale, to establish its order, questions, and answers.
5. Read **Emeneau's text and translation** of Jambhaladatta's frame story and story 10, and his table of contents for all 25 stories.
6. Read **Platts's translation** of the Hindi (all 25 tale openings and endings), and the **preface and the translated "Introduction to the Calcutta edition of 1805"** in Barker 1855.
7. Read **Penzer's introductory remarks** to his Vetāla appendix in *The Ocean of Story* vol. 6 [S04].
8. Read the **table of contents** of the 1901 Kāvyamālā edition of the BKM [S08]. The Vetāla section itself was not read (see §15).
9. Ran a small number of web searches for leads on the Bhaviṣya Purāṇa version and the Newari tradition. The pages those searches pointed to could not be opened (§15), so nothing from them is treated as verified.

### 2.2 Coverage, honestly stated

| Source | What was read | What was not |
|---|---|---|
| KSS Sanskrit, GRETIL [S01, S02] | Frame introduction 12.8.21–58 and conclusion 12.32.1–41 in full; every tale's opening verses and its question-and-answer verses; tale 10 substantially; praśasti (author's colophon) | Most of the narrative body of tales 2–24 |
| Uhle 1881 [S06] | Vorwort pp. VII–XXIII (approx.); Sanskrit text of Ś as needed to identify each tale, its question, and its answer; apparatus at the frame opening | Most of the critical apparatus; the anonymous recension *f* in detail |
| Emeneau 1934 [S07] | Preface; Introduction §§1–10; frame story text and translation (opening); story 10 text, translation, and notes; contents list | Stories 1–9 and 11–25 in detail; most notes |
| Platts 1871 [S11] | Translator's preface; introductory tale (in part); opening and ending of all 25 tales | Full narrative of most tales |
| Barker 1855 [S10] | Preface; the translated introduction to the 1805 Calcutta edition; interlinear and free translations of Stories IX, XV, XX, XXIV (in the first correction pass); the printed Hindi of four passages on page images: IX (p. 182), XV (p. 270), XX (p. 332) and XXIV (p. 359). The independent reviewer and this report's author have both read these four on the page images; the readings are AI readings, not readings by Hindi specialists | The other tales; the Hindi text elsewhere (Devanagari OCR unreadable) |
| Ryder 1917 [S09] | Contents; introduction (= frame opening); tale 1 opening; conclusion heading | Most of the tales |
| Penzer 1926–27 [S04, S05] | Contents of vols 6–7; vol. 6 appendix pp. 225–228 | Tale-by-tale appendix notes |
| BKM 1901 [S08] | Table of contents (OCR) | The Vetāla text itself |

**OCR caution.** Uhle, Emeneau, Penzer, Barker, Platts, and the BKM were read through machine OCR of scans. The OCR is generally good for English and German, workable for Uhle's romanised Sanskrit, poor for Emeneau's comparison table, and poor for Devanagari. Readings that depend on poor OCR are labelled PROVISIONAL.

**Language competence.** The Sanskrit (KSS, Ś, J) was read directly, but by an AI model, not a credentialed Sanskritist. A specialist check of the readings that turn on language is **recommended** (a recommendation, not an approved requirement; see [Independent Review Required](#independent-review-required)). For the Hindi, only English translations were consulted, apart from four passages of Barker 1855's printed Hindi read on page images by AI readers (§1). The 1805 print, Forbes's text and the Braj were **not** read.

---

## 3. Principal findings

These are the findings most likely to affect Q-401. Each is developed, with citations, later in the report.

1. **There is no single "original" text to retell.** The collection survives in at least four distinct Sanskrit tellings: Somadeva, Kṣemendra, Śivadāsa, and Jambhaladatta. Each has internal recensions, and a separate vernacular lineage (Braj → Hindustani/Hindi, 18th–19th centuries) runs alongside them. The scholars consulted (Uhle 1881, Penzer 1926, Emeneau 1934) all say that a comparative study of all versions was still needed. *VERIFIED — scholarly source* [S04 p. 227; S06 p. VIII; S07 §1].
2. **The Hindi *Baitāl Pachīsī* is a late, mediated version.** By its own 1805 introduction, it was recast into Hindustani by **Mazhar ʿAlī Khān "Wilā"** *with the aid of* **Lallū Jī Lāl**, at John Gilchrist's order. It was based on an 18th-century **Braj** version by a poet called **Surat**, made at Rājā Jai Siṅgh Sawāī's command in Muhammad Shāh's reign. It was then revised for printing by **Tāriṇī Charan Mitr**. *VERIFIED — primary text (in Barker's English translation of the 1805 introduction)* [S10]. Later accounts credit Lallū Lāl alone (§4.E). *DISPUTED*.
3. **Count and structure differ.** Somadeva states inside the text that the collection is 24 question-tales plus a 25th, concluding one (KSS 12.32.24–27). *VERIFIED — primary text*. Jambhaladatta's text, as Emeneau edits it, has the Vetāla tell 25 tales *apart from* the frame, and Emeneau argues that Jambhaladatta's original had **27** [S07 §4]. *VERIFIED — scholarly source*. The Hindi has 25 numbered tales, with the frame's conclusion inside the 25th [S11]. *VERIFIED — translation*.
4. **The order of tales differs between traditions** (§7). For example, Somadeva's tale 8 (the three fastidious men) is Śivadāsa's 23, Jambhaladatta's 5, and the Hindi's XXIII. Matching numbers often do **not** mean matching stories.
5. **Endings and Vikrama's answers can change the meaning.** In the promise tale (KSS 10), Jambhaladatta adds a brahman-ogre, has the husband *dismiss* the returning wife, and makes Vikrama name the **husband**, not the thief, as the noblest. Somadeva and Śivadāsa have the husband receive her happily and name the thief (§8.1). *VERIFIED — primary text* [S02; S06; S07 pp. 66–73].
6. **Reasoning, not just answers, shifts, though less sharply in the Hindi than the English translations suggest.**
   - *Jīmūtavāhana tale (§8.3).* Somadeva says the hero's self-sacrifice was perfected over many births (*bahujanmasiddham*). Śivadāsa calls it practice across births (*janmani janmani … prāṇatyāgābhyāsaḥ*). Barker's printed Hindi keeps the idea of practice (*abhyās*) but grounds it in Jīmūtavāhana's Kshatriya caste instead of in many births. So the shift is in what the practice rests on, not a simple move from virtue to caste.
   - *Maṇivarman tale (§8.4).* Somadeva asks who was most deluded by passion. Śivadāsa asks who was blind with desire. Barker's printed Hindi asks who was *adhik kāmī*, roughly "most full of desire", which keeps desire but drops "blind" or "deluded". Its reasoning speaks of love (*prem*), and both English translators render the question as love. The difference is real but partial, and partly a translation effect.
   - Both Hindi readings come from **one printed text (Barker 1855), read on page images by AI readers**, not by a Hindi specialist. A specialist reading is recommended before they are relied on.
7. **The Hindi tells the body-entering plot twice.** Both Hindi XXII and XXIV have an old ascetic enter a dead youth's body. The riddles differ:
   - In **XXII** (Viśvapura setting, as in Śivadāsa 22), the ascetic weeps and laughs, as the yogī does in Ś 22. In KSS 23 the ascetic weeps and then **dances**.
   - In **XXIV** (Kaliṅga setting, as in KSS 23), it is the **boy's father**, an onlooker, who laughs and then weeps (§8.5).

   So XXIV shares Somadeva's setting and plot but not his riddle. *VERIFIED — translation (Platts and Barker)*. Why the Hindi has both is *PROVISIONAL*.
8. **Ryder's *Twenty-two Goblins* (1917) is a selective translation of Somadeva's KSS version, not of Śivadāsa.** Its frame names, its order, and its first tale's opening images correspond to KSS 12.8.59–60. His contents show that he omits KSS tales 10 and 19 (§4.G). *VERIFIED — primary text* for the correspondence and the omissions. His title page says only "Translated from the Sanskrit"; he does not name Somadeva or an edition there, so the identification rests on comparison.
9. **Accessibility is very uneven.** The KSS has a disclosed-basis e-text and a 19th-century English translation (Tawney) that is very likely public domain, subject to the check in §11. Śivadāsa and Jambhaladatta exist in scholarly editions, but those are scans with no modern translation found. Kṣemendra's Vetāla section was read only on two pages (§4.A). For the Newari tradition, no complete edition was found; Jørgensen 1921 prints two of its tales (§4.F).
10. **The sources contain moralising and gendered generalisations.** Examples are the answer to the parrot-and-mynah tale (KSS 12.10.93–94), many inserted maxims in Śivadāsa, and speeches in the Hindi. Whichever foundation is chosen, the project will meet these, and will need to decide how they relate to the approved principle of no forced morals (D-006). *VERIFIED — primary text* for the examples cited.

---

## 4. Source studies

### A. Kṣemendra — *Bṛhatkathāmañjarī* (BKM)

| Point | Finding | Label | Source |
|---|---|---|---|
| Place in the larger work | The Vetāla stories form part of the BKM, cited by Emeneau and Penzer as **BKM 9.2.19–1221**. | VERIFIED — scholarly source | [S07 §1; S04 p. 225 n.2] |
| Edition contents | The 1901 Kāvyamālā edition's table of contents lists *Vetālakathā* 1 to 25 on pp. 287–384. They sit within the **ninth** lambaka, named for Śaśāṅkavatī. The contents read *śaśāṅkavatyākhyanavamalambakārambhaḥ* (p. 215) and *…navamalambakasamāptiḥ* (p. 411), and the running heads read "९. शशाङ्कवत्याम् – वेतालपञ्चविंशतिका". This agrees with the BKM 9.2.19–1221 reference. Two embedded stories (on the wickedness of men and of women) are listed after the second Vetālakathā. **This establishes only the section's location and its list of 25 headings, not the content or order of the tales** (see §7, K column). | VERIFIED — primary text (contents and running heads, read through Devanagari OCR) | [S08, contents and running heads] |
| Date | **Not established here.** Emeneau mentions 1037 and 1050 only **conditionally**. Bosch suggested that Kṣemendra may also have used the source Jambhaladatta used. *If so*, Emeneau says, that source "could not be later than 1050", or about 1037 "if this is accepted as the date of the Bṛhatkathāmañjarī, following Lévi". Emeneau therefore does not assert 1037 as the BKM's date. Lévi was not read. | VERIFIED — scholarly source (for what Emeneau says); the date itself is RESEARCH REQUIRED | [S07 §6, p. xix] |
| Form and language | Sanskrit verse, mostly ślokas. Shorter and "balder" than Somadeva, omitting minor incidents. | VERIFIED — scholarly source | [S07 §1, §7] |
| Relation to Somadeva | Uhle, using an anonymous prose epitome of Kṣemendra (his recension *f*), found close agreement with Somadeva in names and material. He concluded that both drew on the Paiśācī *Bṛhatkathā*. Emeneau says the two versions have "essentially the same subject-matter". | VERIFIED — scholarly source | [S06 pp. VIII–XIII; S07 §1] |
| Literary character | Uhle judged, from limited samples, that Kṣemendra treats main events very briefly, sometimes to the point of obscurity, while lingering on side description. Emeneau wrote on the matter in *JAOS* 53 (1933), which was not consulted. | VERIFIED — scholarly source (limited sample) | [S06 pp. XIII–XIV] |
| Textual oddity | Some verses that Uhle attributes to Kṣemendra are transmitted in Śivadāsa manuscripts under Śivadāsa's name. | VERIFIED — scholarly source | [S06 pp. XIV–XV] |
| King's name | Emeneau notes that the BKM manuscripts call the king Vikramasena, while the edition has Trivikrama°. | VERIFIED — scholarly source | [S07 p. 5 n.2] |
| Two tales checked | The independent reviewer read two BKM text pages on page images (in part). After *iti navamo vetālaḥ* comes a tale naming Vīrabāhu, Arthadatta, Dhanadatta, Madanasenā and Dharmadatta, which are KSS 10's names, so BKM tale 10 corresponds to KSS 10. A second page shows the Unmādinī story (KSS 17) at about the position of the 17th heading. Only these two tales were checked. | VERIFIED — primary text (page images, reviewer's reading; not re-read by the author) | [S08; PR #3 §7.3, R19] |
| Lead to check | The 1901 Parab–Śivadatta edition (Kāvyamālā 69) is the edition Emeneau and Penzer cite. A 1931 second edition also exists on the Internet Archive. Apart from the contents and the two pages above, neither was read. | NOT ACCESSIBLE in this session for close reading (Devanagari OCR unusable; page images would be needed) | [S08] |

**Assessment.** Kṣemendra and Somadeva are the two Kashmirian verse tellings, but **this research has not established which is earlier**, and it has not established an absolute date for either (see the Date row above and §4.B). The report cannot assess Kṣemendra's text directly. Everything about its literary treatment here is secondhand.

### B. Somadeva — *Kathāsaritsāgara* (KSS)

| Point | Finding | Label | Source |
|---|---|---|---|
| Placement | The Vetāla cycle is told within Book 12 (Śaśāṅkavatī). It runs from **KSS 12.8.21 to 12.32.41**, which is Tawney/Penzer chapters 75–99, inside the story of Mṛgāṅkadatta. | VERIFIED — primary text | [S01, S02; S04, S05 contents] |
| Embedding | Uhle (following Weber) describes the cycle as inserted into the adventures of Mṛgāṅkadatta's companion Vikramakeśarin, who learns of the Vetāla from an old brahman. | VERIFIED — scholarly source | [S06 pp. XII–XIII] |
| Patronage | Somadeva's closing praśasti says he, son of Rāma, made this compendium of the *Bṛhatkathā* to divert **Queen Sūryavatī**, a Trigarta princess. She was wife of **Ananta** (son of Saṅgrāmarāja) of Kashmir and mother of **Kalaśa**, and Harṣa is named in the family line. | VERIFIED — primary text | [S01, praśasti vv. 1–13] |
| Absolute date | The praśasti gives no year. Converting these reigns to dates requires external chronology (e.g. Kalhaṇa's *Rājataraṅgiṇī*), which was not consulted. | RESEARCH REQUIRED | — |
| Count | The text itself says these are the first 24 question-stories plus a 25th that concludes, under the name *Vetālapañcaviṃśatikā* (12.32.24–27). | VERIFIED — primary text | [S02] |
| Form | Verse, overwhelmingly ślokas, with longer metres at many tale-endings. | VERIFIED — primary text (observed) | [S01, S02] |
| Narrator's voice | Many tales close with a narrator's maxim on the hero's steadfastness, e.g. 12.9.42, 12.14.115, 12.24.61, 12.30.48. | VERIFIED — primary text | [S02] |
| Edition basis | GRETIL states its KSS is "based on the edition by Durgaprasad and Parab, Bombay: Nirnaya-Sagar Press 1915". Minor typos are silently corrected and footnotes are incomplete. The separate Vetāla file is Elena Artesani's analytic version, with tale markers (`Vet_n`) added by the encoder. | VERIFIED — primary text (e-text header) | [S01, S02] |
| Editorial limitation | The `Vet_n` divisions are an encoder's markup, not manuscript evidence. The Vetāla file's header leaves its source field blank and refers back to the full KSS file. | VERIFIED — primary text (e-text header) | [S02] |
| Translation | C. H. Tawney (1880–84), re-edited by N. M. Penzer as *The Ocean of Story* (1924–28) with extensive notes. | VERIFIED — scholarly source | [S03, S04, S05] |

### C. Śivadāsa — *Vetālapañcaviṃśati*

| Point | Finding | Label | Source |
|---|---|---|---|
| Edition | Uhle, *Die Vetālapañcaviṃçatikā in den Recensionen des Çivadāsa und eines Ungenannten*, AKM VIII.1, Leipzig 1881. The title page reads **1881**. A date of **1884** appears in two scholarly sources: Penzer's footnote, and once in Emeneau §1 ("Uhle's 1884 edition"), in a paragraph that also says "Uhle in 1881". Where 1884 comes from is **unresolved**. It might relate to the completion of the AKM volume, but that is not verified and is not asserted here. | VERIFIED — primary text (title page, 1881). The origin of 1884 is UNVERIFIED. | [S06 title page; S04 p. 225 n.4; S07 §1, p. ix] |
| Editorial basis | Uhle began work in 1867 using seven manuscripts sent by Fitzedward Hall, later compared with the London manuscripts used by Lassen and Gildemeister. Emeneau summarises the basis as "eleven modern manuscripts". | VERIFIED — scholarly source | [S06 p. VII; S07 §1] |
| Older witness | Emeneau reports that Uhle published a manuscript dated **1487** in 1914 (*BSGW* 66), much older than the others. That publication was not consulted. | VERIFIED — scholarly source (secondhand) | [S07 §1] |
| Form | Prose with many inserted verses. Uhle counted 692 Sanskrit verses across the manuscripts, plus Prakrit verses (mostly Mahārāṣṭrī). Many are gnomic or borrowed, and only about 113 belong to the narrative in the narrow sense. | VERIFIED — scholarly source | [S06 pp. XVI–XX] |
| Language | Uhle notes frequent grammatical irregularities, some probably original, and a few vernacular words. | VERIFIED — scholarly source | [S06 pp. XVIII–XX] |
| Possible Jaina connection | Uhle reports Weber's view that the *ya-śruti* spelling in the manuscripts points to Jaina copying, and perhaps a Jaina author. Penzer mentions a Jaina element generally. | PROVISIONAL (stated as opinion by Weber) | [S06 p. XXI; S04 p. 228] |
| Date and place | No date was established in the sources read. A 12th–14th century range appears in online summaries but was not traced to scholarship here. | UNVERIFIED | — |
| Frame | King **Vikramasena** at Pratiṣṭhāna; the yogī Kṣāntiśīla, with name variants across manuscripts. One manuscript (*a*) prefixes a prehistory resembling the Hindi frame (Gandharvasena, a boy born three times, Vikramāditya's accession). | VERIFIED — primary text (Uhle's text and apparatus) | [S06 pp. XXI–XXII; text] |
| Printed frame ending | Uhle's printed conclusion (text p. 62) has the ascetic called a *digambara*; the eight great *siddhis* for the king after the beheading; the Gandharvas' flower-rain and boon; the king's request that the collection become famous; the appearance of Brahmā, Viṣṇu and Maheśvara; and Śiva naming the king as Vikramāditya and granting him Vidyādhara fortune (details in §5). **Uhle p. XIV attributes verses 2–4 of this conclusion to Kṣemendra**: his printed text follows manuscript A here, and these verses reach the Śivadāsa manuscripts under Śivadāsa's name. Verses 2–4 are the ones with the trimūrti, the Vikramāditya identification and the Vidyādhara fortune. The printed ending is therefore a **textually mixed witness**, and not every element in it can be attributed to Śivadāsa with confidence. | VERIFIED — primary text (Uhle's text, OCR; reviewer also read p. 62 on a page image) and scholarly source (Uhle's attribution) | [S06 text p. 62; p. XIV] |
| Count | 24 tales, with the frame's conclusion counted as the 25th (the printed conclusion's colophon reads *pañcaviṃśatitamaṃ kathānakam*). Uhle notes this, following Oesterley. One manuscript (*c*) has a further, unique 25th story. | VERIFIED — scholarly source; the colophon numbering was observed in the text | [S06 p. XXIII; text pp. 62–63] |
| "Vallabhadāsa" | Emeneau records a version attributed to **Vallabhadāsa** in no more than about six manuscripts. He doubts it is more than a sub-recension of Śivadāsa. The brief's "Vallabhadeva" was not found under that name in any source consulted. | VERIFIED — scholarly source; the name "Vallabhadeva" is UNVERIFIED | [S07 §1] |
| Status claims | Penzer, following Winternitz, calls Śivadāsa's recension "the most important" and says it "appears to be the original form", while adding that nothing definite can be said. Uhle says it seems to have had the widest circulation of the prose versions. | VERIFIED — scholarly source (opinion, hedged) | [S04 p. 225; S06 p. XVI] |

### D. Jambhaladatta — *Vetālapañcaviṃśati*

| Point | Finding | Label | Source |
|---|---|---|---|
| Edition | Emeneau 1934, a critical text in transliteration with introduction and English translation (American Oriental Series 4). It was a 1931 Yale dissertation. | VERIFIED — primary text (title page, preface) | [S07] |
| Manuscripts | **H**: India Office 3108, Bengali hand. **O**: Oxford Wilson 242c, a copy of H. **P**: a copy of a Calcutta Sanskrit College manuscript in Bengali characters, dated Śaka 1774 (= 1852–53). **W**: Cambridge Add. 1655, Nepali, partly palm-leaf and very corrupt. **V**: Jibananda Vidyasagara's 1873 Calcutta printing, judged "a poor edition". | VERIFIED — scholarly source | [S07 §3] |
| Recensions | HOP(V) represent a **Bengali** recension, the basis of the printed text. W represents a **Nepali** recension that Emeneau considers closer to the original but textually unrecoverable from W alone. | VERIFIED — scholarly source | [S07 §§4–5] |
| Author | Almost nothing is known. A colophon in P calls him *sāṃdhivigrahika* ("minister of peace and war"). His teacher is named Varadeva, a reading Emeneau prefers to Bosch's. Emeneau rejects claims that he was Buddhist or Jaina. | VERIFIED — scholarly source | [S07 §2] |
| Date and place | Not determinable from the text. He lived before the 16th century (from the dating of W's palm-leaf portion). A 14th-century dating of W was suggested and treated as possible but uncertain. The place is unknown, a north-Indian origin being only suggested by the name. | VERIFIED — scholarly source | [S07 §2] |
| Another Nepali manuscript | Uhle mentions a Cambridge manuscript, Add. 1619, in Sanskrit and Newari and dated 1675 CE. It begins with a verse of Jambhaladatta's text. | VERIFIED — scholarly source | [S06 pp. XV–XVI] |
| Form | Almost entirely prose, with about 19 verses that "disappear after story 9". Emeneau calls the prose plain, "at times monotonously bald". Uhle reports Aufrecht's contrary view that it is more elegant than Śivadāsa. Penzer says it "contains no verse". | DISPUTED (Penzer vs Emeneau on the verses; Emeneau vs Aufrecht on style) | [S07 §7; S06 p. XV; S04 p. 225] |
| Count | Emeneau's text has the Vetāla tell **25 stories apart from the frame**, unlike the 24 + conclusion of the others. He argues the original had **27**: the 24 common stories plus 3 new ones (J 21–23). The Bengali and Nepali recensions each cut back to 25, but differently. V prints only 24 + conclusion because it omits story 18. | VERIFIED — scholarly source | [S07 §§3–4] |
| Frame | King **Vikramakesarin**, also called Vikramāditya in the text. The ascetic Kṣāntiśīla is a *kāpālika*. Twelve years of fruit-giving pass through a servant intermediary, and the fruit is a bilva. | VERIFIED — primary text (Emeneau's text and translation) | [S07 pp. 4–7] |
| Bengali conclusion | Includes the Vetāla's account of his own and the false ascetic's previous history. Emeneau argues this was interpolated, since it is absent from W and from the Newari version. For what the printed text says, and how it differs from Uhle's earlier summary, see §5. | VERIFIED — scholarly source (interpolation argument); VERIFIED — primary text (content, §5) | [S07 §4; S07 story 25] |
| Handling of riddles | Emeneau notes carelessness: important details are omitted in some riddle solutions (stories 5, 15, 16). In the final story the key detail (father marries daughter, son marries mother) is missing. | VERIFIED — scholarly source | [S07 §6] |
| Relation to others | Its proper names agree closely with Somadeva and Kṣemendra rather than Śivadāsa, but its story details "differ widely from those of all the other versions". | VERIFIED — scholarly source | [S07 §6] |

### E. Historical Braj and Hindi/Hindustani adaptations

| Point | Finding | Label | Source |
|---|---|---|---|
| Braj version | A poet named **Surat** rendered the Sanskrit into Braj at the command of **Rājā Jai Siṅgh Sawāī** of Jaipur, in the reign of Muhammad Shāh. | VERIFIED — primary text (the 1805 introduction, in Barker's English translation) | [S10] |
| Braj translator's name | Barker's own preface calls him **"Surat Kabishwar"**, Platts's translation **"Surat"**, and Penzer **"Surati Misar"**. The brief's form "Sūrat Kubeśvar" was not found as such. *Kabīśvar* is plausibly an epithet ("lord of poets"), which is unconfirmed. | DISPUTED (name form) | [S10 preface; S11; S04 p. 226] |
| 1805 Hindustani version | **Mazhar ʿAlī Khān, pen-name Wilā**, at the order of **John Gilchrist**, "with the aid of the poet Shrī Lallū Jī Lāl", set it out "in easy language" that keeps a considerable share of Braj. It was later revised by **Tāriṇī Charan Mitr**, under Captain James Mouat, who removed rare Sanskrit and Bhāṣā words for printing. | VERIFIED — primary text (in translation) | [S10, "Introduction to the Calcutta edition of 1805"] |
| Attribution to Lallū Lāl | Barker's 1855 preface credits **Lallū Jī Lāl** with preparing the Hindi version in 1805 "in conjunction with other learned natives". Penzer (1926) says the text was "translated from Braj-bhasha into 'High Hindi' by Lallu Lal in 1805" and calls him the "actual creator" of that language. Both statements **go beyond** the 1805 introduction, which names Mazhar ʿAlī Khān as the one who set it forth, with Lallū Lāl assisting. | DISPUTED | [S10; S04 p. 226] |
| Factual error to avoid | Barker's preface presumes the Sanskrit version "had ceased to exist", which is plainly wrong given the surviving Sanskrit recensions [S06, S07]. | VERIFIED (that the claim is wrong) | [S10 preface] |
| Language | The 1805 text describes its own language as easy speech "spoken by high and low", retaining much Braj, and its reviser as working toward "Rekhta" usage. "Hindi", "Hindustani", and "High Hindi" are applied loosely in the secondary sources. | VERIFIED — primary text (in translation); the terminology is PROVISIONAL | [S10] |
| Later editions | Penzer lists Kālī Krishna's English version (Calcutta 1834), Barker–Eastwick (Hertford 1855), and Oesterley's German (Leipzig 1873). Lancereau's French (1851–52), the Tamil (*Vedala Cadai*, translated by Babington, 1831), and a Marathi version (Chhatre 1830; English by Kincaid 1921) are also listed. | VERIFIED — scholarly source (none of these read) | [S04 pp. 226–227] |
| Forbes and Platts | Duncan Forbes edited the Hindi text (London; Emeneau cites an 1857 edition). Platts translated Forbes's text "as literal as it was possible". | VERIFIED — primary text (Platts title page and preface) | [S11; S07 §8] |
| Frame (Hindi) | Opens with Gandharb Sen of Dhārānagar and his sons (Shank, Bharthari, Vikram). Then come the fruit of immortality and the three men born at one moment: a king, an oilman's son, and a potter-devotee. The potter has killed the oilman and made him the demon. | VERIFIED — translation | [S11] |
| Burton | Burton's *Vikram and the Vampire* (1870) is, per Penzer, a free adaptation with substantial invention, not a translation. It was not read. | VERIFIED — scholarly source | [S04 p. 227] |
| Copies | The 1805 Calcutta print itself was **not** located or consulted. Its introduction was read only in Barker's 1855 translation. | NOT ACCESSIBLE | — |

**Assessment.** Treat the Hindi as **a literary tradition in its own right**, as the brief requires. By its own account it is three removes from Sanskrit (Sanskrit → Braj → Hindustani → printed revision). Which Sanskrit text the Braj poet used is **not known** from anything consulted. The Hindi tale order follows Śivadāsa's almost exactly. Hindi I–XXIII correspond to Ś 1–23 in order, except that III and IV are swapped; XXIV is an addition with no counterpart at that point in Ś; and XXV corresponds to Ś 24, followed by the conclusion (§§6–7). Proper names often match too, e.g. Guṇaśekhara and his Jaina minister Abhayacandra (Ś 10 and Hindi X). This suggests (*PROVISIONAL*) a Śivadāsa-type source somewhere in the Hindi's ancestry.

### F. Other witnesses and traditions

| Witness | What kind of evidence it is | Label | Source |
|---|---|---|---|
| **Uhle's anonymous recension *f*** | A short prose epitome of Kṣemendra, printed by Uhle. Emeneau calls it secondary and comparatively unimportant. | VERIFIED — scholarly source | [S06 pp. VIII–XII; S07 §1] |
| **Vallabhadāsa** | Not more than about six manuscripts. Probably a sub-recension of Śivadāsa (see §4.C). | VERIFIED — scholarly source | [S07 §1] |
| **Newari version** | **Jørgensen 1921** (now consulted, pp. 213–214, OCR) edits two tales from a Newari recension in Berlin (Ms. Or. fol. 600), dated Nepal era 921 = **1801 CE**. He writes that a quick comparison shows **no known Sanskrit recension can be its direct source**; the nearest is Jambhaladatta's, recension *f* shows some agreements, and Śivadāsa stands further off. **Emeneau** says the Newari is "obviously based on Jambhaladatta's version", because it contains J 21 and 22. These positions are **compatible**, not in conflict: a version can be based on Jambhaladatta's without being a direct rendering of any surviving Sanskrit recension. The earlier search summary attributing a contrary view to Jørgensen is superseded by his text. Otter is reported to be preparing a critical edition, with a reader of selections published in 2021. **Date of the version:** not established. The 1801 date is that of Jørgensen's manuscript. Uhle mentions a Sanskrit-and-Newari manuscript of Jambhaladatta's text dated 1675 (next row), but its relation to the Newari recension Jørgensen discusses is not established. | VERIFIED — scholarly source (Jørgensen; Emeneau). Otter's work NOT ACCESSIBLE: the site blocks automated access. | [S13 pp. 213–214; S07 §4; S06 p. XVI; S12] |
| **Nepali recension of Jambhaladatta** | Represented by manuscript W (Cambridge Add. 1655). Uhle also describes Cambridge Add. 1619, in Sanskrit and Newari, written in 1675 CE, which begins with the eighth verse of the Calcutta edition; he gives nothing more about it. Whether it belongs to the Nepali recension, or to the Newari version above, is not established. | VERIFIED — scholarly source (for what Uhle and Emeneau say) | [S07 §3; S06 p. XVI] |
| **Bhaviṣya Purāṇa** | A search lead reports that a 1965 *Purāṇa* bulletin article places a Vetāla version in the Pratisarga-parvan and calls it probably a late verse abridgement of the popular stories. The article could not be opened, and no edition of the Purāṇa was consulted. | UNVERIFIED / NOT ACCESSIBLE | [S14] |
| **Tibetan** | An Internet Archive catalogue record describes a 1975 Tibetan manuscript collection of 37 "vetala stories" (*ro sgrung*). This is a catalogue record only, not evidence of content or of a relationship to this cycle. **Research lead:** *ZDMG* 75 (1921) contains A. H. Francke, "Die Geschichten des toten No-rub-can. Eine tibetische Form der Vetālapañcaviṃśatikā aus Purig", beginning p. 72. Only the title, in the volume's contents, was read; the article was not. Penzer vol. 6 p. 242 also refers to it (found by a text search of the OCR; not read in context). | UNVERIFIED (catalogue record; Francke is a research lead, not a consulted source) | [S15; S17] |
| **Other vernaculars** | Bengali, Kannada, Telugu, Gujarati, Tamil, Marathi, and other versions are mentioned by Penzer without detail. | UNVERIFIED (mentioned only) | [S04 p. 226] |

### G. Note on Ryder's *Twenty-two Goblins* (1917)

This book is often met as an English entry point, so its basis matters.

- Its frame has King "Triple-victory", son of King "Victory", in the "Abiding Kingdom" on the Godāvarī, and the monk "Patience". These are English renderings of **Trivikramasena, son of Vikramasena, Pratiṣṭhāna, and Kṣāntiśīla**, which is Somadeva's frame (KSS 12.8.21–23). Śivadāsa's king is Vikramasena (§5). *VERIFIED — primary text (comparison).*
- Its first tale opens with Benares compared to the soil of Kailāsa and the heavenly river shining like a necklace. This corresponds closely to **KSS 12.8.59–60**. *VERIFIED — primary text (comparison).*
- Its 22 tales follow Somadeva's order, **omitting KSS 10 and KSS 19**. His 10 is the delicate wives (KSS 11) and his 18 is the boy who laughed (KSS 20) (§7). *VERIFIED — primary text (Ryder's contents compared with KSS).*
- One discrepancy: Ryder says twelve years pass, while the GRETIL KSS reads ten (*daśasu*, 12.8.25). Ryder's Sanskrit base edition is unknown. *UNVERIFIED.*
- Ryder's title page says only "Translated from the Sanskrit". No statement naming Somadeva or a particular edition was found in the front matter. The identification with Somadeva therefore rests on textual comparison, **not on Ryder's own statement**. *VERIFIED — primary text (title page); his source edition is UNVERIFIED.*

---

## 5. The frame narrative compared

Differences are recorded side by side and are **not** merged into one narrative.

| Element | Somadeva (KSS) | Śivadāsa (Ś) | Jambhaladatta (J, Bengali) | Hindi (Forbes/Platts) |
|---|---|---|---|---|
| King and city | Trivikramasena, son of Vikramasena, at Pratiṣṭhāna on the Godāvarī (12.8.21–22) | Vikramasena, Pratiṣṭhāna (Uhle's text) | Vikramakesarin, also called Vikramāditya [S07 p. 5 and n.2] | Vikram(ajīt) of a Dhārānagar royal family, younger brother of Bharthari [S11] |
| How the ascetic approaches | The monk (*bhikṣu*) Kṣāntiśīla brings the king a fruit daily for ten years. A monkey splits one and a gem falls out (12.8.23–27). | The yogī Kṣāntiśīla (name varies by manuscript) brings fruit. The period varies: twelve months or years in some manuscripts. | The *kāpālika* Kṣāntiśīla gives a bilva fruit through a servant for twelve years [S07 pp. 5–7] | Preceded by a long prehistory (the fruit of immortality; three men born at one moment) [S11] |
| Why Vikrama carries the corpse | He honours a request for help after receiving the gifts (12.8.28–49) | Similar in outline (Uhle's text; not read closely; PROVISIONAL) | Similar in outline [S07] (PROVISIONAL) | The devotee requests it. The Vetāla warns Vikram about the devotee's plan early, in the prehistory [S11] |
| The corpse | Hangs on a *śiṃśapā* tree in a cremation ground. It cries out and then laughs (12.8.50–55). | *Śiṃśapā* tree | — (not checked) | Corpse in a tree in a burning-ground [S11] |
| Why the Vetāla tells stories | "To beguile the road" (12.8.58) | To pass the journey | Not checked | Similar [S11] |
| Penalty and condition | If Vikrama knows the answer and stays silent, his head will burst into a hundred pieces (12.8.188). When he speaks, the Vetāla returns to the tree. | Same pattern (the Vetāla returns after each answer) | Not checked | In tale I: if he does not decide, he "will be cast into hell" [S11] |
| End of the cycle | Vikrama cannot answer tale 24 and stays silent (12.31.60). The Vetāla, privately resolving to outwit the monk (12.31.61–64), warns Vikrama: the monk will ask for a full prostration in order to sacrifice him; Vikrama should ask to be shown it first and then behead him. The warning already promises him the Vidyādhara power the monk sought (12.31.65–73). The Vetāla then leaves the corpse (12.31.74). At the rite Vikrama does this and beheads the monk (12.32.1–19). The Vetāla promises him Vidyādhara overlordship after earthly rule (12.32.21) and offers a boon; Vikrama asks that the stories be famous (12.32.22–30). **Separately**, Śiva then appears, says Vikrama was first created as **Vikramāditya** and now as Trivikramasena, gives him the sword Aparājita, and promises Vidyādhara sovereignty (12.32.31–38). | **Uhle's printed text** [S06 text p. 62]: the Vetāla tells the king that the ascetic, a ***digambara***, will ask for a full prostration, and how to turn it on him. The king does so and beheads him, offers the blood to the Vetāla, and obtains the **eight great *siddhis***. The **Gandharvas** shower flowers and offer a boon; the king asks that "this *Vetālapañcaviṃśatikā* become famous" (a parallel to KSS 12.32.24–25 and Hindi XXV), and that the Vetāla be his servant. Brahmā, Viṣṇu and Maheśvara appear; Śiva says the king is born as **Vikramāditya** from his portion and grants him **Vidyādhara fortune** (vv. 2–4). **Mixed witness:** Uhle p. XIV attributes vv. 2–4 to **Kṣemendra**, transmitted in manuscript A under Śivadāsa's name, so this part of the printed ending cannot confidently be called Śivadāsa's. **Variants** [S06 pp. XXII–XXIII]: Indra and the other gods instead of the Gandharvas; Indra giving a sword (one manuscript); the king asking for the Vetāla as servant (two; Uhle's printed text also contains this request); the Vetāla becoming an indestructible golden man (one). | **Emeneau's printed text** [S07, story 25, approx. pp. 145–155]: the Vetāla says he was himself an **oil-miller householder** (*tailika*). A wise man who lodged with him taught him magic knowledge and charged him to teach it to the wise man's returning disciple, saying "he shall be your brother", addressed to the oil-miller. That disciple is **Kṣāntiśīla**, who, on his teacher's instructions, plans to offer the king to **Devī** for magic power. The Vetāla tells the king how to turn the trick. The king beheads Kṣāntiśīla and offers him to Devī, who grants him a hundred years of life, universal rule, and the magic power of **Tāla and Vetāla**. **Uhle's 1881 summary differs** [S06 p. XXII]: he describes Jambhaladatta's Vetāla as an oil-miller's *son* (*Oelmüllerssohn*) and Kṣāntiśīla as the *king's* brother (*des Königs Bruder*). Uhle wrote before Emeneau's edition and does not say, in the passage read, which manuscript or printing he used; he discusses Vidyasagara's 1873 printing nearby, but that this was his source is unconfirmed. **The discrepancy is unresolved.** Emeneau argues the whole backstory is a Bengali interpolation [S07 §4]. | Indra and the gods appear. Indra offers a boon, and Vikram asks that "this story concerning me become famous in the world", a parallel to KSS 12.32.24–25. Vikram throws the two corpses into a cauldron of oil, and two heroes (*bīr*) appear and promise to come when called [S11 tale XXV, pp. 180–181; S07 §8]. |
| How the frame links the tales | Each return to the tree begins the next tale. Many tales close with a narrator's maxim on steadfastness (e.g. 12.9.42) | Each tale opens with an invocation verse and closes with a colophon | Each tale closes with a short colophon [S07] | Each tale closes with the same formula of return and re-capture [S11] |

**Why this matters.** The king's identity (Trivikramasena or Vikramāditya), the ascetic's motive, the Vetāla's backstory, and the ending's theology (Śiva, Indra, Devī) all differ. Choosing a frame is therefore a literary choice in its own right, which bears on Q-002 in [OPEN_QUESTIONS.md](../OPEN_QUESTIONS.md).

---

## 6. Number and order of tales

| Tradition | (1) Tales narrated by the Vetāla | (2) Total counting the frame's conclusion | (3) Is the last unit structurally distinct? | (4) Omissions, additions, renumbering | (5) Whose numbering | Label |
|---|---|---|---|---|---|---|
| Somadeva | 24 | 25 | Yes. The text calls the 25th the concluding one (12.32.24, 26). | — | Tale numbering per the GRETIL encoder's `Vet_n` markup, consistent with the text's own count | VERIFIED — primary text |
| Kṣemendra | 24 per Emeneau §4, p. xiv (not counted directly) | 25 per Emeneau §4, p. xiv (the conclusion as the 25th). The 1901 contents list 25 *Vetālakathā* headings, but what they mark is not verified | Not checked | — | Emeneau's report; the edition's contents | PROVISIONAL |
| Śivadāsa | 24 | 25 | Yes. The conclusion is counted as the 25th (Uhle, after Oesterley). | One manuscript (*c*) adds a different 25th story. The order differs from Somadeva (§7). | Colophons in Uhle's text, e.g. *caturviṃśatitamaṃ kathānakam* | VERIFIED — primary text and scholarly source |
| Jambhaladatta (Emeneau's text) | 25 | 25 + frame | No. The 25th is a narrated tale, followed by the conclusion. | Three tales are found in no other Sanskrit version (J 21–23). The Bengali recension omits KSS 12 and 14. The Nepali W omits KSS 17 and 18 (= J 14, 15) and has KSS 12 and 14 instead. Emeneau infers an original of **27**. | Emeneau's edition | VERIFIED — scholarly source |
| Jambhaladatta (Vidyasagara 1873) | 24 | 25 | Yes | Omits J 18 and renumbers | Per Emeneau | VERIFIED — scholarly source |
| Hindi (Forbes/Platts) | 25 numbered tales, the 25th containing the mixed-relationships riddle followed by the conclusion | 25 | Partly: the conclusion sits *inside* tale XXV | Hindi I–XXIII = Ś 1–23 in order, except that III and IV are swapped. XXIV is an addition (a second body-entering tale, Kaliṅga setting, with the boy's father as the riddle's subject). XXV = Ś 24, followed by the conclusion. | Translator/editor numbering | VERIFIED — translation |
| Ryder 1917 | 22 + conclusion | — | Conclusion separate | Omits KSS 10 and 19 | Ryder's own | VERIFIED — primary text (Ryder's contents) |

**Do not assume that matching numbers mean matching stories.** For example, "tale 7" is the Nereid tale in Somadeva, the four suitors in Śivadāsa, the Pracaṇḍasiṃha–Sattvaśīla story in Jambhaladatta, and the four suitors in the Hindi.

---

## 7. Tale concordance

Organised by Somadeva's order, because it is the only tradition whose Sanskrit was read tale by tale in a verse-numbered e-text.

**How each column was established:**

- **KSS**: verse ranges from the GRETIL e-text [S02]. English titles are Tawney's, as listed in Penzer's contents [S04, S05]. *VERIFIED — primary text.*
- **K (BKM)**: Emeneau uses one shared "Bṛhatkathā" numbering for Somadeva and Kṣemendra [S07 §4], and the 1901 contents list 25 Vetālakathās [S08]. *PROVISIONAL.* The BKM text was not checked tale by tale; only tale 10 and the KSS 17 story were checked, on two page images (§4.A).
- **Ś**: identified from openings, questions, answers, and colophons in Uhle's text [S06]. *VERIFIED — primary text (through OCR)*. Cross-checked against Emeneau's stated equivalences (Bṛhatkathā 12 = Ś 11, 14 = Ś 13, 17–18 = Ś 16–17).
- **J**: from the titles in Emeneau's contents and his statements [S07]. *VERIFIED — scholarly edition (titles); content read only for J 10.*
- **Hindi**: from Platts's translation [S11]. *VERIFIED — translation.*
- **Ryder**: from his contents [S09], compared with KSS. *VERIFIED — primary text (contents).*
- **Match**: **E** = the same story (same core plot and riddle); **P** = partial (same core, different setting, names, or reasoning); **U** = uncertain.

| KSS | KSS location (Tawney ch.) | Identifying description (Tawney's title) | K | Ś | J (Bengali) | Hindi | Ryder | Match and notes |
|---|---|---|---|---|---|---|---|---|
| 1 | 12.8.59–196 (75) | The prince who won a wife with his minister's son's help (Padmāvatī) | 1 | 1 | 1 | I | 1 | E |
| 2 | 12.9.1–42 (76) | Three young brahmans who restored a dead girl to life | 2 | 2 | 2 | II | 2 | E |
| 3 | 12.10.1–95 (77) | The king and the two wise birds: are men or women worse? | 3 | 3 | 3 | **IV** | 3 | E (the Hindi swaps with 4) |
| 4 | 12.11.1–132 (78) | Vīravara, who sacrificed his family for King Śūdraka | 4 | 4 | 4 | **III** | 4 | E (the Hindi king is "Rupsen", not Śūdraka) |
| 5 | 12.12.1–50 (79) | Somaprabhā and her three suitors | 5 | 5 | **6** | V | 5 | E |
| 6 | 12.13.1–54 (80) | The woman who switched her husband's and brother's heads | 6 | 6 | **8** | VI | 6 | E |
| 7 | 12.14.1–115 (81) | The king who married his dependant to a Nereid (Sattvaśīla) | 7 | **8** | 7 | **VIII** | 7 | E. The answer is the servant in all four checked (§8.6). |
| 8 | 12.15.1–52 (82) | The three fastidious men (food, women, bed) | 8 | **23** | **5** | **XXIII** | 8 | E. The answer is the bed-connoisseur (KSS 12.15.50; Ś; Hindi). |
| 9 | 12.16.1–39 (83) | Anaṅgarati and her four suitors | 9 | **7** | 9 | **VII** | 9 | E (the answer is the warrior-suitor in KSS, Ś, J, and Hindi) |
| 10 | 12.17.1–68 (84) | Madanasenā and her rash promise | 10 | **9** | 10 | **IX** | — | **P: J changes the ending and the answer (§8.1)** |
| 11 | 12.18.1–39 (85) | King Dharmadhvaja's three delicate wives | 11 | **10** | 11 | **X** | 10 | E/P. In Ś and Hindi a Jaina prelude tells of King Guṇaśekhara and his Jaina minister Abhayacandra; the husband of the three queens is Guṇaśekhara's son **Dharmadhvaja**, as in KSS. Answer: the queen hurt by the mere sound of a pestle. In KSS marks (*kiṇa*; Penzer "bruises") rise on her hands (12.18.26–28, 37–38); the blisters (*visphoṭa*) are the second queen's, from moonbeams (12.18.18). In the Hindi (translation) she gets a headache and faints. *(Corrected 2026-11-18 from N1, [SOMADEVA_TALE_EVIDENCE.md](SOMADEVA_TALE_EVIDENCE.md) TC-011: the earlier text said the king was Guṇaśekhara and that the third queen had blisters.)* |
| 12 | 12.19.1–171 (86) | King Yaśaḥketu, his Vidyādharī wife, and his faithful minister | 12 | **11** | — (W has it) | **XI** | 11 | E (Bengali J omits it) |
| 13 | 12.20.1–60 (87) | Harisvāmin, who died of poisoned food | 13 | **12** | **12** | **XII** | 12 | E. The answer is that whoever blames any party out of ignorance is the sinner (12.20.56–59; Ś; Hindi). |
| 14 | 12.21.1–61 (88) | The merchant's daughter and the thief who wept and laughed | 14 | **13** | — (W and Newari have it) | **XIII** | 13 | E (§8.2) |
| 15 | 12.22.1–115 (89) | The magic pill (Manaḥsvāmin as a woman) | 15 | **14** | **13** | **XIV** | 14 | E. The answer is Śaśin, the lawful husband. |
| 16 | 12.23.1–207 (90) | The sacrifice of Jīmūtavāhana | 16 | **15** | **24** | **XV** | 15 | **P: the reasoning differs (§8.3)** |
| 17 | 12.24.1–61 (91) | The beautiful Unmādinī | 17 | **16** | **14** | **XVI** | 16 | E (the answer is the king) |
| 18 | 12.25.1–87 (92) | The brahman's son who failed to gain the magic power | 18 | **17** | **15** | **XVII** | 17 | E/P (a wavering mind in all; the Hindi adds fate relative to KSS. Ś 17 already closes with a verse that a man's intellect follows his *karma*, so fate is not a Hindi-only addition relative to Ś. *Qualified 2026-11-18 from N1, [SOMADEVA_TALE_EVIDENCE.md](SOMADEVA_TALE_EVIDENCE.md) TC-018; the Ś reading rests on OCR and is PROVISIONAL.*) |
| 19 | 12.26.1–102 (93) | The thief's son: to whom should the funeral offering go? | 19 | **18** | **16** | **XVIII** | — | E (the answer is the thief) |
| 20 | 12.27.1–137 (94) | The brahman boy who laughed at his sacrifice | 20 | **19** | **17** | **XIX** | 18 | E |
| 21 | 12.28.1–97 (95) | Anaṅgamañjarī, Maṇivarman, and Kamalākara | 21 | **20** | **18** | **XX** | 19 | **P: the question is reframed in the Hindi (§8.4)** |
| 22 | 12.29.1–51 (96) | The four brothers who revived a lion | 22 | **21** | **19** (tiger) | **XXI** (tiger) | 20 | E |
| 23 | 12.30.1–48 (97) | The old ascetic who wept, then danced, after entering a dead youth's body (Kaliṅga) | 23 | **22** (Viśvapura setting) | **20** | **XXII** (Viśvapura setting; the ascetic weeps and laughs) and **XXIV** (Kaliṅga setting; the boy's **father** laughs and weeps) | 21 | **P.** The Hindi has the plot twice. XXII is closer to KSS 23 and Ś 22 in its riddle; XXIV shares KSS 23's setting but has a different riddle and reasoning (§8.5). |
| 24 | 12.31.1–75 (98) | Father marries the daughter, son marries the mother: what are their children to each other? | 24 | 24 | **25** | **XXV** | 22 | E (Vikrama falls silent). J omits the key marriage detail (Emeneau §6). |
| Concl. | 12.32.1–41 (99) | Conclusion: the ascetic killed; boons | (25) | 25 | (in 25) | (in XXV) | Concl. | **P (§5)** |
| — | — | Four brothers and the harlot | — | — | **21** | — | — | Found only in J |
| — | — | Mūladeva wins a bride for Śaśideva | — | — | **22** | — | — | Found only in J |
| — | — | An ogre devastates Arimaulimaṇi's kingdom | — | — | **23** | — | — | Found only in J |

Bold numbers mark where a tradition's numbering departs from Somadeva's.

**Shared core.** All four Sanskrit tellings examined share 24 core stories, with the Bengali J lacking two and adding three. Jambhaladatta alone adds the three extra tales (J 21–23), and the Hindi alone tells the body-entering tale twice.

---

## 8. Detailed comparisons of selected tales

### 8.1 The promise tale: wife, lover, husband, and thief (KSS 10)

This is the best candidate for the brief's "well-known Wife and Thief story". A merchant's daughter, promised to one man, swears to another that she will come to him on her wedding night. Her husband lets her go. A thief stops her on the road and lets her pass. The lover refuses her. Who was the most generous?

*The brief does not define "Wife and Thief", so KSS 14 (§8.2) is compared too.*

| Field | Somadeva (KSS) | Śivadāsa (Ś 9) | Jambhaladatta (J 10) | Hindi (IX) |
|---|---|---|---|---|
| Location | 12.17.1–68 (Tawney ch. 84) | Uhle 1881, tale IX (colophon *navamaṃ kathānakam*) | Emeneau 1934, pp. 66–73 (answer on p. 73) | Platts 1871, Tale IX (approx. pp. 83–87, from OCR page markers); Barker 1855, Story IX |
| Main characters | King Vīrabāhu; merchant Arthadatta; daughter **Madanasenā**; her brother Dhanadatta; lover **Dharmadatta**, her brother's friend; husband **Samudradatta** (12.17.3–19) | King Madanavīra; Madanapura; Hiraṇyadatta's daughter Madanasenā; lover Dharmadatta, son of Somadatta [Uhle text; Emeneau notes] | King Vīrakeśarin; Anaṅgapura; merchant Arthadatta; daughter **Lāvaṇyavatī**; her brother arranges the match; husband **Kandarpa**; lover Dharmadatta; his friend Cintāmaṇi | King Bīrbar; Madanpur; merchant Hiranyadatt; daughter Madansenā; lover **Somdatt** |
| Plot | She tells her husband of her vow. He lets her go. A thief stops her, and on hearing her story lets her go to keep her word. The lover, Dharmadatta, refuses her. She returns, and the thief lets her pass. (12.17.29–60) | Same sequence. The lover, on hearing she has told her husband, delivers a string of verses on women's untrustworthiness and refuses her. | As in the others, **plus a brahman-ogre** who also stops her and lets her go. The lover bows to her and sends her back. She goes back to the ogre and the thief to offer herself and her jewels, and both release her. | As in Śivadāsa, including the lover's speech on women |
| Husband's reception | Sees her character as unbroken and lives happily with her (12.17.60–61) | Embraces her affectionately (*sasnehaṃ āliṅganam*), with a verse that a woman's beauty is fidelity | **Rejects her**: "I cannot now approve of you", and dismisses her [S07 p. 71]. Emeneau notes this is unlike all other versions. | "Evinced no affection for her", with the same verse on fidelity as in Śivadāsa [S11] |
| Vetāla's question | Which of them was truly generous (*tyāgī*)? (12.17.62–63) | Which of the three was the most magnanimous (*sattvādhika*)? | Of Kandarpa, the thief, the brahman-ogre, and Dharmadatta, which was noblest? | Whose was the highest merit of these three? |
| Vikrama's answer | **The thief.** The husband could hardly keep a wife whose heart was elsewhere (12.17.65). The lover let her go for two reasons: his passion had cooled with time, and he feared her husband would report him to the king in the morning (*kālajīrṇasaṃvegaḥ … prātar brūyān nṛpāya*, 12.17.66). The thief, with no such constraints, gave up a jewelled woman (12.17.67). | **The thief.** The husband released her knowing her mind was elsewhere, and the lover feared the king's punishment. | **The husband, Kandarpa**, who released her for the lover's sake despite his desire, and then rejected her as defiled. The others' nobility was "conditioned" [S07 p. 73; Sanskrit p. 72]. | **The thief.** The husband gave her up, and Somdatt left her alone from fear of the king. |
| Difference | — | The lover's misogynistic verses are added. The happy reunion is kept. | Adds the ogre. Inverts the ending and the answer. | Keeps Śivadāsa's verses. **Reverses the husband's warmth** (in translation). |
| Significance | — | Moderate: adds moralising | **High**: the tale's moral centre moves from the thief's disinterested restraint to the husband's sexual honour | **Moderate to high**: the same answer, but the emotional ending changes |

Labels: KSS *VERIFIED — primary text*; Ś *VERIFIED — primary text (OCR)*; J *VERIFIED — primary text (Emeneau's text and translation)*; Hindi *VERIFIED — translation* (Platts and Barker), and *PROVISIONAL* for the Hindi wording: Platts has "evinced no affection for her"; Barker's interlinear gloss has "her-husband for-her affection did-not-show", and his free translation "he had ceased to feel any affection for her" [S10, Story IX]. Two independent 19th-century English renderings agree, which makes a single translator's idiosyncrasy less likely. Barker's printed Hindi (p. 182) reads *par us ke khāvind ne use pyār na kiyā* (the report author's English rendering of the printed Hindi, not a quotation from Barker's gloss: "but her husband did not show her affection"). It was read on the page image by the independent AI reviewer and re-read by this report's AI author; **it is not a specialist reading**, and not a reading of the 1805 print, Forbes's text or the Braj. A specialist Hindi reading is recommended before it is relied on.

### 8.2 The thief who wept and laughed (KSS 14)

| Field | Somadeva (KSS) | Śivadāsa (Ś 13) | Jambhaladatta | Hindi (XIII) |
|---|---|---|---|---|
| Location | 12.21.1–61 (ch. 88) | Uhle, tale XIII | Absent from the Bengali text. Present in W and the Newari version, per Emeneau. | Platts, Tale XIII |
| Question | Why did the thief, on the stake, first weep and then laugh? (12.21.57–58) | Why did the thief first weep and then laugh at death? | — | Same |
| Answer | He wept because he could never repay the merchant, who had become a friend without cause. He laughed in wonder that the girl had passed over kings and loved him: "strange is a woman's heart" (12.21.59–60). | Wept: how can he repay her generosity? Laughed: look at women's stubbornness, loving even at death. A gnomic verse follows. | — | Wept: what return can he make for her giving up all for him? Laughed: she loved him at his death, and God's ways are inscrutable. A proverb follows. |
| Significance | — | Low: the same structure, plus maxims | **Absence** is significant. A Jambhaladatta foundation (Bengali recension) would lack this tale. | Low |

Labels: as for §8.1.

### 8.3 Jīmūtavāhana and Śaṅkhacūḍa (KSS 16)

| | Somadeva (12.23.202–206) | Śivadāsa (Ś 15) | Hindi (XV) |
|---|---|---|---|
| Question | Who was greater in courage (*sattva*), Śaṅkhacūḍa or Jīmūtavāhana? | Which of the two was greater in courage (*sattvādhika*)? | "Whose virtue was greatest?" (Platts). Barker's printed Hindi: *sat kis kā adhik huā?*, with *sat* (cf. Sanskrit *sattva*) glossed "virtue" [S10 p. 270] |
| Answer | **Śaṅkhacūḍa** | **Śaṅkhacūḍa** | **Śaṅkhacūḍa** |
| Reasoning | Jīmūtavāhana's deed is no wonder, because it was "perfected over many births" (*bahujanmasiddham*, 12.23.205). Śaṅkhacūḍa, already spared, ran after Garuḍa to give his body. | Jīmūtavāhana had **practised** giving his life **birth after birth** (*janmani janmani … prāṇatyāgābhyāsaḥ*), with a verse on habits carried from birth to birth [Uhle text p. 43]. Śaṅkhacūḍa returned and stopped Garuḍa. | Barker's printed Hindi: *jīmūtbāhan jāt kā chhatrī hai, use jī dene kā abhyās ho rahā hai*, roughly "Jīmūtavāhana is a Kshatriya by caste; for him the **practice** (*abhyās*) of giving his life is ongoing" [S10 p. 270, page image]. Platts: "a Kshatriya by caste … accustomed to holding his life in his hand" (the spelling of the caste word is normalised; the OCR is unclear) [S11, Tale XV]. Barker's free translation: "He was of the Kshatriya caste, whose practice that should be" [S10, Story XV]. |
| Difference | — | Same reasoning as KSS, with "practice" made explicit | The Hindi **keeps the idea of practice** (*abhyās*, matching Ś's *abhyāsaḥ*) but **grounds it in caste** instead of in many births. This is a change in what the practice rests on, not a simple shift from virtue to caste. |

Labels: KSS and Ś *VERIFIED — primary text*. Hindi: *VERIFIED — translation* (Platts and Barker), and *PROVISIONAL* for the Hindi wording itself. The Hindi passage was read on Barker 1855's page image by the independent AI reviewer and re-read by this report's AI author. **It is not a specialist reading**, and it is not a reading of the 1805 print, Forbes's text or the Braj original. Jambhaladatta's J 24 was not checked.

### 8.4 Anaṅgamañjarī, Maṇivarman, and Kamalākara (KSS 21)

| | Somadeva (12.28.92–96) | Śivadāsa (Ś 20) | Hindi (XX) |
|---|---|---|---|
| Question | Among these, who was most deluded by passion (*adhiko moho 'nurāgamūḍheṣu*, 12.28.93)? | "Among the three, who was blind with desire?" (*trayāṇāṃ madhye kaḥ kāmāndhaḥ*) | Barker's printed Hindi: *in tīnoṃ meṃ se kaunsā adhik kāmī huā?*, roughly "which of these three was most full of desire?" [S10 p. 332, page image]. Both English translators render it as love: "Whose love, of these three, was greatest?" [S11]; Barker's interlinear "out-of-these-three which most in-love was?" [S10, Story XX] |
| Answer | **Maṇivarman, the husband.** The two lovers died of mutual passion, which is understandable. He saw his wife die for love of another man and, instead of anger, died of grief: "excessively deluded" (*atimūḍhaḥ*). | **The husband**, "exceedingly blind with desire" (*atīva kāmāndhaḥ*), who seeing his wife dead for another put aside anger and died | **The husband.** Barker's Hindi: he abandoned anger and, "immersed in love for her" (*us ke prem meṃ magan ho*), gave up his life; "he was most *kāmī*" (*vuh adhik kāmī huā*) [S10 p. 332]. Platts: "the deepest lover". |
| Difference | — | The same evaluation, framed as blindness | The Hindi **keeps the vocabulary of desire** (*kāmī*) but **drops the explicit judgement** of delusion or blindness, and its reasoning speaks of love (*prem*). The English translations make the shift look larger than the Hindi wording does. |

**Continuation in KSS (added 2026-11-18 from N1; [SOMADEVA_TALE_EVIDENCE.md](SOMADEVA_TALE_EVIDENCE.md) TC-021).** The tale does not end with the three deaths. The goddess Caṇḍī, petitioned by her attendants on behalf of her devotee Arthadatta, orders that all three live "with passion stilled" (*śāntānaṅgāḥ*); they rise as if from sleep, Kamalākara goes home with head bowed in shame, and Arthadatta takes his daughter and her husband home and celebrates (12.28.86–91). The Vetāla's question (12.28.93) and Vikrama's answer refer to the deaths, not to the revival. Whether Ś 20 and Hindi XX also narrate the revival was not checked.

**What this tale shows.** The Sanskrit versions frame the case as a failure of judgement: KSS explicitly as delusion through passion (*mūḍha*), Śivadāsa as blindness with desire (*kāmāndha*). Ryder's title for his tale 19 (= KSS 21) asks which "was the most foolish", consistent with that framing. Barker's Hindi sits between that framing and the "greatest love" of the English translations. It asks who was most *kāmī*, which keeps desire but does not say "blind" or "deluded", and it explains the answer in the language of love. The difference is **real but partial**, and partly a translation effect. It is **not** an opposite moral framing. How *kāmī* reads in this register of Hindi is a question for a specialist; this report does not settle it. The passage still bears on the project's aim of layered meaning (D-005, D-006).

Labels: KSS and Ś *VERIFIED — primary text*. Hindi: *VERIFIED — translation* (Platts and Barker), and *PROVISIONAL* for the Hindi wording and its connotation. The Hindi was read on Barker 1855's page image by the independent AI reviewer and re-read by this report's AI author; **it is not a specialist reading**, and not a reading of the 1805 print, Forbes's text or the Braj. **A specialist Hindi reading is recommended** before the distinction is relied on.

### 8.5 The ascetic who enters a dead youth's body (KSS 23): the plot told twice in the Hindi

| | Somadeva (12.30) | Śivadāsa (Ś 22) | Hindi XXII | Hindi XXIV |
|---|---|---|---|---|
| Setting | Kaliṅga, the city Śobhāvatī. The brahman Yajñasoma's son Devasoma dies at sixteen (12.30.4–11). | Viśvapura, King Vidagdha, a brahman (Haravana in the OCR) who knows how to enter another's body | Biswapur, King Bidagdha, the brahman Nārāyan | Kaliṅga, the brahman Yajña Sharmā and his son |
| Who weeps and laughs | The **ascetic** | The **yogī** | The **brahman Nārāyan** (an aged householder, not yet an ascetic; *corrected 2026-11-17*, see [HINDI_XXII_XXIV_COMPARISON.md](HINDI_XXII_XXIV_COMPARISON.md) §9) | The boy's **father**, an onlooker, who "lost all desire for the world" (Platts) / "became a Bairāg" (Barker) |
| Question | Why did the ascetic weep and then dance? (12.30.42–43) | Why did he weep, and why did he laugh? (*kena kāraṇena ruditam, kuto hasitam*) | "Why did he weep, and why did he laugh?" | Why did the father first laugh and then weep? |
| Answer | He wept at leaving the old body that had served him so long. He danced for joy at gaining youth (12.30.45–47). | He wept because this body had been protected by his mother in childhood, raised by his father, and enjoyed in youth, and now had to be left; he laughed at gaining a young body [S06, Uhle text pp. 57–58] | Wept recalling his mother's love and his youth; laughed at succeeding in his art [S11 p. 167] | The father laughed at seeing the yogī enter his son's body, and so learning the art; he wept, thinking that he too must one day leave his own body [S11 pp. 175–176; S10, Story XXIV, p. 359] |

*VERIFIED — primary text* for KSS and Ś; *VERIFIED — translation (Platts and Barker)* for the Hindi. For Hindi XXIV, Barker's printed Hindi (p. 359) says that the father, seeing this marvel, *bairāg huā* (Barker's gloss: "the-ascetic's-vow was"), and *pahle hãsā pīche royā* (this report's AI author's literal rendering of the printed Hindi, not an English quotation from Barker: "first he laughed, afterwards he wept"). This is *PROVISIONAL*: an AI reading of one printed text on its page image (by the independent reviewer, re-read by this report's author), **not a specialist reading**, and not a reading of the 1805 print, Forbes's text or the Braj. The Ś identification follows Uhle's statement that Ś 22 is "essentially the same" as the 24th in manuscript B (= Somadeva 23) [S06 p. XIV], together with the opening read in Uhle's text.

**What is shared and what differs.** *(Corrected 2026-11-17 after a full reading of Hindi XXII and XXIV; see [HINDI_XXII_XXIV_COMPARISON.md](HINDI_XXII_XXIV_COMPARISON.md) §9.)* The shared core is the **premise**: an aged man who knows the art of entering another body takes a younger one, with a weeping and a joyful reaction in the riddle. The **dead boy at the cremation ground** is established for **KSS 23 and Hindi XXIV only**. In Ś 22 and Hindi XXII he enters "a young man's body" and no death, funeral or revival is mentioned (Uhle text p. 56; Barker p. 339). In KSS 23 the entrant is an aged Pāśupata ascetic. In Ś 22 and Hindi XXII he is an **aged brahman householder who afterwards announces he has become a yogī**, and his motive is enjoyment (*bhogān*, *bhog*). In KSS 23 the motive is the desire for youth (*yauvanecchayā*, 12.30.34), with greater attainment in the answer (12.30.47); in Hindi XXIV it is easy devotion (*sukh se jog*). In all three tales with the entrant as riddle subject, he weeps from attachment to the old body (KSS and Ś: also his parents' care of it in childhood; Hindi XXII: his mother's love and the delight of youth, and *moh* for the body). The **laughter differs**: KSS 23 he **dances** at entering a new body and accomplishing more; Ś 22 he laughs at **regaining a young body**; Hindi XXII he laughs at **the success of his science and a new body** (Barker p. 343). Hindi XXII is thus closest to **Ś 22 in events** and to both in the riddle's subject. Hindi XXIV keeps KSS 23's Kaliṅga setting, death, cremation ground and revival, but its riddle is about a different person, the **father**, with different reasoning (he laughs at seeing the art and weeps at his own coming death). So XXIV is a variant with a new riddle subject, not a duplicate. *Whether it is a separate tale under D-035 is not settled by this report.*

*PROVISIONAL interpretation:* the Hindi appears to keep Śivadāsa's tale XXII and add a Kaliṅga-setting variant as XXIV, which brings its narrated tales to 25. The reason is not established.

### 8.6 A checked non-difference: the Nereid tale (KSS 7)

All three traditions checked (Somadeva 12.14.110–113; Śivadāsa 8; Hindi VIII) judge the **servant** (Sattvaśīla, or his equivalent) greater than the king. Somadeva's reason is that the servant leapt into the sea without knowing what lay there, while the king knew. The point of recording a non-difference is that a supposed discrepancy here proved, on checking, to be a misreading. Every claimed difference in this report should be checked the same way.

**Qualification (2026-11-18, from N1; [SOMADEVA_TALE_EVIDENCE.md](SOMADEVA_TALE_EVIDENCE.md) TC-007).** The non-difference holds for the **answer**, not for the **reasoning**. Ś 8 (Uhle, OCR) reasons that the one who first does a kindness is greater, with a verse that goodness towards benefactors is no merit and goodness towards those who do harm is true goodness. Hindi VIII (Platts) reasons that there is no special merit in conferring favours when that is one's office, and that the one who promotes another's interests while having his own is greater. Both differ from Somadeva's reason, which turns on knowledge and expectation at the moment of the leap (12.14.112–113).

---

## 9. Characterisation and literary treatment

Assessments here are limited to what was actually read. They are **not** a ranking.

| Aspect | Somadeva | Kṣemendra | Śivadāsa | Jambhaladatta | Hindi |
|---|---|---|---|---|---|
| Medium | Kāvya verse (ślokas, with longer metres at climaxes and endings) | Verse, condensed | Prose with many inserted verses, often gnomic or borrowed | Plain prose, with a few verses early on | Prose with proverbial verses |
| Narrator's intervention | Regular closing maxims praising the king's steadfastness (e.g. 12.9.42; 12.24.61) | Not assessed | Many inserted maxims, including generalisations about women (e.g. the lover's speech in Ś 9) | Sparse | Maxims and proverbs, e.g. in tales IX, XIII, XVII, and the closing line of XXV |
| Dialogue and inner thought | Present. For example, the king's reasoning is given at length in answers (12.14.112–113; 12.28.95–96). Inner thought appears in, e.g., Samudradatta's moment of reflection (12.17.39). | Not assessed | Dialogue is present, often carrying verses | Functional. Emeneau finds the riddle-solutions sometimes careless. | Dialogue-rich (in translation) |
| How questions are posed | Formulaic threat plus a pointed question. Answers are often analytic, weighing each party. | — | The same frame formula, then a short answer, sometimes backed by a verse | Similar. Answers are sometimes brief. | The same |
| Ambiguity | Each riddle except 24 is closed with an answer, but the reasoning can be contestable. The final riddle is left unanswered: the text says that Vikrama, though he thought it over, **did not know** the answer (*nājñāsīt*, 12.31.60), and the Vetāla reflects that the king does not know it (12.31.62). That the cycle was designed so that this riddle has no answer is an interpretation, not a statement of the text. *(Qualified 2026-11-18 from N1, [SOMADEVA_TALE_EVIDENCE.md](SOMADEVA_TALE_EVIDENCE.md) TC-024.)* | — | Unanswered; Ś 24 says only that the king gave no reply, without a reason (N1) | The same (not re-checked by N1) | Unanswered; Platts: the king "held his tongue through ignorance" (XXV; N1) |
| Humour and play | Present in, e.g., the fastidious men (KSS 8) and the magic pill (KSS 15) (observed in outline) | — | Not assessed | Not assessed | Not assessed |
| Recurring character types | Kings, ministers, merchants, brahmans, thieves, courtesans, Vidyādharas, ascetics. Women often drive the dilemma. | — | Similar, with Jaina-coloured details in some tales (e.g. Ś 10's Jaina minister) | Similar, plus Mūladeva (J 13, 22) | Similar |
| Frame's effect | Turns each tale into a test of Vikrama's judgement and nerve. The narrator's closing maxims keep that focus. | — | The same | The same. In the Bengali recension the ending adds the Vetāla's own backstory and a sacrifice to Devī (§5) | Places the cycle in Vikramāditya legend (Bharthari, three births) |

Observations relevant to the project, all *PROVISIONAL* because they are based on partial reading:

- **Somadeva**'s answers often give reasons for each party (e.g. 12.17.65–67, 12.28.95–96), where Śivadāsa's are often one line; but Jambhaladatta's answer in J 10 also reasons at length (Emeneau p. 73), so this is an observation about the passages read, not a ranking. Somadeva is the most precisely citable of the sources consulted, because its Sanskrit is in a verse-numbered e-text. Its 19th-century English translation (Tawney) is very likely public domain, subject to the check in §11. *No comparison of verbal richness is made*, because the traditions were read at unequal depths and in different forms: KSS in the Sanskrit, Ś through OCR, J and the Hindi mainly in English.
- **Śivadāsa** and the **Hindi** carry more explicit moralising, much of it gendered. That is a challenge for a project that rejects forced morals (D-006), but it is also historically significant material.
- **Jambhaladatta** offers unique tales and at least one radically different ending (§8.1). Emeneau's judgement of its style is unflattering, and Aufrecht's (reported by Uhle) is the opposite.
- **No claim is made that any tradition is more psychologically sophisticated or philosophical.** The evidence gathered does not support such a ranking.

---

## 10. Editions, translations, and source quality

Full bibliographic entries are in §17. Types: **P** = primary text; **SE** = scholarly edition; **T** = translation; **SS** = secondary scholarship; **CR** = catalogue record.

| ID | Work | Type | Accessed | Known limitations |
|---|---|---|---|---|
| S01 | GRETIL KSS e-text (Durgaprasad–Parab 1915 basis) | P (e-text of an SE) | Full file downloaded. Sections read as listed in §2.2. | Typos silently corrected; footnotes incomplete; the e-text, not the print, was read |
| S02 | GRETIL KSS Vetāla extract (Artesani) | P (e-text) | Full file; openings, questions, answers, and conclusion read | Encoder's tale markup; source field blank in header |
| S03 | Tawney, *Kathá sarit ságara* vol. 2 (1880–84) | T | Located; not read | 19th-century translation |
| S04, S05 | Penzer (ed.), *The Ocean of Story* vols 6–7 (1926–27) | T + SS | Contents; vol. 6 pp. 225–228 | Some claims conflict with other evidence: "contains no verse" for J, against Emeneau and Uhle (§4.D); Lallū Lāl as creator (§4.E). His 1884 for Uhle is also found in Emeneau, so its origin is open (§4.C). |
| S06 | Uhle 1881 | SE + SS | Vorwort; text as needed | OCR of romanised Sanskrit; older philology |
| S07 | Emeneau 1934 | SE + T + SS | Preface; Introduction; frame; story 10; contents | Bengali recension only; OCR of tables unreliable |
| S08 | BKM, Kāvyamālā 69 (1901) | SE | Contents only (OCR) | Devanagari OCR unusable for close reading |
| S09 | Ryder 1917 | T | Contents; frame; tale 1 opening | Source not stated in front matter; omits two tales |
| S10 | Barker & Eastwick 1855 | Hindi text + interlinear T + free T | Preface; the 1805 introduction; Stories IX, XV, XX, XXIV in translation; printed Hindi of IX (p. 182), XV (p. 270), XX (p. 332) and XXIV (p. 359) on page images (AI readings, not specialist Hindi readings) | Preface contains a factual error (§4.E); Hindi text unreadable in OCR but **readable on page images** |
| S11 | Platts 1871 (translating Forbes's Hindi text) | T (of the Hindi) | Tale openings and endings; frame in part | Hindi original not checked |
| S12 | Otter 2021, Newari reader | SS + P (selections) | NOT ACCESSIBLE (site blocks automated access) | Known only through a search summary |
| S13 | Jørgensen 1921, *ZDMG* 75 | SS + P (two Newari tales) | pp. 213–214 (OCR) | Only the introduction's opening pages read |
| S14 | 1965 *Purāṇa* bulletin article (author not identified) | SS | NOT ACCESSIBLE | Known only through a search summary |
| S15 | Internet Archive record bdrc-W23194 | CR | Record title only | Not evidence of content |
| S16 | Vidyasagara 1873, Calcutta | P (poor edition, per Emeneau) | Located on the Internet Archive; not read | — |
| S17 | Francke 1921, *ZDMG* 75 | SS (research lead) | Title in the volume's contents only | Not read |

**Not located or not consulted:** the 1805 Calcutta print; Uhle 1914 (*BSGW* 66); Winternitz, *Geschichte der indischen Litteratur* vol. 3; Emeneau, "Kṣemendra as kavi" (*JAOS* 53, 1933); Emeneau's article on the Vikrama birth legend; Bosch 1914; Schick 1931; Oesterley 1873; Lévi 1885–86; Burton 1870.

---

## 11. Copyright and permissions

The underlying historical texts (the premodern Sanskrit texts and the older vernacular texts; see §§4 and 12 for what is and is not established about their dates) are **likely to be in the public domain because of their age**, but the position depends on jurisdiction and must be checked. **Modern editions, editorial work, translations, commentaries, notes, and digital presentations may carry separate rights**, as [SOURCE_AND_RESEARCH_POLICY.md](../SOURCE_AND_RESEARCH_POLICY.md) §8 cautions. This section separates the two. It is **not legal advice**, and every item marked RESEARCH REQUIRED needs checking before any material is reproduced.

| Item | Rights information found | Status for the project |
|---|---|---|
| GRETIL e-texts [S01, S02] | Header states a **CC BY-NC-SA 4.0** licence and a good-faith copyright notice | Verified licence. The **NonCommercial** term matters if the project is ever commercial. Underlying Sanskrit: likely public domain by age (jurisdiction to be confirmed). |
| Tawney 1880–84 [S03] | 19th-century publication | Very likely public domain. RESEARCH REQUIRED for the specific printing. |
| Penzer's notes and appendices (1924–28) [S04, S05] | Published before 1931 (US public domain). Penzer's death date was not verified here, and the term elsewhere depends on it. | RESEARCH REQUIRED outside the US |
| Uhle 1881 [S06] | 19th-century publication | Very likely public domain. RESEARCH REQUIRED for the author's death date and jurisdiction. |
| Emeneau 1934 [S07] | "Copyright 1934 American Oriental Society" | **RESEARCH REQUIRED.** Do not reproduce his translation or apparatus. His critical text's editorial choices may also be protected. |
| BKM 1901 [S08] | Early 20th-century Indian publication | RESEARCH REQUIRED |
| Ryder 1917 [S09] | The scan states "no known copyright restrictions in the United States" | US public domain likely. RESEARCH REQUIRED elsewhere. |
| Barker 1855; Platts 1871 [S10, S11] | 19th-century publications | Very likely public domain |
| Otter 2021 [S12] | Modern publication | Assume protected |
| Burton 1870 | — | A free adaptation with Burton's own inventions [S04]. Not a source of the tradition. |

**Project rule reminder.** This research does not permit reproducing source text, and no substantial passage of any modern translation should enter project content ([SOURCE_AND_RESEARCH_POLICY.md](../SOURCE_AND_RESEARCH_POLICY.md) §8). Free availability of a scan does not grant reuse rights.

---

## 12. Comparative synthesis

### A. Tradition overview

| Tradition | Period (and confidence) | Language | Form | Source availability | Vetāla-narrated tales | Frame | Distinctive features | Evidence confidence |
|---|---|---|---|---|---|---|---|---|
| Kṣemendra (BKM) | Not established. Emeneau mentions c. 1037 only conditionally (§4.A); priority relative to Somadeva not established | Sanskrit | Verse, condensed | 1901 and 1931 editions as scans; OCR poor | Not verified. Emeneau (§4, p. xiv) reports that the Kashmirian versions (Somadeva and Kṣemendra) have 24 stories apart from the frame, with the conclusion as the 25th. The 1901 edition lists 25 *Vetālakathā* headings. Kṣemendra's own internal count is unverified: the section was not read tale by tale | Not read. Scholarly sources report a close relationship to Somadeva (Uhle: shared names and material; Emeneau: "essentially the same subject-matter"), and Emeneau notes the king is Vikramasena in the BKM manuscripts and Trivikrama° in the edition. The frame itself was not checked | Brevity (per Emeneau and Uhle); close to Somadeva by scholarly comparison | **Low** (two pages checked by the reviewer: tale 10 and the KSS 17 story) |
| Somadeva (KSS) | Datable to the reign of Ananta of Kashmir (primary); absolute dates RESEARCH REQUIRED | Sanskrit | Kāvya verse | GRETIL e-text; Tawney/Penzer translation | 24 + concluding 25th (primary) | Trivikramasena; Śiva's blessing; Vikramāditya identity | Explicit count; answers that often reason through each party | **High** for the passages read |
| Śivadāsa | Undated in sources read; a manuscript of 1487 is reported | Sanskrit (plus Prakrit verses) | Prose with many verses | Uhle 1881 scan; no modern translation found | 24 + conclusion | Vikramasena; a printed ending that mixes in verses Uhle attributes to Kṣemendra; variant endings | Moralising verses; a different order; Jaina-coloured details | **Medium** (OCR, partial reading) |
| Jambhaladatta | Before the 16th century; author obscure | Sanskrit | Prose | Emeneau 1934 (edition and translation) | 25 (Bengali text); an original of 27 is Emeneau's hypothesis | Vikramakesarin/Vikramāditya; interpolated backstory (Bengali) | Three unique tales; altered endings | **Medium** (edition read only in part) |
| Braj (Surat) | 18th century, Jai Siṅgh Sawāī / Muhammad Shāh (primary, in translation) | Braj | — | Not located | — | — | Source of the Hindi | **Low** |
| Hindi/Hindustani (1805 lineage) | 1805 and later revisions | Hindustani, with Braj | Prose with proverbial verses | 19th-century editions and translations (Forbes, Barker, Platts) | 25, with the body-entering plot told twice (XXII, XXIV; different riddles) | Vikram of a Dhārānagar royal family (Platts's frame; Barker's preface calls him king of "Oujein", Ujjain); three births; Indra | Śivadāsa-like order; layered maxims | **Medium** (mainly in translation; four passages of Barker's printed Hindi read on page images) |
| Newari | Undated. Jørgensen's manuscript is of 1801; a 1675 Sanskrit–Newari manuscript of Jambhaladatta's text exists (Uhle), but its relation to the Newari recension is not established | Newari | Prose | Two tales edited by Jørgensen (1921); Otter's reader NOT ACCESSIBLE | 25 (per Emeneau) | — | Based on Jambhaladatta's version (Emeneau), though no surviving Sanskrit recension is its direct source (Jørgensen); compatible views | **Low** |
| Bhaviṣya Purāṇa | Possibly late (unverified) | Sanskrit | Verse (reported) | Not consulted | — | — | — | **Very low** |

### B. Tale concordance

See §7.

### C. Major textual differences

| Area | The difference | Why it matters |
|---|---|---|
| Frame | The king's identity, the ascetic's nature (*bhikṣu*, yogī, *kāpālika*, potter-devotee), the Vetāla's backstory, and the closing theology all vary (§5) | Sets the tone of the whole cycle and the meaning of Vikrama's ordeal |
| Tale sequence | Major reorderings: KSS 8 sits at 5 (J) or 23 (Ś, Hindi); KSS 16 sits at 24 (J) (§7) | Pacing and the build-up of themes across the cycle differ |
| Content | J adds 3 tales and drops 2. The Hindi tells one plot twice (XXII and XXIV, with different riddles) (§§6–8). | What the "25 tales" actually are depends on the foundation chosen |
| Plot and motivation | The J promise tale adds an ogre and reverses the husband's response (§8.1) | Changes what the dilemma is about |
| Questions | KSS 21 asks who was "most deluded" by passion; Ś 20 who was "blind with desire"; Barker's printed Hindi who was *adhik kāmī* ("most full of desire"), explained in terms of love (*prem*), and rendered "greatest love" by both English translators (§8.4) | A partial shift: the Hindi drops the explicit judgement of delusion but keeps desire. Partly a translation effect; specialist Hindi reading recommended |
| Vikrama's answers | J 10 names the husband instead of the thief (§8.1) | Changes the tale's conclusion |
| Reasoning | KSS 16: the deed perfected over many births (KSS) or practised birth after birth (Ś), against practice (*abhyās*) grounded in Kshatriya caste (Barker's printed Hindi) (§8.3) | Changes what the hero's practice rests on; specialist Hindi reading recommended |
| Endings | Śiva and Vidyādhara sovereignty (KSS); the Gandharvas, the trimūrti, and Śiva naming the king Vikramāditya and granting Vidyādhara fortune, partly in verses Uhle attributes to Kṣemendra (Ś printed text); Indra and the two *bīr* servants (Hindi); Kṣāntiśīla sacrificed to Devī, who grants rule and Tāla-Vetāla powers (J, Bengali) (§5) | Changes how the whole cycle resolves |

### D. Literary strengths and limitations (as they bear on this project)

The criteria are drawn from [PROJECT_VISION.md](../PROJECT_VISION.md) and [EDITORIAL_GUIDE.md](../EDITORIAL_GUIDE.md): coherence, richness, characterisation, dialogue, suspense, variety of dilemmas, ambiguity, frame continuity, and reliability and accessibility of the source. **This is a literary assessment, not an objective ranking.**

| Tradition | Possible strengths for this project | Possible limitations | Evidence behind the assessment |
|---|---|---|---|
| Somadeva | Coherent frame with an explicit 24 + 1 structure. Answers that often reason through each party (in the passages read). The most precisely citable source consulted (verse-numbered Sanskrit), which eases checking a retelling against the Sanskrit. | A courtly kāvya register far from modern Hindi prose. Theological ending (Śiva, Vidyādhara sovereignty). Some gendered generalisations (12.10.93–94). | §§4.B, 5, 8 |
| Kṣemendra | A second Kashmirian verse telling, close to Somadeva in names and material (per Uhle and Emeneau). Its date, and its priority relative to Somadeva, are not established here. | Condensed. Essentially unread here (two pages). Hard to verify. | §4.A (secondhand) |
| Śivadāsa | Widely circulated. Closest in order to the Hindi lineage. Many verses offer gnomic material. | No modern translation found. Variant-rich manuscripts. Heavy moralising. | §§4.C, 7, 8.1 |
| Jambhaladatta | Unique tales and endings, offering variety. A scholarly edition with English translation exists. | Bald style (Emeneau). Careless riddle details. Only the Bengali recension is printed. The edition carries a 1934 copyright notice; its current rights status is RESEARCH REQUIRED (§11). | §§4.D, 8.1 |
| Hindi lineage | *Assumed* to be the version most familiar to Hindi readers; no source consulted establishes this (see §14, question 2). Proverbial texture. *Project-specific editorial inference, not a historical or scholarly finding:* directly relevant to a Hindi-first project. A 19th-century printed Hindi text (Barker 1855) is readable on page images. | Mediated through Braj, with uncertain Sanskrit ancestry. Tells one plot twice (XXII, XXIV). Attribution confusion. Moralising. Read mainly in translation here. Which Hindi text would be authoritative is undecided. | §§4.E, 6, 8 |

---

## 13. Implications for the project and options for Q-401

The approved direction: Hindi first, then English (D-012, D-013); broad imagination with disciplined relevance (D-009); depth that emerges from the story (D-005, D-033); no forced morals (D-006); essential events kept faithful (D-009); sources identified and variants recorded (D-016, D-017).

The options below are possibilities to evaluate. **None is recommended.**

The *Literary potential* rows rest on different kinds of reading: Sanskrit read directly for Option 1, Sanskrit through OCR for Option 2, English translations and four passages of printed Hindi for Option 3, and the frame and two tales for Option 4. They are therefore not like-for-like comparisons. Phrases marked *author's inference* are judgements by this report's author, not established findings.

### Option 1: Adopt Somadeva's KSS as the primary foundation

| | |
|---|---|
| Advantages | The most precisely citable source among those consulted: its Sanskrit is in a verse-numbered e-text with a disclosed basis, so a retelling can be checked verse by verse. (The e-text has not been checked against the 1915 print, and is CC BY-NC-SA.) A 19th-century English translation (Tawney) that is very likely public domain, subject to §11. A coherent frame with an explicit count (24 + 1). Answers that often reason through each party. A context datable to Ananta's reign in Kashmir; absolute dates are RESEARCH REQUIRED. |
| Disadvantages | Further from the Hindi *Baitāl Pachīsī* lineage: a different king's name and frame, and a different order. (How familiar that lineage is to present-day Hindi readers is an assumption, not a finding; see §14.) A courtly register to be reimagined in modern Hindi. |
| Textual consistency | High: one text, one frame |
| Literary potential | *Opportunities:* answers that often reason through each party (e.g. 12.17.65–67, 12.28.95–96), which could support layered reading (D-005); closing maxims that could be adapted or dropped. *Limitations:* a courtly verse register that would have to be reimagined in modern Hindi prose; gendered generalisations (e.g. 12.10.93–94). Based on the opening and question-and-answer verses of most tales, not on full reading. |
| Verification burden | **Lowest for checking a retelling against the Sanskrit**, because tale-by-tale verse references are available. Not lowest for every purpose: a Hindi-first project may still need comparison with the Hindi lineage, and checking the e-text against the print remains to be done. |
| Copyright and access | The underlying Sanskrit text (the closing praśasti associates Somadeva with Queen Sūryavatī, wife of Ananta of Kashmir, but gives no year; the absolute date is not established here, §4.B) is likely in the public domain because of its age, subject to jurisdiction-specific confirmation (§11). The GRETIL e-text is a modern digital edition with its own CC BY-NC-SA 4.0 licence; its NonCommercial term matters if the project is ever commercial, in which case the print edition's or Tawney's status would need checking (§11). |
| What is lost | Jambhaladatta's unique tales and endings. Śivadāsa's and the Hindi's order and maxims. The Hindi frame (Bharthari, three births). |

### Option 2: Adopt Śivadāsa as the primary foundation

| | |
|---|---|
| Advantages | Widely circulated (per Uhle). Close in order to the Hindi lineage. The text contains many inserted verses; Uhle counts about 113 of 692 as narrative in the narrow sense (§4.C, [S06 pp. XVI–XX]). This describes quantity, not literary quality. |
| Disadvantages | No modern translation was found, so a new working translation would be needed. Manuscript variation (several endings; one manuscript with an extra tale). The printed ending mixes in verses Uhle attributes to Kṣemendra. A heavy moralising layer. Undated. |
| Textual consistency | Medium: choices between manuscripts will be needed |
| Literary potential | *Opportunities:* many inserted verses and maxims, which are historically significant material; an order close to the Hindi lineage's. *Limitations:* much of that verse is gnomic or borrowed (Uhle counts only about 113 of 692 verses as narrative), and its explicit moralising, much of it gendered, would need reshaping under D-006. Based mostly on openings, answers and colophons read through OCR. |
| Verification burden | **High**, because of manuscript variation and mixed textual evidence (for example, the printed ending), not because of access: page images of Uhle 1881 are freely available. A specialist Sanskrit reading is recommended. |
| Copyright and access | The 1881 edition is likely public domain (RESEARCH REQUIRED) |
| What is lost | Somadeva's verse and explicit structure; Jambhaladatta's variants |

### Option 3: Use the Hindi *Baitāl Pachīsī* lineage as the principal literary foundation, consulting the Sanskrit traditions as comparative references

| | |
|---|---|
| Advantages | A Hindi literary tradition (*project-specific editorial inference, not a scholarly finding:* it bears directly on a Hindi-first project). It is *assumed*, not established, to be the version closest to Hindi readers' memory (§14, question 2). Dialogue and proverbs. Treats a real literary tradition on its own terms. |
| Disadvantages | Late and mediated: its Braj source is not located and its Sanskrit ancestry is uncertain. Attribution is confused. It tells the body-entering plot twice (XXII and XXIV, with different riddles), and decisions would be needed about that and about "25". The Hindi would need to be read in full; this report used translations, plus four passages of Barker's printed Hindi. |
| Textual consistency | Medium: several editions and revisions exist (1805 text, Tāriṇī Charan Mitr's revision, Forbes, Barker) |
| Literary potential | *Opportunities:* dialogue, proverbs, and the Vikramāditya-legend frame (Bharthari, three births), which are directly relevant to writing in Hindi (*author's inference*). *Limitations:* moralising speeches (e.g. Hindi IX) that would need handling under D-006; the body-entering plot told twice, with different riddles. Any value from familiarity depends on the assumption in §14, question 2. Based on English translations and four passages of Barker's printed Hindi. |
| Verification burden | **High**. Barker 1855's printed Hindi is now accessible on page images, but which text would be authoritative (the 1805 print, Barker, Forbes, or a later edition) is undecided, and the 1805 print and the Braj have not been located. |
| Copyright and access | 19th-century editions are likely public domain. Modern Hindi editions are probably not. |
| What is lost | Proximity to the oldest tellings; Somadeva's frame and theology; Jambhaladatta's variants |

### Option 4: Adopt Jambhaladatta as the primary foundation

| | |
|---|---|
| Advantages | Distinctive tales (J 21–23) and endings (J 10) that may surprise readers. Proper names close to the Kashmir versions. A scholarly edition with translation exists. |
| Disadvantages | The style is judged plain by its editor. Riddle details are careless. Only the Bengali recension is printed, and Emeneau argues it is the less original one. It lacks two widely known tales (KSS 12, 14). The count problem raised by Emeneau's hypothesis of an original 27 tales. |
| Textual consistency | Medium: one printed text, of the Bengali recension (H, O, P, with V, a poor printing); the Nepali recension, which Emeneau considers closer to the original, cannot be recovered from W alone (§4.D) |
| Literary potential | *Opportunities:* three tales found in no other Sanskrit version (J 21–23) and a different ending to the promise tale (J 10). *Limitations:* prose that its editor calls plain and "at times monotonously bald" (Aufrecht, as reported by Uhle, thought otherwise), so much texture would have to come from the writer (*author's inference*); riddle details sometimes omitted (Emeneau §6). Based on the frame, J 10 and J 25 only. |
| Verification burden | Medium: Emeneau's edition is usable, but the printed text rests on the Bengali recension, which Emeneau judges the less original (§4.D) |
| Copyright and access | **Emeneau 1934: rights RESEARCH REQUIRED** |
| What is lost | Two tales that the other traditions share (KSS 12, 14); the agreement of the other traditions on several endings |

### Option 5: One tradition for the frame, another for selected tales (a hybrid)

| | |
|---|---|
| Advantages | Could pair, for example, a frame from one tradition with a preferred telling of each tale. Allows deliberate use of meaningful variants. |
| Disadvantages | **High risk of incoherence.** Frames and tales were shaped together: the king's identity, the ascetic's motive, and the closing theology differ (§5). Some answers depend on details that vary between versions (§8). Blending can create a version that never existed, while appearing to be traditional. |
| Textual consistency | **Low unless strictly documented**: every tale would need its source recorded (D-017) |
| Literary potential | *Opportunities:* in principle, access to any tradition's telling of each tale, including variants such as J 10. *Limitations:* the gain depends on frames and tales fitting together, which §5 and §8 show they often do not. Not tested on any actual combination. |
| Verification burden | **Highest**: every tale must be verified against its chosen source *and* checked for fit with the frame |
| Copyright and access | Combines the burdens of each chosen source |
| What is lost | A single, nameable textual identity |

### Option 6: Different source foundations per tale, within one consistent frame

A disciplined variant of Option 5. One frame is fixed (from one tradition). For each tale, a documented editorial decision chooses which tradition's telling to follow, with reasons recorded.

| | |
|---|---|
| Advantages | Keeps one frame while allowing per-tale literary judgement. Fits D-017's variant-tracking requirement. |
| Disadvantages | The same blending risks as Option 5, at the tale level. It requires an editorial rule for conflicting answers (for example, J 10 against the rest). |
| Textual consistency | Medium if the rule is strict: each tale follows one source, but the cycle as a whole draws on several |
| Literary potential | Not assessed separately. It depends on which tradition is chosen for each tale; see the rows for Options 1–4. |
| Verification burden | High: each tale would have to be verified against its chosen source, and the frame against its own, so the checks of several options combine |
| What is lost | Uniformity of voice inherited from one source; the writer must supply coherence |

**Caution on combining.** Combining traditions should not be chosen merely because it offers more material. Where versions conclude differently (§8.1) or reason differently (§8.3, §8.4), a blend must pick one. Picking without recording the choice would conflict with D-017 and could misrepresent the tradition to readers.

---

## 14. Questions for the user before choosing

1. **What does "25 tales" (D-001) mean in practice?** Somadeva has 24 tales plus a concluding 25th. Śivadāsa has 24 plus the conclusion counted as the 25th (one manuscript has a different 25th story). Jambhaladatta's text has 25 narrated tales, and Emeneau hypothesises an original of 27. The Hindi has 25 numbered tales, with one plot told twice and the final riddle and conclusion inside XXV. Kṣemendra's edition has 25 headings, but its internal count is not verified. Should the project's count follow the chosen foundation? (Recorded as `Q-410`.)
2. **How much should familiarity to Hindi readers weigh against textual age and verifiability?** This report *assumes*, without evidence from the sources consulted, that the Hindi *Baitāl Pachīsī* lineage is the version most familiar to present-day Hindi readers. Is that the user's experience, and does it matter? (Options 1 and 3 pull in different directions on this.)
3. **Which frame?** The frame choice (§5) also settles the king's name (Trivikramasena, Vikramāditya, or Vikramakesarin), the ending's theology, and the Vetāla's backstory. Related to `Q-002`.
4. **How should the project treat moralising and gendered generalisations in the sources** (§§3, 8, 9), given D-006? Should they be retained as characters' views, reshaped, or omitted?
5. **Should variant endings be visible to readers** (for example, J 10's reversal) or recorded only internally? Related to `Q-404`.
6. **What level of specialist help is acceptable?** All options rest on AI readings, and a specialist check of the language-sensitive readings is recommended for each (§2.2). Options 2, 3 and 5 depend most heavily on specialist Sanskrit or Hindi/Braj work.
7. **Is commercial use anticipated?** It affects the GRETIL licence and the copyright checks (§11).
8. **If the Hindi lineage matters, which Hindi text should be treated as authoritative?** The candidates include the 1805 Calcutta print (not located), Barker 1855, Forbes's edition, or a later edition.
9. **Should a Hindi specialist read the translation-sensitive passages before deciding?** These are Hindi IX (the husband's coldness, p. 182), XV (*abhyās*, p. 270), XX (*kāmī*, p. 332) and XXIV (the father's laughing and weeping, p. 359), so far read only by AI readers on Barker's page images.

---

## 15. Research limitations and outstanding work

### Sources not yet located

- The 1805 Calcutta print of the *Baitāl Pachīsī*, and any copy of the Braj version by Surat
- Uhle 1914 (*BSGW* 66), the 1487 Śivadāsa manuscript
- Any edition of the Bhaviṣya Purāṇa Vetāla section

### Sources located but not consulted in this session

- BKM 1901 and 1931 editions (beyond the 1901 contents)
- Tawney 1880–84 translation (vol. 2)
- Penzer's tale-by-tale appendix notes (vol. 6 pp. 229 ff.; vol. 7 pp. 199 ff.)
- Vidyasagara 1873 printing of Jambhaladatta
- Oesterley 1873; Forbes's Hindi text; Barker's Hindi tale texts (apart from four passages on page images)
- Jørgensen 1921 beyond pp. 213–214
- Francke 1921 (*ZDMG* 75, from p. 72), a **research lead** for the Tibetan tradition: only its title has been read [S17]
- Lévi, *Journal Asiatique* 1885–86, on which any date for Kṣemendra depends

### Sources not accessible

- Otter 2021 (Heidelberg CrossAsia): automated access blocked
- The 1965 *Purāṇa* bulletin article: automated access blocked

### Known only through secondary scholarship

- Kṣemendra's Vetāla text (apart from two pages)
- The Newari version (apart from Jørgensen's introduction)
- Vallabhadāsa
- The Bhaviṣya Purāṇa version

### Disputed dates and attributions

- Uhle's edition: 1881 (title page) against 1884 (Penzer, and once in Emeneau §1). The origin of 1884 is unresolved.
- Kṣemendra's date: Emeneau's 1037 and 1050 are conditional (§4.A). The relative priority of Kṣemendra and Somadeva is not established.
- The roles in the 1805 Hindi text (Mazhar ʿAlī Khān with Lallū Lāl's aid, against Lallū Lāl as author or "creator")
- The Braj translator's name (Surat / Surat Kabishwar / Surati Misar)
- The presence of verse in Jambhaladatta (Penzer against Emeneau)

### Tale comparisons not yet verified

- Every K column entry in §7, apart from tale 10 and the KSS 17 story (checked by the reviewer on two page images)
- The J entries other than J 10 and J 25 (titles only)
- The Hindi entries against the Hindi original (apart from four passages of Barker's printed Hindi read on page images by AI readers)
- The connotation of the Hindi words *abhyās* (XV) and *kāmī* (XX) in their register, on which a specialist Hindi reading is recommended
- Ryder's reasons for omitting KSS 10 and 19 (the omissions themselves are now verified from his contents)
- The source of Uhle's 1881 summary of Jambhaladatta's ending ("oil-miller's son", "king's brother"), which disagrees with Emeneau's printed text (§5)
- The cemetery and penalty details for J and Ś in §5

### Questions needing manuscripts or specialist expertise

- The Nepali recension (W is "unusable"; others may exist)
- The relationship between Kṣemendra's verses and the Śivadāsa manuscripts, including the printed Ś conclusion (vv. 2–4, Uhle p. XIV)
- The date of the Newari version, and whether the 1675 Sanskrit–Newari manuscript is related to it
- The Sanskrit source of the Braj version
- Absolute dating of Somadeva and Śivadāsa

### Possible future improvement

**PROPOSED, not approved:** a project-wide bibliography (P-002) could absorb §17 if the user approves it.

---

## Independent Review Required

**This report was compiled by one AI research session.** D-020 requires that the author not approve their own work. The checklist below, ordered by the brief's priorities, is kept as the record of what the author originally asked a reviewer to check. Where an item's original wording has since been corrected, the correction is noted under the review status, and the body of the report holds the current text.

**Review status (2026-11-17).**

- **What has been reviewed.** A separate AI session has reviewed this report in [PR #3](https://github.com/HHrisHikesHH/Betall-Pacchisi/pull/3) (file `docs/research/SOURCE_TRADITIONS_REVIEW.md`; now merged into `main` with PR #3), in three passes:
  - **First pass** (on `94663c9`): R1–R14. Eleven were confirmed, and three were confirmed in part and corrected in part (R9, R10, R14). It proposed corrections C1–C13, which this report's author re-checked and applied at `ae61239`. Two were refined when re-checked: C5 (the warning is at 12.31.65–73, already promising the Vidyādhara power at 12.31.72) and C12.
  - **Second pass** (on `ae61239`, reviewer commit `02febde`): the applied C1–C13, R15–R24, and the judgements in §§9–14. Of C1–C13, **10 were verified and 3 partially verified** (C2, C6, C12): their applied text was correct, but a residual or new problem remained. The pass proposed further corrections **A1–A12**.
  - **Final confirmation** (on `ede52de`, reviewer commit `7318a33`, PR #3 §8): found the corrections C1–C13 and A1–A12 applied (it marked C12, C13, A6 and A10 "Applied, needs qualification" in PR #3 §8.2, and did not independently establish every underlying historical finding), the residuals in C2 and C6 resolved and C12 resolved for XV and XX, and found that the three editorial cleanups at `ede52de` do what they claim, apart from the date wording in the copyright text. It listed nine minor citation, consistency and wording issues, **R-1 to R-9** (numbered separately from checklist items R1–R24), none of which changes a verified finding. It judged the report accurate and qualified enough for the user to **begin discussing** Q-401 and Q-410, not to treat a decision as settled.
- **What the author has applied.** A1–A12 and the three residual issues were applied at `03c2d3f`, after the author re-checked the evidence where local copies allowed. R-1 to R-9 are applied in this revision (see [Revision history](#revision-history)); for R-2 the author re-read Barker pp. 182 and 359 on page images. The second pass also corrected two checklist items as originally worded: R2 gave the wrong note number for Emeneau p. 71 (an OCR misreading; it is **note 10**), and R15's "c. 1037" is only conditional in Emeneau (§4.A).
- **Review of the later fixes.** A subsequent independent review at `6a2e67a` checked the R-1 to R-9 fixes. The later polish at `1f21961` was separately reviewed, and the remaining issues it raised are corrected in this revision. These are citation, consistency and wording changes and change no finding.
- **What remains unverified.** Some claims could not be verified because the relevant editions were not available or because specialist language review was not. Not consulted: the 1805 Calcutta print, Forbes's Hindi text, any Braj text, the Durgaprasad–Parab print, Lévi, Uhle 1914, and Vidyasagara 1873. The BKM was checked on only two pages. The Hindi readings rest on one printed text (Barker 1855), read on page images by AI readers.
- **Not a specialist review.** All three passes of the independent review, and this report, were done by AI models. None is a human specialist review. A specialist reading of the Sanskrit and Hindi points that turn on language is **recommended**, not an approved requirement; whether the AI review satisfies D-020 is for the user to judge.
- **No decision.** No source tradition has been selected, and **Q-401 remains open**.

### Priority 1: claims that could affect the choice of tradition

| # | Claim | Where to check |
|---|---|---|
| R1 | KSS 12.32.24–27 states 24 question-tales plus a concluding 25th | GRETIL S02, and the Durgaprasad–Parab print |
| R2 | J 10 adds a brahman-ogre, the husband rejects the wife, and the answer is the husband | Emeneau 1934 pp. 66–73 and note 10 (p. 71) |
| R3 | The KSS 10 husband lives happily with her and the answer is the thief (12.17.60–67); Ś 9's husband embraces her and the answer is the thief | S02; Uhle 1881, tale IX |
| R4 | The 1805 introduction names Mazhar ʿAlī Khān "Wilā" as setting forth the text with Lallū Lāl's aid, Surat as the Braj translator, and Tāriṇī Charan Mitr as reviser | Barker 1855, "Introduction to the Calcutta edition of 1805"; ideally the 1805 print |
| R5 | The Hindi tale order follows Śivadāsa's closely | Compare Platts with Uhle |
| R6 | Ryder 1917 translates Somadeva, not Śivadāsa | Ryder, frame and tale 1, against KSS 12.8.21–23 and 12.8.59–60 |

### Priority 2: tale counts and numbering

| # | Claim | Where to check |
|---|---|---|
| R7 | The whole §7 concordance, especially the Ś and J columns | Uhle 1881 text; Emeneau 1934 contents and §4 table (from the print, not the OCR) |
| R8 | Emeneau's 27-tale hypothesis and the Bengali and Nepali omissions | Emeneau §§3–4 |
| R9 | The BKM contents list 25 Vetālakathās (pp. 287–384); the lambaka number | BKM 1901 print |
| R10 | The Hindi has two body-entering tales (XXII, XXIV) | Platts; the Hindi original |

### Priority 3: differences in answers and conclusions

| # | Claim | Where to check |
|---|---|---|
| R11 | KSS 16 reasoning (*bahujanmasiddham*) against the Hindi's caste reasoning | S02 12.23.205; Platts XV; the Hindi original |
| R12 | KSS 21 "most deluded" against the Hindi "greatest love" | S02 12.28.93–96; Platts XX; the Hindi original |
| R13 | The Hindi IX husband "evinced no affection" | The Hindi original |
| R14 | The frame endings in §5 | S02 12.32; Uhle pp. XXII–XXIII; Platts XXV; Emeneau §4 |

### Priority 4: dates and authorship

| # | Claim | Where to check |
|---|---|---|
| R15 | The BKM is dated c. 1037 (Lévi, via Emeneau) | Lévi, *JA* 1885–86 |
| R16 | Somadeva's patronage (Sūryavatī, Ananta, Kalaśa, Harṣa), and the absolute dates | KSS praśasti; *Rājataraṅgiṇī* |
| R17 | Jambhaladatta lived before the 16th century, and W's dating | Emeneau §§2–3 |
| R18 | The 1487 Śivadāsa manuscript | Uhle 1914 |

### Priority 5: relationships between traditions

| # | Claim | Where to check |
|---|---|---|
| R19 | Somadeva and Kṣemendra share a source (Uhle) and the same subject-matter (Emeneau) | Uhle pp. XII–XIII; Emeneau §1; Emeneau, *JAOS* 53 |
| R20 | The Newari's dependence on Jambhaladatta | Emeneau §4; Jørgensen 1921; Otter 2021 |
| R21 | Vallabhadāsa is a sub-recension of Śivadāsa | Emeneau §1 |

### Priority 6: bibliography and provenance

| # | Claim | Where to check |
|---|---|---|
| R22 | Every §17 entry, especially publishers not verified here | Library catalogues |
| R23 | The GRETIL licence terms | Current GRETIL headers |
| R24 | Copyright status of Emeneau 1934 and Penzer | Rights databases |

---

## 17. Bibliography

Entries give only details verified in this research. Each entry states whether a detail comes from a **title page** (and whether that was seen on a page image or only through OCR) or only from **catalogue metadata**. Details marked *unverified* must be confirmed before citation. "IA" means the Internet Archive (`https://archive.org/details/<identifier>`). Accessed 2026-11-16.

| ID | Entry |
|---|---|
| **S01** | Somadeva. *Kathāsaritsāgara*. GRETIL e-text, "based on the edition by Durgaprasad and Parab, Bombay: Nirnaya-Sagar Press 1915". Input by James Mallinson, Elena Artesani, Rabi Acharya, Nirajan Kafle, and Tyler Neill; TEI version 2020-07-31. Licence CC BY-NC-SA 4.0. `https://gretil.sub.uni-goettingen.de/gretil/corpustei/sa_somadeva-kathAsaritsAgara.xml` (plain text under `transformations/plaintext/`). |
| **S02** | Somadeva. *Kathāsaritsāgara, Vetālapañcaviṃśatikā* (= KSS 12.8.21–12.32.41). GRETIL e-text, input by Elena Artesani (supervisor Paolo Magnone), analytic version; TEI version 2020-07-31. Licence CC BY-NC-SA 4.0. `https://gretil.sub.uni-goettingen.de/gretil/corpustei/sa_somadeva-kathAsaritsAgaravetAlapaJcaviMzatikA.xml` |
| **S03** | Tawney, C. H. (trans.). *The Kathá sarit ságara; or, Ocean of the Streams of Story*, vol. 2. Calcutta: J. W. Thomas, at the Baptist Mission Press, 1884. *Evidence:* the vol. 2 title page (read through OCR) gives Calcutta, J. W. Thomas, the Baptist Mission Press and 1884. The Internet Archive catalogue gives "Calcutta: Thomas (pr.)", 1880–1884. The foreword to Penzer vol. 6 says the translation was printed in 1880 and 1884 at the Baptist Mission Press in Calcutta. Vol. 1 (1880) was not seen. IA: `kathsaritsga02somauoft`. Located; the text not read. |
| **S04** | Penzer, N. M. (ed.). *The Ocean of Story, being C. H. Tawney's Translation of Somadeva's Kathā Sarit Sāgara*, vol. 6. London: privately printed for subscribers only by Chas. J. Sawyer, 1926. *Evidence:* the Internet Archive catalogue gives "London, Priv. print. for subscribers only by C. J. Sawyer", 1924–28, for the series. The vol. 6 title page, read only through OCR, reads "Chas. J. Sawyer Ltd., Grafton House" and "MCMXXVI" (1926); this volume year has not been checked on a page image. Appendix, "The Twenty-five Tales of a Vetāla", pp. 225 ff. IA: `oceanofstorybein06somauoft`. |
| **S05** | Penzer, N. M. (ed.). *The Ocean of Story*, vol. 7. London: privately printed for subscribers only by Chas. J. Sawyer, 1927. *Evidence:* as for S04; the vol. 7 title page, read only through OCR, reads "MCMXXVII" (1927); not checked on a page image. Contents; appendix continued pp. 199 ff. IA: `oceanofstorybein07somauoft`. |
| **S06** | Uhle, Heinrich (ed.). *Die Vetālapañcaviṃçatikā in den Recensionen des Çivadāsa und eines Ungenannten, mit kritischem Commentar*. Abhandlungen für die Kunde des Morgenlandes, VIII. Band, No. 1. Leipzig: in Commission bei F. A. Brockhaus, 1881. *Evidence:* title page (confirmed by the reviewer on a page image): Leipzig, 1881, with F. A. Brockhaus as commission agent. Penzer and Emeneau §1 each also give "1884"; the origin of that date is unresolved (§4.C). IA: `in.ernet.dli.2015.56465`. |
| **S07** | Emeneau, M. B. (ed. and trans.). *Jambhaladatta's Version of the Vetālapañcavinśati: A Critical Sanskrit Text in Transliteration, with an Introduction and English Translation*. American Oriental Series 4. New Haven: American Oriental Society, 1934 (printed by Waverly Press, Baltimore). IA: `in.ernet.dli.2015.280386` (also `in.ernet.dli.2015.142236`). |
| **S08** | Kṣemendra. *The Bṛhatkathāmañjarī of Kshemendra*. Ed. Śivadatta and Kāśīnātha Pāṇḍuraṅga Parab. Kāvyamālā 69. 1901 (editors and series per Internet Archive catalogue metadata, which lists "Pandurang Parab, Kashinath" for 1901 and catalogues the 1931 edition under "Pandit, Sivadatta"; publisher *unverified*). IA: `in.ernet.dli.2015.486827`; also `india.history.resource.118328`. A 1931 second edition is at IA `in.ernet.dli.2015.312579`. |
| **S09** | Ryder, Arthur W. (trans.). *Twenty-two Goblins*. Illustrated by Perham W. Nahl. London and Toronto: J. M. Dent & Sons; New York: E. P. Dutton & Co., 1917. IA: `cu31924023163292`. |
| **S10** | Barker, W. Burckhardt (trans.), and E. B. Eastwick (ed.). *The Baitál Pachísí; or, Twenty-five Tales of a Demon: A New Edition of the Hindí Text …*. Hertford: Stephen Austin, 1855. *Evidence:* the place, Hertford, is on the title page (reviewer, OCR). The Internet Archive catalogue gives the publisher as "S. Austin". The title page, read by this report's author only through OCR, also reads "Printed and published by Stephen Austin"; that line has not been checked on a page image. The year (1855) is per Penzer and the catalogue; the title page's roman numeral is garbled in the OCR. Includes "Introduction to the Calcutta edition of 1805" (translated). IA: `baitlpachsortwe00eastgoog`. |
| **S11** | Platts, John (trans.). *The Baitál Pachchísí; or, The Twenty-five Tales of a Sprite. Translated from the Hindi Text of Dr. Duncan Forbes*. London: Wm. H. Allen & Co., 1871. IA: `baitalpachchisto00john`. |
| **S12** | Otter, Felix. *A Course in Reading Classical Newari: Selections from the Vetālapañcaviṃśati*. Heidelberg and Berlin: CrossAsia eBooks, 2021 (details from a review listing; *unverified*). NOT ACCESSIBLE. |
| **S13** | Jørgensen, Hans. "Ein Beitrag zur Kenntnis des Nevārī". *Zeitschrift der Deutschen Morgenländischen Gesellschaft* 75 (1921): 213–236. *Evidence:* volume and pages from the volume's contents (next article on p. 237), confirmed by the reviewer and by this report's author (OCR). Consulted: pp. 213–214 only. IA: `in.ernet.dli.2015.70809`. |
| **S14** | Anonymous (author not identified). Article on Kathā literature and the Purāṇas, *Purāṇa* bulletin, 1965, as indexed at `wisdomlib.org/hinduism/journal/purana-bulletin/d/doc1456702.html`. NOT ACCESSIBLE; known only through a search summary. |
| **S15** | Internet Archive record `bdrc-W23194`: *ro dnos grub can gyi sgrun: a manuscript collection of thirty-seven Tibetan vetala stories* (1975). Catalogue record only. |
| **S16** | Jibananda Vidyasagara (ed.). *Vetālapañcavinśatiḥ*. Calcutta, 1873 (per Emeneau). IA identifier beginning `nnna_vetala-pancha-vimsati-jivananda-vidyasagara-1873`. Located; not read. |
| **S17** | Francke, A. H. "Die Geschichten des toten No-rub-can. Eine tibetische Form der Vetālapañcaviṃśatikā aus Purig". *Zeitschrift der Deutschen Morgenländischen Gesellschaft* 75 (1921), from p. 72. *Evidence:* title and starting page from the volume's contents (OCR). **Research lead only: the article has not been read.** IA: `in.ernet.dli.2015.70809`. |

**Cited within the sources above but not consulted:** M. Winternitz, *Geschichte der indischen Litteratur*, vol. 3; S. Lévi, *Journal Asiatique* ser. 8, t. 6 (1885) and t. 7 (1886); M. B. Emeneau, "Kṣemendra as kavi", *JAOS* 53 (1933): 124–143; F. D. K. Bosch, *De Legende van Jīmūtavāhana in de Sanskritlitteratuur* (Leiden, 1914); J. Schick, in *Studia Indo-Iranica* (1931): 89–107; H. Oesterley, *Baitál Pachísí* (Leipzig, 1873); R. F. Burton, *Vikram and the Vampire* (London, 1870); H. Uhle, *BSGW* 66 (1914).
