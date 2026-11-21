import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import SoftFadeHeading from "../ui/SoftFadeHeading";

export default function Section7({ data }) {
  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
      <SoftFadeHeading imageSrc={data.image.src} imageAlt={data.image.alt || ""}>
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} size="brand" headingClassName="max-w-[560px]" />
      </SoftFadeHeading>

      <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block" aria-hidden="true">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <Image
            src={data.image.src}
            alt=""
            fill
            sizes="48vw"
            quality={100}
            unoptimized
            className="object-cover object-center"
          />
        </div>
        <svg
          className="pointer-events-none absolute inset-0 z-[1] h-full w-full text-brand"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 18 0 L 0 100"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="container-site relative z-10 py-5 md:py-6 lg:grid lg:min-h-[360px] lg:grid-cols-12 lg:items-center lg:py-8">
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="hidden lg:block">
            <SectionHeading
              eyebrow={data.eyebrow}
              heading={data.heading}
              size="brand"
              headingClassName="max-w-[560px]"
            />
          </div>

          <div className="mt-3 space-y-3 lg:mt-5">
            {data.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="border-l-[3px] border-brand pl-3.5 text-[13.5px] leading-snug text-ink/75 sm:pl-4 sm:text-[14.5px]"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
