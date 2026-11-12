import registry from "../../registry/brands.json";

export function getBrandRegistry() {
  return registry;
}

export function getLiveBrandSlugs() {
  return registry.filter((b) => b.status === "live").map((b) => b.slug);
}

export function getBrandBySlug(slug) {
  const entry = registry.find((b) => b.slug === slug && b.status === "live");
  return entry ?? null;
}

export async function getBrandData(dataFile) {
  const mod = await import(`../data/brands/${dataFile}`);
  return mod.default;
}
