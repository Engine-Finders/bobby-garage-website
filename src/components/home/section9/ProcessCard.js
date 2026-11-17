import Icon from "../../ui/Icon";

export default function ProcessCard({ stage }) {
  return (
    <article className="group relative flex h-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white/90 shadow-[0_12px_28px_rgba(13,15,18,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(13,15,18,0.12)]">
      <div className="relative z-10 flex min-w-0 flex-1 flex-col p-3.5 pr-14 md:p-6 md:pr-6">
        <div className="flex items-start gap-2.5 md:gap-3">
          <span className="-ml-3.5 -mt-3.5 flex h-9 min-w-[2.75rem] items-center justify-center bg-primary-dark px-2.5 text-[13px] font-extrabold text-brand [clip-path:polygon(0_0,100%_0,calc(100%-10px)_100%,0_100%)] md:-ml-5 md:-mt-5 md:h-12 md:min-w-[3.5rem] md:px-3 md:text-base">
            {stage.number}
          </span>
          <h3 className="min-w-0 flex-1 pt-0.5 text-[15.5px] font-bold leading-snug text-ink md:text-[18px]">
            {stage.title}
          </h3>
        </div>
        <p className="mt-2.5 max-w-[18rem] text-[13.5px] leading-relaxed text-ink/75 md:mt-4 md:text-[15px] lg:pr-2">
          {stage.text}
        </p>
      </div>

      {/* Mobile: icon pinned top-right */}
      <div
        className="pointer-events-none absolute right-2.5 top-2.5 flex size-10 items-center justify-center rounded-xl bg-[#eceae6]/90 md:hidden"
        aria-hidden="true"
      >
        <Icon name={stage.icon} className="h-6 w-6 text-ink/55" strokeWidth={1.4} />
      </div>

      {/* Desktop / tablet: side panel icon */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] items-center justify-center bg-linear-to-l from-[#eceae6] via-[#f3f1ed]/80 to-transparent md:flex"
        aria-hidden="true"
      >
        <Icon name={stage.icon} className="h-11 w-11 text-ink/55 transition-colors group-hover:text-brand md:h-12 md:w-12" strokeWidth={1.4} />
      </div>
    </article>
  );
}
