/** Subtle orange curved line sweeping along the bottom edge of the section. */
export default function BottomCurve() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[90px] w-full md:h-[140px]"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="s6-curve" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#E85D26" stopOpacity="0" />
          <stop offset="0.25" stopColor="#E85D26" stopOpacity="0.55" />
          <stop offset="0.75" stopColor="#E85D26" stopOpacity="0.55" />
          <stop offset="1" stopColor="#E85D26" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 120 C 360 40, 1000 150, 1440 50" stroke="url(#s6-curve)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
