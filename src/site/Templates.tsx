"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

import { CONTAINER, COLORS, EYEBROW } from "./tokens";
import { SIGN_UP_URL } from "@/env";

const CATEGORIES = ["Personal", "Business", "Portfolio", "Online Store", "Blog"] as const;

export function Templates() {
  const [activeTab, setActiveTab] = useState<string>("Personal");

  return (
    <section id="templates" className="relative z-30 bg-[#121620] text-white py-20 sm:py-28 overflow-hidden">
      <div className={CONTAINER}>
        {/* ── Header: Title & Description ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 items-end justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-3">
              200+ PRE-MADE BEAUTIFUL TEMPLATES
            </p>
            <h2 className="text-[clamp(2.2rem,4.2vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500">
                Top-notch
              </span>{" "}
              responsive
              <br />
              website templates.
            </h2>
          </div>

          <p className="text-[0.9375rem] leading-relaxed text-slate-400 max-w-md">
            Starting a yoga studio, restaurant, agency or selling gadgets online? We have the Friday theme for you.
            With dozens of designs to choose from, you can always find the perfect responsive website template for
            your needs. Easily customize images, content, and style to make it your own.
          </p>
        </div>

        {/* ── Category Filter Pills ─────────────────────────────────────── */}
        <div className="mt-10 flex flex-wrap items-center">
          <div className="inline-flex flex-wrap p-1.5 rounded-full bg-[#1C2230] border border-white/5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === cat
                    ? "bg-[#283244] text-white shadow-sm"
                    : "text-slate-400 hover:text-white font-medium"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── 3 Showcase Cards Grid ──────────────────────────────────────── */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Developer */}
          <div className="flex flex-col">
            <div className="group relative aspect-[16/11] w-full overflow-hidden rounded-3xl bg-[#181D28] p-4 text-white shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1">
              {/* Top micro bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[9px] font-mono text-slate-400">
                <span className="font-bold text-white">Daniel Stephan</span>
                <div className="flex items-center gap-2">
                  <span>About</span>
                  <span>Skills</span>
                  <span>Work</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-3 flex items-center justify-between gap-2">
                <div className="flex-1">
                  <span className="inline-block rounded bg-teal-500/20 px-1.5 py-0.5 font-mono text-[7.5px] font-bold text-teal-300">
                    // FULL-STACK DEV
                  </span>
                  <p className="mt-1 text-[13px] font-extrabold leading-tight tracking-tight text-white">
                    Talk is cheap.
                    <br />
                    <span className="text-teal-400">Show me the code</span>
                  </p>
                  <p className="mt-1 font-mono text-[7px] text-slate-400">&gt; git clone dev.io</p>
                  <div className="mt-3 flex items-center gap-3 text-[9px] font-mono font-bold">
                    <span>
                      <span className="text-white">12</span> <span className="text-slate-500">Repos</span>
                    </span>
                    <span>
                      <span className="text-white">165</span> <span className="text-slate-500">Commits</span>
                    </span>
                  </div>
                </div>

                {/* Developer photo with floating badges */}
                <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl">
                  <img
                    src="/showcase/dev-portrait.jpg"
                    alt="Developer template preview"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 rounded bg-amber-400 px-1 py-0.5 font-mono text-[7px] font-black text-black shadow">
                    JS
                  </span>
                  <span className="absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 font-bold text-[7px] text-white shadow">
                    A
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 px-1">
              <h3 className="text-base font-extrabold text-white">Developer</h3>
              <p className="text-xs text-slate-400">Banner Parallax, Before/After, Private Projects</p>
            </div>
          </div>

          {/* Card 2: Freelancer */}
          <div className="flex flex-col">
            <div className="group relative aspect-[16/11] w-full overflow-hidden rounded-3xl bg-[#FAFAFC] p-4 text-slate-900 shadow-2xl ring-1 ring-slate-900/10 transition-all duration-300 hover:-translate-y-1">
              {/* Top micro bar */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-[9px] text-slate-500">
                <span className="font-extrabold text-slate-900">Bruno.design</span>
                <div className="flex gap-2">
                  <span>Work</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

              {/* Centered Designer copy */}
              <div className="mt-2 text-center">
                <p className="text-[12px] font-extrabold text-slate-900">Bruno Erdtson</p>
                <p className="text-[9px] font-semibold text-slate-500">UI/UX Interaction Designer</p>
                <p className="text-[8px] text-slate-400">Based in Poland</p>

                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="rounded-full bg-[#633ff8] px-3 py-1 text-[8.5px] font-bold text-white shadow-sm">
                    EDIT
                  </span>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-[8.5px] font-bold text-white shadow-sm">
                    VIEW
                  </span>
                </div>

                {/* Designer Portrait */}
                <div className="mx-auto mt-2 h-14 w-14 overflow-hidden rounded-full ring-2 ring-slate-200">
                  <img
                    src="/showcase/freelancer-portrait.jpg"
                    alt="Freelancer template preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 px-1">
              <h3 className="text-base font-extrabold text-white">Freelancer</h3>
              <p className="text-xs text-slate-400">Instagram, Dribbble Module, Portfolio Grid</p>
            </div>
          </div>

          {/* Card 3: Personal Coach */}
          <div className="flex flex-col">
            <div className="group relative aspect-[16/11] w-full overflow-hidden rounded-3xl bg-white p-4 text-slate-900 shadow-2xl ring-1 ring-slate-900/10 transition-all duration-300 hover:-translate-y-1">
              {/* Top micro bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-[9px] text-slate-500">
                <span className="font-bold text-slate-900">Andy Grammer</span>
                <div className="flex gap-2 text-[8px]">
                  <span>Events</span>
                  <span>Coaching</span>
                  <span>Podcast</span>
                </div>
              </div>

              {/* Hero content with speaker photo */}
              <div className="mt-2.5 flex items-center justify-between gap-2">
                <div className="flex-1">
                  <p className="text-[13px] font-black leading-tight tracking-tight text-slate-900">
                    Change
                    <br />
                    <span className="text-amber-500">starts within</span>
                    <br />
                    you
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[8px] font-bold text-slate-600">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-100 text-slate-900 shadow">
                      <Play className="h-2 w-2 fill-current" />
                    </span>
                    <span>Watch Video</span>
                  </div>
                </div>

                {/* Speaker on stage photo */}
                <div className="h-28 w-24 shrink-0 overflow-hidden rounded-2xl">
                  <img
                    src="/showcase/coach-portrait.jpg"
                    alt="Coach template preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 px-1">
              <h3 className="text-base font-extrabold text-white">Personal Coach</h3>
              <p className="text-xs text-slate-400">Digital Download, Booking Event, Video Slider</p>
            </div>
          </div>
        </div>

        {/* ── Pagination Controls ────────────────────────────────────────── */}
        <div className="mt-12 flex items-center justify-center gap-3 text-slate-500">
          <button type="button" className="flex h-7 w-7 items-center justify-center rounded-full hover:text-white transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
          </div>
          <button type="button" className="flex h-7 w-7 items-center justify-center rounded-full hover:text-white transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
        <div className="mt-8 flex justify-center">
          <a
            href={SIGN_UP_URL}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.06em] text-slate-900 shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Browse all templates
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Two things it does, side by side: With WebXite vs Without WebXite ──── */

export function Split() {
  return (
    <section id="features" className="relative z-30 grid lg:grid-cols-2">
      <SplitHalf
        background={COLORS.page}
        eyebrow="WITH WEBXITE"
        titleA="One site,"
        titleB="every department"
        cta="Build a campus site"
        image="/showcase/birmingham.jpg"
        alt="With WebXite: campus website with all department pages"
      />
      <SplitHalf
        background={COLORS.wash}
        eyebrow="WITHOUT WEBXITE"
        titleA="A page for"
        titleB="one programme"
        cta="Build a single page"
        image="/showcase/queens-belfast.jpg"
        alt="Without WebXite: single landing page"
      />
    </section>
  );
}

function SplitHalf({
  background,
  eyebrow,
  titleA,
  titleB,
  cta,
  image,
  alt,
}: {
  background: string;
  eyebrow: string;
  titleA: string;
  titleB: string;
  cta: string;
  image: string;
  alt: string;
}) {
  return (
    <div
      className="flex flex-col items-center px-6 pb-0 pt-[clamp(3.5rem,7vw,6rem)] text-center sm:px-10"
      style={{ backgroundColor: background }}
    >
      <p className={EYEBROW}>{eyebrow}</p>
      <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-slate-900">
        {titleA}{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg,#14B8A6,#2563EB 60%,#6D28D9)" }}
        >
          {titleB}
        </span>
      </h2>

      <a
        href={SIGN_UP_URL}
        className="group mt-7 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-8 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.06em] text-slate-900 no-underline shadow-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
      >
        {cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      {/* Bleeds off the bottom edge on purpose */}
      <div className="mt-12 w-full max-w-[560px] xl:max-w-[620px] overflow-hidden rounded-t-3xl shadow-[0_-4px_40px_rgba(11,18,32,0.14)] ring-1 ring-slate-900/[0.08]">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
