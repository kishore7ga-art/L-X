"use client";

import { useState } from "react";
import { ArrowRight, Play, CheckCircle2, XCircle, AlertTriangle, Lock, ShieldAlert, Zap, RefreshCw } from "lucide-react";

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

      </div>
    </section>
  );
}

/* ── Two things it does, side by side: With WebXite vs Without WebXite ──── */

export function Split() {
  return (
    <section id="features" className="relative z-30 grid lg:grid-cols-2 border-t border-slate-100">
      {/* ── Left Half: WITH WEBXITE (Beautiful, Modern, Fast) ─────────── */}
      <div className="flex flex-col items-center justify-between bg-white px-6 pb-0 pt-[clamp(3.5rem,6vw,5rem)] text-center sm:px-10 border-b lg:border-b-0 lg:border-r border-slate-100">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-600 mb-2">
            WITH WEBXITE
          </p>

          <h2 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.035em] text-slate-900 min-h-[3rem] flex items-center justify-center">
            <span>
              One modern site,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600">
                every department
              </span>
            </span>
          </h2>

          <p className="mt-2.5 max-w-md text-xs sm:text-[13px] leading-relaxed text-slate-500 min-h-[2.5rem] flex items-center justify-center">
            Unified campus branding, sub-second page loads, and seamless admissions workflows.
          </p>

          {/* Feature Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-md">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[10.5px] font-bold text-emerald-700 ring-1 ring-emerald-200">
              <CheckCircle2 className="h-3 w-3 text-emerald-600" /> 99/100 PageSpeed
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-3 py-1 text-[10.5px] font-bold text-teal-700 ring-1 ring-teal-200">
              <Lock className="h-3 w-3 text-teal-600" /> Auto SSL & CDN
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-[10.5px] font-bold text-blue-700 ring-1 ring-blue-200">
              <Zap className="h-3 w-3 text-blue-600" /> Multi-Department
            </span>
          </div>

          <div className="mt-6">
            <a
              href={SIGN_UP_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.06em] text-white no-underline shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Build a campus site
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Beautiful Modern Campus Browser Mockup */}
        <div className="mt-10 w-full max-w-[560px] xl:max-w-[600px] h-[360px] sm:h-[390px] overflow-hidden rounded-t-3xl shadow-[0_-8px_40px_rgba(11,18,32,0.12)] ring-1 ring-slate-900/[0.08] bg-white text-left flex flex-col justify-between">
          {/* macOS Browser Header */}
          <div className="flex h-9 shrink-0 items-center justify-between border-b border-slate-200 bg-slate-100 px-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex items-center gap-1 rounded-full bg-white px-3 py-0.5 text-[10px] font-mono text-slate-700 shadow-sm ring-1 ring-slate-200">
              <span className="text-emerald-500 font-bold">🔒</span>
              <span>https://university.edu</span>
            </div>
            <span className="text-[10px] text-emerald-600 font-bold">● Live</span>
          </div>

          {/* Browser Content */}
          <div className="relative flex-1 w-full overflow-hidden bg-slate-50 flex flex-col justify-end">
            <img
              src="/showcase/birmingham.jpg"
              alt="With WebXite: Modern Campus Website"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            {/* Floating Live Stat Badge */}
            <div className="relative z-10 m-4 self-start flex items-center gap-2 rounded-2xl bg-white/95 p-2.5 shadow-xl backdrop-blur-md ring-1 ring-slate-900/10">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500 text-white font-black text-xs shadow">
                ⚡
              </span>
              <div>
                <p className="text-[9px] font-black text-slate-900">0.4s Instant Load</p>
                <p className="text-[8px] font-medium text-slate-500">100% Score on Google Core Vitals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right Half: WITHOUT WEBXITE (Worst, Outdated, Broken) ─────── */}
      <div className="flex flex-col items-center justify-between bg-[#E8ECF5] px-6 pb-0 pt-[clamp(3.5rem,6vw,5rem)] text-center sm:px-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-red-500 mb-2">
            WITHOUT WEBXITE
          </p>

          <h2 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.035em] text-slate-900 min-h-[3rem] flex items-center justify-center">
            <span>
              Slow, broken &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-amber-600">
                hard to manage
              </span>
            </span>
          </h2>

          <p className="mt-2.5 max-w-md text-xs sm:text-[13px] leading-relaxed text-slate-500 min-h-[2.5rem] flex items-center justify-center">
            Slow 14s load times, endless WordPress plugin crashes, 404 links, and frustrated visitors.
          </p>

          {/* Pain Point Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-md">
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-[10.5px] font-bold text-red-700 ring-1 ring-red-200">
              <XCircle className="h-3 w-3 text-red-500" /> 14.8s Slow Load
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-[10.5px] font-bold text-rose-700 ring-1 ring-rose-200">
              <AlertTriangle className="h-3 w-3 text-rose-500" /> 404 Broken Links
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-[10.5px] font-bold text-amber-800 ring-1 ring-amber-200">
              <ShieldAlert className="h-3 w-3 text-amber-600" /> 28 Unsafe Plugins
            </span>
          </div>

          <div className="mt-6">
            <a
              href={SIGN_UP_URL}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.06em] text-slate-900 no-underline shadow-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              Upgrade your website
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Outdated / Broken Browser Mockup */}
        <div className="mt-10 w-full max-w-[560px] xl:max-w-[600px] h-[360px] sm:h-[390px] overflow-hidden rounded-t-3xl shadow-[0_-8px_40px_rgba(11,18,32,0.12)] ring-1 ring-slate-900/[0.08] bg-slate-200 text-left flex flex-col justify-between">
          {/* Outdated Browser Header */}
          <div className="flex h-9 shrink-0 items-center justify-between border-b border-slate-300 bg-slate-300/80 px-4 text-xs text-slate-600 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
            </div>
            <div className="flex items-center gap-1 rounded bg-amber-100 px-2 py-0.5 text-[9px] text-amber-900 border border-amber-300">
              <span className="text-red-500 font-bold">⚠️ Not Secure</span>
              <span>http://old-dept-site.edu/v1/error.php</span>
            </div>
            <span className="text-[9px] text-red-600 font-bold">Error 504</span>
          </div>

          {/* Broken Clunky Retro Website Layout */}
          <div className="relative flex-1 w-full overflow-hidden bg-[#fafafa] p-3 text-slate-900 font-serif flex flex-col justify-between border-t border-slate-300">
            {/* 90s Flashing banner */}
            <div className="bg-yellow-300 p-1 text-center text-[8.5px] font-mono font-bold text-red-700 border border-dashed border-red-500">
              🚧 [SITE UNDER MAINTENANCE] - DEPT PAGES BROKEN 🚧
            </div>

            {/* Broken PHP Error Box */}
            <div className="my-1 rounded bg-red-100 p-1.5 border border-red-400 font-mono text-[7.5px] text-red-800 leading-tight">
              <strong>Fatal error:</strong> Uncaught Error: Call to undefined function wp_page_builder() on line 402
            </div>

            {/* Clunky Links & Broken placeholder */}
            <div className="grid grid-cols-2 gap-2 text-[9px] items-center my-auto">
              <div className="space-y-0.5">
                <p className="font-bold underline text-blue-800 text-[9.5px]">Welcome to Official Page</p>
                <p className="text-slate-600 text-[7.5px] font-sans">
                  Best viewed in IE 6.0 at 800x600.
                </p>
                <div className="flex flex-col gap-0.5 text-[7.5px] text-blue-700 underline font-sans">
                  <span>&gt; Admissions_old_v2.pdf</span>
                  <span>&gt; Faculty Directory (404 Error)</span>
                  <span>&gt; Syllabus 2018.docx</span>
                </div>
              </div>

              {/* Broken Image Placeholder & Spinner */}
              <div className="flex flex-col items-center justify-center rounded border border-dashed border-slate-400 bg-slate-100 p-2 text-center">
                <span className="text-red-500 font-bold text-[10px]">❌ [Image Error]</span>
                <span className="text-[6.5px] text-slate-500 font-mono">campus_photo.jpg (404)</span>
                <div className="mt-1.5 flex items-center gap-1 text-[7.5px] font-mono text-amber-700">
                  <RefreshCw className="h-2 w-2 animate-spin" />
                  <span>Loading... (14.8s)</span>
                </div>
              </div>
            </div>

            {/* Footer raw html table */}
            <div className="border-t border-slate-300 pt-1 text-[6.5px] font-mono text-slate-500 flex justify-between">
              <span>Visitor Counter: [000142]</span>
              <span>© 2004 Legacy Department</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


