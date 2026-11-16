import registry from "../../registry/engines.json";

export function getEngineRegistry() {
  return registry;
}

export function getLiveEngineSlugs() {
  return registry.filter((e) => e.status === "live").map((e) => e.slug);
}

export function getEngineBySlug(slug) {
  const entry = registry.find((e) => e.slug === slug && e.status === "live");
  return entry ?? null;
}

export async function getEngineData(dataFile) {
  const mod = await import(`../data/engines/${dataFile}`);
  return mod.default;
}
