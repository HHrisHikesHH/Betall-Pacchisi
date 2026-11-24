import { C, cuspArch, Frame, Teeth, Tree } from './parts';

/** Dusk at the city gate; a lone figure walks the path toward the forest. */
export default function Gate() {
  return (
    <Frame>
      <rect x="15" y="15" width="370" height="50" fill={C.indigo} />
      <rect x="15" y="65" width="370" height="35" fill={C.red} />
      <rect x="15" y="100" width="370" height="25" fill={C.gold} />
      <circle cx="262" cy="110" r="18" fill={C.ivory} opacity=".9" />
      <path d="M200 40q5-5 10 0M222 30q4-4 8 0M240 52q4-4 8 0" stroke={C.ivory} strokeWidth="1.3" fill="none" />
      {/* forest */}
      <rect x="15" y="125" width="370" height="100" fill="#1f4637" />
      {[220, 252, 286, 322, 356].map((x, i) => (
        <Tree key={x} x={x} y={150 + (i % 2) * 8} s={1.5 - (i % 3) * 0.12} leaf="#173629" hi={C.green} />
      ))}
      {[236, 270, 304, 340].map((x, i) => (
        <Tree key={x} x={x} y={178 + (i % 2) * 6} s={1.25} leaf="#1f4637" hi="#3f7a5f" />
      ))}
      {/* city wall and gate */}
      <rect x="15" y="86" width="150" height="124" fill={C.ivory} />
      <Teeth x={15} y={86} n={9} w={10} h={9} fill={C.ivory} />
      <path d="M15 96H165" stroke={C.gold} strokeWidth="3" />
      <rect x="95" y="52" width="70" height="158" fill="#e3d4ae" />
      <Teeth x={95} y={52} n={4} w={10} h={9} fill="#e3d4ae" />
      <path d={cuspArch(106, 210, 48, 92)} fill={C.char} />
      <path d={cuspArch(106, 210, 48, 92)} fill="none" stroke={C.red} strokeWidth="2.5" />
      <path d={cuspArch(116, 210, 28, 62)} fill="#3a2a22" />
      <path d="M130 70v-14M130 56l12 5-12 5" stroke={C.red} strokeWidth="2" fill={C.red} />
      {/* ground and path */}
      <path d="M15 210H385V225H15Z" fill={C.char} />
      <path
        d="M96 210C130 196 170 196 190 180S230 160 250 150 300 128 330 125L336 130C300 134 262 156 244 168S196 206 170 212Z"
        fill={C.gold}
      />
      <path d="M96 210H170" stroke={C.gold} strokeWidth="2" />
      {/* lone figure from behind */}
      <path d="M205 190l4-24h10l4 24Z" fill={C.red} />
      <path d="M208 166l1-6h9l1 6Z" fill={C.ivory} />
      <circle cx="214" cy="157" r="4.5" fill={C.char} />
      <path d="M208 153Q214 146 220 153Z" fill={C.char} />
    </Frame>
  );
}
