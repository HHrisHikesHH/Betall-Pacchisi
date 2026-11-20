export interface ParsedDocument {
  data: Record<string, string>;
  body: string;
}

/**
 * Parses a minimal front-matter block: `---`, then `key: value` lines, then `---`.
 * Values are plain strings (no YAML lists, quoting or nesting). The body is plain text, not Markdown.
 * Anything more
 * complex should get a real parser, not an extension of this one.
 */
export function parseFrontMatter(source: string): ParsedDocument {
  const text = source.replace(/^﻿/, '').replace(/\r\n?/g, '\n');
  const match = /^---[ \t]*\n(?:([\s\S]*?)\n)?---[ \t]*(?:\n|$)([\s\S]*)$/.exec(text);
  if (!match) {
    throw new Error('missing front matter: the file must start with a "---" block');
  }
  const [, header = '', body] = match;
  const data: Record<string, string> = Object.create(null);
  header.split('\n').forEach((line, index) => {
    if (line.trim() === '' || line.trimStart().startsWith('#')) return;
    const colon = line.indexOf(':');
    if (colon <= 0) {
      throw new Error(`front matter line ${index + 1} is not "key: value": ${line}`);
    }
    const key = line.slice(0, colon).trim();
    if (Object.hasOwn(data, key)) {
      throw new Error(`front matter key "${key}" appears twice`);
    }
    data[key] = line.slice(colon + 1).trim();
  });
  return { data, body };
}

/** Splits a body into paragraphs on blank lines; single newlines join into one paragraph. */
export function toParagraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((block) => block.replace(/\s*\n\s*/g, ' ').trim())
    .filter((block) => block.length > 0);
}
