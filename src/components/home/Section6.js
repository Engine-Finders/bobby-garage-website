import data from "../../data/home-data/section6.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import StepCard from "./section6/StepCard";
import StepConnector from "./section6/StepConnector";
import BottomCurve from "./section6/BottomCurve";

export default function Section6() {
  return (
    <SectionShell
      id={data.id}
      tone="light"
      bgImages={data.bgImages}
      backdrop={<BottomCurve />}
      padding="py-16 md:py-20 lg:py-24"
    >
      <SectionHeading
        align="center"
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        introClassName="max-w-[760px]"
      />

      <ol className="mx-auto mt-20 grid max-w-md grid-cols-1 gap-y-28 lg:mt-24 lg:max-w-none lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
        {data.steps.map((step, i) => (
          <li key={step.number} className="relative">
            <StepCard step={step} stepLabel={data.stepLabel} />
            {i < data.steps.length - 1 && <StepConnector />}
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
