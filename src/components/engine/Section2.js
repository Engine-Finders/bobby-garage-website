import Image from "next/image";
import DiagonalSectionHeader from "../ui/DiagonalSectionHeader";
import SectionShell from "../ui/SectionShell";
import Icon from "../ui/Icon";

const headerCell =
  "px-3 py-3.5 text-left text-[12.5px] font-semibold tracking-wide text-white sm:px-4 sm:text-[13px] lg:px-5 lg:text-[14px]";

function CoverageTable({ columns, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_12px_28px_rgba(13,15,18,0.08)]">
      {/* Desktop / tablet table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="bg-primary-dark">
              <th scope="col" className={`${headerCell} w-[34%]`}>
                <span className="inline-flex items-center gap-2">
                  <Icon name="car" className="h-4 w-4 shrink-0 text-brand lg:h-5 lg:w-5" strokeWidth={1.7} />
                  {columns.model}
                </span>
              </th>
              <th scope="col" className={`${headerCell} w-[28%]`}>
                <span className="inline-flex items-center gap-2">
                  <Icon name="layers" className="h-4 w-4 shrink-0 text-brand lg:h-5 lg:w-5" strokeWidth={1.7} />
                  {columns.generation}
                </span>
              </th>
              <th scope="col" className={headerCell}>
                <span className="inline-flex items-center gap-2">
                  <Icon name="cog" className="h-4 w-4 shrink-0 text-brand lg:h-5 lg:w-5" strokeWidth={1.7} />
                  {columns.confirm}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.model}
                className={`transition-colors duration-150 hover:bg-[#fdf1e9] ${
                  i % 2 === 0 ? "bg-[#fcfaf7]" : "bg-[#f2ebe5]"
                }`}
              >
                <th
                  scope="row"
                  className="border-t border-black/[0.05] px-3 py-3 font-normal sm:px-4 lg:px-5"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <span className="relative h-10 w-14 shrink-0 overflow-hidden rounded-md bg-[#e8e2da] sm:h-11 sm:w-16">
                      <Image
                        src={row.image.src}
                        alt={row.image.alt || ""}
                        fill
                        sizes="64px"
                        className="object-cover object-center"
                      />
                    </span>
                    <span className="text-[13.5px] font-bold leading-snug text-ink sm:text-[14.5px]">
                      {row.model}
                    </span>
                  </span>
                </th>
                <td className="border-t border-black/[0.05] px-3 py-3 text-[13px] font-semibold leading-snug text-ink/85 sm:px-4 sm:text-[14px] lg:px-5">
                  {row.generation}
                </td>
                <td className="border-t border-black/[0.05] px-3 py-3 text-[12.5px] leading-snug text-ink/70 sm:px-4 sm:text-[13.5px] lg:px-5">
                  {row.confirm}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="divide-y divide-black/[0.06] md:hidden">
        {rows.map((row, i) => (
          <li key={row.model} className={`px-3.5 py-3.5 ${i % 2 === 0 ? "bg-[#fcfaf7]" : "bg-[#f2ebe5]"}`}>
            <div className="flex items-start gap-3">
              <span className="relative mt-0.5 h-12 w-16 shrink-0 overflow-hidden rounded-md bg-[#e8e2da]">
                <Image
                  src={row.image.src}
                  alt={row.image.alt || ""}
                  fill
                  sizes="64px"
                  className="object-cover object-center"
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-extrabold leading-snug text-ink">{row.model}</p>
                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.04em] text-ink/45">
                  {columns.generation}
                </p>
                <p className="mt-0.5 text-[13px] font-semibold leading-snug text-ink/85">{row.generation}</p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.04em] text-ink/45">
                  {columns.confirm}
                </p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-ink/70">{row.confirm}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Section2({ data }) {
  return (
    <section id={data.id} className="relative">
      <DiagonalSectionHeader
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        imageSrc={data.image.src}
        imageAlt={data.image.alt || ""}
        size="brand"
        headingClassName="max-w-[640px]"
      />

      <SectionShell tone="light" padding="pt-3 pb-6 md:pt-4 md:pb-8 lg:pt-5 lg:pb-9">
        <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2 lg:gap-5">
          {data.tables.map((rows, i) => (
            <CoverageTable key={i} columns={data.columns} rows={rows} />
          ))}
        </div>

        {data.note && (
          <div className="mt-4 flex items-start gap-3.5 rounded-2xl border border-[#e8ddd2] bg-linear-to-r from-[#f6f4f0] to-[#f2e5da] px-4 py-3.5 sm:mt-5 sm:items-center sm:gap-5 sm:px-5 sm:py-4 md:mt-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/35 bg-white text-brand sm:h-11 sm:w-11">
              <Icon name={data.note.icon || "info"} className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="hidden h-10 w-px shrink-0 bg-black/10 sm:block" aria-hidden="true" />
            <p className="min-w-0 text-[13px] leading-relaxed text-ink/75 sm:text-[14px] md:text-[14.5px]">
              {data.note.text}
            </p>
          </div>
        )}
      </SectionShell>
    </section>
  );
}
