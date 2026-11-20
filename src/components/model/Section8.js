import Image from "next/image";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";

export default function Section8({ data }) {
  const { why, warranty, warning } = data;

  return (
    <section id={data.id} className="bg-[#f6f2ed] text-ink">
      {/* Why Bring — dual diagonal on image right edge + badges in a row */}
      <div className="container-site py-6 md:py-7 lg:py-8">
        <div className="overflow-hidden rounded-2xl border border-[#e4ddd4] bg-white shadow-[0_10px_28px_rgba(13,15,18,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
            <div className="relative min-h-[220px] lg:col-span-5 lg:min-h-[300px]">
              <div
                className="absolute inset-0 overflow-hidden max-lg:rounded-t-2xl lg:[clip-path:polygon(0_0,100%_0,82%_50%,100%_100%,0_100%)]"
              >
                <Image
                  src={why.image.src}
                  alt={why.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  quality={100}
                  unoptimized
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
                  d="M 100 0 L 82 50 L 100 100"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <div className="flex flex-col justify-center px-5 py-5 sm:px-6 sm:py-6 lg:col-span-7 lg:px-8 lg:py-7">
              <h2 className="max-w-[520px] text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[34px] md:text-[40px] lg:text-[48px]">
                <HighlightText content={why.heading} />
              </h2>
              <span className="mt-3 block h-[3px] w-14 rounded-full bg-brand" aria-hidden="true" />
              <p className="mt-3 max-w-[540px] text-[14.5px] leading-relaxed text-ink/75 md:text-[15.5px]">{why.intro}</p>

              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-0">
                {why.badges.map((badge, i) => (
                  <li
                    key={badge.label}
                    className={`flex items-start gap-2.5 sm:px-3 ${i > 0 ? "sm:border-l sm:border-[#ddd6cc]" : "sm:pl-0"}`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand/25 bg-[#fff3ea] text-brand">
                      <Icon name={badge.icon} className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <p className="pt-1 text-[12.5px] font-semibold leading-snug text-ink sm:text-[13px]">{badge.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Warranty grid — no box, tight spacing */}
      <div className="container-site py-4 md:py-5">
        <div className="text-center">
          <h2 className="mx-auto max-w-[720px] text-[24px] font-extrabold leading-snug tracking-[-0.02em] text-ink sm:text-[30px] md:text-[34px] lg:text-[38px]">
            <HighlightText content={warranty.heading} />
          </h2>
          <span className="mx-auto mt-2.5 block h-[3px] w-14 rounded-full bg-brand" aria-hidden="true" />
        </div>

        <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {warranty.items.map((item) => (
            <li key={item.title}>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <Icon name={item.icon} className="h-4 w-4 shrink-0 text-brand sm:h-5 sm:w-5" strokeWidth={1.7} />
                <h3 className="text-[13px] font-bold leading-snug text-ink sm:text-[14.5px] md:text-[15px]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-1.5 text-[12px] leading-snug text-ink/70 sm:text-[13px] sm:leading-relaxed md:text-[13.5px]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Warning banner */}
      <div className="container-site pb-6 md:pb-7 lg:pb-8">
        <div className="flex items-start gap-3 rounded-2xl border border-[#e4ddd4] bg-[#f3eee7] px-4 py-3.5 sm:items-center sm:gap-4 sm:px-5 sm:py-4">
          <Icon name={warning.icon || "alertTriangle"} className="h-7 w-7 shrink-0 text-brand" strokeWidth={1.7} />
          <p className="min-w-0 text-[13.5px] font-bold leading-relaxed text-ink sm:text-[14.5px]">{warning.text}</p>
        </div>
      </div>
    </section>
  );
}
