import { useId, type SVGProps } from "react";

type MascotProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  /** Width in px. Height follows the 120:128 ratio. */
  size?: number;
  /** Accessible label. Pass "" to hide the mascot from screen readers. */
  title?: string;
};

export default function Mascot({ size = 84, title = "Rivulet mascot", ...props }: MascotProps) {
  const gradId = useId(); // unique per instance, so several mascots can share a page

  return (
    <svg
      viewBox="0 0 120 128"
      width={size}
      height={(size * 128) / 120}
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFC93C" />
          <stop offset="0.35" stopColor="#FF8A3D" />
          <stop offset="0.7" stopColor="#F9605A" />
          <stop offset="1" stopColor="#E8407E" />
        </linearGradient>
      </defs>
      {/* body */}
      <path d="M60 8 C60 8 20 50 20 76 A40 40 0 0 0 100 76 C100 50 60 8 60 8 Z" fill={`url(#${gradId})`} />
      {/* highlight */}
      <ellipse cx="42" cy="62" rx="5" ry="9" transform="rotate(20 42 62)" fill="#FFFFFF" fillOpacity="0.45" />
      {/* eyes */}
      <circle cx="46" cy="80" r="7" fill="#FFFFFF" />
      <circle cx="74" cy="80" r="7" fill="#FFFFFF" />
      <circle cx="47.5" cy="81" r="3.6" fill="#241A3A" />
      <circle cx="75.5" cy="81" r="3.6" fill="#241A3A" />
      {/* cheeks */}
      <ellipse cx="35" cy="92" rx="6" ry="4" fill="#FFFFFF" fillOpacity="0.3" />
      <ellipse cx="85" cy="92" rx="6" ry="4" fill="#FFFFFF" fillOpacity="0.3" />
      {/* smile */}
      <path d="M51 94 Q60 104 69 94" fill="none" stroke="#241A3A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
