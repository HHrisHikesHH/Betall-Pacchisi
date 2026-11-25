import type { Ref } from 'react';
import { pothiUi } from '../i18n/hi';
import painting from '../assets/pothi/court-fruit.webp';
import type { Leaf } from './paginate';
import { aroundDandas } from './text';

export { painting };

export interface Tale {
  title: string;
  paragraphs: string[];
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

/** One painted leaf: the picture edge to edge, its labels, and whatever text is written on its calm side. */
export function Sheet({
  tale,
  children,
  decorative = false,
  textRef,
}: {
  tale: Tale;
  children?: React.ReactNode;
  /** A leaf in mid-turn repeats another's picture and words, so assistive technology skips it. */
  decorative?: boolean;
  textRef?: Ref<HTMLDivElement>;
}) {
  return (
    <div className="pothi-sheet" aria-hidden={decorative || undefined}>
      <img className="pothi-painting" src={painting} alt={decorative ? '' : pothiUi.paintingAlt} draggable={false} />
      <p className="pothi-credit">{pothiUi.aiCredit}</p>
      {tale.label && <p className="pothi-seal">{tale.label}</p>}
      <div className="pothi-text" ref={textRef}>
        {children}
      </div>
    </div>
  );
}

/** Whether a leaf holds the last words of the sample. */
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
      {endsTale(tale, leaf) && <p className="pothi-end">{pothiUi.end}</p>}
    </div>
  );
}
