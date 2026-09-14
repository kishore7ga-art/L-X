"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Gauge, MousePointerClick, ShieldCheck } from "lucide-react";
import gsap from "gsap";

import {
  BRAND_GRADIENT,
  CONTAINER,
  EYEBROW,
  REDUCED_MOTION,
  SECTION_Y,
} from "./tokens";
import { SIGN_UP_URL } from "@/env";

/**
 * The three short sections that punctuate the page.
 *
 * Grouped in one file because each is under forty lines and they are only ever
 * changed together — they are the page's rhythm rather than its content, and
 * three files of thirty lines cost more to follow than one of ninety.
 */

/* ── Why it stands out ──────────────────────────────────────────────────── */

import { Layers, SlidersHorizontal, Zap } from "lucide-react";

const PILLARS = [
  {
    icon: SlidersHorizontal,
    title: "Visual Page Builder",
  },
  {
    icon: Layers,
    title: "One Plan. All Features",
  },
  {
    icon: Zap,
    title: "High Speed Performance",
  },
] as const;

export function Pillars() {
  return (
    <section className="border-t border-slate-200 bg-white py-10 sm:py-12">
      <div className={CONTAINER}>
        <p className={`${EYEBROW} mb-6`}>WHY FINDFRIDAY STAND OUT OF THE CROWD</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {PILLARS.map(({ icon: Icon, title }) => (
            <div key={title} className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-sm">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="text-[1.15rem] sm:text-[1.25rem] font-extrabold tracking-[-0.02em] text-slate-900">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── The moving band ───────────────────────────────────────────────────── */

/**
 * A single line of text, scrolling.
 */
export function Marquee() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = track.current;
    if (!node) return;
    if (window.matchMedia(REDUCED_MOTION).matches) return;

    const tween = gsap.to(node, {
      xPercent: -50,
      duration: 22,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  const line = "Bring you that Friday feeling";

  return (
    <div className="relative z-20 overflow-hidden py-5 shadow-sm" style={{ background: BRAND_GRADIENT }}>
      <div ref={track} className="flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="flex items-center whitespace-nowrap px-6 text-[1.3rem] font-bold tracking-[-0.01em] text-white"
              >
                <span>{line}</span>
                <span className="ml-12 inline-block h-2 w-2 rounded-full bg-white/90" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── The closing ask ───────────────────────────────────────────────────── */

export function FinalCta() {
  return (
    <section className={`relative overflow-hidden ${SECTION_Y}`} style={{ background: BRAND_GRADIENT }}>
      {/* A faint grid over the gradient. Flat colour at this size reads as a
          rendering error on a wide screen; texture reads as intent. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className={`${CONTAINER} relative flex flex-col items-center gap-7 text-center`}>
        <h2 className="max-w-[24ch] text-[clamp(2.1rem,4.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-white">
          Build your institution&rsquo;s website today
        </h2>
        <p className="max-w-[44ch] text-[1.0625rem] leading-relaxed text-white/85">
          Start free, publish when you are ready, and connect the domain you already own.
        </p>
        <a
          href={SIGN_UP_URL}
          className="group inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-[14px] font-bold uppercase tracking-[0.05em] text-slate-900 no-underline shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          Get started free
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <p className="text-[0.875rem] text-white/70">No credit card required.</p>
      </div>
    </section>
  );
}
