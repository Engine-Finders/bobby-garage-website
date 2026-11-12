import Icon from "../../ui/Icon";

export default function FaqCard({ item }) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-black/[0.06] border-l-[3px] border-l-brand bg-white/90 shadow-[0_12px_28px_rgba(13,15,18,0.08)] open:shadow-[0_16px_36px_rgba(13,15,18,0.12)]">
      <summary className="flex cursor-pointer list-none items-start gap-4 p-5 marker:content-none md:gap-5 md:p-6 [&::-webkit-details-marker]:hidden">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-linear-to-b from-white to-[#fff3ea] text-brand">
          <Icon name={item.icon} className="h-7 w-7" strokeWidth={1.6} />
        </span>
        <span className="hidden h-14 w-px shrink-0 bg-brand/25 md:block" aria-hidden="true" />
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="text-[16px] font-bold leading-snug text-ink md:text-[18px]">{item.question}</h3>
        </div>
        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/40 text-brand transition-transform duration-200 group-open:rotate-180">
          <Icon name="chevronDown" className="h-4 w-4" strokeWidth={2.4} />
        </span>
      </summary>
      <div className="border-t border-ink/5 px-5 pb-5 pt-4 md:px-6 md:pb-6">
        <p className="pl-0 text-[14px] leading-relaxed text-ink/75 md:pl-[5.75rem] md:text-[15px]">{item.answer}</p>
      </div>
    </details>
  );
}
