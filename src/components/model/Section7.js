import Image from "next/image";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";

function stepClip(i, total) {
  if (i === 0) return "polygon(0 0, 100% 0, 88% 100%, 0 100%)";
  if (i === total - 1) return "polygon(12% 0, 100% 0, 100% 100%, 0 100%)";
  return "polygon(12% 0, 100% 0, 88% 100%, 0 100%)";
}

export default function Section7({ data }) {
  const total = data.steps.length;

  return (
    <section id={data.id} className="bg-[#f6f2ed] py-6 text-ink md:py-7 lg:py-8">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[34px] md:text-[40px] lg:text-[48px]">
              <HighlightText content={data.heading} />
            </h2>
            <span className="mt-3 block h-[3px] w-14 rounded-full bg-brand" aria-hidden="true" />
          </div>
          <div className="lg:col-span-7 lg:border-l-[3px] lg:border-brand lg:pl-7">
            <p className="max-w-[560px] text-[14.5px] leading-relaxed text-ink/75 md:text-[15.5px]">{data.intro}</p>
          </div>
        </div>

        <ol className="relative mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 lg:mt-7 lg:flex lg:gap-0">
          {data.steps.map((step, i) => (
            <li
              key={step.number}
              className={`relative min-w-0 lg:flex-1 ${i > 0 ? "lg:-ml-5" : ""}`}
              style={{ zIndex: total - i }}
            >
              <article className="overflow-hidden rounded-2xl border border-[#e4ddd4] bg-white shadow-[0_8px_18px_rgba(13,15,18,0.06)] lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none">
                <div className="relative aspect-[5/4] overflow-hidden bg-[#e9e4dc] lg:aspect-[5/4]">
                  <div className="absolute inset-0 lg:hidden">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt || ""}
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="absolute inset-0 hidden overflow-hidden lg:block"
                    style={{ clipPath: stepClip(i, total) }}
                  >
                    <Image
                      src={step.image.src}
                      alt={step.image.alt || ""}
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-white px-3 py-2.5 sm:px-3.5 sm:py-3 lg:mx-[6%] lg:rounded-b-xl lg:border lg:border-t-0 lg:border-[#e4ddd4]">
                  <span className="text-[15px] font-extrabold text-ink sm:text-[16px]">{step.number}</span>
                  <span className="text-[12.5px] font-bold leading-snug text-ink sm:text-[14px]">{step.title}</span>
                </div>
              </article>

              {i < total - 1 && (
                <span
                  className="pointer-events-none absolute top-[34%] -right-2 z-20 hidden h-7 w-7 items-center justify-center rounded-full border border-[#e4ddd4] bg-white text-brand shadow-md lg:flex"
                  aria-hidden="true"
                >
                  <Icon name="chevronRight" className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
