import { Fragment, createContext, useContext, useEffect, useRef, type Ref } from 'react';
import { Link } from 'react-router-dom';
import { sceneAt, type Scene } from '../content';
import { SceneArt } from '../scene/SceneArt';
import type { Leaf } from './paginate';
import type { MarkRange } from '../content/marks';
import { aroundDandas, runsOf } from './text';

export interface Tale {
  title: string;
  paragraphs: string[];
  /** Highlight ranges over each paragraph's plain text. */
  marks: MarkRange[][];
  scenes: Scene[];
  /** Show prompts and sound cues. */
  review: boolean;
  /** Where the end of the tale leads. */
  next: { to: string; label: string };
  /** The status label shown on every leaf; absent only for approved text. */
  label?: string;
}

/** Plain text `text`, found at `from` in its paragraph, with the paragraph's highlight marks and dandas picked out. */
export function Words({ text, from = 0, marks }: { text: string; from?: number; marks?: readonly MarkRange[] }) {
  const dandas = (run: string) =>
    aroundDandas(run).map((part, index) =>
      index % 2 ? (
        <span key={index} className="pothi-danda">
          {part}
        </span>
      ) : (
        part
      ),
    );
  return runsOf(text, from, marks).map((run, index) =>
    run.kind ? (
      <span key={index} className={`pothi-mark--${run.kind}`}>
        {dandas(run.text)}
      </span>
    ) : (
      <Fragment key={index}>{dandas(run.text)}</Fragment>
    ),
  );
}

/** One painted leaf: the scene's picture, its labels, and whatever text is written on its calm side. */
export function Sheet({
  tale,
  paragraph,
  children,
  decorative = false,
  textRef,
}: {
  tale: Tale;
  /** The paragraph whose scene this leaf shows. */
  paragraph: number;
  children?: React.ReactNode;
  /** A leaf in mid-turn repeats another's picture and words, so assistive technology skips it. */
  decorative?: boolean;
  textRef?: Ref<HTMLDivElement>;
}) {
  const scene = sceneAt(tale.scenes, paragraph);
  return (
    <div className="pothi-sheet" aria-hidden={decorative || undefined}>
      <SceneArt key={scene?.key} scene={scene} review={tale.review} decorative={decorative} />
      {tale.label && <p className="pothi-seal">{tale.label}</p>}
      <div className="pothi-text" ref={textRef}>
        {children}
      </div>
    </div>
  );
}

/** Told when the close of the tale has been shown to the reader. */
export const TaleEndSeen = createContext<(() => void) | null>(null);

/** The close of a tale and the way on. On a leaf it counts as seen when it appears; in a scroll, when it scrolls into view. */
export function TaleEnd({ tale, onLeaf = false }: { tale: Tale; onLeaf?: boolean }) {
  const seen = useContext(TaleEndSeen);
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!seen || !el) return;
    if (onLeaf) return seen();
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        seen();
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [seen, onLeaf]);
  return (
    <p className="pothi-end" ref={ref}>
      <Link to={tale.next.to}>{tale.next.label}</Link>
    </p>
  );
}

/** Whether a leaf holds the last words of the tale. */
export function endsTale(tale: Tale, leaf: Leaf): boolean {
  const last = leaf[leaf.length - 1];
  return last?.paragraph === tale.paragraphs.length - 1 && last.end === tale.paragraphs[last.paragraph].length;
}

export function LeafText({ tale, leaf, index }: { tale: Tale; leaf: Leaf; index: number }) {
  return (
    <div className="pothi-flow">
      {index === 0 && <h2 className="pothi-tale">{tale.title}</h2>}
      {leaf.map((piece) => (
        <p key={`${piece.paragraph}:${piece.start}`} className="pothi-p">
          <Words text={piece.text} from={piece.start} marks={tale.marks[piece.paragraph]} />
        </p>
      ))}
      {endsTale(tale, leaf) && <TaleEnd tale={tale} onLeaf />}
    </div>
  );
}
