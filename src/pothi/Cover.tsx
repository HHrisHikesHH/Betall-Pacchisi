import { pothiUi } from '../i18n/hi';

const GOLD = '#d9b45c';
const GOLD_PALE = '#f0d894';
const HOLES = [150, 950];
const PETALS = Array.from({ length: 16 }, (_, i) => i * 22.5);

/** The top board of the pothi, drawn: lacquered wood, gold rules, a lotus-bud border, two string holes and the cord. */
function Board() {
  return (
    <svg className="pothi-board-art" viewBox="0 0 1100 500" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="pothi-lacquer" cx="0.5" cy="0.42" r="0.75">
          <stop offset="0" stopColor="#a83221" />
          <stop offset="0.65" stopColor="#8a2216" />
          <stop offset="1" stopColor="#5a120c" />
        </radialGradient>
        <pattern id="pothi-buds" width="40" height="40" patternUnits="userSpaceOnUse" x="30" y="30">
          <path d="M20 7C27 14 27 22 20 27C13 22 13 14 20 7Z" fill={GOLD} />
          <path d="M20 31C16 25 9 23 5 26C8 31 14 33 20 31ZM20 31C24 25 31 23 35 26C32 31 26 33 20 31Z" fill={GOLD} opacity="0.75" />
          <circle cx="0" cy="10" r="2.2" fill={GOLD_PALE} opacity="0.7" />
          <circle cx="40" cy="10" r="2.2" fill={GOLD_PALE} opacity="0.7" />
        </pattern>
      </defs>
      <rect width="1100" height="500" rx="8" fill="url(#pothi-lacquer)" />
      <rect x="30" y="30" width="1040" height="440" fill="#48100b" />
      <rect x="30" y="30" width="1040" height="40" fill="url(#pothi-buds)" />
      <rect x="30" y="430" width="1040" height="40" fill="url(#pothi-buds)" />
      <rect x="30" y="70" width="40" height="360" fill="url(#pothi-buds)" />
      <rect x="1030" y="70" width="40" height="360" fill="url(#pothi-buds)" />
      <rect x="70" y="70" width="960" height="360" fill="url(#pothi-lacquer)" />
      <g fill="none" stroke={GOLD}>
        <rect x="14" y="14" width="1072" height="472" rx="3" strokeWidth="4" />
        <rect x="28" y="28" width="1044" height="444" strokeWidth="1.5" />
        <rect x="70" y="70" width="960" height="360" strokeWidth="4" />
        <rect x="82" y="82" width="936" height="336" strokeWidth="1.2" />
      </g>
      {HOLES.map((x) => (
        <g key={x}>
          <path d={`M${x} 0V500`} stroke="#2c0804" strokeWidth="17" opacity="0.35" transform="translate(5 0)" />
          <path d={`M${x} 0V500`} stroke="#e0a238" strokeWidth="13" />
          <path d={`M${x} 0V500`} stroke="#8d5a14" strokeWidth="13" strokeDasharray="3 7" opacity="0.8" />
          <g transform={`translate(${x} 250)`}>
            <circle r="52" fill="#48100b" stroke={GOLD} strokeWidth="2.5" />
            {PETALS.map((angle) => (
              <path key={angle} d="M0 -48C8 -39 7 -30 0 -23C-7 -30 -8 -39 0 -48Z" fill={GOLD} transform={`rotate(${angle})`} />
            ))}
            <circle r="21" fill="#1d0603" stroke={GOLD_PALE} strokeWidth="3" />
            {/* the knot that keeps the leaves together */}
            <ellipse rx="15" ry="11" fill="#e0a238" />
            <path d="M-11 -5C-3 2 3 2 11 -5M-11 5C-3 -2 3 -2 11 5" stroke="#8d5a14" strokeWidth="2.5" fill="none" />
          </g>
        </g>
      ))}
    </svg>
  );
}

interface CoverProps {
  title: string;
  subtitle: string;
  /** While opening, the cover is only a picture lifting away over the first leaf. */
  opening: boolean;
  onOpen: () => void;
  onOpened: () => void;
}

export function Cover({ title, subtitle, opening, onOpen, onOpened }: CoverProps) {
  const Title = opening ? 'div' : 'h1';
  return (
    <div
      className={opening ? 'pothi-cover pothi-cover--opening' : 'pothi-cover'}
      aria-hidden={opening || undefined}
      inert={opening}
      onAnimationEnd={(event) => {
        if (opening && event.target === event.currentTarget) onOpened();
      }}
    >
      <div className="pothi-cover-column">
        <div className="pothi-bundle">
          <div className="pothi-under" />
          <div className="pothi-lid">
            <Board />
            <div className="pothi-board-words">
              <Title className="pothi-board-title">{title}</Title>
              <p className="pothi-board-subtitle">{subtitle}</p>
            </div>
          </div>
        </div>
        <button type="button" className="pothi-open" onClick={onOpen}>
          {pothiUi.open}
        </button>
      </div>
    </div>
  );
}
