"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { BRAND_GRADIENT } from "./tokens";
import { SIGN_UP_URL } from "@/env";

/**
 * The dismissible strip above the header.
 *
 * Dismissal is remembered in `sessionStorage`, not `localStorage`, and that is
 * the whole decision here. A promotional bar somebody has closed should stay
 * closed for the visit; remembering it forever means the next campaign never
 * reaches anybody who ever closed the last one, and remembering it not at all
 * means it reappears on every page they open.
 *
 * Storage can throw — private windows, blocked site data — so every access is
 * guarded and the bar simply shows in that case. Failing open is right for
 * something whose absence costs nothing.
 */
const KEY = "wx-announce-dismissed";

export function AnnouncementBar() {
  const [open, setOpen] = useState(() => {
    try {
      return sessionStorage.getItem(KEY) !== "1";
    } catch {
      return true;
    }
  });

  if (!open) return null;

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* Nothing to do. The bar is gone for this render either way. */
    }
  };

  return (
    <div
      className="relative z-50 w-full text-white"
      style={{ background: BRAND_GRADIENT }}
    >
      <div className="mx-auto flex max-w-[1540px] items-center justify-center gap-3 px-6 py-2.5 text-center sm:px-10 lg:px-16">
        <span className="hidden rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] sm:inline-block">
          New
        </span>
        <p className="text-[13px] font-medium leading-snug">
          Built for Indian institutions — connect your own domain free for the first year.{" "}
          <a
            href={SIGN_UP_URL}
            className="font-bold underline decoration-white/40 underline-offset-2 transition-colors hover:decoration-white"
          >
            Get started
          </a>
        </p>
      </div>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        /* 44px of hit area, per the touch-target minimum, while the glyph
           inside stays small enough not to compete with the message. */
        className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
