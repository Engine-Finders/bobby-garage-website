import { Suspense } from "react";
import { notFound } from "next/navigation";
import EnginePage from "@/components/engine/EnginePage";
import { getEngineBySlug, getEngineData, getLiveEngineSlugs } from "@/lib/engines";

export function generateStaticParams() {
  return getLiveEngineSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const engine = getEngineBySlug(slug);
  if (!engine) return {};
  const data = await getEngineData(engine.dataFile);
  return {
    title: data.meta.title,
    description: data.meta.description,
    alternates: data.meta.canonical ? { canonical: data.meta.canonical } : undefined,
  };
}

export default function EngineSlugPage({ params }) {
  return (
    <Suspense fallback={<main className="flex-1" />}>
      <EngineSlugContent params={params} />
    </Suspense>
  );
}

async function EngineSlugContent({ params }) {
  const { slug } = await params;
  const engine = getEngineBySlug(slug);
  if (!engine) notFound();
  const data = await getEngineData(engine.dataFile);
  return (
    <main className="flex-1">
      <EnginePage data={data} />
    </main>
  );
}
