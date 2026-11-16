import Section1 from "./Section1";

export default function EnginePage({ data }) {
  return (
    <>
      <Section1 data={data.section1} />
    </>
  );
}
