import Link from "next/link";
import Icon from "./Icon";

const variants = {
  primary:
    "bg-linear-to-b from-[#f06b30] to-brand text-white shadow-[0_10px_24px_rgba(232,93,38,0.32)] hover:from-brand hover:to-brand-hover",
  dark: "bg-primary-dark text-white shadow-[0_10px_24px_rgba(13,15,18,0.25)] hover:bg-charcoal",
  outline: "border border-ink/15 bg-white text-ink hover:border-brand hover:text-brand",
  ghostDark: "border border-white/20 bg-white/5 text-white hover:border-brand hover:text-brand",
};

const sizes = {
  sm: "h-10 gap-2 px-4 text-[13.5px] rounded-lg",
  md: "h-12 gap-2.5 px-6 text-[15px] rounded-lg md:text-base",
  lg: "h-14 gap-3 px-8 text-[15px] rounded-xl md:text-base",
};

/** Link styled as a button. Renders a <button> when no `href` is given. */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center font-bold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <Icon
          name="arrowRight"
          className={`${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} transition-transform group-hover:translate-x-1`}
          strokeWidth={2.2}
        />
      )}
    </>
  );

  if (!href) {
    return (
      <button className={classes} {...rest}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
