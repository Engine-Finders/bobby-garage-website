import Card from "../../ui/Card";
import IconBadge from "../../ui/IconBadge";

const clip = "[clip-path:polygon(9%_0,100%_0,91%_100%,0_100%)]";

export default function StepCard({ step, stepLabel }) {
  return (
    <Card
      as="article"
      variant={step.highlight ? "highlight" : "glass"}
      hover
      className="relative flex h-full flex-col items-center px-6 pb-12 pt-16 text-center md:px-8 lg:px-6 xl:px-8"
    >
      <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <IconBadge icon={step.icon} shape="circle" size="lg" variant="white" className="ring-4 ring-white/70" />
      </span>

      <span
        className={`inline-block px-8 py-1.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white ${clip} ${
          step.highlight ? "bg-brand" : "bg-charcoal"
        }`}
      >
        {stepLabel} {step.number}
      </span>

      <h3 className="mt-5 max-w-[320px] text-balance text-[22px] font-extrabold leading-tight text-ink md:text-[24px] lg:text-[22px] xl:text-[24px]">
        {step.title}
      </h3>

      <p className="mt-4 text-[15px] leading-relaxed text-ink/75 md:text-base lg:text-[15px] xl:text-base">{step.text}</p>

      <span
        className="pointer-events-none absolute bottom-4 left-1/2 h-[3px] w-24 -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-brand to-transparent"
        aria-hidden="true"
      />
    </Card>
  );
}
