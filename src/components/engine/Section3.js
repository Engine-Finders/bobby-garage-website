import Image from "next/image";
import DiagonalSectionHeader from "../ui/DiagonalSectionHeader";
import SectionShell from "../ui/SectionShell";
import Eyebrow from "../ui/Eyebrow";
import Icon from "../ui/Icon";

const headerCell =
  "px-3 py-3.5 text-left text-[12.5px] font-semibold tracking-wide text-white sm:px-4 sm:text-[13px] lg:px-5 lg:text-[14px]";

function PriceBadge({ price, brand }) {
  if (brand) {
    return (
      <span className="inline-flex rounded-md border border-brand/35 bg-[#fff3ea] px-2.5 py-1 text-[12.5px] font-bold text-brand sm:px-3 sm:text-[13.5px]">
        {price}
      </span>
    );
  }
  return (
    <span className="text-[12.5px] font-bold leading-snug text-ink sm:text-[13.5px]">{price}</span>
  );
}

function ExplainCard({ card }) {
  return (
    <article className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-primary-dark text-white shadow-[0_14px_32px_rgba(13,15,18,0.22)]">
      <div className="absolute inset-y-0 right-0 hidden w-[42%] sm:block" aria-hidden="true">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <Image
            src={card.image.src}
            alt=""
            fill
            sizes="30vw"
            className="object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/70 via-primary-dark/25 to-transparent" />
        </div>
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-brand"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 22 0 L 0 100"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="relative z-10 p-4 sm:max-w-[62%] sm:p-5 md:p-6">
        <Eyebrow tone="dark">{card.eyebrow}</Eyebrow>
        <h3 className="mt-2.5 text-[18px] font-extrabold leading-snug tracking-[-0.02em] sm:text-[20px] md:text-[22px]">
          {card.heading}
        </h3>
        <span className="mt-2.5 block h-[3px] w-10 rounded-full bg-brand" aria-hidden="true" />
        <p className="mt-3 text-[13px] leading-relaxed text-white/75 sm:text-[14px]">{card.text}</p>
      </div>

      <div className="relative aspect-[16/9] sm:hidden">
        <Image
          src={card.image.src}
          alt={card.image.alt || ""}
          fill
          sizes="100vw"
          className="object-cover object-center grayscale"
        />
        <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
      </div>
    </article>
  );
}

export default function Section3({ data }) {
  return (
    <section id={data.id} className="relative">
      <DiagonalSectionHeader
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        imageSrc={data.image.src}
        imageAlt={data.image.alt || ""}
        size="brand"
        headingClassName="max-w-[720px]"
      />

      <SectionShell tone="light" padding="pt-3 pb-6 md:pt-4 md:pb-8 lg:pt-5 lg:pb-9">
        <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_12px_28px_rgba(13,15,18,0.08)]">
          {/* Desktop / tablet table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="bg-primary-dark">
                  <th scope="col" className={`${headerCell} w-[40%]`}>
                    <span className="inline-flex items-center gap-2">
                      <Icon name="cog" className="h-4 w-4 shrink-0 text-brand lg:h-5 lg:w-5" strokeWidth={1.7} />
                      {data.columns.work}
                    </span>
                  </th>
                  <th scope="col" className={`${headerCell} w-[22%]`}>
                    <span className="inline-flex items-center gap-2">
                      <Icon name="coins" className="h-4 w-4 shrink-0 text-brand lg:h-5 lg:w-5" strokeWidth={1.7} />
                      {data.columns.price}
                    </span>
                  </th>
                  <th scope="col" className={headerCell}>
                    <span className="inline-flex items-center gap-2">
                      <Icon name="clipboardCheck" className="h-4 w-4 shrink-0 text-brand lg:h-5 lg:w-5" strokeWidth={1.7} />
                      {data.columns.quote}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row, i) => (
                  <tr
                    key={row.work}
                    className={`transition-colors duration-150 hover:bg-[#fdf1e9] ${
                      i % 2 === 0 ? "bg-[#fcfaf7]" : "bg-[#f2ebe5]"
                    }`}
                  >
                    <th
                      scope="row"
                      className="border-t border-black/[0.05] px-3 py-3.5 font-normal sm:px-4 lg:px-5"
                    >
                      <span className="flex items-start gap-3">
                        <Icon
                          name={row.icon}
                          className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                          strokeWidth={1.6}
                        />
                        <span className="text-[13.5px] font-bold leading-snug text-ink sm:text-[14.5px]">
                          {row.work}
                        </span>
                      </span>
                    </th>
                    <td className="border-t border-black/[0.05] px-3 py-3.5 sm:px-4 lg:px-5">
                      <PriceBadge price={row.price} brand={row.priceTone === "brand"} />
                    </td>
                    <td className="border-t border-black/[0.05] px-3 py-3.5 text-[12.5px] leading-snug text-ink/70 sm:px-4 sm:text-[13.5px] lg:px-5">
                      {row.quote}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <ul className="divide-y divide-black/[0.06] md:hidden">
            {data.rows.map((row, i) => (
              <li
                key={row.work}
                className={`px-3.5 py-3.5 ${i % 2 === 0 ? "bg-[#fcfaf7]" : "bg-[#f2ebe5]"}`}
              >
                <div className="flex items-start gap-2.5">
                  <Icon name={row.icon} className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.6} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="text-[13.5px] font-extrabold leading-snug text-ink">{row.work}</p>
                      <PriceBadge price={row.price} brand={row.priceTone === "brand"} />
                    </div>
                    <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.04em] text-ink/45">
                      {data.columns.quote}
                    </p>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-ink/70">{row.quote}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {data.note && (
          <div className="mt-4 flex items-start gap-3.5 rounded-2xl border border-[#e8ddd2] bg-linear-to-r from-[#f6f4f0] to-[#f2e5da] px-4 py-3.5 sm:mt-5 sm:items-center sm:gap-5 sm:px-5 sm:py-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/35 bg-white text-brand sm:h-11 sm:w-11">
              <Icon name={data.note.icon || "info"} className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="hidden h-10 w-px shrink-0 bg-black/10 sm:block" aria-hidden="true" />
            <p className="min-w-0 text-[13px] leading-relaxed text-ink/75 sm:text-[14px] md:text-[14.5px]">
              {data.note.text}
            </p>
          </div>
        )}

        <div className="mt-4 grid grid-cols-1 gap-3.5 sm:mt-5 lg:mt-6 lg:grid-cols-2 lg:gap-5">
          {data.cards.map((card) => (
            <ExplainCard key={card.heading} card={card} />
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
