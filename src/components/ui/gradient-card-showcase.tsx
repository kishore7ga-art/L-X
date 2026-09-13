"use client";
import React from "react";
import { cn } from "@/lib/utils";

/* ==================================================================== */
/*  Types                                                                */
/* ==================================================================== */

export interface SkewCardItem {
  title: string;
  desc: string;
  /** Gradient start colour, e.g. "#38bdf8" */
  gradientFrom: string;
  /** Gradient end colour, e.g. "#2563eb" */
  gradientTo: string;
  /** Optional large ordinal shown in the card corner, e.g. "01" */
  index?: string;
  /** Optional pill above the title, e.g. "2 minutes" */
  badge?: string;
  /** Optional lucide-react (or any) icon component */
  icon?: React.ComponentType<{ className?: string }>;
  /** Optional call to action rendered at the foot of the card */
  cta?: { label: string; href: string };
}

/* ==================================================================== */
/*  Single skewed gradient card                                          */
/*                                                                       */
/*  The colour blade sits behind a frosted white panel and extends past   */
/*  it top and bottom, so the gradient reads as a ribbon threaded         */
/*  through the card rather than a shape poking out from underneath.      */
/* ==================================================================== */

export function SkewCard({
  title,
  desc,
  gradientFrom,
  gradientTo,
  index,
  badge,
  icon: Icon,
  cta,
}: SkewCardItem) {
  const gradient = `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`;

  /* left / width / skew are shared by the blade and its blurred twin */
  const bladeMotion =
    "absolute -top-8 left-[56px] h-[calc(100%+64px)] w-1/2 skew-x-[15deg] rounded-[20px] transition-all duration-500 ease-out group-hover:left-[22px] group-hover:w-[calc(100%-88px)] group-hover:skew-x-0";

  return (
    <div className="group relative mx-4 my-10 h-[460px] w-full max-w-[400px]">
      {/* Colour bloom */}
      <span
        aria-hidden="true"
        className={cn(bladeMotion, "opacity-45 blur-[40px] group-hover:opacity-70")}
        style={{ background: gradient }}
      />
      {/* Colour blade */}
      <span
        aria-hidden="true"
        className={bladeMotion}
        style={{ background: gradient }}
      />

      {/* Floating glass chips */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
        <span
          className="animate-blob absolute left-0 top-0 h-0 w-0 rounded-xl opacity-0 transition-all duration-500 group-hover:left-12 group-hover:top-[-40px] group-hover:h-20 group-hover:w-20 group-hover:opacity-80"
          style={{ background: gradient }}
        />
        <span
          className="animate-blob absolute bottom-0 right-0 h-0 w-0 rounded-xl opacity-0 transition-all duration-500 group-hover:bottom-[-40px] group-hover:right-12 group-hover:h-20 group-hover:w-20 group-hover:opacity-80"
          style={{ background: gradient, animationDelay: "-1s" }}
        />
      </span>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col rounded-[20px] border border-white/70 dark:border-white/10 bg-white/80 dark:bg-slate-900/75 p-9 backdrop-blur-2xl transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:bg-white/[0.72]">
        {(Icon || index) && (
          <div className="flex items-start justify-between">
            {Icon && (
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/75 backdrop-blur-sm"
                style={{ color: gradientTo }}
              >
                <Icon className="h-6 w-6" />
              </span>
            )}
            {index && (
              <span className="text-[2.75rem] font-black leading-none tabular-nums tracking-tight text-slate-900/20">
                {index}
              </span>
            )}
          </div>
        )}

        {badge && (
          <span
            className="mt-8 inline-flex w-fit items-center rounded-full border border-white/80 dark:border-white/10 bg-white/75 dark:bg-slate-900/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: gradientTo }}
          >
            {badge}
          </span>
        )}

        <h3 className="mt-5 text-[2rem] font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-4 text-[17px] leading-relaxed text-pretty text-slate-700 dark:text-slate-200">{desc}</p>

        {cta ? (
          <a
            href={cta.href}
            className="mt-auto inline-block w-fit rounded-lg bg-slate-900 px-4 py-2.5 text-[15px] font-bold text-white transition-colors hover:bg-slate-800"
          >
            {cta.label}
          </a>
        ) : (
          <span
            aria-hidden="true"
            className="mt-auto h-[3px] w-16 rounded-full transition-all duration-500 ease-out group-hover:w-full"
            style={{ background: gradient }}
          />
        )}
      </div>
    </div>
  );
}

/* ==================================================================== */
/*  Showcase — a wrapping row of skew cards                              */
/* ==================================================================== */

export function GradientCardShowcase({
  cards,
  className,
}: {
  cards: SkewCardItem[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center", className)}>
      {cards.map((card) => (
        <SkewCard key={card.title} {...card} />
      ))}
    </div>
  );
}

/* ==================================================================== */
/*  Default export — the original standalone demo                        */
/* ==================================================================== */

const cards: SkewCardItem[] = [
  {
    title: "Card one",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gradientFrom: "#38bdf8",
    gradientTo: "#2563eb",
    cta: { label: "Read More", href: "#" },
  },
  {
    title: "Card two",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gradientFrom: "#818cf8",
    gradientTo: "#4f46e5",
    cta: { label: "Read More", href: "#" },
  },
  {
    title: "Card three",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gradientFrom: "#c084fc",
    gradientTo: "#7c3aed",
    cta: { label: "Read More", href: "#" },
  },
];

export default function SkewCards() {
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center bg-white dark:bg-slate-900 py-10">
      <GradientCardShowcase cards={cards} />
    </div>
  );
}
