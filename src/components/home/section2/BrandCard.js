import Image from "next/image";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

const edgeClip = "polygon(42% 0, 100% 0, 100% 100%, 0 100%)";

/** Brand coverage card — landscape on all breakpoints (copy left, photo right). */
export default function BrandCard({ brand }) {
  return (
    <Card
      as="article"
      variant="glass"
      hover
      className="group relative isolate flex min-h-[148px] w-full overflow-hidden bg-white/85 sm:min-h-[180px] md:min-h-[200px]"
    >
      {/* Photo + orange rim along the diagonal edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[34%] [filter:drop-shadow(-4px_0_8px_rgba(232,93,38,0.45))] sm:w-[38%] sm:[filter:drop-shadow(-6px_0_10px_rgba(232,93,38,0.5))]">
        <div
          className="absolute inset-0 -translate-x-1 bg-linear-to-b from-brand to-[#f58a52] sm:-translate-x-1.5"
          style={{ clipPath: edgeClip }}
        />
        <div className="absolute inset-0 overflow-hidden bg-[#d8dde3]" style={{ clipPath: edgeClip }}>
          <Image
            src={brand.image.src}
            alt={brand.image.alt}
            fill
            sizes="(max-width: 640px) 140px, 200px"
            className="object-cover object-[30%_55%] transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary-dark/20 via-transparent to-transparent" aria-hidden="true" />
        </div>
      </div>

      {/* Copy */}
      <div className="relative z-10 flex w-[64%] flex-col p-3.5 sm:w-[60%] sm:p-5 sm:py-6 sm:pl-6 sm:pr-0 md:p-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={56}
            height={56}
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
          <span className="h-8 w-px shrink-0 bg-ink/15 sm:h-11" aria-hidden="true" />
          <h3 className="text-[13.5px] font-bold leading-tight tracking-[-0.01em] text-ink sm:text-[16.5px] md:text-[17px]">
            {brand.title}
          </h3>
        </div>

        <p className="mt-2 flex-1 text-[12px] leading-snug text-ink/70 sm:mt-3 sm:text-[13px]">{brand.text}</p>

        <div className="mt-3 sm:mt-4">
          <Button href={brand.href} size="sm" className="h-9 whitespace-nowrap px-3 text-[12px] sm:h-10 sm:px-4 sm:text-[13.5px]">
            {brand.buttonLabel}
          </Button>
        </div>
      </div>
    </Card>
  );
}
