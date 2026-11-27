import { describe, expect, it } from 'vitest';
import { stories } from '.';
import { buildStories, findNeighbours, findStory } from './stories';

const file = (fields: Record<string, string | number>, body = 'पाठ') =>
  `---\n${Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')}\n---\n${body}\n`;

const valid = { order: 1, slug: 'one', title: 'एक', summary: 'सार', status: 'placeholder' };

describe('buildStories', () => {
  it('sorts by order regardless of file name', () => {
    const result = buildStories({
      'b.md': file({ ...valid, order: 2, slug: 'two' }),
      'a.md': file({ ...valid, order: 10, slug: 'ten' }),
      'c.md': file(valid),
    });
    expect(result.map((s) => s.slug)).toEqual(['one', 'two', 'ten']);
  });

  it.each([
    [{ ...valid, title: '' }, /missing required field "title"/],
    [{ ...valid, order: 'first' }, /"order" must be a positive whole number/],
    [{ ...valid, order: '1e1' }, /"order" must be a positive whole number/],
    [{ ...valid, slug: 'Bad Slug' }, /"slug" must be lowercase/],
    [{ ...valid, status: 'final' }, /"status" must be one of/],
  ])('names the file and the problem for invalid fields', (fields, message) => {
    expect(() => buildStories({ 'content/x.md': file(fields) })).toThrow(message);
    expect(() => buildStories({ 'content/x.md': file(fields) })).toThrow(/content\/x\.md/);
  });

  it('accepts approved only with approved_on and approved_commit (D-083)', () => {
    const approved = { ...valid, status: 'approved' };
    expect(() => buildStories({ 'x.md': file(approved) })).toThrow(/approved_on/);
    expect(() => buildStories({ 'x.md': file({ ...approved, approved_on: '2026-11-27' }) })).toThrow(/approved_commit/);
    expect(() => buildStories({ 'x.md': file({ ...approved, approved_on: '27-11-2026', approved_commit: 'abc1234' }) })).toThrow(/approved_on/);
    expect(buildStories({ 'x.md': file({ ...approved, approved_on: '2026-11-27', approved_commit: '58d0060' }) })[0].status).toBe('approved');
  });

  it('rejects a story with no text', () => {
    expect(() => buildStories({ 'x.md': file(valid, '') })).toThrow(/no text/);
  });

  it('rejects duplicate slugs and orders', () => {
    expect(() => buildStories({ 'a.md': file(valid), 'b.md': file({ ...valid, order: 2 }) })).toThrow(/a\.md and b\.md both use the slug "one"/);
    expect(() => buildStories({ 'a.md': file(valid), 'b.md': file({ ...valid, slug: 'b' }) })).toThrow(/order 1/);
  });
});

describe('neighbours and lookup', () => {
  const list = buildStories({
    'a.md': file(valid),
    'b.md': file({ ...valid, order: 2, slug: 'two' }),
    'c.md': file({ ...valid, order: 3, slug: 'three' }),
  });

  it('finds the previous and next story', () => {
    expect(findNeighbours(list, 'one')).toEqual({ previous: undefined, next: list[1] });
    expect(findNeighbours(list, 'two')).toEqual({ previous: list[0], next: list[2] });
    expect(findNeighbours(list, 'three')).toEqual({ previous: list[1], next: undefined });
    expect(findNeighbours(list, 'missing')).toEqual({});
  });

  it('returns undefined for an unknown slug', () => {
    expect(findStory(list, 'two')?.order).toBe(2);
    expect(findStory(list, 'missing')).toBeUndefined();
  });
});

describe('the real content in /content/stories/hi', () => {
  it('loads and validates every story file', () => {
    expect(stories.length).toBeGreaterThan(0);
    stories.forEach((story) => expect(story.paragraphs.length).toBeGreaterThan(0));
  });

  it('uses only known statuses; approved ones passed the D-083 checks on load', () => {
    expect(stories.every((story) => ['placeholder', 'draft', 'approved'].includes(story.status))).toBe(true);
  });
});
