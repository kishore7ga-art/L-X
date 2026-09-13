import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HeroParallaxDemo } from "@/components/hero-parallax-demo";
import { CompareDemo } from "@/components/compare-demo";
import { ScrollSequenceSection } from "@/components/scroll-sequence-section";
import { FeaturesControl } from "@/components/features-control";
import { FAQSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";
import { useTheme } from "@/components/theme-provider";

/* Ambient colour laid down the length of the page — blue, violet, cyan,
   indigo and rose, each soft enough to read as light rather than paint. */
const AMBIENT_GLOWS = [
  // ---- how it works / compare ----
  { position: "-left-[14vw] top-[9%]",   size: "w-[60vw] h-[44vh]", blur: "130px", color: "rgba(59, 130, 246, 0.72)" },
  { position: "-right-[10vw] top-[14%]", size: "w-[54vw] h-[40vh]", blur: "135px", color: "rgba(139, 92, 246, 0.66)" },
  { position: "left-[24vw] top-[20%]",   size: "w-[50vw] h-[36vh]", blur: "140px", color: "rgba(34, 211, 238, 0.62)" },
  { position: "-right-[8vw] top-[26%]",  size: "w-[52vw] h-[38vh]", blur: "135px", color: "rgba(232, 121, 249, 0.58)" },

  // ---- showcase / cinematic sequence ----
  { position: "-left-[12vw] top-[32%]",  size: "w-[58vw] h-[42vh]", blur: "135px", color: "rgba(99, 102, 241, 0.70)" },
  { position: "right-[6vw] top-[38%]",   size: "w-[50vw] h-[36vh]", blur: "140px", color: "rgba(52, 211, 153, 0.56)" },
  { position: "-left-[10vw] top-[44%]",  size: "w-[54vw] h-[40vh]", blur: "135px", color: "rgba(56, 189, 248, 0.64)" },

  // ---- features / design ----
  { position: "-right-[10vw] top-[50%]", size: "w-[56vw] h-[40vh]", blur: "135px", color: "rgba(244, 114, 182, 0.64)" },
  { position: "left-[8vw] top-[56%]",    size: "w-[50vw] h-[38vh]", blur: "140px", color: "rgba(251, 191, 36, 0.52)" },
  { position: "-right-[12vw] top-[62%]", size: "w-[58vw] h-[42vh]", blur: "135px", color: "rgba(168, 85, 247, 0.68)" },
  { position: "left-[22vw] top-[68%]",   size: "w-[48vw] h-[34vh]", blur: "140px", color: "rgba(45, 212, 191, 0.54)" },

  // ---- bridge / discovery ----
  { position: "-left-[12vw] top-[74%]",  size: "w-[58vw] h-[42vh]", blur: "135px", color: "rgba(96, 165, 250, 0.70)" },
  { position: "right-[2vw] top-[80%]",   size: "w-[52vw] h-[38vh]", blur: "140px", color: "rgba(192, 132, 252, 0.64)" },
  { position: "-left-[8vw] top-[86%]",   size: "w-[52vw] h-[38vh]", blur: "135px", color: "rgba(251, 113, 133, 0.58)" },

  // ---- faq / run-out ----
  { position: "right-[8vw] top-[92%]",   size: "w-[50vw] h-[36vh]", blur: "140px", color: "rgba(129, 140, 248, 0.66)" },
  { position: "-left-[10vw] top-[97%]",  size: "w-[54vw] h-[38vh]", blur: "140px", color: "rgba(34, 211, 238, 0.56)" },
] as const;

export function App() {
  const { resolved } = useTheme();
  const isDark = resolved === "dark";

  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-clip bg-white text-black transition-colors duration-500 selection:bg-slate-200 dark:bg-[#070910] dark:text-slate-100 dark:selection:bg-blue-500/30">
      {/* Fixed Site Header */}
      <Navbar />

      {/* Five coloured ambient glows, scattered down the whole page.
          The hero ground below paints over the top of these, so the hero
          itself stays clean and only the sections beneath pick up colour. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {AMBIENT_GLOWS.map((glow, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${glow.position} ${glow.size}`}
            style={{
              filter: `blur(${glow.blur})`,
              opacity: isDark ? 0.38 : 1,
              background: `radial-gradient(circle, ${glow.color} 0%, transparent 70%)`,
            }}
          />
        ))}
      </div>

      {/* Page-level ground: the hero's deeper wash, dissolving into the page
          over 160vh so no section boundary ever shows a seam. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[160vh] overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(180deg, #101A33 0%, #0D1628 16%, #0A1020 46%, rgba(7,9,16,0) 100%)"
              : "linear-gradient(180deg, #D6E2F6 0%, #C9D9F1 16%, #DBE6F8 46%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="absolute -left-[10%] top-[1%] h-[52%] w-[62%] rounded-full blur-[130px]"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(76,116,200,0.42) 0%, rgba(76,116,200,0) 70%)"
              : "radial-gradient(circle, rgba(112,150,215,0.45) 0%, rgba(112,150,215,0) 70%)",
          }}
        />
        <div
          className="absolute -right-[10%] top-[7%] h-[48%] w-[56%] rounded-full blur-[130px]"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(120,86,220,0.34) 0%, rgba(120,86,220,0) 70%)"
              : "radial-gradient(circle, rgba(88,124,198,0.36) 0%, rgba(88,124,198,0) 70%)",
          }}
        />
      </div>

      {/* Main Sections */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Hero Section */}
        <section id="hero" className="w-full">
          <HeroSection />
        </section>

        {/* Compare / Transformation Studio */}
        <section id="compare" className="w-full">
          <CompareDemo />
        </section>

        {/* Hero Parallax Institution Showcase (Mentors / Showcase) */}
        <section id="showcase" className="w-full">
          <HeroParallaxDemo />
        </section>

        {/* Features / Control - capabilities after the cinematic sequence */}
        <section id="features" className="w-full">
          <FeaturesControl />
        </section>

        {/* 300-Frame Hardware Accelerated Image Sequence */}
        <section id="experience" className="w-full">
          <ScrollSequenceSection />
        </section>

        {/* Frequently Asked Questions (FAQ / Blogs) */}
        <section id="faq" className="w-full">
          <FAQSection />
        </section>

      </div>

      {/* Dark HybridClay Footer */}
      <SiteFooter />
    </main>
  );
}

export default App;


