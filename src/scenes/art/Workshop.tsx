import { C, cuspArch, Frame, Teeth, Tree } from './parts';

/** An ivory-carver's house: open workshop below, windowed floor above. */
export default function Workshop() {
  return (
    <Frame>
      <rect x="15" y="15" width="370" height="210" fill="#e6d3a4" />
      <circle cx="338" cy="48" r="16" fill={C.gold} />
      <Tree x={44} y={206} s={1.1} />
      <Tree x={360} y={208} s={1} hi={C.indigo} />
      {/* house */}
      <rect x="95" y="60" width="210" height="150" fill={C.ivory} />
      <rect x="85" y="50" width="230" height="14" fill={C.red} />
      <Teeth x={85} y={50} n={14} w={8} h={7} fill={C.red} />
      <rect x="178" y="34" width="44" height="16" fill={C.ivory} />
      <path d="M172 34Q200 4 228 34Z" fill={C.gold} />
      <path d="M200 12V6" stroke={C.char} strokeWidth="2" />
      {/* upper windows */}
      {[110, 168, 226].map((x) => (
        <g key={x}>
          <path d={cuspArch(x, 108, 40, 40)} fill={C.indigo} />
          <path d={cuspArch(x, 108, 40, 40)} fill="none" stroke={C.gold} strokeWidth="2" />
          <path d={`M${x + 20} 70v38M${x + 4} 90h32`} stroke={C.gold} strokeWidth="1" />
        </g>
      ))}
      <rect x="95" y="112" width="210" height="6" fill={C.gold} />
      {/* workshop arcade */}
      <rect x="105" y="122" width="190" height="88" fill={C.char} />
      {[112, 176, 240].map((x) => (
        <g key={x}>
          <path d={cuspArch(x, 210, 48, 80)} fill="#b87a2a" />
          <path d={cuspArch(x, 210, 48, 80)} fill="none" stroke={C.red} strokeWidth="2" />
        </g>
      ))}
      {/* bench, craftsman, tusks */}
      <rect x="120" y="186" width="160" height="6" fill={C.char} />
      <path d="M124 192v18M274 192v18" stroke={C.char} strokeWidth="4" />
      <path d="M128 186Q134 160 158 150 150 168 146 186Z" fill={C.ivory} stroke={C.char} strokeWidth=".8" />
      <path d="M272 186Q266 160 242 150 250 168 254 186Z" fill={C.ivory} stroke={C.char} strokeWidth=".8" />
      <path d="M176 206 180 166 214 166 218 206Z" fill={C.indigo} />
      <path d="M178 192h38" stroke={C.gold} strokeWidth="2" />
      <circle cx="198" cy="156" r="7" fill="#6a4630" />
      <path d="M190 154Q198 142 208 154Z" fill={C.red} />
      <path d="M212 172 236 184" stroke="#6a4630" strokeWidth="4" strokeLinecap="round" />
      <path d="M232 186 262 176" stroke={C.ivory} strokeWidth="5" strokeLinecap="round" />
      <g fill={C.ivory} opacity=".8">
        {[
          [150, 150],
          [158, 140],
          [232, 148],
          [246, 158],
          [128, 160],
          [265, 150],
          [214, 140],
          [168, 156],
        ].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="1.3" />
        ))}
      </g>
      <rect x="15" y="208" width="370" height="17" fill={C.green} />
      <path
        d={Array.from({ length: 31 }, (_, i) => `M${20 + i * 12} 222l6-9 6 9Z`).join('')}
        fill={C.gold}
        opacity=".7"
      />
    </Frame>
  );
}
