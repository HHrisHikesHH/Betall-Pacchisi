// Reading-time estimate for the contents cards.
export const WORDS_PER_MINUTE = 180;

/** Plain word count: `{x|...}` highlight marks are reduced to their text first. */
export function wordCount(paragraphs: readonly string[]): number {
  const plain = paragraphs.join(' ').replace(/\{[^|{}]*\|([^{}]*)\}/g, '$1');
  const found = plain.trim().split(/\s+/).filter(Boolean);
  return found.length;
}

/** Whole minutes, at least one. */
export function readingMinutes(paragraphs: readonly string[]): number {
  return Math.max(1, Math.round(wordCount(paragraphs) / WORDS_PER_MINUTE));
}
