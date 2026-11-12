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
      <SectionShell id={faqs.id} tone="light" padding="py-16 md:py-20 lg:py-24">
        <SectionHeading
          eyebrow={faqs.eyebrow}
          heading={faqs.heading}
          intro={faqs.intro}
          headingClassName="max-w-[900px]"
          introClassName="max-w-[640px]"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {faqs.items.map((item) => (
            <FaqCard key={item.question} item={item} />
          ))}
        </div>
      </SectionShell>

      <section id={contact.id} className="relative isolate overflow-hidden bg-primary-dark text-white">
        <div className="container-site relative grid grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-20">
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

          <div className="relative z-10 order-3 lg:order-none lg:col-span-4 lg:col-start-9">
            <EnquiryForm form={contact.form} />
          </div>

          <div className="relative order-2 aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[16/9] lg:absolute lg:inset-y-0 lg:right-[28%] lg:left-[38%] lg:aspect-auto lg:rounded-none lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
            <Image
              src={contact.image.src}
              alt={contact.image.alt || "Boby Engine Work workshop"}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary-dark/35" aria-hidden="true" />
            <span
              className="pointer-events-none absolute inset-y-0 left-[6%] hidden w-[8px] -skew-x-[16deg] bg-brand lg:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </>
  );
}
