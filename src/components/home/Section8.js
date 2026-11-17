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

function NoticeList({ rows, compact = false }) {
  return (
    <Card variant="glass" className={`overflow-hidden ${compact ? "mt-3" : "mt-4"}`}>
      {rows.map((row, i) => (
        <div
          key={row.notice}
          className={`flex items-center gap-3.5 px-4 ${compact ? "min-h-[64px] py-3" : "min-h-[76px] gap-4 px-5 xl:gap-5 xl:px-6"} ${
            i < rows.length - 1 ? "border-b border-ink/10" : ""
          }`}
        >
          <SymptomIcon name={row.icon} tone={row.iconTone} className={compact ? "h-8! w-8!" : ""} />
          <p className={`flex-1 font-medium leading-snug text-ink ${compact ? "text-[14.5px]" : "text-[16px] xl:text-[17px]"}`}>
            {row.notice}
          </p>
          <Icon name="chevronRight" className={`shrink-0 text-brand ${compact ? "h-4 w-4" : "h-5 w-5"}`} strokeWidth={2.4} />
        </div>
      ))}
    </Card>
  );
}

function EstablishList({ rows, compact = false, checkTone = "brand" }) {
  return (
    <Card variant="glass" className={`overflow-hidden ${compact ? "mt-3" : "mt-4"}`}>
      {rows.map((row, i) => (
        <div
          key={row.establish}
          className={`flex items-center gap-3.5 px-4 ${compact ? "min-h-[64px] py-3" : "min-h-[76px] gap-4 px-5 xl:gap-5 xl:px-7"} ${
            i < rows.length - 1 ? "border-b border-ink/10" : ""
          }`}
        >
          <CheckBadge tone={checkTone} className={compact ? "h-7! w-7!" : ""} />
          <p className={`leading-snug text-ink/90 ${compact ? "text-[14px]" : "text-[16px] xl:text-[17px]"}`}>{row.establish}</p>
        </div>
      ))}
    </Card>
  );
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
      padding="py-7 md:py-10 lg:py-12"
    >
      {warningLight && (
        <WarningLight
          icon={warningLight.icon}
          label={warningLight.label}
          className="top-2 right-[4%] hidden sm:flex sm:h-[72px] sm:w-[92px] lg:top-0 lg:right-[10%] lg:flex lg:h-[104px] lg:w-[132px] xl:right-[16%]"
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

      {/* Mobile / tablet: stacked lists like the reference */}
      <div className="mt-9 space-y-6 md:mt-10 lg:hidden">
        <div>
          <HeadingStrip icon={columns.notice.icon} title={columns.notice.title} />
          <NoticeList rows={rows} compact />
        </div>

        <div>
          <HeadingStrip icon={columns.establish.icon} title={columns.establish.title} />
          <EstablishList rows={rows} compact checkTone="dark" />
        </div>
      </div>

      {/* Desktop: two aligned columns */}
      <div className="mt-10 hidden lg:grid lg:grid-cols-[2fr_3fr] lg:gap-x-8 xl:gap-x-10">
        <div>
          <HeadingStrip icon={columns.notice.icon} title={columns.notice.title} />
          <NoticeList rows={rows} />
        </div>

        <div>
          <HeadingStrip icon={columns.establish.icon} title={columns.establish.title} />
          <EstablishList rows={rows} />
        </div>
      </div>

      <NoteBar icon={warning.icon} text={warning.text} className="mt-8 md:mt-10" />
    </SectionShell>
  );
}
