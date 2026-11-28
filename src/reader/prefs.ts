// The reader's comfort settings, kept on this device only. Every access is guarded: storage can be blocked or full.
const KEY = 'betal-pachisi:reading';

export type FontChoice = 'tiro' | 'noto' | 'mukta';
export type Leading = 'compact' | 'normal' | 'airy';
export type Theme = 'paper' | 'night';

export interface ReadingPrefs {
  /** 1 to 5 */
  size: number;
  font: FontChoice;
  leading: Leading;
  theme: Theme;
}

export const FONTS: readonly FontChoice[] = ['tiro', 'noto', 'mukta'];
export const LEADINGS: readonly Leading[] = ['compact', 'normal', 'airy'];
export const THEMES: readonly Theme[] = ['paper', 'night'];
export const MIN_SIZE = 1;
export const MAX_SIZE = 5;

/** What each step multiplies the body text by. Step 3, the default, is the base size (1). */
export const SCALES = [0.84, 0.92, 1, 1.18, 1.4] as const;
export const LEADING_VALUES: Record<Leading, number> = {
  compact: 1.55,
  normal: 1.72,
  airy: 1.95,
};
/** CSS font stacks for body text. Titles keep their own face. */
export const FONT_STACKS: Record<FontChoice, string> = {
  tiro: "'Tiro Devanagari Hindi', 'Noto Serif Devanagari', serif",
  noto: "'Noto Serif Devanagari', 'Tiro Devanagari Hindi', serif",
  mukta: "'Mukta', 'Noto Serif Devanagari', sans-serif",
};
/** The family name to load for each choice. */
export const FONT_FAMILIES: Record<FontChoice, string> = {
  tiro: 'Tiro Devanagari Hindi',
  noto: 'Noto Serif Devanagari',
  mukta: 'Mukta',
};

export const DEFAULT_READING: ReadingPrefs = {
  size: 3,
  font: 'tiro',
  leading: 'normal',
  theme: 'paper',
};

export function clampSize(value: unknown): number {
  const n = Math.round(Number(value));
  return Number.isFinite(n) ? Math.min(MAX_SIZE, Math.max(MIN_SIZE, n)) : DEFAULT_READING.size;
}

function oneOf<T extends string>(allowed: readonly T[], value: unknown, fallback: T): T {
  return allowed.includes(value as T) ? (value as T) : fallback;
}

/** Turns anything (stored data, a patch) into valid settings. */
export function normalizeReading(data: unknown): ReadingPrefs {
  const d = (data && typeof data === 'object' ? data : {}) as Partial<Record<keyof ReadingPrefs, unknown>>;
  return {
    size: d.size === undefined || d.size === null ? DEFAULT_READING.size : clampSize(d.size),
    font: oneOf(FONTS, d.font, DEFAULT_READING.font),
    leading: oneOf(LEADINGS, d.leading, DEFAULT_READING.leading),
    theme: oneOf(THEMES, d.theme, DEFAULT_READING.theme),
  };
}

export function loadReading(): ReadingPrefs {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? normalizeReading(JSON.parse(raw)) : DEFAULT_READING;
  } catch {
    return DEFAULT_READING;
  }
}

export function saveReading(prefs: ReadingPrefs): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(prefs));
  } catch {
    /* private mode or full storage: the choice just is not remembered */
  }
}
