"use client";
import React, { useId, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Directory columns                                                  */
/* ------------------------------------------------------------------ */

interface FooterColumn {
  title: string;
  links: string[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "PLATFORM",
    links: ["Visual Builder", "Campus Templates", "Admissions Hub", "Custom .EDU Domains"],
  },
  {
    title: "SOLUTIONS",
    links: ["Universities", "Colleges", "Academic Departments", "Research Labs"],
  },
  {
    title: "COMPLIANCE",
    links: ["FERPA Ready", "WCAG 2.1 AA", "GDPR Compliant", "256-Bit SSL"],
  },
  {
    title: "RESOURCES",
    links: ["Documentation", "Campus Blog", "Help Center", "Community Forum"],
  },
  {
    title: "FOLLOW US",
    links: ["LinkedIn", "Twitter / X", "YouTube", "GitHub"],
  },
];

const TRADEMARK = "™";
const COPYRIGHT = "©";

/* ------------------------------------------------------------------ */
/*  Brand mark: two diagonal parallelogram bars                        */
/* ------------------------------------------------------------------ */

const BrandMark = () => (
  <svg viewBox="0 0 32 32" className="h-[26px] w-[26px] shrink-0" aria-hidden="true">
    <defs>
      <linearGradient id="wx-footer-mark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F43F5E" />
        <stop offset="30%" stopColor="#D946EF" />
        <stop offset="65%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#14B8A6" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="9" fill="url(#wx-footer-mark)" />
    <path
      d="M8.5 11 L12.4 21 L16 13.6 L19.6 21 L23.5 11"
      fill="none"
      stroke="#fff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Certification Badge                                                */
/* ------------------------------------------------------------------ */

const ComplianceBadge = ({ label, code }: { label: string; code: string }) => (
  <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold text-slate-300 transition-colors hover:border-rose-400 hover:text-white">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
    <span>{label}</span>
    <span className="text-[9px] text-slate-500">{code}</span>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Giant interactive striped watermark                                */
/* ------------------------------------------------------------------ */

const STRIPES_BASE =
  "repeating-linear-gradient(45deg, #24242e 0px, #24242e 2px, #0d0d12 2px, #0d0d12 7px)";

const STRIPES_BRIGHT =
  "linear-gradient(90deg, #F43F5E 0%, #D946EF 25%, #8B5CF6 50%, #3B82F6 75%, #14B8A6 100%)";

const WATERMARK_WORD = "WEBXITE";

const WATERMARK_REPEATS = 4;

const WATERMARK_WORD_CLASS =
  "block whitespace-nowrap font-black uppercase leading-[0.82] tracking-[-0.03em] text-[19vw] pr-[5vw] select-none";

/* One scrolling track. Two of these are layered - a dim base and a bright
 * copy revealed through the cursor mask - and they share one animation
 * name/duration so they stay in lockstep. */
const MarqueeTrack = ({ stripes }: { stripes: string }) => (
  <div className="watermark-marquee flex w-max items-center">
    {Array.from({ length: WATERMARK_REPEATS }).map((_, i) => (
      <span
        key={i}
        aria-hidden="true"
        className={WATERMARK_WORD_CLASS}
        style={{
          backgroundImage: stripes,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {WATERMARK_WORD}
      </span>
    ))}
  </div>
);

const Watermark = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Radial window that brightens the stripes around the pointer. It lives on
  // the static wrapper, not the track, so it stays put while the text scrolls.
  const revealMask = `radial-gradient(circle 150px at ${pos.x}px ${pos.y}px, #000 0%, rgba(0,0,0,0.55) 55%, transparent 100%)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setPos({ x: -9999, y: -9999 });
      }}
      className="relative w-full overflow-hidden cursor-none"
      aria-label={WATERMARK_WORD}
    >
      {/* Base layer: dim diagonal stripes clipped to the glyphs */}
      <MarqueeTrack stripes={STRIPES_BASE} />

      {/* Reveal layer: bright stripes, masked to a circle at the cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          WebkitMaskImage: revealMask,
          maskImage: revealMask,
          opacity: isHovering ? 1 : 0,
        }}
      >
        <MarqueeTrack stripes={STRIPES_BRIGHT} />
      </div>

      {/* Custom circular cursor with colorful glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full border border-rose-400/90 shadow-[0_0_20px_rgba(244,63,94,0.75)] transition-opacity duration-200"
        style={{
          width: 38,
          height: 38,
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: isHovering ? 1 : 0,
        }}
      />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export function SiteFooter() {
  return (
    <footer
      className="relative z-20 w-full overflow-hidden bg-[#0a0a0a] text-white antialiased font-['Inter','Helvetica_Neue',Helvetica,Arial,sans-serif]"
      style={{
        background: "radial-gradient(ellipse at 50% 100%, rgba(244,63,94,0.08) 0%, rgba(139,92,246,0.06) 40%, #0a0a0a 80%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
        {/* ---------- 1. Contact ---------- */}
        <div className="grid grid-cols-1 gap-10 pt-24 sm:pt-32 md:grid-cols-2 md:gap-16 lg:pt-40">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400/90">
              Get in touch
            </span>
            <a
              href="mailto:info@webxite.com"
              className="mt-4 inline-block w-fit text-2xl font-normal tracking-[-0.01em] text-white transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-400 hover:via-fuchsia-400 hover:to-teal-400 sm:text-3xl"
            >
              info@webxite.com
            </a>
            <hr className="mt-5 w-full border-0 border-t border-[#2a2a2a]" />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400/90">
              Media
            </span>
            <a
              href="mailto:press@webxite.com"
              className="mt-4 inline-block w-fit text-2xl font-normal tracking-[-0.01em] text-white transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-400 hover:via-fuchsia-400 hover:to-teal-400 sm:text-3xl"
            >
              press@webxite.com
            </a>
            <hr className="mt-5 w-full border-0 border-t border-[#2a2a2a]" />
          </div>
        </div>
      </div>

      {/* ---------- 2. Giant watermark (full-bleed) ---------- */}
      <div className="py-12 sm:py-20">
        <Watermark />
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
        {/* ---------- 3. Directory grid ---------- */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-20 sm:grid-cols-3 sm:pb-28 lg:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2 flex items-start sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <BrandMark />
              <span className="text-lg font-bold tracking-[-0.02em] text-white">
                WebXite
                <sup className="ml-0.5 align-super text-[9px] font-medium text-rose-400/80">
                  {TRADEMARK}
                </sup>
              </span>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} className="flex flex-col">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                {column.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] leading-relaxed text-[#888] transition-colors duration-200 hover:text-rose-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* ---------- 4. Bottom bar ---------- */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-[#1c1c1c] py-8 text-xs text-[#555] sm:flex-row">
          <span className="order-2 sm:order-1">Empowering 200+ Campus Portals</span>

          <div className="order-1 flex items-center gap-6 sm:order-2">
            <span>{`${COPYRIGHT} 2026 WebXite${TRADEMARK}`}</span>
            <a href="#" className="transition-colors duration-200 hover:text-rose-300">
              Official website
            </a>
          </div>

          <div className="order-3 flex items-center gap-3">
            <ComplianceBadge label="FERPA" code="COMPLIANT" />
            <ComplianceBadge label="WCAG 2.1" code="AA" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
