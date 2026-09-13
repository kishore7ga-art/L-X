"use client";

import React from "react";
import { InfiniteMovingCards, FeatureCardItem } from "@/components/ui/infinite-moving-cards";
import { motion } from "motion/react";
import { Zap } from "lucide-react";

export function InfiniteMovingCardsDemo() {
  return (
    <section className="relative w-full py-16 md:py-24 flex flex-col items-center overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl px-4 mb-10 md:mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/75 shadow-sm backdrop-blur-md mb-4">
          <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 fill-indigo-600" />
          <span className="text-xs font-bold tracking-wider uppercase text-slate-800 dark:text-slate-100">
            The WebXite Capabilities & Architecture
          </span>
        </div>
        <h2 className="text-balance text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4">
          Engineered for 10x Speed & <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Maximum Conversion
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed text-pretty">
          Explore the core architecture, interactive innovations, and high-performance engineering that power every WebXite digital experience.
        </p>
      </motion.div>

      {/* Row 1: Scrolling Left */}
      <div className="w-full flex flex-col gap-6">
        <InfiniteMovingCards
          items={webxiteFeaturesRow1}
          direction="left"
          speed="normal"
          className="w-full"
        />

        {/* Row 2: Scrolling Right */}
        <InfiniteMovingCards
          items={webxiteFeaturesRow2}
          direction="right"
          speed="normal"
          className="w-full"
        />
      </div>
    </section>
  );
}

const webxiteFeaturesRow1: FeatureCardItem[] = [
  {
    icon: "⚡",
    tag: "Speed",
    stat: "< 0.3s FCP",
    title: "Sub-Second Load Velocity",
    description:
      "Engineered on ultra-light modern bundling with asset preloading and zero bloat, achieving a flawless 99+ Google Lighthouse performance score.",
  },
  {
    icon: "🎯",
    tag: "Growth",
    stat: "+310% ROI",
    title: "Conversion-Driven Layouts",
    description:
      "Every headline, CTA placement, and scroll journey is psychologically structured to guide users and turn casual traffic into qualified revenue.",
  },
  {
    icon: "🚀",
    tag: "Velocity",
    stat: "4-Day Delivery",
    title: "Rapid Sprint Deployment",
    description:
      "Go from initial concept and design sign-off to full-stack production deployment in days without sacrificing a single pixel of quality.",
  },
  {
    icon: "🛡️",
    tag: "Architecture",
    stat: "100% Typed",
    title: "Strict TypeScript Foundation",
    description:
      "Modular, maintainable, and type-safe component hierarchy ensuring zero runtime errors and seamless future feature expansion.",
  },
];

const webxiteFeaturesRow2: FeatureCardItem[] = [
  {
    icon: "🎨",
    tag: "Experience",
    stat: "60 FPS Motion",
    title: "Physics-Based Micro-Interactions",
    description:
      "Delightful, responsive animations and 3D perspective transforms powered by GPU-accelerated Motion and GSAP engines.",
  },
  {
    icon: "📱",
    tag: "Responsive",
    stat: "All Viewports",
    title: "Adaptive Fluid Responsiveness",
    description:
      "Flawlessly tested across mobile smartphones, foldable screens, tablets, laptops, and ultra-wide 4K retina desktop monitors.",
  },
  {
    icon: "🔍",
    tag: "Visibility",
    stat: "#1 SEO Rank",
    title: "Deep Search Engine Dominance",
    description:
      "Automated semantic schemas, dynamic OpenGraph meta previews, and instant server rendering for maximum organic discovery.",
  },
  {
    icon: "🌐",
    tag: "Infrastructure",
    stat: "99.99% Uptime",
    title: "Global Multi-Region Edge CDN",
    description:
      "Distributed across 300+ global edge nodes with automated SSL, DDoS mitigation, and sub-millisecond DNS routing worldwide.",
  },
];

export default InfiniteMovingCardsDemo;

