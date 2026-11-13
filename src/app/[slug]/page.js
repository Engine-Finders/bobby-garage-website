import { notFound } from "next/navigation";
import BrandPage from "@/components/brand/BrandPage";
import ModelPage from "@/components/model/ModelPage";
import { getBrandBySlug, getBrandData, getLiveBrandSlugs } from "@/lib/brands";
import { getModelBySlug, getModelData, getLiveModelSlugs } from "@/lib/models";

export function generateStaticParams() {
  const brands = getLiveBrandSlugs().map((slug) => ({ slug }));
  const models = getLiveModelSlugs().map((slug) => ({ slug }));
  return [...brands, ...models];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const brand = getBrandBySlug(slug);
  if (brand) {
    const data = await getBrandData(brand.dataFile);
    return { title: data.meta.title, description: data.meta.description };
  }

  const model = getModelBySlug(slug);
  if (model) {
    const data = await getModelData(model.dataFile);
    return { title: data.meta.title, description: data.meta.description };
  }

  return {};
}

export default async function SlugPage({ params }) {
  const { slug } = await params;

  const brand = getBrandBySlug(slug);
  if (brand) {
    const data = await getBrandData(brand.dataFile);
    return (
      <main className="flex-1">
        <BrandPage data={data} />
      </main>
    );
  }

  const model = getModelBySlug(slug);
  if (model) {
    const data = await getModelData(model.dataFile);
    return (
      <main className="flex-1">
        <ModelPage data={data} />
      </main>
    );
  }

  notFound();
}
