import Icon from "../../ui/Icon";

export default function ProcessBar({ icon, title, text }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary-dark via-charcoal to-[#23272e] px-5 py-5 text-white shadow-[0_16px_36px_rgba(13,15,18,0.22)] md:px-8 md:py-6">
      <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-6 md:pr-24">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand md:h-14 md:w-14">
          <Icon name={icon} className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.6} />
        </span>
        <span className="hidden h-10 w-px shrink-0 bg-white/15 md:block" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-[18px] font-bold leading-snug md:text-[22px]">{title}</p>
          <p className="mt-1.5 text-[14px] leading-relaxed text-white/80 md:text-[15px]">{text}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-28 md:block" aria-hidden="true">
        <span className="absolute -top-4 right-14 h-[140%] w-[7px] rotate-[30deg] bg-brand" />
        <span className="absolute -top-4 right-6 h-[140%] w-[7px] rotate-[30deg] bg-brand/50" />
      </div>
    </div>
  );
}
