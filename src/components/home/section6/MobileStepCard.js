import IconBadge from "../../ui/IconBadge";

export default function MobileStepCard({ step, stepLabel }) {
  const highlighted = Boolean(step.highlight);

  return (
    <article
      className={`rounded-[22px] p-4 shadow-[0_14px_32px_rgba(13,15,18,0.10)] ${
        highlighted
          ? "border-2 border-brand bg-[#fff7f2]"
          : "border border-white bg-white/90"
      }`}
    >
      <div className="flex items-start gap-3.5">
        <IconBadge
          icon={step.icon}
          shape="circle"
          size="md"
          variant="white"
          className="shrink-0 shadow-[0_10px_22px_rgba(13,15,18,0.12)] ring-4 ring-white/80"
        />

        <div className="min-w-0 flex-1 pt-0.5">
          <span
            className={`inline-flex rounded-md px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white ${
              highlighted ? "bg-brand" : "bg-charcoal"
            }`}
          >
            {stepLabel} {step.number}
          </span>
          <h3 className="mt-2 text-[17px] font-extrabold leading-snug text-ink">{step.title}</h3>
        </div>
      </div>

      <p className="mt-3 text-[13.5px] leading-relaxed text-ink/70">{step.text}</p>
    </article>
  );
}
