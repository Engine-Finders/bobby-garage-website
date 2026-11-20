import data from "../../data/home-data/section8.json";
import SectionShell from "../ui/SectionShell";
import DiagonalSectionHeader from "../ui/DiagonalSectionHeader";
import HeadingStrip from "../ui/HeadingStrip";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import NoteBar from "../ui/NoteBar";
import CheckBadge from "./section8/CheckBadge";

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
  const { rows, columns, warning } = data;

  return (
    <section id={data.id} className="relative">
      <DiagonalSectionHeader
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        imageSrc={data.headerImage}
        headingClassName="sm:whitespace-pre-line"
      />

      <SectionShell tone="light" padding="pt-3 pb-6 md:pt-4 md:pb-8 lg:pt-5 lg:pb-9">
        <div className="space-y-5 lg:hidden">
          <div>
            <HeadingStrip icon={columns.notice.icon} title={columns.notice.title} />
            <NoticeList rows={rows} compact />
          </div>

          <div>
            <HeadingStrip icon={columns.establish.icon} title={columns.establish.title} />
            <EstablishList rows={rows} compact checkTone="dark" />
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[2fr_3fr] lg:gap-x-8 xl:gap-x-10">
          <div>
            <HeadingStrip icon={columns.notice.icon} title={columns.notice.title} />
            <NoticeList rows={rows} />
          </div>

          <div>
            <HeadingStrip icon={columns.establish.icon} title={columns.establish.title} />
            <EstablishList rows={rows} />
          </div>
        </div>

        <NoteBar icon={warning.icon} text={warning.text} className="mt-6 md:mt-8" />
      </SectionShell>
    </section>
  );
}
