import React, { useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatePresence, motion } from "motion/react";
import { Sparkles, ArrowUpRight, Globe, Layers } from "lucide-react";

interface ShowcaseItem {
  word: string;
  badge: string;
  title: string;
  tagline: string;
  image: string;
  accent: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    word: "better",
    badge: "Performance",
    title: "Simple & Powerful Experiences",
    tagline: "I design and develop experiences that make people's lives simple.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop&q=80",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    word: "cute",
    badge: "Creative Studio",
    title: "Playful Brand Design",
    tagline: "Vibrant creative aesthetics and engaging modern interfaces.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&auto=format&fit=crop&q=80",
    accent: "from-pink-500 to-rose-500",
  },
  {
    word: "beautiful",
    badge: "Minimal Aesthetics",
    title: "Clean Minimalist Typography",
    tagline: "Pixel-perfect visual rhythm and elegant workspace design.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&auto=format&fit=crop&q=80",
    accent: "from-amber-500 to-orange-600",
  },
  {
    word: "modern",
    badge: "Modern Analytics",
    title: "Next-Gen Data & Interfaces",
    tagline: "Real-time insights and high-converting modern web design.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80",
    accent: "from-blue-500 to-cyan-500",
  },
];

export function FlipWordsDemo() {
  const words = SHOWCASE_ITEMS.map((item) => item.word);

  return (
    <section className="w-full pt-12 pb-36 flex flex-col items-center justify-center px-4 sm:px-8 bg-transparent">
      {/* Synchronized Headline */}
      <div className="text-[clamp(3.5rem,8.5vw,7.8rem)] max-w-[1450px] mx-auto font-medium text-[#0a0c10] text-center leading-[1.06] tracking-[-0.04em]">
        Build
        <FlipWords
          words={words}
          className="text-blue-600 dark:text-blue-400 font-bold px-2.5 sm:px-5"
        />
        <br />
        websites with WebXite
      </div>
    </section>
  );
}

export default FlipWordsDemo;

