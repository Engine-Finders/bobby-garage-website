import Image from "next/image";

/**
 * Mobile-only soft-fade image behind a heading block (matches DiagonalSectionHeader).
 * Desktop: renders nothing — parent keeps its diagonal side image.
 */
export default function SoftFadeHeading({
  imageSrc,
  imageAlt = "",
  tone = "light",
  children,
  className = "",
}) {
  const base = tone === "dark" ? "#0d0f12" : "#f6f2ed";
  const fade =
    tone === "dark"
      ? `linear-gradient(105deg, ${base} 0%, ${base} 42%, rgba(13,15,18,0.92) 52%, rgba(13,15,18,0.35) 64%, transparent 76%)`
      : `linear-gradient(105deg, ${base} 0%, ${base} 42%, rgba(246,242,237,0.92) 52%, rgba(246,242,237,0.35) 64%, transparent 76%)`;

  return (
    <div className={`relative isolate overflow-hidden lg:hidden ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          quality={100}
          unoptimized
          className="object-cover object-[82%_40%]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0" style={{ background: fade }} aria-hidden="true" />
      <div className="container-site relative z-10 py-5 sm:py-6">
        <div className="max-w-[62%]">{children}</div>
      </div>
    </div>
  );
}
