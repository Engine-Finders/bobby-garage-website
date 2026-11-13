import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";

function DiagonalRibbon({ text, className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute -right-8 top-8 z-20 hidden w-[220%] origin-top-right rotate-[-28deg] bg-brand py-2.5 text-center shadow-[0_8px_20px_rgba(232,93,38,0.35)] lg:block ${className}`}
      aria-hidden="true"
    >
      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white">{text}</p>
    </div>
  );
}

export default function Section4({ data }) {
  return (
    <section id={data.id} className="bg-[#f6f2ed] text-ink">
      {/* Pricing + image */}
      <div className="container-site py-6 md:py-7 lg:py-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={data.eyebrow}
              heading={data.heading}
              intro={data.intro}
              headingClassName="max-w-[560px]"
              introClassName="max-w-[560px]"
            />

            <div className="mt-4 overflow-hidden rounded-2xl border border-[#e0d8ce] md:mt-5">
              {/* Desktop table */}
              <div className="hidden md:block">
                <table className="w-full border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="bg-[#2a241f] text-white">
                      <th className="px-4 py-3.5 text-[12.5px] font-semibold tracking-wide md:px-5 md:text-[13px]">
                        <span className="inline-flex items-center gap-2">
                          <Icon name="engine" className="h-4 w-4 text-brand" strokeWidth={1.8} />
                          {data.columns.engine}
                        </span>
                      </th>
                      <th className="w-[22%] px-4 py-3.5 text-[12.5px] font-semibold tracking-wide md:text-[13px]">
                        <span className="inline-flex items-center gap-2">
                          <Icon name="coins" className="h-4 w-4 text-brand" strokeWidth={1.8} />
                          {data.columns.guide}
                        </span>
                      </th>
                      <th className="px-4 py-3.5 text-[12.5px] font-semibold tracking-wide md:px-5 md:text-[13px]">
                        <span className="inline-flex items-center gap-2">
                          <Icon name="search" className="h-4 w-4 text-brand" strokeWidth={1.8} />
                          {data.columns.enquiry}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.rows.map((row, i) => (
                      <tr key={row.engine} className={i % 2 === 0 ? "bg-white" : "bg-[#f1ebe3]"}>
                        <td className="border-t border-black/[0.05] px-4 py-3.5 font-semibold text-ink md:px-5">
                          {row.engine}
                        </td>
                        <td className="border-t border-black/[0.05] px-4 py-3.5">
                          <span className="inline-flex rounded-md border border-brand/30 bg-[#fff3ea] px-2.5 py-1 text-[13px] font-bold text-brand">
                            {row.guide}
                          </span>
                        </td>
                        <td className="border-t border-black/[0.05] px-4 py-3.5 text-[13.5px] leading-snug text-ink/75 md:px-5">
                          {row.enquiry}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile */}
              <ul className="divide-y divide-black/[0.06] md:hidden">
                {data.rows.map((row, i) => (
                  <li key={row.engine} className={`px-4 py-4 ${i % 2 === 0 ? "bg-white" : "bg-[#f1ebe3]"}`}>
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[14px] font-bold text-ink">{row.engine}</p>
                      <span className="shrink-0 rounded-md border border-brand/30 bg-[#fff3ea] px-2 py-1 text-[12px] font-bold text-brand">
                        {row.guide}
                      </span>
                    </div>
                    <p className="mt-2 text-[13px] leading-snug text-ink/70">{row.enquiry}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl bg-[#ebe6df] lg:min-h-[420px]">
              <div className="relative aspect-[4/5] lg:absolute lg:inset-0 lg:aspect-auto">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/80 via-primary-dark/20 to-transparent" />
              </div>

              <DiagonalRibbon text={data.ribbon} />

              <div className="relative z-10 m-4 rounded-xl border border-white/10 bg-primary-dark/85 p-4 backdrop-blur-md md:m-5 md:p-5 lg:absolute lg:inset-x-5 lg:bottom-5 lg:m-0">
                <p className="text-[14px] font-bold text-white md:text-[15px]">{data.included.title}</p>
                <ul className="mt-3 space-y-2.5">
                  {data.included.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3 text-[13px] text-white/85 md:text-[13.5px]">
                      <Icon name={item.icon} className="h-5 w-5 shrink-0 text-brand" strokeWidth={1.7} />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes + CTA */}
      <div className="border-y border-[#e4ddd4] bg-[#efeae3]">
        <div className="container-site grid grid-cols-1 gap-4 py-5 md:grid-cols-3 md:gap-4 md:py-6 lg:gap-6">
          {data.notes.map((note) => (
            <div key={note.title} className="flex gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-dark text-brand">
                <Icon name={note.icon} className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold text-ink md:text-[16px]">{note.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/75 md:text-[14px]">{note.text}</p>
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-center rounded-2xl bg-linear-to-b from-[#f06b30] to-brand p-5 text-white shadow-[0_14px_32px_rgba(232,93,38,0.3)] md:p-6">
            <Link
              href={data.cta.href}
              className="group inline-flex items-center gap-3 text-[16px] font-extrabold md:text-[17px]"
            >
              <Icon name={data.cta.icon || "mail"} className="h-5 w-5" strokeWidth={2} />
              <span>{data.cta.label}</span>
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.4}
              />
            </Link>
            <p className="mt-3 text-[13px] leading-snug text-white/90">{data.cta.hint}</p>
          </div>
        </div>
      </div>

      {/* Other factors — full-width short box, text left / image right flush */}
      <div className="container-site pb-6 md:pb-7 lg:pb-8">
        <div className="relative isolate overflow-hidden rounded-2xl border border-[#e4ddd4] bg-[#f9f7f2] shadow-[0_10px_28px_rgba(13,15,18,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-5 md:p-6 lg:pr-8">
              <h2 className="max-w-xl text-[18px] font-extrabold leading-snug tracking-[-0.02em] text-ink md:text-[20px]">
                <HighlightText content={data.factors.heading} />
              </h2>
              <span className="mt-2.5 block h-[3px] w-10 rounded-full bg-brand" aria-hidden="true" />
              <div className="mt-2.5 max-w-xl space-y-2 text-[13px] leading-relaxed text-ink/75 md:text-[13.5px]">
                {data.factors.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="relative min-h-[180px] overflow-hidden lg:min-h-[200px]">
              {/* Same diagonal + orange edge as section 2 header */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <Image
                  src={data.factors.image.src}
                  alt={data.factors.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <svg
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 150 0 L 0 1000"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="text-brand"
                />
              </svg>
              <div className="absolute inset-y-0 left-0 w-[3px] bg-brand lg:hidden" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
