"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { SIGN_UP_URL } from "@/env";

const TESTIMONIALS = [
  {
    quote:
      "“I can finally say goodbye to Wordpress! WebXite is the first website builder that just made sense to me. I finally feel like my blog truly represents me now!”",
    name: "Stacy Lee",
    role: "Blogger",
    avatar: "/showcase/stacy-lee.jpg",
  },
  {
    quote:
      "“Building client sites used to take weeks of back and forth. With WebXite, I deliver complete custom portfolio sites in a single afternoon.”",
    name: "Bruno Erdtson",
    role: "UI/UX Designer",
    avatar: "/showcase/freelancer-portrait.jpg",
  },
  {
    quote:
      "“The easiest platform for non-technical creators. Everything from hosting to SSL worked out of the box without any plugins or headache.”",
    name: "Andy Grammer",
    role: "Author & Speaker",
    avatar: "/showcase/coach-portrait.jpg",
  },
];

export function Pricing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="pricing" className="relative z-30 w-full border-t border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Testimonial (White) */}
        <div className="flex flex-col justify-between bg-white p-10 sm:p-16 lg:p-20 xl:p-24">
          <div>
            <blockquote className="text-[clamp(1.4rem,2.5vw,2.15rem)] font-bold leading-[1.3] tracking-[-0.025em] text-slate-900">
              {current.quote}
            </blockquote>

            <div className="mt-8 flex items-center gap-3.5">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-100"
              />
              <div>
                <p className="text-sm font-extrabold text-slate-900">{current.name}</p>
                <p className="text-xs font-medium text-slate-400">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Pagination dots & arrows */}
          <div className="mt-12 flex items-center gap-3 text-slate-400">
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="flex h-7 w-7 items-center justify-center rounded-full hover:text-slate-900 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={"Slide " + (idx + 1)}
                  className={"h-2 rounded-full transition-all duration-300 " + (currentIndex === idx ? "w-5 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400")}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="flex h-7 w-7 items-center justify-center rounded-full hover:text-slate-900 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right: Pricing Plan (Dark Navy #121620) */}
        <div className="relative flex flex-col justify-between bg-[#121620] p-10 sm:p-16 lg:p-20 xl:p-24 text-white overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-teal-500/20 to-indigo-500/20 blur-3xl" />

          <div className="flex items-center justify-between gap-4">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400 max-w-[220px] leading-relaxed">
              THE PERFECT PLAN TO GIVE YOU THAT FRIDAY BUZZ
            </p>
            <span className="rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
              50% OFF
            </span>
          </div>

          <div className="my-8">
            <div className="text-[clamp(4.5rem,9vw,7.5rem)] font-black leading-none tracking-[-0.04em] text-white">
              $25
            </div>
            <p className="mt-4 text-[13px] sm:text-[14px] leading-relaxed text-slate-300 max-w-md">
              WebXite was built with simplicity and success in mind. That&apos;s why you&apos;ll find
              everything you need to make a website come to life in one place
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={SIGN_UP_URL}
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-7 py-3.5 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-900"
            >
              Get start today
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-slate-400">
              $50 AFTER FIRST MONTH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
