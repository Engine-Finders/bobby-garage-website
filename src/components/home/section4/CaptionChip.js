/** White caption chip with an orange slanted stripe on the left edge. */
export default function CaptionChip({ title, subtitle, className = "" }) {
  return (
    <div
      className={`absolute bottom-3 left-3 flex max-w-[calc(100%-1.5rem)] items-stretch overflow-hidden rounded-lg bg-white/95 shadow-[0_8px_20px_rgba(13,15,18,0.22)] backdrop-blur-sm sm:bottom-4 sm:left-4 ${className}`}
    >
      <span
        className="my-1.5 ml-2 block w-[5px] shrink-0 -skew-x-[18deg] rounded-[1px] bg-brand"
        aria-hidden="true"
      />
      <div className="px-3 py-2 sm:px-4 sm:py-2.5">
        <p className="text-[13px] font-bold leading-tight text-ink sm:text-sm">{title}</p>
        {subtitle && <p className="mt-0.5 text-[11px] leading-tight text-ink/70 sm:text-xs">{subtitle}</p>}
      </div>
    </div>
  );
}
