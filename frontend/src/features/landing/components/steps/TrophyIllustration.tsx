import type { SVGProps } from "react";

export function TrophyIllustration({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 420 360" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="er-gold" x1="145" y1="90" x2="290" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD866"/><stop offset="1" stopColor="#FFB800"/>
        </linearGradient>
        <linearGradient id="er-purple" x1="300" y1="190" x2="365" y2="285" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B77BFF"/><stop offset="1" stopColor="#7C3AED"/>
        </linearGradient>
        <radialGradient id="er-glow">
          <stop stopColor="#FFE8D2" stopOpacity=".9"/><stop offset="1" stopColor="#FFF8ED" stopOpacity="0"/>
        </radialGradient>
        <filter id="er-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="9" stdDeviation="9" floodColor="#9E8C79" floodOpacity=".2"/>
        </filter>
      </defs>

      <ellipse cx="210" cy="190" rx="190" ry="155" fill="url(#er-glow)"/>

      <path d="M72 119L78 133L92 139L78 145L72 159L66 145L52 139L66 133L72 119Z" fill="#FFB800"/>
      <path d="M350 100L355 112L367 117L355 122L350 134L345 122L333 117L345 112L350 100Z" fill="#C084FC"/>
      <path d="M110 91L120 82" stroke="#FF6000" strokeWidth="8" strokeLinecap="round"/>
      <path d="M282 78L288 64" stroke="#45C7C0" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="51" cy="215" r="5" fill="#45C7C0"/>
      <circle cx="376" cy="205" r="6" fill="#FF6000"/>

      {/* trophy */}
      <g filter="url(#er-shadow)">
        {/* handles */}
        <path d="M151 134C116 130 108 151 116 178C122 199 139 207 158 202" stroke="#FFB800" strokeWidth="16" strokeLinecap="round"/>
        <path d="M289 134C324 130 332 151 324 178C318 199 301 207 282 202" stroke="#FFB800" strokeWidth="16" strokeLinecap="round"/>

        {/* bowl */}
        <path d="M139 106H301V157C301 215 270 246 220 246C170 246 139 215 139 157V106Z" fill="url(#er-gold)"/>
        <path d="M161 121V160C161 194 177 215 196 226" stroke="#FFE58A" strokeWidth="13" strokeLinecap="round" opacity=".8"/>

        {/* rim */}
        <rect x="130" y="94" width="180" height="32" rx="12" fill="#FFB800"/>
        <rect x="147" y="101" width="146" height="9" rx="4.5" fill="#FFE58A"/>

        {/* star */}
        <path d="M220 133L228 153L250 155L233 169L238 191L220 180L202 191L207 169L190 155L212 153L220 133Z" fill="#FFF2B8"/>

        {/* stem */}
        <rect x="204" y="240" width="32" height="50" rx="9" fill="#FFB800"/>
        <rect x="170" y="280" width="100" height="25" rx="10" fill="#273451"/>
        <rect x="187" y="273" width="66" height="18" rx="7" fill="#FFB800"/>
      </g>

      {/* points card */}
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
          3
        </text>
      </g>

      {/* celebratory heart */}
      <path d="M387 302C381 294 367 300 370 310L387 327L404 310C407 300 393 294 387 302Z" fill="#F472B6"/>
      <circle cx="92" cy="199" r="5" fill="#C084FC"/>
      <circle cx="337" cy="78" r="5" fill="#FFB800"/>
    </svg>
  );
}