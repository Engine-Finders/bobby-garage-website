/** Mercedes gold icon assets — used as CSS masks so `currentColor` / Tailwind text-* controls tint. */
const BASE = "/Mercedes gold";

export const brandIcons = {
  car: `${BASE}/Vehicle Icon-01.webp`,
  engine: `${BASE}/Engine icon-01.webp`,
  gauge: `${BASE}/Meter Icon-01.webp`,
  wrench: `${BASE}/Scope decision Icon-01.webp`,
  repair: `${BASE}/Hones repair vs replace icon-01.webp`,
  cog: `${BASE}/Scale Icon-01.webp`,
  info: `${BASE}/Note Icon-01.webp`,
  calendar: `${BASE}/Check Watch-01.webp`,
  users: `${BASE}/Users Icon-01.webp`,
  shieldCheck: `${BASE}/Expert Verified Icon-01.webp`,
  mapPin: `${BASE}/Uk focused Icon-01.webp`,
  phone: `${BASE}/Phone Icon-01.webp`,
  mail: `${BASE}/Quote Icon-01.webp`,
  turbo: `${BASE}/Turbo-01.webp`,
  link: `${BASE}/Chain icon-01.webp`,
  timingChain: `${BASE}/Timing Chain-01.webp`,
  checkCircle: `${BASE}/Check-01.webp`,
  search: `${BASE}/Knowledge centre icon-01.webp`,
  alertTriangle: `${BASE}/Symptoms Icon-01.webp`,
  clipboardCheck: `${BASE}/Note Icon-01.webp`,
  laptop: `${BASE}/Database Icon-01.webp`,
  flag: `${BASE}/Flagship choice icon-01.webp`,
  coins: `${BASE}/Value icon-01.webp`,
  calculator: `${BASE}/Calculator icon-01.webp`,
  faq: `${BASE}/Faq Icon-01.webp`,
  droplet: `${BASE}/Oil Leaks.webp`,
  zap: `${BASE}/Starting and charging icon-01.webp`,
  layers: `${BASE}/Chassis Icon-01.webp`,
  eye: `${BASE}/Expert Verified Icon-01.webp`,
  send: `${BASE}/Quote Icon-01.webp`,
  pencil: `${BASE}/Note Icon-01.webp`,
  clock: `${BASE}/Check Watch-01.webp`,
  user: `${BASE}/Users Icon-01.webp`,
};

export function getBrandIconSrc(name) {
  return brandIcons[name] || null;
}
