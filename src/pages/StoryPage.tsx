import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findNeighbours, findStory, type Story } from '../content';
import { StatusBadge } from '../components/StatusBadge';
import { useDocumentTitle } from '../components/useDocumentTitle';
import { ui } from '../i18n/hi';
import { NotFoundPage } from './NotFoundPage';

export default function StoryPage({ stories, collectionTitle }: { stories: Story[]; collectionTitle: string }) {
  const { slug = '' } = useParams();
  const story = findStory(stories, slug);

  useEffect(() => {
    window.scrollTo?.(0, 0);
  }, [slug]);

  if (!story) return <NotFoundPage title={ui.storyNotFoundTitle} />;
  return <StoryReader key={story.slug} story={story} stories={stories} collectionTitle={collectionTitle} />;
}

function StoryReader({ story, stories, collectionTitle }: { story: Story; stories: Story[]; collectionTitle: string }) {
  useDocumentTitle(`${story.title} · ${collectionTitle}`);
  const { previous, next } = findNeighbours(stories, story.slug);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Each story mounts afresh (keyed by slug), so moving to another story puts keyboard
  // and screen-reader focus on its title instead of leaving it on the navigation link.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
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

      <div className="story-body">
        {story.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
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
  );
}
