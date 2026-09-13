"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <section className="relative w-full flex flex-col overflow-hidden py-6 sm:py-12 bg-transparent">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center mb-6 px-4">
            <h2 className="text-balance text-[clamp(2.8rem,7vw,7.5rem)] font-black tracking-[-0.04em] text-slate-900 dark:text-white leading-[0.95] select-none uppercase">
              ONE WEBSITE.<br />
              <span className="text-slate-800 dark:text-slate-100">EVERY SCREEN.</span>
            </h2>
          </div>
        }
      >
        <div className="relative w-full h-full bg-slate-900 overflow-hidden flex flex-col">
          {/* Top Browser Bar Mockup */}
          <div className="h-8 bg-slate-800/90 border-b border-slate-700/60 px-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="px-6 py-0.5 rounded-md bg-slate-900/70 text-[10px] text-slate-400 dark:text-slate-400 font-mono flex items-center gap-1.5">
              <span>https://campus.institution.edu</span>
            </div>
            <div className="w-10" />
          </div>

          {/* Website Content Inside Monitor */}
          <div className="relative flex-1 w-full h-full overflow-hidden">
            <img
              src="/assets/frames/frame_001.jpg"
              alt="Campus Institution Experience"
              className="w-full h-full object-cover object-top select-none"
              draggable={false}
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/talent-ai.png";
              }}
            />
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}

export default HeroScrollDemo;

