import Image from "next/image";
import Link from "next/link";
import Eyebrow from "../ui/Eyebrow";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

const BEAM_CLIP = "polygon(51.4% 0, 57.3% 0, 43.3% 100%, 21.5% 100%)";
const BEAM_FADE = "linear-gradient(180deg, #000 12%, rgba(0,0,0,0.55) 52%, rgba(0,0,0,0.12) 78%, transparent 94%)";

export default function Section1({ data }) {
  const photo = data.image.desktop || data.image.src;

  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-[#06080a] text-white">
      <div
        className="absolute inset-0 bg-[linear-gradient(100deg,#06080a_0%,#0b0d0f_58%,#151719_100%)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          clipPath: BEAM_CLIP,
          background: "linear-gradient(90deg,#222426 0%,#3a3c3e 58%,#4d4d4f 100%)",
          maskImage: BEAM_FADE,
          WebkitMaskImage: BEAM_FADE,
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          clipPath: "polygon(54.9% 0, 57.3% 0, 43.3% 100%, 40.9% 100%)",
          background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.62) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-y-0 right-0 hidden w-[56.7%] lg:block"
        style={{ clipPath: "polygon(24.7% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <Image
          src={photo}
          alt=""
          fill
          sizes="57vw"
          className="object-cover object-[70%_center]"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="relative z-10 px-5 pb-10 pt-7 md:px-8 md:pb-12 lg:min-h-[705px] lg:px-10 lg:pb-[39px] lg:pt-[38px] xl:px-[60px]">
        <div className="lg:max-w-[520px] xl:max-w-[650px]">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] font-medium">
              {data.breadcrumb.map((item, i) => (
                <li key={item.label} className="flex items-center gap-2.5">
                  {i > 0 && (
                    <span className="text-white/40" aria-hidden="true">
                      ›
                    </span>
                  )}
                  {item.href ? (
                    <Link href={item.href} className="text-white/75 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-brand" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <Eyebrow
            tone="dark"
            className="mt-[36px] text-[16px] tracking-[0.08em]"
            slashClassName="h-[18px]"
          >
            {data.eyebrow}
          </Eyebrow>

          <h1 className="mt-[14px] text-[36px] font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-[42px] md:text-[48px] lg:text-[44px] xl:text-[59px] xl:leading-[0.9]">
            <span className="block">{data.heading.line1}</span>
            <span className="block">
              <HighlightText content={data.heading.line2} />
            </span>
          </h1>

          <div className="mt-[18px] max-w-[630px] text-[16px] leading-[1.42] text-white/90 md:text-[17px] lg:text-[16px] xl:text-[18px] xl:leading-[25px]">
            {data.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="relative -mx-5 mt-6 aspect-[16/10] overflow-hidden sm:-mx-8 md:aspect-[16/9] lg:hidden">
            <Image
              src={data.image.mobile || data.image.src}
              alt={data.image.alt}
              fill
              sizes="100vw"
              className="object-cover object-[75%_center]"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="mt-[6px] flex max-w-[648px] items-center gap-[37px] rounded-[14px] border border-brand/55 bg-[#15171a] px-[10px] py-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <Icon
              name={data.priceNote.icon}
              className="h-[52px] w-[52px] shrink-0 text-brand"
              strokeWidth={1.4}
            />
            <p className="text-[15px] leading-[1.4] text-white/90 xl:text-[17px]">
              <HighlightText content={data.priceNote.text} highlightClassName="font-bold text-brand" />
            </p>
          </div>

          <ul className="mt-[40px] flex max-w-[650px] flex-col gap-4 sm:flex-row sm:items-center sm:gap-0">
            {data.stats.map((item, i) => (
              <li key={item.value} className="flex items-center">
                {i > 0 && <span className="mx-[34px] hidden h-[52px] w-px shrink-0 bg-white/20 sm:block" aria-hidden="true" />}
                <div className="flex items-center gap-3.5">
                  <Icon name={item.icon} className="h-[36px] w-[36px] shrink-0 text-brand" strokeWidth={1.5} />
                  <div className="min-w-0">
                    <p className="text-[20px] font-extrabold leading-none tracking-[-0.02em]">{item.value}</p>
                    <p className="mt-1 text-[13px] font-medium leading-tight text-white/90">{item.label}</p>
                    {item.sub && <p className="mt-[3px] text-[11px] leading-tight text-white/55">{item.sub}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-[38px]">
            <Button
              href={data.cta.href}
              size="lg"
              className="h-[62px] w-full gap-[13px] rounded-[10px] px-7 text-[17px] sm:w-[480px]"
            >
              <Icon name={data.cta.icon || "mail"} className="h-[21px] w-[21px]" strokeWidth={2} />
              {data.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
