import { useId, type ReactNode } from 'react';

// Shared palette: deep indigo, vermilion, ochre/gold, bottle green, ivory, charcoal.
export const C = {
  indigo: '#1f2a5c',
  deep: '#131a3a',
  red: '#c0432b',
  gold: '#d19b2f',
  green: '#2f5e49',
  ivory: '#f0e6cf',
  char: '#2a2a2f',
} as const;

/** Ornamental frame shared by every scene: a patterned border band, gold keylines and corner rosettes. Content is drawn in the 370 x 210 field. */
export function Frame({ children }: { children: ReactNode }) {
  const uid = useId().replace(/:/g, '');
  const pat = `p${uid}`;
  const clip = `c${uid}`;
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={pat} width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="12" height="12" fill={C.deep} />
          <path d="M6 1 11 6 6 11 1 6Z" fill={C.gold} />
          <circle cx="6" cy="6" r="1.8" fill={C.red} />
        </pattern>
        <clipPath id={clip}>
          <rect x="15" y="15" width="370" height="210" />
        </clipPath>
      </defs>
      <rect width="400" height="240" fill={C.deep} />
      <rect x="7" y="7" width="386" height="226" fill={`url(#${pat})`} />
      <rect x="3.5" y="3.5" width="393" height="233" fill="none" stroke={C.gold} strokeWidth="1.5" />
      <rect x="13.5" y="13.5" width="373" height="213" fill="none" stroke={C.ivory} strokeWidth="1" />
      <g clipPath={`url(#${clip})`}>{children}</g>
      <rect x="15" y="15" width="370" height="210" fill="none" stroke={C.gold} strokeWidth="1.2" />
      {[
        [10, 10],
        [390, 10],
        [10, 230],
        [390, 230],
      ].map(([x, y]) => (
        <g key={`${x}${y}`} transform={`translate(${x} ${y})`}>
          <circle r="7" fill={C.deep} stroke={C.gold} strokeWidth="1.2" />
          <path d="M0-5 2 0 0 5-2 0ZM-5 0 0-2 5 0 0 2Z" fill={C.red} />
          <circle r="1.3" fill={C.ivory} />
        </g>
      ))}
    </svg>
  );
}

/** Stylised lotus in side view; (x, y) is the base of the flower. */
export function Lotus({
  x,
  y,
  s = 1,
  petal = C.ivory,
  edge = C.red,
  heart = C.gold,
}: {
  x: number;
  y: number;
  s?: number;
  petal?: string;
  edge?: string;
  heart?: string;
}) {
  const p = 'M0 0C-5-7-5-15 0-24 5-15 5-7 0 0Z';
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={petal} stroke={edge} strokeWidth="1">
      <path d={p} transform="rotate(-62)" />
      <path d={p} transform="rotate(62)" />
      <path d={p} transform="rotate(-32)" />
      <path d={p} transform="rotate(32)" />
      <path d={p} />
      <path d="M-7 1Q0 6 7 1 5-1 0-1-5-1-7 1Z" fill={heart} stroke="none" />
    </g>
  );
}

/** Round lotus leaf lying on water. */
export function Pad({ x, y, s = 1, fill = C.green }: { x: number; y: number; s?: number; fill?: string }) {
  return (
    <ellipse
      rx="14"
      ry="3.6"
      transform={`translate(${x} ${y}) scale(${s})`}
      fill={fill}
      stroke={C.ivory}
      strokeWidth=".6"
    />
  );
}

/** A tree of scalloped foliage tiers on a trunk; (x, y) is the foot of the trunk. */
export function Tree({
  x,
  y,
  s = 1,
  leaf = C.green,
  hi = '#3f7a5f',
  trunk = C.char,
}: {
  x: number;
  y: number;
  s?: number;
  leaf?: string;
  hi?: string;
  trunk?: string;
}) {
  const tier = (cy: number, w: number, fill: string) => {
    const r = w / 3;
    return (
      <path
        d={`M${-w} ${cy}A${w} ${w * 0.85} 0 0 1 ${w} ${cy}a${r} ${r * 0.8} 0 0 1 ${-2 * r} 0a${r} ${r * 0.8} 0 0 1 ${-2 * r} 0a${r} ${r * 0.8} 0 0 1 ${-2 * r} 0Z`}
        fill={fill}
      />
    );
  };
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-2.5" y="-28" width="5" height="28" fill={trunk} />
      {tier(-14, 30, leaf)}
      {tier(-30, 23, hi)}
      {tier(-44, 15, leaf)}
    </g>
  );
}

/** Small standing figure seen from behind or in profile, no face. (x, y) is the foot; h is the height. */
export function Person({
  x,
  y,
  h = 30,
  robe = C.red,
  wrap = C.ivory,
  head = C.char,
  turban = false,
  flip = false,
}: {
  x: number;
  y: number;
  h?: number;
  robe?: string;
  wrap?: string;
  head?: string;
  turban?: boolean;
  flip?: boolean;
}) {
  const k = h / 30;
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -k : k} ${k})`}>
      <path d="M-5 0 -3-17 3-17 5 0Z" fill={robe} />
      <path d="M-3-17 -4-12 4-12 3-17Z" fill={wrap} />
      <circle cx="0" cy="-21" r="3.6" fill={head} />
      {turban && <path d="M-4-22Q0-30 4-22 0-20-4-22Z" fill={wrap} />}
    </g>
  );
}

/** Cusped (multifoil) arch outline path for an opening of width w and height h with its base at (x, y). */
export function cuspArch(x: number, y: number, w: number, h: number): string {
  const r = w / 2;
  const top = y - h;
  return `M${x} ${y}V${top + r * 1.2}Q${x} ${top + r * 0.5} ${x + r * 0.35} ${top + r * 0.45}Q${x + r * 0.5} ${top + r * 0.1} ${x + r} ${top}Q${x + r * 1.5} ${top + r * 0.1} ${x + r * 1.65} ${top + r * 0.45}Q${x + w} ${top + r * 0.5} ${x + w} ${top + r * 1.2}V${y}Z`;
}

/** Row of small battlement teeth. */
export function Teeth({
  x,
  y,
  n,
  w = 10,
  h = 8,
  fill,
}: {
  x: number;
  y: number;
  n: number;
  w?: number;
  h?: number;
  fill: string;
}) {
  return (
    <g fill={fill}>
      {Array.from({ length: n }, (_, i) => (
        <rect key={i} x={x + i * w * 1.6} y={y - h} width={w} height={h} />
      ))}
    </g>
  );
}

export function Stars({ pts, fill = C.gold }: { pts: number[][]; fill?: string }) {
  return (
    <g fill={fill}>
      {pts.map(([x, y, r = 1.2]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r={r} />
      ))}
    </g>
  );
}
