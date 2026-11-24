import { useEffect, useRef, useState } from 'react';
import { ArtView } from './ArtView';

interface Layer {
  key: number;
  art: string;
  alt: string;
  leaving: boolean;
}

const FADE_MS = 700;

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/** The sticky illustration. Changing `art` crossfades (instantly under reduced motion); `null` collapses the dock. */
export function SceneFigure({ art, alt }: { art: string | null; alt: string }) {
  const [layers, setLayers] = useState<Layer[]>([]);
  const counter = useRef(0);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    setLayers((current) => {
      const live = current.find((l) => !l.leaving);
      if (live && live.art === art)
        return live.alt === alt ? current : current.map((l) => (l === live ? { ...l, alt } : l));
      const next = current.filter((l) => !l.leaving || !reduced).map((l) => ({ ...l, leaving: true }));
      if (art) next.push({ key: ++counter.current, art, alt, leaving: false });
      return reduced ? next.filter((l) => !l.leaving) : next;
    });
    if (reduced) return;
    const timer = window.setTimeout(() => setLayers((current) => current.filter((l) => !l.leaving)), FADE_MS + 50);
    return () => window.clearTimeout(timer);
  }, [art, alt]);

  const open = !!art;
  return (
    <div className="scene-dock" data-open={open} aria-hidden={open ? undefined : true}>
      <div className="scene-stage">
        {layers.map((layer) => (
          <figure
            key={layer.key}
            className="scene-layer"
            data-leaving={layer.leaving}
            role={layer.leaving ? undefined : 'img'}
            aria-label={layer.leaving ? undefined : layer.alt}
            aria-hidden={layer.leaving ? true : undefined}
          >
            <ArtView art={layer.art} />
          </figure>
        ))}
      </div>
    </div>
  );
}
