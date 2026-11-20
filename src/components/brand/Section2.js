import Image from "next/image";
import SectionShell from "../ui/SectionShell";
import DiagonalSectionHeader from "../ui/DiagonalSectionHeader";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";

export default function Section2({ data }) {
  return (
    <section id={data.id} className="relative">
      <DiagonalSectionHeader
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        imageSrc={data.headerImage}
        size="brand"
      />

      <SectionShell tone="light" padding="pt-2.5 pb-5 md:pt-3 md:pb-6 lg:pt-4 lg:pb-7">
        {/* Mobile: ~1px side margins (cancel 16px container pad). Desktop: normal container. */}
        <div className="-mx-[15px] space-y-3 px-px md:-mx-[23px] md:space-y-3.5 lg:mx-0 lg:px-0">
          {data.rows.map((row) => (
            <article
              key={row.models.join("-")}
              className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_10px_28px_rgba(13,15,18,0.07)] lg:grid lg:min-h-[200px] lg:grid-cols-12"
            >
              <div className="grid grid-cols-[148px_minmax(0,1fr)] sm:grid-cols-[168px_minmax(0,1fr)] lg:contents">
                {/* Image left of orange seam */}
                <div className="relative min-h-[112px] self-stretch border-r-[3px] border-brand sm:min-h-[140px] sm:border-r-[4px] lg:col-span-4 lg:min-h-0 lg:border-r-0">
                  <div className="absolute inset-0 overflow-hidden lg:[clip-path:polygon(0_0,100%_0,86%_100%,0_100%)]">
                    <Image
                      src={row.image.src}
                      alt={row.image.alt}
                      fill
                      sizes="(max-width: 1024px) 168px, 33vw"
                      className="object-contain object-center bg-white lg:bg-transparent lg:object-cover"
                    />
                  </div>
                  <svg
                    className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full text-brand lg:block"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 100 0 L 86 100"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                <div className="flex flex-col justify-center px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:col-span-5 lg:pr-4">
                  <h3 className="text-[15px] font-extrabold leading-snug text-ink sm:text-[18px] lg:text-[22px]">
                    <HighlightText content={row.title} />
                  </h3>
                  <div className="mt-1.5 space-y-1.5 text-[12.5px] leading-snug text-ink/75 sm:mt-2 sm:space-y-2 sm:text-[14px] sm:leading-relaxed lg:text-[15px]">
                    {row.paragraphs.map((p, i) => (
                      <p key={i} className={i > 0 ? "hidden sm:block" : undefined}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mx-3 mb-3 flex flex-col items-center justify-center rounded-xl border border-[#e4ddd4] bg-[#f4f0ea] px-2.5 py-2.5 sm:m-3 sm:px-3 sm:py-3.5 md:m-4 lg:col-span-3 lg:m-4">
                <Icon name="car" className="mb-2 h-5 w-5 text-brand sm:mb-2.5 sm:h-6 sm:w-6 lg:mb-3 lg:h-7 lg:w-7" strokeWidth={1.6} />
                <ul className="flex w-full flex-wrap justify-center gap-1 sm:gap-1.5">
                  {row.models.map((model) => (
                    <li
                      key={model}
                      className="rounded-md border border-[#ddd5cb] bg-[#ebe5dc] px-2 py-0.5 text-center text-[11px] font-semibold text-ink/80 sm:px-2.5 sm:py-1 sm:text-[12px]"
                    >
                      {model}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
