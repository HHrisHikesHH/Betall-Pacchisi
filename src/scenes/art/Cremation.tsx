import { C, Frame, Stars } from './parts';

const flame = 'M0 0C-14-6-12-24-4-34-2-26 2-26 2-34 12-24 14-6 0 0Z';

/** Night at the cremation ground: a dhuni fire, a seated ascetic, a banyan and a river. */
export default function Cremation() {
  return (
    <Frame>
      <rect x="15" y="15" width="370" height="210" fill={C.deep} />
      <Stars
        pts={[
          [40, 34],
          [90, 52, 1],
          [150, 30],
          [230, 46, 1],
          [290, 30],
          [355, 60, 1],
          [60, 80, 1],
          [330, 100, 1],
        ]}
      />
      <circle cx="318" cy="48" r="16" fill={C.ivory} />
      <circle cx="326" cy="43" r="14" fill={C.deep} />
      {/* banyan */}
      <path d="M15 20H120Q130 70 100 95 60 110 15 100Z" fill="#17302a" />
      <path
        d="M30 20Q60 60 40 100M62 20Q92 70 70 108M96 24Q116 70 100 112"
        stroke="#17302a"
        strokeWidth="3"
        fill="none"
      />
      <path d="M20 22Q12 60 22 120M52 40V138M82 50V136M110 60V140" stroke={C.char} strokeWidth="2" opacity=".9" />
      {/* river and ground */}
      <rect x="15" y="142" width="370" height="26" fill={C.indigo} />
      <path d="M240 148h40M270 158h30M310 150h50M30 156h60" stroke={C.ivory} strokeWidth="1" opacity=".5" />
      <path d="M15 168Q120 158 220 170T385 166V225H15Z" fill={C.char} />
      <path d="M15 190Q120 182 220 192T385 188V225H15Z" fill="#1d1d22" />
      {/* distant steps and shrine */}
      <path d="M290 142V120h40v22Z" fill={C.char} />
      <path d="M284 120h52l-26-18Z" fill={C.red} />
      {/* fire glow */}
      <circle cx="200" cy="168" r="62" fill={C.red} opacity=".18" />
      <circle cx="200" cy="168" r="36" fill={C.gold} opacity=".18" />
      {/* logs and flames */}
      <path d="M170 190l60-10M170 180l60 10" stroke={C.char} strokeWidth="6" />
      <path d="M172 188l56-7" stroke="#4a3a2e" strokeWidth="3" />
      <g transform="translate(200 184)">
        <path d={flame} fill={C.red} transform="scale(1.7)" />
        <path d={flame} fill={C.gold} transform="scale(1.1)" />
        <path d={flame} fill={C.ivory} transform="scale(.5)" />
      </g>
      <g transform="translate(176 184) rotate(-18)">
        <path d={flame} fill={C.red} transform="scale(.7)" />
      </g>
      <g transform="translate(228 184) rotate(16)">
        <path d={flame} fill={C.red} transform="scale(.8)" />
      </g>
      <Stars
        pts={[
          [190, 118, 1.4],
          [216, 104, 1],
          [206, 92, 1.2],
          [180, 100, 1],
        ]}
        fill={C.gold}
      />
      {/* ascetic seated in profile, facing the fire */}
      <path d="M62 206h112" stroke={C.red} strokeWidth="4" />
      <path d="M70 204Q76 188 108 186 150 186 158 204Z" fill={C.ivory} />
      <path d="M92 192Q90 152 108 146 126 146 130 192Z" fill={C.gold} />
      <path d="M104 150Q114 160 124 150" stroke={C.red} strokeWidth="2" fill="none" />
      <path d="M124 160 148 180" stroke="#5a4030" strokeWidth="5" strokeLinecap="round" />
      <circle cx="113" cy="134" r="9" fill="#5a4030" />
      <path d="M103 132Q104 120 114 121 122 122 123 129 114 124 103 132Z" fill={C.char} />
      <circle cx="108" cy="117" r="6" fill={C.char} />
      <path d="M100 126Q112 114 124 126" stroke={C.ivory} strokeWidth="1.5" fill="none" />
      {/* clay pots */}
      <path d="M296 200q-8-16 6-22h10q14 6 6 22Z" fill={C.red} />
      <path d="M330 202q-6-12 4-16h8q10 4 4 16Z" fill="#8a3322" />
    </Frame>
  );
}
