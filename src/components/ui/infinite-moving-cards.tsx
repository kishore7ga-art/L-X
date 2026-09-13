"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export interface FeatureCardItem {
  icon?: string | React.ReactNode;
  tag?: string;
  stat?: string;
  title: string;
  description: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: FeatureCardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    if (!scrollerRef.current.getAttribute("data-cloned")) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      scrollerRef.current.setAttribute("data-cloned", "true");
    }

    if (direction === "left") {
      containerRef.current.style.setProperty("--animation-direction", "forwards");
    } else {
      containerRef.current.style.setProperty("--animation-direction", "reverse");
    }

    if (speed === "fast") {
      containerRef.current.style.setProperty("--animation-duration", "25s");
    } else if (speed === "normal") {
      containerRef.current.style.setProperty("--animation-duration", "45s");
    } else {
      containerRef.current.style.setProperty("--animation-duration", "80s");
    }

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[340px] sm:w-[400px] md:w-[440px] max-w-full shrink-0 rounded-2xl border border-slate-200/90 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl px-7 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-xl hover:border-indigo-300 group"
            key={item.title + idx}
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-2 rounded-xl bg-slate-100/90 border border-slate-200/80 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                {item.tag && (
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-100">
                    {item.tag}
                  </span>
                )}
              </div>
              {item.stat && (
                <span className="text-sm font-black text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-lg font-mono">
                  {item.stat}
                </span>
              )}
            </div>

            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {item.title}
            </h3>

            <p className="text-sm md:text-base leading-relaxed text-pretty text-slate-600 dark:text-slate-300 font-normal">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
