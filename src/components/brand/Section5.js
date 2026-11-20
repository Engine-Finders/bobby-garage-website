import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import SoftFadeHeading from "../ui/SoftFadeHeading";
import Icon from "../ui/Icon";

export default function Section5({ data }) {
  const { choice, process } = data;
  const row1 = process.steps.slice(0, 5);
  const row2 = process.steps.slice(5);

  return (
    <>
      {/* Rebuild or replace — soft-fade heading on mobile */}
      <section id={data.id} className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
        <SoftFadeHeading imageSrc={choice.image.src} imageAlt={choice.image.alt || ""}>
          <SectionHeading eyebrow={choice.eyebrow} heading={choice.heading} size="brand" headingClassName="max-w-[560px]" />
        </SoftFadeHeading>

        <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              src={choice.image.src}
              alt=""
              fill
              sizes="50vw"
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
            aria-hidden="true"
          >
            <path d="M 22 0 L 0 100" stroke="currentColor" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="container-site relative z-10 py-5 md:py-6 lg:grid lg:min-h-[400px] lg:grid-cols-12 lg:items-center lg:py-9">
          <div className="lg:col-span-6">
            <div className="hidden lg:block">
              <SectionHeading eyebrow={choice.eyebrow} heading={choice.heading} size="brand" headingClassName="max-w-[560px]" />
            </div>

            <ul className="mt-1 space-y-4 lg:mt-7 md:mt-8 md:space-y-5">
              {choice.blocks.map((block) => (
                <li key={block.title}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-[#ffe8db] text-brand sm:h-12 sm:w-12">
                      <Icon name={block.icon} className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="min-w-0 border-l-[3px] border-brand pt-1.5 pl-3 text-[15px] font-bold leading-snug text-ink sm:pt-2 sm:pl-4 sm:text-[16px] md:text-[18px]">
                      {block.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink/75 sm:mt-2.5 sm:text-[14px] md:text-[15px]">
                    {block.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process — compact cards on mobile */}
      <section id={process.id} className="bg-primary-dark py-7 text-white md:py-8 lg:py-9">
        <div className="container-site">
          <SectionHeading
            eyebrow={process.eyebrow}
            heading={process.heading}
            tone="dark"
            align="left"
            size="brand"
            headingClassName="max-w-[720px]"
          />

          {/* Mobile: 2-col grid; last odd card centered */}
          <ol className="mt-4 grid grid-cols-2 gap-2 lg:hidden">
            {process.steps.map((step) => (
              <li
                key={step.number}
                className="[&:last-child:nth-child(odd)]:col-span-2 [&:last-child:nth-child(odd)]:w-[calc(50%-0.25rem)] [&:last-child:nth-child(odd)]:justify-self-center"
              >
                <ProcessCard step={step} />
              </li>
            ))}
          </ol>

          {/* Desktop: 5 + 4 with connectors */}
          <div className="relative mt-6 hidden lg:block">
            <ol className="grid grid-cols-5 gap-3">
              {row1.map((step, i) => (
                <li key={step.number} className="relative">
                  <ProcessCard step={step} />
                  {i < row1.length - 1 && (
                    <span
                      className="pointer-events-none absolute top-[22%] -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white"
                      aria-hidden="true"
                    >
                      <Icon name="chevronRight" className="h-3 w-3" strokeWidth={2.6} />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="relative mx-auto mt-3 hidden h-8 w-full max-w-[92%] lg:block" aria-hidden="true">
            <div className="absolute right-0 top-0 h-8 w-[calc(10%+12px)] rounded-br-2xl border-b-2 border-r-2 border-brand" />
            <div className="absolute left-[10%] top-8 h-0 w-[80%] border-b-2 border-brand" />
            <div className="absolute left-[10%] top-8 h-8 w-[calc(10%+12px)] -translate-x-full rounded-tl-2xl border-l-2 border-t-2 border-brand" />
          </div>

          <ol className="mt-2 hidden grid-cols-4 gap-3 pr-[10%] lg:grid">
            {row2.map((step, i) => (
              <li key={step.number} className="relative">
                <ProcessCard step={step} />
                {i < row2.length - 1 && (
                  <span
                    className="pointer-events-none absolute top-[22%] -right-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white"
                    aria-hidden="true"
                  >
                    <Icon name="chevronRight" className="h-3 w-3" strokeWidth={2.6} />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

function ProcessCard({ step }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-black/[0.06] bg-white text-ink shadow-[0_8px_18px_rgba(0,0,0,0.16)] sm:rounded-xl sm:shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
      <div className="relative aspect-[5/3] w-full sm:aspect-[16/11]">
        <Image
          src={step.image.src}
          alt={step.image.alt || ""}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover"
        />
        <span className="absolute left-1.5 top-1.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-extrabold text-white shadow-md sm:left-2.5 sm:top-2.5 sm:h-8 sm:min-w-8 sm:px-1.5 sm:text-[12px]">
          {step.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-2 sm:p-3.5 md:p-4">
        <h3 className="text-[12px] font-bold leading-snug sm:text-[14px] md:text-[15px]">{step.title}</h3>
        <p className="mt-1 line-clamp-3 text-[11px] leading-snug text-ink/70 sm:mt-1.5 sm:line-clamp-none sm:text-[12.5px] sm:leading-relaxed md:text-[13px]">
          {step.text}
        </p>
      </div>
    </article>
  );
}
