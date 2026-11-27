import { useEffect, useRef } from 'react';

/** Moves focus into a view once it is on show. */
export function useArrivalFocus<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
  }, []);
  return ref;
}
