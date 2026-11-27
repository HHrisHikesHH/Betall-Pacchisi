import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../components/useDocumentTitle';
import type { Collection } from '../content';
import { Cover } from '../pothi/Cover';
import { matches } from '../pothi/hooks';
import { canFullscreen, enterFullscreen } from '../pothi/immersive';
import { Shell } from '../pothi/Shell';

export const SMALL_TOUCH = '(pointer: coarse) and (max-width: 600px), (pointer: coarse) and (max-height: 600px)';

/** The closed pothi. Opening it leads to the list of tales. */
export function HomePage({ collection }: { collection: Collection }) {
  useDocumentTitle(collection.title);
  const navigate = useNavigate();
  const [opening, setOpening] = useState(false);
  const opened = useCallback(() => navigate('/kathaen'), [navigate]);

  const open = () => {
    if (canFullscreen() && matches(SMALL_TOUCH)) void enterFullscreen(true);
    if (matches('(prefers-reduced-motion: reduce)')) opened();
    else setOpening(true);
  };

  useEffect(() => {
    if (!opening) return;
    const timer = window.setTimeout(opened, 1500);
    return () => window.clearTimeout(timer);
  }, [opening, opened]);

  return (
    <Shell>
      <Cover title={collection.title} subtitle={collection.subtitle} opening={opening} onOpen={open} onOpened={opened} />
    </Shell>
  );
}
