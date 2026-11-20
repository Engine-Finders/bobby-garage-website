/** Icon assets: prefer Mercedes gold, fall back to Orange. Masked via currentColor. */
const GOLD = "/Mercedes gold";
const ORANGE = "/Orange";

export const brandIcons = {
  // Core / trust
  car: `${GOLD}/Vehicle Icon-01.webp`,
  engine: `${GOLD}/Engine icon-01.webp`,
  piston: `${ORANGE}/piston (1)-01.webp`,
  gauge: `${GOLD}/Meter Icon-01.webp`,
  wrench: `${GOLD}/Scope decision Icon-01.webp`,
  repair: `${GOLD}/Hones repair vs replace icon-01.webp`,
  replace: `${ORANGE}/Replace-01.webp`,
  refresh: `${ORANGE}/Replace-01.webp`,
  cog: `${GOLD}/Scale Icon-01.webp`,
  info: `${GOLD}/Note Icon-01.webp`,
  calendar: `${GOLD}/Check Watch-01.webp`,
  users: `${GOLD}/Users Icon-01.webp`,
  shieldCheck: `${GOLD}/Expert Verified Icon-01.webp`,
  mapPin: `${GOLD}/Uk focused Icon-01.webp`,
  phone: `${GOLD}/Phone Icon-01.webp`,
  mail: `${GOLD}/Quote Icon-01.webp`,
  turbo: `${GOLD}/Turbo-01.webp`,
  link: `${GOLD}/Chain icon-01.webp`,
  timingChain: `${GOLD}/Timing Chain-01.webp`,
  checkCircle: `${GOLD}/Check-01.webp`,
  search: `${GOLD}/Knowledge centre icon-01.webp`,
  alertTriangle: `${GOLD}/Symptoms Icon-01.webp`,
  clipboardCheck: `${GOLD}/Note Icon-01.webp`,
  laptop: `${GOLD}/Database Icon-01.webp`,
  flag: `${GOLD}/Flagship choice icon-01.webp`,
  coins: `${GOLD}/Value icon-01.webp`,
  calculator: `${GOLD}/Calculator icon-01.webp`,
  faq: `${GOLD}/Faq Icon-01.webp`,
  droplet: `${GOLD}/Oil Leaks.webp`,
  zap: `${GOLD}/Starting and charging icon-01.webp`,
  layers: `${GOLD}/Chassis Icon-01.webp`,
  eye: `${GOLD}/Expert Verified Icon-01.webp`,
  send: `${GOLD}/Quote Icon-01.webp`,
  pencil: `${GOLD}/Note Icon-01.webp`,
  clock: `${GOLD}/Check Watch-01.webp`,
  user: `${GOLD}/Users Icon-01.webp`,

  // Brand / model extras (Orange where gold has no match)
  caliper: `${ORANGE}/Measure-01.webp`,
  towTruck: `${ORANGE}/Recover car-01.webp`,
  thermometer: `${ORANGE}/overheat-01.webp`,
  arrowRight: `${ORANGE}/right-arrow-01.webp`,
  chevronRight: `${ORANGE}/right-arrow-01.webp`,
  cooling: `${GOLD}/Cooling System icon-01.webp`,
  injector: `${GOLD}/INjector ICON-01.webp`,
  flywheel: `${GOLD}/Flywheel Icon-01.webp`,
  crankshaft: `${GOLD}/crankshaft-01.webp`,
  egr: `${GOLD}/Egr icon-01.webp`,
  petrol: `${GOLD}/Petrol Icon-01.webp`,
  callSpecialist: `${GOLD}/Call a specialist Icon-01.webp`,
  quote: `${GOLD}/Quote Icon-01.webp`,
  note: `${GOLD}/Note Icon-01.webp`,
  faqIcon: `${GOLD}/Faq Icon-01.webp`,
};

/** Encode spaces / special chars so CSS mask urls resolve. */
export function getBrandIconSrc(name) {
  const src = brandIcons[name];
  if (!src) return null;
  return encodeURI(src);
}
