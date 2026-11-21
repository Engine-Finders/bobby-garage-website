import Image from "next/image";
import DiagonalSectionHeader from "../ui/DiagonalSectionHeader";
import SectionShell from "../ui/SectionShell";

function PartCard({ item }) {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl border border-black/[0.06] bg-[#f7f3ee] px-3.5 py-4 text-center shadow-[0_10px_24px_rgba(13,15,18,0.07)] sm:px-4 sm:py-5">
      <div className="relative h-[72px] w-[72px] sm:h-[88px] sm:w-[88px]">
        <Image
          src={item.image.src}
          alt={item.image.alt || ""}
          fill
          sizes="88px"
          className="object-contain object-center"
        />
      </div>
      <h3 className="mt-3 text-[14px] font-extrabold leading-snug text-ink sm:mt-3.5 sm:text-[15px] md:text-[16px]">
        {item.title}
      </h3>
      <p className="mt-1.5 text-[12px] leading-snug text-ink/70 sm:mt-2 sm:text-[12.5px] md:text-[13px]">
        {item.text}
      </p>
    </article>
  );
}

export default function Section5({ data }) {
  return (
    <section id={data.id} className="relative">
      <DiagonalSectionHeader
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        imageSrc={data.image.src}
        imageAlt={data.image.alt || ""}
        size="brand"
        headingClassName="max-w-[720px]"
      />

      <SectionShell tone="light" padding="pt-2.5 pb-5 md:pt-3 md:pb-6 lg:pt-4 lg:pb-7">
        <ul className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-3.5">
          {data.cards.map((item) => (
            <li key={item.title}>
              <PartCard item={item} />
            </li>
          ))}
        </ul>
      </SectionShell>
    </section>
  );
}
