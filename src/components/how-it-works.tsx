"use client";
import React from "react";
import { motion } from "motion/react";
import { Plug, Settings2, Rocket } from "lucide-react";
import {
  GradientCardShowcase,
  type SkewCardItem,
} from "@/components/ui/gradient-card-showcase";

const STEPS: SkewCardItem[] = [
  {
    index: "01",
    badge: "2 minutes",
    title: "Sign Up & Connect",
    desc: "Create your workspace and connect your existing domain, CMS, and data sources. No migration, no downtime, no engineering ticket.",
    icon: Plug,
    gradientFrom: "#38bdf8",
    gradientTo: "#2563eb",
  },
  {
    index: "02",
    badge: "No code",
    title: "Customize & Configure",
    desc: "Shape layouts, typography, and brand tokens in a live editor. Every change previews instantly across desktop, tablet, and mobile.",
    icon: Settings2,
    gradientFrom: "#818cf8",
    gradientTo: "#4f46e5",
  },
  {
    index: "03",
    badge: "Global edge",
    title: "Launch & Scale",
    desc: "Ship to a multi-region edge network in one click. Traffic spikes, new campuses, and new campaigns scale without a replatform.",
    icon: Rocket,
    gradientFrom: "#c084fc",
    gradientTo: "#7c3aed",
  },
];

export function HowItWorks() {
  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* ---------- Heading ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center md:mb-20"
      >
        <h2 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Live in three steps
        </h2>

        <p className="mt-6 text-lg font-normal leading-relaxed text-pretty text-slate-600 dark:text-slate-300 sm:text-xl md:text-2xl">
          From first login to a production site on the edge. No agencies, no
          six-month timelines, no surprises.
        </p>
      </motion.div>

      {/* ---------- Steps ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <GradientCardShowcase cards={STEPS} />
      </motion.div>

    </section>
  );
}

export default HowItWorks;
