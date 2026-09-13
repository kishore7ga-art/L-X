"use client";

import { ReactLenis } from "lenis/react";
import React, { forwardRef } from "react";

export interface StickyScrollGalleryProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  footerText?: string;
  className?: string;
}

const leftColImages = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop&q=85",
];

const centerStickyImages = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=1200&auto=format&fit=crop&q=85",
];

const rightColImages = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1200&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=85",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=85",
];

export const StickyScroll = forwardRef<HTMLElement, StickyScrollGalleryProps>(
  (
    {
      title = (
        <>
          Next-Gen Campus Facilities
          <br />
          & Global Research Labs
        </>
      ),
      subtitle = "Explore our cutting-edge robotics centers, medical simulation suites, and creative studio spaces.",
      footerText = "WEBXITE",
    },
    ref
  ) => {
    return (
      <ReactLenis root>
        <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative w-full" ref={ref as any}>
          
          {/* Ambient Light Navy Blue Glow Gradients */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            {/* Seamless Top Blend Overlay from preceding section */}
            <div
              className="absolute top-0 left-0 right-0 h-40 z-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0) 100%)",
              }}
            />

            <div
              className="absolute -left-[10%] top-[15%] w-[65vw] h-[65vh] rounded-full blur-[90px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(185, 212, 245, 0.55) 0%, rgba(218, 233, 252, 0.25) 50%, rgba(255, 255, 255, 0) 80%)",
              }}
            />
            <div
              className="absolute -right-[10%] top-[40%] w-[65vw] h-[65vh] rounded-full blur-[90px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(175, 205, 240, 0.5) 0%, rgba(212, 230, 250, 0.2) 50%, rgba(255, 255, 255, 0) 80%)",
              }}
            />
            <div
              className="absolute left-[5%] bottom-[15%] w-[65vw] h-[65vh] rounded-full blur-[90px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(185, 212, 245, 0.4) 0%, rgba(218, 233, 252, 0.15) 50%, rgba(255, 255, 255, 0) 80%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[35vh]"
              style={{
                background:
                  "linear-gradient(to top, #ffffff 0%, rgba(235, 244, 255, 0.2) 60%, rgba(255, 255, 255, 0) 100%)",
              }}
            />
          </div>

          {/* 1. Top Sticky Title Section */}
          <div className="relative w-full">
            <section className="text-slate-900 dark:text-white h-screen w-full bg-transparent grid place-content-center sticky top-0 z-10 px-4 sm:px-8">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_55%_45%_at_50%_48%,#000_30%,transparent_100%)] opacity-70 pointer-events-none" />

              <div className="relative z-10 text-center max-w-6xl mx-auto">
                <span className="inline-block text-xs uppercase tracking-widest text-blue-700 dark:text-blue-300 bg-blue-50/90 border border-blue-200/80 px-4 py-1.5 rounded-full mb-6 font-semibold shadow-sm backdrop-blur-sm">
                  Interactive Campus Showcase
                </span>
                <h2 className="text-balance text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#0f1115] leading-[1.08]">
                  {title}
                </h2>
                <p className="mt-8 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed text-pretty">
                  {subtitle}
                </p>
              </div>
            </section>
          </div>

          {/* 2. 3-Column Sticky & Scrolling Gallery Section */}
          <section className="text-slate-900 dark:text-white w-full relative z-20 py-10 px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5 w-full items-start">
              
              {/* Left Column: Scrolls naturally (5 tall images) */}
              <div className="grid gap-3 sm:gap-4 md:gap-5 col-span-12 sm:col-span-4">
                {leftColImages.map((src, i) => (
                  <figure
                    key={i}
                    className="w-full overflow-hidden rounded-2xl sm:rounded-3xl group bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700/50 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all duration-500"
                  >
                    <img
                      src={src}
                      alt={`Campus facility ${i + 1}`}
                      loading="lazy"
                      className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-[450px] sm:h-[520px] md:h-[600px] lg:h-[680px] object-cover rounded-2xl sm:rounded-3xl"
                    />
                  </figure>
                ))}
              </div>

              {/* Center Column: PINNED STICKY in viewport while sides scroll (3 images filling 100vh) */}
              <div className="sticky top-0 h-screen max-h-screen w-full col-span-12 sm:col-span-4 gap-3 sm:gap-4 md:gap-5 grid grid-rows-3 py-3 sm:py-4 z-10">
                {centerStickyImages.map((src, i) => (
                  <figure
                    key={i}
                    className="w-full h-full min-h-0 overflow-hidden rounded-2xl sm:rounded-3xl group bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700/50 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all duration-500 flex"
                  >
                    <img
                      src={src}
                      alt={`Center feature ${i + 1}`}
                      loading="lazy"
                      className="transition-transform duration-700 ease-out group-hover:scale-105 h-full w-full object-cover rounded-2xl sm:rounded-3xl"
                    />
                  </figure>
                ))}
              </div>

              {/* Right Column: Scrolls naturally (5 tall images) */}
              <div className="grid gap-3 sm:gap-4 md:gap-5 col-span-12 sm:col-span-4">
                {rightColImages.map((src, i) => (
                  <figure
                    key={i}
                    className="w-full overflow-hidden rounded-2xl sm:rounded-3xl group bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700/50 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all duration-500"
                  >
                    <img
                      src={src}
                      alt={`Facility highlight ${i + 1}`}
                      loading="lazy"
                      className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-[450px] sm:h-[520px] md:h-[600px] lg:h-[680px] object-cover rounded-2xl sm:rounded-3xl"
                    />
                  </figure>
                ))}
              </div>

            </div>
          </section>

          {/* 3. White Theme Footer Ribbon */}
          <footer className="group relative overflow-hidden pt-24 border-t border-slate-100 dark:border-slate-800 w-full bg-white dark:bg-slate-900">
            <h1 className="text-balance text-[16vw] tracking-tighter translate-y-12 leading-[100%] uppercase font-extrabold text-center bg-gradient-to-b from-slate-200 dark:from-slate-700 via-slate-300 dark:via-slate-600 to-slate-100 bg-clip-text text-transparent transition-all ease-linear select-none">
              {footerText}
            </h1>
            <div className="bg-[#0f1115] text-white h-44 relative z-10 grid place-content-center text-sm sm:text-base rounded-tr-[50px] rounded-tl-[50px] shadow-[0_-15px_40px_rgba(0,0,0,0.06)] px-6 text-center w-full">
              <p className="text-slate-300 dark:text-slate-500 font-medium">
                © 2026 WEBXITE. Where institutions build websites that mean business.
              </p>
            </div>
          </footer>
        </div>
      </ReactLenis>
    );
  }
);

StickyScroll.displayName = "StickyScroll";

export default StickyScroll;
