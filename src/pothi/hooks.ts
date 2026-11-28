import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';

export function matches(query: string): boolean {
  return window.matchMedia?.(query).matches ?? false;
}

export function useMedia(query: string): boolean {
  const subscribe = useCallback(
    (changed: () => void) => {
      const list = window.matchMedia?.(query);
      list?.addEventListener('change', changed);
      return () => list?.removeEventListener('change', changed);
    },
    [query],
  );
  return useSyncExternalStore(subscribe, () => matches(query));
}

export function useFullscreen(): boolean {
  return useSyncExternalStore(
    (changed) => {
      document.addEventListener('fullscreenchange', changed);
      return () => document.removeEventListener('fullscreenchange', changed);
    },
    () => Boolean(document.fullscreenElement),
  );
}

/**
 * Counts up each time the web fonts settle. 0 means "not yet": text must not be measured before then,
 * or leaves would be cut for a fallback font. A change of `refresh` or of the requests counts up again once the new fonts are in. A slow or failed download stops blocking after three seconds.
 */
export function useFonts(requests: ReadonlyArray<readonly [font: string, text: string]>, refresh = ''): number {
  const [version, setVersion] = useState(0);
  // `refresh` names a change that needs a new settle (the reader's text settings) even if no font is new.
  const key = JSON.stringify([requests, refresh]);
  useEffect(() => {
    const fonts = document.fonts;
    let live = true;
    const settle = () => {
      if (live) setVersion((v) => v + 1);
    };
    if (!fonts) {
      settle();
      return;
    }
    const timer = window.setTimeout(settle, 3000);
    const wanted = (JSON.parse(key) as [[string, string][], string])[0];
    Promise.all(wanted.map(([font, text]) => fonts.load(font, text)))
      .then(() => fonts.ready)
      .catch(() => undefined)
      .then(() => {
        window.clearTimeout(timer);
        settle();
      });
    fonts.addEventListener?.('loadingdone', settle);
    return () => {
      live = false;
      window.clearTimeout(timer);
      fonts.removeEventListener?.('loadingdone', settle);
    };
  }, [key]);
  return version;
}
