import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import {
  DEFAULT_READING,
  FONT_STACKS,
  LEADING_VALUES,
  SCALES,
  loadReading,
  normalizeReading,
  saveReading,
  type ReadingPrefs,
} from './prefs';

interface Reading {
  prefs: ReadingPrefs;
  update: (patch: Partial<ReadingPrefs>) => void;
  /** The reader's root element: panels render into it so they inherit its settings. */
  root: HTMLElement | null;
  setRoot: (element: HTMLElement | null) => void;
}

const Context = createContext<Reading>({
  prefs: DEFAULT_READING,
  update: () => {},
  root: null,
  setRoot: () => {},
});

/** Reading settings shared by every reader view. */
export function ReadingProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState(loadReading);
  const latest = useRef(prefs);
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const update = useCallback((patch: Partial<ReadingPrefs>) => {
    const next = normalizeReading({ ...latest.current, ...patch });
    latest.current = next;
    saveReading(next);
    setPrefs(next);
  }, []);
  const value = useMemo(() => ({ prefs, update, root, setRoot }), [prefs, update, root]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useReading(): Reading {
  return useContext(Context);
}

/** The settings as CSS custom properties. */
export function readingStyle(prefs: ReadingPrefs): CSSProperties {
  return {
    '--read-scale': SCALES[prefs.size - 1],
    '--read-leading': LEADING_VALUES[prefs.leading],
    '--read-face': FONT_STACKS[prefs.font],
  } as CSSProperties;
}
