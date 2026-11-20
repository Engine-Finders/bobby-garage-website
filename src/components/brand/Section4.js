import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import SoftFadeHeading from "../ui/SoftFadeHeading";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";

export default function Section4({ data }) {
  const { capabilities, failures } = data;

  return (
    <>
      {/* Capabilities — soft-fade heading on mobile; diagonal image on desktop */}
      <section id={data.id} className="relative isolate overflow-hidden bg-primary-dark text-white">
        <SoftFadeHeading imageSrc={capabilities.bgImage.src} imageAlt={capabilities.bgImage.alt || ""} tone="dark">
          <SectionHeading eyebrow={capabilities.eyebrow} heading={capabilities.heading} tone="dark" size="brand" />
        </SoftFadeHeading>

        <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              src={capabilities.bgImage.src}
              alt=""
              fill
              sizes="50vw"
              quality={100}
              unoptimized
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary-dark/45 via-transparent to-transparent" />
          </div>
          <svg
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full text-brand"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d="M 22 0 L 0 100" stroke="currentColor" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="container-site relative z-10 py-5 md:py-6 lg:grid lg:min-h-[420px] lg:grid-cols-12 lg:items-center lg:py-9">
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="hidden lg:block">
              <SectionHeading eyebrow={capabilities.eyebrow} heading={capabilities.heading} tone="dark" size="brand" />
            </div>

            <ul className="mt-1 space-y-2.5 lg:mt-6 md:mt-7">
              {capabilities.items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-white/12 bg-white/[0.04] px-3 py-3 sm:px-4 sm:py-3.5 md:px-5 md:py-4"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand sm:h-12 sm:w-12">
                      <Icon name={item.icon} className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="min-w-0 pt-1.5 text-[14.5px] font-bold leading-snug text-white sm:pt-2 sm:text-[16px] md:text-[17px]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/70 sm:mt-2.5 sm:text-[13.5px] md:text-[14.5px]">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Failures */}
      <section className="bg-[#f6f2ed] py-7 text-ink md:py-8 lg:py-9">
        <div className="container-site">
          <SectionHeading
            eyebrow={failures.eyebrow}
            heading={failures.heading}
            intro={failures.intro}
            size="brand"
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

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#e4ddd4] bg-[#ece7e0] px-4 py-4 md:mt-7 md:px-6 md:py-5">
            <span className="float-left mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark text-brand md:mr-4">
              <Icon name="info" className="h-5 w-5" strokeWidth={2} />
            </span>
            <p className="text-[14px] leading-relaxed text-ink/80 md:text-[15px]">
              <HighlightText content={failures.callout} highlightClassName="font-bold text-ink" />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
