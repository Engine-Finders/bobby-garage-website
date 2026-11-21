import Image from "next/image";
import data from "../../data/home-data/section12.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import Eyebrow from "../ui/Eyebrow";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";
import FaqCard from "./section12/FaqCard";
import EnquiryForm from "./section12/EnquiryForm";

export default function Section12() {
  const { faqs, contact } = data;

  return (
    <>
      <SectionShell id={faqs.id} tone="light" padding="py-6 md:py-10 lg:py-12">
        <SectionHeading
          eyebrow={faqs.eyebrow}
          heading={faqs.heading}
          intro={faqs.intro}
          headingClassName="max-w-[900px]"
          introClassName="max-w-[640px]"
        />

        <div className="mt-6 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-2 md:gap-6">
          {faqs.items.map((item) => (
            <FaqCard key={item.question} item={item} />
          ))}
        </div>
      </SectionShell>

      <section id={contact.id} className="relative isolate overflow-hidden bg-primary-dark text-white">
        {/* Mobile layout */}
        <div className="container-site relative py-7 lg:hidden">
          <div
            className="pointer-events-none absolute -right-4 top-0 z-0 h-52 w-[58%] overflow-hidden opacity-95"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <Image
                src={contact.image.src}
                alt=""
                fill
                sizes="60vw"
                quality={100}
                unoptimized
                className="object-cover object-center"
              />
            </div>
            <svg
              className="absolute inset-0 z-[1] h-full w-full text-brand"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 24 0 L 0 100"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <Eyebrow tone="dark">{contact.eyebrow}</Eyebrow>
            <h2 className="mt-2.5 max-w-[14ch] text-[26px] font-extrabold leading-[1.1] tracking-[-0.02em] [text-shadow:0_1px_2px_rgba(0,0,0,0.55),0_0_18px_rgba(0,0,0,0.35)]">
              <HighlightText content={contact.heading} />
            </h2>
            <span className="mt-3 block h-[3px] w-12 rounded-full bg-brand" aria-hidden="true" />
            <p className="mt-3 max-w-[34ch] text-[13.5px] leading-relaxed text-white/75 [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
              {contact.intro}
            </p>

            <ul className="mt-5 grid grid-cols-3 gap-2">
              {contact.details.map((detail) => (
                <li key={detail.label} className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-brand/40 bg-brand/10 text-brand">
                      <Icon name={detail.icon} className="h-3.5 w-3.5" strokeWidth={1.8} />
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.04em] text-white">{detail.label}</p>
                  </div>
                  {detail.href ? (
                    <a href={detail.href} className="mt-1.5 block break-words text-[10.5px] leading-snug text-white/70 hover:text-brand">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-[10.5px] leading-snug text-white/70">{detail.value}</p>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <EnquiryForm form={contact.form} compact />
            </div>
          </div>
        </div>

        {/* Desktop / tablet layout */}
        <div className="container-site relative hidden grid-cols-1 gap-10 py-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-10">
          <div className="relative z-10 lg:col-span-4">
            <Eyebrow tone="dark">{contact.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[36px] lg:whitespace-pre-line lg:text-[40px]">
              <HighlightText content={contact.heading} />
            </h2>
            <span className="mt-4 block h-[3px] w-14 rounded-full bg-brand" aria-hidden="true" />
            <p className="mt-4 text-[15px] leading-relaxed text-white/75 md:text-base">{contact.intro}</p>

            <ul className="mt-8 divide-y divide-white/10">
              {contact.details.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand/40 bg-brand/10 text-brand">
                    <Icon name={detail.icon} className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold uppercase tracking-[0.04em] text-white">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="mt-1 block text-[14px] leading-snug text-white/75 hover:text-brand md:text-[15px]">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[14px] leading-snug text-white/75 md:text-[15px]">{detail.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 lg:col-span-4 lg:col-start-9">
            <EnquiryForm form={contact.form} />
          </div>

          <div className="absolute inset-y-0 right-[28%] left-[38%]">
            {/* Image only to the right of the orange seam; left stays solid section bg */}
            <div className="absolute inset-0 [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
              <Image
                src={contact.image.src}
                alt={contact.image.alt || "Boby Engine Work workshop"}
                fill
                sizes="608px"
                quality={100}
                unoptimized
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-primary-dark/35" aria-hidden="true" />
            </div>
            <svg
              className="pointer-events-none absolute inset-0 z-[2] h-full w-full text-brand"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 14 0 L 0 100"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
