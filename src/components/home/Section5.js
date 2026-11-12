import Image from "next/image";
import data from "../../data/home-data/section5.json";
import Card from "../ui/Card";
import IconBadge from "../ui/IconBadge";
import SectionHeading from "../ui/SectionHeading";
import SectionShell from "../ui/SectionShell";

export default function Section5() {
  return (
    <SectionShell
      id={data.id}
      tone="light"
      bgImages={[data.bgImage]}
      accents={[
        { position: "top-right", count: 3, length: "h-48 md:h-72 lg:h-80", className: "right-[4%] md:right-[24%] lg:right-[32%]" },
      ]}
      padding="py-14 md:py-20 lg:py-24"
    >
      <SectionHeading
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        className="max-w-4xl"
        headingClassName="lg:whitespace-pre-line"
        introClassName="max-w-2xl"
      />

      <ul className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
        {data.services.map((service, i) => (
          <li key={service.title} className={`flex ${i < 4 ? "lg:col-span-3" : "lg:col-span-4"}`}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

function ServiceCard({ service }) {
  return (
    <Card as="article" variant="glass" hover className="flex w-full flex-col overflow-hidden p-0">
      <div className="relative h-[170px] w-full overflow-hidden rounded-t-2xl bg-white sm:h-[180px] lg:h-[160px] xl:h-[175px]">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span
          className="pointer-events-none absolute left-0 top-0 h-[72px] w-[72px] bg-linear-to-br from-brand to-brand-hover"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute left-0 top-0 h-24 w-24 bg-brand/45"
          style={{ clipPath: "polygon(0 100%, 0 82%, 82% 0, 100% 0)" }}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 md:px-6">
        <div className="relative z-10 -mt-7 flex items-start gap-3.5">
          <IconBadge icon={service.icon} shape="square" size="md" variant="soft" className="bg-white" />
          <h3 className="pt-8 text-[16px] font-bold leading-snug text-ink md:text-[17px]">{service.title}</h3>
        </div>
        <p className="mt-4 text-[14px] leading-relaxed text-ink/75 md:text-[14.5px]">{service.text}</p>
      </div>
    </Card>
  );
}
