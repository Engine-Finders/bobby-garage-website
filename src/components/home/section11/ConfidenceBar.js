import Icon from "../../ui/Icon";
import HighlightText from "../../ui/HighlightText";

export default function ConfidenceBar({ icon, title, text }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary-dark via-charcoal to-[#1c2026] px-5 py-5 text-white shadow-[0_16px_36px_rgba(13,15,18,0.22)] md:px-8 md:py-6 [clip-path:polygon(0_0,calc(100%-28px)_0,100%_100%,0_100%)] md:[clip-path:polygon(0_0,calc(100%-48px)_0,100%_100%,0_100%)]">
      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <Icon name={icon} className="h-12 w-12 shrink-0 text-brand md:h-14 md:w-14" strokeWidth={1.5} />
        <span className="hidden h-12 w-px shrink-0 bg-white/20 sm:block" aria-hidden="true" />
        <div>
          <p className="text-[22px] font-extrabold leading-tight md:text-[28px] lg:text-[30px]">
            <HighlightText content={title} />
          </p>
          <p className="mt-1.5 text-[14px] text-white/80 md:text-[15px]">{text}</p>
        </div>
      </div>
      <span className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-brand md:w-14" aria-hidden="true" />
    </div>
  );
}
