import data from "../../data/home-data/section5.json";
import SectionHeading from "../ui/SectionHeading";
import SectionShell from "../ui/SectionShell";
import ServiceCard from "./section5/ServiceCard";
import ServicesSlider from "./section5/ServicesSlider";

export default function Section5() {
  return (
    <SectionShell
      id={data.id}
      tone="light"
      bgImages={[data.bgImage]}
      accents={[
        { position: "top-right", count: 3, length: "h-48 md:h-72 lg:h-80", className: "right-[4%] md:right-[24%] lg:right-[32%]" },
      ]}
      padding="py-7 md:py-10 lg:py-12"
    >
      <SectionHeading
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        className="max-w-4xl"
        headingClassName="lg:whitespace-pre-line"
        introClassName="max-w-2xl"
      />

      <ServicesSlider services={data.services} />

      <ul className="mt-10 hidden grid-cols-1 gap-5 md:mt-12 md:grid md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
        {data.services.map((service, i) => (
          <li key={service.title} className={`flex ${i < 4 ? "lg:col-span-3" : "lg:col-span-4"}`}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
