import { useEffect, useRef, type KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { readingUi } from '../i18n/hi';
import { FONT_STACKS, FONTS, LEADINGS, MAX_SIZE, MIN_SIZE, THEMES } from './prefs';
import { useReading } from './ReadingContext';

const number = (n: number) => n.toLocaleString('hi-IN-u-nu-deva');

/** The "Aa" button. The panel it opens is held by the reader view, so it survives a change from leaves to scrolling. */
export function ReadingButton({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  return (
    <button
      type="button"
      className="pothi-button pothi-button--word pothi-aa"
      aria-label={readingUi.buttonLabel}
      aria-haspopup="dialog"
      aria-expanded={open}
      onClick={onOpen}
    >
      {readingUi.button}
    </button>
  );
}

/** Gives focus back to the Aa button, wherever the view has put it. */
function focusButton() {
  document.querySelector<HTMLElement>('.pothi-aa')?.focus();
}

function Choice({
  pressed,
  onClick,
  children,
  style,
  label,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
  style?: React.CSSProperties;
  label?: string;
}) {
  return (
    <button
      type="button"
      className="pothi-choice"
      aria-pressed={pressed}
      aria-label={label}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ReadingPanel({ onClose }: { onClose: () => void }) {
  const { prefs, update, root } = useReading();
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButton.current?.focus();
    return focusButton;
  }, []);

  const onKeyDown = (event: KeyboardEvent) => {
    // Keys belong to the panel while it is open: the leaf behind must not turn.
    event.stopPropagation();
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    } else if (event.key === 'Tab') {
      const items = Array.from(dialog.current?.querySelectorAll<HTMLElement>('button:not(:disabled)') ?? []);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  const panel = (
    <div className="pothi-panel-backdrop" onPointerDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="pothi-panel"
        role="dialog"
        aria-modal="true"
        aria-label={readingUi.title}
        ref={dialog}
        onKeyDown={onKeyDown}
      >
        <header className="pothi-panel-head">
          <h2>{readingUi.title}</h2>
          <button type="button" ref={closeButton} className="pothi-panel-close" onClick={onClose}>
            {readingUi.close}
          </button>
        </header>

        <section className="pothi-panel-section" aria-labelledby="rd-size">
          <h3 id="rd-size">{readingUi.sizeLabel}</h3>
          <div className="pothi-panel-row pothi-panel-size">
            <button
              type="button"
              className="pothi-choice"
              aria-label={readingUi.smaller}
              disabled={prefs.size <= MIN_SIZE}
              onClick={() => update({ size: prefs.size - 1 })}
            >
              A−
            </button>
            <p className="pothi-panel-step" role="status">
              {number(prefs.size)} / {number(MAX_SIZE)}
            </p>
            <button
              type="button"
              className="pothi-choice"
              aria-label={readingUi.larger}
              disabled={prefs.size >= MAX_SIZE}
              onClick={() => update({ size: prefs.size + 1 })}
            >
              A+
            </button>
          </div>
        </section>

        <section className="pothi-panel-section" aria-labelledby="rd-font">
          <h3 id="rd-font">{readingUi.fontLabel}</h3>
          <div className="pothi-panel-row">
            {FONTS.map((font) => (
              <Choice
                key={font}
                pressed={prefs.font === font}
                onClick={() => update({ font })}
                style={{ fontFamily: FONT_STACKS[font] }}
              >
                {readingUi.fonts[font]}
              </Choice>
            ))}
          </div>
        </section>

        <section className="pothi-panel-section" aria-labelledby="rd-leading">
          <h3 id="rd-leading">{readingUi.leadingLabel}</h3>
          <div className="pothi-panel-row">
            {LEADINGS.map((leading) => (
              <Choice key={leading} pressed={prefs.leading === leading} onClick={() => update({ leading })}>
                {readingUi.leadings[leading]}
              </Choice>
            ))}
          </div>
        </section>

        <section className="pothi-panel-section" aria-labelledby="rd-theme">
          <h3 id="rd-theme">{readingUi.themeLabel}</h3>
          <div className="pothi-panel-row">
            {THEMES.map((theme) => (
              <Choice key={theme} pressed={prefs.theme === theme} onClick={() => update({ theme })}>
                {readingUi.themes[theme]}
              </Choice>
            ))}
          </div>
        </section>

        <p className="pothi-sample" aria-hidden="true">
          {readingUi.sample}
        </p>
      </div>
    </div>
  );
  return createPortal(panel, root ?? document.body);
}
