import Icon from "../../ui/Icon";

export default function FaqCard({ item }) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-black/[0.06] border-l-[3px] border-l-brand bg-white/90 shadow-[0_10px_22px_rgba(13,15,18,0.07)] open:shadow-[0_14px_30px_rgba(13,15,18,0.11)]">
      <summary className="flex cursor-pointer list-none items-start gap-3 p-3.5 marker:content-none md:gap-5 md:p-6 [&::-webkit-details-marker]:hidden">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-linear-to-b from-white to-[#fff3ea] text-brand md:h-14 md:w-14">
          <Icon name={item.icon} className="h-5 w-5 md:h-7 md:w-7" strokeWidth={1.6} />
        </span>
        <span className="hidden h-14 w-px shrink-0 bg-brand/25 md:block" aria-hidden="true" />
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="text-[14.5px] font-bold leading-snug text-ink md:text-[18px]">{item.question}</h3>
        </div>
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand/40 text-brand transition-transform duration-200 group-open:rotate-180 md:mt-1 md:h-8 md:w-8">
          <Icon name="chevronDown" className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2.4} />
        </span>
      </summary>
      <div className="border-t border-ink/5 px-3.5 pb-3.5 pt-3 md:px-6 md:pb-6 md:pt-4">
        <p className="pl-0 text-[13.5px] leading-relaxed text-ink/75 md:pl-[5.75rem] md:text-[15px]">{item.answer}</p>
      </div>
    </details>
  );
}
