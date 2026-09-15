"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

import { CONTAINER, REDUCED_MOTION } from "./tokens";
import { SIGN_UP_URL } from "@/env";

const POSTS = [
  {
    image: "/showcase/college-hero.jpg",
    category: "CAMPUS DESIGN",
    date: "SEP 12, 2026",
    title: "How modern universities build high-converting admissions sites",
    excerpt:
      "Explore the key visual design frameworks that drive student enrollment, retention, and campus engagement across all faculties.",
    badgeClass: "bg-rose-50 text-rose-700 border border-rose-200/60",
  },
  {
    image: "/showcase/oxford.jpg",
    category: "PERFORMANCE",
    date: "AUG 28, 2026",
    title: "Achieving 99+ Core Web Vitals on multi-department institution portals",
    excerpt:
      "Why sub-second page loads and automated global edge caching are vital for prospective students, faculty, and alumni.",
    badgeClass: "bg-purple-50 text-purple-700 border border-purple-200/60",
  },
  {
    image: "/showcase/uchicago.jpg",
    category: "NO-CODE TIPS",
    date: "AUG 14, 2026",
    title: "Empowering non-technical staff to launch pages in minutes",
    excerpt:
      "How visual drag-and-drop website builders eliminate IT ticket backlogs and accelerate department announcements.",
    badgeClass: "bg-amber-50 text-amber-800 border border-amber-200/60",
  },
  {
    image: "/showcase/birmingham.jpg",
    category: "SEO & ACCESSIBILITY",
    date: "JUL 30, 2026",
    title: "WCAG 2.1 compliance and built-in SEO for educational institutions",
    excerpt:
      "A complete checklist for meeting accessibility standards while organically ranking on Google search for academic programs.",
    badgeClass: "bg-teal-50 text-teal-800 border border-teal-200/60",
  },
  {
    image: "/showcase/penn.jpg",
    category: "CASE STUDY",
    date: "JUL 18, 2026",
    title: "How 50+ college departments unified their brand under one system",
    excerpt:
      "Case study on streamlining design systems, typography tokens, and global navigation across diverse academic schools.",
    badgeClass: "bg-blue-50 text-blue-700 border border-blue-200/60",
  },
  {
    image: "/showcase/georgetown.jpg",
    category: "SECURITY & SSL",
    date: "JUN 29, 2026",
    title: "Enterprise-grade zero-trust SSL and custom domain management",
    excerpt:
      "Securing campus digital assets with automated SSL certificate renewal, DDoS mitigation, and sub-second edge routing.",
    badgeClass: "bg-emerald-50 text-emerald-800 border border-emerald-200/60",
  },
];

export function Blog() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    if (window.matchMedia(REDUCED_MOTION).matches) return;

    // Auto scroll right infinitely (-50% to 0%)
    const tween = gsap.fromTo(
      node,
      { xPercent: -50 },
      {
        xPercent: 0,
        duration: 38,
        ease: "none",
        repeat: -1,
      }
    );

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.play();
  };

  return (
    <section id="blog" className="relative z-30 w-full bg-[#FAFAFC] py-20 sm:py-28 overflow-hidden border-t border-slate-100">
      <div className={CONTAINER}>
        {/* -- Header ------------------------------------------------------ */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-2">
              RESOURCES, INSPIRATION AND TIPS
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-slate-900">
              WebXite Campus{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600">
                Blog
              </span>
            </h2>
          </div>

          <a
            href={SIGN_UP_URL}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 self-start sm:self-auto"
          >
            See all articles
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* -- Auto Scroll Right Infinite Marquee Track ------------------------ */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Soft edge blur masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAFC] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAFC] to-transparent z-20" />

        <div ref={trackRef} className="flex w-max gap-6 sm:gap-7 items-stretch">
          {/* Render two duplicated sets for seamless -50% to 0% looping */}
          {[...POSTS, ...POSTS].map((post, idx) => (
            <article
              key={idx}
              className="group flex flex-col justify-between w-[310px] sm:w-[350px] md:w-[380px] shrink-0 rounded-3xl bg-white p-5 border border-slate-200/70 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Card thumbnail */}
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category & Date */}
                <div className="mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className={`px-2.5 py-0.5 rounded-full ${post.badgeClass}`}>
                    {post.category}
                  </span>
                  <span className="text-slate-400 font-medium">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-[15px] sm:text-[16px] font-extrabold leading-snug text-slate-900 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500 line-clamp-2 font-normal">
                  {post.excerpt}
                </p>
              </div>

              {/* Continue button */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={SIGN_UP_URL}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-purple-600 transition-colors"
                >
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
