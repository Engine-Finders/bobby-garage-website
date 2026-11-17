import Icon from "../../ui/Icon";

export default function ProcessBar({ icon, title, text }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary-dark via-charcoal to-[#23272e] px-5 py-5 text-white shadow-[0_16px_36px_rgba(13,15,18,0.22)] md:px-8 md:py-6">
      <div className="relative z-10 md:pr-24">
        {/* Mobile: title beside icon, description full-width left */}
        <div className="md:hidden">
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand">
              <Icon name={icon} className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <p className="min-w-0 flex-1 text-[16px] font-bold leading-snug">{title}</p>
          </div>
          <p className="mt-3 text-[13.5px] leading-relaxed text-white/80">{text}</p>
        </div>

        {/* Desktop / tablet */}
        <div className="hidden items-center gap-6 md:flex">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand">
            <Icon name={icon} className="h-8 w-8" strokeWidth={1.6} />
          </span>
          <span className="h-10 w-px shrink-0 bg-white/15" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[22px] font-bold leading-snug">{title}</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-white/80">{text}</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-28 md:block" aria-hidden="true">
        <span className="absolute -top-4 right-14 h-[140%] w-[7px] rotate-[30deg] bg-brand" />
        <span className="absolute -top-4 right-6 h-[140%] w-[7px] rotate-[30deg] bg-brand/50" />
      </div>
    </div>
  );
}
