export default function BXIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="19" fill="#1B3D8F" />
      {/* Flame — outer */}
      <path
        d="M20 4C17 9 13.5 14.5 16.5 18.5C15 16 14 18.5 16 21C15 18.5 18.5 17 19 14C19.5 17.5 22 18.5 21 21C23.5 17.5 23 13.5 20 4Z"
        fill="#F5A020"
      />
      {/* Flame — inner highlight */}
      <path
        d="M20 8C18.5 11 18 14 20 16.5C22 14 21.5 11 20 8Z"
        fill="#FFE066"
      />
      {/* Bun top half */}
      <ellipse cx="20" cy="28" rx="11" ry="4.5" fill="#1E4FCC" />
      {/* Patty strip */}
      <rect x="9" y="27" width="22" height="3" rx="1.5" fill="#7B4A20" opacity="0.4" />
      {/* Bun bottom half */}
      <ellipse cx="20" cy="33" rx="11" ry="3.5" fill="#0d2d75" />
    </svg>
  );
}
