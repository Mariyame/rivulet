import type { SVGProps } from "react";

type QuoteWaveProps = SVGProps<SVGSVGElement> & {
  color?: string;
  strokeWidth?: number;
};

export function AnimatedWave({
  color = "#F9605A",
  strokeWidth = 3,
  width = 200,
  height = 14,
  ...props
}: QuoteWaveProps) {


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 14"
      width={width}
      height={height}
      preserveAspectRatio="none"
      fill="none"
      overflow="visible"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M0 7 Q12.5 -1 25 7 T50 7 T75 7 T100 7 T125 7 T150 7 T175 7 T200 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
