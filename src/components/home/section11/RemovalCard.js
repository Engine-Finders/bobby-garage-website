import Image from "next/image";
import Eyebrow from "../../ui/Eyebrow";
import HighlightText from "../../ui/HighlightText";
import Icon from "../../ui/Icon";

export default function RemovalCard({ data }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-linear-to-br from-primary-dark via-charcoal to-[#1a1e24] text-white shadow-[0_20px_48px_rgba(13,15,18,0.28)]">
      {/* Mobile diagonal image top-right */}
      <div
        className="pointer-events-none absolute -right-4 -top-2 z-0 h-44 w-[52%] overflow-hidden opacity-95 lg:hidden"
        style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      >
        <Image
          src="/home-2.webp"
          alt=""
          fill
          sizes="55vw"
          quality={100}
          unoptimized
          className="object-cover object-center"
        />
        <span className="absolute inset-y-0 left-[10%] w-[5px] -skew-x-[18deg] bg-brand" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-5 md:p-8 lg:max-w-[58%]">
        <Eyebrow tone="dark">{data.eyebrow}</Eyebrow>
        <h3 className="mt-2.5 max-w-[16ch] text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] [text-shadow:0_1px_2px_rgba(0,0,0,0.55),0_0_16px_rgba(0,0,0,0.35)] md:mt-3 md:max-w-none md:text-[30px] md:[text-shadow:none] lg:text-[32px] lg:whitespace-pre-line">
          <HighlightText content={data.heading} />
        </h3>

        <ul className="mt-5 divide-y divide-white/10 md:mt-7">
          {data.points.map((point) => (
            <li
              key={point.text}
              className="flex items-center gap-3 py-3 text-[13.5px] font-medium text-white/90 md:gap-3.5 md:py-3.5 md:text-[15px]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand/40 bg-brand/10 text-brand md:h-9 md:w-9">
                <Icon name={point.icon} className="h-[16px] w-[16px] md:h-[18px] md:w-[18px]" strokeWidth={1.8} />
              </span>
              {point.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop side image panel */}
      <div className="relative mt-auto hidden aspect-[3/4] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:block lg:aspect-auto lg:h-auto lg:w-[42%]">
        <div
          className="absolute inset-0 bg-linear-to-br from-primary-dark via-charcoal to-[#1a1e24]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 overflow-hidden lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
          <Image
            src="/home-2.webp"
            alt={data.image.alt || ""}
            fill
            sizes="520px"
            quality={100}
            unoptimized
            className="object-cover object-center"
          />
        </div>
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-brand"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M 180 0 L 0 1000" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </div>
    </article>
  );
}
