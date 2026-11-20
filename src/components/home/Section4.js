import Image from "next/image";
import data from "../../data/home-data/section4.json";
import SectionShell from "../ui/SectionShell";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import ReviewCard from "./section4/ReviewCard";
import ReviewsSlider from "./section4/ReviewsSlider";
import ReviewsDiagonalHeader from "./section4/ReviewsDiagonalHeader";
// import CaptionChip from "./section4/CaptionChip";

export default function Section4() {
  const { reviews, workshop } = data;
  const { portrait, workshop: shop, inspection } = workshop.images;

  return (
    <>
      <section id={reviews.id} className="relative">
        <ReviewsDiagonalHeader
          eyebrow={reviews.eyebrow}
          heading={reviews.heading}
          intro={reviews.intro}
          imageSrc={reviews.backgroundImage}
          imageAlt=""
        />

        <SectionShell tone="light" padding="pt-3 pb-5 md:pt-4 md:pb-7 lg:pt-5 lg:pb-8">
          <ReviewsSlider
            items={reviews.items}
            enabled={reviews.enabled}
            skeletonWidths={reviews.skeletonWidths}
            verifiedLabel={reviews.verifiedLabel}
            sourceLabel={reviews.sourceLabel}
          />

          <ul className="mt-0 hidden grid-cols-1 gap-5 md:grid md:grid-cols-3 md:gap-5 lg:gap-6">
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
      </section>

      <SectionShell
        id={workshop.id}
        tone="light"
        accents={[{ position: "bottom-left", count: 2, length: "h-40 md:h-64", className: "left-[-2%] md:left-[1%]" }]}
        padding="py-7 md:py-10 lg:py-12"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <div className="lg:col-span-4">
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

          <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4 lg:col-span-8 lg:aspect-[1.35/1] lg:max-w-none lg:grid-cols-[0.9fr_1.25fr] lg:grid-rows-2 lg:gap-4">
            <figure className="relative col-span-2 aspect-[3/4] overflow-hidden rounded-2xl bg-soft-grey shadow-[0_12px_28px_rgba(13,15,18,0.10)] sm:aspect-[4/3] lg:col-span-1 lg:row-span-2 lg:aspect-auto">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="object-contain object-bottom sm:object-cover sm:object-[35%_center] lg:object-cover lg:object-[35%_center]"
              />
              {/* <CaptionChip title={portrait.caption} subtitle={portrait.subCaption} /> */}
            </figure>

            {[shop, inspection].map((img) => (
              <figure
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-soft-grey shadow-[0_12px_28px_rgba(13,15,18,0.10)] sm:aspect-square lg:aspect-auto"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 36vw"
                  className="object-contain object-bottom sm:object-cover sm:object-center lg:object-cover lg:object-center"
                />
                {/* <CaptionChip title={img.caption} /> */}
              </figure>
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}
