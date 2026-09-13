"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

import { CONTAINER, COLORS, EYEBROW, REDUCED_MOTION, SECTION_Y } from "./tokens";
import { SIGN_UP_URL } from "@/env";

/**
 * The template gallery.
 *
 * Uses the campus photographs already in `public/showcase` rather than stock
 * imagery. The subject matters more than usual here: somebody deciding whether
 * a builder suits an institution is looking for institutions, and a gallery of
 * generic gradients answers a different question.
 */

const TEMPLATES = [
  { src: "/showcase/oxford.jpg", name: "Heritage", kind: "Whole campus" },
  { src: "/showcase/penn.jpg", name: "Meridian", kind: "Admissions" },
  { src: "/showcase/uchicago.jpg", name: "Quadrangle", kind: "Faculty" },
  { src: "/showcase/kent.jpg", name: "Parkside", kind: "Department" },
  { src: "/showcase/ucdavis.jpg", name: "Fieldwork", kind: "Research" },
  { src: "/showcase/georgetown.jpg", name: "Hillcrest", kind: "Alumni" },
  { src: "/showcase/cranfield.jpg", name: "Aerofoil", kind: "Engineering" },
  { src: "/showcase/uwa.jpg", name: "Southbank", kind: "Student life" },
] as const;

export function Templates() {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = grid.current;
    if (!node) return;
    if (window.matchMedia(REDUCED_MOTION).matches) return;

    const cards = node.querySelectorAll<HTMLElement>("[data-card]");
    gsap.set(cards, { y: 26, opacity: 0 });

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          // Staggered by column as well as row, so the grid fills diagonally
          // rather than a row at a time — the eye follows it more naturally.
          stagger: { each: 0.06, from: "start" },
        });
        io.disconnect();
      },
      { threshold: 0.15 },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section id="templates" className={`bg-white ${SECTION_Y}`}>
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className={EYEBROW}>Templates</p>
            <h2 className="mt-3 max-w-[22ch] text-[clamp(2rem,4.2vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-900">
              Start from something finished
            </h2>
          </div>
          <a
            href={SIGN_UP_URL}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.05em] text-slate-900 no-underline transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Browse all
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div
          ref={grid}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEMPLATES.map((t) => (
            <TemplateCard key={t.src} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplateCard({
  src,
  name,
  kind,
}: {
  src: string;
  name: string;
  kind: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      data-card
      href={SIGN_UP_URL}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block overflow-hidden rounded-2xl bg-white no-underline shadow-[0_2px_12px_rgba(11,18,32,0.06)] ring-1 ring-slate-900/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,18,32,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
    >
      {/* aspect-ratio on the frame, not a fixed height, so the grid never
          shifts as images decode — the image arrives into space already held
          open for it. */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={`${name} template`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
        />
        <span
          className="absolute inset-0 bg-slate-900/0 transition-colors duration-300 group-hover:bg-slate-900/20"
          aria-hidden="true"
        />
        <span
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(-6px)",
          }}
          aria-hidden="true"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3.5">
        <span className="text-[0.9375rem] font-extrabold tracking-[-0.02em] text-slate-900">
          {name}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
          {kind}
        </span>
      </div>
    </a>
  );
}

/* ── Two things it does, side by side ──────────────────────────────────── */

/**
 * A split panel, one half on white and one on the wash.
 *
 * The divider is the two backgrounds meeting rather than a border, which is why
 * the halves have no gap between them: a rule down the middle would make two
 * cards, and these are two halves of one statement.
 */
export function Split() {
  return (
    <section id="features" className="grid lg:grid-cols-2">
      <SplitHalf
        background={COLORS.page}
        eyebrow="For a whole institution"
        titleA="One site,"
        titleB="every department"
        cta="Build a campus site"
        image="/showcase/birmingham.jpg"
        alt="A campus website with department pages"
      />
      <SplitHalf
        background={COLORS.wash}
        eyebrow="For a single team"
        titleA="A page for"
        titleB="one programme"
        cta="Build a single page"
        image="/showcase/queens-belfast.jpg"
        alt="A single programme landing page"
      />
    </section>
  );
}

function SplitHalf({
  background,
  eyebrow,
  titleA,
  titleB,
  cta,
  image,
  alt,
}: {
  background: string;
  eyebrow: string;
  titleA: string;
  titleB: string;
  cta: string;
  image: string;
  alt: string;
}) {
  return (
    <div
      className="flex flex-col items-center px-6 pb-0 pt-[clamp(3.5rem,7vw,6rem)] text-center sm:px-10"
      style={{ backgroundColor: background }}
    >
      <p className={EYEBROW}>{eyebrow}</p>
      <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-slate-900">
        {titleA}{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg,#14B8A6,#2563EB 60%,#6D28D9)" }}
        >
          {titleB}
        </span>
      </h2>

      <a
        href={SIGN_UP_URL}
        className="group mt-7 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.06em] text-slate-900 no-underline transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
      >
        {cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      {/* Bleeds off the bottom edge on purpose: the image continues past the
          fold of its own half, which reads as a screen the section is sitting
          on rather than a picture it contains. */}
      <div className="mt-12 w-full max-w-[440px] overflow-hidden rounded-t-2xl shadow-[0_-2px_50px_rgba(11,18,32,0.18)] ring-1 ring-slate-900/[0.07]">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
