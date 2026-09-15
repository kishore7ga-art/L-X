import React from "react";

import { SiteHeader } from "@/site/SiteHeader";
import { Hero } from "@/site/Hero";
import { Pillars, Marquee, FinalCta } from "@/site/Sections";
import { Steps } from "@/site/Steps";
import { Templates, Split } from "@/site/Templates";
import { Essentials } from "@/site/Essentials";
import { Story } from "@/site/Story";
import { Blog } from "@/site/Blog";

import { FAQSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";

/**
 * The landing page.
 *
 * ── Why this is a rebuild rather than an edit ───────────────────────────────
 *
 * The previous page was fifteen scroll-driven set pieces — a parallax wall, a
 * 300-frame image sequence, a Three.js scene, sixteen blurred colour washes
 * layered down the full height — and between them it never said what the
 * product cost or how it worked. The sections that did say those things existed
 * in the repository and were mounted nowhere.
 *
 * This one is arranged the way somebody evaluating software reads: the claim,
 * proof it works, the mechanism, what it looks like, what it costs, their
 * objections, then one way to act. Motion is present throughout but subordinate
 * to that order rather than the reason for it.
 *
 * ── Motion discipline ──────────────────────────────────────────────────────
 *
 * Every animated section checks `prefers-reduced-motion` and renders its final
 * composition when it is set — not a degraded version, the same layout without
 * the movement. Reveals are IntersectionObserver-driven and disconnect after
 * firing; nothing on this page runs a scroll handler except the header, which
 * reads one boolean.
 *
 * ── The ambient wash is gone ───────────────────────────────────────────────
 *
 * Sixteen blurred radial gradients, each 40-60vw, composited on every frame of
 * every scroll. They were the single most expensive thing on the page and their
 * whole contribution was a faint tint. What is left is one wash behind the hero
 * collage and the brand gradient where it carries meaning: the announcement
 * bar, the highlight, the marquee and the closing panel.
 */
export function App() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-clip bg-white font-['Plus_Jakarta_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      <SiteHeader />

      {/* 1 — The claim, and the product mid-edit beside it */}
      <Hero />

      {/* 2 — Three reasons, in one band, immediately under the fold */}
      <Pillars />

      {/* 3 — The mechanism: three numbered steps and a published page */}
      <Steps />

      {/* 4 — A moving line, purely to break the rhythm between two long
             light sections. The only decorative element on the page, and it
             stops dead under reduced-motion. */}
      <Marquee />

      {/* 5 — What it does, as two halves of one statement */}
      <Split />

      {/* 6 — What it looks like */}
      <Templates />

      {/* 6.5 — All the essentials, included */}
      <Essentials />

      {/* 7.5 — Making every day is Friday / Story */}
      <Story />

      {/* 7.8 — Resources, Inspiration and Tips / Blog */}
      <Blog />

      {/* 8 — Objections / Support FAQ */}
      <FAQSection />

      {/* 9 — One clear way to act */}
      <FinalCta />

      <SiteFooter />
    </main>
  );
}

export default App;
