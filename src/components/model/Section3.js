import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import Slashes from "../ui/Slashes";

export default function Section3({ data }) {
  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
      <div className="container-site relative z-10 py-6 md:py-7 lg:py-8">
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} headingClassName="max-w-[720px]" />

        {/* Combined table + diagonal-cut image (ref style) */}
        <div className="relative mt-4 overflow-hidden rounded-2xl border border-[#e0d8ce] lg:mt-5">
          {/* Table — reserves right space on desktop for the diagonal image */}
          <div className="overflow-x-auto lg:pr-[34%]">
            <table className="w-full min-w-[560px] border-collapse text-left text-[13px] sm:text-[14px]">
              <thead>
                <tr>
                  <th className="bg-[#2a241f] px-3 py-3 text-[11.5px] font-semibold tracking-wide text-white sm:px-4 sm:py-3.5 sm:text-[12.5px] md:px-5 md:text-[13px]">
                    {data.columns.generation}
                  </th>
                  <th className="bg-[#2a241f] px-3 py-3 text-[11.5px] font-semibold tracking-wide text-white sm:px-4 sm:py-3.5 sm:text-[12.5px] md:px-5 md:text-[13px]">
                    {data.columns.engines}
                  </th>
                  <th className="bg-brand px-3 py-3 text-[11.5px] font-semibold tracking-wide text-white sm:px-4 sm:py-3.5 sm:text-[12.5px] md:px-5 md:text-[13px]">
                    {data.columns.price}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row, i) => (
                  <tr key={row.generation} className={i % 2 === 0 ? "bg-[#f1ebe3]" : "bg-[#e7e0d6]"}>
                    <td className="border-t border-black/[0.05] px-3 py-2.5 font-semibold text-ink sm:px-4 sm:py-3.5 md:px-5 md:text-[14.5px]">
                      {row.generation}
                    </td>
                    <td className="border-t border-black/[0.05] px-3 py-2.5 text-[12.5px] leading-snug text-ink/75 sm:px-4 sm:py-3.5 sm:text-[13.5px] md:px-5">
                      {row.engines}
                    </td>
                    <td className="border-t border-black/[0.05] px-3 py-2.5 text-[12.5px] font-semibold leading-snug text-ink/85 sm:px-4 sm:py-3.5 sm:text-[13.5px] md:px-5">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Desktop: dual diagonal cut from middle (up + down into image, like ref) */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] lg:block" aria-hidden="true">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                /* Point sits mid-left into the table; arms go up/down into the image */
                clipPath: "polygon(26% 0, 100% 0, 100% 100%, 26% 100%, 4% 50%)",
              }}
            >
              <Image
                src={data.image.src}
                alt=""
                fill
                sizes="38vw"
                quality={100}
                unoptimized
                className="object-cover object-center"
              />
            </div>
            <svg
              className="absolute inset-0 z-[1] h-full w-full text-gold"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 26 0 L 4 50 L 26 100"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Mobile: image below table */}
          <div className="relative aspect-[16/10] overflow-hidden border-t border-[#e0d8ce] lg:hidden">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="100vw"
              quality={100}
              unoptimized
              className="object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 w-[4px] bg-gold" aria-hidden="true" />
          </div>
        </div>

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
