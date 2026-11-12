import Icon from "./Icon";

/**
 * Dark angled "tab" heading used above tables/lists (e.g. "What You Notice").
 * The right edge is cut diagonally with a thin orange line beyond it.
 */
export default function HeadingStrip({ icon, title, as: Tag = "h3", line = true, size = "md", className = "" }) {
  const big = size === "lg";
  return (
    <div className={`relative flex items-center ${className}`}>
      <div
        className={`relative z-10 flex items-center gap-3 bg-linear-to-r from-primary-dark to-charcoal text-white shadow-[0_10px_24px_rgba(13,15,18,0.18)] [clip-path:polygon(0_0,100%_0,calc(100%-22px)_100%,0_100%)] ${
          big ? "rounded-l-2xl py-4 pl-5 pr-12 md:py-5 md:pl-7 md:pr-16" : "rounded-l-xl py-3 pl-4 pr-10 md:py-3.5 md:pl-5 md:pr-14"
        }`}
      >
        {icon && (
          <Icon
            name={icon}
            className={`shrink-0 text-brand ${big ? "h-8 w-8 md:h-10 md:w-10" : "h-6 w-6 md:h-7 md:w-7"}`}
            strokeWidth={1.8}
          />
        )}
        <Tag className={`font-bold leading-tight ${big ? "text-[19px] md:text-[24px]" : "text-[17px] md:text-[20px]"}`}>
          {title}
        </Tag>
      </div>
      {line && <span className="-ml-3 h-px flex-1 bg-linear-to-r from-ink/25 to-transparent" aria-hidden="true" />}
    </div>
  );
}
