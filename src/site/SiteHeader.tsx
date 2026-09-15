"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, UserRound, X } from "lucide-react";

import { CONTAINER, COLORS } from "./tokens";
import { SIGN_IN_URL, SIGN_UP_URL } from "@/env";

/**
 * The site header.
 *
 * Sticky, and transparent until the page moves. A header that is opaque from
 * the first pixel steals the top of the hero for a bar nobody is reading yet;
 * one that stays transparent forever puts navigation over artwork and becomes
 * unreadable halfway down. So it earns its background at 24px of scroll.
 *
 * The scroll listener is passive and reads a boolean rather than a position —
 * setting state on every pixel of a scroll is how a sticky header becomes the
 * reason a page stutters.
 */

const NAV = [
  { label: "PRODUCTS", href: "#features", hasChevron: true },
  { label: "TEMPLATES", href: "#templates", hasChevron: false },
  { label: "RESOURCES", href: "#how", hasChevron: true },
  { label: "PRICING", href: "#pricing", hasChevron: false },
] as const;

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 w-full transition-[background-color,box-shadow,border-color] duration-300"
      style={{
        backgroundColor: solid ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: solid ? "saturate(180%) blur(14px)" : "none",
        borderBottom: `1px solid ${solid ? COLORS.hairline : "transparent"}`,
      }}
    >
      <div className={`${CONTAINER} flex h-[64px] sm:h-[68px] items-center justify-between gap-6`}>
        <a href="#top" className="flex shrink-0 items-center gap-2.5 no-underline">
          <Mark />
          <span className="text-[17px] font-black uppercase tracking-[0.08em] text-slate-900">
            WebXite
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-slate-700 no-underline transition-colors hover:text-slate-950"
            >
              <span>{item.label}</span>
              {item.hasChevron && (
                <svg className="h-3 w-3 text-slate-400" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={SIGN_IN_URL}
            aria-label="Sign in"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 no-underline transition-all hover:border-slate-900 hover:text-slate-900"
          >
            <UserRound className="h-[17px] w-[17px]" />
          </a>

          <a
            href={SIGN_UP_URL}
            className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-white px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.05em] text-slate-900 no-underline transition-all duration-300 hover:-translate-y-px hover:bg-slate-900 hover:text-white"
          >
            Get started
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMenu((v) => !v)}
            aria-expanded={menu}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 lg:hidden"
          >
            {menu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menu && (
        <div className="border-t border-slate-200 bg-white/95 px-6 pb-4 pt-2 backdrop-blur lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenu(false)}
              className="block rounded-xl px-3 py-3 text-[15px] font-semibold text-slate-700 no-underline transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex gap-2">
            <a
              href={SIGN_IN_URL}
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-center text-[14px] font-bold text-slate-900 no-underline"
            >
              Sign in
            </a>
            <a
              href={SIGN_UP_URL}
              className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-center text-[14px] font-bold text-white no-underline"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * The brand mark.
 *
 * Inline SVG rather than an image file: it is eleven path commands, it has to
 * be crisp at 26px on a retina screen, and an <img> here would be a second
 * network request in the header — the one place on the page where a late-
 * arriving asset is most visible.
 */
function Mark() {
  return (
    <svg viewBox="0 0 32 32" className="h-[26px] w-[26px]" aria-hidden="true">
      <defs>
        <linearGradient id="wx-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#wx-mark)" />
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
}
