import data from "../../data/home-data/section11.json";
import SectionShell from "../ui/SectionShell";
import RemovalCard from "./section11/RemovalCard";
import WarrantyCard from "./section11/WarrantyCard";
import ConfidenceBar from "./section11/ConfidenceBar";

export default function Section11() {
  return (
    <SectionShell id={data.id} tone="light" padding="py-8 md:py-10 lg:py-12">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-7">
        <RemovalCard data={data.removal} />
        <WarrantyCard data={data.warranty} />
      </div>

      <div className="mt-5 md:mt-10">
        <ConfidenceBar icon={data.bottomBar.icon} title={data.bottomBar.title} text={data.bottomBar.text} />
      </div>
    </SectionShell>
  );
}
