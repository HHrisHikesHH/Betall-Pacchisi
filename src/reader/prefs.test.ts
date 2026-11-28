import { afterEach, describe, expect, it, vi } from 'vitest';
import { clampSize, DEFAULT_READING, FONTS, loadReading, normalizeReading, saveReading } from './prefs';

afterEach(() => {
  vi.restoreAllMocks();
  window.localStorage.clear();
});

describe('reading prefs', () => {
  it('loads defaults when nothing is stored', () => {
    expect(loadReading()).toEqual({
      size: 3,
      font: 'tiro',
      leading: 'normal',
      theme: 'paper',
    });
  });

  it('clamps and validates bad data', () => {
    expect(clampSize(0)).toBe(1);
    expect(clampSize(9)).toBe(5);
    expect(clampSize('4.4')).toBe(4);
    expect(clampSize('x')).toBe(3);
    expect(normalizeReading({ size: 99, font: 'comic', leading: 7, theme: 'night' })).toEqual({
      size: 5,
      font: 'tiro',
      leading: 'normal',
      theme: 'night',
    });
    expect(normalizeReading(null)).toEqual(DEFAULT_READING);
    window.localStorage.setItem('betal-pachisi:reading', '{not json');
    expect(loadReading()).toEqual(DEFAULT_READING);
  });

  it('offers four distinct faces and moves saved "noto" to tiro', () => {
    expect(FONTS).toEqual(['tiro', 'eczar', 'kalam', 'mukta']);
    expect(normalizeReading({ font: 'noto' }).font).toBe('tiro');
    window.localStorage.setItem('betal-pachisi:reading', JSON.stringify({ size: 4, font: 'noto', leading: 'airy', theme: 'night' }));
    expect(loadReading()).toEqual({ size: 4, font: 'tiro', leading: 'airy', theme: 'night' });
    expect(normalizeReading({ font: 'kalam' }).font).toBe('kalam');
  });

  it('round-trips a save', () => {
    const prefs = {
      size: 5,
      font: 'mukta',
      leading: 'airy',
      theme: 'night',
    } as const;
    saveReading(prefs);
    expect(loadReading()).toEqual(prefs);
  });

  it('survives blocked storage', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(loadReading()).toEqual(DEFAULT_READING);
    expect(() => saveReading(DEFAULT_READING)).not.toThrow();
  });
});
