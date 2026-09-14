"use client";

import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  ImageIcon,
  Laptop,
  Link2,
  Lock,
  Pipette,
  Plus,
  PlusCircle,
  RotateCcw,
  Settings,
  Smartphone,
  Tablet,
  Trash2,
} from "lucide-react";
import gsap from "gsap";

import { CONTAINER, REDUCED_MOTION } from "./tokens";
import { SIGN_UP_URL } from "@/env";

export function Hero() {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = stage.current;
    if (!node) return;
    if (window.matchMedia(REDUCED_MOTION).matches) return;

    const cards = node.querySelectorAll<HTMLElement>("[data-float]");
    const tweens = Array.from(cards).map((card, i) =>
      gsap.to(card, {
        y: i % 2 === 0 ? -10 : 8,
        duration: 3.4 + i * 0.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.3,
      }),
    );

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-white pb-20 pt-8 sm:pt-14">
      {/* Background crosshair dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(#94A3B8 1px, transparent 1px), radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          backgroundPosition: "0 0, 24px 24px",
        }}
      />

      {/* Ambient soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] top-[-8%] h-[80%] w-[70%] rounded-full opacity-[0.14] blur-[130px]"
        style={{
          background: "linear-gradient(135deg, #14B8A6 0%, #2563EB 50%, #6D28D9 100%)",
        }}
      />

      <div className={`${CONTAINER} relative grid items-center gap-12 lg:grid-cols-[1.05fr_1.15fr] lg:gap-8 xl:gap-14`}>
        {/* ── Left Column: Headline & Value Prop ───────────────────────────── */}
        <div className="relative z-10">
          <h1 className="text-[clamp(2.6rem,4.6vw,4.5rem)] font-extrabold leading-[1.14] tracking-[-0.04em] text-slate-950">
            <span className="block mb-1.5">Build beautiful websites in</span>

            <span className="inline-block mb-1.5">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-7 py-0.5 text-white shadow-lg">
                minutes
              </span>
            </span>

            <span className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 px-7 py-0.5 text-white shadow-lg">
                no code
              </span>
              <span className="text-slate-950">needed.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-[32rem] text-[1.0625rem] leading-relaxed text-slate-600">
            Fast, high-converting visual design for campus and brand sites.
          </p>

          <a
            href={SIGN_UP_URL}
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-white no-underline shadow-[0_10px_24px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_16px_32px_rgba(15,23,42,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Stats Row */}
          <div className="mt-14 flex flex-wrap items-center gap-x-12 gap-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-[3rem] font-extrabold leading-none tracking-[-0.04em] text-transparent">
                95%
              </span>
              <span className="text-[11px] font-bold uppercase leading-[1.3] tracking-[0.1em] text-slate-500">
                Retention
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-[3rem] font-extrabold leading-none tracking-[-0.04em] text-transparent">
                200+
              </span>
              <span className="text-[11px] font-bold uppercase leading-[1.3] tracking-[0.1em] text-slate-500">
                Templates
              </span>
            </div>
          </div>
        </div>

        {/* ── Right Column: Interactive Diagram Canvas ────────────────────── */}
        <div
          ref={stage}
          className="relative h-[560px] sm:h-[620px] lg:h-[640px] w-full max-w-[660px] lg:max-w-none mx-auto select-none"
        >
          {/* Connecting Cyan/Teal Bezier Lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            stroke="url(#diag-circuit-grad)"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="diag-circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.35" />
              </linearGradient>
            </defs>

            {/* Connection: Image Card to Toolbar */}
            <path d="M 210 180 H 260" strokeDasharray="3 3" />

            {/* Connection: URL Lock Node to Device Viewport Pill */}
            <path d="M 100 370 C 120 370, 130 330, 160 330" />

            {/* Connection: Device Viewport Pill to Center 'A' Node */}
            <path d="M 280 330 C 310 330, 310 370, 335 370" />

            {/* Connection: Center 'A' Node to Typography Card */}
            <path d="M 335 390 V 440" />

            {/* Connection: Device Viewport to Spacing Card */}
            <path d="M 280 340 C 330 340, 360 460, 420 460" />

            {/* Connection: Color Picker to Spacing Card */}
            <path d="M 440 280 C 440 340, 430 400, 440 440" strokeDasharray="3 3" />
          </svg>

          {/* 1. College Campus Showcase Image Card */}
          <div
            data-float
            className="absolute left-[3%] top-[6%] w-[210px] sm:w-[230px] rounded-3xl bg-white p-1.5 shadow-[0_22px_48px_rgba(11,18,32,0.14)] ring-1 ring-slate-900/[0.06]"
          >
            <div className="relative aspect-[4/4.8] overflow-hidden rounded-[22px]">
              <img
                src="/showcase/college-hero.jpg"
                alt="College website builder canvas"
                className="h-full w-full object-cover"
                loading="eager"
              />

              {/* Floating Tool Pill (Top-Left overlay) */}
              <div className="absolute left-2.5 top-2.5 flex items-center gap-2 rounded-full bg-slate-900/80 px-2.5 py-1 text-white shadow-md backdrop-blur-md">
                <ImageIcon className="h-3 w-3 text-white" />
                <Link2 className="h-3 w-3 text-slate-300" />
                <Trash2 className="h-3 w-3 text-slate-300" />
              </div>

              {/* Bottom Percentage Slider Pill */}
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-md">
                <span className="text-[10px] font-bold text-white">27%</span>
                <div className="relative h-1 flex-1 rounded-full bg-white/30">
                  <span className="absolute left-0 top-0 h-full w-[27%] rounded-full bg-white" />
                  <span className="absolute left-[27%] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Floating Vertical Tool Strip */}
          <div
            data-float
            className="absolute left-[38%] top-[4%] flex flex-col items-center gap-3.5 rounded-full bg-white px-2.5 py-3.5 shadow-[0_16px_36px_rgba(11,18,32,0.12)] ring-1 ring-slate-900/[0.06]"
          >
            <button type="button" className="text-slate-700 transition-colors hover:text-slate-950">
              <PlusCircle className="h-4 w-4" />
            </button>
            <button type="button" className="text-slate-400 transition-colors hover:text-slate-950">
              <FileText className="h-4 w-4" />
            </button>
            <button type="button" className="text-slate-400 transition-colors hover:text-slate-950">
              <ImageIcon className="h-4 w-4" />
            </button>
            <button type="button" className="text-slate-400 transition-colors hover:text-slate-950">
              <Link2 className="h-4 w-4" />
            </button>
            <button type="button" className="text-slate-400 transition-colors hover:text-slate-950">
              <Settings className="h-4 w-4" />
            </button>
          </div>

          {/* 3. Dark Color Picker Card */}
          <div
            data-float
            className="absolute right-0 top-[6%] w-[290px] sm:w-[310px] rounded-3xl bg-[#161A23] p-4 text-white shadow-[0_24px_54px_rgba(0,0,0,0.36)] ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-bold text-white/90">Color Picker</span>
              <div className="flex items-center gap-2 text-slate-400">
                <RotateCcw className="h-3.5 w-3.5" />
                <Plus className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Main Area: 2D Gradient Box + RGB Inputs */}
            <div className="mt-3 grid grid-cols-[1fr_80px] gap-3 items-center">
              {/* Color Gradient Box */}
              <div
                className="relative h-[82px] w-full rounded-xl overflow-hidden shadow-inner"
                style={{
                  background:
                    "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, #633ff8)",
                }}
              >
                <span className="absolute right-[24%] top-[20%] h-3.5 w-3.5 rounded-full border-2 border-white shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
              </div>

              {/* RGB Inputs */}
              <div className="flex flex-col gap-1 text-[10px]">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-sm border border-slate-500 inline-block" /> Hex
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Red</span>
                  <span className="font-mono font-bold">175</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Green</span>
                  <span className="font-mono font-bold">15</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Blue</span>
                  <span className="font-mono font-bold">68</span>
                </div>
              </div>
            </div>

            {/* Slider Bars */}
            <div className="mt-3 flex items-center gap-2">
              <Pipette className="h-3.5 w-3.5 text-slate-400" />
              <div className="flex-1 flex flex-col gap-1.5">
                {/* Hue Slider */}
                <div
                  className="relative h-2 w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg,#f43f5e,#f59e0b,#22c55e,#06b6d4,#2563eb,#a855f7,#f43f5e)",
                  }}
                >
                  <span className="absolute right-[22%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-black/40 bg-white shadow" />
                </div>
                {/* Opacity Slider */}
                <div
                  className="relative h-2 w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #633ff8)",
                  }}
                >
                  <span className="absolute right-[10%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-black/40 bg-white shadow" />
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-3 flex items-center justify-between gap-1 border-t border-white/10 pt-2.5">
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                  #633ff8
                </span>
                <span className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
                  100%
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] text-slate-400">Suggest Color</span>
                <div className="flex gap-1">
                  {["#633ff8", "#2563eb", "#4f46e5", "#06b6d4"].map((c) => (
                    <span
                      key={c}
                      className="h-3.5 w-3.5 rounded-full ring-1 ring-white/20"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. Left Node: URL Pill */}
          <div
            data-float
            className="absolute left-[0%] top-[56%] flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-mono font-semibold text-slate-600 shadow-[0_10px_24px_rgba(11,18,32,0.10)] ring-1 ring-slate-900/[0.06]"
          >
            <Lock className="h-3 w-3 text-slate-400" />
            <span>https://</span>
          </div>

          {/* 5. Center Viewport Switcher Capsule */}
          <div
            data-float
            className="absolute left-[20%] top-[48%] flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2 shadow-[0_14px_34px_rgba(11,18,32,0.12)] ring-1 ring-slate-900/[0.06]"
          >
            <div className="flex items-center gap-1">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white">
                <Laptop className="h-3.5 w-3.5" />
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400">
                <Tablet className="h-3.5 w-3.5" />
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400">
                <Smartphone className="h-3.5 w-3.5" />
              </span>
            </div>
            <span className="h-3.5 w-px bg-slate-200" />
            <span className="font-mono text-[11px] font-bold text-slate-600">
              1440Px / 60%
            </span>
          </div>

          {/* 6. Center Circular Node 'A' */}
          <div
            data-float
            className="absolute left-[44%] top-[55%] flex h-9 w-9 items-center justify-center rounded-full bg-[#0FB5BA] font-black text-white shadow-lg ring-4 ring-white"
          >
            A
          </div>

          {/* 7. Typography Card (Bottom Center) */}
          <div
            data-float
            className="absolute left-[22%] bottom-[2%] w-[210px] sm:w-[230px] rounded-3xl bg-[#0FB5BA] p-3.5 text-white shadow-[0_20px_46px_rgba(15,181,186,0.36)]"
          >
            <p className="text-[11px] font-bold">Typograhpy</p>

            {/* Alignment Icons */}
            <div className="mt-2 flex gap-1">
              {["left", "center", "right", "justify"].map((align, idx) => (
                <span
                  key={align}
                  className={`flex h-6 flex-1 items-center justify-center rounded-md text-[10px] ${
                    idx === 0 ? "bg-white text-teal-800 font-bold" : "bg-white/20 text-white"
                  }`}
                >
                  <span className="h-2 w-3 border-t-2 border-b-2 border-current block" />
                </span>
              ))}
            </div>

            {/* Font selector */}
            <div className="mt-2 flex items-center justify-between rounded-lg bg-white/20 px-2.5 py-1 text-[11px] font-bold backdrop-blur-sm">
              <span>Inter</span>
              <ChevronDown className="h-3 w-3 opacity-70" />
            </div>

            {/* Weight and Size */}
            <div className="mt-1.5 flex gap-1.5">
              <div className="flex flex-1 items-center justify-between rounded-lg bg-white/20 px-2 py-1 text-[11px] font-bold backdrop-blur-sm">
                <span>Semi Bold</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </div>
              <div className="flex w-14 items-center justify-between rounded-lg bg-white/20 px-2 py-1 text-[11px] font-bold backdrop-blur-sm">
                <span>36</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </div>
            </div>
          </div>

          {/* 8. Spacing Box Model Card (Bottom Right) */}
          <div
            data-float
            className="absolute right-[2%] bottom-[4%] w-[230px] sm:w-[250px] rounded-3xl bg-white p-3.5 shadow-[0_20px_46px_rgba(11,18,32,0.12)] ring-1 ring-slate-900/[0.06]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-800">Spacing</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </div>

            {/* Box Model Diagram */}
            <div className="mt-2.5 rounded-xl border border-dashed border-slate-300 p-2 text-center text-[9px] font-bold text-slate-400">
              <p className="mb-1">Auto</p>
              <div className="flex items-center justify-between px-1">
                <span>Auto</span>
                {/* Inner Purple Box */}
                <div className="my-1 flex h-8 flex-1 items-center justify-center rounded-lg border border-purple-400 bg-purple-50 px-2">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[8px] text-purple-600 font-bold">0</span>
                    <span className="h-2 w-7 rounded-full bg-purple-600" />
                    <span className="text-[8px] text-purple-600 font-bold">0</span>
                  </div>
                </div>
                <span>Auto</span>
              </div>
              <p className="mt-1">Auto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
