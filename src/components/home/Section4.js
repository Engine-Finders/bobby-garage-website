import Image from "next/image";
import data from "../../data/home-data/section4.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import ReviewCard from "./section4/ReviewCard";
import CaptionChip from "./section4/CaptionChip";
import QuoteGlyph from "./section4/QuoteGlyph";

export default function Section4() {
  const { reviews, workshop } = data;
  const { portrait, workshop: shop, inspection } = workshop.images;

  return (
    <>
      <SectionShell
        id={reviews.id}
        tone="light"
        bgImages={[{ src: reviews.backgroundImage, position: "top-right", opacity: 0.4 }]}
        accents={[{ position: "top-right", count: 2, length: "h-48 md:h-72", className: "right-[10%] md:right-[12%]" }]}
        backdrop={
          <QuoteGlyph className="pointer-events-none absolute -z-10 right-[6%] top-10 h-32 w-auto text-[#e7e4e0] sm:h-44 md:right-[22%] md:top-6 md:h-56 lg:right-[30%]" />
        }
        padding="py-14 md:py-20 lg:py-24"
      >
        <SectionHeading
          eyebrow={reviews.eyebrow}
          heading={reviews.heading}
          intro={reviews.intro}
          headingClassName="max-w-[760px] lg:whitespace-pre-line lg:text-[42px] xl:text-[46px]"
          introClassName="max-w-[620px]"
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-5 lg:gap-6">
          {reviews.items.map((review, i) => (
            <li key={i}>
              <ReviewCard
                review={review}
                enabled={reviews.enabled}
                skeleton={reviews.skeletonWidths[i % reviews.skeletonWidths.length]}
                verifiedLabel={reviews.verifiedLabel}
                sourceLabel={reviews.sourceLabel}
              />
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell
        id={workshop.id}
        tone="light"
        accents={[{ position: "bottom-left", count: 2, length: "h-40 md:h-64", className: "left-[-2%] md:left-[1%]" }]}
        padding="py-14 md:py-20 lg:py-24"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={workshop.eyebrow}
              heading={workshop.heading}
              size="md"
              headingClassName="lg:text-[40px]"
            />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/75 md:text-base">
              {workshop.paragraphs.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button href={workshop.cta.href} size="lg">
                {workshop.cta.label}
              </Button>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4 lg:col-span-7 lg:aspect-[1.12/1] lg:max-w-none lg:grid-rows-2">
            <figure className="relative col-span-2 aspect-[4/5] overflow-hidden rounded-2xl bg-soft-grey shadow-[0_12px_28px_rgba(13,15,18,0.10)] sm:aspect-[4/3] lg:col-span-1 lg:row-span-2 lg:aspect-auto">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="object-cover object-[35%_center]"
              />
              <CaptionChip title={portrait.caption} subtitle={portrait.subCaption} />
            </figure>

            {[shop, inspection].map((img) => (
              <figure
                key={img.src}
                className="relative aspect-square overflow-hidden rounded-2xl bg-soft-grey shadow-[0_12px_28px_rgba(13,15,18,0.10)] lg:aspect-auto"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 24vw"
                  className="object-cover"
                />
                <CaptionChip title={img.caption} />
              </figure>
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}

