
import Image from "next/image";
import Eyebrow from "../ui/Eyebrow";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

export default function Section1({ data }) {
  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-primary-dark text-white">
      {/* Full-height diagonal image (right) */}
      <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block">

        {/* Image with diagonal clipping */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Image
            src={data.image.src}
            alt=""
            fill
            sizes="50vw"
            className="object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/35 via-transparent to-transparent" />
        </div>

        {/* Orange border perfectly aligned with diagonal image edge */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 150 0 L 0 1000"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-brand"
          />
        </svg>
      </div>

      <div className="container-site relative z-10 grid grid-cols-1 gap-8 pb-8 pt-12 md:gap-10 lg:min-h-[640px] lg:grid-cols-12 lg:items-center lg:pb-10 lg:pt-16 xl:min-h-[700px] xl:pt-20">
        <div className="lg:col-span-7">
          <Eyebrow tone="dark">{data.eyebrow}</Eyebrow>

          <h1 className="mt-4 max-w-[720px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[42px] md:text-[46px] lg:text-[50px] xl:text-[56px]">
            <HighlightText content={data.heading} />
          </h1>

          <div className="mt-5 max-w-[640px] space-y-4 text-[15px] leading-relaxed text-white/85 md:text-base lg:text-[17px]">
            {data.paragraphs.map((p, i) => {
              const text = typeof p === "string" ? p : p.text;
              const isQuote = typeof p === "object" && p.quote;

              return isQuote ? (
                <p key={i} className="border-l-[3px] border-brand pl-4 text-white/90 md:pl-5">
                  {text}
                </p>
              ) : (
                <p key={i}>{text}</p>
              );
            })}
          </div>

          <div className="mt-8">
            <Button href={data.cta.href} size="lg" className="w-full max-w-md gap-3 sm:w-auto">
              <Icon name={data.cta.icon || "mail"} className="h-5 w-5" strokeWidth={2} />
              {data.cta.label}
            </Button>
          </div>
        </div>

        <div className="relative -mx-4 aspect-[16/10] overflow-hidden sm:aspect-[16/9] md:-mx-6 lg:hidden">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
        </div>
      </div>

      <div className="container-site relative z-10 pb-12 md:pb-14 lg:pb-16">
        <ul className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 border-t-brand/70 bg-linear-to-b from-charcoal/95 to-primary-dark/95 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
          {data.trustBar.map((item, i) => (
            <li
              key={`${item.value}-${i}`}
              className="flex items-center gap-3.5 border-b border-white/10 px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:border-white/10 sm:last:border-r-0 sm:odd:border-b sm:[&:nth-child(2)]:border-b lg:border-b-0 lg:[&:nth-child(2)]:border-b-0"
            >
              {item.logoSrc ? (
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                  <Image src={item.logoSrc} alt="" width={36} height={36} className="h-8 w-8 object-contain" />
                </span>
              ) : (
                <Icon name={item.icon} className="h-8 w-8 shrink-0 text-brand" strokeWidth={1.6} />
              )}

              <div className="min-w-0">
                <p className="text-[15px] font-extrabold leading-tight sm:text-base">
                  {item.value}
                  {item.label ? (
                    <span className="font-bold text-white/95">
                      {item.value ? " " : ""}
                      {item.label}
                    </span>
                  ) : null}
                </p>
                {item.sub && (
                  <p className="mt-0.5 text-[12.5px] leading-snug text-white/65">
                    {item.sub}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
