"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function InnovationSection() {
  return (
    <section className="relative w-full py-16 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <span className="text-sm sm:text-base font-semibold text-[#ff4d6d] mb-3 tracking-wide">
            Innovate &amp; Grow
          </span>

          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
            Scale Your Business Through Innovation
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-pretty font-normal">
            Transform your startup&apos;s potential through innovative solutions and strategic growth. We help businesses adapt, evolve, and thrive in today&apos;s competitive marketplace.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#ff4d6d] hover:bg-[#e63955] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md shadow-red-500/20 hover:shadow-lg group"
          >
            <span>Start Scaling Today</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Column: Masonry Image Graphics */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6 items-start">
          {/* Left Sub-column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 dark:bg-slate-800 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop"
                alt="Innovative artwork and design"
                className="w-full h-56 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 dark:bg-slate-800 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
                alt="Aerial pedestrian crossing"
                className="w-full h-44 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Sub-column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 dark:bg-slate-800 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
                alt="Passion Led Us Here workspace"
                className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 dark:bg-slate-800 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop"
                alt="Vibrant architectural street banners"
                className="w-full h-52 sm:h-68 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default InnovationSection;
