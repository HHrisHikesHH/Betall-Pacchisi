import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AnimatedPainting, windowed } from './AnimatedPainting';
import { parseMotion, resolveMotion } from './motion';

const motion = resolveMotion(
  't/s',
  parseMotion('m', {
    effects: [
      { type: 'glint', x: 40, y: 40, r: 2, window: [40, 60] },
      { type: 'motes', box: [30, 20, 20, 40], count: 3, window: [30, 80] },
    ],
    layers: [{ src: 'tail.webp', box: [1, 55, 6, 30], motion: 'sway', window: [10, 30] }],
    plate: 'plate.webp',
  }),
  { 't/s/tail.webp': '/tail.webp', 't/s/plate.webp': '/plate.webp' },
)!;

describe('AnimatedPainting', () => {
  it('without motion shows only the original painting', () => {
    const { container } = render(<AnimatedPainting sceneKey="none/x" src="/p.webp" alt="दरबार" />);
    const img = container.querySelector('img.pothi-painting')!;
    expect(img).toHaveAttribute('src', '/p.webp');
    expect(img).toHaveAttribute('alt', 'दरबार');
    expect(container.querySelector('.pothi-motion')).toBeNull();
  });

  it('draws effects and layers over the painting, hidden from assistive technology', () => {
    const { container } = render(<AnimatedPainting sceneKey="t/s" src="/p.webp" alt="दरबार" motion={motion} />);
    expect(container.querySelector('img.pothi-painting')).toHaveAttribute('src', '/plate.webp');
    const stage = container.querySelector('.pothi-motion')!;
    expect(stage).toHaveAttribute('aria-hidden', 'true');
    expect(stage.querySelectorAll('.pm-glint, .pm-spark')).toHaveLength(2);
    expect(stage.querySelectorAll('.pm-mote')).toHaveLength(3);
    expect(stage.querySelector('img.pm-layer')).toHaveAttribute('src', '/tail.webp');
  });

  it('a still copy keeps layers at rest and draws no effects', () => {
    const { container } = render(<AnimatedPainting sceneKey="t/s" src="/p.webp" alt="" motion={motion} still />);
    expect(container.querySelectorAll('.pm-glint, .pm-mote')).toHaveLength(0);
    expect(container.querySelector('img.pm-layer')).not.toBeNull();
  });

  it('falls back to the original painting when a layer file fails to load', () => {
    const { container } = render(<AnimatedPainting sceneKey="t/s" src="/p.webp" alt="" motion={motion} />);
    fireEvent.error(container.querySelector('img.pm-layer')!);
    expect(container.querySelector('img.pothi-painting')).toHaveAttribute('src', '/p.webp');
    expect(container.querySelector('img.pm-layer')).toBeNull();
  });
});

describe('windowed', () => {
  it('rests outside the window and plays inside it', () => {
    const frames = windowed([40, 60], { opacity: 0 }, [{ at: 0.5, opacity: 1 }]);
    const expected = [
      [0, 0],
      [0.4, 0],
      [0.5, 1],
      [0.6, 0],
      [1, 0],
    ];
    expect(frames).toHaveLength(expected.length);
    frames.forEach((frame, i) => {
      expect(frame.offset).toBeCloseTo(expected[i][0]);
      expect(frame.opacity).toBe(expected[i][1]);
    });
  });
});
