import Image from "next/image";

/** Shared diagonal: top 62% → bottom 48% — used by both image clips + the orange edge. */
const LEFT_CLIP = "polygon(0 0, 62% 0, 48% 100%, 0 100%)";
const RIGHT_CLIP = "polygon(62% 0, 100% 0, 100% 100%, 48% 100%)";

export default function PartsGallery({ images }) {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-[28px] bg-primary-dark shadow-[0_24px_50px_rgba(13,15,18,0.22)] lg:max-w-none lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]">
      <div className="absolute inset-0" style={{ clipPath: LEFT_CLIP }}>
        <Image
          src={images.main.src}
          alt={images.main.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
          style={{ objectPosition: images.main.position }}
        />
      </div>
      <div className="absolute inset-0" style={{ clipPath: RIGHT_CLIP }}>
        <Image
          src={images.detail.src}
          alt={images.detail.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 30vw"
          className="object-cover"
          style={{ objectPosition: images.detail.position }}
        />
        <div className="absolute inset-0 bg-primary-dark/25" aria-hidden="true" />
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-brand"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 62 0 L 48 100"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
