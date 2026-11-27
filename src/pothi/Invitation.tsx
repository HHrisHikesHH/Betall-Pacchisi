import { pothiUi } from '../i18n/hi';
import { useArrivalFocus } from './useArrivalFocus';

/** Asks an upright phone to turn: the leaf is long and so is a phone held sideways (D-064). */
export function Invitation({ onStay, onClose }: { onStay: () => void; onClose: () => void }) {
  const heading = useArrivalFocus<HTMLHeadingElement>();
  return (
    <main className="pothi-invite">
      <svg className="pothi-phone" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
        <g className="pothi-phone-body">
          <rect x="39" y="18" width="42" height="84" rx="8" />
          <path d="M53 94h14" />
        </g>
        <path d="M96 30a46 46 0 0 1 12 32M101 57l7 7 6-8" />
      </svg>
      <h1 ref={heading} tabIndex={-1}>
        {pothiUi.rotateTitle}
      </h1>
      <p>{pothiUi.rotateBody}</p>
      <button type="button" className="pothi-open" onClick={onStay}>
        {pothiUi.readAnyway}
      </button>
      <button type="button" className="pothi-quiet" onClick={onClose}>
        {pothiUi.close}
      </button>
    </main>
  );
}
