"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { IconDotsVertical } from "@tabler/icons-react";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = true,
  autoplayDuration = 6000,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isInteracting, setIsInteracting] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<number>(1);

  const updatePosition = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderXPercent(percent);
  }, []);

  // Smooth Auto-glide animation when cursor is not inside
  useEffect(() => {
    if (!autoplay || isInteracting) return;

    let animId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const speed = 70 / (autoplayDuration / 2000); // smooth glide rate
      setSliderXPercent((prev) => {
        let next = prev + directionRef.current * speed * delta;
        if (next >= 85) {
          next = 85;
          directionRef.current = -1;
        } else if (next <= 15) {
          next = 15;
          directionRef.current = 1;
        }
        return next;
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [autoplay, autoplayDuration, isInteracting]);

  // Pointer Events (Mouse, Touch, Stylus)
  const handlePointerEnter = () => {
    setIsInteracting(true);
  };

  const handlePointerLeave = () => {
    setIsInteracting(false);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsInteracting(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsInteracting(true);
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch (_) {}
  };

  return (
    <div
      ref={sliderRef}
      className={cn("w-full h-full overflow-hidden select-none relative cursor-col-resize touch-none", className)}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerLeave}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-[2px] absolute top-0 m-auto z-30 bg-white/90 dark:bg-slate-900/85 shadow-sm"
          style={{
            left: `${sliderXPercent}%`,
            top: "0",
            zIndex: 40,
          }}
          transition={{ duration: 0 }}
        >
          {showHandlebar && (
            <div className="h-7 w-7 rounded-full top-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 z-30 -left-[13px] absolute flex items-center justify-center shadow-lg border border-slate-200 dark:border-slate-700">
              <IconDotsVertical className="h-4 w-4 text-slate-700 dark:text-slate-200" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 rounded-2xl md:rounded-3xl shrink-0 w-full h-full select-none overflow-hidden",
                firstImageClassName
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              <img
                alt="without webxite"
                src={firstImage}
                className={cn(
                  "absolute inset-0 z-20 rounded-2xl md:rounded-3xl shrink-0 w-full h-full select-none object-cover",
                  firstImageClassName
                )}
                draggable={false}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            className={cn(
              "absolute top-0 left-0 z-[19] rounded-2xl md:rounded-3xl w-full h-full select-none object-cover",
              secondImageClassname
            )}
            alt="with webxite"
            src={secondImage}
            draggable={false}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const MemoizedSparklesCore = React.memo(SparklesCore);

export default Compare;
