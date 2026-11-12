import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";

export default function Section6({ data }) {
  const { parts, gallery, warranty } = data;

  return (
    <>
      {/* Parts — light + diagonal photo */}
      <section id={data.id} className="relative isolate overflow-hidden bg-[#f6f2ed] text-ink">
        <div
          className="absolute inset-y-0 right-0 hidden w-[42%] lg:block"
          style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        >
          <Image src={parts.image.src} alt="" fill sizes="42vw" className="object-cover object-center" />
          <div className="absolute inset-y-0 left-[14%] w-[5px] -skew-x-[14deg] bg-brand" aria-hidden="true" />
        </div>

        <div className="container-site relative z-10 py-10 md:py-12 lg:py-14">
          <div className="max-w-[620px]">
            <SectionHeading eyebrow={parts.eyebrow} heading={parts.heading} intro={parts.intro} />
          </div>

          <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl lg:hidden">
            <Image src={parts.image.src} alt={parts.image.alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-10 lg:max-w-[58%] lg:grid-cols-5 lg:gap-2.5 xl:gap-3">
            {parts.features.map((feature) => (
              <li
                key={feature.title}
                className="flex flex-col items-center rounded-2xl border border-[#e8e2d9] bg-[#efeae3] px-3 py-5 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff3ea] text-brand">
                  <Icon name={feature.icon} className="h-6 w-6" strokeWidth={1.55} />
                </span>
                <p className="mt-3 text-[13px] font-bold leading-snug text-ink md:text-[13.5px]">{feature.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section id={gallery.id} className="bg-primary-dark py-10 text-white md:py-12 lg:py-14">
        <div className="container-site">
          <SectionHeading eyebrow={gallery.eyebrow} heading={gallery.heading} tone="dark" />

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {gallery.items.map((item) => (
              <li key={item.caption}>
                <article className="overflow-hidden rounded-[14px] border border-white/10 bg-[#e9e5df]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="px-3 py-3.5 text-center text-[12.5px] font-semibold leading-snug text-ink/85 md:text-[13.5px]">
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
        <div className="container-site relative z-10 grid grid-cols-1 gap-10 py-10 md:py-12 lg:grid-cols-12 lg:items-start lg:gap-14 lg:py-14">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={warranty.eyebrow} heading={warranty.heading} headingClassName="max-w-[440px]" />

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
