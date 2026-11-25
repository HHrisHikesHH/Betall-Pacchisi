// Full screen and landscape lock. Both are requests: browsers may refuse, and some phones support neither.

type LockableOrientation = ScreenOrientation & { lock?: (orientation: 'landscape') => Promise<void> };

export function canFullscreen(): boolean {
  return Boolean(document.fullscreenEnabled && document.documentElement.requestFullscreen);
}

/** Must be called from a tap or click. */
export async function enterFullscreen(lockLandscape: boolean): Promise<void> {
  try {
    await document.documentElement.requestFullscreen({ navigationUI: 'hide' });
  } catch {
    // Refused or unsupported: the page reads the same without it.
  }
  if (!lockLandscape) return;
  try {
    await (window.screen.orientation as LockableOrientation | undefined)?.lock?.('landscape');
  } catch {
    // Refused or unsupported: the reader is invited to turn the phone instead.
  }
}

export async function leaveFullscreen(): Promise<void> {
  try {
    window.screen.orientation?.unlock?.();
  } catch {
    // Nothing was locked.
  }
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
  } catch {
    // Already left.
  }
}
