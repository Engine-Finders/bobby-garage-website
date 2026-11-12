import HeadingStrip from "../../ui/HeadingStrip";
import Icon from "../../ui/Icon";

export default function CoverageBar({ bar }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/80 bg-white/75 shadow-[0_16px_40px_rgba(13,15,18,0.14)] backdrop-blur-md lg:flex lg:items-stretch">
      <HeadingStrip
        icon={bar.icon}
        title={bar.title}
        as="h3"
        size="lg"
        line={false}
        className="shrink-0 [&>div]:w-full [&>div]:rounded-none lg:[&>div]:w-auto"
      />
      <ul className="grid flex-1 grid-cols-2 gap-y-5 px-5 py-5 lg:grid-cols-4 lg:gap-y-0 lg:px-4 lg:py-0">
        {bar.items.map((item, i) => (
          <li
            key={item.lines.join(" ")}
            className={`flex items-center gap-3 lg:justify-center lg:py-5 ${
              i > 0 ? "lg:border-l lg:border-ink/10" : ""
            } ${i % 2 === 1 ? "pl-3 max-lg:border-l max-lg:border-ink/10" : ""}`}
          >
            <Icon name={item.icon} className="h-8 w-8 shrink-0 text-brand md:h-9 md:w-9" strokeWidth={1.5} />
            <span className="text-[14px] font-semibold leading-tight text-ink md:text-[15px]">
              {item.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
