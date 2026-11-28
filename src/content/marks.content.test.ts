import { describe, expect, it } from 'vitest';
import { parseFrontMatter, toParagraphs } from './frontmatter';
import { markProblem } from './marks';

const files = import.meta.glob<string>('/content/stories/hi/*.md', { query: '?raw', import: 'default', eager: true });

describe('highlight marks in content/stories/hi', () => {
  it('finds the story files', () => {
    expect(Object.keys(files).length).toBeGreaterThan(0);
  });
  it.each(Object.entries(files))('%s: every mark is well formed', (path, source) => {
    const problems = toParagraphs(parseFrontMatter(source).body).flatMap((paragraph, i) => {
      const problem = markProblem(paragraph);
      return problem ? [`paragraph ${i + 1}: ${problem}`] : [];
    });
    expect(problems, path).toEqual([]);
  });
});
