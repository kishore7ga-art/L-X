"use client";
import React, { useRef, useEffect } from "react";
import { useScroll } from "motion/react";

const TOTAL_FRAMES = 300;

// Path generator function for the 300 sequential frames
const getFramePath = (index: number) => {
  const padded = String(index).padStart(3, "0");
  return `/assets/frames/frame_${padded}.jpg`;
};

export function ScrollSequenceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastRenderedIndexRef = useRef(0);
  const targetFrameRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });


  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Preload array of 300 image objects
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const render = (frameIndex: number) => {
      const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));

      // Fetch frame or fallback to last rendered frame
      let img = images[idx];
      if (!img || !img.complete || img.naturalWidth === 0) {
        img = images[lastRenderedIndexRef.current];
      }

      if (img && img.complete && img.naturalWidth > 0 && canvas) {
        lastRenderedIndexRef.current = idx;
        const wImg = img.naturalWidth;
        const hImg = img.naturalHeight;
        const wCanv = canvas.width;
        const hCanv = canvas.height;

        // Maintain aspect ratio with object-fit: cover logic
        const imgAspect = wImg / hImg;
        const canvAspect = wCanv / hCanv;
        let renderWidth = wCanv;
        let renderHeight = hCanv;

        if (canvAspect > imgAspect) {
          renderWidth = wCanv;
          renderHeight = wCanv / imgAspect;
        } else {
          renderHeight = hCanv;
          renderWidth = hCanv * imgAspect;
        }

        const x = (wCanv - renderWidth) / 2;
        const y = (hCanv - renderHeight) / 2;

        ctx.clearRect(0, 0, wCanv, hCanv);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, x, y, renderWidth, renderHeight);
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      render(lastRenderedIndexRef.current);
    };

    // Calculate real-time scroll progress from DOM rect
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const currentScrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollable));
      targetFrameRef.current = Math.min(TOTAL_FRAMES - 1, Math.round(progress * (TOTAL_FRAMES - 1)));
    };

    // 1. Immediate priority preload: First 20 frames
    for (let i = 1; i <= 20; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        if (!isMounted) return;
        if (i === 1) {
          handleResize();
          render(0);
        }
      };
      images[i - 1] = img;
    }

    // 2. Progressive background batching for frames 21 to 300
    let batchIndex = 21;
    const loadNextBatch = () => {
      if (!isMounted || batchIndex > TOTAL_FRAMES) return;
      const end = Math.min(TOTAL_FRAMES, batchIndex + 30);
      for (let i = batchIndex; i <= end; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        images[i - 1] = img;
      }
      batchIndex = end + 1;
      if (batchIndex <= TOTAL_FRAMES) {
        setTimeout(loadNextBatch, 15);
      }
    };
    setTimeout(loadNextBatch, 50);

    imagesRef.current = images;
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    handleResize();
    handleScroll();

    // 3. Smooth animation frame loop with linear interpolation (lerp)
    let animationFrameId: number;
    let currentFrameFloat = 0;

    const loop = () => {
      // Lerp smoothing towards target frame for buttery 60fps
      currentFrameFloat += (targetFrameRef.current - currentFrameFloat) * 0.18;
      render(Math.round(currentFrameFloat));
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update target frame based on scroll position (0 to 299)
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (latest) => {
      const target = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(latest * (TOTAL_FRAMES - 1))));
      targetFrameRef.current = target;
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[400vh] bg-slate-950 text-white selection:bg-indigo-500 selection:text-white"
    >
      {/* Blend the light page into this dark section, and back out again */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[45vh] bg-[linear-gradient(to_bottom,#DCE7F8_0%,rgba(220,231,248,0.55)_22%,rgba(2,6,23,0)_100%)] dark:bg-[linear-gradient(to_bottom,#0B1020_0%,rgba(11,16,32,0.55)_22%,rgba(2,6,23,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[45vh] bg-[linear-gradient(to_top,#EDF3FC_0%,rgba(237,243,252,0.55)_22%,rgba(2,6,23,0)_100%)] dark:bg-[linear-gradient(to_top,#070910_0%,rgba(7,9,16,0.55)_22%,rgba(2,6,23,0)_100%)]"
      />

      {/* Sticky Viewport Frame pinned exclusively by CSS */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Full Viewport Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Contrast Depth Vignettes */}
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/65" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/95 via-slate-950/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

        {/* Clean Viewport Canvas - No Overlay Text or Cards */}
      </div>
    </section>
  );
}

export default ScrollSequenceSection;
