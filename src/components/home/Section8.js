import data from "../../data/home-data/section8.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import HeadingStrip from "../ui/HeadingStrip";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import NoteBar from "../ui/NoteBar";
import CheckBadge from "./section8/CheckBadge";
import WarningLight from "./section8/WarningLight";

const toneClass = {
  ink: "text-ink",
  brand: "text-brand",
};

function SymptomIcon({ name, tone, className = "" }) {
  return <Icon name={name} className={`h-9 w-9 shrink-0 md:h-10 md:w-10 ${toneClass[tone] || "text-ink"} ${className}`} strokeWidth={1.6} />;
}

export default function Section8() {
  const { rows, columns, warning, warningLight, backgrounds } = data;

  return (
    <SectionShell
      id={data.id}
      tone="light"
      bgImages={backgrounds}
      accents={[
        {
          position: "top-right",
          count: 2,
          length: "h-72 md:h-[26rem]",
          className: "right-[6%] lg:right-[38%]!",
        },
      ]}
      padding="py-14 md:py-20 lg:py-24"
    >
      {warningLight && (
        <WarningLight
          icon={warningLight.icon}
          label={warningLight.label}
          className="top-0 right-[10%] hidden lg:flex xl:right-[16%]"
        />
      )}

      <SectionHeading
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        headingClassName="sm:whitespace-pre-line"
        introClassName="max-w-[640px]"
        className="max-w-[760px]"
      />

      {/* Desktop: two aligned columns */}
      <div className="mt-10 hidden lg:grid lg:grid-cols-[2fr_3fr] lg:gap-x-8 xl:gap-x-10">
        <div>
          <HeadingStrip icon={columns.notice.icon} title={columns.notice.title} />
          <Card variant="glass" className="mt-4 grid auto-rows-[76px] overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={row.notice}
                className={`flex items-center gap-4 px-5 xl:gap-5 xl:px-6 ${i < rows.length - 1 ? "border-b border-ink/10" : ""}`}
              >
                <SymptomIcon name={row.icon} tone={row.iconTone} />
                <p className="flex-1 text-[16px] font-medium leading-snug text-ink xl:text-[17px]">{row.notice}</p>
                <Icon name="chevronRight" className="h-5 w-5 shrink-0 text-brand" strokeWidth={2.4} />
              </div>
            ))}
          </Card>
        </div>

        <div>
          <HeadingStrip icon={columns.establish.icon} title={columns.establish.title} />
          <Card variant="glass" className="mt-4 grid auto-rows-[76px] overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={row.establish}
                className={`flex items-center gap-4 px-5 xl:gap-5 xl:px-7 ${i < rows.length - 1 ? "border-b border-ink/10" : ""}`}
              >
                <CheckBadge />
                <p className="text-[16px] leading-snug text-ink/90 xl:text-[17px]">{row.establish}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>

      {/* Mobile / tablet: one paired card per symptom */}
      <ul className="mt-9 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-5 lg:hidden">
        {rows.map((row) => (
          <li key={row.notice}>
            <Card variant="glass" className="h-full overflow-hidden">
              <div className="flex items-start gap-4 p-4 md:p-5">
                <SymptomIcon name={row.icon} tone={row.iconTone} className="mt-0.5" />
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand">{columns.notice.title}</p>
                  <p className="mt-1 text-[17px] font-semibold leading-snug text-ink">{row.notice}</p>
                </div>
              </div>
              <div className="border-t border-ink/10 bg-white/60 p-4 md:p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-text-grey">{columns.establish.title}</p>
                <div className="mt-2 flex items-start gap-3">
                  <CheckBadge className="mt-px h-7! w-7! md:h-7! md:w-7!" />
                  <p className="text-[15px] leading-relaxed text-ink/85">{row.establish}</p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <NoteBar icon={warning.icon} text={warning.text} className="mt-8 md:mt-10" />
    </SectionShell>
  );
}
