"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  type MotionValue,
  type Variants,
} from "motion/react";
import {
  Lock,
  Check,
  Rocket,
  Users,
  Eye,
  MoreHorizontal,
} from "lucide-react";

/* ==================================================================== */
/*  10. Custom Domain                                                    */
/* ==================================================================== */

const DomainDemo = () => (
  <div className="flex h-full flex-col gap-3">
    <div className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 shadow-sm">
      <Lock className="h-3 w-3 shrink-0 text-emerald-600" />
      <span className="truncate font-mono text-[11px] text-slate-700 dark:text-slate-200">
        https://www.campus.edu
      </span>
    </div>
    {[
      { type: "A", value: "76.76.21.21" },
      { type: "CNAME", value: "cname.webxite.app" },
      { type: "TXT", value: "verify=a91f…" },
    ].map((r) => (
      <div
        key={r.type}
        className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/65 px-2.5 py-1.5"
      >
        <span className="w-12 shrink-0 font-mono text-[9px] font-bold text-slate-400 dark:text-slate-400">
          {r.type}
        </span>
        <span className="truncate font-mono text-[10px] text-slate-600 dark:text-slate-300">
          {r.value}
        </span>
        <Check className="ml-auto h-3 w-3 shrink-0 text-emerald-600" />
      </div>
    ))}
  </div>
);

/* ==================================================================== */
/*  11. Publishing                                                       */
/* ==================================================================== */

const DEPLOY_STEPS = [
  { label: "Build", time: "3.2s", done: true },
  { label: "Optimise assets", time: "1.8s", done: true },
  { label: "Push to edge", time: "0.9s", done: true },
  { label: "Live in 312 regions", time: "", done: false },
];

const PublishingDemo = () => (
  <div className="flex h-full flex-col gap-2.5">
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-1.5 rounded-md bg-blue-600 px-2.5 py-1.5 text-[10px] font-bold text-white">
        <Rocket className="h-3 w-3" /> Publish
      </span>
      <span className="font-mono text-[9px] text-slate-400 dark:text-slate-400">v128</span>
    </div>
    {DEPLOY_STEPS.map((s) => (
      <div key={s.label} className="flex items-center gap-2">
        <span
          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
            s.done ? "bg-emerald-500 text-white" : "border-2 border-blue-600 bg-white dark:bg-slate-900"
          }`}
        >
          {s.done && <Check className="h-2.5 w-2.5 stroke-[3]" />}
          {!s.done && (
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
          )}
        </span>
        <span className="text-[10px] text-slate-600 dark:text-slate-300">{s.label}</span>
        <span className="ml-auto font-mono text-[9px] text-slate-400 dark:text-slate-400">
          {s.time}
        </span>
      </div>
    ))}
  </div>
);

/* ==================================================================== */
/*  12. Website Management                                               */
/* ==================================================================== */

const ManagementDemo = () => (
  <div className="flex h-full flex-col gap-3">
    <div className="grid grid-cols-2 gap-2">
      {[
        { label: "Visitors", value: "48.2k", icon: Eye },
        { label: "Editors", value: "12", icon: Users },
      ].map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5">
            <Icon className="h-3 w-3 text-slate-400 dark:text-slate-400" />
            <div className="mt-1 text-base font-black tabular-nums tracking-tight text-slate-900 dark:text-white">
              {s.value}
            </div>
            <div className="text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-400">
              {s.label}
            </div>
          </div>
        );
      })}
    </div>

    {/* Sparkline */}
    <div className="flex h-10 items-end gap-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-2">
      {[40, 55, 45, 70, 62, 85, 78, 96].map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-sm bg-blue-600/80"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>

    <div className="flex items-center gap-1.5">
      {["A", "K", "M"].map((n, i) => (
        <span
          key={n}
          className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white ${
            ["bg-blue-600", "bg-slate-900", "bg-emerald-600"][i]
          }`}
        >
          {n}
        </span>
      ))}
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-slate-300 dark:border-slate-600 text-slate-400 dark:text-slate-400">
        <MoreHorizontal className="h-3 w-3" />
      </span>
    </div>
  </div>
);

/* ==================================================================== */
/*  Feature data                                                         */
/* ==================================================================== */

interface Feature {
  index: string;
  badge: string;
  title: string;
  description: string;
  points: string[];
  demo: React.ReactNode;
}

const FEATURES: Feature[] = [
  {
    index: "01",
    badge: "Custom Domain",
    title: "Your domain, your SSL",
    description:
      "Point a record and go. Certificates issue and renew automatically, so the address your students already know keeps working — with the padlock intact.",
    points: ["Automatic certificate renewal", "Apex and subdomain support", "DNS verified in minutes"],
    demo: <DomainDemo />,
  },
  {
    index: "02",
    badge: "Publishing",
    title: "Ship in one click",
    description:
      "Atomic deploys to the global edge, with instant rollback to any previous version. Nothing is half-published, and nothing is ever stuck.",
    points: ["Atomic, all-or-nothing deploys", "Rollback to any version", "312 edge regions"],
    demo: <PublishingDemo />,
  },
  {
    index: "03",
    badge: "Website Management",
    title: "Run it after launch",
    description:
      "Traffic, roles, permissions, and version history in a single dashboard — so the department that owns a page can actually edit it.",
    points: ["Per-section editor roles", "Full version history", "Traffic and engagement"],
    demo: <ManagementDemo />,
  },
];

/* ==================================================================== */
/*  Sticky stacking card                                                 */
/*                                                                       */
/*  Cards recede as the next one slides over: they scale down, tip back   */
/*  in 3D, blur and dim — so the stack reads as real depth of field.      */
/* ==================================================================== */

const CONTENT: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
};

const RISE: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const StickyFeatureCard = ({
  feature,
  i,
  total,
  progress,
  range,
  depth,
}: {
  feature: Feature;
  i: number;
  total: number;
  progress: MotionValue<number>;
  range: [number, number];
  /** How many cards will stack on top of this one */
  depth: number;
}) => {
  const scale = useTransform(progress, range, [1, 1 - depth * 0.05]);
  const rotateX = useTransform(progress, range, [0, depth * 3.5]);
  const dim = useTransform(progress, range, [1, 1 - depth * 0.16]);
  const blurPx = useTransform(progress, range, [0, depth * 1.6]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <div
      className="sticky top-0 flex h-[95vh] min-h-[800px] items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={{
          scale,
          rotateX,
          opacity: dim,
          filter,
          top: `${i * 26}px`,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[1400px] origin-top overflow-hidden rounded-[32px] border border-slate-200/90 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/85 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl will-change-transform"
      >
        {/* Accent rail that draws across the top */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="absolute inset-x-0 top-0 z-20 h-[3px] origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500"
        />

        <motion.div
          variants={CONTENT}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid min-h-[740px] grid-cols-1 md:grid-cols-[1fr_1.05fr]"
        >
          {/* Copy */}
          <div className="relative flex flex-col justify-center overflow-hidden p-10 sm:p-14 lg:p-20">
            {/* Ghost ordinal */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 bottom-0 select-none text-[9rem] font-black leading-none tracking-tighter text-slate-900/[0.035] dark:text-white/[0.05] sm:text-[13rem] lg:-right-6 lg:text-[19rem]"
            >
              {feature.index}
            </span>

            <motion.div variants={RISE} className="relative flex items-center gap-3">
              <span className="rounded-full bg-blue-50 dark:bg-blue-500/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-100 dark:ring-blue-500/25">
                {feature.badge}
              </span>
              <span className="font-mono text-[11px] font-bold tabular-nums tracking-widest text-slate-300 dark:text-slate-500">
                {feature.index} / {String(total).padStart(2, "0")}
              </span>
            </motion.div>

            <motion.h3
              variants={RISE}
              className="relative mt-6 text-[30px] font-black leading-[1.03] tracking-tight text-slate-900 dark:text-white sm:mt-7 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {feature.title}
            </motion.h3>

            <motion.p
              variants={RISE}
              className="relative mt-6 max-w-[46ch] text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
            >
              {feature.description}
            </motion.p>

            <motion.ul
              variants={CONTENT}
              className="relative mt-9 space-y-3.5 border-t border-slate-200/80 dark:border-slate-700/60 pt-7"
            >
              {feature.points.map((p) => (
                <motion.li key={p} variants={RISE} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/15 ring-1 ring-inset ring-blue-100 dark:ring-blue-500/25">
                    <Check className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                  </span>
                  <span className="text-[15px] text-slate-600 dark:text-slate-300">{p}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Demo canvas */}
          <div className="relative flex items-center justify-center overflow-hidden border-t border-slate-200/80 dark:border-slate-700/60 bg-slate-50/70 dark:bg-slate-800/30 p-10 sm:p-14 md:border-l md:border-t-0">
            {/* Dot grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
                maskImage:
                  "radial-gradient(ellipse at center, black 45%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 45%, transparent 80%)",
              }}
            />

            {/* Soft colour bloom behind the preview */}
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.06, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute h-[340px] w-[340px] rounded-full bg-blue-400/25 blur-[80px]"
            />

            {/* The preview, drifting gently */}
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-[470px]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl border border-slate-200/90 dark:border-slate-700/70 bg-white dark:bg-slate-900 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.10)] lg:scale-110"
              >
                {feature.demo}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

/* ==================================================================== */
/*  Section                                                              */
/* ==================================================================== */

export function FeaturesControl() {
  const container = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative w-full px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex w-full max-w-[1400px] flex-col"
      >
        <h2 className="text-balance max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Everything you touch,
          <br />
          under your control
        </h2>

        <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-pretty text-slate-600 dark:text-slate-300 sm:text-xl md:text-2xl">
          The cinematic part is the first impression. This is the machinery
          behind it — every surface editable, every change live in seconds.
        </p>
      </motion.div>

      {/* Stacking deck */}
      <div ref={container} className="relative mt-10 pb-[30vh] md:mt-16">
        {FEATURES.map((feature, i) => (
          <StickyFeatureCard
            key={feature.index}
            feature={feature}
            i={i}
            total={FEATURES.length}
            progress={scrollYProgress}
            range={[i * (1 / FEATURES.length), 1]}
            depth={FEATURES.length - i - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesControl;
