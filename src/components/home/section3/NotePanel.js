import Card from "../../ui/Card";
import Icon from "../../ui/Icon";

/** Light glass note card with an orange outlined icon on the left. */
export default function NotePanel({ icon, text }) {
  return (
    <Card variant="glass" className="flex items-start gap-4 p-5 md:p-6">
      <Icon name={icon} className="mt-0.5 size-7 shrink-0 text-brand md:size-8" strokeWidth={1.6} />
      <p className="text-[14px] leading-relaxed text-ink/75 md:text-[15px]">{text}</p>
    </Card>
  );
}
