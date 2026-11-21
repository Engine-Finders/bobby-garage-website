import Image from "next/image";
import Eyebrow from "../ui/Eyebrow";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";
import EnquiryForm from "../home/section12/EnquiryForm";

export default function Section11({ data }) {
  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-primary-dark text-white">
      {/* Mobile */}
      <div className="container-site relative py-7 lg:hidden">
        <Eyebrow tone="dark">{data.eyebrow}</Eyebrow>
        <h2 className="mt-2.5 max-w-[18ch] text-[26px] font-extrabold leading-[1.1] tracking-[-0.02em]">
          <HighlightText content={data.heading} />
        </h2>
        <span className="mt-3 block h-[3px] w-12 rounded-full bg-brand" aria-hidden="true" />
        <p className="mt-3 max-w-[42ch] text-[13.5px] leading-relaxed text-white/75">{data.intro}</p>

        <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={data.image.src}
            alt={data.image.alt || ""}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="mt-5">
          <EnquiryForm form={data.form} compact />
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3">
          <Icon name={data.workshop.icon || "mapPin"} className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.8} />
          <p className="text-[12.5px] leading-snug text-white/80">
            <span className="font-bold text-white">{data.workshop.label}:</span> {data.workshop.value}
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="container-site relative hidden py-9 lg:block lg:py-10">
        <div className="grid grid-cols-12 items-stretch gap-8">
          <div className="col-span-5 flex flex-col">
            <Eyebrow tone="dark">{data.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] xl:text-[42px]">
              <HighlightText content={data.heading} />
            </h2>
            <span className="mt-4 block h-[3px] w-14 rounded-full bg-brand" aria-hidden="true" />
            <p className="mt-4 max-w-[460px] text-[15px] leading-relaxed text-white/75">{data.intro}</p>

            <div className="relative mt-6 min-h-[220px] flex-1 overflow-hidden rounded-2xl">
              <Image
                src={data.image.src}
                alt={data.image.alt || ""}
                fill
                sizes="40vw"
                quality={100}
                unoptimized
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="col-span-7 xl:col-span-6 xl:col-start-7">
            <EnquiryForm form={data.form} />
          </div>
        </div>

        <div className="mt-7 flex items-center gap-3 rounded-xl border border-brand/40 bg-white/[0.03] px-5 py-3.5">
          <Icon name={data.workshop.icon || "mapPin"} className="h-5 w-5 shrink-0 text-brand" strokeWidth={1.8} />
          <p className="text-[14px] leading-snug text-white/85">
            <span className="font-bold text-white">{data.workshop.label}:</span> {data.workshop.value}
          </p>
        </div>
      </div>
    </section>
  );
}
