export function Underline() {
  return (
    <svg
      viewBox="0 0 220 25"
      fill="none"
      className="absolute -bottom-3 left-0 w-full"
      aria-hidden="true"
    >
      <path
        d="M4 14C48 5 90 20 130 11C160 5 185 8 216 4"
        stroke="#ff6000"
        strokeWidth="1"
        strokeLinecap="round"
        pathLength="1"
        className="animate-draw [stroke-dasharray:1]"
      />
    </svg>
  );
}