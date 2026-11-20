import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import SoftFadeHeading from "../ui/SoftFadeHeading";
import Icon from "../ui/Icon";

export default function Section6({ data }) {
  return (
    <section id={data.id} className="bg-[#f6f2ed] text-ink">
      {/* Mobile: soft-fade image behind heading */}
      <SoftFadeHeading imageSrc={data.image.src} imageAlt={data.image.alt || ""}>
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} size="brand" />
      </SoftFadeHeading>
      <div className="container-site pt-3 lg:hidden">
        <p className="max-w-[560px] text-[14px] leading-snug text-ink/75">{data.intro}</p>
      </div>

      {/* Desktop: dual diagonal image cut */}
      <div className="relative isolate hidden overflow-hidden lg:block">
        <div className="absolute inset-y-0 right-0 w-[46%]" aria-hidden="true">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 22% 100%, 4% 50%)" }}
          >
            <Image
              src={data.image.src}
              alt=""
              fill
              sizes="46vw"
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
              d="M 22 0 L 4 50 L 22 100"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className="container-site relative z-10 min-h-[320px] py-8">
          <div className="max-w-[52%]">
            <SectionHeading
              eyebrow={data.eyebrow}
              heading={data.heading}
              intro={data.intro}
              size="brand"
              introClassName="max-w-[560px]"
            />
          </div>
        </div>
      </div>

      {/* Rebuild / Recondition / Replace cards */}
      <div className="container-site pb-6 md:pb-7 lg:pb-8">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3.5">
          {data.options.map((opt) => (
            <li
              key={opt.title}
              className="flex items-start gap-3 rounded-2xl border border-[#e4ddd4] bg-white px-4 py-3.5 shadow-[0_8px_20px_rgba(13,15,18,0.06)] sm:px-4 sm:py-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-[#fff3ea] text-brand">
                <Icon name={opt.icon} className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div className="min-w-0">
                <h3 className="text-[15px] font-extrabold text-ink md:text-[16px]">{opt.title}</h3>
                <p className="mt-1 text-[13px] leading-snug text-ink/70 md:text-[13.5px]">{opt.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
