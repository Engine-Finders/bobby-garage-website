const variants = {
  glass: "border border-white/80 bg-white/75 backdrop-blur-sm shadow-[0_12px_32px_rgba(13,15,18,0.08)]",
  solid: "border border-black/[0.06] bg-white shadow-[0_12px_28px_rgba(13,15,18,0.08)]",
  highlight: "border border-brand/40 bg-linear-to-b from-[#fff6ef] to-white shadow-[0_16px_36px_rgba(232,93,38,0.16)]",
};

/** Base rounded card used across sections. Pass `hover` for the 2px lift interaction. */
export default function Card({ as: Tag = "div", variant = "glass", hover = false, className = "", children, ...rest }) {
  return (
    <Tag
      className={`rounded-2xl ${variants[variant]} ${hover ? "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(13,15,18,0.12)]" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
