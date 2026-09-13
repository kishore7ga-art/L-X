"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

import { CONTAINER, COLORS, EYEBROW, REDUCED_MOTION, SECTION_Y } from "./tokens";
import { SIGN_UP_URL } from "@/env";

/**
 * Three numbered steps beside a browser mock.
 *
 * The steps are a list and the mock is one image, so the whole section is two
 * elements that can be read in either order — which is why the numbers are
 * enormous and the prose is short. Somebody scanning gets "pick, change,
 * publish" from the numerals alone.
 *
 * The mock is drawn in markup rather than shipped as a screenshot. A screenshot
 * of a builder dates the moment the builder's chrome changes, and this one has
 * to survive longer than any particular version of the editor.
 */

const STEPS = [
  {
    n: "1",
    title: "Start from a template",
    body: "Pick a layout built for departments, admissions or a whole campus. Every one is complete — no blank page to stare at.",
  },
  {
    n: "2",
    title: "Change anything on the page",
    body: "Click a heading and type. Swap a photograph, reorder a section, change the palette. What you see is what publishes.",
  },
  {
    n: "3",
    title: "Publish to your own domain",
    body: "Connect the domain your institution already owns. We handle the records, the certificate and the renewals.",
  },
] as const;

export function Steps() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = wrap.current;
    if (!node) return;
    if (window.matchMedia(REDUCED_MOTION).matches) return;

    /*
     * Reveal on entry, once, via IntersectionObserver rather than a scroll
     * handler: a handler runs on every pixel of the page and this needs to know
     * one thing one time. Disconnected after firing so it cannot re-trigger
     * when somebody scrolls back up.
     */
    const rows = node.querySelectorAll<HTMLElement>("[data-step]");
    gsap.set(rows, { y: 22, opacity: 0 });

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        gsap.to(rows, {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.12,
        });
        io.disconnect();
      },
      { threshold: 0.25 },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="how"
      className={SECTION_Y}
      style={{ backgroundColor: COLORS.wash }}
    >
      <div className={`${CONTAINER} grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14`}>
        <BrowserMock />

        <div ref={wrap}>
          <p className={EYEBROW}>How it works</p>
          <h2 className="mt-3 text-[clamp(2rem,4.2vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-900">
            Three steps, one afternoon
          </h2>

          <div className="mt-10 flex flex-col gap-3.5">
            {STEPS.map((step) => (
              <div
                key={step.n}
                data-step
                className="flex gap-5 rounded-2xl bg-white p-6 shadow-[0_2px_14px_rgba(11,18,32,0.05)] ring-1 ring-slate-900/[0.04]"
              >
                <span
                  className="bg-clip-text text-[2.6rem] font-extrabold leading-none tracking-[-0.05em] text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(160deg,#14B8A6,#2563EB 55%,#6D28D9)",
                  }}
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="text-[1.0625rem] font-extrabold tracking-[-0.02em] text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={SIGN_UP_URL}
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-8 py-4 text-[14px] font-bold uppercase tracking-[0.05em] text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 focus-visible:ring-offset-2"
          >
            Get started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * A laptop-ish browser frame around a real campus photograph.
 *
 * Tilted very slightly and lifted on a long shadow, so it reads as an object
 * on the page rather than a rectangle in it — and only 1.2°, because a mock
 * rotated far enough to be obvious is also far enough to make its own text
 * unreadable.
 */
function BrowserMock() {
  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_rgba(11,18,32,0.20)] ring-1 ring-slate-900/[0.08]"
        style={{ transform: "rotate(-1.2deg)" }}
      >
        {/* Chrome */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
          <span className="flex gap-1.5">
            {["#F87171", "#FBBF24", "#34D399"].map((c) => (
              <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </span>
          <span className="ml-2 flex-1 truncate rounded-md bg-white px-2.5 py-1 font-mono text-[10px] text-slate-400 ring-1 ring-slate-200">
            https://yourcollege.edu
          </span>
        </div>

        {/* A page, as the builder would output it */}
        <div className="relative">
          <img
            src="/showcase/queens.jpg"
            alt="A published campus website"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">
              Admissions 2026
            </p>
            <p className="mt-1 text-[1.375rem] font-extrabold leading-tight tracking-[-0.025em] text-white">
              Applications now open
            </p>
          </div>
        </div>
      </div>

      {/* A published-state chip, tucked under the corner. */}
      <div className="absolute -bottom-4 left-6 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0_10px_26px_rgba(11,18,32,0.16)] ring-1 ring-slate-900/[0.06]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-bold text-slate-700">Live · HTTPS</span>
      </div>
    </div>
  );
}
