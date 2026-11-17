import data from "../../data/home-data/section3.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import BrandLogo from "./section3/BrandLogo";
import PriceBadge from "./section3/PriceBadge";
import NotePanel from "./section3/NotePanel";
import SideStripes from "./section3/SideStripes";
import MobilePriceCard from "./section3/MobilePriceCard";

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
      tone="dark"
      bgImages={[{ ...data.bgImage, opacity: data.bgImage.opacity ?? 0.4 }]}
      backdrop={<SideStripes />}
      padding="py-7 md:py-10 lg:py-12"
      className="md:bg-[linear-gradient(180deg,#fbfaf8_0%,#f5f2ee_100%)] md:text-ink"
    >
      <SectionHeading
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        align="left"
        tone="dark"
        headingClassName="[&>span:last-child]:block md:text-ink"
        introClassName="max-w-[720px] md:text-ink/75"
        className="[&_p]:md:text-ink"
      />

      {/* Mobile stacked cards */}
      <ul className="mt-8 grid grid-cols-1 gap-3 md:hidden">
        {rows.map((row) => (
          <MobilePriceCard key={row.vehicle} row={row} />
        ))}
      </ul>

      {/* Tablet / desktop table */}
      <Card variant="glass" className="mt-8 hidden overflow-hidden shadow-[0_18px_44px_rgba(13,15,18,0.12)] md:mt-10 md:block">
        <table className="w-full table-fixed border-collapse">
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
      </Card>

      <div className="mt-6 grid grid-cols-1 gap-3 md:mt-8 md:grid-cols-[3fr_2fr] md:gap-6">
        {notes.map((note) => (
          <NotePanel key={note.icon} icon={note.icon} text={note.text} />
        ))}
      </div>
    </SectionShell>
  );
}
