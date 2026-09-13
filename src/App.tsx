import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { HeroParallaxDemo } from "@/components/hero-parallax-demo";
import { CompareDemo } from "@/components/compare-demo";
import { ScrollSequenceSection } from "@/components/scroll-sequence-section";
import { FeaturesControl } from "@/components/features-control";
import { FAQSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";
import { useTheme } from "@/components/theme-provider";

/*
 * Sections that were already built and rendered nowhere.
 *
 * Twenty-eight components existed in src/components and App.tsx mounted eight.
 * The rest were not experiments — pricing, the how-it-works walkthrough, the
 * SEO/AEO/GEO explainer and the design-identity gallery were finished work that
 * no visitor could reach. Bringing them in is most of this change; almost
 * nothing new had to be written.
 */
import { HowItWorks } from "@/components/how-it-works";
import { InfiniteMovingCardsDemo } from "@/components/infinite-moving-cards-demo";
import { DesignIdentitySection } from "@/components/design-identity-section";
import { DesignToDiscovery } from "@/components/design-to-discovery";
import { DiscoverabilitySection } from "@/components/discoverability-section";
import { PricingSection } from "@/components/pricing-section";
import { SIGN_UP_URL } from "@/env";

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
      {/*
        No site header.
        
        Removed on request. What went with it, so it is findable later: the
        brand mark, the in-page section nav, the theme toggle, and the only
        "Sign in" link on the page. New visitors still reach signup from the
        hero, the pricing cards and the closing call to action; a returning user
        has no link back into the editor from here and has to know the address.
        
        Navbar.tsx is kept rather than deleted — it is a working component and
        re-mounting it is one line.
      */}

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
        {/*
          Order follows the Trust & Authority + Conversion pattern, which is
          what a buyer of institutional software actually reads in:
          mission, then proof, then the mechanism, then the price, then their
          objections, then one way to act.

          The previous order put the cinematic frame sequence and a parallax
          showcase before anything explaining what the product does, and never
          reached a price at all — pricing-section existed and was mounted
          nowhere. A visitor could scroll the entire page and not learn what it
          cost or how it worked.
        */}

        {/* 1 — Hero: the claim */}
        <section id="hero" className="w-full">
          <HeroSection />
        </section>

        {/* 2 — Proof, before the explanation. Somebody deciding whether to keep
               reading wants evidence, not a feature list. */}
        <section id="proof" className="w-full">
          <InfiniteMovingCardsDemo />
        </section>

        {/* 3 — Before and after. The single most legible claim on the page, and
               a Trust & Authority staple: show the change, do not describe it. */}
        <section id="compare" className="w-full">
          <CompareDemo />
        </section>

        {/* 4 — The mechanism, in three steps. Was built and unreachable. */}
        <section id="how-it-works" className="w-full">
          <HowItWorks />
        </section>

        {/* 5 — What it can do */}
        <section id="features" className="w-full">
          <FeaturesControl />
        </section>

        {/* 6 — Design identity: the part an institution's committee argues
               about, answered before they have to ask. */}
        <section id="design" className="w-full">
          <DesignIdentitySection />
        </section>

        {/* 7 — The bridge between looking good and being found */}
        <section id="bridge" className="w-full">
          <DesignToDiscovery />
        </section>

        {/* 8 — SEO, AEO and GEO. The strongest differentiator on the page and
               it was rendering nowhere. */}
        <section id="discoverability" className="w-full">
          <DiscoverabilitySection />
        </section>

        {/* 9 — Showcase */}
        <section id="showcase" className="w-full">
          <HeroParallaxDemo />
        </section>

        {/* 10 — The frame sequence. Kept, and moved late: it is the most
                expensive thing on the page and the least informative, so it
                earns its place as a reward rather than a toll. */}
        <section id="experience" className="w-full">
          <ScrollSequenceSection />
        </section>

        {/* 11 — Price. Transparent pricing is itself a trust signal for
                institutional buyers, and this section already existed. */}
        <section id="pricing" className="w-full">
          <PricingSection />
        </section>

        {/* 12 — Objections */}
        <section id="faq" className="w-full">
          <FAQSection />
        </section>

        {/* 13 — One clear way to act.
                 The page had no closing call to action at all: it ended on an
                 FAQ and then the footer, so a reader who was convinced by the
                 last answer had nothing to press. */}
        <section id="get-started" className="w-full px-6 py-24 sm:px-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900 dark:text-white">
              Your institution&rsquo;s website, live this week
            </h2>
            <p className="max-w-xl text-[1.0625rem] leading-relaxed text-slate-600 dark:text-slate-300">
              Build it, publish it, connect your own domain. No developers to brief and
              no hosting to manage.
            </p>
            <a
              href={SIGN_UP_URL}
              className="inline-flex items-center justify-center rounded-full bg-[#16A34A] px-10 py-4 text-[1.0625rem] font-semibold text-white no-underline shadow-[0_8px_24px_rgba(22,163,74,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15803D] hover:shadow-[0_14px_32px_rgba(22,163,74,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/50 focus-visible:ring-offset-2"
            >
              Get started free
            </a>
            <p className="text-[0.9375rem] text-slate-500 dark:text-slate-400">
              No credit card required.
            </p>
          </div>
        </section>

      </div>

      {/* Dark HybridClay Footer */}
      <SiteFooter />
    </main>
  );
}

export default App;


