import Image from "next/image";
import Card from "../../ui/Card";
import IconBadge from "../../ui/IconBadge";

export default function ServiceCard({ service }) {
  return (
    <Card
      as="article"
      variant="solid"
      hover
      className="flex h-full w-full flex-col overflow-hidden border-warm-border/70 bg-[#f6f4f1] p-0 shadow-[0_12px_30px_rgba(13,15,18,0.07)]"
    >
      <div className="relative">
        <div
          className="relative h-[175px] w-full overflow-hidden bg-[#e8e4de] sm:h-[185px] lg:h-[168px] xl:h-[180px]"
          style={{ clipPath: "polygon(0 26%, 20% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <svg
            className="pointer-events-none absolute left-0 top-0 h-[26%] w-[20%] text-brand"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d="M 2 98 L 98 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[58px] w-[86px] rounded-tr-[22px] bg-[#f6f4f1]"
          aria-hidden="true"
        />

        <div className="absolute bottom-2 left-3 z-10 sm:left-3.5">
          <IconBadge
            icon={service.icon}
            shape="square"
            size="md"
            variant="white"
            className="rounded-[15px] shadow-[0_12px_26px_rgba(13,15,18,0.16)]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-2 md:px-6 md:pb-6">
        <div className="flex items-start gap-3.5">
          <span className="invisible h-7 w-12 shrink-0 md:h-8 md:w-14" aria-hidden="true" />
          <h3 className="text-[15.5px] font-bold leading-snug text-ink md:text-[16.5px]">{service.title}</h3>
        </div>
        <p className="mt-3 text-[14px] leading-relaxed text-ink/75 md:mt-3.5 md:text-[14.5px]">{service.text}</p>
      </div>
    </Card>
  );
}
