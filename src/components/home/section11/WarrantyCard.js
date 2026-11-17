import Link from "next/link";
import Eyebrow from "../../ui/Eyebrow";
import HighlightText from "../../ui/HighlightText";
import Icon from "../../ui/Icon";

export default function WarrantyCard({ data }) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-black/[0.06] bg-white/90 p-5 shadow-[0_20px_48px_rgba(13,15,18,0.10)] backdrop-blur-sm md:p-8">
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <h3 className="mt-2.5 text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink md:mt-3 md:text-[30px] lg:text-[32px] lg:whitespace-pre-line">
        <HighlightText content={data.heading} />
      </h3>

      <div className="mt-5 grid flex-1 grid-cols-2 gap-2.5 md:mt-7 md:gap-4">
        {data.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-black/[0.05] bg-[#f8f6f3] p-3 md:p-5"
          >
            <div className="flex items-center gap-2 md:block">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ffe8d9] text-brand md:h-auto md:w-auto md:bg-transparent md:p-0">
                <Icon name={card.icon} className="h-5 w-5 md:h-10 md:w-10" strokeWidth={1.6} />
              </span>
              <h4 className="text-[13px] font-extrabold leading-snug text-ink md:mt-3 md:text-[17px]">
                {card.title}
              </h4>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-ink/70 md:text-[14px]">{card.text}</p>
          </div>
        ))}
      </div>

      <Link
        href={data.cta.href}
        className="group mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-brand bg-white px-4 text-[14px] font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-[#fff7f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:mt-6 md:h-12 md:px-5 md:text-[15px]"
      >
        {data.cta.label.replace(/\.$/, "")}
        <Icon name="chevronRight" className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5" strokeWidth={2.4} />
      </Link>
    </article>
  );
}
