import Image from "next/image";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";

export default function Section2({ data }) {
  return (
    <SectionShell
      id={data.id}
      tone="light"
      padding="py-10 md:py-12 lg:py-14"
      bgImages={[{ src: "/test-images/car-image.webp", position: "top-right", opacity: 0.18 }]}
    >
      <SectionHeading
        eyebrow={data.eyebrow}
        heading={data.heading}
        intro={data.intro}
        introClassName="max-w-[720px]"
      />

      <div className="mt-6 space-y-3 md:mt-7 md:space-y-3.5">
        {data.rows.map((row) => (
          <article
            key={row.models.join("-")}
            className="grid grid-cols-1 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_10px_28px_rgba(13,15,18,0.07)] lg:grid-cols-12 lg:min-h-[200px]"
          >
            {/* Image with diagonal orange cut */}
            <div className="relative aspect-[16/10] lg:col-span-4 lg:aspect-auto">
              <div
                className="absolute inset-0 overflow-hidden lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]"
              >
                <Image
                  src={row.image.src}
                  alt={row.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 right-[10%] hidden w-[5px] -skew-x-[12deg] bg-brand lg:block"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-brand lg:hidden" aria-hidden="true" />
            </div>

            {/* Copy */}
            <div className="flex flex-col justify-center px-5 py-5 md:px-6 md:py-6 lg:col-span-5 lg:pr-4">
              <h3 className="text-[19px] font-extrabold leading-snug text-ink md:text-[22px]">
                <HighlightText content={row.title} />
              </h3>
              <div className="mt-2.5 space-y-2 text-[14px] leading-relaxed text-ink/75 md:text-[15px]">
                {row.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Model pills */}
            <div className="m-3 flex flex-col items-center justify-center rounded-xl border border-[#e4ddd4] bg-[#f4f0ea] px-3 py-4 lg:col-span-3 lg:m-4">
              <Icon name="car" className="mb-3 h-7 w-7 text-brand" strokeWidth={1.6} />
              <ul className="flex w-full flex-wrap justify-center gap-1.5">
                {row.models.map((model) => (
                  <li
                    key={model}
                    className="rounded-md border border-[#ddd5cb] bg-[#ebe5dc] px-2.5 py-1 text-center text-[12px] font-semibold text-ink/80"
                  >
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
