"use client";
import React from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { GradientTracingPath } from "@/components/ui/gradient-tracing";

/* ==================================================================== */
/*  Identity presets — the whole composition re-skins from these         */
/* ==================================================================== */

interface Identity {
  key: string;
  name: string;
  typeface: string;
  display: string;
  brand: string;
  accent: string;
  surface: string;
  ink: string;
  muted: string;
  radius: string;
}

const IDENTITIES: Identity[] = [
  {
    key: "heritage",
    name: "Heritage",
    typeface: "Instrument Serif",
    display: "'Instrument Serif', Georgia, serif",
    brand: "#1E3A5F",
    accent: "#B08D57",
    surface: "#FAF7F2",
    ink: "#14213D",
    muted: "#E7DFD3",
    radius: "2px",
  },
  {
    key: "modern",
    name: "Modern",
    typeface: "Outfit",
    display: "'Outfit', sans-serif",
    brand: "#2563EB",
    accent: "#06B6D4",
    surface: "#F8FAFC",
    ink: "#0F172A",
    muted: "#E2E8F0",
    radius: "10px",
  },
  {
    key: "editorial",
    name: "Editorial",
    typeface: "Wix Madefor Display",
    display: "'Wix Madefor Display', sans-serif",
    brand: "#111827",
    accent: "#B91C1C",
    surface: "#FFFFFF",
    ink: "#111827",
    muted: "#E5E7EB",
    radius: "0px",
  },
  {
    key: "civic",
    name: "Civic",
    typeface: "Plus Jakarta Sans",
    display: "'Plus Jakarta Sans', sans-serif",
    brand: "#047857",
    accent: "#F59E0B",
    surface: "#F6FAF8",
    ink: "#052E2B",
    muted: "#D8E8E1",
    radius: "16px",
  },
];

/* ==================================================================== */
/*  Shared board chrome                                                  */
/* ==================================================================== */

interface BoardProps {
  caption: string;
  tilt: string;
  offset: string;
  delay: number;
  children: React.ReactNode;
}

const Board = ({ caption, tilt, offset, delay, children }: BoardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay }}
    className={cn("group/board relative", offset)}
  >
    <div
      className={cn(
        "relative overflow-hidden border border-slate-200/90 dark:border-slate-700/70 shadow-[0_18px_50px_rgba(15,23,42,0.09)] transition-transform duration-500 will-change-transform lg:hover:!rotate-0 lg:hover:-translate-y-1.5",
        tilt,
      )}
      style={{
        backgroundColor: "var(--dz-surface)",
        borderRadius: "calc(var(--dz-radius) + 8px)",
      }}
    >
      {children}
    </div>

    {/* Caption */}
    <div className="mt-4 flex items-center gap-2">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: "var(--dz-brand)" }}
      />
      <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-400">
        {caption}
      </span>
    </div>
  </motion.div>
);

/* ---- Reusable in-board fragments ---------------------------------- */

const NavRow = ({ links }: { links: string[] }) => (
  <div className="flex items-center justify-between px-5 pt-5">
    <div>
      <div className="flex items-center gap-2">
        <span
          className="flex h-7 w-7 items-center justify-center text-[10px] font-black text-white"
          style={{
            backgroundColor: "var(--dz-brand)",
            borderRadius: "var(--dz-radius)",
          }}
        >
          M
        </span>
        <span
          className="text-[12px] font-bold leading-none"
          style={{ color: "var(--dz-ink)", fontFamily: "var(--dz-display)" }}
        >
          Meridian
        </span>
      </div>
    </div>

    <div>
      <div className="flex items-center gap-3">
        {links.map((l) => (
          <span
            key={l}
            className="text-[9.5px] font-semibold"
            style={{ color: "var(--dz-ink)", opacity: 0.55 }}
          >
            {l}
          </span>
        ))}
        <span
          className="px-2 py-1 text-[9px] font-bold text-white"
          style={{
            backgroundColor: "var(--dz-brand)",
            borderRadius: "var(--dz-radius)",
          }}
        >
          Apply
        </span>
      </div>
    </div>
  </div>
);

const MediaBlock = ({ className }: { className?: string }) => (
  <div
    className={cn("relative overflow-hidden", className)}
    style={{
      borderRadius: "var(--dz-radius)",
      background:
        "linear-gradient(135deg, color-mix(in srgb, var(--dz-brand) 78%, transparent), color-mix(in srgb, var(--dz-accent) 62%, transparent))",
    }}
  >
    <span
      className="absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px)",
      }}
    />
  </div>
);

/* ==================================================================== */
/*  Board 1 — Hero design                                                */
/* ==================================================================== */

const HeroBoard = () => (
  <div className="flex h-[400px] flex-col">
    <NavRow links={["Programs", "Campus", "Admissions"]} />

    <div className="flex flex-1 flex-col px-5 pb-5 pt-8">
      <div>
        <div>
          <span
            className="block text-[9px] font-bold uppercase tracking-[0.24em]"
            style={{ color: "var(--dz-accent)" }}
          >
            Admissions 2026 open
          </span>
          <h4
            className="mt-2.5 text-[30px] font-bold leading-[1.05] tracking-tight"
            style={{ color: "var(--dz-ink)", fontFamily: "var(--dz-display)" }}
          >
            An institution
            <br />
            built on outcomes.
          </h4>
        </div>
      </div>

      <div className="mt-4">
        <div className="space-y-2">
          <span
            className="block h-1.5 w-full rounded-full"
            style={{ backgroundColor: "var(--dz-muted)" }}
          />
          <span
            className="block h-1.5 w-3/4 rounded-full"
            style={{ backgroundColor: "var(--dz-muted)" }}
          />
        </div>
      </div>

      <div className="mt-auto flex items-end gap-3">
        <div>
          <div className="flex gap-1.5">
            {["var(--dz-brand)", "var(--dz-accent)", "var(--dz-ink)", "var(--dz-muted)"].map(
              (c, i) => (
                <span
                  key={i}
                  className="h-6 w-6 transition-colors duration-500"
                  style={{ backgroundColor: c, borderRadius: "var(--dz-radius)" }}
                />
              ),
            )}
          </div>
        </div>

        <div className="ml-auto w-[150px]">
          <MediaBlock className="h-[92px] w-full" />
        </div>
      </div>
    </div>
  </div>
);

/* ==================================================================== */
/*  Board 2 — Programs design                                            */
/* ==================================================================== */

const PROGRAMS = ["B.Tech CSE", "B.Tech ECE", "M.Tech AI", "MBA"];

const ProgramsBoard = () => (
  <div className="flex h-[400px] flex-col">
    <NavRow links={["Overview", "Faculty"]} />

    <div className="flex flex-1 flex-col px-5 pb-5 pt-6">
      <div>
        <h4
          className="text-[20px] font-bold leading-tight tracking-tight"
          style={{ color: "var(--dz-ink)", fontFamily: "var(--dz-display)" }}
        >
          Programmes
        </h4>
      </div>

      <div className="mt-2.5">
        <div className="flex gap-1.5">
          {["All", "UG", "PG", "Doctoral"].map((f, i) => (
            <span
              key={f}
              className="px-2 py-1 text-[9px] font-bold transition-colors duration-500"
              style={{
                borderRadius: "var(--dz-radius)",
                backgroundColor: i === 0 ? "var(--dz-brand)" : "transparent",
                color: i === 0 ? "#fff" : "var(--dz-ink)",
                border: i === 0 ? "none" : "1px solid var(--dz-muted)",
              }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 flex-1">
        <div className="grid h-full grid-cols-2 gap-2.5">
          {PROGRAMS.map((p, i) => (
            <div
              key={p}
              className="flex flex-col justify-between p-3 transition-colors duration-500"
              style={{
                borderRadius: "var(--dz-radius)",
                border: "1px solid var(--dz-muted)",
                backgroundColor: "#fff",
              }}
            >
              <span
                className="h-1.5 w-8"
                style={{ backgroundColor: i % 2 ? "var(--dz-accent)" : "var(--dz-brand)" }}
              />
              <div>
                <span
                  className="block text-[12px] font-bold leading-tight"
                  style={{ color: "var(--dz-ink)", fontFamily: "var(--dz-display)" }}
                >
                  {p}
                </span>
                <span
                  className="mt-1 block text-[8.5px] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--dz-ink)", opacity: 0.45 }}
                >
                  4 years · Full time
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ==================================================================== */
/*  Board 3 — Campus design                                              */
/* ==================================================================== */

const CampusBoard = () => (
  <div className="flex h-[400px] flex-col">
    <NavRow links={["Life", "Facilities"]} />

    <div className="flex flex-1 flex-col px-5 pb-5 pt-6">
      <div>
        <div className="grid grid-cols-3 gap-2">
          <MediaBlock className="col-span-2 h-[122px]" />
          <div className="flex flex-col gap-2">
            <MediaBlock className="h-[57px]" />
            <MediaBlock className="h-[57px]" />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h4
          className="text-[17px] font-bold leading-tight tracking-tight"
          style={{ color: "var(--dz-ink)", fontFamily: "var(--dz-display)" }}
        >
          A campus that works
          <br />
          as hard as you do.
        </h4>
      </div>

      <div className="mt-auto">
        <div className="grid grid-cols-3 gap-2 pt-2" style={{ borderTop: "1px solid var(--dz-muted)" }}>
          {[
            { v: "42", l: "Acres" },
            { v: "18", l: "Labs" },
            { v: "6", l: "Hostels" },
          ].map((s) => (
            <div key={s.l}>
              <span
                className="block text-[20px] font-bold leading-none tabular-nums"
                style={{ color: "var(--dz-brand)", fontFamily: "var(--dz-display)" }}
              >
                {s.v}
              </span>
              <span
                className="mt-1.5 block text-[8.5px] font-bold uppercase tracking-[0.16em]"
                style={{ color: "var(--dz-ink)", opacity: 0.45 }}
              >
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ==================================================================== */
/*  Identity switcher                                                    */
/* ==================================================================== */

const IdentityRail = ({
  value,
  onChange,
}: {
  value: Identity;
  onChange: (i: Identity) => void;
}) => (
  <div className="flex flex-wrap items-center gap-2">
    {IDENTITIES.map((i) => {
      const selected = i.key === value.key;
      return (
        <button
          key={i.key}
          type="button"
          onClick={() => onChange(i)}
          aria-pressed={selected}
          className={cn(
            "group flex items-center gap-2 rounded-full border px-3 py-1.5 transition-all duration-300",
            selected
              ? "border-slate-900 bg-slate-900 shadow-sm"
              : "border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/75 hover:border-slate-300 hover:bg-white",
          )}
        >
          <span className="flex -space-x-1">
            {[i.brand, i.accent, i.surface].map((c) => (
              <span
                key={c}
                className="h-2.5 w-2.5 rounded-full ring-1 ring-white"
                style={{ backgroundColor: c }}
              />
            ))}
          </span>
          <span
            className={cn(
              "text-[11px] font-bold tracking-tight",
              selected ? "text-white" : "text-slate-700 dark:text-slate-200",
            )}
          >
            {i.name}
          </span>
        </button>
      );
    })}

    <span className="ml-auto hidden items-baseline gap-2 sm:flex">
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-400">
        Face
      </span>
      <span
        className="text-[15px] leading-none text-slate-900 dark:text-white transition-all duration-300"
        style={{ fontFamily: value.display }}
      >
        {value.typeface}
      </span>
    </span>
  </div>
);

/* ==================================================================== */
/*  Board connectors — the three boards are one system                   */
/*                                                                       */
/*  Each link sits in a grid gap and angles to match the stagger of the   */
/*  two boards it joins, with a signal tracing along it.                  */
/* ==================================================================== */

const CONNECTORS = [
  { left: "33.333%", d: "M0 42 C 24 42, 48 24, 72 24", from: 42, to: 24 },
  { left: "66.666%", d: "M0 24 C 24 24, 48 46, 72 46", from: 24, to: 46 },
];

const BoardConnectors = ({ identity }: { identity: Identity }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
  >
    {CONNECTORS.map((c, i) => (
      <div
        key={c.left}
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ left: c.left }}
      >
        <svg width="72" height="70" viewBox="0 0 72 70" fill="none">
          <GradientTracingPath
            path={c.d}
            width={72}
            baseColor={identity.brand}
            baseOpacity={0.28}
            gradientColors={[identity.accent, identity.brand, identity.accent]}
            strokeWidth={1.5}
            animationDuration={2.4}
            delay={i * 0.6}
          />
          <circle cx="0" cy={c.from} r="2.5" fill={identity.brand} />
          <circle cx="72" cy={c.to} r="2.5" fill={identity.brand} />
        </svg>
      </div>
    ))}
  </div>
);

/* ==================================================================== */
/*  Section                                                              */
/* ==================================================================== */

export function DesignIdentitySection() {
  const [identity, setIdentity] = React.useState<Identity>(IDENTITIES[1]);

  /* The identity rotates on its own until the visitor takes over. */
  const stageRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { margin: "-15% 0px -15% 0px" });
  const reduceMotion = useReducedMotion();
  const [identityAuto, setIdentityAuto] = React.useState(true);

  /* Identity presets rotate every 4.2s */
  React.useEffect(() => {
    if (!identityAuto || !inView || reduceMotion) return;
    const timer = window.setInterval(() => {
      setIdentity((current) => {
        const i = IDENTITIES.findIndex((x) => x.key === current.key);
        return IDENTITIES[(i + 1) % IDENTITIES.length];
      });
    }, 4200);
    return () => window.clearInterval(timer);
  }, [identityAuto, inView, reduceMotion]);

  const themeVars = {
    "--dz-brand": identity.brand,
    "--dz-accent": identity.accent,
    "--dz-surface": identity.surface,
    "--dz-ink": identity.ink,
    "--dz-muted": identity.muted,
    "--dz-radius": identity.radius,
    "--dz-display": identity.display,
  } as React.CSSProperties;

  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex max-w-3xl flex-col"
      >
        <h2 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Designed for institutions.
          <br />
          Built to stand out.
        </h2>

        <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-pretty text-slate-600 dark:text-slate-300 sm:text-xl md:text-2xl">
          Not a template with your logo dropped into the corner. A design system
          that takes your institution&rsquo;s identity and applies it to every
          page, every section, every screen.
        </p>
      </motion.div>

      {/* ---------------- The composition ---------------- */}
      <div ref={stageRef} style={themeVars} className="mt-16 md:mt-24">
        <div className="mb-8 flex flex-col gap-5 border-b border-slate-200/80 dark:border-slate-700/60 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-slate-900 dark:text-white">
            Designed for your identity
          </span>
          <div className="lg:max-w-[62%]">
            <IdentityRail
              value={identity}
              onChange={(i) => {
                setIdentity(i);
                setIdentityAuto(false);
              }}
            />
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:gap-9">
          <BoardConnectors identity={identity} />

            <Board
              caption="Hero design"
              tilt="lg:-rotate-[1.2deg]"
              offset="lg:mt-6"
              delay={0}
            >
              <HeroBoard />
            </Board>

            <Board
              caption="Programs design"
              tilt="lg:rotate-[0.6deg]"
              offset=""
              delay={0.1}
            >
              <ProgramsBoard />
            </Board>

            <Board
              caption="Campus design"
              tilt="lg:-rotate-[0.5deg]"
              offset="sm:col-span-2 lg:mt-10 xl:col-span-1"
              delay={0.2}
            >
              <CampusBoard />
            </Board>
        </div>
      </div>
    </section>
  );
}

export default DesignIdentitySection;
