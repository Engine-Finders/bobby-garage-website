import Image from "next/image";
import data from "../../data/home-data/section7.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import NoteBar from "../ui/NoteBar";
import CoverageBar from "./section7/CoverageBar";
import EngineCard from "./section7/EngineCard";

function Backdrop({ image }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[600px] bg-primary-dark md:h-[500px] lg:h-[520px] [mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)]"
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 right-0 w-full md:w-[68%] lg:w-[58%] [mask-image:linear-gradient(to_right,transparent_0%,black_55%)]">
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="scale-125 object-cover object-[60%_50%] opacity-30 mix-blend-screen invert md:scale-110 md:opacity-45"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/70 to-primary-dark/20" />
    </div>
  );
}

export default function Section7() {
  return (
    <SectionShell
      id={data.id}
      tone="light"
      backdrop={<Backdrop image={data.backdropImage} />}
      accents={[{ position: "top-right", count: 2, length: "h-72 md:h-[420px]", className: "right-[8%] md:right-[26%]" }]}
      padding="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
    >
      <SectionHeading
        tone="dark"
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        headingClassName="[&>span:first-child]:block max-w-3xl"
        introClassName="max-w-[44rem]"
      />

      <div className="mt-10 md:mt-12 lg:mt-14">
        <CoverageBar bar={data.coverageBar} />
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-5 xl:gap-4 2xl:gap-5">
        {data.rows.map((row) => (
          <EngineCard key={row.enquiry} row={row} image={data.cardImage} />
        ))}
      </ul>

      <NoteBar icon={data.note.icon} paragraphs={data.note.paragraphs} className="mt-8 md:mt-10" />
    </SectionShell>
  );
}
