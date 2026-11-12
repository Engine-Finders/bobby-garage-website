import Image from "next/image";

/** Square brand logo slot (placeholder image until real logos are supplied). */
export default function BrandLogo({ src, alt }) {
  return (
    <span className="relative block size-9 shrink-0 md:size-8 lg:size-10">
      <Image src={src} alt={alt} fill sizes="40px" className="object-contain" />
    </span>
  );
}
