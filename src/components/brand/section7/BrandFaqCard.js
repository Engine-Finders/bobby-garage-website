import Icon from "../../ui/Icon";

/** Brand FAQ accordion — question + chevron, closed by default. */
export default function BrandFaqCard({ item }) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-[#d9d2c8] border-b-[#cfc7bb] border-r-[#cfc7bb] bg-[#f7f3ee] shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
      <summary className="flex cursor-pointer list-none items-start gap-3 px-5 py-4 marker:content-none md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
        <h3 className="min-w-0 flex-1 text-[15px] font-bold leading-snug text-ink md:text-[16px]">{item.question}</h3>
        <Icon
          name="chevronDown"
          className="mt-0.5 h-4 w-4 shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
          strokeWidth={2.4}
        />
      </summary>
      <div className="border-t border-black/[0.06] px-5 pb-4 pt-3 md:px-6 md:pb-5">
        <p className="text-[14px] leading-relaxed text-ink/75 md:text-[15px]">{item.answer}</p>
      </div>
    </details>
  );
}
