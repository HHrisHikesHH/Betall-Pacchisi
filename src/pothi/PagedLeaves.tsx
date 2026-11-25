import { useCallback, useEffect, useLayoutEffect, useRef, useState, type PointerEvent, type ReactNode } from 'react';
import { pothiUi } from '../i18n/hi';
import { matches } from './hooks';
import { Icon } from './Icons';
import { leafOf, paginate, type Leaf, type Position } from './paginate';
import { endsTale, LeafText, Sheet, type Tale } from './Sheet';
import { aroundDandas } from './text';

const TURN_MS = 750;
const MIN_LINES = 6;

/** Writes a candidate leaf into the hidden measuring box, with the same markup as `LeafText`. */
function measure(box: HTMLElement, tale: Tale, leaf: Leaf, index: number): boolean {
  const flow = document.createElement('div');
  flow.className = 'pothi-flow';
  if (index === 0) {
    const title = flow.appendChild(document.createElement('h2'));
    title.className = 'pothi-tale';
    title.textContent = tale.title;
  }
  for (const piece of leaf) {
    const p = flow.appendChild(document.createElement('p'));
    p.className = 'pothi-p';
    aroundDandas(piece.text).forEach((part, i) => {
      if (i % 2 === 0) p.append(part);
      else {
        const danda = p.appendChild(document.createElement('span'));
        danda.className = 'pothi-danda';
        danda.textContent = part;
      }
    });
  }
  if (endsTale(tale, leaf)) {
    const end = flow.appendChild(document.createElement('p'));
    end.className = 'pothi-end';
    end.textContent = pothiUi.end;
  }
  box.replaceChildren(flow);
  return flow.offsetHeight <= box.clientHeight;
}

interface PagedLeavesProps {
  tale: Tale;
  fonts: number;
  position: Position;
  onPosition: (position: Position) => void;
  /** Called when no sensible leaf can be cut at this size; the reader then scrolls. */
  onCannotFit: () => void;
  tools: ReactNode;
}

interface Turn {
  from: number;
  to: number;
  key: number;
}

export function PagedLeaves({ tale, fonts, position, onPosition, onCannotFit, tools }: PagedLeavesProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [leaves, setLeaves] = useState<Leaf[] | null>(null);
  const [turn, setTurn] = useState<Turn | null>(null);
  const turns = useRef(0);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const box = measureRef.current;
    if (!fonts || !wrap || !box) return;
    let size = '';
    const cut = () => {
      const next = `${wrap.clientWidth}x${box.clientWidth}x${box.clientHeight}`;
      if (next === size) return;
      size = next;
      const lineHeight = parseFloat(getComputedStyle(box).lineHeight) || 0;
      const tooSmall = box.clientHeight > 0 && box.clientHeight < MIN_LINES * lineHeight;
      const result = tooSmall ? null : paginate(tale.paragraphs, (leaf, index) => measure(box, tale, leaf, index));
      box.replaceChildren();
      setTurn(null);
      if (result) setLeaves(result);
      else onCannotFit();
    };
    cut();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(cut);
    observer.observe(wrap);
    observer.observe(box);
    return () => observer.disconnect();
  }, [fonts, tale, onCannotFit]);

  const count = leaves?.length ?? 0;
  const index = leaves ? leafOf(leaves, position) : 0;

  const go = useCallback(
    (step: 1 | -1) => {
      if (!leaves) return;
      const to = index + step;
      if (to < 0 || to >= leaves.length) return;
      setTurn(matches('(prefers-reduced-motion: reduce)') ? null : { from: index, to, key: ++turns.current });
      onPosition({ paragraph: leaves[to][0].paragraph, offset: leaves[to][0].start });
    },
    [leaves, index, onPosition],
  );

  // A fallback for the end of the turn, in case the animation event never arrives (a hidden tab, for one).
  useEffect(() => {
    if (!turn) return;
    const timer = window.setTimeout(() => setTurn(null), TURN_MS + 150);
    return () => window.clearTimeout(timer);
  }, [turn]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const onButton = event.target instanceof Element && event.target.closest('button');
      let step: 1 | -1;
      if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(event.key)) step = 1;
      else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) step = -1;
      else if (event.key === ' ' && !onButton) step = event.shiftKey ? -1 : 1;
      else return;
      event.preventDefault();
      go(step);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  // Swipe left or up for the next leaf (a pothi leaf is lifted upwards); a tap turns by the side that was tapped.
  const down = useRef<{ x: number; y: number } | null>(null);
  const onPointerDown = (event: PointerEvent) => {
    down.current = event.isPrimary && event.button === 0 ? { x: event.clientX, y: event.clientY } : null;
  };
  const onPointerUp = (event: PointerEvent) => {
    const from = down.current;
    down.current = null;
    if (!from) return;
    const dx = event.clientX - from.x;
    const dy = event.clientY - from.y;
    const distance = Math.max(Math.abs(dx), Math.abs(dy));
    if (distance >= 40) {
      if (event.pointerType === 'mouse') return;
      go((Math.abs(dx) > Math.abs(dy) ? dx : dy) < 0 ? 1 : -1);
    } else if (distance < 10 && !window.getSelection()?.toString()) {
      const rect = event.currentTarget.getBoundingClientRect();
      go(event.clientX - rect.left < rect.width * 0.34 ? -1 : 1);
    }
  };

  const content = (i: number) => leaves?.[i] && <LeafText tale={tale} leaf={leaves[i]} index={i} />;
  // Going on, the old leaf lifts away above the new one; going back, the earlier leaf comes down over the current one.
  const forward = turn !== null && turn.to > turn.from;
  const under = turn && !forward ? turn.from : index;
  const lifted = turn && (forward ? turn.from : turn.to);
  const number = (n: number) => n.toLocaleString('hi-IN-u-nu-deva');

  return (
    <div className="pothi-leafwrap" ref={wrapRef}>
      <div
        className="pothi-leaf pothi-leaf--pages"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (down.current = null)}
      >
        <Sheet tale={tale}>{content(under)}</Sheet>
        {turn && lifted !== null && (
          <div
            key={turn.key}
            className={forward ? 'pothi-turn pothi-turn--next' : 'pothi-turn pothi-turn--previous'}
            onAnimationEnd={() => setTurn(null)}
          >
            <div className="pothi-face">
              <Sheet tale={tale} decorative>
                {content(lifted)}
              </Sheet>
            </div>
            <div className="pothi-face pothi-face--back" />
          </div>
        )}
      </div>
      <div className="pothi-measure" aria-hidden="true">
        <div className="pothi-text" ref={measureRef} />
      </div>
      <div className="pothi-tools">
        {tools}
        <div className="pothi-pager">
          <button type="button" className="pothi-button" aria-label={pothiUi.previousLeaf} disabled={index <= 0} onClick={() => go(-1)}>
            <Icon name="previous" />
          </button>
          <p className="pothi-number">
            {count > 0 && (
              <>
                <span aria-hidden="true">
                  {number(index + 1)} / {number(count)}
                </span>
                <span className="pothi-hidden" role="status">
                  {pothiUi.leafStatus(number(index + 1), number(count))}
                </span>
              </>
            )}
          </p>
          <button type="button" className="pothi-button" aria-label={pothiUi.nextLeaf} disabled={index >= count - 1} onClick={() => go(1)}>
            <Icon name="next" />
          </button>
        </div>
      </div>
    </div>
  );
}
