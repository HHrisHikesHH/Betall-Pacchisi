// Review mode shows each scene's image prompt and sound cues where they happen. `?review=1` turns it on for
// this browser tab, `?review=0` turns it off. Readers never see prompts otherwise.
import { useSearchParams } from 'react-router-dom';

const KEY = 'betal-pachisi:review';

export function useReview(): boolean {
  const asked = useSearchParams()[0].get('review');
  try {
    if (asked === '1') window.sessionStorage.setItem(KEY, '1');
    else if (asked === '0') window.sessionStorage.removeItem(KEY);
    return window.sessionStorage.getItem(KEY) === '1';
  } catch {
    return asked === '1';
  }
}
