"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { CONTAINER } from "@/site/tokens";
import { SIGN_UP_URL } from "@/env";

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "What is Friday?",
    answer:
      "Friday is the modern, super simple drag-and-drop website builder designed to make creating beautiful, high-performance websites effortless without writing a single line of code.",
  },
  {
    question: "How is Friday different from other website builders?",
    answer:
      "Friday is the answer to other popular and overcomplicated services that exist today. Friday includes everything you need to create and manage a beautiful website. No more plugins, themes, or service tiers. Just one plan gets you the industry's best tools and most secure hosting. Friday is meant to make your life easier, and help you finally have a website that you're proud of!",
  },
  {
    question: "What does a Friday subscription include?",
    answer:
      "Your subscription includes unlimited pages, custom domain hosting, free 256-bit SSL certificate, automated daily backups, built-in SEO tools, fast global CDN, and 24/7 dedicated priority support.",
  },
  {
    question: "How much does Friday cost?",
    answer:
      "Friday costs just $25 for your first month (50% off), then $50/month with every single feature, hosting, and template completely included�with zero hidden transaction fees or upselling.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply click 'Create Your Website Now' or 'Get Started Today', pick a starter template from our 200+ curated library, and customize it visually in minutes with our intuitive live editor.",
  },
  {
    question: "Can I move to Friday from a different platform?",
    answer:
      "Yes! You can easily connect your existing custom domain name, import your content and assets, and migrate smoothly from WordPress, Wix, Squarespace, or Shopify in a few clicks.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Index 1 is open by default to match reference

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-30 w-full bg-[#E8EDF4] py-20 sm:py-28 overflow-hidden">
      <div className={CONTAINER}>
        {/* -- Section Header ---------------------------------------------- */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-2">
            FREQUENTLY ASKED QUESTION
          </p>
          <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-slate-900">
            Need a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-600">
              support?
            </span>
          </h2>
        </div>

        {/* -- Accordion List ---------------------------------------------- */}
        <div className="max-w-3xl mx-auto flex flex-col">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-slate-300/70 py-4 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left py-2 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-[16.5px] font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 text-slate-400 group-hover:text-slate-700 transition-colors">
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 mb-2 rounded-2xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-slate-900/5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* -- Bottom CTA --------------------------------------------------- */}
        <div className="mt-14 flex justify-center">
          <a
            href={SIGN_UP_URL}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-800 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5"
          >
            Visit help center
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
