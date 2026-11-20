import Image from "next/image";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";

export default function Section10({ data }) {
  return (
    <section id={data.id} className="bg-[#f6f2ed] py-6 text-ink md:py-7 lg:py-8">
      <div className="container-site">
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-8">
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl lg:col-span-5 lg:min-h-[340px]">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              quality={100}
              unoptimized
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <h2 className="max-w-[560px] text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[34px] md:text-[40px] lg:text-[48px]">
              <HighlightText content={data.heading} />
            </h2>
            <span className="mt-3 block h-[3px] w-14 rounded-full bg-brand" aria-hidden="true" />

            <ul className="mt-5 space-y-3.5">
              {data.details.map((detail) => (
                <li key={detail.label} className="flex items-start gap-3">
                  <Icon name={detail.icon} className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.7} />
                  <div className="min-w-0">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-[14.5px] leading-snug text-ink/85 hover:text-brand md:text-[15.5px]"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-[14.5px] leading-snug text-ink/85 md:text-[15.5px]">{detail.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-5 border-t border-[#ddd6cc] pt-5">
              <p className="text-[15px] font-bold text-ink md:text-[16px]">
                Email{" "}
                <a href={data.email.href} className="text-brand hover:underline">
                  {data.email.address}
                </a>{" "}
                with:
              </p>
              <ul className="mt-3 space-y-2">
                {data.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
                    <span className="text-[13.5px] leading-snug text-ink/75 md:text-[14.5px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
