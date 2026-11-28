import { useSearchParams } from 'react-router-dom';
import type { Mood } from '../scene/moods';

/** The surround of every screen. Its mood follows the story (D-026). */
export function Shell({ mood = 'neutral', children }: { mood?: Mood; children: React.ReactNode }) {
  const yatra = useSearchParams()[0].get('title') === 'yatra';
  return (
    <div className={yatra ? 'pothi pothi--yatra' : 'pothi'} data-mood={mood} lang="hi">
      {children}
    </div>
  );
}
