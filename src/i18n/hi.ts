// Interface text for the Hindi edition. An English edition adds a sibling file with the same keys.
export const ui = {
  allStories: 'सभी कथाएँ',
  storiesHeading: 'कथाएँ',
  previous: 'पिछली',
  next: 'अगली',
  storyNumber: (n: number) => `कथा ${n.toLocaleString('hi-IN-u-nu-deva')}`,
  placeholderBadge: 'नमूना — कथा नहीं',
  placeholderBanner: 'नमूना पाठ — यह संग्रह की कोई कथा नहीं है। यह पृष्ठ केवल पठन अनुभव परखने के लिए है।',
  draftBadge: 'मसौदा',
  emptyTitle: 'अभी कोई कथा उपलब्ध नहीं है',
  emptyBody: 'कथाएँ जोड़ी जाने पर वे यहाँ दिखेंगी।',
  loading: 'पृष्ठ खुल रहा है…',
  notFoundTitle: 'यह पृष्ठ नहीं मिला',
  storyNotFoundTitle: 'यह कथा नहीं मिली',
  notFoundBody: 'हो सकता है पता गलत हो, या यह कथा अब संग्रह में न हो।',
  backToCollection: 'सभी कथाओं पर लौटें',
  storyNavigation: 'कथाओं के बीच जाएँ',
};
