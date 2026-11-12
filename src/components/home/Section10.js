import data from "../../data/home-data/section10.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";
import PartsGallery from "./section10/PartsGallery";
import OptionCard from "./section10/OptionCard";

export default function Section10() {
  const { parts, repairOrRebuild } = data;

  return (
    <SectionShell id={data.id} tone="light" padding="py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={parts.eyebrow}
            heading={parts.heading}
            intro={parts.intro}
            headingClassName="lg:whitespace-pre-line"
            introClassName="max-w-[520px]"
          />

          <ul className="mt-7 divide-y divide-warm-border border-y border-warm-border">
            {parts.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3.5 py-3.5 text-[15px] leading-snug text-ink md:text-base">
                <Icon name="checkCircle" className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 space-y-3 text-[14px] leading-relaxed text-ink/70 md:text-[15px]">
            {parts.details.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <PartsGallery images={parts.images} />
        </div>
      </div>

      <div className="mt-12 rounded-[28px] border border-black/[0.06] bg-white/85 p-6 shadow-[0_18px_44px_rgba(13,15,18,0.10)] backdrop-blur-sm md:mt-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-6">
            <h3 className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink md:text-[34px] lg:text-[38px] lg:whitespace-pre-line">
              <HighlightText content={repairOrRebuild.heading} />
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/75 md:text-base">{repairOrRebuild.intro}</p>
            <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-ink/65 md:text-[15px]">
              {repairOrRebuild.details.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="hidden h-full w-px bg-warm-border lg:col-span-1 lg:mx-auto lg:block" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
            {repairOrRebuild.options.map((option) => (
              <OptionCard key={option.title} option={option} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
