"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

import { CONTAINER } from "./tokens";
import { SIGN_UP_URL } from "@/env";

export function Story() {
  return (
    <section id="story" className="relative z-30 w-full bg-white py-20 sm:py-28 overflow-hidden">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* -- Left: Organic Multi-Capsule Image Mask --------------------- */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-[540px]">
              <svg viewBox="0 0 600 500" className="w-full h-auto drop-shadow-2xl">
                <defs>
                  <clipPath id="capsule-cluster">
                    {/* 4 overlapping vertical rounded capsules */}
                    <rect x="40" y="80" width="150" height="340" rx="75" />
                    <rect x="150" y="25" width="170" height="450" rx="85" />
                    <rect x="280" y="60" width="165" height="380" rx="82.5" />
                    <rect x="410" y="110" width="140" height="280" rx="70" />
                  </clipPath>
                </defs>
                <image
                  href="/showcase/team-collaboration.jpg"
                  x="0"
                  y="0"
                  width="600"
                  height="500"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#capsule-cluster)"
                />
              </svg>
            </div>
          </div>

          {/* -- Right: Story Content --------------------------------------- */}
          <div className="flex flex-col items-start">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-3">
              BUILT FOR MODERN CAMPUSES
            </p>

            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-slate-900 mb-6">
              Empowering institutions to build their{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600">
                digital presence
              </span>
            </h2>

            <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-600 mb-4 font-normal">
              Academic institutions have long struggled with outdated, rigid legacy CMS platforms
              that require complex IT backlogs just to update a departmental syllabus, publish campus
              news, or launch admissions landing pages. We built WebXite to give admissions teams,
              faculty leaders, and campus administrators total creative freedom without writing a single
              line of code.
            </p>

            <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-600 mb-8 font-normal">
              From university-wide portals to specialized department hubs, research labs, and student
              event showcases, WebXite combines enterprise-grade SSL security, 99.99% uptime, and
              sub-second edge performance with intuitive visual editing. We believe every campus deserves
              a fast, world-class website that inspires students, faculty, and alumni.
            </p>

            <a
              href={SIGN_UP_URL}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-800 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5"
            >
              Explore our platform
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
