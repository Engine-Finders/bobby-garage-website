import Image from "next/image";
import data from "../../data/home-data/section1.json";
import Icon from "../ui/Icon";
import Eyebrow from "../ui/Eyebrow";
import HeroEnquiryForm from "./HeroEnquiryForm";

export default function Section1() {
  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-primary-dark text-white">
      {/* Mobile/tablet ambient glow; desktop uses the photo instead */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_0%,rgba(232,93,38,0.22),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(197,155,95,0.12),transparent_50%)] lg:hidden"
        aria-hidden="true"
      />

      <div className="container-site grid grid-cols-1 gap-8 pb-12 pt-10 sm:pt-14 md:gap-10 lg:static lg:min-h-[650px] lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-20 xl:min-h-[700px]">
        <div className="lg:col-span-7">
          <Eyebrow tone="dark" className="motion-safe:animate-fade-up">
            {data.eyebrow}
          </Eyebrow>

          <h1
            className="mt-4 max-w-[640px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] motion-safe:animate-fade-up sm:text-[42px] md:text-[46px] lg:text-[52px] xl:text-[60px]"
            style={{ animationDelay: "80ms" }}
          >
            {data.heading.main}{" "}
            <span className="block text-brand">{data.heading.highlight}</span>
          </h1>

          <p
            className="mt-5 max-w-[580px] text-base leading-relaxed text-white/85 motion-safe:animate-fade-up md:text-[17px] xl:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {data.description}
          </p>

          {/* Mobile: in-flow image between description and badges. Desktop: full-bleed section background. */}
          <div className="relative -mx-4 mt-6 aspect-[16/10] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] sm:aspect-[16/9] md:-mx-6 lg:absolute lg:inset-0 lg:-z-10 lg:mx-0 lg:mt-0 lg:aspect-auto lg:[mask-image:none]">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              className="object-cover object-center"
            />

            {/* Desktop overlays */}
            <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
              <div className="absolute inset-0 bg-linear-to-r from-primary-dark from-10% via-primary-dark/80 via-50% to-primary-dark/50" />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark via-transparent via-40% to-primary-dark/50" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_15%,rgba(232,93,38,0.22),transparent_45%)]" />
              <div className="absolute -left-[5%] bottom-[14%] h-[3px] w-[38%] -rotate-[8deg] bg-linear-to-r from-transparent via-brand to-transparent opacity-80" />
              <div className="absolute -left-[5%] bottom-[12%] h-10 w-[38%] -rotate-[8deg] bg-linear-to-r from-transparent via-brand/25 to-transparent blur-2xl" />
            </div>
          </div>

          <ul
            className="mt-7 grid max-w-[600px] grid-cols-3 gap-2 motion-safe:animate-fade-up sm:gap-3"
            style={{ animationDelay: "240ms" }}
          >
            {data.stats.map((stat) => (
              <li
                key={stat.value}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/12 bg-white/[0.06] px-2 py-3 text-center backdrop-blur-md transition-transform hover:-translate-y-0.5 sm:flex-row sm:items-center sm:gap-2.5 sm:px-3 sm:text-left xl:gap-3 xl:px-4"
              >
                <Icon name={stat.icon} className="h-7 w-7 shrink-0 text-brand xl:h-8 xl:w-8" strokeWidth={1.6} />
                <div className="min-w-0">
                  <p className="text-lg font-extrabold leading-none sm:text-xl">{stat.value}</p>
                  <p className="mt-1 text-[12px] font-medium leading-tight text-white/90 sm:whitespace-nowrap xl:text-[13px]">{stat.label}</p>
                  {stat.sub && <p className="mt-0.5 text-[10.5px] leading-tight text-white/60 sm:text-[11px]">{stat.sub}</p>}
                </div>
              </li>
            ))}
          </ul>

          <p
            className="mt-6 flex items-start gap-2.5 text-sm text-white/85 motion-safe:animate-fade-up sm:text-[15px]"
            style={{ animationDelay: "320ms" }}
          >
            <Icon name="mapPin" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand" strokeWidth={2} />
            {data.location}
          </p>
        </div>

        <div
          className="relative z-10 motion-safe:animate-fade-up lg:col-span-5 lg:flex lg:justify-end"
          style={{ animationDelay: "200ms" }}
        >
          <HeroEnquiryForm form={data.form} />
        </div>

      </div>
    </section>
  );
}
