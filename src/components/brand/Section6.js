import Image from "next/image";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import DiagonalSectionHeader from "../ui/DiagonalSectionHeader";
import Icon from "../ui/Icon";

export default function Section6({ data }) {
  const { parts, gallery, warranty } = data;

  return (
    <>
      {/* Parts — diagonal header only; cards full width */}
      <section id={data.id} className="relative">
        <DiagonalSectionHeader
          eyebrow={parts.eyebrow}
          heading={parts.heading}
          intro={parts.intro}
          imageSrc={parts.headerImage}
          size="brand"
        />

        <SectionShell tone="light" padding="pt-2.5 pb-5 md:pt-3 md:pb-6 lg:pt-4 lg:pb-7">
          <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5 lg:gap-3">
            {parts.features.map((feature) => (
              <li
                key={feature.title}
                className="flex flex-col items-center rounded-xl border border-[#e8e2d9] bg-[#efeae3] px-2.5 py-4 text-center sm:rounded-2xl sm:px-3 sm:py-5 max-lg:[&:last-child:nth-child(odd)]:col-span-2 max-lg:[&:last-child:nth-child(odd)]:w-[calc(50%-0.25rem)] max-lg:[&:last-child:nth-child(odd)]:justify-self-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff3ea] text-brand sm:h-11 sm:w-11">
                  <Icon name={feature.icon} className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.55} />
                </span>
                <p className="mt-2.5 text-[12px] font-bold leading-snug text-ink sm:mt-3 sm:text-[13px] md:text-[13.5px]">
                  {feature.title}
                </p>
              </li>
            ))}
          </ul>
        </SectionShell>
      </section>

      {/* Gallery — compact cards on mobile */}
      <section id={gallery.id} className="bg-primary-dark py-7 text-white md:py-8 lg:py-9">
        <div className="container-site">
          <SectionHeading eyebrow={gallery.eyebrow} heading={gallery.heading} tone="dark" size="brand" />

          <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:gap-3">
            {gallery.items.map((item) => (
              <li key={item.caption}>
                <article className="overflow-hidden rounded-lg border border-white/10 bg-[#e9e5df] sm:rounded-[14px]">
                  <div className="relative aspect-[5/3] sm:aspect-[4/3]">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="px-2 py-2 text-center text-[11px] font-semibold leading-snug text-ink/85 sm:px-3 sm:py-3.5 sm:text-[12.5px] md:text-[13.5px]">
                    {item.caption}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Warranty — heading above; car image fully below H2 on the left */}
      <section className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
        <div className="container-site relative z-10 grid grid-cols-1 gap-8 py-7 md:py-8 lg:grid-cols-12 lg:items-start lg:gap-12 lg:py-9">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={warranty.eyebrow} heading={warranty.heading} size="brand" headingClassName="max-w-[440px]" />

            <div className="relative mt-1 -ml-4 w-[calc(100%+1rem)] overflow-hidden sm:-ml-6 sm:w-[calc(100%+1.5rem)] md:mt-1 lg:ml-0 lg:w-full lg:max-w-[420px]">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src={warranty.image.src}
                  alt={warranty.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
          </div>

          <ul className="lg:col-span-7 lg:pt-1">
            {warranty.items.map((item, i) => (
              <li
                key={item.title}
                className={`flex gap-4 py-6 md:gap-5 md:py-7 ${i > 0 ? "border-t border-[#ddd6cc]" : "pt-0 md:pt-1"}`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-[#fff3ea] text-brand shadow-[0_8px_18px_rgba(232,93,38,0.12)]">
                  <Icon name={item.icon} className="h-7 w-7" strokeWidth={1.55} />
                </span>
                <div className="min-w-0 border-l-[3px] border-brand pl-4 md:pl-5">
                  <h3 className="text-[18px] font-bold text-ink md:text-[20px]">{item.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink/75 md:text-[15.5px]">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
