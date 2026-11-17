import Icon from "../../ui/Icon";

/** Vertical orange timeline connector between mobile step cards. */
export default function MobileStepConnector() {
  return (
    <div className="ml-4 flex w-12 flex-col items-center py-1" aria-hidden="true">
      <span className="h-5 w-[2px] rounded-full bg-brand/80" />
      <span className="my-1 flex size-8 items-center justify-center rounded-full border border-black/5 bg-white text-brand shadow-[0_6px_14px_rgba(13,15,18,0.12)]">
        <Icon name="chevronDown" className="size-4" strokeWidth={2.6} />
      </span>
      <span className="h-5 w-[2px] rounded-full bg-brand/80" />
    </div>
  );
}
