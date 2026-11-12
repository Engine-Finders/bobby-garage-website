import Icon from "../../ui/Icon";

export default function OptionCard({ option }) {
  const highlight = Boolean(option.highlight);

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-5 transition-transform hover:-translate-y-0.5 md:p-6 ${
        highlight
          ? "border-brand bg-primary-dark text-white shadow-[0_16px_36px_rgba(232,93,38,0.22)]"
          : "border-brand/30 bg-white text-ink shadow-[0_12px_28px_rgba(13,15,18,0.08)]"
      }`}
    >
      <Icon name={option.icon} className="h-9 w-9 text-brand md:h-10 md:w-10" strokeWidth={1.6} />
      <h4 className={`mt-4 text-[20px] font-extrabold md:text-[22px] ${highlight ? "text-white" : "text-ink"}`}>
        {option.title}
      </h4>
      <p className={`mt-2 text-[14px] leading-relaxed md:text-[15px] ${highlight ? "text-white/80" : "text-ink/75"}`}>
        {option.text}
      </p>
    </article>
  );
}
