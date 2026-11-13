import SectionHeading from "../ui/SectionHeading";

/** Temporary scaffold for model sections 2–7 until each is designed. */
export default function SectionStub({ data, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <section id={data.id} className={`py-10 md:py-12 lg:py-14 ${dark ? "bg-primary-dark text-white" : "bg-[#f6f2ed] text-ink"}`}>
      <div className="container-site">
        <SectionHeading
          eyebrow={data.eyebrow}
          heading={data.heading}
          intro={data.intro}
          tone={dark ? "dark" : "light"}
        />
      </div>
    </section>
  );
}
