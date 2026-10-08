import type { SVGProps } from "react";

export function ClipboardIllustration({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 420 360" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="ct-paper" x1="120" y1="70" x2="310" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF" /><stop offset="1" stopColor="#F7F5F2" />
        </linearGradient>
        <linearGradient id="ct-orange" x1="140" y1="70" x2="180" y2="120">
          <stop stopColor="#FF7A1A" /><stop offset="1" stopColor="#FF6000" />
        </linearGradient>
        <radialGradient id="ct-glow">
          <stop stopColor="#FFE8D2" stopOpacity=".9" /><stop offset="1" stopColor="#FFF8ED" stopOpacity="0" />
        </radialGradient>
        <filter id="ct-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="9" stdDeviation="9" floodColor="#9E8C79" floodOpacity=".2"/>
        </filter>
      </defs>

      <ellipse cx="205" cy="185" rx="185" ry="155" fill="url(#ct-glow)"/>

      <path d="M54 116L60 130L74 136L60 142L54 156L48 142L34 136L48 130L54 116Z" fill="#FFB800"/>
      <path d="M345 89L350 101L362 106L350 111L345 123L340 111L328 106L340 101L345 89Z" fill="#C084FC"/>
      <circle cx="42" cy="198" r="5" fill="#45C7C0"/>
      <circle cx="365" cy="168" r="6" fill="#FF6000"/>
      <circle cx="88" cy="281" r="5" fill="#C084FC"/>

      {/* clipboard */}
      <g filter="url(#ct-shadow)">
        <rect x="91" y="70" width="190" height="245" rx="20" transform="rotate(-2 91 70)" fill="#EAE4DC"/>
        <rect x="86" y="63" width="190" height="245" rx="20" transform="rotate(-2 86 63)" fill="url(#ct-paper)"/>
        <rect x="113" y="47" width="136" height="42" rx="12" fill="url(#ct-orange)"/>
        <rect x="159" y="34" width="44" height="27" rx="13.5" fill="#FF8A3D"/>
        <rect x="167" y="40" width="28" height="13" rx="6.5" fill="#FFD0A9"/>

        {/* checklist */}
        <rect x="116" y="105" width="28" height="28" rx="8" fill="#FF6000"/>
        <path d="M123 119L129 125L138 112" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="157" y="110" width="82" height="9" rx="4.5" fill="#DCE0E5"/>
        <rect x="157" y="125" width="57" height="6" rx="3" fill="#ECEEF1"/>

        <rect x="116" y="151" width="28" height="28" rx="8" fill="#FF6000"/>
        <path d="M123 165L129 171L138 158" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="157" y="156" width="88" height="9" rx="4.5" fill="#DCE0E5"/>
        <rect x="157" y="171" width="63" height="6" rx="3" fill="#ECEEF1"/>

        <rect x="116" y="197" width="28" height="28" rx="8" fill="#FF6000"/>
        <path d="M123 211L129 217L138 204" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="157" y="202" width="78" height="9" rx="4.5" fill="#DCE0E5"/>
        <rect x="157" y="217" width="53" height="6" rx="3" fill="#ECEEF1"/>

        <rect x="116" y="243" width="28" height="28" rx="8" fill="#FF6000"/>
        <path d="M123 257L129 263L138 250" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="157" y="248" width="84" height="9" rx="4.5" fill="#DCE0E5"/>
        <rect x="157" y="263" width="59" height="6" rx="3" fill="#ECEEF1"/>
      </g>

      {/* floating mini checklist */}
      <g transform="translate(28 250)" filter="url(#ct-shadow)">
        <rect width="83" height="83" rx="100" fill="#ff6000"/>
          <text
            x="40"
            y="41"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="45"
            fontWeight="700"
          >
            1
          </text>
      </g>
      {/* <g transform="translate(150 -60)" filter="url(#ct-shadow)">
        <rect width="60" height="60" rx="80" fill="#ff6000"/>
          <text
            x="30"
            y="31"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="45"
            fontWeight="700"
          >
            1
          </text>
      </g> */}
    </svg>
  );
}