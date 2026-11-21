import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import SoftFadeHeading from "../ui/SoftFadeHeading";
import Icon from "../ui/Icon";

function EngineFaqCard({ item, defaultOpen = false }) {
  return (
    <details
      className="group overflow-hidden rounded-2xl border border-[#e8e2d9] bg-white shadow-[0_8px_20px_rgba(13,15,18,0.06)]"
      {...(defaultOpen ? { defaultOpen: true } : {})}
    >
      <summary className="flex cursor-pointer list-none items-center gap-3 bg-[#f3eee7] px-4 py-3.5 marker:content-none md:px-5 md:py-4 [&::-webkit-details-marker]:hidden">
        <h3 className="min-w-0 flex-1 text-[14.5px] font-bold leading-snug text-ink md:text-[15.5px]">
          {item.question}
        </h3>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-sm">
          <Icon
            name="chevronDown"
            className="h-3.5 w-3.5 transition-transform duration-200 group-open:rotate-180"
            strokeWidth={2.6}
          />
        </span>
      </summary>
      <div className="border-t border-[#e8e2d9] px-4 py-3.5 md:px-5 md:py-4">
        <p className="border-l-[3px] border-brand pl-3.5 text-[13.5px] leading-relaxed text-ink/75 md:pl-4 md:text-[14.5px]">
          {item.answer}
        </p>
      </div>
    </details>
  );
}

export default function Section10({ data }) {
  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
      <SoftFadeHeading imageSrc={data.image.src} imageAlt={data.image.alt || ""}>
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} size="brand" headingClassName="max-w-[720px]" />
      </SoftFadeHeading>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block" aria-hidden="true">
        <Image
          src={data.image.src}
          alt=""
          fill
          sizes="48vw"
          quality={100}
          unoptimized
          className="object-cover object-[75%_40%] opacity-90 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#f6f2ed] via-[#f6f2ed]/45 to-transparent" />
      </div>

      <div className="container-site relative z-10 pb-6 pt-4 md:pb-7 md:pt-5 lg:py-8">
        <div className="hidden max-w-[720px] lg:block">
          <SectionHeading
            eyebrow={data.eyebrow}
            heading={data.heading}
            size="brand"
            headingClassName="max-w-[720px]"
          />
        </div>

        <div className="mt-4 max-w-[860px] space-y-2.5 sm:mt-5 sm:space-y-3 lg:mt-6">
          {data.items.map((item, i) => (
            <EngineFaqCard key={item.question} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
