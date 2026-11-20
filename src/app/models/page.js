import Link from "next/link";
import { getModelRegistry } from "@/lib/models";

export const metadata = {
  title: "Models | Boby Engine Work",
  description: "Browse model-specific engine rebuild and repair guides from Boby Engine Work.",
};

export default function ModelsPage() {
  const models = getModelRegistry().filter((m) => m.status === "live");

  return (
    <main className="flex-1 bg-[#f6f2ed] text-ink">
      <div className="container-site py-10 md:py-14 lg:py-16">
        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand">Directory</p>
        <h1 className="mt-2 text-[32px] font-extrabold leading-tight tracking-[-0.02em] sm:text-[40px] lg:text-[48px]">
          Models
        </h1>
        <span className="mt-3 block h-[3px] w-14 rounded-full bg-brand" aria-hidden="true" />
        <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-ink/75">
          Choose a model for generation coverage, rebuild guides and common faults.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <li key={model.slug}>
              <Link
                href={model.href}
                className="flex items-center justify-between rounded-2xl border border-[#e4ddd4] bg-white px-5 py-4 text-[16px] font-bold text-ink shadow-[0_8px_20px_rgba(13,15,18,0.06)] transition-colors hover:border-brand/40 hover:text-brand"
              >
                {model.name}
                <span aria-hidden="true" className="text-brand">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
