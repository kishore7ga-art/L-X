"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface Speaker {
  name: string;
  role: string;
  /** Image URL. Square / portrait crops look best. */
  src: string;
}

export interface ScrollPortraitWallProps {
  /** Big sticky title rendered with `mix-blend-exclusion`. */
  title?: React.ReactNode;
  /** Small line under the title. */
  date?: React.ReactNode;
  /** Scroll hint that fades out as the wall comes into view. */
  hint?: React.ReactNode;
  /** People to scatter across the wall. Defaults to a built-in demo set. */
  speakers?: Speaker[];
  /** Columns on large screens (auto-reduced to 3 on `sm` and 2 on mobile). */
  columns?: number;
  /** Show the name / role caption under each portrait. Default `true`. */
  showCaptions?: boolean;
  className?: string;
}

/* Deterministic placement so SSR and client agree (no Math.random):
 * one portrait per row, with every third row holding a second one,
 * columns walked in a scattered pattern. Returns a grid of speaker
 * indices (or -1 for an empty cell). */
function buildLayout(count: number, cols: number): number[][] {
  const rows: number[][] = [];
  let i = 0;
  let r = 0;
  while (i < count) {
    const row = new Array<number>(cols).fill(-1);
    const a = (r * 2 + (r % 2)) % cols;
    row[a] = i++;
    if (r % 3 === 0 && i < count) {
      let b = (a + 2) % cols;
      if (b === a) b = (a + 1) % cols;
      row[b] = i++;
    }
    rows.push(row);
    r++;
  }
  return rows;
}

/* Keep portraits a usable size: cap the desired column count on smaller
 * viewports. Starts from `desired` so the SSR markup matches the first
 * client render, then narrows after mount. */
function useResponsiveColumns(desired: number): number {
  const [cols, setCols] = React.useState(desired);

  React.useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      if (lg.matches) setCols(desired);
      else if (sm.matches) setCols(Math.min(desired, 3));
      else setCols(Math.min(desired, 2));
    };
    update();
    sm.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      sm.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, [desired]);

  return cols;
}

const DEMO_SPEAKERS: Speaker[] = [
  { name: "Alex Johnson", role: "CEO & Founder" },
  { name: "Sarah Chen", role: "CTO" },
  { name: "Marcus Rivera", role: "Lead Designer" },
  { name: "Emily Watson", role: "Product Manager" },
  { name: "David Kim", role: "Senior Developer" },
  { name: "Lisa Thompson", role: "Marketing Director" },
  { name: "James Wilson", role: "UX Researcher" },
  { name: "Rachel Green", role: "Data Scientist" },
  { name: "Michael Brown", role: "DevOps Engineer" },
  { name: "Anna Davis", role: "Content Strategist" },
].map((s, i) => ({
  ...s,
  // High quality portrait stock images from Unsplash
  src: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
  ][i % 10],
}));

export function ScrollPortraitWall({
  title = "Speakers",
  date = "Oct 22, 2025",
  hint = "scroll down to see effect",
  speakers = DEMO_SPEAKERS,
  columns = 4,
  showCaptions = true,
  className,
}: ScrollPortraitWallProps) {
  const root = React.useRef<HTMLElement | null>(null);
  const hintRef = React.useRef<HTMLDivElement | null>(null);
  const titleRef = React.useRef<HTMLDivElement | null>(null);
  const cols = useResponsiveColumns(Math.max(1, columns));
  const layout = React.useMemo(
    () => buildLayout(speakers.length, cols),
    [speakers.length, cols],
  );

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const items = gsap.utils.toArray<HTMLElement>(".spw-item");

      if (reduce) {
        gsap.set(items, { scale: 1 });
        return;
      }

      // Title smooth scale entrance with solid opacity
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { scale: 0.8 },
          {
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: root.current,
              start: "top 80%",
              end: "top 30%",
              scrub: 0.5,
            },
          },
        );
      }

      // Hint fades away over the first stretch of scrolling.
      if (hintRef.current) {
        gsap.to(hintRef.current, {
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=40%",
            scrub: true,
          },
        });
      }

      // Each portrait scrubs scale 0 → 1 → 0 across its full pass through the viewport
      items.forEach((el) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          })
          .fromTo(
            el,
            { scale: 0 },
            { scale: 1, ease: "power2.out", duration: 0.5 },
          )
          .to(el, { scale: 0, ease: "power2.in", duration: 0.5 });
      });
    },
    { scope: root, dependencies: [cols], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      aria-label={typeof title === "string" ? title : undefined}
      className={cn("relative w-full bg-transparent text-slate-900 dark:text-white pb-[25vh]", className)}
    >
      {/* Scroll hint (compact, no dead space) */}
      {hint && (
        <div
          ref={hintRef}
          className="pointer-events-none absolute left-1/2 top-4 grid -translate-x-1/2 content-start justify-items-center gap-2 text-center z-20"
        >
          <span className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-400 font-medium">
            {hint}
          </span>
        </div>
      )}

      {/* Sticky centred title — High-contrast mix-blend-difference (Pure black on white, pure white on dark photos) */}
      {title && (
        <div className="sticky top-1/2 z-20 -translate-y-1/2 pointer-events-none w-full flex flex-col items-center justify-center text-center px-4">
          <div
            ref={titleRef}
            className="text-white mix-blend-difference text-center w-full flex flex-col items-center justify-center will-change-transform"
          >
            <h2 className="text-balance text-[clamp(2.5rem,7.5vw,7.5rem)] font-black tracking-[-0.04em] leading-[1.05] max-w-[95vw] whitespace-nowrap">
              {title}
            </h2>
            {date && (
              <p className="mt-2 text-xs uppercase tracking-widest text-white/80 sm:text-sm font-semibold">
                {date}
              </p>
            )}
          </div>
        </div>
      )}

      {/* The scattered portrait grid */}
      <div className="relative z-0 -mt-[15vh] pb-[10vh]">
        {layout.map((row, ri) => (
          <div key={ri} className="flex w-full">
            {row.map((idx, ci) => {
              if (idx === -1)
                return <div key={ci} className="aspect-square flex-1" />;

              const s = speakers[idx];
              const origin = ci < cols / 2 ? "right bottom" : "left bottom";

              return (
                <div key={ci} className="aspect-square flex-1">
                  <div
                    className="spw-item relative h-full w-full"
                    style={{ transformOrigin: origin, transform: "scale(0)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.src}
                      alt={s.name}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-full w-full object-cover grayscale contrast-[1.15] filter transition-transform duration-500 ease-in-out hover:scale-95"
                    />
                    {showCaptions && (
                      <div className="absolute -bottom-2 left-0 flex w-full translate-y-full justify-between gap-2 text-[11px] uppercase leading-tight text-slate-600 dark:text-slate-300 sm:text-sm px-1">
                        <span className="truncate">{s.name}</span>
                        <span className="shrink-0 text-slate-400 dark:text-slate-400">({s.role})</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScrollPortraitWall;

