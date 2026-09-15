"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { CONTAINER } from "@/site/tokens";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "saas-diff",
    question: "How does SaaS differ from traditional software?",
    answer:
      "SaaS is subscription-based and centrally hosted. Users pay a recurring fee to access the software over the internet, eliminating the need for upfront costs and ongoing maintenance.",
  },
  {
    id: "customizable-1",
    question: "How customizable is SaaS software?",
    answer:
      "You have complete control over styling, branding, colors, domain setup, custom code integrations, and content layout with our visual drag-and-drop builder.",
  },
  {
    id: "cancel-data-1",
    question: "What happens to my data if I cancel my subscription?",
    answer:
      "Your data remains completely safe, encrypted, and exportable for 30 days following cancellation, allowing you to reactivate or backup anytime.",
  },
  {
    id: "benefits",
    question: "What are the benefits of using SaaS?",
    answer:
      "Instant deployment, automated cloud updates, 99.99% uptime, zero hosting management headaches, and built-in enterprise SSL security.",
  },
  {
    id: "pricing-work",
    question: "How does pricing work for SaaS products?",
    answer:
      "We offer transparent, all-inclusive pricing with monthly or annual billing. All features, hosting, domain routing, and unlimited bandwidth are included with no hidden fees.",
  },
  {
    id: "customizable-2",
    question: "How customizable is SaaS software?",
    answer:
      "Every template is 100% modular. You can adjust layouts, typography, component hierarchies, forms, and custom CSS without touching server code.",
  },
  {
    id: "cancel-data-2",
    question: "What happens to my data if I cancel my subscription?",
    answer:
      "We provide instant one-click data export in standard JSON and CSV formats, and your assets remain archived safely should you ever return.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("saas-diff");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative z-30 w-full bg-[#FBFBFC] py-20 sm:py-28 lg:py-36 overflow-hidden border-t border-slate-100">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.65fr] gap-12 lg:gap-20 items-start">
          {/* ── Left Column: Giant FAQs Title ─────────────────────────────── */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-[clamp(4.5rem,10.5vw,8.5rem)] font-black leading-[0.88] tracking-[-0.05em] text-slate-950">
              FAQs
            </h2>
            <p className="mt-6 text-slate-500 text-sm sm:text-base max-w-sm leading-relaxed">
              Everything you need to know about the product and billing. Can&apos;t find what you&apos;re looking for?{" "}
              <a href="mailto:info@webxite.com" className="font-semibold text-purple-600 hover:text-purple-700 underline underline-offset-2 transition-colors">
                Contact our team.
              </a>
            </p>
          </div>

          {/* ── Right Column: Stacked Card Accordion Items ────────────────── */}
          <div className="flex flex-col gap-3.5 w-full">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className={`group rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/5 border border-slate-200/80"
                      : "bg-white/80 border border-slate-200/60 hover:bg-white hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 select-none">
                    <h3
                      className={`text-[15px] sm:text-[16.5px] leading-snug transition-colors ${
                        isOpen
                          ? "font-bold text-slate-900"
                          : "font-medium text-slate-600 group-hover:text-slate-900"
                      }`}
                    >
                      {item.question}
                    </h3>
                    <div className="shrink-0 flex items-center justify-center">
                      {isOpen ? (
                        <X className="h-5 w-5 text-purple-600 transition-transform duration-200 rotate-0" />
                      ) : (
                        <Plus className="h-5 w-5 text-slate-400 group-hover:text-slate-700 transition-colors" />
                      )}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3.5 pt-1 text-[13.5px] sm:text-[14.5px] leading-relaxed text-slate-600 font-normal">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
