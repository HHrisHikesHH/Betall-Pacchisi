// Splitting a tale into leaves. Pure: the caller says whether a candidate leaf fits (the reader measures the DOM).

/** A slice `[start, end)` of one paragraph. Slices keep their trailing spaces, so nothing is ever lost. */
export interface Piece {
  paragraph: number;
  start: number;
  end: number;
  text: string;
}

export type Leaf = Piece[];

/** Where the reader is: a character in a paragraph. It survives repagination, unlike a page number. */
export interface Position {
  paragraph: number;
  offset: number;
}

export const START: Position = { paragraph: 0, offset: 0 };

export interface Span {
  start: number;
  end: number;
}

// A sentence ends at a danda, double danda, ? or !, with any closing quotes or brackets, followed by space or the end.
const SENTENCE_END = /[।॥?!]+["'”’»)\]]*(?:\s+|$)/g;

export function splitSentences(text: string): Span[] {
  const spans: Span[] = [];
  let start = 0;
  for (const match of text.matchAll(SENTENCE_END)) {
    const end = match.index + match[0].length;
    spans.push({ start, end });
    start = end;
  }
  if (start < text.length) spans.push({ start, end: text.length });
  return spans;
}

function splitWords(text: string, { start, end }: Span): Span[] {
  return Array.from(text.slice(start, end).matchAll(/\s*\S+\s*/g), (match) => ({
    start: start + match.index,
    end: start + match.index + match[0].length,
  }));
}

/**
 * Fills leaves greedily, breaking at sentence ends, and between words only when one sentence is larger than a
 * whole leaf. A paragraph listed in `breaks` always starts a new leaf (a new scene gets a new picture).
 * Returns null when even a single word does not fit on an empty leaf (the reader then scrolls).
 */
export function paginate(
  paragraphs: string[],
  fits: (leaf: Leaf, leafIndex: number) => boolean,
  breaks: ReadonlySet<number> = new Set(),
): Leaf[] | null {
  const leaves: Leaf[] = [];
  let leaf: Leaf = [];

  const tryAdd = (paragraph: number, { start, end }: Span) => {
    const last = leaf[leaf.length - 1];
    const joins = last !== undefined && last.paragraph === paragraph && last.end === start;
    const from = joins ? last.start : start;
    const piece = { paragraph, start: from, end, text: paragraphs[paragraph].slice(from, end) };
    const candidate = [...(joins ? leaf.slice(0, -1) : leaf), piece];
    if (!fits(candidate, leaves.length)) return false;
    leaf = candidate;
    return true;
  };
  const turn = () => {
    leaves.push(leaf);
    leaf = [];
  };

  for (let paragraph = 0; paragraph < paragraphs.length; paragraph++) {
    const text = paragraphs[paragraph];
    if (breaks.has(paragraph) && leaf.length > 0) turn();
    for (const sentence of splitSentences(text)) {
      if (tryAdd(paragraph, sentence)) continue;
      if (leaf.length > 0) {
        turn();
        if (tryAdd(paragraph, sentence)) continue;
      }
      for (const word of splitWords(text, sentence)) {
        if (tryAdd(paragraph, word)) continue;
        if (leaf.length === 0) return null;
        turn();
        if (!tryAdd(paragraph, word)) return null;
      }
    }
  }
  if (leaf.length > 0) turn();
  return leaves;
}

/** The index of the leaf that holds `position`. */
export function leafOf(leaves: Leaf[], { paragraph, offset }: Position): number {
  let found = 0;
  for (let index = 0; index < leaves.length; index++) {
    const first = leaves[index][0];
    if (first.paragraph > paragraph || (first.paragraph === paragraph && first.start > offset)) break;
    found = index;
  }
  return found;
}
