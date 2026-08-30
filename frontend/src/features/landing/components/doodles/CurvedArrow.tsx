export function CurvedArrow() {
  return (
    <svg
      viewBox="0 0 160 80"
      fill="none"
      className="w-32"
      aria-hidden="true"
    >
      <path
        d="M8 55C45 10 95 10 130 38"
        stroke="#ff6000"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength="1"
        className="animate-draw"
      />

      <path
        d="M116 25L132 38L112 43"
        stroke="#ff6000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        className="animate-draw"
      />
    </svg>
  );
}