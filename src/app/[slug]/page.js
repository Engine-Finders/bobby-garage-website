import { notFound } from "next/navigation";
import BrandPage from "@/components/brand/BrandPage";
import { getBrandBySlug, getBrandData, getLiveBrandSlugs } from "@/lib/brands";

export function generateStaticParams() {
  return getLiveBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};
  const data = await getBrandData(brand.dataFile);
  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}

export default async function BrandSlugPage({ params }) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();
  const data = await getBrandData(brand.dataFile);
  return (
    <main className="flex-1">
      <BrandPage data={data} />
    </main>
  );
}
