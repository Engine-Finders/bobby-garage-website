import data from "../../data/home-data/section9.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import ProcessCard from "./section9/ProcessCard";
import ProcessBar from "./section9/ProcessBar";

export default function Section9() {
  return (
    <SectionShell
      id={data.id}
      tone="light"
      bgImages={[{ src: data.background.src, position: "top-right", opacity: 0.55 }]}
      accents={[{ position: "top-right", count: 2, length: "h-64 md:h-80" }]}
      padding="py-16 md:py-20 lg:py-24"
    >
      <SectionHeading
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        headingClassName="max-w-[820px] lg:whitespace-pre-line"
        introClassName="max-w-[760px]"
      />

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
        {data.stages.map((stage) => (
          <li key={stage.number}>
            <ProcessCard stage={stage} />
          </li>
        ))}
      </ul>

      <div className="mt-10 md:mt-12">
        <ProcessBar icon={data.closingBar.icon} title={data.closingBar.title} text={data.closingBar.text} />
      </div>
    </SectionShell>
  );
}
