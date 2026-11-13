import { notFound } from "next/navigation";
import Section1 from "@/components/model/Section1";
import Section2 from "@/components/model/Section2";
import Section3 from "@/components/model/Section3";
import Section4 from "@/components/model/Section4";
import Section5 from "@/components/model/Section5";
import Section6 from "@/components/model/Section6";
import Section7 from "@/components/model/Section7";
import { getModelData } from "@/lib/models";

const sections = {
  1: { Component: Section1, key: "section1" },
  2: { Component: Section2, key: "section2" },
  3: { Component: Section3, key: "section3" },
  4: { Component: Section4, key: "section4" },
  5: { Component: Section5, key: "section5" },
  6: { Component: Section6, key: "section6" },
  7: { Component: Section7, key: "section7" },
};

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export const metadata = { robots: { index: false, follow: false } };

/** Dev-only: one BMW 3 Series model section in isolation (e.g. /dev-preview/model/1). */
export default async function ModelDevPreview({ params }) {
  if (process.env.NODE_ENV === "production") notFound();
  const { section } = await params;
  const entry = sections[section];
  if (!entry) notFound();
  const modelData = await getModelData("bmw-3-series.json");
  const { Component, key } = entry;
  return (
    <main className="flex-1">
      <Component data={modelData[key]} />
    </main>
  );
}
