import Icon from "../../ui/Icon";

export default function ProcessCard({ stage }) {
  return (
    <article className="group relative flex h-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white/90 shadow-[0_12px_28px_rgba(13,15,18,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(13,15,18,0.12)]">
      <div className="relative z-10 flex min-w-0 flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start gap-3">
          <span className="-ml-5 -mt-5 flex h-11 min-w-[3.25rem] items-center justify-center bg-primary-dark px-3 text-[15px] font-extrabold text-brand [clip-path:polygon(0_0,100%_0,calc(100%-10px)_100%,0_100%)] md:h-12 md:min-w-[3.5rem] md:text-base">
            {stage.number}
          </span>
          <h3 className="min-w-0 flex-1 pt-0.5 text-[17px] font-bold leading-snug text-ink md:text-[18px]">
            {stage.title}
          </h3>
        </div>
        <p className="mt-4 max-w-[18rem] text-[14px] leading-relaxed text-ink/75 md:text-[15px] lg:pr-2">
          {stage.text}
        </p>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 right-0 flex w-[38%] items-center justify-center bg-linear-to-l from-[#eceae6] via-[#f3f1ed]/80 to-transparent"
        aria-hidden="true"
      >
        <Icon name={stage.icon} className="h-11 w-11 text-ink/55 transition-colors group-hover:text-brand md:h-12 md:w-12" strokeWidth={1.4} />
      </div>
    </article>
  );
}
