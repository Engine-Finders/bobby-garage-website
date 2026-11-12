import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";

function CostTable({ columns, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand/55 bg-charcoal/40 shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[700px] border-collapse text-left text-[14px]">
          <thead>
            <tr className="bg-[#1a1e24] text-white">
              <th className="px-5 py-3.5 text-[13px] font-semibold tracking-wide md:px-6">{columns.application}</th>
              <th className="w-[18%] px-4 py-3.5 text-[13px] font-semibold tracking-wide">{columns.guide}</th>
              <th className="px-5 py-3.5 text-[13px] font-semibold tracking-wide md:px-6">{columns.relates}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.code} className={i % 2 === 0 ? "bg-[#f7f4f0]" : "bg-white"}>
                <th scope="row" className="border-t border-black/[0.06] px-5 py-3 font-normal text-ink md:px-6">
                  <span className="flex items-center gap-3">
                    <span className="relative h-11 w-14 shrink-0 overflow-hidden rounded-md bg-charcoal">
                      <Image src={row.image.src} alt={row.image.alt || ""} fill sizes="56px" className="object-cover" />
                    </span>
                    <span>
                      <span className="block text-[16px] font-extrabold text-brand">{row.code}</span>
                      <span className="block text-[13px] font-medium text-ink/70">{row.type}</span>
                    </span>
                  </span>
                </th>
                <td className="border-t border-black/[0.06] px-4 py-3">
                  <span className="inline-flex rounded-md border border-brand/35 bg-[#ffe8db] px-3 py-1.5 text-[13px] font-bold text-brand">
                    {row.guide}
                  </span>
                </td>
                <td className="border-t border-black/[0.06] px-5 py-3 text-[13.5px] leading-snug text-ink/75 md:px-6">
                  {row.relates}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="divide-y divide-black/[0.06] md:hidden">
        {rows.map((row) => (
          <li key={row.code} className="bg-[#f7f4f0] px-4 py-4">
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-14 shrink-0 overflow-hidden rounded-md bg-charcoal">
                <Image src={row.image.src} alt={row.image.alt || ""} fill sizes="56px" className="object-cover" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[16px] font-extrabold text-brand">{row.code}</p>
                <p className="text-[13px] text-ink/70">{row.type}</p>
              </div>
              <span className="shrink-0 rounded-md border border-brand/35 bg-[#ffe8db] px-2.5 py-1 text-[12px] font-bold text-brand">
                {row.guide}
              </span>
            </div>
            <p className="mt-3 text-[13px] leading-snug text-ink/75">{row.relates}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Section3({ data }) {
  const { approach, costs } = data;

  return (
    <>
      {/* Approach — diagonal full-height image */}
      <section id={data.id} className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
        <div
          className="absolute inset-y-0 right-0 hidden w-[48%] lg:block"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        >
          <Image
            src={approach.image.src}
            alt=""
            fill
            sizes="48vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-y-0 left-[12%] w-[5px] -skew-x-[14deg] bg-brand"
            aria-hidden="true"
          />
        </div>

        <div className="container-site relative z-10 grid grid-cols-1 gap-8 py-10 md:py-12 lg:min-h-[480px] lg:grid-cols-12 lg:items-center lg:py-14">
          <div className="lg:col-span-6 xl:col-span-6">
            <SectionHeading
              eyebrow={approach.eyebrow}
              heading={approach.heading}
              intro={approach.paragraphs}
              introClassName="max-w-[560px]"
            />
            {approach.quote && (
              <p className="mt-5 max-w-[560px] border-l-[3px] border-brand pl-4 text-[15px] leading-relaxed text-ink/80 md:text-base">
                {approach.quote}
              </p>
            )}
            {approach.closing && (
              <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-ink/75 md:text-base">
                {approach.closing}
              </p>
            )}
          </div>

          <div className="relative -mx-4 aspect-[16/10] overflow-hidden sm:aspect-[16/9] md:-mx-6 lg:hidden">
            <Image
              src={approach.image.src}
              alt={approach.image.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Costs */}
      <section id={costs.id} className="relative overflow-hidden bg-primary-dark py-10 text-white md:py-12 lg:py-14">
        <div className="container-site relative z-10">
          <SectionHeading
            eyebrow={costs.eyebrow}
            heading={costs.heading}
            intro={costs.intro}
            tone="dark"
            headingClassName="max-w-[920px]"
            introClassName="max-w-[760px] text-white/70"
          />

          <div className="mt-6 space-y-3 md:mt-7">
            {costs.tables.map((rows, i) => (
              <CostTable key={i} columns={costs.tableColumns} rows={rows} />
            ))}
          </div>

          <p className="mt-6 max-w-[920px] border-l-[3px] border-brand pl-4 text-[14px] leading-relaxed text-white/75 md:text-[15px]">
            {costs.note}
          </p>

          <Link
            href={costs.ctaStrip.href}
            className="group mt-7 flex flex-col gap-4 rounded-2xl bg-linear-to-r from-[#f06b30] to-brand px-5 py-4 text-white shadow-[0_14px_36px_rgba(232,93,38,0.35)] transition-transform hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5"
          >
            <span className="flex items-center gap-3 sm:gap-4">
              <Icon name="mail" className="h-6 w-6 shrink-0" strokeWidth={2} />
              <span className="text-[16px] font-extrabold sm:text-[17px]">{costs.ctaStrip.label}</span>
            </span>
            <span className="hidden h-8 w-px shrink-0 bg-white/35 sm:block" aria-hidden="true" />
            <span className="flex-1 text-[13.5px] leading-snug text-white/90 sm:text-[14.5px]">
              {costs.ctaStrip.hint}
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-md transition-transform group-hover:translate-x-0.5">
              <Icon name="arrowRight" className="h-5 w-5" strokeWidth={2.4} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
