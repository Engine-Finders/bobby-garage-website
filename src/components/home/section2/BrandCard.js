import Image from "next/image";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

/**
 * Brand coverage card. Uses a container query on the card itself:
 *  - narrow card (< 24rem): photo on top with an angled bottom edge, copy below
 *  - wider card: copy on the left, photo bleeding off the right edge with an angled left edge + orange glow
 */
export default function BrandCard({ brand }) {
  return (
    <Card
      as="article"
      variant="glass"
      hover
      className="@container group relative isolate flex min-h-[200px] w-full flex-col overflow-hidden bg-white/85"
    >
      {/* Photo + orange edge glow */}
      <div className="pointer-events-none relative order-first h-36 w-full [filter:drop-shadow(0_6px_10px_rgba(232,93,38,0.45))] @sm:absolute @sm:inset-y-0 @sm:right-0 @sm:h-auto @sm:w-[38%] @sm:[filter:drop-shadow(-6px_0_10px_rgba(232,93,38,0.5))]">
        {/* orange sliver along the angled edge */}
        <div className="absolute inset-0 bg-linear-to-r from-brand to-[#f58a52] [clip-path:polygon(0_0,100%_0,100%_100%,0_82%)] @sm:-translate-x-1.5 @sm:bg-linear-to-b @sm:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]" />
        <div className="absolute inset-0 -translate-y-1.5 overflow-hidden bg-[linear-gradient(135deg,#7a828e_0%,#3a4049_55%,#1a1d22_100%)] [clip-path:polygon(0_0,100%_0,100%_100%,0_82%)] @sm:translate-y-0 @sm:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]">
          <Image
            src={brand.image.src}
            alt={brand.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, 200px"
            className="origin-[20%_58%] scale-[1.55] object-cover object-[20%_58%] mix-blend-multiply contrast-110 transition-transform duration-500 group-hover:scale-[1.62]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary-dark/45 via-transparent to-transparent" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(232,93,38,0.28),transparent_60%)]"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Copy */}
      <div className="relative z-10 flex flex-1 flex-col p-5 @sm:w-[64%] @sm:py-6 @sm:pl-6 @sm:pr-0">
        <div className="flex items-center gap-3">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="h-10 w-px shrink-0 bg-ink/15" aria-hidden="true" />
          <h3 className="text-[16.5px] font-bold leading-tight tracking-[-0.01em] text-ink @md:text-[17px]">
            {brand.title}
          </h3>
        </div>

        <p className="mt-3 flex-1 text-[13.5px] leading-snug text-ink/70 @sm:text-[13px]">{brand.text}</p>

        <div className="mt-4">
          <Button href={brand.href} size="sm" className="whitespace-nowrap">
            {brand.buttonLabel}
          </Button>
        </div>
      </div>
    </Card>
  );
}
