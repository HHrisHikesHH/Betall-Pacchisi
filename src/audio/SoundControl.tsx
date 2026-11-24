import { useEffect, useRef, useState } from 'react';
import { ui } from '../i18n/hi';
import { useScene } from '../scenes/SceneContext';
import { bedFor } from './beds';
import type { SoundEngine } from './engine';
import { clampVolume, loadPrefs, savePrefs } from './prefs';

type EngineModule = typeof import('./engine');

/**
 * The reader's sound switch. Off by default; the engine is not even downloaded until the first tap (D-028).
 * Sound follows the scene (D-026): the bed comes from the mood, and "silence" cues and neutral scenes are quiet (D-027).
 */
export function SoundControl() {
  const scene = useScene();
  const bed = bedFor(scene);
  const [prefs, setPrefs] = useState(loadPrefs);
  // A saved "on" is not obeyed at load: browsers need a tap before any sound, so the reader taps again.
  const [on, setOn] = useState(false);
  const engineRef = useRef<SoundEngine | null>(null);
  const loading = useRef<Promise<SoundEngine> | null>(null);
  const bedRef = useRef(bed);
  const volumeRef = useRef(prefs.volume);
  bedRef.current = bed;
  volumeRef.current = prefs.volume;

  useEffect(() => {
    engineRef.current?.setBed(on ? bed : null);
  }, [bed, on]);

  useEffect(
    () => () => {
      engineRef.current?.dispose();
      engineRef.current = null;
      loading.current = null;
    },
    [],
  );

  async function getEngine(): Promise<SoundEngine> {
    if (engineRef.current) return engineRef.current;
    loading.current ??= import('./engine').then((m: EngineModule) => {
      const engine = m.createEngine();
      engineRef.current = engine;
      return engine;
    });
    return loading.current;
  }

  async function toggle() {
    if (on) {
      setOn(false);
      savePrefs({ ...prefs, on: false });
      await engineRef.current?.stop();
      return;
    }
    try {
      const engine = await getEngine();
      engine.setVolume(volumeRef.current / 3);
      engine.setBed(bedRef.current);
      await engine.start();
      setOn(true);
      setPrefs((p) => ({ ...p, on: true }));
      savePrefs({ ...prefs, on: true });
    } catch {
      setOn(false); // no Web Audio here: the page stays silent and readable
    }
  }

  function changeVolume(value: number) {
    const volume = clampVolume(value);
    setPrefs((p) => ({ ...p, volume }));
    savePrefs({ ...prefs, on, volume });
    engineRef.current?.setVolume(volume / 3);
  }

  return (
    <div className="sound-control">
      <button
        type="button"
        className="sound-toggle"
        aria-pressed={on}
        data-sound-bed={on ? (bed ?? 'silence') : 'off'}
        onClick={() => void toggle()}
      >
        {ui.sound}
      </button>
      {on && (
        <label className="sound-volume">
          <span>{ui.soundVolume}</span>
          <input
            type="range"
            min={1}
            max={3}
            step={1}
            value={prefs.volume}
            aria-valuetext={ui.soundVolumeLevels[prefs.volume - 1]}
            onChange={(e) => changeVolume(Number(e.target.value))}
          />
        </label>
      )}
    </div>
  );
}
