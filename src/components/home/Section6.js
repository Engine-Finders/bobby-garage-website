import data from "../../data/home-data/section6.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import StepCard from "./section6/StepCard";
import StepConnector from "./section6/StepConnector";
import MobileStepCard from "./section6/MobileStepCard";
import MobileStepConnector from "./section6/MobileStepConnector";
import BottomCurve from "./section6/BottomCurve";

export default function Section6() {
  return (
    <SectionShell
      id={data.id}
      tone="light"
      bgImages={data.bgImages}
      backdrop={<BottomCurve />}
      padding="py-8 md:py-10 lg:py-12"
    >
      <SectionHeading
        align="left"
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        className="lg:mx-auto lg:text-center lg:[&>p:first-child]:justify-center"
        introClassName="max-w-[760px] lg:mx-auto"
      />

      {/* Mobile vertical timeline */}
      <ol className="relative mx-auto mt-10 max-w-md lg:hidden">
        {data.steps.map((step, i) => (
          <li key={step.number}>
            <MobileStepCard step={step} stepLabel={data.stepLabel} />
            {i < data.steps.length - 1 ? <MobileStepConnector /> : null}
          </li>
        ))}
      </ol>

      {/* Desktop / tablet horizontal steps */}
      <ol className="mx-auto mt-20 hidden max-w-md grid-cols-1 gap-y-28 lg:mt-24 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
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
