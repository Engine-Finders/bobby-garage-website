import data from "../../data/home-data/section7.json";
import SectionShell from "../ui/SectionShell";
import DiagonalSectionHeader from "../ui/DiagonalSectionHeader";
import NoteBar from "../ui/NoteBar";
import CoverageBar from "./section7/CoverageBar";
import EngineCard from "./section7/EngineCard";

export default function Section7() {
  return (
    <section id={data.id} className="relative">
      <DiagonalSectionHeader
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        imageSrc={data.headerImage}
        headingClassName="[&>span:first-child]:block"
      />

      <SectionShell tone="light" padding="pt-3 pb-6 md:pt-4 md:pb-8 lg:pt-5 lg:pb-9">
        <CoverageBar bar={data.coverageBar} />

        <ul className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 xl:grid-cols-5 xl:gap-4 2xl:gap-5">
          {data.rows.map((row) => (
            <EngineCard key={row.enquiry} row={row} />
          ))}
        </ul>

        <NoteBar icon={data.note.icon} paragraphs={data.note.paragraphs} className="mt-6 md:mt-8" />
      </SectionShell>
    </section>
  );
}
