import { C, cuspArch, Frame } from './parts';

/** The king in his hall, a necklace held in his hand. */
export default function King() {
  return (
    <Frame>
      <rect x="15" y="15" width="370" height="210" fill={C.indigo} />
      {/* canopy arch */}
      <path d={cuspArch(75, 200, 250, 180)} fill={C.red} />
      <path d={cuspArch(90, 200, 220, 164)} fill={C.deep} />
      <path d={cuspArch(75, 200, 250, 180)} fill="none" stroke={C.gold} strokeWidth="2" />
      <path d="M200 20V8M194 12h12" stroke={C.gold} strokeWidth="2" />
      {/* pillars */}
      {[15, 345].map((x) => (
        <g key={x}>
          <rect x={x} y="15" width="40" height="210" fill={C.ivory} />
          <path
            d={Array.from({ length: 8 }, (_, i) => `M${x + 20} ${24 + i * 26}l8 9-8 9-8-9Z`).join('')}
            fill={C.red}
          />
          <rect x={x} y="15" width="40" height="6" fill={C.gold} />
        </g>
      ))}
      {/* carpet */}
      <path d="M60 225 90 190H310L340 225Z" fill={C.red} />
      <path d="M90 190H310" stroke={C.gold} strokeWidth="2" />
      {/* throne */}
      <rect x="120" y="100" width="82" height="92" fill={C.gold} />
      <circle cx="176" cy="98" r="26" fill={C.char} />
      <circle cx="176" cy="98" r="26" fill="none" stroke={C.ivory} strokeWidth="1.5" />
      <rect x="116" y="150" width="130" height="20" fill={C.ivory} />
      <rect x="116" y="170" width="130" height="22" fill={C.gold} />
      <path d="M118 190v12M244 190v12" stroke={C.ivory} strokeWidth="5" />
      {/* king seated, profile facing right */}
      <path d="M150 150Q150 112 172 108 196 108 200 150Z" fill={C.green} />
      <path d="M160 150q24-6 44 0l30 6v14h-80Z" fill={C.ivory} />
      <path d="M194 124 222 130" stroke={C.green} strokeWidth="9" />
      <circle cx="176" cy="96" r="10" fill="#7a5030" />
      <path d="M164 92Q166 76 180 76 192 78 190 92Q180 84 164 92Z" fill={C.red} />
      <circle cx="177" cy="76" r="3" fill={C.gold} />
      <circle cx="224" cy="130" r="5" fill="#7a5030" />
      {/* necklace held up in his hand */}
      <path
        d="M224 130C206 152 214 184 240 188 266 184 272 152 224 130"
        fill="none"
        stroke={C.gold}
        strokeWidth="3.4"
        strokeDasharray="0.5 4.6"
        strokeLinecap="round"
      />
      <path
        d="M226 134C212 154 220 180 240 183 262 180 266 156 226 134"
        fill="none"
        stroke={C.ivory}
        strokeWidth="1.2"
        strokeDasharray="0.5 3.6"
        strokeLinecap="round"
      />
      <path d="M240 184l-6 9 6 10 6-10Z" fill={C.red} stroke={C.gold} strokeWidth="1.4" />
      {/* courtiers from behind */}
      <path d="M300 200l6-60h18l6 60Z" fill={C.ivory} />
      <circle cx="315" cy="132" r="8" fill={C.char} />
      <path d="M306 128Q315 114 324 128Z" fill={C.gold} />
      <path d="M268 204l5-44h14l5 44Z" fill={C.indigo} stroke={C.gold} strokeWidth=".8" />
      <circle cx="280" cy="154" r="6.5" fill={C.char} />
    </Frame>
  );
}
