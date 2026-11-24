import { C, Frame, Lotus, Pad, Person, Tree } from './parts';

/** Lake of lotuses by day: bathers on the near bank, two hunters on the far bank. */
export default function Lake() {
  return (
    <Frame>
      <rect x="15" y="15" width="370" height="210" fill={C.ivory} />
      <rect x="15" y="15" width="370" height="40" fill="#e8d6aa" />
      <circle cx="205" cy="62" r="24" fill={C.gold} />
      <circle cx="205" cy="62" r="17" fill={C.red} opacity=".85" />
      {/* hills and far bank */}
      <path d="M15 112Q70 62 125 100T235 92 330 74 385 104V120H15Z" fill={C.indigo} />
      <path d="M15 120Q90 100 160 116T300 108 385 118V128H15Z" fill={C.green} />
      <Tree x={50} y={124} s={0.7} />
      <Tree x={330} y={122} s={0.75} />
      <Tree x={362} y={126} s={0.55} leaf={C.indigo} hi={C.green} />
      <Person x={290} y={127} h={26} turban robe={C.indigo} />
      <Person x={304} y={127} h={26} turban robe={C.red} />
      {/* water */}
      <rect x="15" y="126" width="370" height="99" fill={C.indigo} />
      <path
        d="M30 136h50M120 138h60M240 136h70M330 140h40M20 150h40M90 152h70M200 150h50M280 152h80M40 168h60M140 170h40M230 168h60M320 170h50M60 186h40M160 188h70M270 186h50"
        stroke={C.ivory}
        strokeWidth="1"
        opacity=".55"
      />
      {[
        [120, 150],
        [170, 145],
        [225, 160],
        [260, 142],
        [140, 178],
        [200, 190],
        [90, 165],
      ].map(([x, y]) => (
        <Pad key={`${x}${y}`} x={x} y={y} s={x > 200 ? 1 : 1.2} />
      ))}
      <Lotus x={120} y={152} s={0.9} />
      <Lotus x={225} y={162} s={1.1} />
      <Lotus x={170} y={147} s={0.7} petal={C.red} edge={C.ivory} />
      <Lotus x={260} y={144} s={0.7} />
      <Lotus x={140} y={180} s={1} />
      <Lotus x={200} y={192} s={1.2} petal={C.red} edge={C.ivory} />
      {/* near bank with bathers */}
      <path d="M15 196Q70 186 130 200T250 204 385 196V225H15Z" fill={C.green} />
      <path d="M15 208Q100 200 200 210T385 206V225H15Z" fill={C.char} />
      <Person x={44} y={202} h={30} robe={C.gold} wrap={C.red} />
      <Person x={64} y={204} h={30} robe={C.red} wrap={C.ivory} />
      <Person x={84} y={202} h={30} robe={C.ivory} wrap={C.gold} />
    </Frame>
  );
}
