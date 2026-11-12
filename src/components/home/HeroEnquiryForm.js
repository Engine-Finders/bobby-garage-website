"use client";

import { useState } from "react";
import Icon from "../ui/Icon";

const UK_REG = /^[A-Z0-9]{2,8}$/;

const EU_STARS = Array.from({ length: 12 }, (_, i) => {
  const a = (i * Math.PI) / 6;
  return [Math.round((12 + 8 * Math.cos(a)) * 100) / 100, Math.round((12 + 8 * Math.sin(a)) * 100) / 100];
});

export default function HeroEnquiryForm({ form }) {
  const [registration, setRegistration] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reg = registration.replace(/\s+/g, "").toUpperCase();

    if (!reg) return setError(form.errors.empty);
    if (!UK_REG.test(reg) || !/[A-Z]/.test(reg) || !/\d/.test(reg)) return setError(form.errors.invalid);

    setError("");
    sessionStorage.setItem(form.storageKey, reg);
    document.getElementById(form.targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-[460px] overflow-hidden rounded-[20px] border border-white/15 bg-linear-to-br from-white/[0.14] via-white/[0.07] to-white/[0.04] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-7 lg:p-6 xl:p-7">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-linear-to-br from-gold/30 to-brand/15 text-[#f3a54a] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] sm:h-[60px] sm:w-[60px]">
          <Icon name="engine" className="h-8 w-8" strokeWidth={1.7} />
        </div>
        <div>
          <h2 className="text-[19px] font-bold leading-tight text-white sm:text-[22px]">{form.title}</h2>
          <p className="mt-1.5 text-[14px] leading-snug text-white/75 sm:text-[15px]">{form.subtitle}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="relative mt-6 space-y-4">
        <div>
          <label htmlFor="hero-registration" className="sr-only">
            {form.inputLabel}
          </label>
          <div
            className={`flex h-14 overflow-hidden rounded-lg bg-white ring-2 transition-shadow focus-within:ring-brand sm:h-[58px] ${
              error ? "ring-red-500" : "ring-transparent"
            }`}
          >
            <div className="flex w-14 shrink-0 flex-col items-center justify-center gap-0.5 bg-[#1d4aa8] text-white">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
                {EU_STARS.map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="1.4" fill="#ffd200" />
                ))}
              </svg>
              <span className="text-[13px] font-bold leading-none">{form.countryCode}</span>
            </div>
            <input
              id="hero-registration"
              type="text"
              inputMode="text"
              autoComplete="off"
              spellCheck="false"
              maxLength={10}
              value={registration}
              onChange={(e) => {
                setRegistration(e.target.value.toUpperCase());
                if (error) setError("");
              }}
              placeholder={form.placeholder}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "hero-registration-error" : undefined}
              className="min-w-0 flex-1 bg-transparent px-4 text-lg font-bold uppercase tracking-[0.08em] text-ink outline-none placeholder:text-base placeholder:font-normal placeholder:normal-case placeholder:tracking-normal placeholder:text-text-grey/80"
            />
          </div>
          {error && (
            <p id="hero-registration-error" role="alert" className="mt-2 text-sm font-medium text-red-300">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="group flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-linear-to-b from-[#f06b30] to-brand px-5 text-[15px] font-bold text-white shadow-[0_12px_30px_rgba(232,93,38,0.4)] transition-all hover:-translate-y-0.5 hover:from-brand hover:to-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-[58px] sm:text-base"
        >
          {form.buttonText}
          <Icon name="arrowRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
        </button>
      </form>

      <div className="relative mt-6 border-t border-white/12 pt-5">
        <a href={form.fallback.href} className="group flex items-start gap-3.5 text-white/85 transition-colors hover:text-white">
          <Icon name="pencil" className="mt-0.5 h-5 w-5 shrink-0 text-white/70 group-hover:text-brand" />
          <span className="text-[14px] leading-snug sm:text-[15px]">
            <span className="block font-medium text-white">{form.fallback.title}</span>
            <span className="text-white/75 underline-offset-4 group-hover:underline">{form.fallback.text}</span>
          </span>
        </a>
      </div>
    </div>
  );
}
