import { Fragment, useLayoutEffect, useRef, type RefObject } from 'react';
import { SceneArt } from '../scene/SceneArt';
import { splitSentences, type Position } from './paginate';
import { TaleEnd, Words, type Tale } from './Sheet';

/**
 * Keeps the reading position in a scrolling view: scrolls to it when the view appears or changes size,
 * and moves it only when the reader scrolls.
 */
export function useScrollPosition(
  scroller: RefObject<HTMLElement | null>,
  ready: number,
  position: Position,
  onPosition: (position: Position) => void,
) {
  const latest = useRef(position);
  latest.current = position;

  useLayoutEffect(() => {
    const box = scroller.current;
    if (!box || !ready) return;
    const sentences = () => Array.from(box.querySelectorAll<HTMLElement>('[data-paragraph]'));
    // Height covered at the top of the view by a bar that stays in place.
    const covered = () => parseFloat(getComputedStyle(box).scrollPaddingTop) || 0;
    let expected = 0;
    let size = '';

    const restore = () => {
      size = `${box.clientWidth}x${box.clientHeight}`;
      const { paragraph, offset } = latest.current;
      let top = 0;
      if (paragraph > 0 || offset > 0) {
        const target = sentences()
          .filter((el) => Number(el.dataset.paragraph) === paragraph && Number(el.dataset.start) <= offset)
          .pop();
        const line = target?.getClientRects()[0];
        if (line) top = box.scrollTop + line.top - box.getBoundingClientRect().top - covered() - 14;
      }
      box.scrollTop = top;
      expected = box.scrollTop;
    };
    const onScroll = () => {
      if (size !== `${box.clientWidth}x${box.clientHeight}`) return restore();
      if (Math.abs(box.scrollTop - expected) <= 2) return;
      expected = -10;
      if (box.scrollTop <= 2) return onPosition({ paragraph: 0, offset: 0 });
      const top = box.getBoundingClientRect().top + covered() + 12;
      const first = sentences().find((el) => el.getBoundingClientRect().bottom > top);
      if (first) onPosition({ paragraph: Number(first.dataset.paragraph), offset: Number(first.dataset.start) });
    };

    restore();
    box.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', restore);
    return () => {
      box.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', restore);
    };
  }, [scroller, ready, onPosition]);
}

/** The whole tale as one flowing text. `pictures` puts each scene's picture where the scene begins. */
export function ScrollText({ tale, pictures = false }: { tale: Tale; pictures?: boolean }) {
  return (
    <div className="pothi-flow">
      <h2 className="pothi-tale">{tale.title}</h2>
      {tale.paragraphs.map((text, paragraph) => {
        const scene = pictures ? tale.scenes.find((s) => s.start === paragraph) : undefined;
        return (
          <Fragment key={paragraph}>
            {scene && (
              <figure className="pothi-crop">
                <SceneArt scene={scene} review={tale.review} />
              </figure>
            )}
            <p className="pothi-p">
              {splitSentences(text).map(({ start, end }) => (
                <span key={start} data-paragraph={paragraph} data-start={start}>
                  <Words text={text.slice(start, end)} />
                </span>
              ))}
            </p>
          </Fragment>
        );
      })}
      <TaleEnd tale={tale} />
    </div>
  );
}
