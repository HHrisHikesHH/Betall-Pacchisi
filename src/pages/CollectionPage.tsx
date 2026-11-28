import { Link } from 'react-router-dom';
import { StatusBadge } from '../components/StatusBadge';
import { useDocumentTitle } from '../components/useDocumentTitle';
import type { Collection, Story } from '../content';
import { pothiUi, ui } from '../i18n/hi';
import { Shell } from '../pothi/Shell';
import { useArrivalFocus } from '../pothi/useArrivalFocus';

/** The contents leaf. */
export function CollectionPage({ collection, stories }: { collection: Collection; stories: Story[] }) {
  useDocumentTitle(collection.title);
  const heading = useArrivalFocus<HTMLHeadingElement>();
  return (
    <Shell>
      <main className="pothi-page">
        <div className="pothi-contents">
          <h1 ref={heading} tabIndex={-1}>
            {collection.title}
          </h1>
          <p className="pothi-contents-intro">{collection.intro}</p>
          {stories.length === 0 ? (
            <div role="status">
              <p>{ui.emptyTitle}</p>
              <p>{ui.emptyBody}</p>
            </div>
          ) : (
            <ol>
              {stories.map((story) => (
                <li key={story.slug}>
                  <Link to={`/kathaen/${story.slug}`}>
                    <span className="pothi-contents-number">{story.number ? ui.storyNumber(story.number) : ui.frameLabel}</span>
                    <span className="pothi-contents-title">
                      {story.title} <StatusBadge status={story.status} />
                    </span>
                    <span className="pothi-contents-summary">{story.summary}</span>
                  </Link>
                </li>
              ))}
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
