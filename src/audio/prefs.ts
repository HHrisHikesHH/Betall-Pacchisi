// The reader's sound choice, kept on this device only. Every access is guarded: storage can be blocked or full.
const KEY = 'betal-pachisi:sound';

export interface SoundPrefs {
  on: boolean;
  /** 1 to 3 */
  volume: number;
}

export const DEFAULT_PREFS: SoundPrefs = { on: false, volume: 2 };

export function clampVolume(value: unknown): number {
  const n = Math.round(Number(value));
  return Number.isFinite(n) ? Math.min(3, Math.max(1, n)) : DEFAULT_PREFS.volume;
}

export function loadPrefs(): SoundPrefs {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULT_PREFS;
    const data = JSON.parse(raw) as Partial<SoundPrefs>;
    return { on: data.on === true, volume: clampVolume(data.volume ?? DEFAULT_PREFS.volume) };
  } catch {
    return DEFAULT_PREFS;
  }
}

export function savePrefs(prefs: SoundPrefs): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(prefs));
  } catch {
    /* private mode or full storage: the choice just is not remembered */
  }
}
