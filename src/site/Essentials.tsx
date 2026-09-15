"use client";

import React from "react";
import {
  ArrowRight,
  LayoutGrid,
  Lock,
  ShoppingBag,
  Globe,
  Calendar,
  TrendingUp,
  Server,
  Smartphone,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
} from "lucide-react";

import { CONTAINER, EYEBROW } from "./tokens";
import { SIGN_UP_URL } from "@/env";

export function Essentials() {
  return (
    <section id="essentials" className="relative z-30 bg-[#F4F6F9] py-20 sm:py-28 overflow-hidden">
      <div className={CONTAINER}>
        {/* -- Section Heading ---------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`${EYEBROW} mb-3`}>YOUR COMPLETE WEBSITE DESIGN SOLUTION</p>
          <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-slate-900">
            All the essentials,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-600">
              included
            </span>
          </h2>
        </div>

        {/* -- 8-Card Grid (4 cols on desktop) ------------------------------ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Visual Campus Builder */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Visual Campus
                  <br />
                  Builder
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                  <LayoutGrid className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Use WebXite&apos;s intuitive visual drag-and-drop editor to build department pages,
                faculty profiles, and admissions portals in minutes.
              </p>
            </div>

            {/* Mockup Preview 1 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-fuchsia-600 p-3 text-white shadow-inner flex flex-col justify-between">
              <div className="flex items-center justify-between text-[8px] font-bold text-rose-100">
                <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" /> Campus Live Canvas
                </span>
                <span>Desktop</span>
              </div>

              <div className="relative flex items-center justify-between gap-2 my-auto">
                <div className="grid grid-cols-2 gap-1.5 bg-white/95 text-slate-800 p-2 rounded-xl shadow-lg w-28 text-[8px] font-bold">
                  <div className="flex flex-col items-center justify-center p-1 rounded bg-slate-50 border border-slate-100">
                    <span className="text-[10px]">🏛️</span>
                    <span>Faculty</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1 rounded bg-rose-50 text-rose-700 border border-rose-200">
                    <span className="text-[10px]">🎓</span>
                    <span>Degrees</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1 rounded bg-slate-50 border border-slate-100">
                    <span className="text-[10px]">📅</span>
                    <span>Events</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1 rounded bg-slate-50 border border-slate-100">
                    <span className="text-[10px]">📚</span>
                    <span>Library</span>
                  </div>
                </div>

                <div className="flex-1 bg-white p-2.5 rounded-xl shadow-xl text-slate-800">
                  <div className="flex items-center gap-1 text-[7px] font-extrabold text-rose-600 uppercase">
                    <Quote className="h-2.5 w-2.5 fill-current" />
                    <span>Campus Portal</span>
                  </div>
                  <p className="text-[9px] font-bold leading-tight mt-1 text-slate-900 line-clamp-2">
                    School of Computing & AI
                  </p>
                  <div className="mt-1.5 flex gap-1">
                    <span className="h-1.5 w-8 rounded-full bg-rose-500" />
                    <span className="h-1.5 w-4 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <span className="text-[8px] font-bold bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  + Add Department Block
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Enterprise SSL Security */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Enterprise SSL
                  <br />
                  &amp; Security
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                  <Lock className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Protect student admissions, portal logins, and faculty records with automated 256-bit SSL
                and institutional privacy compliance.
              </p>
            </div>

            {/* Mockup Preview 2 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#4c1d95] to-[#2e1065] p-3 text-white shadow-inner flex flex-col justify-between">
              <div className="mx-auto flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[9px] font-bold text-slate-800 shadow-md">
                <span className="flex items-center gap-1 rounded bg-emerald-500 px-1.5 py-0.5 text-[8px] font-extrabold text-white">
                  <Lock className="h-2 w-2" /> Secure
                </span>
                <span className="text-slate-600 font-mono">https://admissions.campus.edu</span>
              </div>

              <div className="mt-2 flex-1 rounded-xl bg-slate-900/80 p-2.5 backdrop-blur-sm border border-purple-400/20 flex flex-col justify-between overflow-hidden relative">
                <div className="flex items-center justify-between border-b border-purple-400/20 pb-1 text-[8px] font-mono tracking-widest text-purple-300">
                  <span className="font-bold tracking-widest">U N I V E R S I T Y</span>
                  <div className="flex gap-1.5 text-[7px] text-purple-200/70">
                    <span>ACADEMICS</span>
                    <span>PORTAL</span>
                    <span>APPLY</span>
                  </div>
                </div>

                <div className="relative h-20 w-full overflow-hidden rounded-lg mt-1">
                  <img
                    src="/showcase/oxford.jpg"
                    alt="SSL Secure University website preview"
                    className="h-full w-full object-cover brightness-90 contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute bottom-1 left-2 right-2 flex items-center justify-between text-[7px]">
                    <span className="font-bold text-white uppercase tracking-wider">FERPA &amp; SSL Compliant</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="h-2 w-2" /> Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Admissions & Degree Programs */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Admissions &amp;
                  <br />
                  Degree Hub
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <ShoppingBag className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Showcase undergraduate majors, postgraduate degrees, tuition fees, and application
                deadlines with high conversion.
              </p>
            </div>

            {/* Mockup Preview 3 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#0f172a] p-3 text-white shadow-inner flex flex-col justify-between">
              <div className="relative h-24 w-full rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-md">
                <img
                  src="/showcase/uchicago.jpg"
                  alt="University degree display"
                  className="h-full w-full object-cover opacity-85"
                />
                <div className="absolute top-1.5 left-2 rounded bg-rose-600/90 px-1.5 py-0.5 text-[7px] font-black uppercase tracking-widest text-white">
                  Fall 2026 Admissions
                </div>
              </div>

              <div className="relative -mt-8 flex items-center gap-2.5 rounded-xl bg-white p-2 text-slate-900 shadow-2xl ring-1 ring-slate-900/10">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src="/showcase/birmingham.jpg"
                    alt="B.S. Artificial Intelligence & Computing"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[8.5px] font-extrabold text-slate-900">
                    B.S. Artificial Intelligence &amp; Data
                  </p>
                  <div className="flex items-center gap-0.5 text-amber-400 text-[8px] my-0.5">
                    <Star className="h-2 w-2 fill-current" />
                    <Star className="h-2 w-2 fill-current" />
                    <Star className="h-2 w-2 fill-current" />
                    <Star className="h-2 w-2 fill-current" />
                    <Star className="h-2 w-2 fill-current" />
                  </div>
                  <p className="text-[9.5px] font-black text-rose-600">4 Years • Online &amp; Campus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Academic News & Blog Hub */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Academic News
                  <br />
                  &amp; Research Hub
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  <Globe className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Publish university press releases, research publications, and campus blogs with
                built-in rich media and SEO indexing.
              </p>
            </div>

            {/* Mockup Preview 4 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#0e3b43] p-2.5 text-white shadow-inner flex items-center justify-between gap-2">
              <div className="flex-1 rounded-xl bg-slate-900/90 p-2 shadow-lg border border-teal-400/20 flex flex-col justify-between h-full">
                <div className="h-16 w-full overflow-hidden rounded-lg">
                  <img
                    src="/showcase/college-hero.jpg"
                    alt="University research article"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-[8px] font-bold leading-snug text-slate-100 mt-1 line-clamp-2">
                  Dean&apos;s Annual Campus Vision 2026
                </p>
                <div className="flex items-center gap-1 text-[7px] text-teal-300 mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Research
                </div>
              </div>

              <div className="flex-1 rounded-xl bg-white p-2 shadow-lg flex flex-col justify-between h-full text-slate-900">
                <div className="h-16 w-full overflow-hidden rounded-lg">
                  <img
                    src="/showcase/penn.jpg"
                    alt="Campus event article"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-[8px] font-extrabold leading-snug text-slate-900 mt-1 line-clamp-2">
                  Breakthrough in Renewable Energy Lab
                </p>
                <div className="flex items-center justify-between text-[7px] text-slate-500 mt-1">
                  <span className="font-bold text-rose-600">Science</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Campus Tours & Scheduling */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Campus Tours &amp;
                  <br />
                  Advising Booking
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Calendar className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Enable prospective students, parents, and alumni to schedule in-person campus visits,
                counseling, and open days.
              </p>
            </div>

            {/* Mockup Preview 5 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#1e1b4b] p-3 text-white shadow-inner flex items-center justify-center">
              <div className="w-full rounded-xl bg-white p-2.5 text-slate-900 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 text-[9px] font-bold">
                  <span className="text-slate-900">Campus Visit • Oct 2026</span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <ChevronLeft className="h-3 w-3" />
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </div>

                <div className="grid grid-cols-7 text-center text-[7px] font-bold text-slate-400 mt-1.5 mb-1">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

                <div className="grid grid-cols-7 text-center text-[8px] font-medium text-slate-700 gap-y-1">
                  <span className="text-slate-300">4</span>
                  <span className="text-slate-300">5</span>
                  <span className="text-slate-300">6</span>
                  <span className="rounded-l-full bg-rose-500 font-bold text-white">7</span>
                  <span className="bg-rose-500 font-bold text-white">8</span>
                  <span className="bg-rose-500 font-bold text-white">9</span>
                  <span className="rounded-r-full bg-rose-500 font-bold text-white">10</span>

                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span>15</span>
                  <span>16</span>
                  <span>17</span>

                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                  <span>21</span>
                  <span>22</span>
                  <span>23</span>
                  <span>24</span>

                  <span>25</span>
                  <span>26</span>
                  <span>27</span>
                  <span>28</span>
                  <span>29</span>
                  <span>30</span>
                  <span>31</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Academic SEO & Search Rankings */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Academic SEO &amp;
                  <br />
                  Google Rankings
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <TrendingUp className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Rank top for degree keywords, local campus searches, and research papers with automated
                schema metadata and sitemaps.
              </p>
            </div>

            {/* Mockup Preview 6 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#1e2430] p-3 text-white shadow-inner flex flex-col justify-between">
              <div className="flex items-center gap-1.5 self-start rounded-full bg-white px-2.5 py-1 shadow-md">
                <svg className="h-3 w-3" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <div className="flex text-amber-400 text-[9px]">
                  <Star className="h-2.5 w-2.5 fill-current" />
                  <Star className="h-2.5 w-2.5 fill-current" />
                  <Star className="h-2.5 w-2.5 fill-current" />
                  <Star className="h-2.5 w-2.5 fill-current" />
                  <Star className="h-2.5 w-2.5 fill-current" />
                </div>
              </div>

              <div className="rounded-xl bg-slate-800/90 p-2.5 border border-slate-700">
                <div className="flex items-center justify-between text-[8px] font-bold text-slate-300">
                  <span>Admissions Traffic</span>
                  <span className="text-emerald-400 font-extrabold flex items-center gap-0.5">
                    ↑ 88%
                  </span>
                </div>

                <div className="mt-2 flex items-end justify-between gap-1.5 h-16 pt-2">
                  <div className="flex flex-col justify-between h-full text-[6px] text-slate-500 pr-1">
                    <span>50K</span>
                    <span>25K</span>
                    <span>10K</span>
                  </div>

                  <div className="flex-1 flex items-end justify-around gap-1 h-full pb-1 border-b border-slate-700">
                    <span className="w-2.5 rounded-t-full bg-rose-500" style={{ height: "45%" }} />
                    <span className="w-2.5 rounded-t-full bg-rose-500" style={{ height: "70%" }} />
                    <span className="w-2.5 rounded-t-full bg-purple-500" style={{ height: "35%" }} />
                    <span className="w-2.5 rounded-t-full bg-purple-500" style={{ height: "85%" }} />
                    <span className="w-2.5 rounded-t-full bg-teal-400" style={{ height: "60%" }} />
                    <span className="w-2.5 rounded-t-full bg-teal-400" style={{ height: "95%" }} />
                    <span className="w-2.5 rounded-t-full bg-emerald-400" style={{ height: "80%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 7: Custom .EDU Domain & Global CDN */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Custom .EDU
                  <br />
                  Domain &amp; Cloud
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <Server className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Connect your institutional .edu domain or departmental subdomains with instant DNS routing
                and multi-region AWS global cloud hosting.
              </p>
            </div>

            {/* Mockup Preview 7 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#1c212d] p-3 text-white shadow-inner flex flex-col justify-between">
              <div className="flex items-center gap-1.5 rounded-full bg-slate-800/90 px-2.5 py-1 text-[8px] text-slate-400 border border-slate-700">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                </div>
                <span className="mx-auto font-mono text-slate-200">🔒 https://dept.university.edu</span>
              </div>

              <div className="my-auto text-center px-2">
                <h4 className="text-[14px] font-black leading-tight text-white tracking-tight">
                  Inspire,
                  <br />
                  Educate and
                  <br />
                  Lead
                </h4>
              </div>

              <div className="self-start flex items-center gap-1.5 rounded-xl bg-[#FF9900] px-2.5 py-1 shadow-lg text-slate-950 font-black text-[10px]">
                <span className="font-extrabold tracking-tight">aws</span>
                <span className="text-[7px] font-bold uppercase tracking-wider text-slate-900/80">Edge CDN</span>
              </div>
            </div>
          </div>

          {/* Card 8: 100% Mobile & Student Optimized */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  100% Mobile &amp;
                  <br />
                  Student Optimized
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                  <Smartphone className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Over 80% of applicants and students browse on mobile. Your campus site renders with
                sub-second performance across all devices.
              </p>
            </div>

            {/* Mockup Preview 8 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#e2e8f0]/60 p-2.5 text-slate-900 shadow-inner flex items-end justify-center">
              <div className="relative h-40 w-32 rounded-t-2xl bg-slate-900 p-1.5 shadow-2xl border-t-2 border-x-2 border-slate-700">
                <div className="mx-auto h-1 w-8 rounded-full bg-slate-800 mb-1" />

                <div className="h-full rounded-t-xl bg-white p-2 text-slate-900 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1 text-[7px] font-extrabold">
                    <span>Campus Portal</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mt-1 space-y-1">
                    <div className="h-2 w-16 rounded bg-slate-100" />
                    <div className="h-1.5 w-20 rounded bg-slate-100" />
                    <div className="h-1.5 w-12 rounded bg-rose-100" />
                  </div>
                </div>
              </div>

              <div className="absolute left-3 top-6 flex flex-col items-center justify-center rounded-2xl bg-white/95 p-2 shadow-2xl ring-1 ring-slate-900/10 backdrop-blur-sm">
                <span className="text-[6px] font-extrabold uppercase tracking-wider text-slate-400">
                  MOBILE SCORE
                </span>
                <span className="text-[20px] font-black leading-none text-emerald-500 my-0.5">
                  99
                </span>
                <span className="text-[6px] font-bold text-slate-500">PageSpeed</span>
              </div>
            </div>
          </div>
        </div>

        {/* -- Bottom CTA --------------------------------------------------- */}
        <div className="mt-14 flex justify-center">
          <a
            href={SIGN_UP_URL}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.06em] text-slate-900 shadow-lg ring-1 ring-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl"
          >
            Create your website now
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
