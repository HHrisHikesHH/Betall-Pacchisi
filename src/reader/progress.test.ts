import { afterEach, describe, expect, it, vi } from 'vitest';
import { latestUnfinished, loadAllProgress, loadProgress, markFinished, resumePoint, saveProgress } from './progress';

afterEach(() => {
  vi.restoreAllMocks();
  window.localStorage.clear();
});

describe('reading progress', () => {
  it('has nothing by default and opens at the start', () => {
    expect(loadAllProgress()).toEqual({});
    expect(resumePoint('a', 5)).toEqual({ paragraph: 0, offset: 0 });
    expect(latestUnfinished(['a'])).toBeUndefined();
  });

  it('round-trips a place per story', () => {
    saveProgress('a', { paragraph: 2, offset: 40 }, 1000);
    saveProgress('b', { paragraph: 1, offset: 0 }, 2000);
    expect(loadProgress('a')).toEqual({
      paragraph: 2,
      offset: 40,
      updated: 1000,
      finished: false,
    });
    expect(resumePoint('a', 5)).toEqual({ paragraph: 2, offset: 40 });
    expect(resumePoint('a', 2)).toEqual({ paragraph: 0, offset: 0 }); // the text got shorter
  });

  it('drops malformed entries and non-objects', () => {
    window.localStorage.setItem(
      'betal-pachisi:progress',
      JSON.stringify({
        ok: { paragraph: 1, offset: 2, updated: 5, finished: true },
        bad: { paragraph: -1, offset: 'x' },
        worse: 7,
      }),
    );
    expect(Object.keys(loadAllProgress())).toEqual(['ok']);
    window.localStorage.setItem('betal-pachisi:progress', '[1,2]');
    expect(loadAllProgress()).toEqual({});
    window.localStorage.setItem('betal-pachisi:progress', 'oops');
    expect(loadAllProgress()).toEqual({});
  });

  it('marks a tale finished, restarts it, and un-finishes it once the reader goes back', () => {
    saveProgress('a', { paragraph: 3, offset: 10 }, 1);
    markFinished('a', 2);
    expect(loadProgress('a')?.finished).toBe(true);
    expect(resumePoint('a', 9)).toEqual({ paragraph: 0, offset: 0 });
    saveProgress('a', { paragraph: 3, offset: 12 }, 3); // a small scroll at the end
    expect(loadProgress('a')?.finished).toBe(true);
    saveProgress('a', { paragraph: 0, offset: 50 }, 4); // reading again from the start
    expect(loadProgress('a')?.finished).toBe(false);
  });

  it('picks the most recently read unfinished tale', () => {
    saveProgress('a', { paragraph: 1, offset: 0 }, 100);
    saveProgress('b', { paragraph: 1, offset: 0 }, 300);
    saveProgress('c', { paragraph: 1, offset: 0 }, 200);
    saveProgress('d', { paragraph: 0, offset: 0 }, 900); // never moved from the start
    expect(latestUnfinished(['a', 'b', 'c', 'd'])).toBe('b');
    markFinished('b', 400);
    expect(latestUnfinished(['a', 'b', 'c', 'd'])).toBe('c');
    expect(latestUnfinished(['a'])).toBe('a');
  });

  it('survives blocked storage', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(loadAllProgress()).toEqual({});
    expect(() => saveProgress('a', { paragraph: 1, offset: 1 })).not.toThrow();
    expect(() => markFinished('a')).not.toThrow();
    expect(resumePoint('a', 3)).toEqual({ paragraph: 0, offset: 0 });
  });
});
