import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '@fontsource/tiro-devanagari-hindi/400.css';
import '@fontsource/rozha-one/400.css';
import '@fontsource/yatra-one/400.css';
import './pothi.css';
import { useDocumentTitle } from '../components/useDocumentTitle';
import { findStory, type Collection, type Story } from '../content';
import { pothiUi, ui } from '../i18n/hi';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Cover } from './Cover';
import { matches, useFonts, useFullscreen, useMedia } from './hooks';
import { Icon } from './Icons';
import { canFullscreen, enterFullscreen, leaveFullscreen } from './immersive';
import { PagedLeaves } from './PagedLeaves';
import { START, type Position } from './paginate';
import { ScrollText, useScrollPosition } from './ScrollText';
import { painting, Sheet, type Tale } from './Sheet';

/** The prototype shows the opening of one existing draft (read through the content loader, never copied). */
export const SAMPLE_SLUG = 'kamal-ke-teen-ishare';
export const SAMPLE_PARAGRAPHS = 8;

const SMALL_TOUCH = '(pointer: coarse) and (max-width: 600px), (pointer: coarse) and (max-height: 600px)';

export default function PothiPage({ collection, stories }: { collection: Collection; stories: Story[] }) {
  const story = findStory(stories, SAMPLE_SLUG);
  if (!story) return <NotFoundPage title={ui.storyNotFoundTitle} />;
  return <Pothi collection={collection} story={story} />;
}

type View = 'closed' | 'opening' | 'open';

function Pothi({ collection, story }: { collection: Collection; story: Story }) {
  useDocumentTitle(collection.title);
  const [params] = useSearchParams();
  const titleFace = params.get('title') === 'yatra' ? 'Yatra One' : 'Rozha One';
  const tale: Tale = useMemo(
    () => ({
      title: story.title,
      paragraphs: story.paragraphs.slice(0, SAMPLE_PARAGRAPHS),
      label: story.status === 'approved' ? undefined : story.status === 'draft' ? ui.draftBadge : ui.placeholderBadge,
    }),
    [story],
  );
  const fonts = useFonts([
    ['400 16px "Tiro Devanagari Hindi"', `${tale.paragraphs.join(' ')} ${tale.label ?? ''}`],
    [`400 32px "${titleFace}"`, `${collection.title} ${tale.title}`],
  ]);

  const [view, setView] = useState<View>('closed');
  const [position, setPosition] = useState<Position>(START);
  const openButton = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  const portrait = useMedia('(orientation: portrait)');
  const narrow = useMedia('(max-width: 600px)');
  const [stayUpright, setStayUpright] = useState(false);
  const invite = portrait && narrow && !stayUpright;

  useEffect(() => {
    new Image().src = painting;
    return () => void leaveFullscreen();
  }, []);

  // Closing the pothi hands focus back to the button that opens it.
  useEffect(() => {
    if (view === 'open') wasOpen.current = true;
    if (view === 'closed' && wasOpen.current) openButton.current?.focus();
  }, [view]);

  const open = () => {
    if (canFullscreen() && matches(SMALL_TOUCH)) void enterFullscreen(true);
    setView(matches('(prefers-reduced-motion: reduce)') ? 'open' : 'opening');
  };
  const opened = useCallback(() => setView('open'), []);
  useEffect(() => {
    if (view !== 'opening') return;
    const timer = window.setTimeout(opened, 1500);
    return () => window.clearTimeout(timer);
  }, [view, opened]);

  const close = () => {
    void leaveFullscreen();
    setView('closed');
  };

  return (
    <div className={titleFace === 'Yatra One' ? 'pothi pothi--yatra' : 'pothi'} lang="hi">
      {view !== 'closed' &&
        (invite ? (
          <Invitation ready={view === 'open'} onStay={() => setStayUpright(true)} onClose={close} />
        ) : (
          <Reader
            collectionTitle={collection.title}
            tale={tale}
            fonts={fonts}
            portrait={portrait}
            ready={view === 'open'}
            position={position}
            onPosition={setPosition}
            onClose={close}
          />
        ))}
      {view !== 'open' && (
        <Cover
          title={collection.title}
          subtitle={collection.subtitle}
          opening={view === 'opening'}
          onOpen={open}
          onOpened={opened}
          buttonRef={openButton}
        />
      )}
    </div>
  );
}

/** Moves focus into a view once it is the one on show. */
function useArrivalFocus<T extends HTMLElement>(ready: boolean) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (ready) ref.current?.focus({ preventScroll: true });
  }, [ready, ref]);
  return ref;
}

function Invitation({ ready, onStay, onClose }: { ready: boolean; onStay: () => void; onClose: () => void }) {
  const heading = useArrivalFocus<HTMLHeadingElement>(ready);
  return (
    <main className="pothi-invite">
      <svg className="pothi-phone" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
        <g className="pothi-phone-body">
          <rect x="39" y="18" width="42" height="84" rx="8" />
          <path d="M53 94h14" />
        </g>
        <path d="M96 30a46 46 0 0 1 12 32M101 57l7 7 6-8" />
      </svg>
      <h1 ref={heading} tabIndex={-1}>
        {pothiUi.rotateTitle}
      </h1>
      <p>{pothiUi.rotateBody}</p>
      <button type="button" className="pothi-open" onClick={onStay}>
        {pothiUi.readAnyway}
      </button>
      <button type="button" className="pothi-quiet" onClick={onClose}>
        {pothiUi.close}
      </button>
    </main>
  );
}

interface ReaderProps {
  collectionTitle: string;
  tale: Tale;
  fonts: number;
  portrait: boolean;
  ready: boolean;
  position: Position;
  onPosition: (position: Position) => void;
  onClose: () => void;
}

function Reader(props: ReaderProps) {
  const { tale, fonts, portrait, position, onPosition } = props;
  const main = useArrivalFocus<HTMLElement>(props.ready && !portrait);
  const [choice, setChoice] = useState<'pages' | 'scroll'>('pages');
  const [cannotFit, setCannotFit] = useState(false);
  const onCannotFit = useCallback(() => setCannotFit(true), []);
  const scrolling = choice === 'scroll' || cannotFit;
  const fullscreen = useFullscreen();

  // A new size deserves a new attempt at leaves.
  useEffect(() => {
    const retry = () => setCannotFit(false);
    window.addEventListener('resize', retry);
    return () => window.removeEventListener('resize', retry);
  }, []);

  const closeButton = (
    <button type="button" className="pothi-button" aria-label={pothiUi.close} title={pothiUi.close} onClick={props.onClose}>
      <Icon name="close" />
    </button>
  );
  const fullscreenLabel = fullscreen ? pothiUi.leaveFullscreen : pothiUi.enterFullscreen;
  const fullscreenButton = canFullscreen() && (
    <button
      type="button"
      className="pothi-button"
      aria-label={fullscreenLabel}
      title={fullscreenLabel}
      onClick={() => void (fullscreen ? leaveFullscreen() : enterFullscreen(!portrait && matches(SMALL_TOUCH)))}
    >
      <Icon name={fullscreen ? 'shrink' : 'expand'} />
    </button>
  );

  if (portrait) return <Upright {...props} closeButton={closeButton} fullscreenButton={fullscreenButton} />;

  const tools = (
    <div className="pothi-settings">
      {closeButton}
      {fullscreenButton}
      {!cannotFit && (
        <button
          type="button"
          className="pothi-button pothi-button--word"
          aria-label={scrolling ? pothiUi.pagesLabel : pothiUi.scrollLabel}
          onClick={() => setChoice(scrolling ? 'pages' : 'scroll')}
        >
          {scrolling ? pothiUi.pagesShort : pothiUi.scrollShort}
        </button>
      )}
    </div>
  );

  return (
    <main className="pothi-reader pothi-reader--landscape" ref={main} tabIndex={-1} aria-label={pothiUi.readingRegion}>
      <h1 className="pothi-hidden">{props.collectionTitle}</h1>
      {scrolling ? (
        <ScrollLeaf tale={tale} fonts={fonts} position={position} onPosition={onPosition} tools={tools} />
      ) : (
        <PagedLeaves
          tale={tale}
          fonts={fonts}
          position={position}
          onPosition={onPosition}
          onCannotFit={onCannotFit}
          tools={tools}
        />
      )}
    </main>
  );
}

/** Landscape scrolling: the painting stays, and the text moves on its calm side. */
function ScrollLeaf({
  tale,
  fonts,
  position,
  onPosition,
  tools,
}: Pick<ReaderProps, 'tale' | 'fonts' | 'position' | 'onPosition'> & { tools: React.ReactNode }) {
  const scroller = useRef<HTMLDivElement>(null);
  useScrollPosition(scroller, fonts, position, onPosition);
  return (
    <div className="pothi-leafwrap">
      <div className="pothi-leaf pothi-leaf--scroll">
        <Sheet tale={tale}>
          <div className="pothi-scroller" ref={scroller} tabIndex={0} role="region" aria-label={tale.title}>
            <ScrollText tale={tale} />
          </div>
        </Sheet>
      </div>
      <div className="pothi-tools">{tools}</div>
    </div>
  );
}

/** An upright screen: the figures above, the words below on the same aged paper. */
function Upright({
  collectionTitle,
  tale,
  fonts,
  position,
  onPosition,
  ready,
  closeButton,
  fullscreenButton,
}: ReaderProps & { closeButton: React.ReactNode; fullscreenButton: React.ReactNode }) {
  // The page itself is what scrolls, so focusing it lets the arrow keys move the text.
  const scroller = useArrivalFocus<HTMLElement>(ready);
  useScrollPosition(scroller, fonts, position, onPosition);
  return (
    <main className="pothi-reader pothi-upright" ref={scroller} tabIndex={-1} aria-label={pothiUi.readingRegion}>
      <div className="pothi-column">
        <header className="pothi-bar">
          {closeButton}
          <h1>{collectionTitle}</h1>
          {tale.label && <p className="pothi-seal">{tale.label}</p>}
          {fullscreenButton}
        </header>
        <figure className="pothi-crop">
          <img src={painting} alt={pothiUi.paintingAlt} />
          <figcaption>{pothiUi.aiCredit}</figcaption>
        </figure>
        <ScrollText tale={tale} />
      </div>
    </main>
  );
}
