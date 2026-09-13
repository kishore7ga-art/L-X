"use client";

import React from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { ArrowRight, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ==================================================================== */
/*  Types                                                               */
/* ==================================================================== */

export interface MorphingDialogItem {
  id: string;
  /** Small label above the title, e.g. "SEO" */
  eyebrow?: string;
  title: string;
  /** Short summary shown on the closed card */
  description?: string;
  /** Accent colour for the eyebrow and icon */
  accent?: string;
  icon?: React.ComponentType<{ className?: string }>;
  /** Body rendered inside the opened dialog */
  content: React.ReactNode;
  /** Optional footnote pinned to the foot of the dialog */
  note?: string;
}

export interface MorphingDialogProps {
  items?: MorphingDialogItem[];
  className?: string;
  /** Grid classes for the closed cards */
  gridClassName?: string;
}

/* One transition for the box, so opening and closing feel identical */
const MORPH = {
  type: "spring" as const,
  stiffness: 210,
  damping: 26,
  mass: 0.9,
};

/* ==================================================================== */
/*  Cards + dialog                                                      */
/* ==================================================================== */

export function MorphingDialog({
  items = DEFAULT_ITEMS,
  className,
  gridClassName = "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
}: MorphingDialogProps) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const triggerRef = React.useRef<HTMLElement | null>(null);

  const active = items.find((i) => i.id === activeId) ?? null;

  const close = React.useCallback(() => {
    setActiveId(null);
    triggerRef.current?.focus();
  }, []);

  /* Escape to close, and lock the page behind the dialog */
  React.useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active, close]);

  const accentOf = (item: MorphingDialogItem) => item.accent ?? "#2563EB";

  return (
    <LayoutGroup>
      <div className={cn(gridClassName, className)}>
        {items.map((item) => {
          const isActive = item.id === activeId;
          const accent = accentOf(item);
          const Icon = item.icon;

          return (
            <motion.button
              key={item.id}
              layoutId={`morph-card-${item.id}`}
              transition={MORPH}
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setActiveId(item.id);
              }}
              aria-haspopup="dialog"
              aria-expanded={isActive}
              /* Hidden outright while open, so nothing doubles up */
              animate={{ opacity: isActive ? 0 : 1 }}
              style={{
                pointerEvents: isActive ? "none" : "auto",
                borderRadius: 24,
              }}
              className="group relative flex min-h-[440px] cursor-pointer flex-col items-start overflow-hidden border border-slate-200/90 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/75 p-9 text-left shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-[box-shadow,transform,border-color] duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              {/* Accent rail, drawn on entry */}
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="absolute inset-x-0 top-0 h-[3px] origin-left"
                style={{
                  background: `linear-gradient(90deg, ${accent}, transparent)`,
                }}
              />

              {/* Colour bloom that wakes on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-50"
                style={{ background: accent }}
              />

              <div className="relative flex w-full items-start justify-between">
                {Icon && (
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/50 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: accent }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                )}
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-500 transition-all duration-500 group-hover:rotate-90 group-hover:border-slate-900 dark:group-hover:border-white group-hover:text-slate-900 dark:group-hover:text-white">
                  <Plus className="h-4 w-4" />
                </span>
              </div>

              {item.eyebrow && (
                <span
                  className="relative mt-6 block font-mono text-[12px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: accent }}
                >
                  {item.eyebrow}
                </span>
              )}

              <h3
                className={cn(
                  "relative text-[26px] font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-[32px]",
                  item.eyebrow ? "mt-2.5" : "mt-7",
                )}
              >
                {item.title}
              </h3>

              {item.description && (
                <p className="relative mt-4 text-base leading-relaxed text-pretty text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              )}

              <span
                className="relative mt-auto flex items-center gap-2 pt-8"
                style={{ color: accent }}
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]">
                  Open
                </span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Rendered in this same tree — not a portal — so shared layout can
          actually coordinate the card and the panel. */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="morph-overlay"
            className="fixed inset-0 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-[3px]"
              onClick={close}
            />

            <div className="pointer-events-none absolute inset-0 grid place-items-center p-4 sm:p-6">
              <motion.div
                layoutId={`morph-card-${active.id}`}
                transition={MORPH}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`morph-dialog-title-${active.id}`}
                style={{ borderRadius: 24 }}
                className="pointer-events-auto relative flex max-h-[86vh] w-full max-w-3xl flex-col overflow-hidden border border-slate-200/90 dark:border-slate-700/70 bg-white dark:bg-slate-900 shadow-[0_40px_120px_rgba(15,23,42,0.28)]"
              >
                {/* Content cross-fades in once the box has travelled */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  transition={{ duration: 0.28, delay: 0.18 }}
                  className="flex min-h-0 flex-col overflow-y-auto"
                >
                  <div className="flex items-start gap-4 border-b border-slate-200/80 dark:border-slate-700/60 p-6 sm:p-8">
                    {active.icon && (
                      <span
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/50"
                        style={{ color: accentOf(active) }}
                      >
                        <active.icon className="h-6 w-6" />
                      </span>
                    )}

                    <div className="min-w-0 flex-1">
                      {active.eyebrow && (
                        <span
                          className="block font-mono text-[12px] font-bold uppercase tracking-[0.16em]"
                          style={{ color: accentOf(active) }}
                        >
                          {active.eyebrow}
                        </span>
                      )}
                      <h2
                        id={`morph-dialog-title-${active.id}`}
                        className={cn(
                          "text-[26px] font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-3xl",
                          active.eyebrow && "mt-2",
                        )}
                      >
                        {active.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">{active.content}</div>

                  {active.note && (
                    <p className="border-t border-slate-200/70 dark:border-slate-700/50 bg-slate-50/60 dark:bg-slate-800/25 px-6 py-4 text-[11px] leading-relaxed text-pretty text-slate-400 dark:text-slate-400 sm:px-8">
                      {active.note}
                    </p>
                  )}
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.18 }}
                  onClick={close}
                  aria-label="Close dialog"
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/85 text-slate-500 dark:text-slate-400 shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-slate-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

/* ==================================================================== */
/*  Default items, so <MorphingDialog /> renders standalone             */
/* ==================================================================== */

const DEFAULT_ITEMS: MorphingDialogItem[] = [
  {
    id: "card-1",
    eyebrow: "Architecture",
    title: "Discoverable",
    description:
      "Every component is exported at the root level, so usage is easy to infer and context stays small.",
    accent: "#2563EB",
    content: (
      <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-300">
        <p>
          Flat semantic exports, composites that double as executable
          documentation, and primitives that stay stable so you compose rather
          than fork.
        </p>
      </div>
    ),
  },
  {
    id: "card-2",
    eyebrow: "Design system",
    title: "Predictable",
    description:
      "A unified visual language across every component, with globally configured motion.",
    accent: "#4F46E5",
    content: (
      <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-300">
        <p>
          Utility patterns for consistent styling, one animation configuration
          for every interactive element, and generous hit areas.
        </p>
      </div>
    ),
  },
  {
    id: "card-3",
    eyebrow: "Layers",
    title: "Composable",
    description:
      "Composites for velocity, primitives for control — mixed freely in one project.",
    accent: "#7C3AED",
    content: (
      <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-300">
        <p>
          Pre-assembled components cover standard cases; thin primitives give
          you complete control over the DOM when a design demands it.
        </p>
      </div>
    ),
  },
];

export default MorphingDialog;
