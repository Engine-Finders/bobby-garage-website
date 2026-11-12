import Icon from "../../ui/Icon";

/**
 * Small white circular chevron sitting on the gap between two cards.
 * Desktop: right of the card, centred in the 24px gutter. Below lg: under the card, pointing down.
 */
export default function StepConnector() {
  return (
    <span
      className="pointer-events-none absolute left-1/2 top-full z-10 mt-[22px] -translate-x-1/2 rotate-90 lg:left-[calc(100%+12px)] lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:rotate-0"
      aria-hidden="true"
    >
      <span className="absolute left-1/2 top-1/2 -z-10 h-px w-16 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-warm-border to-transparent" />
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-white text-brand shadow-[0_6px_16px_rgba(13,15,18,0.14)]">
        <Icon name="chevronRight" className="h-4 w-4" strokeWidth={2.5} />
      </span>
    </span>
  );
}
