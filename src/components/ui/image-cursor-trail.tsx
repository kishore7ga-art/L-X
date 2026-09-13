"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export interface ImageCursorTrailProps {
  /** Image URLs cycled through as the cursor moves. */
  items: string[];
  /** Content rendered beneath the trail. */
  children?: React.ReactNode;
  /** Class for the tracking container. */
  className?: string;
  /** Class for each trailing image. */
  imgClass?: string;
  /** Pixels the cursor must travel before the next image is dropped. */
  distance?: number;
  /** How many images stay on screen at once. */
  maxNumberOfImages?: number;
  /** Fade + scale images in and out instead of hard-cutting them. */
  fadeAnimation?: boolean;
  /** CSS selector for a region inside the container that the trail skips. */
  excludeSelector?: string;
}

export function ImageCursorTrail({
  items,
  children,
  className,
  imgClass = "w-40 h-48",
  distance = 20,
  maxNumberOfImages = 5,
  fadeAnimation = false,
  excludeSelector,
}: ImageCursorTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  // Round-robin pointer into `items`, plus the queue of currently visible ones.
  const nextIndexRef = useRef(0);
  const activeQueueRef = useRef<number[]>([]);
  const zIndexRef = useRef(1);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const wasInsideRef = useRef(false);

  /* The trail is driven from a window-level listener rather than React's
   * onMouseMove. Children such as the Compare slider run their own pointer
   * handling, so bubbling through them is not something we want to depend on;
   * hit-testing the container rect works no matter what sits inside it. */
  useEffect(() => {
    const hide = (index: number) => {
      const img = imageRefs.current[index];
      if (!img) return;
      gsap.to(img, {
        opacity: 0,
        scale: 0.6,
        duration: fadeAnimation ? 0.5 : 0.2,
        ease: "power2.out",
      });
    };

    const hideAll = () => {
      activeQueueRef.current.forEach(hide);
      activeQueueRef.current = [];
    };

    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!inside) {
        if (wasInsideRef.current) {
          wasInsideRef.current = false;
          hideAll();
        }
        return;
      }

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Opt-out zone: over it we drop the trail entirely and keep re-seeding,
      // so nothing lands on top of it and nothing bursts out on the way back.
      if (excludeSelector) {
        const zone = containerRef.current?.querySelector(excludeSelector);
        if (zone) {
          const zr = zone.getBoundingClientRect();
          if (
            e.clientX >= zr.left &&
            e.clientX <= zr.right &&
            e.clientY >= zr.top &&
            e.clientY <= zr.bottom
          ) {
            hideAll();
            wasInsideRef.current = true;
            lastPosRef.current = { x, y };
            return;
          }
        }
      }

      // Seed the origin on entry so we don't spawn a burst from (0,0).
      if (!wasInsideRef.current) {
        wasInsideRef.current = true;
        lastPosRef.current = { x, y };
        return;
      }

      const travelled = Math.hypot(
        x - lastPosRef.current.x,
        y - lastPosRef.current.y
      );
      if (travelled < distance) return;
      lastPosRef.current = { x, y };

      const index = nextIndexRef.current % items.length;
      nextIndexRef.current += 1;

      const img = imageRefs.current[index];
      if (!img) return;

      gsap.killTweensOf(img);
      gsap.set(img, {
        left: x,
        top: y,
        xPercent: -50,
        yPercent: -50,
        zIndex: zIndexRef.current++,
      });
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: fadeAnimation ? 0.35 : 0.15,
          ease: "power3.out",
        }
      );

      // Retire anything beyond the visible budget.
      activeQueueRef.current = activeQueueRef.current.filter((i) => i !== index);
      activeQueueRef.current.push(index);
      while (activeQueueRef.current.length > maxNumberOfImages) {
        const stale = activeQueueRef.current.shift();
        if (stale !== undefined) hide(stale);
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      gsap.killTweensOf(imageRefs.current.filter(Boolean) as HTMLImageElement[]);
    };
  }, [items, distance, maxNumberOfImages, fadeAnimation, excludeSelector]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Trail layer - floats above the content; pointer-events-none so it
       * never steals hover from the Compare slider underneath. */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-visible">
        {items.map((src, i) => (
          <img
            key={`${src}-${i}`}
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
            src={src}
            alt=""
            aria-hidden="true"
            draggable={false}
            loading="lazy"
            decoding="async"
            className={cn(
              "absolute select-none rounded-xl object-cover opacity-0 shadow-[0_12px_32px_rgba(15,23,42,0.18)]",
              imgClass
            )}
          />
        ))}
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex w-full flex-col items-center">
        {children}
      </div>
    </div>
  );
}

export default ImageCursorTrail;
