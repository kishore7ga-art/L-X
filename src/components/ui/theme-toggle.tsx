"use client";

import React from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

/**
 * A compact light/dark switch. The knob slides, and the two icons
 * cross-fade so the control reads at a glance in either theme.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolved, toggle } = useTheme();
  const isDark = resolved === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative inline-flex h-9 w-[62px] shrink-0 items-center rounded-full border p-1 transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2",
        "border-slate-200 bg-slate-100 focus-visible:ring-offset-white",
        "dark:border-white/15 dark:bg-white/10 dark:focus-visible:ring-offset-slate-950",
        className,
      )}
    >
      {/* Sliding knob */}
      <motion.span
        aria-hidden="true"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 34 }}
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full shadow-sm",
          isDark ? "ml-auto bg-slate-900" : "mr-auto bg-white",
        )}
      >
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5 text-blue-300" />
          ) : (
            <Sun className="h-3.5 w-3.5 text-amber-500" />
          )}
        </motion.span>
      </motion.span>
    </button>
  );
}

export default ThemeToggle;
