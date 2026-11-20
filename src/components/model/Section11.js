import Image from "next/image";
import Link from "next/link";
import Slashes from "../ui/Slashes";
import HighlightText from "../ui/HighlightText";
import Icon from "../ui/Icon";

export default function Section11({ data }) {
  return (
    <section id={data.id} className="bg-[#f6f2ed] pb-8 pt-2 text-white md:pb-10 md:pt-3 lg:pb-12">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-2xl bg-primary-dark shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
          {data.image?.src ? (
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <Image
                src={data.image.src}
                alt=""
                fill
                sizes="100vw"
                quality={100}
                unoptimized
                className="object-cover object-[80%_center] opacity-35"
              />
              <div className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/92 to-primary-dark/70" />
            </div>
          ) : null}

          <div className="relative z-10 px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-start lg:gap-6">
              <div className="lg:col-span-5">
                <div className="flex items-start gap-2.5">
                  <Slashes className="mt-1.5 h-3.5 shrink-0 md:h-4" />
                  <h2 className="text-[22px] font-extrabold leading-snug tracking-[-0.02em] sm:text-[26px] md:text-[30px]">
                    <HighlightText content={data.heading} />
                  </h2>
                </div>
              </div>

              <div className="hidden justify-center lg:col-span-1 lg:flex" aria-hidden="true">
                <span className="h-full min-h-[72px] w-px bg-white/25" />
              </div>

              <div className="lg:col-span-6">
                <p className="text-[14px] leading-relaxed text-white/80 md:text-[15px]">{data.intro}</p>
              </div>
            </div>

            <div className="mt-5 flex justify-center sm:mt-6">
              <Link
                href={data.button.href}
                className="group inline-flex w-full max-w-[520px] items-center gap-3 rounded-xl bg-linear-to-b from-[#f0783c] to-brand px-5 py-3.5 text-ink shadow-[0_14px_32px_rgba(232,93,38,0.35)] transition-transform hover:-translate-y-0.5 sm:w-auto sm:max-w-none sm:gap-3.5 sm:px-6 sm:py-4"
              >
                <Icon name={data.button.icon || "mail"} className="h-5 w-5 shrink-0" strokeWidth={2} />
                <span className="min-w-0 text-left text-[14px] font-extrabold leading-snug sm:text-[15px] md:text-[16px]">
                  {data.button.label}
                </span>
                <Icon
                  name="arrowRight"
                  className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.4}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
