import Icon from "../../ui/Icon";

/** Model FAQ accordion — orange left bar + circular chevron (ref style). */
export default function ModelFaqCard({ item, defaultOpen = false }) {
  return (
    <details
      className="group overflow-hidden rounded-2xl border border-[#e8e2d9] bg-white shadow-[0_8px_20px_rgba(13,15,18,0.06)]"
      {...(defaultOpen ? { defaultOpen: true } : {})}
    >
      <summary className="flex cursor-pointer list-none items-start gap-3 px-4 py-3.5 marker:content-none md:px-5 md:py-4 [&::-webkit-details-marker]:hidden">
        <span className="mt-1 h-5 w-[3px] shrink-0 rounded-full bg-brand" aria-hidden="true" />
        <h3 className="min-w-0 flex-1 text-[14.5px] font-bold leading-snug text-ink md:text-[15.5px]">
          {item.question}
        </h3>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff3ea] text-brand">
          <Icon
            name="chevronDown"
            className="h-3.5 w-3.5 transition-transform duration-200 group-open:rotate-180"
            strokeWidth={2.6}
          />
        </span>
      </summary>
      <div className="px-4 pb-4 pl-[calc(1rem+3px+0.75rem)] md:px-5 md:pb-4 md:pl-[calc(1.25rem+3px+0.75rem)]">
        <p className="text-[13.5px] leading-relaxed text-ink/75 md:text-[14.5px]">{item.answer}</p>
      </div>
    </details>
  );
}
