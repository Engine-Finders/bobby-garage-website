/** Decorative orange diagonal stripes at the left-middle and right-middle edges. Clipped by the section. */
function Stripe({ className }) {
  return (
    <span
      className={`pointer-events-none absolute block w-[6px] rounded-full bg-linear-to-b from-transparent via-brand to-transparent ${className}`}
      aria-hidden="true"
    />
  );
}

export default function SideStripes() {
  return (
    <>
      <Stripe className="-left-3 top-[42%] h-64 rotate-[30deg] opacity-80 -z-10 md:-left-1 md:h-80" />
      <Stripe className="-left-[2px] top-[46%] h-48 rotate-[30deg] opacity-40 -z-10 md:left-5 md:h-60" />
      <Stripe className="-right-3 top-[48%] h-64 rotate-[30deg] opacity-80 -z-10 md:right-0 md:h-80" />
      <Stripe className="right-2 top-[52%] h-48 rotate-[30deg] opacity-40 -z-10 md:right-6 md:h-60" />
    </>
  );
}
