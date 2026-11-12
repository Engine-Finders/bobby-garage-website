import Image from "next/image";
import Eyebrow from "../../ui/Eyebrow";
import HighlightText from "../../ui/HighlightText";
import Icon from "../../ui/Icon";

export default function RemovalCard({ data }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-linear-to-br from-primary-dark via-charcoal to-[#1a1e24] text-white shadow-[0_20px_48px_rgba(13,15,18,0.28)]">
      <div className="relative z-10 flex flex-1 flex-col p-6 md:p-8 lg:max-w-[58%]">
        <Eyebrow tone="dark">{data.eyebrow}</Eyebrow>
        <h3 className="mt-3 text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em] md:text-[30px] lg:text-[32px] lg:whitespace-pre-line">
          <HighlightText content={data.heading} />
        </h3>

        <ul className="mt-7 divide-y divide-white/10">
          {data.points.map((point) => (
            <li key={point.text} className="flex items-center gap-3.5 py-3.5 text-[14px] font-medium text-white/90 md:text-[15px]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand/40 bg-brand/10 text-brand">
                <Icon name={point.icon} className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </span>
              {point.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-auto h-48 w-full sm:h-56 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[48%] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
        <Image src={data.image.src} alt={data.image.alt || ""} fill sizes="(max-width: 1024px) 100vw, 28vw" className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-primary-dark/50 to-transparent lg:bg-linear-to-r lg:from-primary-dark/40 lg:to-transparent" aria-hidden="true" />
        <span
          className="pointer-events-none absolute inset-y-0 left-[8%] hidden w-[8px] -skew-x-[18deg] bg-brand lg:block"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
