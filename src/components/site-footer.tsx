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
    title: "WEBXITE",
    links: ["Official website", "Contact", "Catalogue"],
  },
  {
    title: "PARTNERS",
    links: ["Connectsport OU", "Frederik Sletting J.", "WebXite AS"],
  },
  {
    title: "CERTIFICATES",
    links: ["2-STAR, ITF", "CAT-1 SLOW, ITF"],
  },
  {
    title: "FOLLOW US",
    links: ["Facebook", "Instagram", "Youtube"],
  },
  {
    title: "CITIES",
    links: ["Oslo, NO", "Bærum, NO", "Tjøme, NO", "Copenhagen, DK"],
  },
];

const TRADEMARK = "™";
const COPYRIGHT = "©";

/* ------------------------------------------------------------------ */
/*  Brand mark: two diagonal parallelogram bars                        */
/* ------------------------------------------------------------------ */

const BrandMark = () => (
  <svg
    viewBox="0 0 32 32"
    className="w-[26px] h-[26px] shrink-0"
    aria-hidden="true"
  >
    <polygon points="12,4 22,4 14,28 4,28" fill="#ffffff" />
    <polygon points="24,4 30,4 22,28 16,28" fill="#ffffff" opacity="0.55" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  ITF circular certification badge                                   */
/* ------------------------------------------------------------------ */

const ItfBadge = ({ label }: { label: string }) => {
  const rawId = useId();
  const arcId = `itf-arc-${rawId.replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 64 64"
      className="w-10 h-10 shrink-0 text-[#666] transition-colors duration-300 hover:text-white"
      aria-label={`ITF ${label} certification`}
      role="img"
    >
      <defs>
        {/* Upper arc carrying the curved caption */}
        <path id={arcId} d="M 32 32 m -23 0 a 23 23 0 1 1 46 0" fill="none" />
      </defs>

      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.5"
      />

      <text
        fill="currentColor"
        fontSize="7"
        fontWeight="700"
        letterSpacing="1.1"
        textAnchor="middle"
      >
        <textPath href={`#${arcId}`} startOffset="50%">
          {label}
        </textPath>
      </text>

      <text
        x="32"
        y="40"
        fill="currentColor"
        fontSize="16"
        fontWeight="800"
        letterSpacing="0.5"
        textAnchor="middle"
      >
        ITF
      </text>
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/*  Giant interactive striped watermark                                */
/* ------------------------------------------------------------------ */

const STRIPES_BASE =
  "repeating-linear-gradient(45deg, #2a2a2a 0px, #2a2a2a 2px, #0f0f0f 2px, #0f0f0f 7px)";

const STRIPES_BRIGHT =
  "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 2px, #4a4a4a 2px, #4a4a4a 7px)";

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

      {/* Custom circular cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full border border-white/70 transition-opacity duration-200"
        style={{
          width: 34,
          height: 34,
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
    <footer className="relative z-20 w-full overflow-hidden bg-[#0a0a0a] text-white antialiased font-['Inter','Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
        {/* ---------- 1. Contact ---------- */}
        <div className="grid grid-cols-1 gap-10 pt-24 sm:pt-32 md:grid-cols-2 md:gap-16 lg:pt-40">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#888]">
              Get in touch
            </span>
            <a
              href="mailto:info@webxite.com"
              className="mt-4 inline-block w-fit text-2xl font-normal tracking-[-0.01em] text-white transition-opacity duration-300 hover:opacity-60 sm:text-3xl"
            >
              info@webxite.com
            </a>
            <hr className="mt-5 w-full border-0 border-t border-[#2a2a2a]" />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#888]">
              Media
            </span>
            <a
              href="mailto:press@webxite.com"
              className="mt-4 inline-block w-fit text-2xl font-normal tracking-[-0.01em] text-white transition-opacity duration-300 hover:opacity-60 sm:text-3xl"
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
                <sup className="ml-0.5 align-super text-[9px] font-medium text-[#888]">
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
                      className="text-[13px] leading-relaxed text-[#888] transition-colors duration-200 hover:text-white"
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
          <span className="order-2 sm:order-1">Provided by District12</span>

          <div className="order-1 flex items-center gap-6 sm:order-2">
            <span>{`${COPYRIGHT} 2026 WebXite${TRADEMARK}`}</span>
            <a href="#" className="transition-colors duration-200 hover:text-white">
              Official website
            </a>
          </div>

          <div className="order-3 flex items-center gap-3">
            <ItfBadge label="2-STAR" />
            <ItfBadge label="CAT-1 SLOW" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
