"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the purpose of this website?",
    answer:
      "WebXite engineers next-generation, high-converting 3D interactive web platforms for ambitious brands and fast-scaling startups. We replace slow, static templates with ultra-fast, modern websites designed to maximize user engagement and revenue."
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our engineering team directly via the contact button in the header or schedule an instant strategy call. We review project inquiries within 24 hours and provide an interactive architectural roadmap."
  },
  {
    question: "How do I find the best products?",
    answer:
      "Explore our interactive showcase and live client deployments to see performance benchmarks, conversion case studies, and tailored feature sets designed for your industry."
  },
  {
    question: "Can I return a product?",
    answer:
      "We work in agile sprint milestones with complete transparency. Every project includes structured review checkpoints, guaranteeing 100% satisfaction before final production launch."
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes. All WebXite digital platforms are deployed to a global multi-region edge CDN across 300+ edge locations worldwide, ensuring sub-second delivery for global audiences."
  },
  {
    question: "How can I track my order?",
    answer:
      "We provide a live private client sprint portal with real-time commit logs, staging preview links, and dedicated engineering Slack access throughout your 4-to-7 day delivery sprint."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[95vw] 2xl:max-w-[1540px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Massive Heading */}
        <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
          <h2 className="text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.8rem] font-black tracking-tight text-slate-900 dark:text-white leading-[0.98]">
            Frequently <br />
            asked <br />
            questions
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed text-pretty max-w-md">
            Everything you need to know about our engineering process, delivery timelines, and performance architecture.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base transition-all shadow-md hover:shadow-xl group"
          >
            <span>Ask a custom question</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Column: Full-Width Prominent Interactive Accordion List */}
        <div className="lg:col-span-7 flex flex-col w-full">
          <div className="border-t border-slate-300/90 dark:border-slate-800">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-slate-300/90 dark:border-slate-800 transition-colors duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-7 sm:py-8 md:py-9 flex items-start gap-4 sm:gap-6 text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    {/* Blue Plus / Minus Icon on Left */}
                    <div className="shrink-0 mt-1 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-transform duration-300">
                      {isOpen ? (
                        <Minus className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] group-hover:scale-110 transition-transform" />
                      )}
                    </div>

                    {/* Question Text */}
                    <span className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {faq.question}
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-11 sm:pl-14 pr-4 text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed font-normal">
                          {faq.answer}
                        </div>
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
