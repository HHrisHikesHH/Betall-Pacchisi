// Inline highlight marks in story text: {b|...} Betal's voice, {k|...} key name, {t|...} turning sentence.
// Everything else in the app works on the PLAIN text; marks are style ranges over it.

export const MARK_KINDS = ['b', 'k', 't'] as const;
export type MarkKind = (typeof MARK_KINDS)[number];

/** A styled range `[start, end)` over a paragraph's plain text. */
export interface MarkRange {
  start: number;
  end: number;
  kind: MarkKind;
}

export interface ParsedParagraph {
  text: string;
  marks: MarkRange[];
}

/** Returns the first problem with the marks in one paragraph, or null when they are well formed. */
export function markProblem(raw: string): string | null {
  const open = /\{([^|{}]*)\|/y;
  let i = 0;
  while (i < raw.length) {
    const ch = raw[i];
    if (ch === '}') return `stray "}" at ${i}`;
    if (ch !== '{') {
      i++;
      continue;
    }
    open.lastIndex = i;
    const head = open.exec(raw);
    if (!head) return `"{" at ${i} is not followed by a kind and "|"`;
    if (!(MARK_KINDS as readonly string[]).includes(head[1])) return `unknown mark kind "${head[1]}" at ${i}`;
    const from = i + head[0].length;
    let j = from;
    while (j < raw.length && raw[j] !== '}' && raw[j] !== '{') j++;
    if (j >= raw.length) return `mark at ${i} is never closed in this paragraph`;
    if (raw[j] === '{') return `mark at ${i} contains another "{" (marks cannot nest)`;
    if (j === from) return `mark at ${i} is empty`;
    i = j + 1;
  }
  return null;
}

/** Splits a paragraph into plain text and style ranges. A malformed paragraph is kept as written, without marks. */
export function parseMarks(raw: string): ParsedParagraph {
  if (!raw.includes('{') && !raw.includes('}')) return { text: raw, marks: [] };
  const problem = markProblem(raw);
  if (problem) {
    if (import.meta.env?.DEV) console.warn(`Malformed highlight mark (${problem}); showing the raw text: ${raw.slice(0, 60)}`);
    return { text: raw, marks: [] };
  }
  let text = '';
  const marks: MarkRange[] = [];
  const pattern = /\{([^|{}]*)\|([^{}]*)\}/g;
  let last = 0;
  for (const match of raw.matchAll(pattern)) {
    text += raw.slice(last, match.index);
    marks.push({ start: text.length, end: text.length + match[2].length, kind: match[1] as MarkKind });
    text += match[2];
    last = match.index + match[0].length;
  }
  text += raw.slice(last);
  return { text, marks };
}

export interface Run {
  text: string;
  kind?: MarkKind;
}

/** The runs of `text`, which sits at `from` in its paragraph, split where the paragraph's marks begin and end. */
export function runsOf(text: string, from: number, marks: readonly MarkRange[] = []): Run[] {
  const to = from + text.length;
  const runs: Run[] = [];
  let at = from;
  for (const mark of marks) {
    const start = Math.max(mark.start, from);
    const end = Math.min(mark.end, to);
    if (start >= end) continue;
    if (start > at) runs.push({ text: text.slice(at - from, start - from) });
    runs.push({ text: text.slice(start - from, end - from), kind: mark.kind });
    at = end;
  }
  if (at < to) runs.push({ text: text.slice(at - from) });
  return runs;
}
