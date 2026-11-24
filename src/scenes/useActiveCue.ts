import { useCallback, useEffect, useState } from 'react';
import type { SceneCue } from '../content/types';

/** True where IntersectionObserver exists; otherwise the reader shows each illustration inline instead. */
export function canObserve(): boolean {
  return typeof window !== 'undefined' && typeof window.IntersectionObserver !== 'undefined';
}

/**
 * The cue whose paragraph has most recently reached the reading line (45% down the screen).
 * IntersectionObserver only signals that something crossed the line; the answer is recomputed from positions,
 * so a fast scroll cannot leave the scene stale. The scene changes only at cue paragraphs.
 */
export function useActiveCue(cues: SceneCue[], elementFor: (index: number) => HTMLElement | null): SceneCue | null {
  const [activeIndex, setActiveIndex] = useState<number | null>(cues[0]?.index ?? null);

  const recompute = useCallback(() => {
    const line = window.innerHeight * 0.45;
    let found = cues[0]?.index ?? null;
    for (const cue of cues) {
      const el = elementFor(cue.index);
      if (el && el.getBoundingClientRect().top <= line) found = cue.index;
    }
    setActiveIndex(found);
  }, [cues, elementFor]);

  useEffect(() => {
    if (!canObserve() || cues.length === 0) return;
    const observer = new IntersectionObserver(recompute, {
      rootMargin: '0px 0px -55% 0px',
      threshold: [0, 1],
    });
    for (const cue of cues) {
      const el = elementFor(cue.index);
      if (el) observer.observe(el);
    }
    window.addEventListener('resize', recompute);
    recompute();
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', recompute);
    };
  }, [cues, elementFor, recompute]);

  return cues.find((c) => c.index === activeIndex) ?? null;
}
