import { Link } from 'react-router-dom';
import type { Collection, Story } from '../content';
import { StatusBadge } from '../components/StatusBadge';
import { useDocumentTitle } from '../components/useDocumentTitle';
import { ui } from '../i18n/hi';

export function CollectionPage({ collection, stories }: { collection: Collection; stories: Story[] }) {
  useDocumentTitle(collection.title);
  return (
    <div className="collection">
      <section className="collection-intro">
        <h1>{collection.title}</h1>
        <p className="collection-subtitle">{collection.subtitle}</p>
        <p className="collection-note">{collection.intro}</p>
      </section>

      <section aria-labelledby="stories-heading">
        <h2 id="stories-heading" className="section-heading">
          {ui.storiesHeading}
        </h2>
        {stories.length === 0 ? (
          <div className="state-message" role="status">
            <p className="state-title">{ui.emptyTitle}</p>
            <p>{ui.emptyBody}</p>
          </div>
        ) : (
          <ol className="story-list">
            {stories.map((story) => (
              <li key={story.slug}>
                <Link to={`/kathaen/${story.slug}`} className="story-card">
                  <span className="story-card-number">{story.number ? ui.storyNumber(story.number) : ui.frameLabel}</span>
                  <span className="story-card-title">
                    {story.title} <StatusBadge status={story.status} />
                  </span>
                  <span className="story-card-summary">{story.summary}</span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  );
}
