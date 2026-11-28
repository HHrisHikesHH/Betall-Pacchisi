import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { resolveMotion, type Effect, type Layer, type ResolvedMotion, type Window } from './motion';

type Frame = Keyframe & { at: number };

/**
 * Keyframes that stay at `rest` for the whole cycle except inside `window`, where `frames` play
 * (`at` runs 0 to 1 across the window). Every element shares one cycle, so their turns stay in order.
 */
export function windowed([start, end]: Window, rest: Keyframe, frames: Frame[]): Keyframe[] {
  const a = start / 100;
  const span = (end - start) / 100;
  return [
    { ...rest, offset: 0 },
    { ...rest, offset: a },
    // in-between frames carry only what they change; the browser interpolates each property on its own
    ...frames.map(({ at, ...frame }) => ({ ...frame, offset: a + span * at })),
    { ...rest, offset: a + span },
    { ...rest, offset: 1 },
  ];
}

const pct = (n: number) => `${n}%`;
const boxStyle = ([x, y, w, h]: [number, number, number, number]): CSSProperties => ({
  left: pct(x),
  top: pct(y),
  width: pct(w),
  height: pct(h),
});
/** Same scatter on every load (no Math.random), so tests and screenshots are stable. */
const scatter = (i: number, salt: number) => ((Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453) % 1 + 1) % 1;

interface Part {
  className: string;
  style: CSSProperties;
  keyframes: Keyframe[];
  children?: Part[];
}

function effectParts(effect: Effect, index: number): Part[] {
  const w = effect.window;
  switch (effect.type) {
    case 'breeze':
      return [
        {
          className: 'pm-box',
          style: boxStyle(effect.box),
          keyframes: [],
          children: [
            {
              className: 'pm-breeze',
              style: {},
              keyframes: windowed(w, { opacity: 0, transform: 'translateX(-110%)' }, [
                { at: 0, opacity: 0, transform: 'translateX(-110%)' },
                { at: 0.35, opacity: 1 },
                { at: 0.7, opacity: 1 },
                { at: 1, opacity: 0, transform: 'translateX(240%)' },
              ]),
            },
          ],
        },
      ];
    case 'glow':
    case 'glint': {
      const style: CSSProperties = { left: pct(effect.x), top: pct(effect.y), width: pct(effect.r * 2) };
      if (effect.type === 'glow') {
        return [
          {
            className: 'pm-glow',
            style,
            keyframes: windowed(w, { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' }, [
              { at: 0.3, opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
              { at: 0.7, opacity: 1, transform: 'translate(-50%, -50%) scale(1.04)' },
            ]),
          },
        ];
      }
      return [
        {
          className: 'pm-glint',
          style,
          keyframes: windowed(w, { opacity: 0, transform: 'translate(-50%, -50%) scale(0.7)' }, [
            { at: 0.25, opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
            { at: 0.6, opacity: 0.85, transform: 'translate(-50%, -50%) scale(1.12)' },
          ]),
        },
        {
          className: 'pm-spark',
          style,
          keyframes: windowed(w, { opacity: 0, transform: 'translate(-50%, -50%) rotate(0deg) scale(0.3)' }, [
            { at: 0.2, opacity: 0, transform: 'translate(-50%, -50%) rotate(0deg) scale(0.3)' },
            { at: 0.38, opacity: 1, transform: 'translate(-50%, -50%) rotate(25deg) scale(1)' },
            { at: 0.6, opacity: 0, transform: 'translate(-50%, -50%) rotate(50deg) scale(0.5)' },
          ]),
        },
      ];
    }
    case 'motes': {
      const [a, b] = w;
      const span = b - a;
      const motes: Part[] = Array.from({ length: effect.count }, (_, i) => {
        const start = a + span * 0.4 * scatter(i, index + 1);
        const end = Math.min(b, start + span * (0.45 + 0.15 * scatter(i, index + 2)));
        const drift = 20 + 30 * scatter(i, index + 3);
        return {
          className: 'pm-mote',
          style: { left: pct(8 + 84 * scatter(i, index + 4)), top: pct(30 + 60 * scatter(i, index + 5)) },
          keyframes: windowed([start, end], { opacity: 0, transform: 'translate(0, 0)' }, [
            { at: 0.3, opacity: 0.9 },
            { at: 0.75, opacity: 0.6 },
            { at: 1, opacity: 0, transform: `translate(${drift * 0.4}%, -${drift}%)` },
          ]),
        };
      });
      // motes drift in percentages of the box, so the box itself carries them
      return [{ className: 'pm-box pm-motes', style: boxStyle(effect.box), keyframes: [], children: motes }];
    }
  }
}

function layerFrames(layer: Layer): Keyframe[] {
  const n = layer.amount;
  switch (layer.motion) {
    case 'sway':
      return windowed(layer.window, { transform: 'rotate(0deg)' }, [
        { at: 0.3, transform: `rotate(${n}deg)` },
        { at: 0.7, transform: `rotate(${-n * 0.6}deg)` },
      ]);
    case 'breathe':
      return windowed(layer.window, { transform: 'scale(1, 1)' }, [{ at: 0.5, transform: `scale(1, ${1 + n / 100})` }]);
    case 'bob':
      return windowed(layer.window, { transform: 'translateY(0)' }, [{ at: 0.5, transform: `translateY(-${n}%)` }]);
    case 'blink':
      return windowed(layer.window, { opacity: 0 }, [
        { at: 0.35, opacity: 0 },
        { at: 0.45, opacity: 1 },
        { at: 0.6, opacity: 0 },
      ]);
  }
}

function reducedMotion(): boolean {
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * A finished painting, shown whole and untouched, with its optional motion drawn over it.
 * Without a motion file, with reduced motion, or in a still copy (a leaf in mid-turn) it is the plain painting.
 */
export function AnimatedPainting({
  sceneKey,
  src,
  alt,
  still = false,
  motion: given,
}: {
  sceneKey: string;
  src: string;
  alt: string;
  still?: boolean;
  /** For tests; normally looked up from content/images. */
  motion?: ResolvedMotion;
}) {
  const [broken, setBroken] = useState(false);
  const found = given ?? resolveMotion(sceneKey);
  const motion = found && broken ? { ...found, layers: [], plate: undefined } : found;
  const stage = useRef<HTMLDivElement>(null);
  const cycle = motion?.cycle ?? 0;
  const live = Boolean(motion) && !still;

  useEffect(() => {
    const root = stage.current;
    if (!live || !root || reducedMotion()) return;
    const animations: Animation[] = [];
    root.querySelectorAll<HTMLElement>('[data-frames]').forEach((element) => {
      if (typeof element.animate !== 'function') return;
      const keyframes = (element as HTMLElement & { frames?: Keyframe[] }).frames;
      if (!keyframes?.length) return;
      const animation = element.animate(keyframes, { duration: cycle * 1000, iterations: Infinity, easing: 'linear' });
      // one shared clock: every element of every painting is at the same point of its cycle
      animation.startTime = 0;
      animations.push(animation);
    });
    root.dataset.playing = animations.length ? 'true' : 'false';
    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver === 'function') {
      observer = new IntersectionObserver(([entry]) => {
        animations.forEach((a) => (entry.isIntersecting ? a.play() : a.pause()));
      });
      observer.observe(root);
    }
    return () => {
      observer?.disconnect();
      animations.forEach((a) => a.cancel());
      delete root.dataset.playing;
    };
  }, [live, cycle, motion?.layers.length]);

  const render = (part: Part, key: string) => (
    <div
      key={key}
      className={part.className}
      style={part.style}
      data-frames={part.keyframes.length ? '' : undefined}
      ref={(element) => {
        if (element) (element as HTMLDivElement & { frames?: Keyframe[] }).frames = part.keyframes;
      }}
    >
      {part.children?.map((child, i) => render(child, `${key}.${i}`))}
    </div>
  );

  return (
    <>
      <img
        className="pothi-painting"
        src={motion?.plate ?? src}
        alt={alt}
        draggable={false}
        onError={motion?.plate ? () => setBroken(true) : undefined}
      />
      {motion && (
        <div
          ref={stage}
          className="pothi-motion"
          aria-hidden="true"
          data-still={still || undefined}
          style={{ aspectRatio: String(motion.ratio) }}
        >
          {motion.layers.map((layer, i) => (
            <img
              key={`layer${i}`}
              className="pm-layer"
              data-motion={layer.motion}
              data-frames=""
              src={layer.url}
              alt=""
              draggable={false}
              onError={() => setBroken(true)}
              style={{ ...boxStyle(layer.box), transformOrigin: `${layer.origin[0]}% ${layer.origin[1]}%` }}
              ref={(element) => {
                if (element) (element as HTMLImageElement & { frames?: Keyframe[] }).frames = layerFrames(layer);
              }}
            />
          ))}
          {!still && motion.effects.flatMap((effect, i) => effectParts(effect, i).map((part, j) => render(part, `e${i}.${j}`)))}
        </div>
      )}
    </>
  );
}
