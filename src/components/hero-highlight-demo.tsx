"use client";
import React from "react";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { 
  Zap, 
  TrendingUp, 
  Cpu, 
  Globe2, 
  Sparkles, 
  ShieldCheck, 
  ArrowUpRight 
} from "lucide-react";

export function HeroHighlightDemo() {
  return (
    <section className="relative w-full py-12 md:py-20 flex flex-col items-center justify-center overflow-hidden">
      <HeroHighlight containerClassName="py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column (Red Box Area): Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start text-left z-20"
            >
              <h2 className="text-balance text-3xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.2rem] font-black text-slate-900 dark:text-white leading-[1.15] sm:leading-[1.15] tracking-tight">
                Most agencies build slow, static templates. WebXite engineers{" "}
                <Highlight className="text-slate-950 font-black">
                  high-converting, interactive web platforms
                </Highlight>{" "}
                that turn casual visitors into loyal customers with{" "}
                <Highlight className="text-slate-950 font-black">
                  lightning speed
                </Highlight>
                .
              </h2>

              <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-pretty max-w-xl">
                Engineered for 10x speed, 3D interactivity, and relentless ROI.
              </p>
            </motion.div>

            {/* Right Column: 3D Floating WebXite Elements (Circles Area) */}
            <div className="lg:col-span-5 relative w-full h-[460px] sm:h-[500px] flex items-center justify-center">
              {/* Background Atmospheric Glow Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-400/20 via-purple-400/20 to-pink-400/20 blur-3xl" />
                <div className="w-48 h-48 rounded-full border border-indigo-200/40 animate-[spin_30s_linear_infinite]" />
                <div className="w-80 h-80 rounded-full border border-purple-200/30 animate-[spin_45s_linear_infinite_reverse]" />
              </div>

              {/* 3D Element 1: Top-Left Circle (Speed & Lighthouse Score) */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -12, 0],
                  rotateZ: [-1, 2, -1],
                }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.06, rotateY: 10, rotateX: -5 }}
                className="absolute top-2 left-2 sm:left-4 z-30 group cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <div className="relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 shadow-[0_20px_40px_-15px_rgba(99,102,241,0.25)] transition-all duration-300 group-hover:border-indigo-400/80 group-hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.35)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-400/30">
                      <Zap className="w-5 h-5 fill-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Speed Score</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">100/100</span>
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                        &lt; 0.3s <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">FCP</span>
                      </div>
                    </div>
                  </div>
                  {/* Mini Progress Bar */}
                  <div className="mt-3 w-36 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-full rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* 3D Element 2: Top-Right Circle (Conversion & 3D Interactive UI) */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, 14, 0],
                  rotateZ: [2, -2, 2],
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                }}
                whileHover={{ scale: 1.06, rotateY: -10, rotateX: 5 }}
                className="absolute top-6 right-2 sm:right-4 z-20 group cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <div className="relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 shadow-[0_20px_40px_-15px_rgba(168,85,247,0.25)] transition-all duration-300 group-hover:border-purple-400/80 group-hover:shadow-[0_25px_50px_-12px_rgba(168,85,247,0.35)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/30">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Conversion</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        +310% ROI
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Interactive 3D Elements
                  </div>
                </div>
              </motion.div>

              {/* 3D Element 3: Center-Left Overlapping Circle (Type-Safe 60 FPS Engine) */}
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [-2, 1, -2],
                }}
                transition={{
                  y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  rotateZ: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                }}
                whileHover={{ scale: 1.06, rotateY: 12, rotateX: 6 }}
                className="absolute top-[48%] left-4 sm:left-6 z-30 group cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <div className="relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 text-white shadow-[0_25px_50px_-15px_rgba(15,23,42,0.5)] transition-all duration-300 group-hover:border-indigo-500/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">Architecture</div>
                      <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        <span>React 19</span>
                        <span className="text-[11px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">TS</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>60 FPS Micro-Interactions</span>
                  </div>
                </div>
              </motion.div>

              {/* 3D Element 4: Bottom-Right Circle (Global Edge CDN Network) */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, 12, 0],
                  rotateZ: [1, -2, 1],
                }}
                transition={{
                  y: { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                  rotateZ: { duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                }}
                whileHover={{ scale: 1.06, rotateY: -12, rotateX: -6 }}
                className="absolute bottom-4 right-2 sm:right-6 z-20 group cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <div className="relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 shadow-[0_20px_40px_-15px_rgba(59,130,246,0.25)] transition-all duration-300 group-hover:border-cyan-400/80 group-hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.35)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/30">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Global Edge CDN</div>
                      <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                        99.99% <span className="text-xs font-semibold text-emerald-600">Uptime</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center justify-between">
                    <span>Latency: &lt;12ms</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">Multi-Region</span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}

export default HeroHighlightDemo;
