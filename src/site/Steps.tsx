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
    title: "Create a website",
    body: "Select from any of our industry-leading website templates that best fit your personal style and professional needs.",
    isCard: true,
    numGradient: "from-cyan-400 via-blue-500 to-indigo-600",
  },
  {
    n: "2",
    title: "Easy to customize",
    body: "Explore which tools you want to add—whether it's setting up an online store, booking services, or adding your favorite third-party extensions.",
    isCard: false,
    numGradient: "from-teal-400 via-cyan-500 to-blue-500",
  },
  {
    n: "3",
    title: "Solve! Too fast",
    body: "A site so easy your mum could build it... but just in case you need a hand, we offer tips and guides, 24/7 support, FAQs and a forum to chat with fellow website creators.",
    isCard: false,
    numGradient: "from-blue-500 via-indigo-600 to-purple-600",
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
      <div className={`${CONTAINER} grid items-end gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14`}>
        <BrowserMock />

        <div ref={wrap} className="pb-14 sm:pb-20 lg:pb-28">
          <p className={EYEBROW}>HOW TO CREATE A WEBSITE</p>
          <h2 className="mt-3 text-[clamp(2.1rem,4.4vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-900">
            Friday is for{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              everyone
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
 * 3D laptop mockup resting on floating rock, overlapping into the marquee band below.
 */
function BrowserMock() {
  return (
    <div className="relative flex items-end justify-center -mb-8 sm:-mb-14 lg:-mb-24 z-10">
      <div className="relative w-full max-w-[620px] transition-transform duration-500 hover:scale-[1.02]">
        <img
          src="/showcase/laptop-rock.png"
          alt="Published college website on laptop"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.22)]"
        />
      </div>
    </div>
  );
}
