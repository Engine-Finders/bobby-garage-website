/** Solid orange circle with a dark check mark. */
export default function CheckBadge({ className = "" }) {
  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand shadow-[0_4px_10px_rgba(232,93,38,0.35)] md:h-9 md:w-9 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-[18px] md:w-[18px]" fill="none" stroke="#0D0F12" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}
