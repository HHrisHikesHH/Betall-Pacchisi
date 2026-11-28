import { describe, expect, it } from 'vitest';
import { markProblem, parseMarks, runsOf } from './marks';
import { buildStories } from './stories';

describe('parseMarks', () => {
  it('leaves unmarked text alone', () => {
    expect(parseMarks('राजा चला।')).toEqual({ text: 'राजा चला।', marks: [] });
  });

  it('removes the marks and keeps ranges over the plain text', () => {
    const { text, marks } = parseMarks('एक {k|राजा} था। {b|"बोलो!"} उसने कहा।');
    expect(text).toBe('एक राजा था। "बोलो!" उसने कहा।');
    expect(marks.map((m) => [m.kind, text.slice(m.start, m.end)])).toEqual([
      ['k', 'राजा'],
      ['b', '"बोलो!"'],
    ]);
  });

  it('lets one mark span several sentences', () => {
    const { text, marks } = parseMarks('पहला। {t|दूसरा। तीसरा।} चौथा।');
    expect(text).toBe('पहला। दूसरा। तीसरा। चौथा।');
    expect(text.slice(marks[0].start, marks[0].end)).toBe('दूसरा। तीसरा।');
  });

  it.each([
    ['unknown kind', 'a {x|b} c'],
    ['unclosed', 'a {b|b c'],
    ['nested', 'a {b|b {k|c}} d'],
    ['stray close', 'a b} c'],
    ['no bar', 'a {b} c'],
    ['empty', 'a {b|} c'],
  ])('shows a malformed paragraph (%s) as written', (_name, raw) => {
    expect(markProblem(raw)).not.toBeNull();
    expect(parseMarks(raw)).toEqual({ text: raw, marks: [] });
  });

  it('treats a mark that crosses a blank line as malformed in both paragraphs', () => {
    const [story] = buildStories({
      'x.md': '---\norder: 1\nslug: x\ntitle: क\nsummary: ख\nstatus: draft\n---\nएक {t|दो\n\nतीन} चार\n',
    });
    expect(story.paragraphs).toEqual(['एक {t|दो', 'तीन} चार']);
    expect(story.marks).toEqual([[], []]);
  });
});

describe('runsOf', () => {
  const { text, marks } = parseMarks('अ {t|बब। कक।} दद');
  it('cuts a mark where a leaf cuts it, keeping every character', () => {
    const cut = text.indexOf(' कक');
    const first = runsOf(text.slice(0, cut), 0, marks);
    const second = runsOf(text.slice(cut), cut, marks);
    expect(first).toEqual([{ text: 'अ ' }, { text: 'बब।', kind: 't' }]);
    expect(second).toEqual([{ text: ' कक।', kind: 't' }, { text: ' दद' }]);
    expect([...first, ...second].map((r) => r.text).join('')).toBe(text);
  });
});
