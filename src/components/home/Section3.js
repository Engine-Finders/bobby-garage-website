import data from "../../data/home-data/section3.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import BrandLogo from "./section3/BrandLogo";
import PriceBadge from "./section3/PriceBadge";
import NotePanel from "./section3/NotePanel";
import SideStripes from "./section3/SideStripes";

const headerCell =
  "relative px-3 py-4 text-left text-[13px] font-semibold text-white md:px-4 lg:px-6 lg:text-[15px] " +
  "[&:not(:first-child)]:after:absolute [&:not(:first-child)]:after:left-0 [&:not(:first-child)]:after:top-1/2 " +
  "[&:not(:first-child)]:after:h-7 [&:not(:first-child)]:after:w-px [&:not(:first-child)]:after:-translate-y-1/2 " +
  "[&:not(:first-child)]:after:bg-white/15";

export default function Section3() {
  const { tableColumns, rows, notes } = data;

  return (
    <SectionShell
      id={data.id}
      tone="light"
      bgImages={[data.bgImage]}
      backdrop={<SideStripes />}
      padding="py-14 md:py-20 lg:py-24"
    >
      <SectionHeading
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        align="left"
        headingClassName="[&>span:last-child]:block"
        introClassName="max-w-[720px]"
      />

      <Card variant="glass" className="mt-8 overflow-hidden shadow-[0_18px_44px_rgba(13,15,18,0.12)] md:mt-10">
        {/* Tablet / desktop table */}
        <table className="hidden w-full table-fixed border-collapse md:table">
          <caption className="sr-only">{data.heading.map((p) => p.text).join(" ")}</caption>
          <colgroup>
            <col className="w-[43%]" />
            <col className="w-[22%]" />
            <col className="w-[35%]" />
          </colgroup>
          <thead>
            <tr className="bg-linear-to-r from-primary-dark to-charcoal">
              <th scope="col" className={headerCell}>
                <span className="flex items-center gap-2.5 lg:gap-3">
                  <Icon name="car" className="size-5 shrink-0 text-brand lg:size-[26px]" />
                  {tableColumns.vehicle}
                </span>
              </th>
              <th scope="col" className={headerCell}>
                <span className="flex items-center gap-2.5 lg:gap-3">
                  <Icon name="coins" className="size-5 shrink-0 text-brand lg:size-[26px]" />
                  {tableColumns.guide}
                </span>
              </th>
              <th scope="col" className={headerCell}>
                <span className="flex items-center gap-2.5 lg:gap-3">
                  <Icon name="cog" className="size-5 shrink-0 text-brand lg:size-[26px]" />
                  {tableColumns.application}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.vehicle}
                className={`transition-colors duration-150 hover:bg-[#fdf1e9] ${
                  i % 2 === 0 ? "bg-white/70" : "bg-[#f6f2ed]/70"
                }`}
              >
                <th
                  scope="row"
                  className="h-14 border-t border-warm-border/70 px-3 py-2 text-left font-bold text-ink md:px-4 lg:px-6"
                >
                  <span className="flex items-center gap-3 lg:gap-4">
                    <BrandLogo src={row.logo} alt={row.logoAlt} />
                    <span className="h-8 w-px shrink-0 bg-warm-border" aria-hidden="true" />
                    <span className="text-[13px] leading-snug lg:text-[15px]">{row.vehicle}</span>
                  </span>
                </th>
                <td className="border-t border-warm-border/70 px-3 py-2 md:px-4 lg:px-6">
                  <PriceBadge>{row.guide}</PriceBadge>
                </td>
                <td className="border-t border-warm-border/70 px-3 py-2 text-[13px] leading-snug text-ink/80 md:px-4 lg:px-6 lg:text-[15px]">
                  {row.application}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile stacked cards */}
        <ul className="grid grid-cols-1 divide-y divide-warm-border/70 md:hidden">
          {rows.map((row, i) => (
            <li key={row.vehicle} className={`p-4 ${i % 2 === 0 ? "bg-white/70" : "bg-[#f6f2ed]/70"}`}>
              <div className="flex items-center gap-3">
                <BrandLogo src={row.logo} alt={row.logoAlt} />
                <span className="h-8 w-px shrink-0 bg-warm-border" aria-hidden="true" />
                <p className="text-[15px] font-bold leading-snug text-ink">{row.vehicle}</p>
              </div>
              <div className="mt-3">
                <PriceBadge>{row.guide}</PriceBadge>
              </div>
              <p className="mt-3 text-[12px] font-bold uppercase tracking-wide text-text-grey">
                {tableColumns.applicationMobile}
              </p>
              <p className="mt-0.5 text-[14px] leading-relaxed text-ink/80">{row.application}</p>
            </li>
          ))}
        </ul>
      </Card>

      <div className="mt-6 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-[3fr_2fr] md:gap-6">
        {notes.map((note) => (
          <NotePanel key={note.icon} icon={note.icon} text={note.text} />
        ))}
      </div>
    </SectionShell>
  );
}
