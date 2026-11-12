import Eyebrow from "./Eyebrow";
import HighlightText from "./HighlightText";

const sizes = {
  lg: "text-[30px] sm:text-[36px] md:text-[40px] lg:text-[46px] xl:text-[48px]",
  md: "text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px]",
};

/**
 * Eyebrow + H2 (with orange highlights) + optional underline bar + intro paragraph(s).
 * `heading` accepts the same shapes as <HighlightText />.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  as: Tag = "h2",
  align = "left",
  tone = "light",
  size = "lg",
  underline = true,
  className = "",
  headingClassName = "",
  introClassName = "",
}) {
  const centered = align === "center";
  const introParagraphs = Array.isArray(intro) ? intro : intro ? [intro] : [];

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      <Eyebrow tone={tone} align={align}>
        {eyebrow}
      </Eyebrow>

      <Tag
        className={`mt-3 font-extrabold leading-[1.1] tracking-[-0.02em] md:mt-4 ${sizes[size]} ${
          tone === "dark" ? "text-white" : "text-ink"
        } ${headingClassName}`}
      >
        <HighlightText content={heading} />
      </Tag>

      {underline && (
        <span
          className={`mt-4 block h-[3px] w-14 rounded-full bg-brand md:mt-5 ${centered ? "mx-auto" : ""}`}
          aria-hidden="true"
        />
      )}

      {introParagraphs.map((p, i) => (
        <p
          key={i}
          className={`mt-4 text-[15px] leading-relaxed md:text-base lg:text-[17px] ${
            tone === "dark" ? "text-white/80" : "text-ink/75"
          } ${centered ? "mx-auto" : ""} ${introClassName}`}
        >
          <HighlightText content={p} highlightClassName="font-semibold text-brand" />
        </p>
      ))}
    </div>
  );
}
