import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import SoftFadeHeading from "../ui/SoftFadeHeading";
import SectionShell from "../ui/SectionShell";
import Icon from "../ui/Icon";

function ProcessCard({ step }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-[#f7f3ee] shadow-[0_10px_24px_rgba(13,15,18,0.07)]">
      <div className="relative aspect-[16/10] bg-[#ebe6df]">
        <Image
          src={step.image.src}
          alt={step.image.alt || ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col px-3.5 py-3 sm:px-4 sm:py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="text-[18px] font-extrabold leading-none text-brand sm:text-[20px]">
            {step.number}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand/30 bg-[#fff3ea] text-brand sm:h-9 sm:w-9">
            <Icon name={step.icon} className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.7} />
          </span>
        </div>
        <h3 className="mt-2 text-[15px] font-extrabold leading-snug text-ink sm:text-[16px] md:text-[17px]">
          {step.title}
        </h3>
        <p className="mt-1.5 text-[12.5px] leading-snug text-ink/70 sm:text-[13px] md:text-[13.5px]">
          {step.text}
        </p>
      </div>
    </article>
  );
}

export default function Section6({ data }) {
  return (
    <section id={data.id} className="relative">
      {/* Dark diagonal header */}
      <div className="relative isolate overflow-hidden bg-primary-dark text-white">
        <SoftFadeHeading imageSrc={data.image.src} imageAlt={data.image.alt || ""} tone="dark">
          <SectionHeading eyebrow={data.eyebrow} heading={data.heading} tone="dark" size="brand" />
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
            <div className="absolute inset-0 bg-linear-to-r from-primary-dark/55 via-primary-dark/15 to-transparent" />
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

        <div className="container-site relative z-10 hidden py-8 lg:block lg:min-h-[300px] lg:py-10">
          <div className="max-w-[52%]">
            <SectionHeading
              eyebrow={data.eyebrow}
              heading={data.heading}
              intro={data.intro}
              tone="dark"
              size="brand"
              introClassName="max-w-[520px] text-white/75"
            />
          </div>
        </div>

        <div className="container-site pb-5 pt-3 lg:hidden">
          <p className="max-w-[560px] text-[14px] leading-snug text-white/75">{data.intro}</p>
        </div>
      </div>

      <SectionShell tone="light" padding="pt-3 pb-5 md:pt-4 md:pb-6 lg:pt-5 lg:pb-7">
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3 lg:gap-4">
          {data.steps.map((step) => (
            <li key={step.number}>
              <ProcessCard step={step} />
            </li>
          ))}
        </ol>
      </SectionShell>
    </section>
  );
}
