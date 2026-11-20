import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import SoftFadeHeading from "../ui/SoftFadeHeading";
import Icon from "../ui/Icon";

function GenerationCard({ item }) {
  const dark = item.tone === "dark";

  return (
    <article
      className={`overflow-hidden rounded-2xl lg:grid lg:min-h-[200px] lg:grid-cols-12 ${
        dark
          ? "border border-white/10 bg-primary-dark text-white"
          : "border border-[#e4ddd4] bg-[#f3eee7] text-ink"
      }`}
    >
      {/* Mobile: image left + copy (brand sec2 sizing); desktop: 3-col grid */}
      <div className="grid grid-cols-[148px_minmax(0,1fr)] sm:grid-cols-[168px_minmax(0,1fr)] lg:contents">
        <div className="relative min-h-[112px] self-stretch border-r-[3px] border-brand sm:min-h-[140px] sm:border-r-[4px] lg:col-span-4 lg:min-h-[210px] lg:border-r-0 lg:aspect-auto">
          <div className={`absolute inset-0 overflow-hidden ${dark ? "bg-primary-dark" : "bg-white"} lg:bg-transparent`}>
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(max-width: 1024px) 168px, 33vw"
              className="object-contain object-center lg:object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center px-3 py-3 sm:px-4 sm:py-3.5 md:px-5 lg:col-span-5">
          <span className="inline-flex w-fit rounded-md bg-brand px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1 sm:text-[12px]">
            {item.tag}
          </span>
          <h3
            className={`mt-1.5 text-[15px] font-extrabold leading-snug sm:mt-2 sm:text-[18px] md:text-[20px] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`mt-1 text-[12.5px] leading-snug sm:mt-1.5 sm:text-[14px] sm:leading-relaxed md:text-[15px] ${
              dark ? "text-white/75" : "text-ink/75"
            }`}
          >
            {item.text}
          </p>
        </div>
      </div>

      <div
        className={`mx-3 mb-3 flex flex-col justify-center rounded-xl px-3 py-2.5 sm:mx-4 sm:mb-4 sm:px-4 sm:py-3 lg:col-span-3 lg:m-0 lg:rounded-none lg:border-l lg:px-5 lg:py-3.5 ${
          dark ? "border-white/12 bg-white/[0.04] lg:bg-transparent" : "border-[#ddd6cc] bg-[#ebe5dc] lg:bg-transparent"
        } ${dark ? "lg:border-white/12" : "lg:border-[#ddd6cc]"}`}
      >
        <div className="flex items-center gap-2">
          <Icon name="engine" className="h-5 w-5 shrink-0 text-gold sm:h-6 sm:w-6" strokeWidth={1.6} />
          <p className={`text-[11.5px] font-bold uppercase tracking-wide sm:text-[13px] ${dark ? "text-white/90" : "text-ink/85"}`}>
            {item.enginesLabel}
          </p>
        </div>
        <p className={`mt-1.5 text-[12px] leading-snug sm:mt-2 sm:text-[13.5px] sm:leading-relaxed md:text-[14.5px] ${dark ? "text-white/70" : "text-ink/70"}`}>
          {item.engines}
        </p>
      </div>
    </article>
  );
}

export default function Section2({ data }) {
  return (
    <section id={data.id} className="bg-[#f6f2ed] text-ink">
      {/* Mobile soft-fade header */}
      <SoftFadeHeading imageSrc={data.image.src} imageAlt={data.image.alt || ""}>
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} />
      </SoftFadeHeading>

      {/* Desktop diagonal header */}
      <div className="relative isolate hidden overflow-hidden lg:block">
        <div className="absolute inset-y-0 right-0 w-[50%]" aria-hidden="true">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              src={data.image.src}
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#f6f2ed]/50 via-transparent to-transparent" />
          </div>

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 150 0 L 0 1000"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              className="text-brand"
            />
          </svg>
        </div>

        <div className="container-site relative z-10 grid grid-cols-12 items-center gap-5 py-7 lg:min-h-[360px] lg:py-8">
          <div className="col-span-7">
            <SectionHeading eyebrow={data.eyebrow} heading={data.heading} />
            <div className="mt-3 max-w-[640px] space-y-2.5 text-base leading-relaxed text-ink/75">
              {data.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile intro under soft-fade */}
      <div className="container-site pt-3 lg:hidden">
        <div className="space-y-2 text-[14px] leading-snug text-ink/75">
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Generation cards */}
      <div className="container-site pb-5 pt-4 md:pb-7 md:pt-5 lg:pb-8 lg:pt-0">
        <ul className="space-y-2.5 sm:space-y-3 md:space-y-3.5">
          {data.generations.map((item) => (
            <li key={item.tag}>
              <GenerationCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
