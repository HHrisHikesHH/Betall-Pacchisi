import { C, Frame, Lotus, Stars } from './parts';

/** Title card: a cusped arch, a moon and three lotuses (the three gestures). */
export default function Cover() {
  return (
    <Frame>
      <rect x="15" y="15" width="370" height="210" fill={C.indigo} />
      <Stars
        pts={[
          [40, 40],
          [70, 70, 1],
          [350, 45],
          [320, 80, 1],
          [55, 120, 1],
          [345, 125, 1],
          [30, 80, 1.6],
        ]}
      />
      {/* side columns */}
      {[15, 345].map((x) => (
        <g key={x}>
          <rect x={x} y="15" width="40" height="210" fill={C.green} />
          <path
            d={Array.from({ length: 9 }, (_, i) => `M${x + 20} ${25 + i * 24}l9 9-9 9-9-9Z`).join('')}
            fill={C.gold}
          />
          <rect x={x + 38} y="15" width="2" height="210" fill={C.ivory} />
        </g>
      ))}
      {/* arch */}
      <path d="M95 200V95Q95 70 112 62Q125 40 200 24Q275 40 288 62Q305 70 305 95V200Z" fill={C.ivory} />
      <path d="M105 200V97Q105 78 119 71Q132 50 200 36Q268 50 281 71Q295 78 295 97V200Z" fill={C.deep} />
      <path
        d="M105 200V97Q105 78 119 71Q132 50 200 36Q268 50 281 71Q295 78 295 97V200Z"
        fill="none"
        stroke={C.gold}
        strokeWidth="1.5"
      />
      <circle cx="200" cy="82" r="22" fill={C.ivory} />
      <circle cx="209" cy="77" r="19" fill={C.deep} />
      <path d="M200 56v-9M200 117v9M174 82h-9M226 82h9" stroke={C.gold} strokeWidth="1.5" />
      {/* water and lotuses */}
      <rect x="105" y="150" width="190" height="50" fill={C.green} />
      <path
        d="M115 162h40M175 162h60M255 162h30M130 176h50M205 176h70M120 190h40M180 190h30M240 190h45"
        stroke={C.ivory}
        strokeWidth="1"
        opacity=".7"
      />
      <path
        d="M200 160V132M158 168Q160 150 154 138M242 168Q240 150 246 138"
        stroke={C.gold}
        strokeWidth="1.8"
        fill="none"
      />
      <Lotus x={200} y={134} s={1.5} />
      <Lotus x={154} y={140} s={0.8} petal={C.red} edge={C.ivory} />
      <Lotus x={246} y={140} s={0.8} petal={C.red} edge={C.ivory} />
      <rect x="15" y="200" width="370" height="25" fill={C.char} />
      <path
        d={Array.from({ length: 31 }, (_, i) => `M${20 + i * 12} 218l6-12 6 12Z`).join('')}
        fill={C.gold}
        opacity=".85"
      />
    </Frame>
  );
}
