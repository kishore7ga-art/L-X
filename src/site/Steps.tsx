"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

import { CONTAINER, COLORS, EYEBROW, REDUCED_MOTION, SECTION_Y } from "./tokens";
import { SIGN_UP_URL } from "@/env";

/**
 * Three numbered steps beside a browser mock.
 *
 * The steps are a list and the mock is one image, so the whole section is two
 * elements that can be read in either order — which is why the numbers are
 * enormous and the prose is short. Somebody scanning gets "pick, change,
 * publish" from the numerals alone.
 *
 * The mock is drawn in markup rather than shipped as a screenshot. A screenshot
 * of a builder dates the moment the builder's chrome changes, and this one has
 * to survive longer than any particular version of the editor.
 */

const STEPS = [
  {
    n: "1",
    title: "Select an institution template",
    body: "Choose from our library of responsive, WCAG-compliant college, university, and academic department layouts.",
    isCard: true,
    numGradient: "from-rose-500 via-pink-500 to-fuchsia-600",
  },
  {
    n: "2",
    title: "Customize without code",
    body: "Easily integrate faculty directories, course finders, admissions applications, and campus event feeds with visual drag-and-drop.",
    isCard: false,
    numGradient: "from-purple-600 via-indigo-600 to-blue-500",
  },
  {
    n: "3",
    title: "Deploy to your .EDU domain",
    body: "Launch instantly on multi-region cloud edge infrastructure with automated SSL certificates, sub-second speed, and 99.99% uptime.",
    isCard: false,
    numGradient: "from-amber-500 via-orange-500 to-rose-500",
  },
] as const;

export function Steps() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = wrap.current;
    if (!node) return;
    if (window.matchMedia(REDUCED_MOTION).matches) return;

    const rows = node.querySelectorAll<HTMLElement>("[data-step]");
    gsap.set(rows, { y: 22, opacity: 0 });

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        gsap.to(rows, {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.12,
        });
        io.disconnect();
      },
      { threshold: 0.25 },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="how"
      className="relative z-10 overflow-visible pt-[clamp(4rem,7vw,7rem)] pb-0"
      style={{ backgroundColor: COLORS.wash }}
    >
      <div className={`${CONTAINER} grid items-end gap-10 lg:grid-cols-[1.25fr_1fr] xl:grid-cols-[1.3fr_1fr] lg:gap-12`}>
        <BrowserMock />

        <div ref={wrap} className="pb-14 sm:pb-20 lg:pb-28">
          <p className={EYEBROW}>HOW TO LAUNCH YOUR CAMPUS WEBSITE</p>
          <h2 className="mt-3 text-[clamp(2.1rem,4.4vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-900">
            Intuitive visual design for{" "}
            <span className="bg-gradient-to-r from-rose-500 via-fuchsia-500 via-purple-600 to-teal-500 bg-clip-text text-transparent">
              institutions
            </span>
          </h2>

          <div className="mt-8 flex flex-col gap-2">
            {STEPS.map((step) => (
              <div
                key={step.n}
                data-step
                className={`flex items-start gap-6 transition-all duration-300 ${
                  step.isCard
                    ? "rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(11,18,32,0.06)] ring-1 ring-slate-900/[0.04]"
                    : "p-6"
                }`}
              >
                <span
                  className={`bg-gradient-to-b ${step.numGradient} bg-clip-text text-[3rem] font-bold leading-none tracking-[-0.05em] text-transparent shrink-0`}
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-extrabold tracking-[-0.02em] text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[0.875rem] leading-relaxed text-slate-600 max-w-[440px]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pl-6 mt-4">
            <a
              href={SIGN_UP_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.06em] text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 shadow-md"
            >
              Get started
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Large 3D laptop mockup resting on floating rock, expanding to fill the left canvas and dipping into the marquee.
 */
function BrowserMock() {
  return (
    <div className="relative flex items-end justify-center lg:justify-start -mb-6 sm:-mb-10 lg:-mb-14 xl:-mb-16 z-10 w-full">
      <div className="relative w-[115%] sm:w-[125%] lg:w-[135%] xl:w-[140%] max-w-[840px] -ml-[7%] sm:-ml-[12%] lg:-ml-[16%] transition-transform duration-500 hover:scale-[1.02]">
        <img
          src="/showcase/laptop-rock.png"
          alt="Published college website on laptop"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.24)]"
        />
      </div>
    </div>
  );
}

export default Steps;
