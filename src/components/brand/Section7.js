import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import Eyebrow from "../ui/Eyebrow";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";
import BrandFaqCard from "./section7/BrandFaqCard";

export default function Section7({ data }) {
  const { contact, faqs, cta } = data;

  return (
    <>
      {/* Contact */}
      <section id={contact.id} className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
        <div
          className="absolute inset-y-0 right-0 hidden w-[40%] lg:block"
          style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        >
          {/* SVG diagonal border — perfectly matches the clip path line */}
          <svg
            className="absolute inset-0 z-10 h-full w-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <line
              x1="16"
              y1="0"
              x2="0"
              y2="100"
              className="stroke-brand"
              strokeWidth="10"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <Image src={contact.image.src} alt="" fill sizes="40vw" className="object-cover object-center" />
        </div>

        <div className="container-site relative z-10 py-10 md:py-12 lg:min-h-[480px] lg:py-14">
          <div className="lg:max-w-[58%]">
            <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} />

            <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start md:gap-0">
              <ul className="space-y-3.5 md:col-span-5">
                {contact.details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3.5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#e8dfd4] bg-[#efe6db] text-brand">
                      <Icon name={detail.icon} className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-[13px] font-bold text-ink md:text-[14px]">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-0.5 block text-[14px] leading-snug text-ink/75 hover:text-brand md:text-[15px]"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-[14px] leading-snug text-ink/75 md:text-[15px]">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="md:col-span-7 md:border-l-[3px] md:border-brand md:pl-7">
                <div className="space-y-3 text-[14.5px] leading-relaxed text-ink/75 md:text-[15.5px]">
                  {contact.sidebar.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative -mx-4 mt-8 aspect-[16/10] overflow-hidden sm:aspect-[16/9] md:-mx-6 lg:hidden">
            <Image src={contact.image.src} alt={contact.image.alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id={faqs.id} className="bg-primary-dark py-10 text-white md:py-12 lg:py-14">
        <div className="container-site">
          <SectionHeading eyebrow={faqs.eyebrow} heading={faqs.heading} tone="dark" />

          <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3.5">
            {faqs.items.map((item) => (
              <BrandFaqCard key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id={cta.id} className="relative overflow-hidden bg-[#f1ede7] py-10 md:py-12 lg:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-32deg, transparent, transparent 18px, #111820 18px, #111820 19px)",
          }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Eyebrow tone="light">{cta.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-ink md:text-[34px] lg:text-[38px]">
              <HighlightText content={cta.heading} />
            </h2>
            <span className="mt-4 block h-[3px] w-14 rounded-full bg-brand" aria-hidden="true" />
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/75">{cta.intro}</p>
          </div>

          <div className="hidden justify-center lg:col-span-1 lg:flex" aria-hidden="true">
            <span className="h-28 w-[3px] rounded-full bg-brand" />
          </div>

          <div className="lg:col-span-5">
            <Link
              href={cta.button.href}
              className="group flex w-full items-center gap-3 rounded-xl bg-linear-to-b from-[#f0783c] to-brand px-5 py-4 text-white shadow-[0_14px_32px_rgba(232,93,38,0.35)] transition-transform hover:-translate-y-0.5 md:gap-4 md:px-6 md:py-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/35 bg-white/10">
                <Icon name={cta.button.icon || "mail"} className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="min-w-0 flex-1 text-left text-[15px] font-extrabold leading-snug md:text-[16px]">
                {cta.button.label}
              </span>
              <Icon
                name="arrowRight"
                className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
                strokeWidth={2.4}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}