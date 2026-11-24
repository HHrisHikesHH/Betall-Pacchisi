import { C, cuspArch, Frame, Person, Tree } from './parts';

/** Dusk: a great window and a small plank seat hanging from two ropes over the garden. */
export default function Window() {
  return (
    <Frame>
      <rect x="15" y="15" width="370" height="60" fill={C.indigo} />
      <rect x="15" y="75" width="370" height="30" fill={C.red} />
      <rect x="15" y="105" width="370" height="20" fill={C.gold} />
      <circle cx="320" cy="98" r="16" fill={C.ivory} />
      <path d="M15 125H385V225H15Z" fill={C.green} />
      <Tree x={60} y={190} s={1.3} leaf="#1f4637" hi={C.green} />
      <Tree x={340} y={196} s={1.1} leaf="#1f4637" hi={C.green} />
      {/* wall */}
      <path d="M130 15H270V225H130Z" fill={C.char} />
      <path d="M130 15H270V225H130Z" fill="none" stroke={C.gold} strokeWidth="1.5" />
      <rect x="138" y="22" width="124" height="8" fill={C.red} />
      <path d={cuspArch(158, 100, 84, 74)} fill={C.gold} />
      <path d={cuspArch(164, 100, 72, 62)} fill="#e0a642" />
      <path d={cuspArch(158, 100, 84, 74)} fill="none" stroke={C.ivory} strokeWidth="2" />
      <rect x="150" y="100" width="100" height="8" fill={C.ivory} />
      {/* figures at the window, lit from within */}
      <Person x={185} y={100} h={34} robe={C.indigo} wrap={C.ivory} />
      <Person x={216} y={100} h={36} robe={C.red} wrap={C.char} flip />
      <path d="M150 108v14M250 108v14" stroke={C.char} strokeWidth="2" />
      {/* ropes and seat */}
      <path d="M176 108V168M224 108V168" stroke={C.ivory} strokeWidth="1.6" />
      <rect x="170" y="168" width="60" height="6" fill={C.red} />
      <rect x="170" y="174" width="60" height="2" fill={C.char} />
      <path d="M185 168l2-18 20 0 3 18Z" fill={C.ivory} />
      <circle cx="197" cy="144" r="5" fill={C.char} />
      <path d="M190 142Q197 134 205 142Z" fill={C.gold} />
      <path d="M130 225V190h140v35Z" fill="#232328" />
      <path
        d={Array.from({ length: 11 }, (_, i) => `M${134 + i * 12} 222l6-14 6 14Z`).join('')}
        fill={C.gold}
        opacity=".6"
      />
    </Frame>
  );
}
