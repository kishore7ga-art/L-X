import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { useTheme } from "@/components/theme-provider";
import { SIGN_UP_URL } from "@/env";

export function HeroSection() {
  const { resolved } = useTheme();
  const isDark = resolved === "dark";

  return (
    <section className="relative w-full min-h-[92vh] pt-24 pb-14 flex flex-col items-center justify-center text-center px-6 bg-transparent overflow-hidden">
      {/* Background Interactive Text Hover Effect (Fit to Page) */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-auto opacity-45 hover:opacity-90 transition-opacity duration-700 w-full h-full overflow-hidden select-none">
        <TextHoverEffect
          text="WEBXITE"
          className="w-full h-auto max-h-[88vh]"
          strokeClassName={isDark ? "stroke-slate-600" : "stroke-slate-300"}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-[1300px] mx-auto flex flex-col items-center z-10 px-4 pointer-events-none">
        <h1 className="text-balance text-[clamp(3.4rem,7.5vw,7.25rem)] font-normal leading-[1.06] tracking-[-0.04em] text-[#0a0c10] dark:text-white mb-8 max-w-[1150px]">
          Beautiful Websites for<br />
          Institution
        </h1>

        <p className="text-[clamp(1.2rem,2vw,1.65rem)] font-normal leading-relaxed text-pretty text-[#222222] dark:text-slate-300 tracking-[-0.015em] mb-11 max-w-[850px]">
          WebXite is where institutions build websites that mean business.
        </p>

        <a
          href={SIGN_UP_URL}
          className="pointer-events-auto inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-slate-900 text-[1.15rem] sm:text-[1.25rem] font-medium px-11 py-5 rounded-full border border-black dark:border-white transition-all duration-300 hover:bg-[#1f1f1f] dark:hover:bg-slate-100 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)] shadow-[0_6px_20px_rgba(0,0,0,0.1)] cursor-pointer no-underline tracking-[-0.01em]"
        >
          Get Started
        </a>

        <p className="text-[0.95rem] sm:text-[1rem] text-[#4b5563] dark:text-slate-400 mt-7 tracking-[-0.005em] font-normal">
          Start for free. No credit card required.
        </p>
      </div>
    </section>
  );
}


