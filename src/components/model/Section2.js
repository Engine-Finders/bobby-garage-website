import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";

function GenerationCard({ item }) {
  const dark = item.tone === "dark";

  return (
    <article
      className={`grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-12 ${
        dark
          ? "border border-white/10 bg-primary-dark text-white"
          : "border border-[#e4ddd4] bg-[#f3eee7] text-ink"
      }`}
    >
      <div className="relative aspect-[16/10] lg:col-span-4 lg:aspect-auto lg:min-h-[210px]">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-4 py-4 md:px-5 md:py-5 lg:col-span-5">
        <span className="inline-flex w-fit rounded-md bg-brand px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-white">
          {item.tag}
        </span>
        <h3 className={`mt-2.5 text-[18px] font-extrabold leading-snug md:text-[20px] ${dark ? "text-white" : "text-ink"}`}>
          {item.title}
        </h3>
        <p className={`mt-2 text-[14px] leading-relaxed md:text-[15px] ${dark ? "text-white/75" : "text-ink/75"}`}>
          {item.text}
        </p>
      </div>

      <div
        className={`flex flex-col justify-center px-4 py-4 md:px-5 md:py-5 lg:col-span-3 lg:border-l ${
          dark ? "border-white/12" : "border-[#ddd6cc]"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <Icon name="engine" className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.6} />
          <p className={`text-[13px] font-bold uppercase tracking-wide ${dark ? "text-white/90" : "text-ink/85"}`}>
            {item.enginesLabel}
          </p>
        </div>
        <p className={`mt-3 text-[13.5px] leading-relaxed md:text-[14.5px] ${dark ? "text-white/70" : "text-ink/70"}`}>
          {item.engines}
        </p>
      </div>
    </article>
  );
}

export default function Section2({ data }) {
  return (
    <section id={data.id} className="bg-[#f6f2ed] text-ink">
      {/* Intro — brand-hero style full-height diagonal bg image */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block" aria-hidden="true">
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

        <div className="container-site relative z-10 grid grid-cols-1 gap-5 py-6 md:py-7 lg:min-h-[360px] lg:grid-cols-12 lg:items-center lg:py-8">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={data.eyebrow} heading={data.heading} />
            <div className="mt-3 max-w-[640px] space-y-2.5 text-[15px] leading-relaxed text-ink/75 md:text-base">
              {data.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="relative -mx-4 aspect-[16/10] overflow-hidden sm:aspect-[16/9] md:-mx-6 lg:hidden">
            <Image src={data.image.src} alt={data.image.alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 w-[4px] bg-brand" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Generation cards */}
      <div className="container-site pb-6 md:pb-7 lg:pb-8">
        <ul className="space-y-3 md:space-y-3.5">
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
