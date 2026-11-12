/**
 * Renders text that may contain orange highlights.
 * `content` can be:
 *  - a plain string
 *  - { main, highlight }            -> "main" + orange "highlight"
 *  - [{ text, highlight: true }]    -> any number of segments, highlighted ones in orange
 */
export default function HighlightText({ content, highlightClassName = "text-brand" }) {
  if (!content) return null;
  if (typeof content === "string") return content;

  if (Array.isArray(content)) {
    return content.map((part, i) => {
      const segment = typeof part === "string" ? { text: part } : part;
      return segment.highlight ? (
        <span key={i} className={highlightClassName}>
          {segment.text}
        </span>
      ) : (
        <span key={i}>{segment.text}</span>
      );
    });
  }

  return (
    <>
      {content.main}{" "}
      {content.highlight && <span className={highlightClassName}>{content.highlight}</span>}
    </>
  );
}
