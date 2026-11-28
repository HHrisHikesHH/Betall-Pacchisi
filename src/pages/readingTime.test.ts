import { describe, expect, it } from 'vitest';
import { readingMinutes, wordCount } from './readingTime';

const words = (n: number) => Array.from({ length: n }, () => 'शब्द').join(' ');

describe('reading time', () => {
  it('counts words and reduces {x|...} marks to their text', () => {
    expect(wordCount(['एक दो', 'तीन {x|चार पाँच}'])).toBe(5);
    expect(wordCount([''])).toBe(0);
  });
  it('rounds at 180 words a minute, never below one', () => {
    expect(readingMinutes([words(2160)])).toBe(12);
    expect(readingMinutes([words(2100)])).toBe(12);
    expect(readingMinutes([words(5)])).toBe(1);
  });
});
