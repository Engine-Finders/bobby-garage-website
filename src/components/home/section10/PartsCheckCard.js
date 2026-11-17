import Icon from "../../ui/Icon";
import CheckBadge from "../section8/CheckBadge";

/** Mobile horizontal parts checklist row matching the reference layout. */
export default function PartsCheckCard({ item }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-3.5 py-3.5 shadow-[0_10px_24px_rgba(13,15,18,0.08)]">
      <CheckBadge className="h-7! w-7!" />
      <p className="min-w-0 flex-1 text-[13.5px] font-medium leading-snug text-ink">{item.text}</p>
      <Icon name={item.icon} className="h-9 w-9 shrink-0 text-brand/70" strokeWidth={1.35} />
    </li>
  );
}
