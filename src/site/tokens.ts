/**
 * One place for the values every section on the page shares.
 *
 * The page previously had its colours written inline in fifteen components,
 * which is why a "brand blue" existed in four slightly different hexes. A
 * gradient in particular has to be identical everywhere it appears — the
 * announcement bar, the headline highlight, the marquee and the CTA all use
 * the same one, and an eye catches a two-degree difference in angle long before
 * it can name what is wrong.
 */

/** Teal → blue → violet. The one gradient on the site. */
export const BRAND_GRADIENT = "linear-gradient(90deg, #14B8A6 0%, #2563EB 52%, #6D28D9 100%)";

/** The same ramp at 135°, for surfaces rather than text. */
export const BRAND_GRADIENT_DIAGONAL =
  "linear-gradient(135deg, #14B8A6 0%, #2563EB 52%, #6D28D9 100%)";

export const COLORS = {
  ink: "#0B1220",
  inkSoft: "#1E293B",
  body: "#475569",
  muted: "#94A3B8",
  hairline: "#E2E8F0",
  page: "#FFFFFF",
  /** The pale band that separates alternating sections. */
  wash: "#E8ECF5",
  teal: "#14B8A6",
  blue: "#2563EB",
  violet: "#6D28D9",
} as const;

/**
 * Section rhythm.
 *
 * A single vertical scale, because sections authored independently drifted to
 * six different paddings and the page read as a stack of unrelated pages.
 */
export const SECTION_Y = "py-[clamp(4.5rem,9vw,8.5rem)]";
export const CONTAINER = "mx-auto w-full max-w-[1540px] px-6 sm:px-10 lg:px-16";

/**
 * The eyebrow above every section heading.
 *
 * Small, wide-tracked, uppercase. It does the work a second heading would
 * otherwise do, and it keeps the headings themselves short enough to read as
 * one line at desktop width.
 */
export const EYEBROW =
  "text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400";

/** Reduced-motion is honoured everywhere; this is the one query to ask. */
export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
