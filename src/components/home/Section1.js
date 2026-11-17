import Image from "next/image";
import data from "../../data/home-data/section1.json";
import Icon from "../ui/Icon";
import Eyebrow from "../ui/Eyebrow";
import HeroEnquiryForm from "./HeroEnquiryForm";

export default function Section1() {
  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-primary-dark text-white">
      {/* Desktop only: full-bleed section background */}
      <div className="absolute inset-0 -z-10 hidden lg:block">
        <Image
          src={data.image.src}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover object-[72%_42%]"
        />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark from-8% via-primary-dark/75 via-46% to-primary-dark/25" />
          <div className="absolute inset-0 bg-linear-to-t from-primary-dark/90 via-transparent via-45% to-primary-dark/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_15%,rgba(232,93,38,0.18),transparent_45%)]" />
          <div
            className="pointer-events-none absolute -left-[4%] bottom-[10%] h-[3px] w-[42%] rotate-[12deg] bg-linear-to-r from-transparent via-brand to-transparent opacity-90"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-[4%] bottom-[8%] h-10 w-[42%] rotate-[12deg] bg-linear-to-r from-transparent via-brand/30 to-transparent blur-2xl"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="container-site relative z-10 grid grid-cols-1 gap-6 pb-6 pt-5 sm:gap-7 sm:pt-7 md:gap-8 lg:min-h-[500px] lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-10 xl:min-h-[540px]">
        <div className="lg:col-span-7">
          {/* Mobile: image only behind heading + description */}
          <div className="relative -mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 lg:hidden" aria-hidden="true">
              <Image
                src={data.image.src}
                alt=""
                fill
                sizes="100vw"
                loading="eager"
                fetchPriority="high"
                className="object-cover object-[78%_40%]"
              />
              <div className="absolute inset-0 bg-linear-to-r from-primary-dark from-[6%] via-primary-dark/88 via-[50%] to-primary-dark/25" />
              <div className="absolute inset-0 bg-linear-to-b from-primary-dark/60 via-transparent to-primary-dark/80" />
            </div>

            <div className="relative z-10 py-5 sm:py-6 lg:py-0">
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
            </div>
          </div>

          <ul
            className="mt-6 grid max-w-[600px] grid-cols-3 divide-x divide-white/25 motion-safe:animate-fade-up sm:mt-7 sm:gap-3 sm:divide-x-0"
            style={{ animationDelay: "240ms" }}
          >
            {data.stats.map((stat) => (
              <li
                key={stat.value}
                className="flex flex-col items-center gap-1.5 px-2 py-1 text-center sm:flex-row sm:items-center sm:gap-2.5 sm:rounded-xl sm:border sm:border-white/12 sm:bg-[#0d0f12]/45 sm:px-3 sm:py-3 sm:text-left sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:backdrop-blur-md sm:transition-transform sm:hover:-translate-y-0.5 xl:gap-3 xl:px-4"
              >
                <Icon
                  name={stat.icon}
                  className="h-6 w-6 shrink-0 text-brand sm:h-7 sm:w-7 xl:h-8 xl:w-8"
                  strokeWidth={1.6}
                />
                <div className="min-w-0">
                  <p className="text-[15px] font-extrabold leading-none sm:text-lg xl:text-xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-medium leading-tight text-white/90 sm:text-[12px] xl:text-[13px]">
                    {stat.label}
                  </p>
                  {stat.sub && (
                    <p className="mt-0.5 hidden text-[10.5px] leading-tight text-white/60 sm:block sm:text-[11px]">
                      {stat.sub}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <p
            className="mt-5 hidden items-start gap-2.5 text-sm text-white/85 motion-safe:animate-fade-up sm:mt-6 sm:flex sm:text-[15px]"
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
          <div className="w-full lg:w-auto">
            <HeroEnquiryForm form={data.form} />
            <p className="mt-4 flex items-start gap-2.5 text-sm text-white/85 sm:hidden">
              <Icon name="mapPin" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand" strokeWidth={2} />
              {data.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
