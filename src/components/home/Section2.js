import data from "../../data/home-data/section2.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import BrandCard from "./section2/BrandCard";

export default function Section2() {
  return (
    <SectionShell id={data.id} tone="light" bgImages={data.bgImages}>
      <SectionHeading
        align="center"
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        headingClassName="mx-auto max-w-[1120px]"
        introClassName="max-w-[880px]"
      />

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {data.brands.map((brand) => (
          <li key={brand.id} className="flex">
            <BrandCard brand={brand} />
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
