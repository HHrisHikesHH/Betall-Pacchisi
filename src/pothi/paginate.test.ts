import { describe, expect, it } from 'vitest';
import { stories } from '../content';
import { leafOf, paginate, splitSentences, START, type Leaf } from './paginate';

const sample = stories.find((story) => story.slug === 'kamal-ke-teen-ishare')!.paragraphs.slice(0, 8);
const upTo = (characters: number) => (leaf: Leaf) => leaf.reduce((sum, piece) => sum + piece.text.length, 0) <= characters;

/** Puts the pieces back together, checking that they run in order with no gap and no overlap. */
function rejoin(leaves: Leaf[], paragraphs: string[]) {
  const text = paragraphs.map(() => '');
  let paragraph = 0;
  for (const piece of leaves.flat()) {
    expect(piece.paragraph).toBeGreaterThanOrEqual(paragraph);
    paragraph = piece.paragraph;
    expect(piece.start).toBe(text[paragraph].length);
    expect(piece.text).toBe(paragraphs[paragraph].slice(piece.start, piece.end));
    text[paragraph] += piece.text;
  }
  return text;
}

describe('splitSentences', () => {
  it('breaks after dandas, question and exclamation marks, keeping closing quotes with the sentence', () => {
    const text = 'वह आया। "कहाँ?" उसने कहा, "रुको!" फिर चुप॥ बस';
    expect(splitSentences(text).map(({ start, end }) => text.slice(start, end))).toEqual([
      'वह आया। ',
      '"कहाँ?" ',
      'उसने कहा, "रुको!" ',
      'फिर चुप॥ ',
      'बस',
    ]);
  });
});

describe('paginate', () => {
  it.each([20, 40, 150, 400, 5000])('loses and repeats nothing with leaves of %i characters', (size) => {
    const fits = upTo(size);
    const leaves = paginate(sample, fits)!;
    expect(rejoin(leaves, sample)).toEqual(sample);
    expect(leaves.every((leaf) => leaf.length > 0 && fits(leaf))).toBe(true);
    expect(leaves.length > 1).toBe(size < 5000);
  });

  it('breaks at sentence ends while every sentence fits a leaf', () => {
    const longest = Math.max(...sample.flatMap((text) => splitSentences(text).map(({ start, end }) => end - start)));
    const ends = new Set(sample.flatMap((text, p) => splitSentences(text).map(({ end }) => `${p}:${end}`)));
    for (const leaf of paginate(sample, upTo(longest))!) {
      const last = leaf[leaf.length - 1];
      expect(ends).toContain(`${last.paragraph}:${last.end}`);
    }
  });

  it('breaks between words only for a sentence larger than a leaf', () => {
    const text = ['एक दो तीन चार पाँच छह सात आठ।'];
    const leaves = paginate(text, upTo(10))!;
    expect(rejoin(leaves, text)).toEqual(text);
    expect(leaves.flat().every((piece) => piece.end === text[0].length || piece.text.endsWith(' '))).toBe(true);
  });

  it('tells the fit test which leaf it is filling, so the first can hold a title', () => {
    const leaves = paginate(['क। ख। ग। घ।'], (leaf, index) => upTo(index === 0 ? 3 : 100)(leaf))!;
    expect(leaves.map((leaf) => leaf.map((piece) => piece.text).join(''))).toEqual(['क। ', 'ख। ग। घ।']);
  });

  it('gives up when a single word cannot fit on an empty leaf', () => {
    expect(paginate(['अनिर्वचनीय।'], upTo(3))).toBeNull();
  });
});

describe('leafOf', () => {
  it('finds the same words again after the leaves are cut differently', () => {
    const small = paginate(sample, upTo(90))!;
    const large = paginate(sample, upTo(500))!;
    expect(leafOf(small, START)).toBe(0);
    for (const leaf of small) {
      const position = { paragraph: leaf[0].paragraph, offset: leaf[0].start };
      expect(leafOf(small, position)).toBe(small.indexOf(leaf));
      const found = large[leafOf(large, position)];
      expect(
        found.some((p) => p.paragraph === position.paragraph && p.start <= position.offset && position.offset < p.end),
      ).toBe(true);
    }
  });
});
