import Slashes from "./Slashes";

const tones = {
  light: "text-ink",
  dark: "text-white",
};

export default function Eyebrow({ children, tone = "light", align = "left", className = "" }) {
  if (!children) return null;
  return (
    <p
      className={`flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.06em] sm:text-sm md:text-[15px] ${
        align === "center" ? "justify-center" : ""
      } ${tones[tone]} ${className}`}
    >
      <Slashes className="h-3.5 md:h-4" />
      {children}
    </p>
  );
}
