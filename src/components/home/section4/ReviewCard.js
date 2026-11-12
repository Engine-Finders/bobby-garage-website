import Icon from "../../ui/Icon";

export default function ReviewCard({ review, enabled, skeleton, verifiedLabel, sourceLabel }) {
  const showReal = enabled && review.quote;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white bg-white/80 p-5 shadow-[0_14px_34px_rgba(13,15,18,0.08)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(13,15,18,0.12)] sm:p-6">
      <Icon name="quote" className="h-8 w-8 text-brand/45" strokeWidth={2.2} />

      <div className="mt-5 flex-1">
        {showReal ? (
          <blockquote className="text-[15px] leading-relaxed text-ink/80 md:text-base">
            &ldquo;{review.quote}&rdquo;
          </blockquote>
        ) : (
          <div className="space-y-3 py-1" aria-hidden="true">
            {skeleton.map((w, i) => (
              <span key={i} className={`block h-2.5 rounded-full bg-[#dfe1e4] ${w}`} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink/5 pt-4">
        <p className="flex items-center gap-2 text-[13px] font-bold text-ink">
          <Icon name="user" className="h-4 w-4 shrink-0" strokeWidth={2} />
          {showReal && review.author ? review.author : verifiedLabel}
        </p>
        {showReal && review.sourceUrl ? (
          <a
            href={review.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-brand hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Icon name="externalLink" className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />
            {sourceLabel}
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-brand">
            <Icon name="externalLink" className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />
            {sourceLabel}
          </span>
        )}
      </div>
    </article>
  );
}
