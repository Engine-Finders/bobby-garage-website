/** Check mark badge. `tone="brand"` = orange circle / dark check; `tone="dark"` = dark circle / orange check. */
export default function CheckBadge({ className = "", tone = "brand" }) {
  const dark = tone === "dark";
  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full md:h-9 md:w-9 ${
        dark
          ? "bg-primary-dark shadow-[0_4px_10px_rgba(13,15,18,0.28)]"
          : "bg-brand shadow-[0_4px_10px_rgba(232,93,38,0.35)]"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 md:h-[18px] md:w-[18px]"
        fill="none"
        stroke={dark ? "#E85D26" : "#0D0F12"}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}
