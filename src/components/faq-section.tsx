"use client";

import React, { useState } from "react";
import {
  Smile,
  Layers,
  CreditCard,
  UserPlus,
  Receipt,
  Mail,
  MessageSquare,
  PlayCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { CONTAINER } from "@/site/tokens";

interface FAQ {
  id: string;
  category: "General" | "Pricing" | "Dashboard" | "API";
  question: string;
  answer: string;
  icon: React.ElementType;
}

const CATEGORIES = ["General", "Pricing", "Dashboard", "API"] as const;

const FAQS: FAQ[] = [
  {
    id: "trial",
    category: "General",
    icon: Smile,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
  },
  {
    id: "plan",
    category: "General",
    icon: Layers,
    question: "Can I change my plan later?",
    answer:
      "Yes, you can easily upgrade, downgrade, or change your billing frequency directly from your account settings at any time.",
  },
  {
    id: "cancel",
    category: "Pricing",
    icon: CreditCard,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time with a single click. There are no lock-in contracts or cancellation penalties.",
  },
  {
    id: "invoice",
    category: "Pricing",
    icon: UserPlus,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add custom details such as your institution or company name, VAT/tax ID, purchase order number, and billing address.",
  },
  {
    id: "billing",
    category: "Pricing",
    icon: Receipt,
    question: "How does billing work?",
    answer:
      "Plans are billed monthly or annually. Invoices are automatically generated and sent to your designated billing email address.",
  },
  {
    id: "email",
    category: "Dashboard",
    icon: Mail,
    question: "How do I change my account email?",
    answer:
      "You can update your account email and profile details anytime from your dashboard under Settings > Profile.",
  },
  {
    id: "support",
    category: "General",
    icon: MessageSquare,
    question: "How does support work?",
    answer:
      "Our friendly support team is available 24/7 via live chat and email. Enterprise and campus plans also include dedicated phone support.",
  },
  {
    id: "tutorials",
    category: "General",
    icon: PlayCircle,
    question: "Do you provide tutorials?",
    answer:
      "Yes! We provide step-by-step video tutorials, comprehensive documentation, and interactive walk-through guides.",
  },
];

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("General");
  const [openId, setOpenId] = useState<string | null>("trial");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs =
    selectedCategory === "General"
      ? FAQS
      : FAQS.filter((f) => f.category === selectedCategory);

  return (
    <section id="faq" className="relative z-30 w-full bg-white py-20 sm:py-28 overflow-hidden">
      <div className={CONTAINER}>
        {/* -- Section Header ---------------------------------------------- */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-3">
            Frequently asked questions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            These are the most commonly asked questions about WebXite.
            <br />
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#contact" className="underline hover:text-slate-900 font-medium transition-colors">
              Chat to our friendly team!
            </a>
          </p>
        </div>

        {/* -- Category Filter Pills ---------------------------------------- */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={
                  "rounded-full px-5 py-1.5 text-xs font-bold transition-all " +
                  (isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "border border-slate-300/80 bg-white text-slate-700 hover:bg-slate-50")
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* -- Accordion List ---------------------------------------------- */}
        <div className="max-w-2xl mx-auto flex flex-col divide-y divide-slate-100">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;
            return (
              <div key={faq.id} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Left Rounded Square Icon Box */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors group-hover:border-slate-300">
                      <Icon className="h-5 w-5" />
                    </span>

                    {/* Question */}
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  {/* Right Chevron */}
                  <span className="ml-3 text-slate-400 group-hover:text-slate-700 transition-colors">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
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
                      <div className="pl-14 pr-6 pt-2 pb-1 text-xs sm:text-[13px] leading-relaxed text-slate-500">
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
    </section>
  );
}

export default FAQSection;
