import Image from "next/image";
import DiagonalSectionHeader from "../ui/DiagonalSectionHeader";
import SectionShell from "../ui/SectionShell";
import Icon from "../ui/Icon";

function FaultRow({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_10px_24px_rgba(13,15,18,0.07)]">
      <div className="grid grid-cols-1 gap-3 p-3 sm:gap-3.5 sm:p-3.5 lg:grid-cols-12 lg:items-stretch lg:gap-4 lg:p-3.5">
        <div className="min-w-0 lg:col-span-8 xl:col-span-8">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-[#fff3ea] text-brand sm:h-10 sm:w-10">
              <Icon name={item.icon} className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.7} />
            </span>
            <h3 className="min-w-0 text-[15px] font-extrabold leading-snug tracking-[-0.01em] text-ink sm:text-[17px] md:text-[19px]">
              {item.title}
            </h3>
          </div>
          <div className="mt-2 space-y-1.5 text-[12.5px] leading-snug text-ink/75 sm:mt-2.5 sm:text-[13.5px] sm:leading-snug md:text-[14px]">
            {item.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>

        {/* Image matches text height; diagonal left edge + orange seam like header */}
        <div className="lg:col-span-4 xl:col-span-4">
          <div className="relative mx-auto aspect-[16/10] w-full max-w-[280px] overflow-hidden rounded-xl bg-white sm:max-w-[320px] lg:mx-0 lg:h-full lg:min-h-0 lg:max-w-none lg:aspect-auto lg:rounded-l-none lg:rounded-r-xl">
            <div
              className="absolute inset-0 overflow-hidden max-lg:[clip-path:none] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
            >
              <Image
                src={item.image.src}
                alt={item.image.alt || ""}
                fill
                sizes="(max-width: 1024px) 320px, 28vw"
                className="object-cover object-center"
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
                d="M 18 0 L 0 100"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="absolute inset-y-0 left-0 w-[4px] bg-brand lg:hidden" aria-hidden="true" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Section4({ data }) {
  return (
    <section id={data.id} className="relative">
      <DiagonalSectionHeader
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        imageSrc={data.image.src}
        imageAlt={data.image.alt || ""}
        size="brand"
        headingClassName="max-w-[760px]"
      />

      <SectionShell tone="light" padding="pt-2.5 pb-5 md:pt-3 md:pb-6 lg:pt-4 lg:pb-7">
        <div className="space-y-2.5 sm:space-y-3">
          {data.cards.map((item) => (
            <FaultRow key={item.title} item={item} />
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
