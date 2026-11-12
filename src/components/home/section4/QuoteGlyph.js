/** Large, very light decorative quotation mark used behind the reviews heading. */
export default function QuoteGlyph({ className = "" }) {
  return (
    <svg viewBox="0 0 120 100" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M0 100V58C0 24 18 4 52 0l4 14C38 19 29 30 29 46h27v54H0Zm64 0V58C64 24 82 4 116 0l4 14c-18 5-27 16-27 32h27v54H64Z" />
    </svg>
  );
}
