import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";

export default function Section4({ data }) {
  const { capabilities, failures } = data;

  return (
    <>
      {/* Capabilities — dark + diagonal image */}
      <section id={data.id} className="relative isolate overflow-hidden bg-primary-dark text-white">
        <div
          className="absolute inset-y-0 right-0 hidden w-[46%] lg:block"
          style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        >
          <Image src={capabilities.bgImage.src} alt="" fill sizes="46vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/50 via-transparent to-transparent" />
          <div className="absolute inset-y-0 left-[14%] w-[5px] -skew-x-[14deg] bg-brand" aria-hidden="true" />
        </div>

        <div className="container-site relative z-10 grid grid-cols-1 gap-8 py-10 md:py-12 lg:min-h-[520px] lg:grid-cols-12 lg:items-center lg:py-14">
          <div className="lg:col-span-7 xl:col-span-6">
            <SectionHeading eyebrow={capabilities.eyebrow} heading={capabilities.heading} tone="dark" />

            <ul className="mt-6 space-y-2.5 md:mt-7">
              {capabilities.items.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 md:px-5 md:py-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand">
                    <Icon name={item.icon} className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold leading-snug text-white md:text-[17px]">{item.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/70 md:text-[14.5px]">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative -mx-4 aspect-[16/10] overflow-hidden sm:aspect-[16/9] md:-mx-6 lg:hidden">
            <Image src={capabilities.bgImage.src} alt={capabilities.bgImage.alt || ""} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Failures */}
      <section className="bg-[#f6f2ed] py-10 text-ink md:py-12 lg:py-14">
        <div className="container-site">
          <SectionHeading
            eyebrow={failures.eyebrow}
            heading={failures.heading}
            intro={failures.intro}
            introClassName="max-w-[720px]"
          />

          <div className="mt-6 grid grid-cols-1 gap-5 lg:mt-7 lg:grid-cols-2 lg:gap-6">
            {failures.tables.map((table, ti) => (
              <div key={ti}>
                <div
                  className="mb-2 grid gap-2 overflow-hidden rounded-xl bg-[#2a241f] text-[12px] font-semibold text-white md:text-[13px]"
                  style={{ gridTemplateColumns: `repeat(${table.columns.length}, minmax(0, 1fr))` }}
                >
                  {table.columns.map((col) => (
                    <div key={col} className="px-3 py-2.5 md:px-4">
                      {col}
                    </div>
                  ))}
                </div>
                <ul className="space-y-1.5">
                  {table.rows.map((row, ri) => (
                    <li
                      key={ri}
                      className="grid gap-2 rounded-xl border border-[#e4ddd4] bg-[#f1ebe3] px-3 py-2.5 md:px-3.5"
                      style={{ gridTemplateColumns: `repeat(${table.columns.length}, minmax(0, 1fr))` }}
                    >
                      {row.cells.map((cell, ci) => (
                        <div key={ci} className="flex min-w-0 items-start gap-2">
                          {ci === 0 && (
                            <Icon name={row.icon} className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.8} />
                          )}
                          <p className={`text-[12.5px] leading-snug md:text-[13.5px] ${ci === 0 ? "font-semibold text-ink" : "text-ink/75"}`}>
                            {cell}
                          </p>
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-[#e4ddd4] bg-[#ece7e0] px-4 py-4 md:mt-7 md:px-6 md:py-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-dark text-brand">
              <Icon name="info" className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="hidden h-10 w-px shrink-0 bg-ink/20 md:block" aria-hidden="true" />
            <p className="text-[14px] leading-relaxed text-ink/80 md:text-[15px]">
              <HighlightText content={failures.callout} highlightClassName="font-bold text-ink" />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
