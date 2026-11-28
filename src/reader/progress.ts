// Where the reader left each tale, kept on this device only. Every access is guarded.
const KEY = 'betal-pachisi:progress';

export interface Progress {
  paragraph: number;
  offset: number;
  /** milliseconds since 1970 */
  updated: number;
  finished: boolean;
}

export type ProgressMap = Record<string, Progress>;

function valid(data: unknown): Progress | null {
  if (!data || typeof data !== 'object') return null;
  const d = data as Record<string, unknown>;
  const paragraph = Number(d.paragraph);
  const offset = Number(d.offset);
  const updated = Number(d.updated);
  if (!Number.isInteger(paragraph) || paragraph < 0 || !Number.isInteger(offset) || offset < 0) return null;
  return {
    paragraph,
    offset,
    updated: Number.isFinite(updated) ? updated : 0,
    finished: d.finished === true,
  };
}

export function loadAllProgress(): ProgressMap {
  try {
    const raw = window.localStorage.getItem(KEY);
    const data = raw ? (JSON.parse(raw) as unknown) : null;
    if (!data || typeof data !== 'object' || Array.isArray(data)) return {};
    const map: ProgressMap = {};
    for (const [slug, entry] of Object.entries(data)) {
      const progress = valid(entry);
      if (progress) map[slug] = progress;
    }
    return map;
  } catch {
    return {};
  }
}

function write(map: ProgressMap): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(map));
  } catch {
    /* private mode or full storage: the place just is not remembered */
  }
}

export function loadProgress(slug: string): Progress | undefined {
  return loadAllProgress()[slug];
}

const after = (a: { paragraph: number; offset: number }, b: { paragraph: number; offset: number }) =>
  a.paragraph > b.paragraph || (a.paragraph === b.paragraph && a.offset >= b.offset);

/** Remembers the place. A finished tale stays finished until the reader goes back before where it ended. */
export function saveProgress(slug: string, position: { paragraph: number; offset: number }, now = Date.now()): void {
  const map = loadAllProgress();
  const old = map[slug];
  const finished = old?.finished === true && after(position, old);
  map[slug] = {
    paragraph: position.paragraph,
    offset: position.offset,
    updated: now,
    finished,
  };
  write(map);
}

/** The tale's end was shown. The place is kept as it is. */
export function markFinished(slug: string, now = Date.now()): void {
  const map = loadAllProgress();
  const old = map[slug];
  map[slug] = {
    paragraph: old?.paragraph ?? 0,
    offset: old?.offset ?? 0,
    updated: now,
    finished: true,
  };
  write(map);
}

/** Where a tale opens: the saved place, or the start if there is none, the tale was finished or the text has changed. */
export function resumePoint(slug: string, paragraphs: number): { paragraph: number; offset: number } {
  const saved = loadProgress(slug);
  if (!saved || saved.finished || saved.paragraph >= paragraphs) return { paragraph: 0, offset: 0 };
  return { paragraph: saved.paragraph, offset: saved.offset };
}

/** The slug of the most recently read tale that is not finished and has been started, among `slugs`. */
export function latestUnfinished(slugs: readonly string[]): string | undefined {
  const map = loadAllProgress();
  let best: { slug: string; updated: number } | undefined;
  for (const slug of slugs) {
    const p = map[slug];
    if (!p || p.finished || (p.paragraph === 0 && p.offset === 0)) continue;
    if (!best || p.updated > best.updated) best = { slug, updated: p.updated };
  }
  return best?.slug;
}
