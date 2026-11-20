import data from "../../data/home-data/section9.json";
import SectionShell from "../ui/SectionShell";
import DiagonalSectionHeader from "../ui/DiagonalSectionHeader";
import ProcessCard from "./section9/ProcessCard";
import ProcessBar from "./section9/ProcessBar";

export default function Section9() {
  return (
    <section id={data.id} className="relative">
      <DiagonalSectionHeader
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        imageSrc={data.headerImage}
        headingClassName="lg:whitespace-pre-line"
      />

      <SectionShell tone="light" padding="pt-3 pb-6 md:pt-4 md:pb-8 lg:pt-5 lg:pb-9">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {data.stages.map((stage) => (
            <li key={stage.number}>
              <ProcessCard stage={stage} />
            </li>
          ))}
        </ul>

        <div className="mt-6 md:mt-8">
          <ProcessBar icon={data.closingBar.icon} title={data.closingBar.title} text={data.closingBar.text} />
        </div>
      </SectionShell>
    </section>
  );
}
