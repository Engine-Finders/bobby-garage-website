import { notFound } from "next/navigation";
import Section1 from "@/components/engine/Section1";
import { getEngineData } from "@/lib/engines";

const sections = {
  1: { Component: Section1, key: "section1" },
};

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export const metadata = { robots: { index: false, follow: false } };

/** Dev-only: one engine section in isolation (e.g. /dev-preview/engine/1). */
export default async function EngineDevPreview({ params }) {
  if (process.env.NODE_ENV === "production") notFound();
  const { section } = await params;
  const entry = sections[section];
  if (!entry) notFound();
  const engineData = await getEngineData("mercedes-om651.json");
  const { Component, key } = entry;
  return (
    <main className="flex-1">
      <Component data={engineData[key]} />
    </main>
  );
}
