import Link from "next/link";
import BrandLogo from "./BrandLogo";
import Icon from "../../ui/Icon";

function splitVehicle(vehicle) {
  const parts = vehicle.split(/\s+[–-]\s+/);
  return { model: parts[0]?.trim() || vehicle, engine: parts[1]?.trim() || "" };
}

function splitGuide(guide) {
  const match = guide.match(/^(From)\s+(.+)$/i);
  if (!match) return { label: "", amount: guide };
  return { label: match[1], amount: match[2] };
}

/** Mobile-only price row matching the rebuild guide card layout. */
export default function MobilePriceCard({ row, href = "#engine-quote" }) {
  const { model, engine } = splitVehicle(row.vehicle);
  const { label, amount } = splitGuide(row.guide);

  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-3 rounded-2xl bg-[#f3eee8] px-3.5 py-3.5 shadow-[0_8px_20px_rgba(13,15,18,0.18)] transition-colors active:bg-[#ebe4dc]"
      >
        <BrandLogo src={row.logo} alt={row.logoAlt} />

        <span className="min-w-0 flex-1">
          <span className="block text-[14px] font-extrabold leading-snug text-ink">{model}</span>
          {engine ? (
            <span className="mt-0.5 block text-[12px] font-medium leading-snug text-ink/55">{engine}</span>
          ) : null}
        </span>

        <span className="shrink-0 text-right">
          {label ? <span className="block text-[11px] font-semibold leading-none text-brand">{label}</span> : null}
          <span className="mt-0.5 block text-[17px] font-extrabold leading-none text-brand">{amount}</span>
        </span>

        <Icon name="chevronRight" className="size-5 shrink-0 text-brand" strokeWidth={2.4} />
      </Link>
    </li>
  );
}
