import { notFound } from "next/navigation";
import Section1 from "@/components/engine/Section1";
import Section2 from "@/components/engine/Section2";
import Section3 from "@/components/engine/Section3";
import Section4 from "@/components/engine/Section4";
import Section5 from "@/components/engine/Section5";
import Section6 from "@/components/engine/Section6";
import Section7 from "@/components/engine/Section7";
import Section8 from "@/components/engine/Section8";
import Section9 from "@/components/engine/Section9";
import Section10 from "@/components/engine/Section10";
import Section11 from "@/components/engine/Section11";
import { getEngineData } from "@/lib/engines";

const sections = {
  1: { Component: Section1, key: "section1" },
  2: { Component: Section2, key: "section2" },
  3: { Component: Section3, key: "section3" },
  4: { Component: Section4, key: "section4" },
  5: { Component: Section5, key: "section5" },
  6: { Component: Section6, key: "section6" },
  7: { Component: Section7, key: "section7" },
  8: { Component: Section8, key: "section8" },
  9: { Component: Section9, key: "section9" },
  10: { Component: Section10, key: "section10" },
  11: { Component: Section11, key: "section11" },
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
