import { lazy, Suspense, type ComponentType } from 'react';
import { ui } from '../i18n/hi';
import type { ArtId } from './artIds';
import { overrideFor } from './overrides';

// Each illustration is its own chunk, so reading a story without art (or before it scrolls in) stays light.
const ARTS: Record<ArtId, React.LazyExoticComponent<ComponentType>> = {
  cover: lazy(() => import('./art/Cover')),
  lake: lazy(() => import('./art/Lake')),
  workshop: lazy(() => import('./art/Workshop')),
  window: lazy(() => import('./art/Window')),
  cremation: lazy(() => import('./art/Cremation')),
  king: lazy(() => import('./art/King')),
  gate: lazy(() => import('./art/Gate')),
};

/** One illustration: a dropped-in image if one exists for the id, else the built-in SVG. Decorative to AT; the wrapper carries the alt. */
export function ArtView({ art }: { art: string }) {
  const override = overrideFor(art);
  if (override) return <img className="scene-img" src={override} alt="" decoding="async" />;
  const Art = (ARTS as Record<string, (typeof ARTS)[ArtId] | undefined>)[art];
  if (!Art) return null;
  return (
    <Suspense fallback={<span className="scene-loading" role="status" aria-label={ui.illustrationLoading} />}>
      <Art />
    </Suspense>
  );
}
