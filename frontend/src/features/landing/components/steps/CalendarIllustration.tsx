import type { SVGProps } from "react";

export function CalendarIllustration({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 420 360" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="so-paper" x1="130" y1="80" x2="310" y2="310" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF"/><stop offset="1" stopColor="#F7F5F2"/>
        </linearGradient>
        <linearGradient id="so-orange" x1="130" y1="70" x2="290" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7A1A"/><stop offset="1" stopColor="#FF6000"/>
        </linearGradient>
        <radialGradient id="so-glow">
          <stop stopColor="#FFE8D2" stopOpacity=".9"/><stop offset="1" stopColor="#FFF8ED" stopOpacity="0"/>
        </radialGradient>
        <filter id="so-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="9" stdDeviation="9" floodColor="#9E8C79" floodOpacity=".2"/>
        </filter>
      </defs>

      <ellipse cx="210" cy="190" rx="190" ry="155" fill="url(#so-glow)"/>
      <path d="M67 112L73 126L87 132L73 138L67 152L61 138L47 132L61 126L67 112Z" fill="#FFB800"/>
      <path d="M349 88L354 100L366 105L354 110L349 122L344 110L332 105L344 100L349 88Z" fill="#C084FC"/>
      <circle cx="45" cy="210" r="5" fill="#45C7C0"/>
      <circle cx="369" cy="190" r="6" fill="#FF6000"/>

      {/* calendar */}
      <g filter="url(#so-shadow)">
        <rect x="91" y="70" width="236" height="247" rx="23" fill="#E9E2D9"/>
        <rect x="86" y="61" width="236" height="247" rx="23" fill="url(#so-paper)"/>
        <path d="M86 85C86 72 97 61 110 61H298C311 61 322 72 322 85V112H86V85Z" fill="url(#so-orange)"/>
        <rect x="124" y="45" width="20" height="44" rx="10" fill="#273451"/>
        <rect x="263" y="45" width="20" height="44" rx="10" fill="#273451"/>

        {/* calendar cells */}
        <g>
          <rect x="111" y="137" width="35" height="31" rx="8" fill="#C084FC"/>
          <rect x="156" y="137" width="35" height="31" rx="8" fill="#F0F1F3"/>
          <rect x="201" y="137" width="35" height="31" rx="8" fill="#F0F1F3"/>
          <rect x="246" y="137" width="35" height="31" rx="8" fill="#F0F1F3"/>
          <rect x="111" y="178" width="35" height="31" rx="8" fill="#F0F1F3"/>
          <rect x="156" y="178" width="35" height="31" rx="8" fill="#F0F1F3"/>
          <rect x="201" y="178" width="35" height="31" rx="8" fill="#F0F1F3"/>
          <rect x="246" y="178" width="35" height="31" rx="8" fill="#F0F1F3"/>
          <rect x="111" y="219" width="35" height="31" rx="8" fill="#F0F1F3"/>
          <rect x="156" y="219" width="35" height="31" rx="8" fill="#F0F1F3"/>
          <rect x="201" y="219" width="35" height="31" rx="8" fill="#F0F1F3"/>
          <rect x="246" y="219" width="35" height="31" rx="8" fill="#45C7C0"/>
        </g>
      </g>

      {/* check bubble */}
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
          2
        </text>
      </g>

      <path d="M359 305L372 294" stroke="#FF6000" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="83" cy="180" r="5" fill="#C084FC"/>
    </svg>
  );
}