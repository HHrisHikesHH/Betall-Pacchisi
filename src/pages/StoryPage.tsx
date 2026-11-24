import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findNeighbours, findStory, scenes as defaultScenes, type SceneCue, type Story } from '../content';
import { StatusBadge } from '../components/StatusBadge';
import { useDocumentTitle } from '../components/useDocumentTitle';
import { ui } from '../i18n/hi';
import { ArtView } from '../scenes/ArtView';
import { NEUTRAL_SCENE, SceneContext, type SceneState } from '../scenes/SceneContext';
import { SceneFigure } from '../scenes/SceneFigure';
import { canObserve, useActiveCue } from '../scenes/useActiveCue';
import { NotFoundPage } from './NotFoundPage';

interface StoryPageProps {
  stories: Story[];
  collectionTitle: string;
  scenes?: Record<string, SceneCue[]>;
}

export default function StoryPage({ stories, collectionTitle, scenes = defaultScenes }: StoryPageProps) {
  const { slug = '' } = useParams();
  const story = findStory(stories, slug);

  useEffect(() => {
    window.scrollTo?.(0, 0);
  }, [slug]);

  if (!story) return <NotFoundPage title={ui.storyNotFoundTitle} />;
  return (
    <StoryReader
      key={story.slug}
      story={story}
      stories={stories}
      collectionTitle={collectionTitle}
      cues={scenes[story.slug]}
    />
  );
}

const NO_CUES: SceneCue[] = [];

function StoryReader({
  story,
  stories,
  collectionTitle,
  cues = NO_CUES,
}: {
  story: Story;
  stories: Story[];
  collectionTitle: string;
  cues?: SceneCue[];
}) {
  useDocumentTitle(`${story.title} · ${collectionTitle}`);
  const { previous, next } = findNeighbours(stories, story.slug);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Each story mounts afresh (keyed by slug), so moving to another story puts keyboard
  // and screen-reader focus on its title instead of leaving it on the navigation link.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  // Scenes (D-023, D-026): the story's cue file decides what is shown; the reader only follows it.
  const observed = useMemo(() => canObserve(), []);
  const paragraphEls = useRef(new Map<number, HTMLElement>());
  const elementFor = useCallback((index: number) => paragraphEls.current.get(index) ?? null, []);
  const [artVisible, setArtVisible] = useState(true);
  const activeCue = useActiveCue(observed ? cues : NO_CUES, elementFor);
  const cueAt = useMemo(() => new Map(cues.map((cue) => [cue.index, cue])), [cues]);
  const scene: SceneState = useMemo(
    () =>
      activeCue
        ? {
            cueIndex: activeCue.index,
            art: activeCue.art,
            mood: activeCue.mood,
          }
        : NEUTRAL_SCENE,
    [activeCue],
  );

  useEffect(() => {
    const root = document.documentElement;
    if (scene.mood === 'neutral') delete root.dataset.mood;
    else root.dataset.mood = scene.mood;
    return () => {
      delete root.dataset.mood;
    };
  }, [scene.mood]);

  const hasArt = cues.some((cue) => cue.art);

  return (
    <SceneContext.Provider value={scene}>
      <article className="story">
        <header className="story-header">
          <p className="story-number">{ui.storyNumber(story.order)}</p>
          <h1 className="story-title" ref={headingRef} tabIndex={-1}>
            {story.title} <StatusBadge status={story.status} />
          </h1>
        </header>

        {story.status === 'placeholder' && (
          <p className="placeholder-banner" role="note">
            {ui.placeholderBanner}
          </p>
        )}

        {story.status === 'draft' && (
          <p className="placeholder-banner draft-banner" role="note">
            {ui.draftBanner}
          </p>
        )}

        {hasArt && (
          <button
            type="button"
            className="scene-toggle"
            aria-pressed={artVisible}
            onClick={() => setArtVisible((visible) => !visible)}
          >
            {artVisible ? ui.illustrationOff : ui.illustrationOn}
          </button>
        )}

        <div className="story-body">
          {observed && artVisible && <SceneFigure art={activeCue?.art ?? null} alt={activeCue?.alt ?? ''} />}
          {story.paragraphs.map((paragraph, index) => {
            const cue = cueAt.get(index);
            return (
              <Fragment key={index}>
                {!observed && artVisible && cue?.art && (
                  <figure className="scene-inline" role="img" aria-label={cue.alt}>
                    <ArtView art={cue.art} />
                  </figure>
                )}
                <p
                  ref={
                    cue
                      ? (el) => {
                          if (el) paragraphEls.current.set(index, el);
                          else paragraphEls.current.delete(index);
                        }
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              </Fragment>
            );
          })}
        </div>

        <nav className="story-nav" aria-label={ui.storyNavigation}>
          {previous ? (
            <Link to={`/kathaen/${previous.slug}`} className="story-nav-link story-nav-link--previous" rel="prev">
              <span className="story-nav-label">← {ui.previous}</span>
              <span className="story-nav-title">{previous.title}</span>
            </Link>
          ) : (
            <span className="story-nav-spacer" />
          )}
          {next ? (
            <Link to={`/kathaen/${next.slug}`} className="story-nav-link story-nav-link--next" rel="next">
              <span className="story-nav-label">{ui.next} →</span>
              <span className="story-nav-title">{next.title}</span>
            </Link>
          ) : (
            <span className="story-nav-spacer" />
          )}
        </nav>
        <p className="story-back">
          <Link to="/">{ui.backToCollection}</Link>
        </p>
      </article>
    </SceneContext.Provider>
  );
}
