import { useSearchParams } from 'react-router-dom';
import type { Mood } from '../scene/moods';
import { readingStyle, useReading } from '../reader/ReadingContext';

/** The surround of every screen. Its mood follows the story (D-026); its look follows the reader's settings. */
export function Shell({ mood = 'neutral', children }: { mood?: Mood; children: React.ReactNode }) {
  const yatra = useSearchParams()[0].get('title') === 'yatra';
  const { prefs, setRoot } = useReading();
  return (
    <div
      className={yatra ? 'pothi pothi--yatra' : 'pothi'}
      data-mood={mood}
      data-font={prefs.font}
      data-theme={prefs.theme === 'night' ? 'night' : undefined}
      style={readingStyle(prefs)}
      ref={setRoot}
      lang="hi"
    >
      {children}
    </div>
  );
}
