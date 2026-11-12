import { notFound } from "next/navigation";
import Section1 from "../../../components/home/Section1";
import Section2 from "../../../components/home/Section2";
import Section3 from "../../../components/home/Section3";
import Section4 from "../../../components/home/Section4";
import Section5 from "../../../components/home/Section5";
import Section6 from "../../../components/home/Section6";
import Section7 from "../../../components/home/Section7";
import Section8 from "../../../components/home/Section8";
import Section9 from "../../../components/home/Section9";
import Section10 from "../../../components/home/Section10";
import Section11 from "../../../components/home/Section11";
import Section12 from "../../../components/home/Section12";

const sections = {
  1: Section1,
  2: Section2,
  3: Section3,
  4: Section4,
  5: Section5,
  6: Section6,
  7: Section7,
  8: Section8,
  9: Section9,
  10: Section10,
  11: Section11,
  12: Section12,
};

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export const metadata = { robots: { index: false, follow: false } };

/** Dev-only: renders one homepage section in isolation (e.g. /dev-preview/3) for visual QA. */
export default async function DevPreview({ params }) {
  if (process.env.NODE_ENV === "production") notFound();
  const { section } = await params;
  const Section = sections[section];
  if (!Section) notFound();
  return (
    <main className="flex-1">
      <Section />
    </main>
  );
}
