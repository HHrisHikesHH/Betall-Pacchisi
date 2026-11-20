import { describe, expect, it } from 'vitest';
import { parseFrontMatter, toParagraphs } from './frontmatter';

describe('parseFrontMatter', () => {
  it('reads key: value pairs and the body', () => {
    const { data, body } = parseFrontMatter('---\ntitle: कथा: एक\norder: 2\n---\nपाठ\n');
    expect(data).toEqual({ title: 'कथा: एक', order: '2' });
    expect(body).toBe('पाठ\n');
  });

  it('accepts Windows line endings and a byte-order mark', () => {
    const { data } = parseFrontMatter('﻿---\r\nslug: a\r\n---\r\nbody');
    expect(data.slug).toBe('a');
  });

  it('tolerates trailing spaces on the fences and an empty header', () => {
    expect(parseFrontMatter('--- \nslug: a\n---  \nbody').data.slug).toBe('a');
    expect(parseFrontMatter('---\n---\nbody')).toEqual({ data: {}, body: 'body' });
  });

  it('accepts keys that are also Object.prototype names', () => {
    expect(parseFrontMatter('---\nconstructor: x\n---\n').data.constructor).toBe('x');
  });

  it('rejects a file without front matter', () => {
    expect(() => parseFrontMatter('just text')).toThrow(/missing front matter/);
  });

  it('rejects malformed lines and duplicate keys', () => {
    expect(() => parseFrontMatter('---\nno colon here\n---\n')).toThrow(/not "key: value"/);
    expect(() => parseFrontMatter('---\na: 1\na: 2\n---\n')).toThrow(/appears twice/);
  });
});

describe('toParagraphs', () => {
  it('splits on blank lines and joins wrapped lines', () => {
    expect(toParagraphs('एक\nपंक्ति\n\n\nदो\n   \nतीन\n')).toEqual(['एक पंक्ति', 'दो', 'तीन']);
  });

  it('returns nothing for an empty body', () => {
    expect(toParagraphs('\n  \n')).toEqual([]);
  });
});
