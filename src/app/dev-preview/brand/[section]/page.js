import { notFound } from "next/navigation";
import Section1 from "@/components/brand/Section1";
import Section2 from "@/components/brand/Section2";
import Section3 from "@/components/brand/Section3";
import Section4 from "@/components/brand/Section4";
import Section5 from "@/components/brand/Section5";
import Section6 from "@/components/brand/Section6";
import Section7 from "@/components/brand/Section7";
import { getBrandData } from "@/lib/brands";

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

/** Dev-only: one BMW brand section in isolation (e.g. /dev-preview/brand/3). */
export default async function BrandDevPreview({ params }) {
  if (process.env.NODE_ENV === "production") notFound();
  const { section } = await params;
  const entry = sections[section];
  if (!entry) notFound();
  const brandData = await getBrandData("bmw.json");
  const { Component, key } = entry;
  return (
    <main className="flex-1">
      <Component data={brandData[key]} />
    </main>
  );
}
