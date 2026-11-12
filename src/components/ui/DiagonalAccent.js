const positions = {
  "top-right": "-top-10 right-[6%] rotate-[30deg] origin-top",
  "bottom-left": "-bottom-10 left-[3%] rotate-[30deg] origin-bottom",
  "bottom-right": "-bottom-10 right-[4%] rotate-[30deg] origin-bottom",
  "top-left": "-top-10 left-[4%] rotate-[30deg] origin-top",
};

/** Signature Boby orange diagonal stripe(s). Purely decorative; place inside a `relative overflow-hidden` parent. */
export default function DiagonalAccent({ position = "top-right", length = "h-56 md:h-72", count = 1, className = "" }) {
  return (
    <div className={`pointer-events-none absolute flex gap-3 ${positions[position]} ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`block w-[5px] rounded-full bg-linear-to-b from-transparent via-brand to-transparent md:w-[6px] ${length} ${
            i > 0 ? "opacity-60" : "opacity-90"
          }`}
        />
      ))}
    </div>
  );
}
