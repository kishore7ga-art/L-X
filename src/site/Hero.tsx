"use client";

import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

import { CONTAINER } from "./tokens";
import { SIGN_UP_URL } from "@/env";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pb-12 pt-6 sm:pt-10 sm:pb-16">
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

      {/* Ambient soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.18] blur-[130px]"
        style={{
          background: "linear-gradient(135deg, #14B8A6 0%, #2563EB 50%, #6D28D9 100%)",
        }}
      />

      <div className={CONTAINER + " relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"}>
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-600 mb-4 sm:mb-5 ring-1 ring-slate-900/5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          No-Code Platform For Education &amp; Campus
        </div>

        {/* Main Headline */}
        <h1 className="text-[clamp(2.1rem,4vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-slate-950 max-w-2xl">
          Build beautiful{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600">
            websites for institutions.
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-4 max-w-xl text-[clamp(0.925rem,1.25vw,1.0625rem)] leading-relaxed text-slate-600">
          Fast, high-converting visual design for campus and institution sites.
        </p>

        {/* CTA Button */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SIGN_UP_URL}
            className="group inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.06em] text-white no-underline shadow-[0_8px_20px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_14px_28px_rgba(15,23,42,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Free Custom Domain &amp; SSL
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-blue-500" /> Sub-Second Edge Performance
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-indigo-500" /> Zero Coding Required
          </span>
        </div>

        {/* Stats Row */}
        <div className="mt-8 sm:mt-9 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 pt-5 border-t border-slate-200/80 w-full max-w-lg">
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-[2.2rem] sm:text-[2.5rem] font-extrabold leading-none tracking-[-0.04em] text-transparent">
              95%
            </span>
            <span className="text-[11px] font-bold uppercase leading-[1.3] tracking-[0.1em] text-slate-500 text-left">
              Retention
            </span>
          </div>

          <div className="h-7 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-[2.2rem] sm:text-[2.5rem] font-extrabold leading-none tracking-[-0.04em] text-transparent">
              200+
            </span>
            <span className="text-[11px] font-bold uppercase leading-[1.3] tracking-[0.1em] text-slate-500 text-left">
              Templates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
