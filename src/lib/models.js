import registry from "../../registry/models.json";

export function getModelRegistry() {
  return registry;
}

export function getLiveModelSlugs() {
  return registry.filter((m) => m.status === "live").map((m) => m.slug);
}

export function getModelBySlug(slug) {
  const entry = registry.find((m) => m.slug === slug && m.status === "live");
  return entry ?? null;
}

export async function getModelData(dataFile) {
  const mod = await import(`../data/models/${dataFile}`);
  return mod.default;
}
