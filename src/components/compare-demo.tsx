import React from "react";
import { Compare } from "@/components/ui/compare";
import { motion } from "motion/react";

export default function CompareDemo() {
  return (
    <section className="relative w-full mt-12 md:mt-20 pt-16 pb-20 md:pt-28 md:pb-28 flex flex-col items-center">
        <div className="w-full max-w-[94vw] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Main Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mb-10 md:mb-16"
          >
            <h2 className="text-balance text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-6">
              Experience the Difference
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-normal max-w-4xl mx-auto leading-relaxed text-pretty">
              Slide to compare traditional sluggish workflows with the ultra-optimized, lightning-fast architecture powered by WebXite.
            </p>
          </motion.div>

          {/* Comparison Area with Hand-Drawn Annotations & Arrows */}
          <div className="relative w-full pt-20 sm:pt-28 md:pt-36 lg:pt-40">
            {/* Left Annotation: Without WebXite (Big Black, moved sideways) */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="absolute top-0 left-0 md:-left-4 lg:-left-10 xl:-left-14 z-30 flex flex-col items-center select-none pointer-events-none"
            >
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight font-serif italic drop-shadow-sm">
                Without WebXite
              </span>
              {/* Hand-drawn sketchy curved loop arrow pointing to the left side */}
              <svg
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 text-slate-950 -mt-1 sm:-mt-3 -scale-x-100 rotate-12"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Swirling hand-drawn loop */}
                <path d="M 35 15 C 20 30, 15 50, 30 60 C 45 68, 55 45, 38 40 C 20 35, 18 75, 45 88" />
                {/* Arrowhead */}
                <path d="M 32 86 L 47 89 L 46 74" />
              </svg>
            </motion.div>

            {/* Right Annotation: With WebXite (Big Black, moved sideways) */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="absolute top-0 right-0 md:-right-4 lg:-right-10 xl:-right-14 z-30 flex flex-col items-center select-none pointer-events-none"
            >
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight font-serif italic drop-shadow-sm">
                With WebXite
              </span>
              {/* Hand-drawn sketchy curved loop arrow pointing to the right side */}
              <svg
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 text-slate-950 -mt-1 sm:-mt-3 -rotate-12"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Swirling hand-drawn loop */}
                <path d="M 35 15 C 20 30, 15 50, 30 60 C 45 68, 55 45, 38 40 C 20 35, 18 75, 45 88" />
                {/* Arrowhead */}
                <path d="M 32 86 L 47 89 L 46 74" />
              </svg>
            </motion.div>

            {/* Wide Widescreen Comparison Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] rounded-2xl md:rounded-3xl overflow-hidden border border-slate-300/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] bg-slate-950"
            >
              <Compare
                firstImage="/without-webxite.png"
                secondImage="/with-webxite.png"
                firstImageClassName="object-cover object-top"
                secondImageClassname="object-cover object-top"
                className="w-full h-full"
                slideMode="hover"
                showHandlebar={true}
                autoplay={true}
                autoplayDuration={6000}
                initialSliderPercentage={50}
              />
            </motion.div>
          </div>
        </div>
    </section>
  );
}
export { CompareDemo };
