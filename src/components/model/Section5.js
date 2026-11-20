import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import SoftFadeHeading from "../ui/SoftFadeHeading";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

function FaultCard({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#e4ddd4] bg-[#f7f3ee] lg:grid lg:grid-cols-12">
      {/* Mobile: compact image-left row; desktop: 3-col grid */}
      <div className="grid grid-cols-[112px_minmax(0,1fr)] sm:grid-cols-[140px_minmax(0,1fr)] lg:contents">
        <div className="relative m-2.5 min-h-[96px] overflow-hidden rounded-lg sm:m-3 sm:min-h-[120px] lg:col-span-3 lg:m-4 lg:aspect-auto lg:min-h-[160px] lg:rounded-xl">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(max-width: 1024px) 140px, 25vw"
            className="object-cover"
          />
          <span className="absolute left-1.5 top-1.5 z-[1] flex h-6 w-6 items-center justify-center rounded-md bg-brand text-[12px] font-extrabold text-white shadow-sm sm:left-2 sm:top-2 sm:h-8 sm:w-8 sm:text-[14px]">
            {item.number}
          </span>
        </div>

        <div className="flex flex-col justify-center py-2.5 pr-3 sm:py-3 sm:pr-4 lg:col-span-5 lg:px-5 lg:py-4">
          <h3 className="text-[14px] font-extrabold leading-snug text-ink sm:text-[16px] md:text-[18px]">
            {item.title}
          </h3>
          <p className="mt-1 text-[12px] leading-snug text-ink/75 sm:mt-1.5 sm:text-[13.5px] sm:leading-relaxed md:text-[14.5px]">
            {item.text}
          </p>
        </div>
      </div>

      <div className="mx-3 mb-3 flex flex-col justify-center rounded-xl border border-[#ddd6cc] bg-[#ebe5dc] px-3 py-2.5 sm:mx-4 sm:mb-4 sm:px-4 sm:py-3 lg:col-span-4 lg:m-0 lg:rounded-none lg:border-l lg:border-t-0 lg:bg-transparent lg:px-5 lg:py-4">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Icon name={item.aside.icon} className="h-4 w-4 shrink-0 text-brand sm:h-5 sm:w-5" strokeWidth={1.7} />
          <p className="text-[12px] font-bold text-ink sm:text-[13px]">{item.aside.label}</p>
        </div>
        <p className="mt-1.5 text-[12px] leading-snug text-ink/70 sm:mt-2 sm:text-[13.5px] sm:leading-relaxed md:text-[14px]">
          {item.aside.text}
        </p>
      </div>
    </article>
  );
}

export default function Section5({ data }) {
  return (
    <section id={data.id} className="bg-[#f6f2ed] text-ink">
      {/* Mobile: soft-fade image behind heading */}
      <SoftFadeHeading imageSrc={data.image.src} imageAlt={data.image.alt || ""}>
        <SectionHeading
          eyebrow={data.eyebrow}
          heading={data.heading}
          headingClassName="max-w-[640px]"
        />
      </SoftFadeHeading>
      <div className="container-site pt-3 lg:hidden">
        <p className="max-w-[560px] text-[14px] leading-snug text-ink/75">{data.intro}</p>
      </div>

      {/* Desktop diagonal header */}
      <div className="relative isolate hidden overflow-hidden lg:block">
        <div className="absolute inset-y-0 right-0 w-[50%]" aria-hidden="true">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              src={data.image.src}
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#f6f2ed]/50 via-transparent to-transparent" />
          </div>
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

        <div className="container-site relative z-10 grid grid-cols-12 items-center gap-5 py-7 lg:min-h-[320px] lg:py-8">
          <div className="col-span-7">
            <SectionHeading
              eyebrow={data.eyebrow}
              heading={data.heading}
              intro={data.intro}
              headingClassName="max-w-[640px]"
              introClassName="max-w-[560px]"
            />
          </div>
        </div>
      </div>

      {/* Three fault cards */}
      <div className="container-site space-y-2.5 pb-5 pt-4 md:space-y-3.5 md:pb-7 lg:pb-8 lg:pt-0">
        {data.cards.map((item) => (
          <FaultCard key={item.number} item={item} />
        ))}
      </div>

      {/* Dark CTA with diagonal image */}
      <div className="relative isolate overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block" aria-hidden="true">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              src={data.cta.image.src}
              alt=""
              fill
              sizes="42vw"
              quality={100}
              unoptimized
              className="object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary-dark/40 via-transparent to-transparent" />
          </div>
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

        <div className="container-site relative z-10 grid grid-cols-1 items-center gap-5 py-6 md:py-7 lg:min-h-[240px] lg:grid-cols-12 lg:gap-6 lg:py-8">
          <div className="lg:col-span-7">
            <h2 className="max-w-[560px] text-[26px] font-extrabold leading-tight tracking-[-0.02em] md:text-[32px]">
              {data.cta.heading}
            </h2>
            <p className="mt-2.5 max-w-[520px] text-[15px] leading-relaxed text-white/75">{data.cta.text}</p>
            <div className="mt-4">
              <Button href={data.cta.button.href} size="lg" className="gap-3">
                <Icon name={data.cta.button.icon || "mail"} className="h-5 w-5" strokeWidth={2} />
                {data.cta.button.label}
              </Button>
            </div>
          </div>

          <div className="relative -mx-4 aspect-[16/10] overflow-hidden sm:aspect-[16/9] md:-mx-6 lg:hidden">
            <Image
              src={data.cta.image.src}
              alt={data.cta.image.alt}
              fill
              sizes="100vw"
              quality={100}
              unoptimized
              className="object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Footer bar — 2×2 on mobile, 4-col on md+ */}
      <div className="border-t border-[#e4ddd4] bg-[#efeae3]">
        <ul className="container-site grid grid-cols-2 gap-2.5 py-3.5 sm:gap-3 md:grid-cols-4 md:gap-0 md:py-4">
          {data.footerBar.map((item, i) => (
            <li
              key={item.label}
              className={`flex items-center gap-2 md:justify-center md:gap-2.5 md:px-4 ${
                i > 0 ? "md:border-l md:border-[#d7d0c6]" : ""
              }`}
            >
              <Icon name={item.icon} className="h-4 w-4 shrink-0 text-brand sm:h-5 sm:w-5" strokeWidth={2} />
              <span className="text-[12px] font-semibold leading-snug text-ink sm:text-[13.5px] md:text-[14px]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
