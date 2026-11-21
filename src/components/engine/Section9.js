import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import SoftFadeHeading from "../ui/SoftFadeHeading";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

export default function Section9({ data }) {
  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
      {/* Soft-fade image on mobile + desktop right fade */}
      <SoftFadeHeading imageSrc={data.image.src} imageAlt={data.image.alt || ""}>
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} size="brand" headingClassName="max-w-[640px]" />
      </SoftFadeHeading>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] lg:block" aria-hidden="true">
        <Image
          src={data.image.src}
          alt=""
          fill
          sizes="50vw"
          quality={100}
          unoptimized
          className="object-cover object-[75%_40%] opacity-95"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#f6f2ed] via-[#f6f2ed]/35 to-transparent" />
      </div>

      <div className="container-site relative z-10 pb-6 pt-4 md:pb-7 md:pt-5 lg:py-8">
        <div className="hidden max-w-[640px] lg:block">
          <SectionHeading
            eyebrow={data.eyebrow}
            heading={data.heading}
            size="brand"
            headingClassName="max-w-[640px]"
          />
        </div>

        <ul className="mt-4 max-w-[720px] space-y-3 sm:mt-5 sm:space-y-3.5 lg:mt-6">
          {data.items.map((item) => (
            <li key={item.text.slice(0, 40)} className="flex items-start gap-3 sm:gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-[#fff3ea] text-brand sm:h-11 sm:w-11">
                <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <p className="min-w-0 pt-1.5 text-[13.5px] leading-snug text-ink/80 sm:pt-2 sm:text-[14.5px]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex justify-center sm:mt-6 md:mt-7">
          <Button href={data.cta.href} size="lg" className="w-full gap-3 sm:w-auto sm:min-w-[320px]">
            <Icon name={data.cta.icon || "clipboardCheck"} className="h-5 w-5" strokeWidth={2} />
            {data.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
