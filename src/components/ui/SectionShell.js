import Image from "next/image";
import DiagonalAccent from "./DiagonalAccent";

const tones = {
  light: "bg-[linear-gradient(180deg,#fbfaf8_0%,#f5f2ee_100%)] text-ink",
  white: "bg-white text-ink",
  dark: "bg-primary-dark text-white",
};

const imagePositions = {
  "top-right":
    "right-0 top-0 h-[260px] w-[75%] sm:h-[340px] md:w-[55%] lg:h-[460px] lg:w-[48%] [mask-image:radial-gradient(ellipse_at_top_right,black_25%,transparent_72%)]",
  "top-left":
    "left-0 top-0 h-[260px] w-[75%] sm:h-[340px] md:w-[55%] lg:h-[460px] lg:w-[48%] [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_72%)]",
  "bottom-left":
    "bottom-0 left-0 h-[180px] w-[70%] md:h-[240px] md:w-[45%] [mask-image:radial-gradient(ellipse_at_bottom_left,black_25%,transparent_72%)]",
  "bottom-right":
    "bottom-0 right-0 h-[180px] w-[70%] md:h-[240px] md:w-[45%] [mask-image:radial-gradient(ellipse_at_bottom_right,black_25%,transparent_72%)]",
};

/**
 * Standard page section: background tone, optional faded corner photo(s),
 * optional orange diagonal accents and the site container.
 *
 * bgImages: [{ src, alt?, position: "top-right" | "top-left" | "bottom-left" | "bottom-right", opacity?: number }]
 * accents:  [{ position, count?, length?, className? }]
 */
export default function SectionShell({
  id,
  tone = "light",
  bgImages = [],
  accents = [],
  backdrop = null,
  className = "",
  containerClassName = "",
  padding = "py-16 md:py-20 lg:py-24",
  children,
}) {
  return (
    <section id={id} className={`relative isolate overflow-hidden ${tones[tone]} ${padding} ${className}`}>
      {bgImages.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          className={`pointer-events-none absolute -z-10 ${imagePositions[img.position || "top-right"]}`}
          style={{ opacity: img.opacity ?? 0.9 }}
          aria-hidden="true"
        >
          <Image src={img.src} alt="" fill sizes="(max-width: 768px) 75vw, 50vw" className="object-cover" />
        </div>
      ))}

      {backdrop}

      {accents.map((a, i) => (
        <DiagonalAccent key={i} {...a} className={`-z-10 ${a.className || ""}`} />
      ))}

      <div className={`container-site relative ${containerClassName}`}>{children}</div>
    </section>
  );
}
