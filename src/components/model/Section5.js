import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

function FaultCard({ item }) {
  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#e4ddd4] bg-[#f7f3ee] lg:grid-cols-12">
      <div className="relative m-3 aspect-[16/10] overflow-hidden rounded-xl sm:m-4 lg:col-span-3 lg:aspect-auto lg:min-h-[160px]">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-4 pb-4 pt-1 sm:px-5 lg:col-span-5 lg:py-4">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand text-[14px] font-extrabold text-white">
            {item.number}
          </span>
          <div className="min-w-0">
            <h3 className="text-[17px] font-extrabold leading-snug text-ink md:text-[18px]">{item.title}</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink/75 md:text-[14.5px]">{item.text}</p>
          </div>
        </div>
      </div>

      <div className="mx-4 mb-4 flex flex-col justify-center border-t border-[#ddd6cc] pt-3 sm:mx-5 lg:col-span-4 lg:mx-0 lg:mb-0 lg:border-l lg:border-t-0 lg:px-5 lg:py-4 lg:pt-4">
        <div className="flex items-center gap-2.5">
          <Icon name={item.aside.icon} className="h-5 w-5 shrink-0 text-brand" strokeWidth={1.7} />
          <p className="text-[13px] font-bold text-ink">{item.aside.label}</p>
        </div>
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink/70 md:text-[14px]">{item.aside.text}</p>
      </div>
    </article>
  );
}

export default function Section5({ data }) {
  return (
    <section id={data.id} className="bg-[#f6f2ed] text-ink">
      {/* Header — same diagonal treatment as section 2 */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block" aria-hidden="true">
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

        <div className="container-site relative z-10 grid grid-cols-1 gap-5 py-6 md:py-7 lg:min-h-[320px] lg:grid-cols-12 lg:items-center lg:py-8">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={data.eyebrow}
              heading={data.heading}
              intro={data.intro}
              headingClassName="max-w-[640px]"
              introClassName="max-w-[560px]"
            />
          </div>

          <div className="relative -mx-4 aspect-[16/10] overflow-hidden sm:aspect-[16/9] md:-mx-6 lg:hidden">
            <Image src={data.image.src} alt={data.image.alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Three fault cards */}
      <div className="container-site space-y-3 pb-6 md:space-y-3.5 md:pb-7 lg:pb-8">
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
              className="object-cover object-center"
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

        <div className="container-site relative z-10 grid grid-cols-1 items-center gap-5 py-6 md:py-7 lg:min-h-[220px] lg:grid-cols-12 lg:gap-6 lg:py-8">
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
            <Image src={data.cta.image.src} alt={data.cta.image.alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-[#e4ddd4] bg-[#efeae3]">
        <ul className="container-site grid grid-cols-1 gap-2.5 py-3.5 sm:grid-cols-2 sm:gap-3 md:grid-cols-4 md:gap-0 md:py-4">
          {data.footerBar.map((item, i) => (
            <li
              key={item.label}
              className={`flex items-center gap-2.5 md:justify-center md:px-4 ${
                i > 0 ? "md:border-l md:border-[#d7d0c6]" : ""
              }`}
            >
              <Icon name={item.icon} className="h-5 w-5 shrink-0 text-brand" strokeWidth={2} />
              <span className="text-[13.5px] font-semibold text-ink md:text-[14px]">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
