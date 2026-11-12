import Icon from "../../ui/Icon";

/** Floating dark tile with a glowing orange check-engine icon. */
export default function WarningLight({ icon, label, className = "" }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`pointer-events-none absolute flex h-[104px] w-[132px] items-center justify-center rounded-3xl border-2 border-brand/80 bg-linear-to-br from-[#1b1d22]/95 to-primary-dark/95 text-brand shadow-[0_0_44px_rgba(232,93,38,0.45),inset_0_0_26px_rgba(232,93,38,0.22)] backdrop-blur-sm xl:h-[116px] xl:w-[148px] ${className}`}
    >
      <Icon name={icon} className="h-14 w-14 drop-shadow-[0_0_10px_rgba(232,93,38,0.85)] xl:h-16 xl:w-16" strokeWidth={1.6} />
    </div>
  );
}
