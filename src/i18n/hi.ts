// Interface text for the Hindi edition. An English edition adds a sibling file with the same keys.
export const ui = {
  storyNumber: (n: number) => `कथा ${n.toLocaleString('hi-IN-u-nu-deva')}`,
  frameLabel: 'कथामुख',
  placeholderBadge: 'नमूना — कथा नहीं',
  draftBadge: 'मसौदा',
  emptyTitle: 'अभी कोई कथा उपलब्ध नहीं है',
  emptyBody: 'कथाएँ जोड़ी जाने पर वे यहाँ दिखेंगी।',
  loading: 'पृष्ठ खुल रहा है…',
  notFoundTitle: 'यह पृष्ठ नहीं मिला',
  storyNotFoundTitle: 'यह कथा नहीं मिली',
  notFoundBody: 'हो सकता है पता गलत हो, या यह कथा अब संग्रह में न हो।',
  backToCollection: 'सभी कथाओं पर लौटें',
  sound: 'ध्वनि चालू / बंद',
  soundVolume: 'आवाज़',
  soundVolumeLevels: ['धीमी', 'मध्यम', 'ऊँची'],
};

// Interface text for the pothi reader.
export const pothiUi = {
  open: 'पोथी खोलें',
  aiCredit: 'चित्र: AI से निर्मित',
  nextTale: (title: string) => `अगली कथा: ${title}`,
  readingRegion: 'पोथी का पाठ',
  previousLeaf: 'पिछला पन्ना',
  nextLeaf: 'अगला पन्ना',
  leafStatus: (leaf: string, total: string) => `पन्ना ${leaf}, कुल ${total}`,
  scrollShort: 'स्क्रोल',
  scrollLabel: 'स्क्रोल करके पढ़ें',
  pagesShort: 'पन्ने',
  pagesLabel: 'पन्ने पलटकर पढ़ें',
  enterFullscreen: 'पूरी स्क्रीन',
  leaveFullscreen: 'पूरी स्क्रीन से बाहर आएँ',
  close: 'पोथी बंद करें',
  rotateTitle: 'फ़ोन घुमाइए',
  rotateBody: 'फ़ोन आड़ा करने पर पोथी पूरी खुलती है।',
  readAnyway: 'ऐसे ही पढ़ें',
};
