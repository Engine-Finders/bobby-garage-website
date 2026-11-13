import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import Slashes from "../ui/Slashes";

export default function Section3({ data }) {
  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
      <div className="container-site relative z-10 py-6 md:py-7 lg:py-8">
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} headingClassName="max-w-[720px]" />

        <div className="mt-4 grid grid-cols-1 items-stretch gap-4 lg:mt-5 lg:grid-cols-12 lg:gap-5">
          {/* Table */}
          <div className="overflow-hidden rounded-2xl border border-[#e0d8ce] lg:col-span-9">
            {/* Desktop */}
            <div className="hidden md:block">
              <table className="w-full border-collapse text-left text-[14px]">
                <thead>
                  <tr>
                    <th className="bg-[#2a241f] px-4 py-3.5 text-[12.5px] font-semibold tracking-wide text-white md:px-5 md:text-[13px]">
                      {data.columns.generation}
                    </th>
                    <th className="bg-[#2a241f] px-4 py-3.5 text-[12.5px] font-semibold tracking-wide text-white md:px-5 md:text-[13px]">
                      {data.columns.engines}
                    </th>
                    <th className="bg-brand px-4 py-3.5 text-[12.5px] font-semibold tracking-wide text-white md:px-5 md:text-[13px]">
                      {data.columns.price}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map((row, i) => (
                    <tr key={row.generation} className={i % 2 === 0 ? "bg-[#f1ebe3]" : "bg-[#e7e0d6]"}>
                      <td className="border-t border-black/[0.05] px-4 py-3.5 font-semibold text-ink md:px-5 md:text-[14.5px]">
                        {row.generation}
                      </td>
                      <td className="border-t border-black/[0.05] px-4 py-3.5 text-[13.5px] leading-snug text-ink/75 md:px-5">
                        {row.engines}
                      </td>
                      <td className="border-t border-black/[0.05] px-4 py-3.5 text-[13.5px] font-semibold leading-snug text-ink/85 md:px-5">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <ul className="divide-y divide-black/[0.06] md:hidden">
              <li className="bg-brand px-4 py-3 text-[12.5px] font-semibold text-white">{data.columns.price}</li>
              {data.rows.map((row, i) => (
                <li key={row.generation} className={`px-4 py-4 ${i % 2 === 0 ? "bg-[#f1ebe3]" : "bg-[#e7e0d6]"}`}>
                  <p className="text-[14px] font-bold text-ink">{row.generation}</p>
                  <p className="mt-1.5 text-[13px] leading-snug text-ink/70">
                    <span className="font-semibold text-ink/85">{data.columns.engines}: </span>
                    {row.engines}
                  </p>
                  <p className="mt-2 text-[13px] font-semibold text-brand">{row.price}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Engine image — no dark panel */}
          <div className="relative min-h-[220px] overflow-hidden rounded-2xl lg:col-span-3 lg:min-h-full">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Note */}
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#e4ddd4] bg-[#ece7e0] px-4 py-3.5 md:mt-5 md:items-center md:px-5 md:py-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-dark text-gold">
            <Icon name="info" className="h-5 w-5" strokeWidth={2} />
          </span>
          <p className="min-w-0 flex-1 text-[13.5px] leading-relaxed text-ink/80 md:text-[14.5px]">{data.note}</p>
          <span className="hidden shrink-0 self-center md:block" aria-hidden="true">
            <Slashes className="h-4 [&_span]:bg-gold" />
          </span>
        </div>
      </div>
    </section>
  );
}
