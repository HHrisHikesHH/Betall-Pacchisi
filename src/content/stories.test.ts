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

  it('labels every story as placeholder until real tales are approved', () => {
    // When the first real tale lands, change this to a check that matches the workflow status.
    expect(stories.every((story) => story.status === 'placeholder')).toBe(true);
  });
});
