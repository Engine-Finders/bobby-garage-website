import data from "../../data/home-data/section5.json";
import SectionShell from "../ui/SectionShell";
import DiagonalSectionHeader from "../ui/DiagonalSectionHeader";
import ServiceCard from "./section5/ServiceCard";
import ServicesSlider from "./section5/ServicesSlider";

export default function Section5() {
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
        <ServicesSlider services={data.services} />

        <ul className="mt-0 hidden grid-cols-1 gap-5 md:grid md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {data.services.map((service, i) => (
            <li key={service.title} className={`flex ${i < 4 ? "lg:col-span-3" : "lg:col-span-4"}`}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </SectionShell>
    </section>
  );
}
