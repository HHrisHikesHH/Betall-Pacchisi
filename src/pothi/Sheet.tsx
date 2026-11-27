import type { Ref } from 'react';
import { Link } from 'react-router-dom';
import { sceneAt, type Scene } from '../content';
import { SceneArt } from '../scene/SceneArt';
import type { Leaf } from './paginate';
import { aroundDandas } from './text';

export interface Tale {
  title: string;
  paragraphs: string[];
  scenes: Scene[];
  /** Show prompts and sound cues. */
  review: boolean;
  /** Where the end of the tale leads. */
  next: { to: string; label: string };
  /** The status label shown on every leaf; absent only for approved text. */
  label?: string;
}

export function Words({ text }: { text: string }) {
  return aroundDandas(text).map((part, index) =>
    index % 2 ? (
      <span key={index} className="pothi-danda">
        {part}
      </span>
    ) : (
      part
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

/** The close of a tale and the way on. */
export function TaleEnd({ tale }: { tale: Tale }) {
  return (
    <p className="pothi-end">
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
          <Words text={piece.text} />
        </p>
      ))}
      {endsTale(tale, leaf) && <TaleEnd tale={tale} />}
    </div>
  );
}
