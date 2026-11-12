import Image from "next/image";

export default function PartsGallery({ images }) {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-[28px] bg-primary-dark shadow-[0_24px_50px_rgba(13,15,18,0.22)] lg:max-w-none lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]">
      <div className="absolute inset-0 [clip-path:polygon(0_0,62%_0,48%_100%,0_100%)]">
        <Image
          src={images.main.src}
          alt={images.main.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
          style={{ objectPosition: images.main.position }}
        />
      </div>
      <div className="absolute inset-0 [clip-path:polygon(62%_0,100%_0,100%_100%,48%_100%)]">
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
      <span
        className="pointer-events-none absolute inset-y-[-10%] left-[52%] w-[10px] -translate-x-1/2 rotate-[18deg] bg-brand shadow-[0_0_24px_rgba(232,93,38,0.55)]"
        aria-hidden="true"
      />
    </div>
  );
}
