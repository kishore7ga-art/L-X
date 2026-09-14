"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ImageIcon, Link2, Settings2, Trash2, Type } from "lucide-react";
import gsap from "gsap";

import { BRAND_GRADIENT, CONTAINER, REDUCED_MOTION } from "./tokens";
import { SIGN_UP_URL } from "@/env";

/**
 * The hero.
 *
 * The collage on the right is WebXite's own editor surfaces — a colour picker,
 * a type panel, a spacing control, a viewport switcher — arranged as though
 * mid-edit. It is the one place on a builder's landing page where showing the
 * product beats describing it, and a screenshot would not do: a screenshot is
 * one moment, flat, and stops being true the first time the editor's own
 * chrome changes. These are the real controls, in markup, so they inherit the
 * site's tokens and cannot go stale.
 *
 * ── Motion ──────────────────────────────────────────────────────────────────
 *
 * Each card drifts on its own slow loop, and every one is offset so the group
 * never pulses together — synchronised float reads as a carousel rather than as
 * depth. Transforms only, so nothing here touches layout; animating `top`
 * would put five elements into the browser's layout pass on every frame.
 *
 * `prefers-reduced-motion` kills all of it and leaves the collage exactly where
 * it renders, which is the composition it was designed at rather than a
 * degraded version of one.
 */
export function Hero() {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = stage.current;
    if (!node) return;
    if (window.matchMedia(REDUCED_MOTION).matches) return;

    const cards = node.querySelectorAll<HTMLElement>("[data-float]");
    const tweens = Array.from(cards).map((card, i) =>
      gsap.to(card, {
        y: i % 2 === 0 ? -14 : 12,
        duration: 3.2 + i * 0.45,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        // Staggered starts, so five cards never reach the top of their arc on
        // the same frame.
        delay: i * 0.35,
      }),
    );

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-white pt-10 sm:pt-16">
      {/* A single soft wash behind the collage. Kept to one, because the page
          already carries a gradient in three other places and a hero that
          competes with its own headline is a hero nobody reads. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[12%] top-[-6%] h-[70%] w-[62%] rounded-full opacity-[0.10] blur-[110px]"
        style={{ background: BRAND_GRADIENT }}
      />

      <div className={`${CONTAINER} relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-16`}>
        {/* ── Left: the claim ─────────────────────────────────────────────── */}
        <div className="relative z-10">
          <h1 className="text-[clamp(2.5rem,4.4vw,4.4rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-slate-900">
            Your college website,
            <br />
            <Highlight>live this week</Highlight>
            <br />
            without a developer
          </h1>

          <p className="mt-7 max-w-[34rem] text-[1.0625rem] sm:text-[1.125rem] leading-relaxed text-slate-600">
            Build every page, connect the domain you already own, and publish. WebXite
            handles the hosting, the certificate and the search setup.
          </p>

          <a
            href={SIGN_UP_URL}
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-8 py-4 text-[14px] font-bold uppercase tracking-[0.05em] text-white no-underline shadow-[0_10px_28px_rgba(11,18,32,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_16px_36px_rgba(11,18,32,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 focus-visible:ring-offset-2"
          >
            Start building
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Two figures, not six. A row of statistics stops being read at
              about three, and these are the two a principal asks about. */}
          <div className="mt-14 flex flex-wrap gap-x-14 gap-y-8">
            <Stat value="40+" label={["Institutions", "already publishing"]} />
            <Stat value="1 day" label={["From signup", "to a live domain"]} />
          </div>
        </div>

        {/* ── Right: the product, mid-edit ────────────────────────────────── */}
        <div ref={stage} className="relative h-[440px] sm:h-[520px] lg:h-[580px] xl:h-[620px] w-full max-w-[640px] lg:max-w-none mx-auto">
          <FloatingToolbar />
          <CampusCard />
          <ColorPanel />
          <TypePanel />
          <SpacingPanel />
          <ViewportPill />
        </div>
      </div>
    </section>
  );
}

/** A phrase carrying the brand gradient as a rounded plate behind the text. */
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="mx-[-0.15em] inline-block rounded-[0.3em] px-[0.15em] text-white"
      style={{ background: BRAND_GRADIENT }}
    >
      {children}
    </span>
  );
}

function Stat({ value, label }: { value: string; label: [string, string] }) {
  return (
    <div className="flex items-center gap-3.5">
      <span
        className="bg-clip-text text-[2.6rem] font-extrabold leading-none tracking-[-0.04em] text-transparent"
        style={{ backgroundImage: BRAND_GRADIENT }}
      >
        {value}
      </span>
      <span className="text-[11px] font-bold uppercase leading-[1.5] tracking-[0.1em] text-slate-500">
        {label[0]}
        <br />
        {label[1]}
      </span>
    </div>
  );
}

/* ── The collage ────────────────────────────────────────────────────────────
   Absolutely positioned in percentages so the arrangement survives every
   breakpoint without a second layout. Each is `data-float` for the GSAP loop.
   ------------------------------------------------------------------------- */

const CARD = "absolute rounded-2xl bg-white shadow-[0_18px_44px_rgba(11,18,32,0.13)] ring-1 ring-slate-900/[0.06]";

/** The vertical tool rail, as the editor actually shows it. */
function FloatingToolbar() {
  return (
    <div
      data-float
      className={`${CARD} left-[30%] top-[2%] flex flex-col gap-1 p-1.5`}
    >
      {[ImageIcon, Type, Link2, Trash2, Settings2].map((Icon, i) => (
        <span
          key={i}
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
            i === 0 ? "bg-slate-900 text-white" : "text-slate-400"
          }`}
        >
          <Icon className="h-[15px] w-[15px]" />
        </span>
      ))}
    </div>
  );
}

/**
 * A campus photo with a selection frame on it.
 *
 * Uses one of the showcase images already in `public/` rather than a stock
 * photograph: the hero of a builder for institutions should show an
 * institution, and these are the images the template gallery further down the
 * page uses too.
 */
function CampusCard() {
  return (
    <div
      data-float
      className={`${CARD} left-0 top-[12%] w-[46%] overflow-hidden p-0`}
    >
      <div className="relative aspect-[4/5]">
        <img
          src="/showcase/oxford.jpg"
          alt=""
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {/* The selection chrome an editor draws over a chosen element. */}
        <span className="absolute inset-2 rounded-lg border-2 border-teal-400/90" />
        <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400 ring-2 ring-white" />
        <span className="absolute bottom-3 left-3 rounded-md bg-black/55 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
          Hero image
        </span>
      </div>
    </div>
  );
}

/** The colour picker, dark-chrome, as the editor's panels are. */
function ColorPanel() {
  return (
    <div
      data-float
      className="absolute right-0 top-[6%] w-[54%] rounded-2xl bg-[#12161F] p-3.5 shadow-[0_22px_52px_rgba(11,18,32,0.32)] ring-1 ring-white/10"
    >
      <p className="mb-2.5 text-[11px] font-bold text-white/85">Colour</p>
      {/* A real two-axis gradient field, not a picture of one. */}
      <div
        className="relative h-[76px] w-full rounded-lg"
        style={{
          background:
            "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, #2563EB)",
        }}
      >
        <span className="absolute right-[22%] top-[24%] h-3 w-3 rounded-full border-2 border-white shadow" />
      </div>
      <div
        className="mt-2.5 h-2 w-full rounded-full"
        style={{
          background:
            "linear-gradient(90deg,#f43f5e,#f59e0b,#22c55e,#06b6d4,#2563eb,#a855f7,#f43f5e)",
        }}
      />
      <div className="mt-3 flex items-center gap-1.5">
        <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold text-white/90">
          #2563EB
        </span>
        <span className="ml-auto flex gap-1">
          {["#14B8A6", "#2563EB", "#6D28D9", "#0B1220"].map((c) => (
            <span
              key={c}
              className="h-4 w-4 rounded-[5px] ring-1 ring-white/20"
              style={{ backgroundColor: c }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

/** The type panel, in the brand teal so the collage has one saturated anchor. */
function TypePanel() {
  return (
    <div
      data-float
      className="absolute left-[18%] bottom-[6%] w-[44%] rounded-2xl bg-[#14B8A6] p-3.5 shadow-[0_20px_46px_rgba(20,184,166,0.34)]"
    >
      <p className="mb-2.5 text-[11px] font-bold text-white">Typography</p>
      <div className="flex gap-1">
        {["Left", "Centre", "Right", "Just"].map((a, i) => (
          <span
            key={a}
            className={`flex h-6 flex-1 items-center justify-center rounded-md text-[9px] font-bold ${
              i === 0 ? "bg-white text-teal-700" : "bg-white/25 text-white"
            }`}
          >
            {a}
          </span>
        ))}
      </div>
      <div className="mt-2 rounded-md bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-800">
        Plus Jakarta Sans
      </div>
      <div className="mt-1.5 flex gap-1.5">
        <span className="flex-1 rounded-md bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-800">
          Semi Bold
        </span>
        <span className="w-14 rounded-md bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-800">
          36
        </span>
      </div>
    </div>
  );
}

/** The spacing control — the box-model diagram every builder has. */
function SpacingPanel() {
  return (
    <div
      data-float
      className={`${CARD} right-[2%] bottom-[10%] w-[42%] p-3.5`}
    >
      <p className="mb-2.5 text-[11px] font-bold text-slate-800">Spacing</p>
      <div className="rounded-lg border border-dashed border-slate-300 p-2.5">
        <div className="rounded-md bg-slate-100 p-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-bold text-slate-400">auto</span>
            <span className="h-1.5 flex-1 rounded-full bg-violet-500" />
            <span className="text-[9px] font-bold text-slate-400">auto</span>
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
        Margin · Padding
      </p>
    </div>
  );
}

/** Viewport switcher and the address the site will answer on. */
function ViewportPill() {
  return (
    <div
      data-float
      className={`${CARD} left-[4%] top-[1%] flex items-center gap-2 px-3 py-2`}
    >
      <span className="flex items-center gap-1.5">
        {["h-3 w-4", "h-3.5 w-3", "h-3.5 w-2"].map((s, i) => (
          <span
            key={i}
            className={`${s} rounded-[3px] ${i === 0 ? "bg-slate-900" : "bg-slate-300"}`}
          />
        ))}
      </span>
      <span className="h-4 w-px bg-slate-200" />
      <span className="font-mono text-[10px] font-bold text-slate-500">1440px</span>
    </div>
  );
}
