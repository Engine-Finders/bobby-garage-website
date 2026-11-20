import Image from "next/image";
import Eyebrow from "./Eyebrow";
import HighlightText from "./HighlightText";

/**
 * Shared diagonal section header.
 * Desktop: cream left + clipped image right + orange seam.
 * Mobile: soft fade image beside heading only; intro full-width below.
 */
const headingSizes = {
  default: {
    mobile: "text-[28px] sm:text-[34px]",
    desktop: "text-[34px] xl:text-[38px]",
  },
  /** Brand page: lock H2 at 48px from md up */
  brand: {
    mobile: "text-[32px] sm:text-[40px] md:text-[48px]",
    desktop: "text-[48px]",
  },
};

export default function DiagonalSectionHeader({
  eyebrow,
  heading,
  intro,
  imageSrc,
  imageAlt = "",
  headingClassName = "",
  size = "default",
}) {
  const introParagraphs = Array.isArray(intro) ? intro : intro ? [intro] : [];
  const headingSize = headingSizes[size] || headingSizes.default;

  return (
    <div className="bg-[#f5f2ee]">
      {/* Mobile: soft fade — image only beside heading */}
      <div className="relative isolate overflow-hidden lg:hidden">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            quality={100}
            unoptimized
            className="object-cover object-[82%_40%]"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, #f5f2ee 0%, #f5f2ee 42%, rgba(245,242,238,0.92) 52%, rgba(245,242,238,0.35) 64%, transparent 76%)",
          }}
          aria-hidden="true"
        />

        <div className="container-site relative z-10 py-5 sm:py-6">
          <div className="max-w-[62%]">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              className={`mt-2.5 font-extrabold leading-[1.08] tracking-[-0.02em] text-ink ${headingSize.mobile} ${headingClassName}`}
            >
              <HighlightText content={heading} />
            </h2>
            <span className="mt-3 block h-[3px] w-14 rounded-full bg-brand" aria-hidden="true" />
          </div>
        </div>
      </div>

      {introParagraphs.length > 0 ? (
        <div className="container-site bg-[#f5f2ee] pb-4 pt-2.5 lg:hidden">
          {introParagraphs.map((p, i) => (
            <p key={i} className="max-w-[640px] text-[14.5px] leading-relaxed text-ink/75">
              <HighlightText content={p} highlightClassName="font-semibold text-brand" />
            </p>
          ))}
        </div>
      ) : null}

      {/* Desktop: cream base; image clipped to right only */}
      <div className="relative isolate hidden overflow-hidden bg-[#f5f2ee] lg:block">
        <div
          className="absolute inset-0"
          style={{ clipPath: "polygon(56% 0, 100% 0, 100% 100%, 42% 100%)" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 64vw, 100vw"
            quality={100}
            unoptimized
            className="object-cover object-center"
          />
        </div>

        <svg
          className="pointer-events-none absolute inset-0 z-[1] h-full w-full text-brand"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M 56 0 L 42 100" stroke="currentColor" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="container-site relative z-10 py-6 xl:py-7">
          <div className="max-w-[48%]">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              className={`mt-2 whitespace-pre-line font-extrabold leading-[1.05] tracking-[-0.02em] text-ink ${headingSize.desktop} ${headingClassName}`}
            >
              <HighlightText content={heading} />
            </h2>
            <span className="mt-3 block h-[3px] w-14 rounded-full bg-brand" aria-hidden="true" />
            {introParagraphs.map((p, i) => (
              <p key={i} className="mt-2.5 max-w-[460px] text-[15px] leading-snug text-ink/75 xl:text-[16px]">
                <HighlightText content={p} highlightClassName="font-semibold text-brand" />
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
