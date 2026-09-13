"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

type Billing = "monthly" | "yearly";

interface Plan {
  name: string;
  tagline: string;
  monthly: number | null;
  yearly: number | null;
  priceNote: string;
  cta: string;
  featured: boolean;
  features: string[];
}

/* Yearly pricing is the monthly rate less 20%, matching the toggle badge. */
const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "For a single site finding its feet.",
    monthly: 19,
    yearly: 15,
    priceNote: "per month",
    cta: "Start for free",
    featured: false,
    features: [
      "1 site, 1 custom domain",
      "Up to 25 pages",
      "Core component library",
      "Global edge CDN",
      "Community support",
    ],
  },
  {
    name: "Pro",
    tagline: "For teams shipping continuously.",
    monthly: 49,
    yearly: 39,
    priceNote: "per month",
    cta: "Get started",
    featured: true,
    features: [
      "5 sites, unlimited domains",
      "Unlimited pages",
      "Full component + motion library",
      "Multi-region edge with instant purge",
      "Staging previews & rollbacks",
      "Priority support, 24h response",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For institutions with many campuses.",
    monthly: null,
    yearly: null,
    priceNote: "billed annually",
    cta: "Talk to sales",
    featured: false,
    features: [
      "Unlimited sites and domains",
      "SSO, SAML & audit logs",
      "Dedicated infrastructure",
      "Custom SLA & uptime guarantee",
      "Named solutions architect",
      "Onboarding & migration included",
    ],
  },
];

export function PricingSection() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      {/* ---------- Heading ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto"
      >
        <h2 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white">
          Simple, honest pricing
        </h2>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
          Every plan ships on the same edge network. Upgrade, downgrade, or
          cancel whenever you like.
        </p>
      </motion.div>

      {/* ---------- Billing toggle ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-10 flex justify-center"
      >
        <div
          role="group"
          aria-label="Billing period"
          className="inline-flex items-center gap-1 rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/75 p-1.5 shadow-sm backdrop-blur-xl"
        >
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            aria-pressed={billing === "monthly"}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              billing === "monthly"
                ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() => setBilling("yearly")}
            aria-pressed={billing === "yearly"}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              billing === "yearly"
                ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Yearly
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors duration-200 ${
                billing === "yearly"
                  ? "bg-blue-500/20 text-blue-200 dark:bg-blue-600/15 dark:text-blue-700"
                  : "bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-100 dark:ring-blue-500/20"
              }`}
            >
              Save 20%
            </span>
          </button>
        </div>
      </motion.div>

      {/* ---------- Plans ---------- */}
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:items-center">
        {PLANS.map((plan, index) => {
          const price = billing === "monthly" ? plan.monthly : plan.yearly;

          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`relative flex h-full flex-col rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 ${
                plan.featured
                  ? "border-2 border-blue-600 bg-white dark:bg-slate-900 shadow-[0_24px_60px_-15px_rgba(37,99,235,0.28)] lg:scale-[1.04] lg:py-10"
                  : "border border-slate-200/90 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/75 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:border-slate-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)] dark:hover:border-slate-700"
              } ${plan.featured ? "" : "md:last:col-span-2 lg:last:col-span-1"}`}
            >
              {/* Most Popular tag */}
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-md">
                  Most Popular
                </span>
              )}

              {/* Name + tagline */}
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
                {plan.tagline}
              </p>

              {/* Price */}
              <div className="mt-8 flex min-h-[4.25rem] flex-col justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`${plan.name}-${billing}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-baseline gap-1.5"
                  >
                    {price === null ? (
                      <span className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="text-5xl font-black tracking-tight tabular-nums text-slate-900 dark:text-white">
                          ${price}
                        </span>
                        <span className="text-base font-medium text-slate-500 dark:text-slate-400">
                          /mo
                        </span>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                <span className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {price === null
                    ? plan.priceNote
                    : billing === "yearly"
                      ? "per month, billed annually"
                      : plan.priceNote}
                </span>
              </div>

              {/* CTA */}
              <a
                href="#get-started"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                  plan.featured
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 hover:bg-blue-700 hover:shadow-lg"
                    : "border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white hover:border-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="mt-8 flex flex-col gap-3.5 border-t border-slate-200/80 dark:border-slate-700/60 pt-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default PricingSection;
