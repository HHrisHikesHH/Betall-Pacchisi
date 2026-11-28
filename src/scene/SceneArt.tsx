import { useState } from 'react';
import type { Scene } from '../content';
import { pothiUi } from '../i18n/hi';
import { AnimatedPainting } from './AnimatedPainting';
import { imageFor } from './images';

/**
 * A scene's picture. Until the picture exists, readers see an empty painted panel; in review mode the panel
 * carries the image prompt and the sound cues. A finished picture may carry motion (see motion.ts).
 */
export function SceneArt({ scene, review, decorative = false }: { scene?: Scene; review: boolean; decorative?: boolean }) {
  const src = scene && imageFor(scene.key);
  if (scene && src) {
    return (
      <>
        <AnimatedPainting sceneKey={scene.key} src={src} alt={decorative ? '' : scene.alt} still={decorative} />
        <p className="pothi-credit">{pothiUi.aiCredit}</p>
        {review && !decorative && <Notes scene={scene} overImage />}
      </>
    );
  }
  return (
    <div className="pothi-placeholder" data-scene={scene?.key}>
      {scene && review && !decorative ? (
        <Notes scene={scene} />
      ) : (
        <div
          className="pothi-placeholder-art"
          role={scene && !decorative ? 'img' : undefined}
          aria-label={scene && !decorative ? scene.alt : undefined}
        />
      )}
    </div>
  );
}

function Notes({ scene, overImage = false }: { scene: Scene; overImage?: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    void navigator.clipboard?.writeText(scene.fullPrompt).then(() => setCopied(true));
  };
  const body = (
    <>
      <p className="pothi-review-prompt" lang="en">
        {scene.prompt}
      </p>
      <dl lang="en">
        <dt>Mood</dt>
        <dd>{scene.mood}</dd>
        <dt>Ambience</dt>
        <dd>{scene.ambience}</dd>
        <dt>Music</dt>
        <dd>{scene.music}</dd>
        <dt>Accent</dt>
        <dd>{scene.accent}</dd>
      </dl>
      <p lang="hi">alt: {scene.alt}</p>
      <button type="button" className="pothi-copy" lang="en" onClick={copy}>
        {copied ? 'Copied' : 'Copy full prompt'}
      </button>
    </>
  );
  return (
    <details className={overImage ? 'pothi-review pothi-review--over' : 'pothi-review'} open={!overImage || undefined}>
      <summary lang="en">{scene.key}</summary>
      {body}
    </details>
  );
}
