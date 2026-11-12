import HighlightText from "./HighlightText";
import Icon from "./Icon";

/**
 * Dark rounded information/warning bar with an orange icon and orange diagonal accents on the right.
 * `text` accepts the same shapes as <HighlightText />; use `paragraphs` (array of those) for multiple lines.
 */
export default function NoteBar({ icon = "info", text, paragraphs: paragraphsProp, className = "" }) {
  const paragraphs = paragraphsProp ?? [text];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-linear-to-r from-primary-dark via-charcoal to-[#23272e] px-5 py-5 text-white shadow-[0_16px_36px_rgba(13,15,18,0.22)] md:px-8 md:py-6 ${className}`}
    >
      <div className="relative z-10 flex items-start gap-4 md:items-center md:gap-6 md:pr-24">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center text-brand md:h-14 md:w-14">
          <Icon name={icon} className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.6} />
        </span>
        <span className="hidden h-12 w-px shrink-0 bg-white/15 md:block" aria-hidden="true" />
        <div className="space-y-1 text-[14px] leading-relaxed text-white/85 md:text-[15.5px]">
          {paragraphs.map((p, i) => (
            <p key={i}>
              <HighlightText content={p} highlightClassName="font-semibold text-brand" />
            </p>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-28 md:block" aria-hidden="true">
        <span className="absolute -top-4 right-14 h-[140%] w-[7px] rotate-[30deg] bg-brand" />
        <span className="absolute -top-4 right-6 h-[140%] w-[7px] rotate-[30deg] bg-brand/50" />
      </div>
    </div>
  );
}
