"use client";

import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

import { CONTAINER } from "./tokens";
import { SIGN_UP_URL } from "@/env";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[calc(100vh-68px)] flex flex-col justify-center overflow-hidden bg-white py-12 sm:py-16">
      {/* Background crosshair dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px), radial-gradient(#CBD5E1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundPosition: "0 0, 24px 24px",
        }}
      />

      {/* Ambient colorful aura glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.22] blur-[150px]"
        style={{
          background: "linear-gradient(135deg, #F43F5E 0%, #D946EF 30%, #8B5CF6 60%, #3B82F6 85%, #14B8A6 100%)",
        }}
      />

      <div className={CONTAINER + " relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto my-auto"}>
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-rose-50/80 border border-rose-200/60 px-4 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-rose-700 mb-5 sm:mb-6 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          No-Code Platform For Education &amp; Campus
        </div>

        {/* Big Impact Headline */}
        <h1 className="text-[clamp(2.75rem,5.5vw,4.85rem)] font-black leading-[1.08] tracking-[-0.04em] text-slate-950 max-w-3xl">
          Build beautiful{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 via-purple-600 to-indigo-600">
            websites for institutions.
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-5 max-w-2xl text-[clamp(1.05rem,1.8vw,1.3rem)] font-normal leading-relaxed text-slate-600">
          Fast, high-converting visual design for campus and institution sites.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SIGN_UP_URL}
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-slate-950 px-9 py-4 text-[13.5px] font-bold uppercase tracking-[0.08em] text-white no-underline shadow-[0_12px_28px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-[0_18px_36px_rgba(244,63,94,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-7 text-xs sm:text-[13px] text-slate-600 font-semibold">
          <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-3 py-1.5 rounded-full">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Free Custom Domain &amp; SSL
          </span>
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200/70 px-3 py-1.5 rounded-full">
            <Zap className="h-4 w-4 text-amber-500 fill-amber-400" /> Sub-Second Edge Performance
          </span>
          <span className="flex items-center gap-1.5 bg-purple-50 text-purple-800 border border-purple-200/70 px-3 py-1.5 rounded-full">
            <ShieldCheck className="h-4 w-4 text-purple-600" /> Zero Coding Required
          </span>
        </div>

        {/* Stats Row */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 pt-6 border-t border-slate-200/80 w-full max-w-xl">
          <div className="flex items-center gap-3.5">
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 bg-clip-text text-[2.75rem] sm:text-[3.2rem] font-black leading-none tracking-[-0.04em] text-transparent">
              95%
            </span>
            <span className="text-[11.5px] font-bold uppercase leading-[1.3] tracking-[0.12em] text-slate-500 text-left">
              Retention
            </span>
          </div>

          <div className="h-8 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-3.5">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500 bg-clip-text text-[2.75rem] sm:text-[3.2rem] font-black leading-none tracking-[-0.04em] text-transparent">
              200+
            </span>
            <span className="text-[11.5px] font-bold uppercase leading-[1.3] tracking-[0.12em] text-slate-500 text-left">
              Templates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
