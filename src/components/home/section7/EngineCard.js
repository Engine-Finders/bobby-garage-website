import Image from "next/image";
import Card from "../../ui/Card";

export default function EngineCard({ row, image }) {
  return (
    <Card as="li" variant="glass" hover className="group relative overflow-hidden p-5 xl:p-4 2xl:p-5">
      <div
        className="pointer-events-none absolute -right-2 -top-3 aspect-square w-[46%] [mask-image:radial-gradient(circle_at_60%_45%,black_35%,transparent_72%)]"
        aria-hidden="true"
      >
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1280px) 25vw, 12vw"
          className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="relative">
        <div className="relative h-10 w-10 md:h-11 md:w-11">
          <Image src={row.logo.src} alt={row.logo.alt} fill sizes="48px" className="object-contain" />
        </div>

        <h3 className="mt-5 text-[22px] font-extrabold leading-tight tracking-[-0.01em] text-ink xl:text-[20px] 2xl:text-[22px]">
          {row.code}
        </h3>
        <span className="mt-2.5 block h-[3px] w-9 rounded-full bg-brand" aria-hidden="true" />

        <p className="mt-3 text-[12.5px] font-semibold leading-snug text-ink/60">{row.enquiry}</p>
        <p className="mt-2 text-[14px] leading-snug text-ink/80 md:text-[14.5px]">{row.coverage}</p>
      </div>
    </Card>
  );
}
