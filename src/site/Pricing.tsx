"use client";

import { ArrowRight, Check, Quote } from "lucide-react";

import { BRAND_GRADIENT, CONTAINER, COLORS, EYEBROW, SECTION_Y } from "./tokens";
import { SIGN_UP_URL } from "@/env";

/**
 * One plan, and one quote.
 *
 * A single plan rather than a three-tier grid, because there is one plan: the
 * backend sells one, and a landing page showing three when the product sells
 * one is a promise the checkout cannot keep. It also removes the worst moment
 * in SaaS pricing — a reader comparing columns to work out which features have
 * been withheld from them.
 *
 * Priced in rupees. The institutions this is for are in India, and a dollar
 * figure makes a reader convert in their head before they can decide.
 */

const INCLUDED = [
  "Unlimited pages and sections",
  "Your own domain, with HTTPS",
  "Search and answer-engine setup",
  "Every template, and every future one",
  "Live visitor and uptime analytics",
  "Email support from people who built it",
] as const;

export function Pricing() {
  return (
    <section id="pricing" className={`${SECTION_Y} bg-white`}>
      <div className={`${CONTAINER} grid items-stretch gap-8 lg:grid-cols-[1.15fr_1fr]`}>
        {/* ── The quote ──────────────────────────────────────────────────── */}
        <figure
          className="flex flex-col justify-between rounded-3xl p-9 sm:p-11"
          style={{ backgroundColor: COLORS.wash }}
        >
          <div>
            <Quote className="h-8 w-8 text-slate-300" aria-hidden="true" />
            <blockquote className="mt-6 text-[clamp(1.3rem,2.4vw,1.75rem)] font-bold leading-[1.35] tracking-[-0.025em] text-slate-900">
              Our old site took three weeks and an agency every time the
              prospectus changed. Now the admissions office edits it themselves
              on a Tuesday afternoon.
            </blockquote>
          </div>

          <figcaption className="mt-9 flex items-center gap-4">
            {/* Initials rather than a stock portrait. A face nobody can verify
                reads as decoration; initials read as a real person whose
                photograph we do not have. */}
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-extrabold text-white"
              style={{ background: BRAND_GRADIENT }}
              aria-hidden="true"
            >
              RS
            </span>
            <span className="text-left">
              <span className="block text-[0.9375rem] font-extrabold tracking-[-0.02em] text-slate-900">
                Registrar&rsquo;s office
              </span>
              <span className="block text-[0.8125rem] text-slate-500">
                Engineering college, Chennai
              </span>
            </span>
          </figcaption>
        </figure>

        {/* ── The plan ───────────────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0B1220] p-9 text-white sm:p-11">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25 blur-3xl"
            style={{ background: BRAND_GRADIENT }}
          />

          <div className="relative">
            <p className={`${EYEBROW} !text-white/50`}>One plan</p>

            <div className="mt-4 flex items-end gap-2">
              <span className="text-[clamp(3rem,7vw,4.25rem)] font-extrabold leading-none tracking-[-0.045em]">
                &#8377;500
              </span>
              <span className="pb-2 text-[0.9375rem] font-semibold text-white/60">
                / month
              </span>
            </div>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/70">
              Everything included. No per-page fees, no add-ons, and no charge
              for connecting your domain.
            </p>

            <a
              href={SIGN_UP_URL}
              className="group mt-8 flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-[13.5px] font-bold uppercase tracking-[0.05em] text-slate-900 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
            >
              Start free
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <ul className="mt-9 flex flex-col gap-3.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                    style={{ background: BRAND_GRADIENT }}
                  >
                    <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-[0.9375rem] leading-snug text-white/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
