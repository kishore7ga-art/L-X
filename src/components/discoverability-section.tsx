"use client";
import React from "react";
import { motion } from "motion/react";
import {
  MorphingDialog,
  type MorphingDialogItem,
} from "@/components/ui/morphing-dialog";
import {
  Search,
  MessageSquareQuote,
  Sparkles,
  Check,
} from "lucide-react";

/* ==================================================================== */
/*  Palette — one continuous blue → violet journey                       */
/* ==================================================================== */

const ACCENT = {
  seo: { hex: "#2563eb", text: "text-blue-600 dark:text-blue-400", ring: "ring-blue-100 dark:ring-blue-500/25", bg: "bg-blue-50 dark:bg-blue-500/15", dot: "bg-blue-600" },
  aeo: { hex: "#4f46e5", text: "text-indigo-600 dark:text-indigo-400", ring: "ring-indigo-100 dark:ring-indigo-500/25", bg: "bg-indigo-50 dark:bg-indigo-500/15", dot: "bg-indigo-600" },
  geo: { hex: "#7c3aed", text: "text-violet-600 dark:text-violet-400", ring: "ring-violet-100 dark:ring-violet-500/25", bg: "bg-violet-50 dark:bg-violet-500/15", dot: "bg-violet-600" },
} as const;

/* ==================================================================== */
/*  Panel shell — shared frame for the three destination interfaces      */
/* ==================================================================== */

interface PanelProps {
  kind: keyof typeof ACCENT;
  code: string;
  title: string;
  note: string;
  children: React.ReactNode;
}

const Panel = ({ kind, code, title, note, children }: PanelProps) => {
  const a = ACCENT[kind];
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-700/70 bg-white/85 dark:bg-slate-900/80 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="flex items-center gap-2.5 border-b border-slate-200/80 dark:border-slate-700/60 px-5 py-3">
        <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
        <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${a.text}`}>
          {code}
        </span>
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-400">
          {title}
        </span>
      </div>

      <div className="p-5">{children}</div>

      <div className="border-t border-slate-200/70 dark:border-slate-700/50 bg-slate-50/60 dark:bg-slate-800/25 px-5 py-2.5">
        <p className="text-[9.5px] leading-relaxed text-pretty text-slate-400 dark:text-slate-400">{note}</p>
      </div>
    </div>
  );
};

/* ==================================================================== */
/*  1 · Search engines — a generic, unbranded result surface             */
/* ==================================================================== */

const SearchPanel = () => (
  <Panel
    kind="seo"
    code="SEO"
    title="Search engines"
    note="Illustrative interface. Not affiliated with, or endorsed by, any search provider. WebXite supplies the technical foundation — no platform can guarantee a ranking position."
  >
    <div className="flex items-center gap-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2 shadow-sm">
      <Search className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-slate-400" />
      <span className="truncate text-[11px] text-slate-700 dark:text-slate-200">
        meridian institute of technology b.tech programs
      </span>
    </div>

    <div className="mt-4 rounded-xl border border-slate-200/80 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-3.5">
      <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-400 dark:text-slate-400">
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-900 text-[6px] font-black text-white">
          M
        </span>
        meridian.edu › programs
      </div>
      <div className="mt-1.5 text-[13px] font-semibold leading-snug text-blue-700 dark:text-blue-300">
        Programs — Meridian Institute of Technology
      </div>
      <p className="mt-1 text-[10.5px] leading-relaxed text-pretty text-slate-500 dark:text-slate-400">
        B.Tech, M.Tech, MBA and Ph.D programmes across six departments, with
        admission timelines, eligibility and fee structure for each course.
      </p>

      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-slate-100 dark:border-slate-800 pt-3">
        {["Admissions", "Departments", "Campus life", "Contact"].map((s) => (
          <span key={s} className="truncate text-[10px] font-medium text-blue-700/80">
            {s}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-3.5 flex flex-wrap gap-1.5">
      {["Semantic HTML", "Canonical URL", "XML sitemap", "Alt text", "Open Graph"].map((c) => (
        <span
          key={c}
          className="rounded-full bg-blue-50 dark:bg-blue-500/15 px-2 py-0.5 font-mono text-[9px] font-semibold text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-100 dark:ring-blue-500/25"
        >
          {c}
        </span>
      ))}
    </div>
  </Panel>
);

/* ==================================================================== */
/*  2 · Answer engines — one question, one structured answer             */
/* ==================================================================== */

const AnswerPanel = () => (
  <Panel
    kind="aeo"
    code="AEO"
    title="Answer engines"
    note="Illustrative interface. Structured content makes an institution easier to interpret — it does not guarantee that any answer engine will surface it."
  >
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-slate-900 px-3.5 py-2 text-[11px] font-medium leading-snug text-white">
        Which courses does this college offer?
      </div>
    </div>

    <div className="mt-3 flex items-start gap-2.5">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-500/15 ring-1 ring-inset ring-indigo-100 dark:ring-indigo-500/25">
        <MessageSquareQuote className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
      </span>

      <div className="min-w-0 flex-1 rounded-2xl rounded-tl-sm border border-slate-200/80 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-3.5">
        <p className="text-[11px] leading-relaxed text-pretty text-slate-700 dark:text-slate-200">
          Meridian Institute of Technology offers undergraduate{" "}
          <span className="font-semibold text-slate-900 dark:text-white">B.Tech</span> programmes in
          Computer Science, Electronics, Mechanical and Civil Engineering, and
          postgraduate <span className="font-semibold text-slate-900 dark:text-white">M.Tech</span>,{" "}
          <span className="font-semibold text-slate-900 dark:text-white">MBA</span> and{" "}
          <span className="font-semibold text-slate-900 dark:text-white">Ph.D</span> programmes.
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-slate-100 dark:border-slate-800 pt-2.5">
          <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-slate-400 dark:text-slate-400">
            read from
          </span>
          {["/programs", "FAQPage", "EducationalOrganization"].map((s) => (
            <span
              key={s}
              className="rounded-full bg-indigo-50 dark:bg-indigo-500/15 px-2 py-0.5 font-mono text-[9px] font-semibold text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-100 dark:ring-indigo-500/25"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-3.5 space-y-1.5">
      {[
        "Question-shaped headings the parser can match",
        "FAQ blocks marked up as FAQPage schema",
        "Factual pages with one clear answer each",
      ].map((t) => (
        <div key={t} className="flex items-center gap-2">
          <Check className="h-3 w-3 shrink-0 text-indigo-600 dark:text-indigo-400" />
          <span className="text-[10px] text-slate-500 dark:text-slate-400">{t}</span>
        </div>
      ))}
    </div>
  </Panel>
);

/* ==================================================================== */
/*  3 · Generative search — the institution as a set of clear facts      */
/* ==================================================================== */

const ENTITIES = [
  "Institution identity",
  "Programs",
  "Departments",
  "Faculty",
  "Campus",
  "Admissions",
  "Facilities",
  "Contact",
];

const GenerativePanel = () => (
  <Panel
    kind="geo"
    code="GEO"
    title="Generative search"
    note="Illustrative interface. Clear structure gives generative systems better information to work with. It does not guarantee citation, inclusion or visibility in any AI system."
  >
    <div className="grid grid-cols-4 gap-1.5">
      {ENTITIES.map((e, i) => (
        <div
          key={e}
          className="rounded-lg border border-violet-100 dark:border-violet-500/25 bg-violet-50/60 dark:bg-violet-500/10 px-1.5 py-2 text-center"
          style={{ opacity: 1 - i * 0.02 }}
        >
          <span className="block truncate text-[8.5px] font-bold leading-tight text-violet-700 dark:text-violet-300">
            {e}
          </span>
        </div>
      ))}
    </div>

    <div className="my-3 flex items-center gap-2">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-200 to-violet-200" />
      <Sparkles className="h-3 w-3 text-violet-500 dark:text-violet-400" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-violet-200 to-violet-200" />
    </div>

    <div className="rounded-xl border border-slate-200/80 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-3.5">
      <p className="text-[11px] leading-relaxed text-pretty text-slate-700 dark:text-slate-200">
        A technology institute offering engineering programmes at undergraduate
        and postgraduate level, organised into six departments, with published
        admission timelines, faculty listings and campus facilities.
        <span className="ml-0.5 inline-block h-3 w-[2px] translate-y-[2px] animate-pulse bg-violet-500" />
      </p>
    </div>

    <div className="mt-3 flex flex-wrap gap-1.5">
      {["Consistent facts", "Clear hierarchy", "Structured data"].map((c) => (
        <span
          key={c}
          className="rounded-full bg-violet-50 dark:bg-violet-500/15 px-2 py-0.5 font-mono text-[9px] font-semibold text-violet-700 dark:text-violet-300 ring-1 ring-inset ring-violet-100 dark:ring-violet-500/25"
        >
          {c}
        </span>
      ))}
    </div>
  </Panel>
);

/* ==================================================================== */
/*  The three pillars, in full                                           */
/* ==================================================================== */

interface Pillar {
  index: string;
  kind: keyof typeof ACCENT;
  code: string;
  name: string;
  lede: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
}

const PILLARS: Pillar[] = [
  {
    index: "01",
    kind: "seo",
    code: "SEO",
    name: "Search engine optimisation",
    lede: "The technical foundation a crawler depends on. Every page ships with the markup, metadata and performance characteristics a search engine needs to reach it, read it and index it correctly.",
    icon: Search,
    items: [
      "Custom page titles",
      "Meta descriptions",
      "Semantic HTML",
      "Structured data",
      "XML sitemap",
      "Robots.txt",
      "Canonical URLs",
      "Image alt text",
      "Open Graph metadata",
      "Responsive design",
      "Performance-friendly pages",
    ],
  },
  {
    index: "02",
    kind: "aeo",
    code: "AEO",
    name: "Answer engine optimisation",
    lede: "Information shaped as answers. The questions prospective students actually ask, answered in clear factual blocks that a machine can interpret without guessing.",
    icon: MessageSquareQuote,
    items: [
      "FAQ structure",
      "Question-based content",
      "Clear headings",
      "Structured information",
      "FAQ schema",
      "Organization schema",
      "EducationalOrganization schema",
      "Clear factual content",
      "Well-structured pages",
    ],
  },
  {
    index: "03",
    kind: "geo",
    code: "GEO",
    name: "Generative engine optimisation",
    lede: "Your institution, described consistently. The facts that define a campus published once, in one coherent machine-readable hierarchy, so generative systems have something precise to work from.",
    icon: Sparkles,
    items: [
      "Institution identity",
      "Programs",
      "Departments",
      "Faculty information",
      "Campus information",
      "Admissions information",
      "Facilities",
      "Contact information",
      "Structured data",
      "Consistent factual content",
      "Clear content hierarchy",
    ],
  },
];

/** Each pillar becomes a card that morphs open onto its live panel. */
const PILLAR_PANELS: Record<keyof typeof ACCENT, React.ReactNode> = {
  seo: <SearchPanel />,
  aeo: <AnswerPanel />,
  geo: <GenerativePanel />,
};

const PILLAR_NOTES: Record<keyof typeof ACCENT, string> = {
  seo: "WebXite supplies the technical foundation. No platform can guarantee a ranking position.",
  aeo: "Structured content makes an institution easier to interpret — it does not guarantee that any answer engine will surface it.",
  geo: "Clear structure gives generative systems better information to work with. Citation, inclusion and visibility are never guaranteed.",
};

const PILLAR_ITEMS: MorphingDialogItem[] = PILLARS.map((pillar) => {
  const a = ACCENT[pillar.kind];

  return {
    id: pillar.kind,
    title: pillar.name,
    description: pillar.lede,
    accent: a.hex,
    icon: pillar.icon,
    note: PILLAR_NOTES[pillar.kind],
    content: (
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
        {/* What ships */}
        <div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-400">
            What ships with every site
          </span>
          <ul className="mt-4 grid grid-cols-1 gap-x-5 gap-y-2.5 sm:grid-cols-2 md:grid-cols-1">
            {pillar.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${a.dot}`}
                />
                <span className="text-[13px] leading-snug text-slate-600 dark:text-slate-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* The live interface for this pillar */}
        <div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-400">
            How it reads
          </span>
          <div className="mt-4">{PILLAR_PANELS[pillar.kind]}</div>
        </div>
      </div>
    ),
  };
});

const Pillars = () => (
  <div className="mx-auto mt-24 w-full max-w-[1400px] px-4 sm:px-6 lg:mt-32 lg:px-8">
    <MorphingDialog items={PILLAR_ITEMS} />
  </div>
);

/* ==================================================================== */
/*  Closing statement                                                    */
/* ==================================================================== */

const Closing = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7 }}
    className="mx-auto mt-28 w-full max-w-[1400px] px-4 sm:px-6 lg:mt-40 lg:px-8"
  >
    <div className="mx-auto max-w-4xl text-center">
      <div aria-hidden="true" className="mx-auto mb-10 h-px w-24 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />

      <h2 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Your website shouldn&rsquo;t
        <br />
        just look good.
        <br />
        <span className="text-slate-400 dark:text-slate-400">It should be understood.</span>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-slate-600 dark:text-slate-300 sm:text-xl">
        WebXite gives your institution a structured digital presence designed
        for search, answers, and the next generation of discovery.
      </p>

      <p className="mx-auto mt-10 max-w-xl text-[11px] leading-relaxed text-pretty text-slate-400 dark:text-slate-400">
        WebXite provides the technical foundation and content structure for
        discoverability. Rankings, answer placement and inclusion in generative
        systems are determined by third parties and are never guaranteed.
      </p>
    </div>
  </motion.div>
);

/* ==================================================================== */
/*  Section                                                              */
/* ==================================================================== */

export function DiscoverabilitySection() {
  return (
    <section className="relative w-full py-24 md:py-32">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 flex w-full max-w-[1400px] flex-col px-4 sm:px-6 md:mb-24 lg:px-8"
      >
        <h2 className="text-balance max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build a website that&rsquo;s
          <br />
          ready to be discovered.
        </h2>

        <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-pretty text-slate-600 dark:text-slate-300 sm:text-xl md:text-2xl">
          Search engines index it. Answer engines interpret it. Generative
          systems summarise it. All three read the same thing — structure. WebXite
          builds it in from the first page.
        </p>

        {/* Hand-drawn callout pointing down at the cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-28 hidden w-[290px] select-none text-blue-600 dark:text-blue-400 lg:block xl:right-16 xl:top-32"
        >
          <motion.span
            initial={{ opacity: 0, y: -10, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="block origin-right text-right font-caveat text-[36px] font-semibold leading-[1.1] text-slate-900 dark:text-white"
          >
            Click a card for
            <br />
            the full detail
          </motion.span>

          <svg
            viewBox="0 0 240 150"
            fill="none"
            className="mt-2 h-[150px] w-[240px]"
          >
            {[
              "M214 10 C 196 54, 168 44, 150 74 C 132 104, 96 116, 44 122",
              "M44 122 L 74 106",
              "M44 122 L 68 138",
            ].map((d, i) => (
              <motion.path
                key={d}
                d={d}
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: i === 0 ? 0.9 : 0.25,
                  delay: 0.55 + (i === 0 ? 0 : 0.85),
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        </div>

      </motion.div>

      {/* The detail */}
      <Pillars />

      {/* The point */}
      <Closing />
    </section>
  );
}

export default DiscoverabilitySection;
