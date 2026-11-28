import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { StatusBadge } from '../components/StatusBadge';
import { useDocumentTitle } from '../components/useDocumentTitle';
import type { Collection, Story } from '../content';
import { pothiUi, ui } from '../i18n/hi';
import { latestUnfinished, loadAllProgress, type Progress } from '../reader/progress';
import { scenes } from '../content';
import { imageFor } from '../scene/images';
import { readingMinutes } from './readingTime';
import { Shell } from '../pothi/Shell';
import { useArrivalFocus } from '../pothi/useArrivalFocus';

type TaleState = 'new' | 'progress' | 'done';

function stateOf(progress: Progress | undefined): TaleState {
  if (!progress) return 'new';
  if (progress.finished) return 'done';
  return progress.paragraph === 0 && progress.offset === 0 ? 'new' : 'progress';
}

const STATE_TEXT: Record<TaleState, string> = {
  new: ui.stateNew,
  progress: ui.stateInProgress,
  done: ui.stateFinished,
};

/** A quiet ornament for a tale with no picture yet: a small gold lotus between two rules. */
function Ornament() {
  return (
    <div className="pothi-card-art pothi-card-art--ornament" aria-hidden="true">
      <svg viewBox="0 0 120 24" focusable="false">
        <path d="M4 12h38M78 12h38" />
        <path d="M60 4c4 4 6 8 0 16-6-8-4-12 0-16zM60 20c-9 0-14-4-16-9 6 0 12 3 16 9zM60 20c9 0 14-4 16-9-6 0-12 3-16 9z" />
      </svg>
    </div>
  );
}

/** The contents leaf. */
export function CollectionPage({ collection, stories }: { collection: Collection; stories: Story[] }) {
  useDocumentTitle(collection.title);
  const heading = useArrivalFocus<HTMLHeadingElement>();
  const resume = useMemo(() => {
    const slug = latestUnfinished(stories.map((story) => story.slug));
    return stories.find((story) => story.slug === slug);
  }, [stories]);
  const progress = useMemo(() => loadAllProgress(), []);
  const untouched = useMemo(() => stories.every((story) => stateOf(progress[story.slug]) === 'new'), [stories, progress]);
  return (
    <Shell>
      <main className="pothi-page">
        <div className="pothi-contents">
          <h1 ref={heading} tabIndex={-1}>
            {collection.title}
          </h1>
          <p className="pothi-contents-intro">{collection.intro}</p>
          {resume && (
            <p className="pothi-resume">
              <Link to={`/kathaen/${resume.slug}`} className="pothi-open">
                <span className="pothi-resume-label">{ui.continueReading}</span>
                <span className="pothi-resume-title">{resume.title}</span>
              </Link>
            </p>
          )}
          {stories.length === 0 ? (
            <div role="status">
              <p>{ui.emptyTitle}</p>
              <p>{ui.emptyBody}</p>
            </div>
          ) : (
            <ol className="pothi-cards">
              {stories.map((story) => {
                const state = stateOf(progress[story.slug]);
                const firstScene = scenes[story.slug]?.[0];
                const src = firstScene && imageFor(firstScene.key);
                const frame = story.kind === 'frame';
                const start = frame && untouched;
                return (
                  <li key={story.slug} className={frame ? 'pothi-card-item pothi-card-item--frame' : 'pothi-card-item'}>
                    <Link to={`/kathaen/${story.slug}`} className="pothi-card" data-state={state}>
                      {src ? (
                        <div className="pothi-card-art">
                          <img src={src} alt="" loading="lazy" draggable={false} />
                        </div>
                      ) : (
                        <Ornament />
                      )}
                      <span className="pothi-card-body">
                        <span className="pothi-card-meta">
                          <span className="pothi-contents-number">
                            {story.number ? ui.storyNumber(story.number) : ui.frameLabel}
                          </span>
                          {start && <span className="pothi-card-start">{ui.startHere}</span>}
                          <span className="pothi-chip" data-state={state}>
                            {STATE_TEXT[state]}
                          </span>
                        </span>
                        <span className="pothi-contents-title">
                          {story.title} <StatusBadge status={story.status} />
                        </span>
                        <span className="pothi-contents-summary">{story.summary}</span>
                        <span className="pothi-card-time">{ui.readingTime(readingMinutes(story.paragraphs))}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          )}
          <p>
            <Link to="/" className="pothi-contents-close">
              {pothiUi.close}
            </Link>
          </p>
        </div>
      </main>
    </Shell>
  );
}
