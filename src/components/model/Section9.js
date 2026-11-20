import SectionHeading from "../ui/SectionHeading";
import ModelFaqCard from "./section9/ModelFaqCard";

export default function Section9({ data }) {
  return (
    <section id={data.id} className="bg-[#f6f2ed] py-6 text-ink md:py-7 lg:py-8">
      <div className="container-site">
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} size="brand" headingClassName="max-w-[720px]" />

        <div className="mt-5 grid grid-cols-1 gap-3 md:mt-6 md:grid-cols-2 md:gap-3.5">
          {data.items.map((item, i) => (
            <ModelFaqCard key={item.question} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
