import data from "../../data/home-data/section11.json";
import SectionShell from "../ui/SectionShell";
import RemovalCard from "./section11/RemovalCard";
import WarrantyCard from "./section11/WarrantyCard";
import ConfidenceBar from "./section11/ConfidenceBar";

export default function Section11() {
  return (
    <SectionShell id={data.id} tone="light" padding="py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7 lg:items-stretch">
        <RemovalCard data={data.removal} />
        <WarrantyCard data={data.warranty} />
      </div>

      <div className="mt-8 md:mt-10">
        <ConfidenceBar icon={data.bottomBar.icon} title={data.bottomBar.title} text={data.bottomBar.text} />
      </div>
    </SectionShell>
  );
}
