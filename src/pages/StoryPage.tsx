import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SoundControl } from '../audio/SoundControl';
import { useDocumentTitle } from '../components/useDocumentTitle';
import { findNeighbours, findStory, sceneAt, scenes as defaultScenes, type Scene, type Story } from '../content';
import { pothiUi, ui } from '../i18n/hi';
import { matches, useFonts, useFullscreen, useMedia } from '../pothi/hooks';
import { Icon } from '../pothi/Icons';
import { canFullscreen, enterFullscreen, leaveFullscreen } from '../pothi/immersive';
import { Invitation } from '../pothi/Invitation';
import { PagedLeaves } from '../pothi/PagedLeaves';
import { START, type Position } from '../pothi/paginate';
import { ScrollText, useScrollPosition } from '../pothi/ScrollText';
import { Sheet, type Tale } from '../pothi/Sheet';
import { Shell } from '../pothi/Shell';
import { useArrivalFocus } from '../pothi/useArrivalFocus';
import { SceneContext, type SceneState } from '../scene/SceneContext';
import { useReview } from '../scene/review';
import { SMALL_TOUCH } from './HomePage';
import { NotFoundPage } from './NotFoundPage';

interface StoryPageProps {
  stories: Story[];
  collectionTitle: string;
  scenes?: Record<string, Scene[]>;
}

const NO_SCENES: Scene[] = [];
const UPRIGHT = 'betal-pachisi:upright';

function choseUpright(): boolean {
  try {
    return window.sessionStorage.getItem(UPRIGHT) === '1';
  } catch {
    return false;
  }
}

export default function StoryPage({ stories, collectionTitle, scenes = defaultScenes }: StoryPageProps) {
  const { slug = '' } = useParams();
  const story = findStory(stories, slug);
  if (!story) return <NotFoundPage title={ui.storyNotFoundTitle} />;
  return (
    <Reader
      key={story.slug}
      story={story}
      next={findNeighbours(stories, story.slug).next}
      collectionTitle={collectionTitle}
      scenes={scenes[story.slug] ?? NO_SCENES}
    />
  );
}

interface ReaderProps {
  story: Story;
  next?: Story;
  collectionTitle: string;
  scenes: Scene[];
}

function Reader({ story, next, collectionTitle, scenes }: ReaderProps) {
  useDocumentTitle(`${story.title} · ${collectionTitle}`);
  const navigate = useNavigate();
  const review = useReview();
  const tale: Tale = useMemo(
    () => ({
      title: story.title,
      paragraphs: story.paragraphs,
      scenes,
      review,
      next: next
        ? { to: `/kathaen/${next.slug}`, label: pothiUi.nextTale(next.title) }
        : { to: '/kathaen', label: ui.backToCollection },
      label: story.status === 'approved' ? undefined : story.status === 'draft' ? ui.draftBadge : ui.placeholderBadge,
    }),
    [story, next, scenes, review],
  );
  const fonts = useFonts([
    ['400 16px "Tiro Devanagari Hindi"', `${tale.paragraphs.join(' ')} ${tale.label ?? ''} ${tale.next.label}`],
    ['400 32px "Rozha One"', tale.title],
  ]);

  const [position, setPosition] = useState<Position>(START);
  // The paragraph on show: its scene sets the mood of the room and its sound.
  const [shown, setShown] = useState(0);
  const mood = sceneAt(scenes, shown)?.mood ?? 'neutral';
  const silent = sceneAt(scenes, shown)?.ambience === 'silence';
  const sound: SceneState = useMemo(() => ({ mood, ...(silent ? { sound: 'silence' as const } : {}) }), [mood, silent]);

  const portrait = useMedia('(orientation: portrait)');
  const narrow = useMedia('(max-width: 600px)');
  const [stayUpright, setStayUpright] = useState(choseUpright);
  const close = () => {
    void leaveFullscreen();
    navigate('/kathaen');
  };
  const stay = () => {
    try {
      window.sessionStorage.setItem(UPRIGHT, '1');
    } catch {
      /* the choice just is not remembered */
    }
    setStayUpright(true);
  };

  return (
    <Shell mood={mood}>
      <SceneContext.Provider value={sound}>
        {portrait && narrow && !stayUpright ? (
          <Invitation onStay={stay} onClose={close} />
        ) : (
          <Leaves
            collectionTitle={collectionTitle}
            tale={tale}
            fonts={fonts}
            portrait={portrait}
            position={position}
            onPosition={setPosition}
            onShow={setShown}
            onClose={close}
          />
        )}
        {/* one control for every view, so turning the phone does not stop the sound */}
        {!(portrait && narrow && !stayUpright) && <SoundControl />}
      </SceneContext.Provider>
    </Shell>
  );
}

interface LeavesProps {
  collectionTitle: string;
  tale: Tale;
  fonts: number;
  portrait: boolean;
  position: Position;
  onPosition: (position: Position) => void;
  onShow: (paragraph: number) => void;
  onClose: () => void;
}

function Leaves(props: LeavesProps) {
  const { tale, fonts, portrait, position, onPosition, onShow } = props;
  const main = useArrivalFocus<HTMLElement>();
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
        <ScrollLeaf tale={tale} fonts={fonts} position={position} onPosition={onPosition} onShow={onShow} tools={tools} />
      ) : (
        <PagedLeaves
          tale={tale}
          fonts={fonts}
          position={position}
          onPosition={onPosition}
          onCannotFit={onCannotFit}
          onShow={onShow}
          tools={tools}
        />
      )}
    </main>
  );
}

/** Landscape scrolling: the picture stays until the next scene reaches the top, and the text moves beside it. */
function ScrollLeaf({
  tale,
  fonts,
  position,
  onPosition,
  onShow,
  tools,
}: Pick<LeavesProps, 'tale' | 'fonts' | 'position' | 'onPosition' | 'onShow'> & { tools: ReactNode }) {
  const scroller = useRef<HTMLDivElement>(null);
  useScrollPosition(scroller, fonts, position, onPosition);
  useEffect(() => onShow(position.paragraph), [position.paragraph, onShow]);
  return (
    <div className="pothi-leafwrap">
      <div className="pothi-leaf pothi-leaf--scroll">
        <Sheet tale={tale} paragraph={position.paragraph}>
          <div className="pothi-scroller" ref={scroller} tabIndex={0} role="region" aria-label={tale.title}>
            <ScrollText tale={tale} />
          </div>
        </Sheet>
      </div>
      <div className="pothi-tools">{tools}</div>
    </div>
  );
}

/** An upright screen: each scene's picture sits where the scene begins, on the same aged paper. */
function Upright({
  collectionTitle,
  tale,
  fonts,
  position,
  onPosition,
  onShow,
  closeButton,
  fullscreenButton,
}: LeavesProps & { closeButton: ReactNode; fullscreenButton: ReactNode }) {
  // The page itself is what scrolls, so focusing it lets the arrow keys move the text.
  const scroller = useArrivalFocus<HTMLElement>();
  useScrollPosition(scroller, fonts, position, onPosition);
  useEffect(() => onShow(position.paragraph), [position.paragraph, onShow]);
  return (
    <main className="pothi-reader pothi-upright" ref={scroller} tabIndex={-1} aria-label={pothiUi.readingRegion}>
      <div className="pothi-column">
        <header className="pothi-bar">
          {closeButton}
          <h1>{collectionTitle}</h1>
          {tale.label && <p className="pothi-seal">{tale.label}</p>}
          {fullscreenButton}
        </header>
        <ScrollText tale={tale} pictures />
      </div>
    </main>
  );
}
