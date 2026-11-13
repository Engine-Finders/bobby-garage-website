import { Fragment } from "react";
import Image from "next/image";
import Slashes from "../ui/Slashes";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

export default function Section1({ data }) {
  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-primary-dark text-white">
      {/* Mobile/tablet ambient glow; desktop uses the photo instead */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_0%,rgba(232,93,38,0.22),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(197,155,95,0.12),transparent_50%)] lg:hidden"
        aria-hidden="true"
      />

      <div className="container-site grid grid-cols-1 gap-8 pb-10 pt-10 sm:pt-14 md:gap-10 lg:static lg:min-h-[620px] lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-12 lg:pt-16 xl:min-h-[680px] xl:pt-20">
        <div className="lg:col-span-7 xl:col-span-6">
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11.5px] font-bold uppercase tracking-[0.06em] text-white/80 motion-safe:animate-fade-up sm:text-[12.5px] md:text-[13.5px]">
            <Slashes className="h-3.5 md:h-4" />
            {data.eyebrowTags.map((tag, i) => (
              <Fragment key={tag}>
                {i > 0 && (
                  <span className="text-brand" aria-hidden="true">
                    |
                  </span>
                )}
                <span>{tag}</span>
              </Fragment>
            ))}
          </p>

          <h1
            className="mt-4 max-w-[680px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] motion-safe:animate-fade-up sm:text-[42px] md:text-[46px] lg:text-[50px] xl:text-[56px]"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block">{data.heading.main}</span>
            <span className="block text-white">{data.heading.highlight}</span>
          </h1>

          <div
            className="mt-5 max-w-[580px] space-y-4 text-base leading-relaxed text-white/85 motion-safe:animate-fade-up md:text-[17px]"
            style={{ animationDelay: "160ms" }}
          >
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Mobile: in-flow image. Desktop: full-bleed section background. */}
          <div className="relative -mx-4 mt-6 aspect-[16/10] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] sm:aspect-[16/9] md:-mx-6 lg:absolute lg:inset-0 lg:-z-10 lg:mx-0 lg:mt-0 lg:aspect-auto lg:[mask-image:none]">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              className="object-cover object-center lg:object-[70%_center]"
            />

            <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
              <div className="absolute inset-0 bg-linear-to-r from-primary-dark from-10% via-primary-dark/80 via-48% to-primary-dark/35" />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark via-transparent via-40% to-primary-dark/45" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_15%,rgba(232,93,38,0.2),transparent_45%)]" />
              <div className="absolute -left-[5%] bottom-[14%] h-[3px] w-[38%] -rotate-[8deg] bg-linear-to-r from-transparent via-brand to-transparent opacity-80" />
              <div className="absolute -left-[5%] bottom-[12%] h-10 w-[38%] -rotate-[8deg] bg-linear-to-r from-transparent via-brand/25 to-transparent blur-2xl" />
            </div>
          </div>

          <div
            className="mt-8 flex flex-col gap-3 motion-safe:animate-fade-up sm:flex-row sm:flex-wrap sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <Button href={data.primaryCta.href} size="lg" className="w-full gap-3 sm:w-auto">
              <Icon name={data.primaryCta.icon || "mail"} className="h-5 w-5" strokeWidth={2} />
              {data.primaryCta.label}
            </Button>
            <Button
              href={data.secondaryCta.href}
              variant="ghostDark"
              size="lg"
              arrow={false}
              className="w-full gap-3 sm:w-auto"
            >
              <Icon name={data.secondaryCta.icon || "phone"} className="h-5 w-5" strokeWidth={2} />
              {data.secondaryCta.label}
            </Button>
          </div>
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
                {item.sub && <p className="mt-0.5 text-[12.5px] leading-snug text-white/65">{item.sub}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
