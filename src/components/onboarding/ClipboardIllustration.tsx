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
        <linearGradient id="ct-pencil" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FFD866" /><stop offset="1" stopColor="#FFB800" />
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

      {/* pencil */}
      <g transform="translate(269 185) rotate(28)" filter="url(#ct-shadow)">
        <path d="M0 24H30V124H0V24Z" fill="url(#ct-pencil)"/>
        <rect x="0" y="24" width="30" height="10" fill="#FFB800"/>
        <path d="M0 24V13C0 7 5 3 10 3H20C25 3 30 7 30 13V24H0Z" fill="#F47F92"/>
        <rect x="0" y="34" width="30" height="8" fill="#D8AAB2"/>
        <path d="M0 124L15 149L30 124H0Z" fill="#E6C5A4"/>
        <path d="M11 141L15 149L19 141" fill="#273451"/>
        <rect x="6" y="39" width="6" height="76" rx="3" fill="#FFE79A" opacity=".8"/>
      </g>

      {/* floating mini checklist */}
      <g transform="translate(48 237) rotate(-7)" filter="url(#ct-shadow)">
        <rect width="83" height="62" rx="15" fill="white"/>
        <circle cx="22" cy="23" r="11" fill="#45C7C0"/>
        <path d="M16 23L21 28L29 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="42" y="18" width="27" height="7" rx="3.5" fill="#DDE2E8"/>
        <rect x="42" y="31" width="20" height="6" rx="3" fill="#EEF0F3"/>
        <circle cx="22" cy="47" r="7" fill="#FFF0E5"/>
        <path d="M19 47L21 49L25 44" stroke="#FF6000" strokeWidth="2.5" strokeLinecap="round"/>
      </g>

      {/* smile badge */}
      <g transform="translate(300 277)" filter="url(#ct-shadow)">
        <circle cx="31" cy="31" r="31" fill="#FFB800"/>
        <circle cx="21" cy="26" r="4" fill="#273451"/>
        <circle cx="41" cy="26" r="4" fill="#273451"/>
        <path d="M19 39C25 46 37 46 43 39" stroke="#273451" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="12" cy="35" r="5" fill="#FF8A8A" opacity=".5"/>
        <circle cx="50" cy="35" r="5" fill="#FF8A8A" opacity=".5"/>
      </g>
    </svg>
  );
}