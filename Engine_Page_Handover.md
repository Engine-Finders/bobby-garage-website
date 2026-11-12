# BOBY ENGINE WORK — MERCEDES OM651 | FINAL CLAUDE CODE IMPLEMENTATION

**Scope:** Eight attached approved mockups in their upload order. Source-of-truth for public copy: `Boby-Mercedes-OM651-Engine-Page-Sample.pdf` (4 November 2026). All visual measurements below are engineering estimates from flattened raster screenshots, NOT original CSS/Figma values. Confirm by overlay visual regression at 1536/1440/768/375px. No original photo assets were provided; screenshot slices are not clean photographic masters.

**Important:** Generic example mentions BMW G20, N47, B47, B48, N57, B58, six numbered fault cards, a three-column fault structure and interactive engine filters. Those are NOT shown in these final OM651 mockups. Do not implement them. Keep source copy when mockup copy is truncated or visually abbreviated. The original document is editorial reference; its implementation appendix is not public page copy.

## 1. Global design tokens

| Token | Hex | RGB | Tailwind |
|---|---|---|---|

| primary-dark | `#0D0F12` | `13,15,18` | `bg-[#0D0F12]` |

| charcoal | `#16191E` | `22,25,30` | `bg-[#16191E]` |

| alabaster | `#F6F4F0` | `246,244,240` | `bg-[#F6F4F0]` |

| orange | `#E85D26` | `232,93,38` | `bg-[#E85D26]` |

| muted-gold | `#C59B5F` | `197,155,95` | `bg-[#C59B5F]` |

| ink | `#171B22` | `23,27,34` | `bg-[#171B22]` |

| table-even | `#FCFAF7` | `252,250,247` | `bg-[#FCFAF7]` |

| table-odd | `#F2EBE5` | `242,235,229` | `bg-[#F2EBE5]` |

| white | `#FFFFFF` | `255,255,255` | `bg-[#FFFFFF]` |

Borders: `border-white/10`, `border-black/10`; gradients: orange CTA `linear-gradient(90deg,#E85D26 0%,#FF751A 100%)`, dark panel `linear-gradient(135deg,#0D0F12,#252B32)`; warm info bar `linear-gradient(90deg,#F6F4F0,#F2E5DA)`. These are specified implementation approximations.

Fonts: **Inter** for headings, body, tables and buttons (`next/font/google`). Mockups show sans-serif; neither Merriweather nor Playfair is appropriate. Engine codes use Inter bold, not monospace unless explicitly designed. Font matching cannot be certified from screenshots.

| Element | Desktop px/rem | Mobile px/rem | Line-height | Tracking | Weight | Tailwind |
|---|---|---|---|---|---|---|

| H1 | 60 / 3.75 | 36 / 2.25 | 1.02 | -0.035em | 750 | text-[36px] leading-[1.06] tracking-[-.035em] font-bold lg:text-[60px] |

| H2 | 54 / 3.375 | 30 / 1.875 | 1.08 | -0.03em | 750 | text-[30px] leading-[1.1] tracking-[-.03em] font-bold lg:text-[54px] |

| H3 | 32 / 2 | 23 / 1.4375 | 1.18 | -0.02em | 700 | text-[23px] leading-[1.2] font-bold lg:text-[32px] |

| H4 | 24 / 1.5 | 20 / 1.25 | 1.25 | -0.01em | 700 | text-xl lg:text-2xl font-bold |

| Eyebrow | 16 / 1 | 13 / .8125 | 1.3 | 0.04em | 700 | text-[13px] lg:text-base tracking-[.04em] font-bold |

| Body | 18 / 1.125 | 16 / 1 | 1.5 | 0 | 400 | text-base leading-6 lg:text-lg lg:leading-7 |

| Table header | 16 / 1 | 15 / .9375 | 1.3 | -0.01em | 650 | text-[15px] lg:text-base font-semibold |

| Table cell | 16 / 1 | 15 / .9375 | 1.45 | 0 | 450 | text-[15px] lg:text-base leading-[1.45] |

| Badge | 15 / .9375 | 14 / .875 | 1.3 | 0 | 650 | text-sm lg:text-[15px] font-semibold |

Tablet headings: H1 46px, H2 40px, H3 27px. Desktop paragraph cap 18px; mobile body 16px. Container max 1360px, `mx-auto w-full max-w-[1360px] px-5 md:px-8 lg:px-10`; sections `py-12 md:py-16 lg:py-20`, except visually flush composite sections. Cards `rounded-xl` or `rounded-2xl` where screenshots demand; grid `grid-cols-12`, gap 24px desktop and 16px mobile.

```ts
// tailwind.config.ts (Tailwind 3; if Tailwind 4, migrate to @theme in globals.css)
import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],theme:{extend:{colors:{brand:{dark:"#0D0F12",charcoal:"#16191E",alabaster:"#F6F4F0",orange:"#E85D26",gold:"#C59B5F",ink:"#171B22",even:"#FCFAF7",odd:"#F2EBE5"}},maxWidth:{site:"1360px"},boxShadow:{card:"0 8px 22px rgba(20,20,20,.09)",glow:"0 8px 25px -4px rgba(232,93,38,.5)"}}},plugins:[]} satisfies Config;
```

## 2. System architecture

```text
app/engines/mercedes-om651/page.tsx
app/engines/mercedes-om651/layout.tsx
app/api/quote/route.ts
components/site/Header.tsx
components/site/MobileNav.tsx
components/om651/Hero.tsx
components/om651/ModelCoverage.tsx
components/om651/Pricing.tsx
components/om651/Diagnosis.tsx
components/om651/Components.tsx
components/om651/RebuildProcess.tsx
components/om651/WhyRebuild.tsx
components/om651/Warranty.tsx
components/om651/FAQ.tsx
components/om651/AssessmentForm.tsx
components/om651/QuoteDialog.tsx
components/ui/AngledMedia.tsx
components/ui/Reveal.tsx
lib/om651-content.ts
lib/om651-schema.ts
public/images/om651/[licensed-original-assets]
```

Next.js App Router server components by default; client components only for mobile navigation, accordions, motion, modal and form. `framer-motion` MotionConfig reducedMotion="user"; keyboard support and aria labels. Validate POST body using Zod on server, rate-limit and spam protect; never expose secrets. On success announce via aria-live; on failure preserve entered values. Do not invent phone links, warranty destination, email destination or success integration: confirm live targets.

## 3. Reusable diagonal and interaction implementation

```css
.angled-media { position:relative; overflow:hidden; isolation:isolate; }
.angled-media::before { content:""; position:absolute; inset:0; background:linear-gradient(120deg,#E85D26,#FF8A36); clip-path:polygon(21% 0,22% 0,1% 100%,0 100%); z-index:2; pointer-events:none; }
.angled-media > img { width:100%; height:100%; object-fit:cover; clip-path:polygon(22% 0,100% 0,100% 100%,0 100%); }
@media(max-width:767px){.angled-media::before{display:none}.angled-media > img{clip-path:none}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important}}
```

Diagonal screenshot shapes vary by section: do not apply one polygon blindly. For hero, photo begins ~x=730 at bottom and ~x=895 at top (1536px canvas). For headers, curve is rounded rather than a pure straight line: prefer an SVG mask path with an orange 4–6px stroke following the same path; verify in browser overlays. `border-r-4` alone will not trace the diagonal.

Motion: reveal `{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.15},transition:{duration:.42,ease:"easeOut"}}`, stagger .08s. Hover CTA `-translate-y-0.5`, arrow `translate-x-1`, orange shadow; avoid layout shifts. Header dropdown opens on click, hover (pointer devices), and keyboard, closes on Escape/outside click. Avoid scroll-triggered motion on initial LCP hero.

## 4. Section 1 — Navigation and Hero

**Approved reference:** `D7C2BDF1-09EE-413E-8B4A-CF641E7EEC19(1).jpeg` (1536×785px). Preserve reference aspect ratio 1536:785.

### A. Layout and spacing

Header 80px; hero 705px at 1536px reference. Container 1416px with 60px margins. Copy width 650px, image width 780px. H1 two lines, eyebrow 16px, description 19px, pricing callout 640x98px, trust items three across, CTA 480x60px.

Implementation: `mx-auto max-w-[1360px] px-5 md:px-8 lg:px-10`; align sections with shared gutters, use `gap-4 lg:gap-6`; card padding `p-4 md:p-5 lg:p-6`; light borders `border border-black/10`, dark `border border-white/10`; shadows `shadow-[0_8px_22px_rgba(20,20,20,.09)]`. Screenshot dimensions are reference-image coordinates, not guaranteed CSS pixels.

### B. Components and styling

Eyebrow three orange slashes (`///`) at 16–22px, dual-tone heading, 18px desktop paragraph, orange line details, original thematic media. Orange icon strokes 22–28px with 1.8–2px width; buttons height 56–62px; cards radius 12–20px; CTA radius 12px. Use lucide-react icons only as close approximations; use custom SVG if screenshot fidelity requires it. Avoid emoji icons.

### C. Motion, interactions and semantics

Header fixed or sticky top, 80px; 40px scroll threshold adds rgba(13,15,18,.90) and backdrop blur(12px). Menus hover and keyboard focus; escape closes. Quote CTA opens dialog, focus trapped and restored.

Use focus-visible orange outline 2px with offset 3px; hover is not the only feedback. Respect prefers-reduced-motion and touch interaction. Keep real links and buttons distinct.

### D. Assets, cropping and Core Web Vitals

Hero right engine photo 760x700 reference; image at approximately x=750 y=80 w=786 h=705. Preserve full engine and platform. LCP image eager and high priority.

Use source photography, not screenshot crops for production: text overlays, shadows and diagonal masks are baked into the screenshots. If temporary mockup slicing is needed, crop only for reference and flag as NON-PRODUCTION. For production `next/image` supply intrinsic width/height and `sizes`; hero `priority`/`fetchPriority="high"`, below-fold `loading="lazy"`, `decoding="async"`, WebP/AVIF quality ~82; avoid forcing AVIF on every asset without benchmark. Reserve aspect ratios to prevent CLS.

### E. Responsive behavior

Desktop >=1280px: retain screenshot composition. Tablet 768–1279px: 2-column where possible, wrap headings without clipping; model/pricing tables scroll with keyboard-accessible region or convert to cards. Mobile <=767px: single column, 20px side gutters, all copy readable at 16px, no decorative engine photo inside diagnostic cards if it compromises layout; hero photo may move below copy, nonessential angled mask removed; avoid horizontal overflow at 375px. Model and pricing data must remain fully visible via labeled cards.

### F. Content mapping

Exact public copy for this section is reproduced in the **Verbatim source appendix** below, taken from the supplied editorial PDF. Note: screenshot hero/callout line wraps, punctuation and labels may vary; the editorial PDF is authoritative for text, the mockup for appearance. Never silently rewrite technical statements.



## 5. Section 2 — Model Coverage Matrix

**Approved reference:** `63D69D38-AE4A-4006-B8BE-D7DF29AD8A34(1).jpeg` (1536×1024px). Preserve reference aspect ratio 1536:1024.

### A. Layout and spacing

Light background, title and Mercedes photo header about 345px tall; two parallel 3-column tables x=38..757 and x=780..1504 in 1536x1024 reference. Gap 24px, black header height 59px, five/six rows. Bottom callout 1466x110px.

Implementation: `mx-auto max-w-[1360px] px-5 md:px-8 lg:px-10`; align sections with shared gutters, use `gap-4 lg:gap-6`; card padding `p-4 md:p-5 lg:p-6`; light borders `border border-black/10`, dark `border border-white/10`; shadows `shadow-[0_8px_22px_rgba(20,20,20,.09)]`. Screenshot dimensions are reference-image coordinates, not guaranteed CSS pixels.

### B. Components and styling

Eyebrow three orange slashes (`///`) at 16–22px, dual-tone heading, 18px desktop paragraph, orange line details, original thematic media. Orange icon strokes 22–28px with 1.8–2px width; buttons height 56–62px; cards radius 12–20px; CTA radius 12px. Use lucide-react icons only as close approximations; use custom SVG if screenshot fidelity requires it. Avoid emoji icons.

### C. Motion, interactions and semantics

Rows accessible as semantic tables; row hover subtle orange tint, no invented search filters. On mobile convert each row to a labeled card, keep all three data fields.

Use focus-visible orange outline 2px with offset 3px; hover is not the only feedback. Respect prefers-reduced-motion and touch interaction. Keep real links and buttons distinct.

### D. Assets, cropping and Core Web Vitals

Header car photo x≈845 y=0 w≈691 h=342. Small model thumbnails are presentation images; replace with independently licensed originals.

Use source photography, not screenshot crops for production: text overlays, shadows and diagonal masks are baked into the screenshots. If temporary mockup slicing is needed, crop only for reference and flag as NON-PRODUCTION. For production `next/image` supply intrinsic width/height and `sizes`; hero `priority`/`fetchPriority="high"`, below-fold `loading="lazy"`, `decoding="async"`, WebP/AVIF quality ~82; avoid forcing AVIF on every asset without benchmark. Reserve aspect ratios to prevent CLS.

### E. Responsive behavior

Desktop >=1280px: retain screenshot composition. Tablet 768–1279px: 2-column where possible, wrap headings without clipping; model/pricing tables scroll with keyboard-accessible region or convert to cards. Mobile <=767px: single column, 20px side gutters, all copy readable at 16px, no decorative engine photo inside diagnostic cards if it compromises layout; hero photo may move below copy, nonessential angled mask removed; avoid horizontal overflow at 375px. Model and pricing data must remain fully visible via labeled cards.

### F. Content mapping

Exact public copy for this section is reproduced in the **Verbatim source appendix** below, taken from the supplied editorial PDF. Note: screenshot hero/callout line wraps, punctuation and labels may vary; the editorial PDF is authoritative for text, the mockup for appearance. Never silently rewrite technical statements.



## 6. Section 3 — Rebuild Pricing

**Approved reference:** `3F819851-91C7-4A67-B659-2B71D8F35D04(1).jpeg` (1199×1312px). Preserve reference aspect ratio 1199:1312.

### A. Layout and spacing

Header 260px; one 3-column table x=43 y=276 w=1091 h=437 in 1199x1312 reference; 5 rows. Two dark explanatory cards beneath, 24px gap.

Implementation: `mx-auto max-w-[1360px] px-5 md:px-8 lg:px-10`; align sections with shared gutters, use `gap-4 lg:gap-6`; card padding `p-4 md:p-5 lg:p-6`; light borders `border border-black/10`, dark `border border-white/10`; shadows `shadow-[0_8px_22px_rgba(20,20,20,.09)]`. Screenshot dimensions are reference-image coordinates, not guaranteed CSS pixels.

### B. Components and styling

Eyebrow three orange slashes (`///`) at 16–22px, dual-tone heading, 18px desktop paragraph, orange line details, original thematic media. Orange icon strokes 22–28px with 1.8–2px width; buttons height 56–62px; cards radius 12–20px; CTA radius 12px. Use lucide-react icons only as close approximations; use custom SVG if screenshot fidelity requires it. Avoid emoji icons.

### C. Motion, interactions and semantics

Price is a starting guide only. No automatic price calculator or fictitious offer schema. Table cards on mobile with labels and accessible price emphasis.

Use focus-visible orange outline 2px with offset 3px; hover is not the only feedback. Respect prefers-reduced-motion and touch interaction. Keep real links and buttons distinct.

### D. Assets, cropping and Core Web Vitals

Mercedes grille x≈694 y=0 w≈505 h=260; two lower mechanical accents within dark cards. Crop each asset separately from original media.

Use source photography, not screenshot crops for production: text overlays, shadows and diagonal masks are baked into the screenshots. If temporary mockup slicing is needed, crop only for reference and flag as NON-PRODUCTION. For production `next/image` supply intrinsic width/height and `sizes`; hero `priority`/`fetchPriority="high"`, below-fold `loading="lazy"`, `decoding="async"`, WebP/AVIF quality ~82; avoid forcing AVIF on every asset without benchmark. Reserve aspect ratios to prevent CLS.

### E. Responsive behavior

Desktop >=1280px: retain screenshot composition. Tablet 768–1279px: 2-column where possible, wrap headings without clipping; model/pricing tables scroll with keyboard-accessible region or convert to cards. Mobile <=767px: single column, 20px side gutters, all copy readable at 16px, no decorative engine photo inside diagnostic cards if it compromises layout; hero photo may move below copy, nonessential angled mask removed; avoid horizontal overflow at 375px. Model and pricing data must remain fully visible via labeled cards.

### F. Content mapping

Exact public copy for this section is reproduced in the **Verbatim source appendix** below, taken from the supplied editorial PDF. Note: screenshot hero/callout line wraps, punctuation and labels may vary; the editorial PDF is authoritative for text, the mockup for appearance. Never silently rewrite technical statements.



## 7. Section 4 — Fault Diagnosis

**Approved reference:** `B31892D9-75E4-4A68-9F07-563C5C14E099(2).jpeg` (1024×1536px). Preserve reference aspect ratio 1024:1536.

### A. Layout and spacing

Six diagnostic cards stacked on warm white canvas. In 1024x1536 reference: left gutter ~28px; cards width ~968px; photo region last ~310px; 14-16px vertical gap.

Implementation: `mx-auto max-w-[1360px] px-5 md:px-8 lg:px-10`; align sections with shared gutters, use `gap-4 lg:gap-6`; card padding `p-4 md:p-5 lg:p-6`; light borders `border border-black/10`, dark `border border-white/10`; shadows `shadow-[0_8px_22px_rgba(20,20,20,.09)]`. Screenshot dimensions are reference-image coordinates, not guaranteed CSS pixels.

### B. Components and styling

Eyebrow three orange slashes (`///`) at 16–22px, dual-tone heading, 18px desktop paragraph, orange line details, original thematic media. Orange icon strokes 22–28px with 1.8–2px width; buttons height 56–62px; cards radius 12–20px; CTA radius 12px. Use lucide-react icons only as close approximations; use custom SVG if screenshot fidelity requires it. Avoid emoji icons.

### C. Motion, interactions and semantics

Mobile cards retain all text by default, optional disclosure with semantic button; when collapsed, content remains in DOM and can be expanded by keyboard. Fault CTA preselects symptom in quote dialog.

Use focus-visible orange outline 2px with offset 3px; hover is not the only feedback. Respect prefers-reduced-motion and touch interaction. Keep real links and buttons distinct.

### D. Assets, cropping and Core Web Vitals

Six right-hand photos: timing chain, crankshaft, bores/head gasket, injector, turbo, warning dashboard; object-fit cover with object-position center.

Use source photography, not screenshot crops for production: text overlays, shadows and diagonal masks are baked into the screenshots. If temporary mockup slicing is needed, crop only for reference and flag as NON-PRODUCTION. For production `next/image` supply intrinsic width/height and `sizes`; hero `priority`/`fetchPriority="high"`, below-fold `loading="lazy"`, `decoding="async"`, WebP/AVIF quality ~82; avoid forcing AVIF on every asset without benchmark. Reserve aspect ratios to prevent CLS.

### E. Responsive behavior

Desktop >=1280px: retain screenshot composition. Tablet 768–1279px: 2-column where possible, wrap headings without clipping; model/pricing tables scroll with keyboard-accessible region or convert to cards. Mobile <=767px: single column, 20px side gutters, all copy readable at 16px, no decorative engine photo inside diagnostic cards if it compromises layout; hero photo may move below copy, nonessential angled mask removed; avoid horizontal overflow at 375px. Model and pricing data must remain fully visible via labeled cards.

### F. Content mapping

Exact public copy for this section is reproduced in the **Verbatim source appendix** below, taken from the supplied editorial PDF. Note: screenshot hero/callout line wraps, punctuation and labels may vary; the editorial PDF is authoritative for text, the mockup for appearance. Never silently rewrite technical statements.



## 8. Section 5 — Rebuild Components

**Approved reference:** `A4952DD1-CD0F-4926-8E2F-D47C1F37515C(1).jpeg` (1536×784px). Preserve reference aspect ratio 1536:784.

### A. Layout and spacing

Intro image and title above six equal-width cards in 1536x784 reference. Card gap ~10px, image square-ish top area and centered copy.

Implementation: `mx-auto max-w-[1360px] px-5 md:px-8 lg:px-10`; align sections with shared gutters, use `gap-4 lg:gap-6`; card padding `p-4 md:p-5 lg:p-6`; light borders `border border-black/10`, dark `border border-white/10`; shadows `shadow-[0_8px_22px_rgba(20,20,20,.09)]`. Screenshot dimensions are reference-image coordinates, not guaranteed CSS pixels.

### B. Components and styling

Eyebrow three orange slashes (`///`) at 16–22px, dual-tone heading, 18px desktop paragraph, orange line details, original thematic media. Orange icon strokes 22–28px with 1.8–2px width; buttons height 56–62px; cards radius 12–20px; CTA radius 12px. Use lucide-react icons only as close approximations; use custom SVG if screenshot fidelity requires it. Avoid emoji icons.

### C. Motion, interactions and semantics

Six cards become 3x2 at tablet and one per row at 375px, avoid small text. No implication that every component is replaced as standard.

Use focus-visible orange outline 2px with offset 3px; hover is not the only feedback. Respect prefers-reduced-motion and touch interaction. Keep real links and buttons distinct.

### D. Assets, cropping and Core Web Vitals

Header piston/chain image top-right x≈840 y=0 w≈696 h=405; six isolated component photos in lower row.

Use source photography, not screenshot crops for production: text overlays, shadows and diagonal masks are baked into the screenshots. If temporary mockup slicing is needed, crop only for reference and flag as NON-PRODUCTION. For production `next/image` supply intrinsic width/height and `sizes`; hero `priority`/`fetchPriority="high"`, below-fold `loading="lazy"`, `decoding="async"`, WebP/AVIF quality ~82; avoid forcing AVIF on every asset without benchmark. Reserve aspect ratios to prevent CLS.

### E. Responsive behavior

Desktop >=1280px: retain screenshot composition. Tablet 768–1279px: 2-column where possible, wrap headings without clipping; model/pricing tables scroll with keyboard-accessible region or convert to cards. Mobile <=767px: single column, 20px side gutters, all copy readable at 16px, no decorative engine photo inside diagnostic cards if it compromises layout; hero photo may move below copy, nonessential angled mask removed; avoid horizontal overflow at 375px. Model and pricing data must remain fully visible via labeled cards.

### F. Content mapping

Exact public copy for this section is reproduced in the **Verbatim source appendix** below, taken from the supplied editorial PDF. Note: screenshot hero/callout line wraps, punctuation and labels may vary; the editorial PDF is authoritative for text, the mockup for appearance. Never silently rewrite technical statements.



## 9. Section 6 — Nine-Step Rebuild Process

**Approved reference:** `CDBD6C8C-62D6-4DAA-8468-D3FB020CC151(1).jpeg` (1024×1536px). Preserve reference aspect ratio 1024:1536.

### A. Layout and spacing

Dark image header 330px; nine cards in 3x3 grid below. At 1024x1536 reference cards ~312px wide, 16px gutters, 16px padding, 120px high images.

Implementation: `mx-auto max-w-[1360px] px-5 md:px-8 lg:px-10`; align sections with shared gutters, use `gap-4 lg:gap-6`; card padding `p-4 md:p-5 lg:p-6`; light borders `border border-black/10`, dark `border border-white/10`; shadows `shadow-[0_8px_22px_rgba(20,20,20,.09)]`. Screenshot dimensions are reference-image coordinates, not guaranteed CSS pixels.

### B. Components and styling

Eyebrow three orange slashes (`///`) at 16–22px, dual-tone heading, 18px desktop paragraph, orange line details, original thematic media. Orange icon strokes 22–28px with 1.8–2px width; buttons height 56–62px; cards radius 12–20px; CTA radius 12px. Use lucide-react icons only as close approximations; use custom SVG if screenshot fidelity requires it. Avoid emoji icons.

### C. Motion, interactions and semantics

Cards are informational, not false links. Scroll reveal only with reduced-motion fallback. Mobile 1-column, tablet 2 columns.

Use focus-visible orange outline 2px with offset 3px; hover is not the only feedback. Respect prefers-reduced-motion and touch interaction. Keep real links and buttons distinct.

### D. Assets, cropping and Core Web Vitals

Header engine image top right; 9 original workshop-stage photos. Avoid representing synthetic composites as verified workshop evidence.

Use source photography, not screenshot crops for production: text overlays, shadows and diagonal masks are baked into the screenshots. If temporary mockup slicing is needed, crop only for reference and flag as NON-PRODUCTION. For production `next/image` supply intrinsic width/height and `sizes`; hero `priority`/`fetchPriority="high"`, below-fold `loading="lazy"`, `decoding="async"`, WebP/AVIF quality ~82; avoid forcing AVIF on every asset without benchmark. Reserve aspect ratios to prevent CLS.

### E. Responsive behavior

Desktop >=1280px: retain screenshot composition. Tablet 768–1279px: 2-column where possible, wrap headings without clipping; model/pricing tables scroll with keyboard-accessible region or convert to cards. Mobile <=767px: single column, 20px side gutters, all copy readable at 16px, no decorative engine photo inside diagnostic cards if it compromises layout; hero photo may move below copy, nonessential angled mask removed; avoid horizontal overflow at 375px. Model and pricing data must remain fully visible via labeled cards.

### F. Content mapping

Exact public copy for this section is reproduced in the **Verbatim source appendix** below, taken from the supplied editorial PDF. Note: screenshot hero/callout line wraps, punctuation and labels may vary; the editorial PDF is authoritative for text, the mockup for appearance. Never silently rewrite technical statements.



## 10. Section 7 — Rebuild Value, Why Boby, Warranty

**Approved reference:** `31B01370-A3F8-4797-8408-530B73524B1D(1).jpeg` (1024×1536px). Preserve reference aspect ratio 1024:1536.

### A. Layout and spacing

Three stacked blocks: worthwhile light split, Why Boby dark split, warranty light. Images on right with slanted orange borders. Warranty three icon-led statements and central orange CTA.

Implementation: `mx-auto max-w-[1360px] px-5 md:px-8 lg:px-10`; align sections with shared gutters, use `gap-4 lg:gap-6`; card padding `p-4 md:p-5 lg:p-6`; light borders `border border-black/10`, dark `border border-white/10`; shadows `shadow-[0_8px_22px_rgba(20,20,20,.09)]`. Screenshot dimensions are reference-image coordinates, not guaranteed CSS pixels.

### B. Components and styling

Eyebrow three orange slashes (`///`) at 16–22px, dual-tone heading, 18px desktop paragraph, orange line details, original thematic media. Orange icon strokes 22–28px with 1.8–2px width; buttons height 56–62px; cards radius 12–20px; CTA radius 12px. Use lucide-react icons only as close approximations; use custom SVG if screenshot fidelity requires it. Avoid emoji icons.

### C. Motion, interactions and semantics

Warranty CTA goes to verified terms URL, not a dead # anchor. External links labeled. Do not make promises beyond approved terms.

Use focus-visible orange outline 2px with offset 3px; hover is not the only feedback. Respect prefers-reduced-motion and touch interaction. Keep real links and buttons distinct.

### D. Assets, cropping and Core Web Vitals

Engine close-up upper right; technician/workshop image middle right; faded grille decorative lower right.

Use source photography, not screenshot crops for production: text overlays, shadows and diagonal masks are baked into the screenshots. If temporary mockup slicing is needed, crop only for reference and flag as NON-PRODUCTION. For production `next/image` supply intrinsic width/height and `sizes`; hero `priority`/`fetchPriority="high"`, below-fold `loading="lazy"`, `decoding="async"`, WebP/AVIF quality ~82; avoid forcing AVIF on every asset without benchmark. Reserve aspect ratios to prevent CLS.

### E. Responsive behavior

Desktop >=1280px: retain screenshot composition. Tablet 768–1279px: 2-column where possible, wrap headings without clipping; model/pricing tables scroll with keyboard-accessible region or convert to cards. Mobile <=767px: single column, 20px side gutters, all copy readable at 16px, no decorative engine photo inside diagnostic cards if it compromises layout; hero photo may move below copy, nonessential angled mask removed; avoid horizontal overflow at 375px. Model and pricing data must remain fully visible via labeled cards.

### F. Content mapping

Exact public copy for this section is reproduced in the **Verbatim source appendix** below, taken from the supplied editorial PDF. Note: screenshot hero/callout line wraps, punctuation and labels may vary; the editorial PDF is authoritative for text, the mockup for appearance. Never silently rewrite technical statements.



## 11. Section 8 — FAQs, Quote Form, Workshop

**Approved reference:** `99766F62-3B62-41FA-94BE-CF7889C17902(1).jpeg` (1024×1536px). Preserve reference aspect ratio 1024:1536.

### A. Layout and spacing

FAQs warm light; five accordion rows. Below: dark quote section with workshop photo lower left and white form right; bottom address strip.

Implementation: `mx-auto max-w-[1360px] px-5 md:px-8 lg:px-10`; align sections with shared gutters, use `gap-4 lg:gap-6`; card padding `p-4 md:p-5 lg:p-6`; light borders `border border-black/10`, dark `border border-white/10`; shadows `shadow-[0_8px_22px_rgba(20,20,20,.09)]`. Screenshot dimensions are reference-image coordinates, not guaranteed CSS pixels.

### B. Components and styling

Eyebrow three orange slashes (`///`) at 16–22px, dual-tone heading, 18px desktop paragraph, orange line details, original thematic media. Orange icon strokes 22–28px with 1.8–2px width; buttons height 56–62px; cards radius 12–20px; CTA radius 12px. Use lucide-react icons only as close approximations; use custom SVG if screenshot fidelity requires it. Avoid emoji icons.

### C. Motion, interactions and semantics

FAQs accessible button with aria-expanded; choose single or multiple expansion consistently. Form fields: registration required, mileage, symptoms required, VIN/engine code optional, preferred contact method required; add location and whether vehicle runs to fulfil source copy. Validate server-side and anti-spam.

Use focus-visible orange outline 2px with offset 3px; hover is not the only feedback. Respect prefers-reduced-motion and touch interaction. Keep real links and buttons distinct.

### D. Assets, cropping and Core Web Vitals

FAQ grille banner upper right; workshop exterior bottom left. Keep photo original/verified before launch.

Use source photography, not screenshot crops for production: text overlays, shadows and diagonal masks are baked into the screenshots. If temporary mockup slicing is needed, crop only for reference and flag as NON-PRODUCTION. For production `next/image` supply intrinsic width/height and `sizes`; hero `priority`/`fetchPriority="high"`, below-fold `loading="lazy"`, `decoding="async"`, WebP/AVIF quality ~82; avoid forcing AVIF on every asset without benchmark. Reserve aspect ratios to prevent CLS.

### E. Responsive behavior

Desktop >=1280px: retain screenshot composition. Tablet 768–1279px: 2-column where possible, wrap headings without clipping; model/pricing tables scroll with keyboard-accessible region or convert to cards. Mobile <=767px: single column, 20px side gutters, all copy readable at 16px, no decorative engine photo inside diagnostic cards if it compromises layout; hero photo may move below copy, nonessential angled mask removed; avoid horizontal overflow at 375px. Model and pricing data must remain fully visible via labeled cards.

### F. Content mapping

Exact public copy for this section is reproduced in the **Verbatim source appendix** below, taken from the supplied editorial PDF. Note: screenshot hero/callout line wraps, punctuation and labels may vary; the editorial PDF is authoritative for text, the mockup for appearance. Never silently rewrite technical statements.



## 12. Visual asset inventory and reference crops

| Section | Image subject | Reference crop [x,y,w,h] | Target ratio / position |
|---|---|---|---|

| 1 | OM651 engine and workshop | `[755, 80, 781, 705]` | ~1.11 / center |

| 2 | Mercedes model coverage header | `[835, 0, 701, 345]` | ~2.03 / center |

| 3 | Mercedes grille header | `[680, 0, 519, 260]` | ~2 / center |

| 4 | timing chain | `[670, 222, 318, 190]` | ~1.67 / center |

| 4 | crankshaft | `[670, 462, 318, 170]` | ~1.87 / center |

| 4 | cylinder block | `[670, 679, 318, 170]` | ~1.87 / center |

| 4 | injector | `[670, 889, 318, 164]` | ~1.94 / center |

| 4 | turbo | `[670, 1084, 318, 165]` | ~1.93 / center |

| 4 | warning light | `[690, 1300, 298, 150]` | ~1.99 / center |

| 5 | components header | `[836, 0, 700, 415]` | ~1.69 / center |

| 6 | process engine header | `[530, 0, 494, 340]` | ~1.45 / center |

| 7 | engine and technician split images | `[520, 0, 504, 980]` | variable / center |

| 8 | workshop exterior | `[0, 1110, 500, 360]` | ~1.39 / center |

Crop coordinates are approximate locations **inside the provided composite mockups**, NOT original photography. Text/overlay interference makes them unsuitable for final source assets. Additional small thumbnails: 11 model cars in section 2; six component illustrations in section 5; nine workshop process images in section 6; three lower warranty icons in section 7; FAQ grille and workshop sign in section 8. Every unique image must have its own rights-cleared source and descriptive alt or empty alt when purely decorative.

## 13. Verbatim source appendix — editorial PDF public page content

This appendix reproduces the supplied public-page copy (PDF pages 1–7) using PDF text extraction, including the full model and pricing tables and all nine process steps. Line wrapping is normalized only by the browser. Do not publish the PDF implementation appendix (pages 8–10) as public page content.

### Source PDF page 1

```text
 Meta title: Mercedes OM651 Engine Rebuild From £4,000 | Boby Engine Work
 Meta description: Mercedes OM651 2.1 diesel engine rebuilds from £4,000. Timing-chain noise,
 knocking and engine damage assessed by Boby. Explore parts, fitting and warranty.
 Proposed page URL / canonical: https://bobyenginework.co.uk/engines/mercedes-om651/
H1: Mercedes OM651 Engine Rebuild &
 Repair
 Timing-chain noise, knocking or engine damage? Boby Engine Work assesses and rebuilds
 Mercedes OM651 diesel engines, with the repair based on what inspection finds. Our service is
 rebuilding your engine, with removal and refitting, rather than selling an engine unit.
 OM651 2.1 diesel rebuilds from £4,000 - for the relevant vehicle and a serviceable engine
 core; final scope confirmed after assessment.
 10+ years' experience | 1,000+ clients across the business | 12-month rebuild
 warranty, subject to terms
 Request an OM651 assessment
 open. Keep the image beside the short hero; do not add a long introduction over it.
 H2: Which Mercedes models have the OM651 engine?
 The OM651 is a four-cylinder common-rail diesel family. The 2,143 cc version is commonly
 described as 2.1 or 2.2 litres. Some compact-car applications use a smaller 1.8-litre OM651, so the
 engine code alone does not establish the capacity or repair scope.
 We cover the relevant OM651 installations in the model groups below. These are application
 routes, not a claim that every diesel in each generation has this engine. Badges, build dates and
 specifications change, including transitions to the separate OM654 family.
  Model group                Generation to identify      What we confirm before quoting
   A-Class and B-Class          W176 and W246            OM651 capacity and exact version; some cars
                                                          have a different diesel engine
   CLA and GLA                 C117/X117 and X156            Correct OM651 derivative, installation and build
                                                               date
   C-Class                      W205/S205/C205/A205         OM651-equipped version, not a later OM654 or
                                                               another engine
   E-Class                      W212/S212/C207/A207          Actual four-cylinder diesel specification and body
                                                                          style
```

### Source PDF page 2

```text
  Model group                Generation to identify      What we confirm before quoting
   CLS                        C218/X218                OM651 diesel application and the relevant
                                                                             installation
  GLC                        X253/C253                  OM651-equipped diesel, drivetrain and build date
  ML and GLE               W166                    OM651 four-cylinder diesel; this does not include
                                                               every GLE or the C292 coupé
   SLK and SLC                R172                            Diesel version and engine identity, not a petrol
                                                                   roadster
   V-Class and Vito            W447                    OM651 version; smaller or later diesel engines
                                                         need a different assessment
   Sprinter                  W906                        Engine code, vehicle specification and access
                                                               requirements
  GLK / imported vehicles        X204 or other individually       Import specification and exact installation,
                                       identified vehicle              quoted individually
 The main coverage here concerns generations still produced in 2015 or later. Earlier cars and
 applications outside these groups can be discussed individually. Send the registration and, if
 available, the VIN or engine number. A registration lookup helps identify the vehicle; it does not
 guarantee which engine is now installed.
 H2: How much does a Mercedes OM651 engine rebuild cost?
 The rebuild starting guide is £4,000 for the supported OM651 2.1 diesel applications. It
  is a guide for rebuilding an engine with recoverable major components, rather than a fixed price
 for every OM651 failure.
  Work required               Price route              What determines the written quote
  OM651 2.1 full rebuild in the    From £4,000                    Vehicle installation, damage, serviceable
   supported applications above                                     block/crankshaft and the agreed parts/machining
                                                            scope
  OM651 1.8, imported or other   Quoted after assessment        Exact derivative, vehicle and recoverability
   unlisted installation
   Timing-chain/tensioner repair   Quoted separately             Confirmed wear, access and the components
   before internal damage                                            actually required
   Injector sealing, coolant leak    Quoted separately              Diagnosis and whether internal engine damage
   or other contained repair                                            exists
   Major block, crankshaft or        Additional work quoted          Inspection results and available repair options
   cylinder-head replacement      before authorisation
 The rebuild guide includes standard engine removal/refitting and standard fluids/consumables.
 The written quotation identifies the parts and machining. Turbochargers, injectors and other
 ancillaries are separate unless itemised; collection is separately quoted. If strip-down exposes
 significant additional damage, we explain the revised work before proceeding.
```

### Source PDF page 3

```text
 H3: Is £4,000 the average OM651 rebuild price?
  It is our starting guide for the relevant rebuild, not a measured national average. A usable core
 and a severely damaged engine are different jobs. We explain the condition and scope behind
 your quotation so you can decide whether repairing the vehicle is worthwhile.
 H3: How much does OM651 timing-chain repair cost?
 Timing-chain work is assessed as its own repair. A confirmed tensioner issue, worn chain and a
 failed timing drive with valve damage do not have the same scope. We quote after identifying the
 vehicle and damage; the full-rebuild guide should not be read as a chain-only repair price.
 H2: OM651 engine failure symptoms and problems we
 investigate
 A noise, warning light or fault code is a reason to investigate. It is not proof that the whole engine
 needs rebuilding. The following sections distinguish documented timing/cooling concerns from
 other symptoms that need mechanical diagnosis.
 H3: OM651 timing-chain rattle, wear and loss of timing
 A rattle around the timing drive, particularly at start-up, warrants assessment. The OM651 timing
 drive is at the gearbox end, so access and the condition of associated components matter.
 Mercedes workshop guidance documents a chain/tensioner assessment route on specified OM651
 van applications; the appropriate procedure must match the vehicle.
 We establish where the noise originates and assess timing condition rather than assuming every
 rattle needs a full rebuild. If timing has been lost, the inspection extends to possible valve, piston
 and cylinder-head damage. Stop using a car with a serious mechanical noise or suspected timing
 failure and arrange assessment.
 inspected components clearly; caption damage only when the job record supports it.
 H3: OM651 knocking, low oil pressure and bearing damage
 Deep knocking or an oil-pressure warning needs urgent attention. Oil supply, contamination and
 internal bearing condition may need checking, but a noise alone cannot identify the failed
 component. We also distinguish combustion-related noise from mechanical damage.
 Where internal wear is confirmed, inspection considers the crankshaft journals, bearings, oil
 supply and recoverability of the main structure. Replacing bearings without understanding the
 cause can leave the underlying problem unresolved. A badly damaged crankshaft or block
 changes the repair options and price.
 H3: OM651 coolant loss, overheating and head-gasket concerns
 Coolant loss does not automatically mean head-gasket failure. Mercedes has documented an
 OM651 coolant-leak repair at the EGR bypass-flap seal. Cooling-system checks should establish
 the leak source before an engine rebuild is recommended.
  If the engine has overheated, the assessment also considers sealing, compression and
 cylinder-head condition. An external leak caught early may be a contained repair; overheating
 with internal damage can require strip-down. Tell us whether the temperature warning appeared
 and how long the engine continued running.
 H3: OM651 injector faults, injector-seal leakage and rough running
 Difficult starting, rough running and combustion leakage around an injector need different checks.
 An injector sealing problem is not the same as an electrically or mechanically faulty injector, and
 neither should be diagnosed from a rebuild price list.
```

### Source PDF page 4

```text
 We assess the symptom, relevant fuel-system evidence and cylinder condition. A sealing or
 fuelling repair may be sufficient when the engine is mechanically sound. Injectors are not
 automatically replaced or included in every engine rebuild; any separate work is itemised.
 H3: OM651 smoke, oil consumption and turbo-related symptoms
 Smoke or rising oil use can involve external leaks, ventilation, turbocharger sealing or internal
 cylinder wear. The repair decision depends on finding the source and checking the condition of the
 connected systems.
 Where testing points to internal wear, piston, ring and bore condition help determine the rebuild
 scope. A turbocharger-related fault is assessed separately; rebuilding the engine does not
 automatically renew the turbocharger. Avoid repeated running if oil loss or mechanical damage is
 suspected.
 H3: OM651 loss of power, EGR/DPF faults and limp mode
 Limp mode can arise from air, boost, exhaust-treatment or fuel-system faults without requiring an
 internal rebuild. We use the symptoms and diagnostic findings to decide which system needs
 attention.
 Where an engine is being rebuilt, connected faults still need addressing so the original problem is
 not left behind. EGR and DPF work is separately specified. A warning message alone is not a
 reason to replace an otherwise serviceable engine.
 H2: Which parts are changed during an OM651 engine rebuild?
 The replacement list follows inspection and the agreed quotation. A rebuild is more than fitting a
 chain or repainting the engine, but it does not mean every component must be replaced
 regardless of condition.
  Component group          How it is treated in the rebuild scope
   Gaskets, crankshaft seals and     Renewal is specified where required for dismantling, sealing and the agreed
   valve-stem seals                  overhaul
   Timing chain, tensioner, guides    Assessed as a system; replacement scope matched to wear, damage and the
   and sprockets                    engine variant
   Main/big-end bearings and         Condition, journal/bore measurements and the overhaul specification determine
   piston rings                      the correct work
    Oil pump and lubrication           Inspected for damage, contamination and the original failure cause; pump
   passages                       replacement stated in the quote
   Cylinder head, valves and         Inspected for sealing, wear and timing/overheating damage; machining or
   associated components           replacement where needed
   Pistons, connecting rods,          Reused, repaired or replaced only where technically appropriate; major
   crankshaft and block             replacement is separately agreed
   Turbocharger, injectors,           Assessed where relevant; not automatically renewed within the engine rebuild
   EGR/DPF and other ancillaries      price
 We select OEM or appropriate OE-quality components for the actual engine specification. Parts
 suitability, clearances and assembly matter more than a generic shopping list. The written
 quotation is the record of what your rebuild includes.
```

### Source PDF page 5

```text
 H2: Our Mercedes OM651 engine rebuild process
 workshop photo is acceptable with an honest caption; it must not be presented as this exact OM651 job unless
 documented.
 H3: 1. Recovery or booked arrival
 We record the vehicle, symptoms, mileage and whether the engine runs. If it should not be driven,
 collection arrangements and charges are discussed before booking. Send any existing diagnosis
 and explain what happened immediately before the failure.
 H3: 2. Diagnosis and engine identification
 We confirm the engine version and choose checks suited to the symptoms. Fault-code information
 may be combined with mechanical inspection, timing checks, oil/coolant examination or
 cylinder-condition testing as appropriate. The aim is to establish whether the fault is contained or
 internal.
 H3: 3. Engine removal and installation checks
 When the agreed scope requires removal, the vehicle's layout, drivetrain and connected
 components are considered. This matters across compact cars, longitudinal installations and vans.
 An engine-family code does not make the removal/refitting job identical in every model.
 H3: 4. Strip-down, cleaning and damage inspection
 The engine is dismantled sufficiently to establish the rebuild scope. Components are cleaned and
 examined for wear, damage and contamination. Timing-related damage is considered alongside
 the condition of valves, pistons and the head; oil-related damage calls for attention to the
 lubrication route.
 H3: 5. Measurement and machining decisions
 Bores, crankshaft journals and relevant head components are measured against the applicable
 repair requirements. Machining is specified where justified and technically suitable. We explain if
 damage makes a standard rebuild impractical or requires a significant change to the quotation.
 H3: 6. Correct components and controlled assembly
 The engine is assembled with the agreed parts and the correct specification for its derivative.
 Timing setup, lubrication, sealing and the condition of reusable components receive attention. We
 address the identified failure cause rather than treating a new set of parts as a diagnosis.
 H3: 7. Refitting and controlled first start
 After refitting, fluids, connections and the agreed ancillary work are checked. The initial running
 checks are matched to the repair, including relevant lubrication, temperature, leak and diagnostic
 observations. Any required coding or adaptation follows the vehicle's actual requirements.
 H3: 8. Running checks and road test
 Where the vehicle is roadworthy, running and road-test checks assess its operation after the work.
 Unresolved symptoms are investigated before handover. The test scope depends on the repair
 and vehicle; a dyno power test is not assumed to be part of every rebuild.
 H3: 9. Collection, handover and running-in service
 We explain the completed work, maintenance instructions and warranty conditions. The required
 chargeable running-in service is arranged in line with the terms. Tell us promptly if a concern
 appears after collection, rather than continuing to drive through a serious warning.
```

### Source PDF page 6

```text
 H2: Is rebuilding an OM651 engine worthwhile?
 A rebuild can be a sensible route when the original engine's main structure is recoverable and the
 rest of the vehicle supports the investment. You retain the known installation while the internal
 condition and agreed repairs can be assessed directly.
 The decision changes with a damaged block or crankshaft, extensive ancillary failure or other
 major vehicle repairs. A smaller timing, cooling or injector-seal repair may be enough if the
 internals remain sound. We discuss those options before treating a whole-engine rebuild as
 compulsory.
 For replacement-engine enquiries, our role remains assessment and workshop repair. Tell us what
 happened to your original engine first; this page is not a supply-only engine catalogue.
 H2: Why choose Boby for an OM651 engine rebuild?
 Boby is the mechanic behind Boby Engine Work. The business brings more than ten years'
 experience and over 1,000 clients across its work on German and premium British cars.
 For an OM651 owner, the useful difference is a repair tied to the actual engine: identify the
 derivative, investigate the cause, examine the damage and agree the parts and machining. We
 explain what can be retained, what needs replacing and what lies outside the engine rebuild,
 rather than promising a universal fix for every diesel symptom.
 genuine OM651 job where available; otherwise identify the photograph as general workshop work.
 H2: OM651 rebuild warranty, fitting and collection
 Covered rebuild components and associated workmanship have a 12-month unlimited-mileage
 warranty, subject to the full conditions. Turbochargers, injectors and other excluded ancillaries
 are not covered simply because the engine has been rebuilt.
 A chargeable running-in service at 2,000 miles, within the stated 200-mile tolerance,
 must be completed at Boby's workshop. The published terms state that missing it voids the
 warranty. Read the conditions before booking; your statutory rights are unaffected. If the vehicle is
 used for hire, discuss that use before agreeing the work.
 Read the warranty and full terms. Optional collection and delivery are quoted separately.
 H2: Mercedes OM651 engine rebuild FAQs
 H3: Is the OM651 a 2.1 or 2.2-litre diesel?
 The common 2,143 cc version is described both ways. There are also smaller 1.8-litre OM651
 applications, so we confirm the fitted derivative before applying a rebuild guide. The separate
 OM654 family should not be identified by a similar diesel badge alone.
 H3: Can an OM651 timing-chain problem be repaired without a full rebuild?
 Yes, a contained timing-drive problem may be repairable if there is no internal damage. Access,
 wear and the components involved determine the work. Suspected lost timing requires an
 assessment for additional damage before we can recommend the limited repair route.
 H3: Are new injectors and a turbocharger included in the rebuild?
 Not automatically. Those are ancillary components with their own condition and repair decisions. If
 testing shows that either needs attention, the additional work and cost are listed in the quotation
 rather than hidden in a generic rebuild promise.
```

### Source PDF page 7

```text
 H3: Do you rebuild OM651 engines in vans as well as cars?
 We assess relevant Sprinter W906, Vito W447 and V-Class W447 installations as well as passenger
 cars. Provide the engine details and how the vehicle is used. Different van versions can have
 different engines, installation requirements and warranty considerations.
 H3: How long does an OM651 rebuild take?
 We give an estimated schedule after assessing the vehicle and likely scope. Strip-down findings,
 machining and the supply of correct parts affect completion. A fixed turnaround promised before
 the damage is known would not reflect every rebuild.
 H2: Book your Mercedes OM651 engine assessment
 Send your registration, mileage, symptoms, location and whether the vehicle runs,
 together with any existing inspection report. Add the VIN or engine code if available and tell us
 how you prefer to be contacted.
 Workshop: Unit D1, Windsor Road, Ramsden Heath, Billericay CM11 1QE.
 Email Boby about your OM651
 verified working form in the live design.
```

## 14. Content implementation: typed data extraction

Use the source appendix for all paragraph copy. The following exact tables and data provide typed values for the two primary matrices and process headings. Verify any differences against source PDF before release.

```ts
export const modelCoverage = [
  {
    "modelGroup": "A-Class and B-Class",
    "generation": "W176 and W246",
    "confirmation": "OM651 capacity and exact version; some cars have a different diesel engine"
  },
  {
    "modelGroup": "CLA and GLA",
    "generation": "C117/X117 and X156",
    "confirmation": "Correct OM651 derivative, installation and build date"
  },
  {
    "modelGroup": "C-Class",
    "generation": "W205/S205/C205/A205",
    "confirmation": "OM651-equipped version, not a later OM654 or another engine"
  },
  {
    "modelGroup": "E-Class",
    "generation": "W212/S212/C207/A207",
    "confirmation": "Actual four-cylinder diesel specification and body style"
  },
  {
    "modelGroup": "CLS",
    "generation": "C218/X218",
    "confirmation": "OM651 diesel application and the relevant installation"
  },
  {
    "modelGroup": "GLC",
    "generation": "X253/C253",
    "confirmation": "OM651-equipped diesel, drivetrain and build date"
  },
  {
    "modelGroup": "ML and GLE",
    "generation": "W166",
    "confirmation": "OM651 four-cylinder diesel; this does not include every GLE or the C292 coupé"
  },
  {
    "modelGroup": "SLK and SLC",
    "generation": "R172",
    "confirmation": "Diesel version and engine identity, not a petrol roadster"
  },
  {
    "modelGroup": "V-Class and Vito",
    "generation": "W447",
    "confirmation": "OM651 version; smaller or later diesel engines need a different assessment"
  },
  {
    "modelGroup": "Sprinter",
    "generation": "W906",
    "confirmation": "Engine code, vehicle specification and access requirements"
  },
  {
    "modelGroup": "GLK / imported vehicles",
    "generation": "X204 or other individually identified vehicle",
    "confirmation": "Import specification and exact installation, quoted individually"
  }
] as const;
export const pricingRows = [
  {
    "workRequired": "OM651 2.1 full rebuild in the supported applications above",
    "priceRoute": "From £4,000",
    "quoteBasis": "Vehicle installation, damage, serviceable block/crankshaft and the agreed parts/machining scope"
  },
  {
    "workRequired": "OM651 1.8, imported or other unlisted installation",
    "priceRoute": "Quoted after assessment",
    "quoteBasis": "Exact derivative, vehicle and recoverability"
  },
  {
    "workRequired": "Timing-chain/tensioner repair before internal damage",
    "priceRoute": "Quoted separately",
    "quoteBasis": "Confirmed wear, access and the components actually required"
  },
  {
    "workRequired": "Injector sealing, coolant leak or other contained repair",
    "priceRoute": "Quoted separately",
    "quoteBasis": "Diagnosis and whether internal engine damage exists"
  },
  {
    "workRequired": "Major block, crankshaft or cylinder-head replacement",
    "priceRoute": "Additional work quoted before authorisation",
    "quoteBasis": "Inspection results and available repair options"
  }
] as const;
export const processHeadings = [
  "Recovery or booked arrival",
  "Diagnosis and engine identification",
  "Engine removal and installation checks",
  "Strip-down, cleaning and damage inspection",
  "Measurement and machining decisions",
  "Correct components and controlled assembly",
  "Refitting and controlled first start",
  "Running checks and road test",
  "Collection, handover and running-in service"
] as const;
```

## 15. Metadata, schema, QA and build instructions

Metadata: title `Mercedes OM651 Engine Rebuild From £4,000 | Boby Engine Work`; description `Mercedes OM651 2.1 diesel engine rebuilds from £4,000. Timing-chain noise, knocking and engine damage assessed by Boby. Explore parts, fitting and warranty.`; canonical `https://bobyenginework.co.uk/engines/mercedes-om651/` (confirm before deployment). `lang="en-GB"`. Use sitewide shared LocalBusiness entity; page WebPage + Service + BreadcrumbList as in source PDF page 10. Do not add AggregateRating, FAQ rich result expectation, fictitious Offer or image URL.

Implementation sequence: 1) audit repo and lock existing routing; 2) add tokens and font; 3) implement 8 server-rendered sections; 4) add typed data; 5) wire quote dialog to validated endpoint; 6) integrate verified assets; 7) add metadata/schema; 8) run Playwright screenshots at 1536x785 hero, 1440, 1024, 768, 390 and 375; 9) run axe accessibility, keyboard tab/Escape, reduced motion and Core Web Vitals; 10) QA technical copy against source PDF; 11) verify legal/warranty/quote links; 12) deploy after human approval.

Acceptance: no horizontal scroll at 375px; single H1; full copy and all rows visible; links not `#`; quote submit works; correct Mercedes engine identity; no BMW references; no artificial business claims; LCP image prioritized; no unlicensed mockup slices; keyboard operable menus/dialog/FAQ; page passes responsive screenshot review. Preserve original approved section order.
