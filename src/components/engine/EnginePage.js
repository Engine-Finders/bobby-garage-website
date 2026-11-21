import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";

export default function EnginePage({ data }) {
  return (
    <>
      <Section1 data={data.section1} />
      <Section2 data={data.section2} />
      <Section3 data={data.section3} />
      <Section4 data={data.section4} />
      <Section5 data={data.section5} />
      <Section6 data={data.section6} />
      <Section7 data={data.section7} />
      <Section8 data={data.section8} />
      <Section9 data={data.section9} />
      <Section10 data={data.section10} />
      <Section11 data={data.section11} />
    </>
  );
}
