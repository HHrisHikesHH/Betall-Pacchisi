import { C, cuspArch, Frame, Teeth, Tree } from './parts';

const SKIN = '#8a5a3a';
const SHADE = '#cbb88e';
const WOOD = '#b87a2a';

/** A straight, tapering tusk leaning from a foot (x0, y0) to a tip (x1, y1): ivory with a shaded flank and a worn ring near the base. */
function Tusk({ x0, y0, x1, y1, w }: { x0: number; y0: number; x1: number; y1: number; w: number }) {
  const len = Math.hypot(x1 - x0, y1 - y0);
  const dx = (x1 - x0) / len;
  const dy = (y1 - y0) / len;
  const px = -dy;
  const py = dx;
  const at = (t: number, k: number) => [x0 + dx * len * t + px * w * k * (1 - t * 0.92), y0 + dy * len * t + py * w * k * (1 - t * 0.92)];
  const pt = (t: number, k: number) => at(t, k).map((n) => n.toFixed(1)).join(' ');
  return (
    <g>
      <path d={`M${pt(0, -0.5)}L${pt(1, 0)}L${pt(0, 0.5)}Z`} fill={C.ivory} stroke={C.char} strokeWidth=".7" strokeLinejoin="round" />
      <path d={`M${pt(0, 0.5)}L${pt(1, 0)}L${pt(0, 0.05)}Z`} fill={SHADE} />
      <path d={`M${pt(0.14, -0.5)}L${pt(0.14, 0.5)}`} stroke={C.char} strokeWidth=".8" opacity=".5" />
      <path d={`M${pt(0.12, -0.28)}L${pt(0.7, -0.05)}`} stroke="#fffaf0" strokeWidth=".9" strokeLinecap="round" opacity=".8" />
    </g>
  );
}

/** An ivory-carver's house: an open workshop below, a windowed floor above. A craftsman sits in profile at his bench; tusks lean on the wall behind. */
export default function Workshop() {
  return (
    <Frame>
      <rect x="15" y="15" width="370" height="210" fill="#e6d3a4" />
      <circle cx="342" cy="46" r="16" fill={C.gold} />
      <Tree x={46} y={208} s={1.15} />
      <Tree x={356} y={210} s={1.05} hi={C.indigo} />
      {/* upper storey */}
      <rect x="96" y="58" width="208" height="64" fill={C.ivory} />
      <rect x="86" y="50" width="228" height="12" fill={C.red} />
      <Teeth x={86} y={50} n={14} w={8} h={7} fill={C.red} />
      {/* small domed kiosk on the roof */}
      <rect x="182" y="44" width="36" height="6" fill="#e3d4ae" />
      <path d="M185 44v-12M215 44v-12" stroke={C.ivory} strokeWidth="4" />
      <path d="M190 44v-8a10 8 0 0 1 20 0v8Z" fill={C.indigo} />
      <rect x="180" y="30" width="40" height="3" fill={C.gold} />
      <path d="M182 30Q200 12 218 30Z" fill={C.gold} stroke={C.red} strokeWidth="1" />
      <path d="M200 18v-4" stroke={C.char} strokeWidth="1.6" />
      {/* upper windows */}
      {[112, 170, 228].map((x) => (
        <g key={x}>
          <path d={cuspArch(x, 112, 40, 42)} fill={C.indigo} />
          <path d={cuspArch(x, 112, 40, 42)} fill="none" stroke={C.gold} strokeWidth="2" />
          <path d={`M${x + 20} 70v42`} stroke={C.gold} strokeWidth="1" />
          <rect x={x - 3} y="112" width="46" height="4" fill={C.red} />
        </g>
      ))}
      <rect x="96" y="120" width="208" height="6" fill={C.gold} />
      {/* open workshop: warm dark interior */}
      <rect x="104" y="126" width="192" height="84" fill="#46301f" />
      <rect x="104" y="126" width="192" height="84" fill="#5a3d26" opacity=".35" />
      <rect x="104" y="204" width="192" height="6" fill={WOOD} />
      {/* tusk rack on the back wall */}
      <path d="M112 150H160" stroke={C.char} strokeWidth="3" />
      <Tusk x0={118} y0={206} x1={132} y1={142} w={9} />
      <Tusk x0={130} y0={206} x1={147} y1={134} w={10} />
      <Tusk x0={143} y0={206} x1={156} y1={148} w={8} />
      {/* shelf with small carved pieces */}
      <rect x="268" y="150" width="24" height="3" fill={WOOD} />
      <rect x="271" y="141" width="7" height="9" fill={C.ivory} />
      <path d="M270 141h9" stroke={C.red} strokeWidth="1.5" />
      <ellipse cx="287" cy="146" rx="4" ry="4.5" fill={C.ivory} />
      <path d="M283 145h8" stroke={C.gold} strokeWidth="1" />
      {/* hanging lamp */}
      <path d="M200 126v10" stroke={C.gold} strokeWidth="1" />
      <path d="M200 136l5 6-5 6-5-6Z" fill={C.gold} />
      <circle cx="200" cy="142" r="14" fill={C.gold} opacity=".18" />
      {/* bench, with a comb, a box and an ivory block in work */}
      <rect x="156" y="184" width="72" height="5" fill={WOOD} stroke={C.char} strokeWidth=".6" />
      <path d="M160 189v17M224 189v17" stroke={C.char} strokeWidth="4" />
      <rect x="164" y="177" width="20" height="7" rx="1" fill={C.ivory} stroke={C.char} strokeWidth=".6" />
      <path d={Array.from({ length: 8 }, (_, i) => `M${166 + i * 2.4} 180v4`).join('')} stroke={C.char} strokeWidth=".7" />
      <rect x="190" y="171" width="15" height="13" rx="1.5" fill={C.ivory} stroke={C.char} strokeWidth=".6" />
      <path d="M190 175h15" stroke={C.gold} strokeWidth="1.6" />
      <circle cx="197.5" cy="175" r="1.6" fill={C.red} />
      <rect x="211" y="178" width="12" height="6" rx="1" fill="#fffaf0" stroke={C.char} strokeWidth=".6" />
      <path d="M232 188 244 190M234 192 242 194" stroke={C.ivory} strokeWidth="1.2" strokeLinecap="round" opacity=".7" />
      {/* craftsman, seated cross-legged, in profile facing the bench */}
      <path d="M230 207Q230 196 246 194L276 196Q284 207 270 208Z" fill={C.ivory} stroke={C.char} strokeWidth=".6" />
      <path d="M254 198 276 196 271 166 253 170Z" fill={C.red} />
      <path d="M262 198 272 174" stroke="#8f2d1b" strokeWidth="1.2" />
      <circle cx="257" cy="158" r="7.5" fill={SKIN} />
      <circle cx="249.8" cy="159.5" r="1.9" fill={SKIN} />
      <circle cx="254" cy="157" r=".9" fill={C.char} />
      <path d="M248.5 154Q252 146 262 148Q266 154 264 158Q262 152 248.5 154Z" fill={C.ivory} />
      <path d="M248.5 154Q252 146 262 148" fill="none" stroke={C.gold} strokeWidth="1.2" />
      <path d="M255 174 244 182 230 182" stroke={C.red} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M244 182 230 182" stroke={SKIN} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M226 180 214 180" stroke={C.char} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="229.5" cy="182" r="2.6" fill={SKIN} />
      {/* ground */}
      <rect x="15" y="210" width="370" height="15" fill={C.green} />
      <path
        d={Array.from({ length: 31 }, (_, i) => `M${20 + i * 12} 223l6-9 6 9Z`).join('')}
        fill={C.gold}
        opacity=".7"
      />
      {/* end pillars and a scalloped valance frame the opening */}
      <rect x="96" y="124" width="9" height="86" fill={C.ivory} />
      <rect x="295" y="124" width="9" height="86" fill={C.ivory} />
      <rect x="93" y="204" width="15" height="6" fill={C.red} />
      <rect x="292" y="204" width="15" height="6" fill={C.red} />
      <path
        d={Array.from({ length: 12 }, (_, i) => `M${105 + i * 16} 126a8 8 0 0 0 16 0Z`).join('')}
        fill={C.red}
        stroke={C.gold}
        strokeWidth="1"
      />
    </Frame>
  );
}
