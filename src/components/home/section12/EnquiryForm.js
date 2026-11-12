"use client";

import { useState } from "react";
import HighlightText from "../../ui/HighlightText";
import Icon from "../../ui/Icon";

export default function EnquiryForm({ form }) {
  const { fields, errors } = form;
  const [registration, setRegistration] = useState(() => {
    if (typeof window === "undefined") return "";
    try {
      return sessionStorage.getItem(form.storageKey) || "";
    } catch {
      return "";
    }
  });
  const [modelYear, setModelYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [runs, setRuns] = useState(fields.runs.options[0]);
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reg = registration.trim();
    const model = modelYear.trim();
    const sym = symptoms.trim();

    if (!reg && !model) return setError(errors.identity);
    if (!sym) return setError(errors.symptoms);

    setError("");
    const lines = [
      `Registration: ${reg || "—"}`,
      `${fields.modelYear.label}: ${model || "—"}`,
      `${fields.mileage.label}: ${mileage.trim() || "—"}`,
      `${fields.runs.label}: ${runs === fields.runs.options[0] ? "—" : runs}`,
      `${fields.symptoms.label}:`,
      sym,
    ];
    const subject = encodeURIComponent("Engine assessment enquiry");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${form.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "mt-1.5 h-12 w-full rounded-lg border border-warm-border bg-white px-4 text-[15px] text-ink outline-none transition-shadow placeholder:text-text-grey/70 focus:border-brand focus:ring-2 focus:ring-brand/25";

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/[0.06] bg-white p-5 shadow-[0_24px_60px_rgba(13,15,18,0.28)] md:p-7">
      <span className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 rounded-tl-[28px] bg-brand/15" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-2 w-28 bg-brand" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-28 w-2 bg-brand" aria-hidden="true" />

      <h3 className="text-[24px] font-extrabold leading-tight text-ink md:text-[28px]">
        <HighlightText content={form.title} />
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink/70 md:text-[15px]">{form.subtitle}</p>

      <form onSubmit={handleSubmit} noValidate className="relative mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="engine-registration" className="block text-[13px] font-semibold text-ink">
              {fields.registration.label}
            </label>
            <input
              id="engine-registration"
              type="text"
              value={registration}
              onChange={(e) => {
                setRegistration(e.target.value);
                if (error) setError("");
              }}
              placeholder={fields.registration.placeholder}
              className={`${inputClass} uppercase tracking-wide`}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="engine-model-year" className="block text-[13px] font-semibold text-ink">
              {fields.modelYear.label}
            </label>
            <input
              id="engine-model-year"
              type="text"
              value={modelYear}
              onChange={(e) => {
                setModelYear(e.target.value);
                if (error) setError("");
              }}
              placeholder={fields.modelYear.placeholder}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="engine-mileage" className="block text-[13px] font-semibold text-ink">
              {fields.mileage.label}
            </label>
            <input
              id="engine-mileage"
              type="text"
              inputMode="numeric"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              placeholder={fields.mileage.placeholder}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="engine-runs" className="block text-[13px] font-semibold text-ink">
              {fields.runs.label}
            </label>
            <select id="engine-runs" value={runs} onChange={(e) => setRuns(e.target.value)} className={inputClass}>
              {fields.runs.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="engine-symptoms" className="block text-[13px] font-semibold text-ink">
            {fields.symptoms.label}
          </label>
          <textarea
            id="engine-symptoms"
            rows={4}
            value={symptoms}
            onChange={(e) => {
              setSymptoms(e.target.value);
              if (error) setError("");
            }}
            placeholder={fields.symptoms.placeholder}
            className={`${inputClass} h-auto min-h-[112px] resize-y py-3`}
          />
        </div>

        {error && (
          <p role="alert" className="text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="group flex h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-linear-to-b from-[#f06b30] to-brand px-5 text-[15px] font-bold text-white shadow-[0_12px_30px_rgba(232,93,38,0.38)] transition-all hover:-translate-y-0.5 hover:from-brand hover:to-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Icon name="send" className="h-[18px] w-[18px]" strokeWidth={2} />
          {form.submitLabel}
        </button>
      </form>
    </div>
  );
}
