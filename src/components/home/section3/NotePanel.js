import Card from "../../ui/Card";
import Icon from "../../ui/Icon";

/** Light glass note card with an orange outlined icon on the left. */
export default function NotePanel({ icon, text }) {
  return (
    <Card variant="glass" className="clearfix p-4 md:flex md:items-start md:gap-4 md:p-6">
      <Icon
        name={icon}
        className="mb-1 mr-3 size-7 text-brand max-md:float-left md:mb-0 md:mr-0 md:mt-0.5 md:size-8 md:shrink-0"
        strokeWidth={1.6}
      />
      <p className="text-[14px] leading-relaxed text-ink/75 md:text-[15px]">{text}</p>
    </Card>
  );
}
