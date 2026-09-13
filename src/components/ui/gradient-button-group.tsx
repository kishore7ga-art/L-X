"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* ==================================================================== */
/*  Shared gradient                                                      */
/* ==================================================================== */

export type Gradient = [string, string, string];

const DEFAULT_GRADIENT: Gradient = ["#2563EB", "#4F46E5", "#7C3AED"];

const linear = (g: Gradient, angle = "110deg") =>
  `linear-gradient(${angle}, ${g[0]}, ${g[1]}, ${g[2]})`;

/* ==================================================================== */
/*  GradientButton — one button, four looks                              */
/* ==================================================================== */

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** solid: gradient fill · outline: gradient hairline · ghost: gradient on hover · icon: square */
  variant?: "solid" | "outline" | "ghost" | "icon";
  size?: "sm" | "md";
  gradient?: Gradient;
}

export const GradientButton = React.forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(
  (
    {
      variant = "solid",
      size = "md",
      gradient = DEFAULT_GRADIENT,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const pad =
      variant === "icon"
        ? "p-2"
        : size === "sm"
          ? "px-3.5 py-1.5 text-[12.5px]"
          : "px-4 py-2 text-[13px]";

    const base = cn(
      "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold",
      "tracking-[-0.01em] transition-all duration-300 active:scale-[0.97]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2",
      pad,
      className,
    );

    /* A light sweep that crosses the button on hover */
    const sheen = (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]"
      />
    );

    if (variant === "solid") {
      return (
        <button
          ref={ref}
          className={cn(base, "text-white hover:-translate-y-[1px]")}
          style={{ backgroundImage: linear(gradient) }}
          {...props}
        >
          {sheen}
          <span className="relative flex items-center gap-1.5">{children}</span>
        </button>
      );
    }

    if (variant === "outline" || variant === "icon") {
      return (
        <button
          ref={ref}
          className={cn(base, "bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:-translate-y-[1px]")}
          {...props}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full p-px opacity-30 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              backgroundImage: linear(gradient),
              mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
            }}
          />
          <span className="relative flex items-center gap-1.5">{children}</span>
        </button>
      );
    }

    /* ghost */
    return (
      <button
        ref={ref}
        className={cn(base, "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white")}
        {...props}
      >
        <span className="relative flex items-center gap-1.5">{children}</span>
      </button>
    );
  },
);
GradientButton.displayName = "GradientButton";

/* ==================================================================== */
/*  GradientButtonGroup — segmented, with a sliding gradient pill        */
/* ==================================================================== */

export interface GradientButtonGroupItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface GradientButtonGroupProps {
  items?: GradientButtonGroupItem[];
  /** Controlled active id. Omit to let the group manage its own. */
  value?: string;
  onChange?: (id: string) => void;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md";
  gradient?: Gradient;
  className?: string;
}

const DEFAULT_ITEMS: GradientButtonGroupItem[] = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
];

export const GradientButtonGroup = ({
  items = DEFAULT_ITEMS,
  value,
  onChange,
  orientation = "horizontal",
  size = "md",
  gradient = DEFAULT_GRADIENT,
  className,
}: GradientButtonGroupProps) => {
  const [internal, setInternal] = React.useState(items[0]?.id);
  const current = value ?? internal;

  /* keeps the sliding pill unique when several groups are on one page */
  const layoutId = `gbg-pill-${React.useId().replace(/:/g, "")}`;

  const select = (id: string) => {
    if (value === undefined) setInternal(id);
    onChange?.(id);
  };

  const vertical = orientation === "vertical";

  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      className={cn(
        "relative flex rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/65 p-1 backdrop-blur-xl",
        vertical ? "flex-col gap-1 rounded-2xl" : "items-center",
        className,
      )}
    >
      {items.map((item) => {
        const isActive = item.id === current;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => select(item.id)}
            className={cn(
              "relative flex items-center justify-center gap-1.5 whitespace-nowrap font-medium",
              "tracking-[-0.01em] transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
              vertical ? "w-full justify-start rounded-xl" : "rounded-full",
              size === "sm"
                ? "px-3 py-1.5 text-[12.5px]"
                : "px-3.5 py-1.5 text-[13px]",
              isActive ? "text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white",
            )}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 -z-0",
                  vertical ? "rounded-xl" : "rounded-full",
                )}
                style={{ backgroundImage: linear(gradient) }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {Icon && <Icon className="relative z-10 h-3.5 w-3.5" />}
            <span className="relative z-10">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default GradientButtonGroup;
