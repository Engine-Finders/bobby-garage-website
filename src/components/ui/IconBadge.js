import Icon from "./Icon";

const shapes = {
  square: "rounded-xl",
  circle: "rounded-full",
};

const sizes = {
  sm: { box: "h-10 w-10", icon: "h-5 w-5" },
  md: { box: "h-12 w-12 md:h-14 md:w-14", icon: "h-6 w-6 md:h-7 md:w-7" },
  lg: { box: "h-20 w-20 md:h-24 md:w-24", icon: "h-9 w-9 md:h-11 md:w-11" },
};

const variants = {
  soft: "border border-brand/25 bg-linear-to-b from-white to-[#fff3ea] text-brand shadow-[0_8px_20px_rgba(232,93,38,0.12)]",
  white: "border border-black/5 bg-white text-brand shadow-[0_10px_24px_rgba(13,15,18,0.10)]",
  dark: "bg-primary-dark text-brand",
  glass: "border border-gold/40 bg-linear-to-br from-gold/30 to-brand/15 text-[#f3a54a]",
};

/** Orange icon inside a tile/circle. */
export default function IconBadge({ icon, shape = "square", size = "md", variant = "soft", strokeWidth = 1.7, className = "" }) {
  const s = sizes[size];
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${s.box} ${shapes[shape]} ${variants[variant]} ${className}`}>
      <Icon name={icon} className={s.icon} strokeWidth={strokeWidth} />
    </span>
  );
}
