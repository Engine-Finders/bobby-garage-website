import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";

export default function Section5({ data }) {
  const { choice, process } = data;
  const row1 = process.steps.slice(0, 5);
  const row2 = process.steps.slice(5);

  return (
    <>
      {/* Rebuild or replace */}
      <section id={data.id} className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
        <div
          className="absolute inset-y-0 right-0 hidden w-[46%] lg:block"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        >
          <Image src={choice.image.src} alt="" fill sizes="46vw" className="object-cover object-center" />
          <div className="absolute inset-y-0 left-[12%] w-[5px] -skew-x-[14deg] bg-brand" aria-hidden="true" />
        </div>

        <div className="container-site relative z-10 grid grid-cols-1 gap-8 py-10 md:py-12 lg:min-h-[480px] lg:grid-cols-12 lg:items-center lg:py-14">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={choice.eyebrow} heading={choice.heading} headingClassName="max-w-[560px]" />

            <ul className="mt-7 space-y-5 md:mt-8">
              {choice.blocks.map((block) => (
                <li key={block.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-[#ffe8db] text-brand">
                    <Icon name={block.icon} className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0 border-l-[3px] border-brand pl-4">
                    <h3 className="text-[16px] font-bold leading-snug text-ink md:text-[18px]">{block.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink/75 md:text-[15px]">{block.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative -mx-4 aspect-[16/10] overflow-hidden sm:aspect-[16/9] md:-mx-6 lg:hidden">
            <Image src={choice.image.src} alt={choice.image.alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Process — dark, 5 + 4 with connectors */}
      <section id={process.id} className="bg-primary-dark py-10 text-white md:py-12 lg:py-14">
        <div className="container-site">
          <SectionHeading
            eyebrow={process.eyebrow}
            heading={process.heading}
            tone="dark"
            align="left"
            headingClassName="max-w-[720px]"
          />

          {/* Row 1 — 5 cards */}
          <div className="relative mt-7 md:mt-8">
            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
              {row1.map((step, i) => (
                <li key={step.number} className="relative">
                  <ProcessCard step={step} />
                  {i < row1.length - 1 && (
                    <span
                      className="pointer-events-none absolute top-[22%] -right-2 z-10 hidden h-5 w-5 items-center justify-center rounded-full bg-brand text-white lg:flex"
                      aria-hidden="true"
                    >
                      <Icon name="chevronRight" className="h-3 w-3" strokeWidth={2.6} />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Wrap connector (desktop) */}
          <div className="relative mx-auto mt-3 hidden h-8 w-full max-w-[92%] lg:block" aria-hidden="true">
            <div className="absolute right-0 top-0 h-8 w-[calc(10%+12px)] rounded-br-2xl border-b-2 border-r-2 border-brand" />
            <div className="absolute left-[10%] top-8 h-0 w-[80%] border-b-2 border-brand" />
            <div className="absolute left-[10%] top-8 h-8 w-[calc(10%+12px)] -translate-x-full rounded-tl-2xl border-l-2 border-t-2 border-brand" />
          </div>

          {/* Row 2 — 4 cards */}
          <ol className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-2 lg:grid-cols-4 lg:gap-3 lg:pr-[10%]">
            {row2.map((step, i) => (
              <li key={step.number} className="relative">
                <ProcessCard step={step} />
                {i < row2.length - 1 && (
                  <span
                    className="pointer-events-none absolute top-[22%] -right-2 z-10 hidden h-5 w-5 items-center justify-center rounded-full bg-brand text-white lg:flex"
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
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-black/[0.06] bg-white text-ink shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
      <div className="relative aspect-[16/11] w-full">
        <Image src={step.image.src} alt={step.image.alt || ""} fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover" />
        <span className="absolute left-2.5 top-2.5 flex h-8 min-w-8 items-center justify-center rounded-full bg-brand px-1.5 text-[12px] font-extrabold text-white shadow-md">
          {step.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3.5 md:p-4">
        <h3 className="text-[14px] font-bold leading-snug md:text-[15px]">{step.title}</h3>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/70 md:text-[13px]">{step.text}</p>
      </div>
    </article>
  );
}
