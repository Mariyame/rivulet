
type DropIconProps = {
  size?: number;
  className?: string;
};

export function DropIcon({
  size = 28,
  className,
}: DropIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 2 C14 2 3 13 3 20 A11 11 0 0 0 25 20 C25 13 14 2 14 2 Z"
        fill="#FFC93C"
      />
    </svg>
  );
}
