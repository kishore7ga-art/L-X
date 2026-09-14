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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
              included
            </span>
          </h2>
        </div>

        {/* -- 8-Card Grid (4 cols on desktop) ------------------------------ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Drag and Drop Editor */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Drag and Drop
                  <br />
                  Editor
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <LayoutGrid className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Use WebXite's super simple drag-and-drop editor to build your perfect site. No
                installations, no updates, no worries.
              </p>
            </div>

            {/* Mockup Preview 1 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 p-3 text-white shadow-inner flex flex-col justify-between">
              <div className="flex items-center justify-between text-[8px] font-bold text-teal-100">
                <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" /> Live Canvas
                </span>
                <span>Desktop ?</span>
              </div>

              <div className="relative flex items-center justify-between gap-2 my-auto">
                <div className="grid grid-cols-2 gap-1.5 bg-white/95 text-slate-800 p-2 rounded-xl shadow-lg w-28 text-[8px] font-bold">
                  <div className="flex flex-col items-center justify-center p-1 rounded bg-slate-50 border border-slate-100">
                    <span className="text-[10px]">???</span>
                    <span>Image</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1 rounded bg-teal-50 text-teal-700 border border-teal-200">
                    <span className="text-[10px]">???</span>
                    <span>Slider</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1 rounded bg-slate-50 border border-slate-100">
                    <span className="text-[10px]">??</span>
                    <span>Video</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1 rounded bg-slate-50 border border-slate-100">
                    <span className="text-[10px]">??</span>
                    <span>Member</span>
                  </div>
                </div>

                <div className="flex-1 bg-white p-2.5 rounded-xl shadow-xl text-slate-800">
                  <div className="flex items-center gap-1 text-[7px] font-extrabold text-teal-600 uppercase">
                    <Quote className="h-2.5 w-2.5 fill-current" />
                    <span>Testimonial</span>
                  </div>
                  <p className="text-[9px] font-bold leading-tight mt-1 text-slate-900 line-clamp-2">
                    Find Your Real Estate...
                  </p>
                  <div className="mt-1.5 flex gap-1">
                    <span className="h-1.5 w-8 rounded-full bg-teal-500" />
                    <span className="h-1.5 w-4 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <span className="text-[8px] font-bold bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  + Add Block
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Free SSL Security */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Free SSL Security
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <Lock className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                We help you protect both your business and your customers with free SSL security for
                complete peace of mind.
              </p>
            </div>

            {/* Mockup Preview 2 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#0284c7] to-[#0369a1] p-3 text-white shadow-inner flex flex-col justify-between">
              <div className="mx-auto flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[9px] font-bold text-slate-800 shadow-md">
                <span className="flex items-center gap-1 rounded bg-emerald-500 px-1.5 py-0.5 text-[8px] font-extrabold text-white">
                  <Lock className="h-2 w-2" /> Secure
                </span>
                <span className="text-slate-600 font-mono">https://www.itech.co</span>
              </div>

              <div className="mt-2 flex-1 rounded-xl bg-slate-900/80 p-2.5 backdrop-blur-sm border border-cyan-500/20 flex flex-col justify-between overflow-hidden relative">
                <div className="flex items-center justify-between border-b border-cyan-500/20 pb-1 text-[8px] font-mono tracking-widest text-cyan-300">
                  <span className="font-bold tracking-widest">I T E C H</span>
                  <div className="flex gap-1.5 text-[7px] text-cyan-200/70">
                    <span>ABOUT</span>
                    <span>TECH</span>
                    <span>CONTACT</span>
                  </div>
                </div>

                <div className="relative h-20 w-full overflow-hidden rounded-lg mt-1">
                  <img
                    src="/showcase/mountain-iceberg.jpg"
                    alt="SSL Secure Website preview"
                    className="h-full w-full object-cover brightness-90 contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute bottom-1 left-2 right-2 flex items-center justify-between text-[7px]">
                    <span className="font-bold text-white uppercase tracking-wider">256-Bit Encrypted</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="h-2 w-2" /> Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: eCommerce */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  eCommerce
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <ShoppingBag className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                If you're creating an online store, we offer all the site-building functionality any
                digital entrepreneur could need.
              </p>
            </div>

            {/* Mockup Preview 3 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#4338ca] p-3 text-white shadow-inner flex flex-col justify-between">
              <div className="relative h-24 w-full rounded-xl overflow-hidden border border-indigo-400/30 bg-slate-900 shadow-md">
                <img
                  src="/showcase/tv-wallpaper.jpg"
                  alt="eCommerce display"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute top-1.5 left-2 text-[8px] font-black tracking-widest text-white/90">
                  SONO
                </div>
              </div>

              <div className="relative -mt-8 flex items-center gap-2.5 rounded-xl bg-white p-2 text-slate-900 shadow-2xl ring-1 ring-slate-900/10">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  <img
                    src="/showcase/segway-scooter.jpg"
                    alt="TORO Smart Self Balancing Scooter"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[8px] font-extrabold text-slate-900">
                    TORO Smart Self Balancing Scooter
                  </p>
                  <div className="flex items-center gap-0.5 text-amber-400 text-[8px] my-0.5">
                    <Star className="h-2 w-2 fill-current" />
                    <Star className="h-2 w-2 fill-current" />
                    <Star className="h-2 w-2 fill-current" />
                    <Star className="h-2 w-2 fill-current" />
                    <Star className="h-2 w-2 fill-current" />
                  </div>
                  <p className="text-[10px] font-black text-emerald-600">$1,512.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Blog Websites Builder */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Blog Websites
                  <br />
                  Builder
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <Globe className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                WebXite's blog and website builder has everything you need, from customized templates
                to simple tools that help you rank online and built-in SEO tools.
              </p>
            </div>

            {/* Mockup Preview 4 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#3730a3] p-2.5 text-white shadow-inner flex items-center justify-between gap-2">
              <div className="flex-1 rounded-xl bg-slate-900/90 p-2 shadow-lg border border-indigo-400/20 flex flex-col justify-between h-full">
                <div className="h-16 w-full overflow-hidden rounded-lg">
                  <img
                    src="/showcase/blog-vr.jpg"
                    alt="AR VR Article"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-[8px] font-bold leading-snug text-slate-100 mt-1 line-clamp-2">
                  Steve & Ethan share about new project AR
                </p>
                <div className="flex items-center gap-1 text-[7px] text-slate-400 mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" /> 3 min read
                </div>
              </div>

              <div className="flex-1 rounded-xl bg-white p-2 shadow-lg flex flex-col justify-between h-full text-slate-900">
                <div className="h-16 w-full overflow-hidden rounded-lg">
                  <img
                    src="/showcase/blog-art.jpg"
                    alt="SaaS article"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-[8px] font-extrabold leading-snug text-slate-900 mt-1 line-clamp-2">
                  How to start driving ROI in your SaaS business
                </p>
                <div className="flex items-center justify-between text-[7px] text-slate-500 mt-1">
                  <span className="font-bold text-indigo-600">Product</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Booking/Scheduling */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Booking/
                  <br />
                  Scheduling
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <Calendar className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Offer your services and deliver a seamless booking experience for your clients.
              </p>
            </div>

            {/* Mockup Preview 5 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#181d28] p-3 text-white shadow-inner flex items-center justify-center">
              <div className="w-full rounded-xl bg-white p-2.5 text-slate-900 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 text-[9px] font-bold">
                  <span className="text-slate-900">October 2021</span>
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
                  <span className="rounded-l-full bg-blue-600 font-bold text-white">7</span>
                  <span className="bg-blue-600 font-bold text-white">8</span>
                  <span className="bg-blue-600 font-bold text-white">9</span>
                  <span className="rounded-r-full bg-blue-600 font-bold text-white">10</span>

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

          {/* Card 6: Complete SEO Solution */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Complete SEO
                  <br />
                  Solution
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <TrendingUp className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Not sure you know enough about SEO optimization for a website? We have all the tools
                you need.
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
                  <span>Weekly Visitor</span>
                  <span className="text-emerald-400 font-extrabold flex items-center gap-0.5">
                    ? 85%
                  </span>
                </div>

                <div className="mt-2 flex items-end justify-between gap-1.5 h-16 pt-2">
                  <div className="flex flex-col justify-between h-full text-[6px] text-slate-500 pr-1">
                    <span>20K</span>
                    <span>10K</span>
                    <span>5K</span>
                  </div>

                  <div className="flex-1 flex items-end justify-around gap-1 h-full pb-1 border-b border-slate-700">
                    <span className="w-2.5 rounded-t-full bg-teal-400" style={{ height: "45%" }} />
                    <span className="w-2.5 rounded-t-full bg-teal-400" style={{ height: "70%" }} />
                    <span className="w-2.5 rounded-t-full bg-teal-400" style={{ height: "35%" }} />
                    <span className="w-2.5 rounded-t-full bg-teal-400" style={{ height: "85%" }} />
                    <span className="w-2.5 rounded-t-full bg-teal-400" style={{ height: "60%" }} />
                    <span className="w-2.5 rounded-t-full bg-teal-400" style={{ height: "95%" }} />
                    <span className="w-2.5 rounded-t-full bg-teal-400" style={{ height: "75%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 7: Domain and Hosting */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Domain and
                  <br />
                  Hosting
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <Server className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                Easy to customize and register your brand to the world. And welcome to Amazon Web
                Services, the largest global hosting provider.
              </p>
            </div>

            {/* Mockup Preview 7 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#1c212d] p-3 text-white shadow-inner flex flex-col justify-between">
              <div className="flex items-center gap-1.5 rounded-full bg-slate-800/90 px-2.5 py-1 text-[8px] text-slate-400 border border-slate-700">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                </div>
                <span className="mx-auto font-mono text-slate-300">?? https://yourbrand.domain</span>
              </div>

              <div className="my-auto text-center px-2">
                <h4 className="text-[14px] font-black leading-tight text-white tracking-tight">
                  Bigger,
                  <br />
                  Bolder and
                  <br />
                  Better
                </h4>
              </div>

              <div className="self-start flex items-center gap-1.5 rounded-xl bg-[#FF9900] px-2.5 py-1 shadow-lg text-slate-950 font-black text-[10px]">
                <span className="font-extrabold tracking-tight">aws</span>
                <span className="text-[7px] font-bold uppercase tracking-wider text-slate-900/80">Cloud</span>
              </div>
            </div>
          </div>

          {/* Card 8: Mobile Optimized */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-extrabold leading-snug text-slate-900">
                  Mobile
                  <br />
                  Optimized
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <Smartphone className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2.5 mb-6 text-[12px] leading-relaxed text-slate-500">
                We are the multi-device generation. So your website comes fully optimized for mobile
                for a better user experience.
              </p>
            </div>

            {/* Mockup Preview 8 */}
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#e2e8f0]/60 p-2.5 text-slate-900 shadow-inner flex items-end justify-center">
              <div className="relative h-40 w-32 rounded-t-2xl bg-slate-900 p-1.5 shadow-2xl border-t-2 border-x-2 border-slate-700">
                <div className="mx-auto h-1 w-8 rounded-full bg-slate-800 mb-1" />

                <div className="h-full rounded-t-xl bg-white p-2 text-slate-900 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1 text-[7px] font-extrabold">
                    <span>Mails Manager</span>
                    <span className="h-2 w-2 rounded-full bg-slate-200" />
                  </div>
                  <div className="mt-1 space-y-1">
                    <div className="h-2 w-16 rounded bg-slate-100" />
                    <div className="h-1.5 w-20 rounded bg-slate-100" />
                    <div className="h-1.5 w-12 rounded bg-teal-100" />
                  </div>
                </div>
              </div>

              <div className="absolute left-3 top-6 flex flex-col items-center justify-center rounded-2xl bg-white/95 p-2 shadow-2xl ring-1 ring-slate-900/10 backdrop-blur-sm">
                <span className="text-[6px] font-extrabold uppercase tracking-wider text-slate-400">
                  MOBILE SCORE
                </span>
                <span className="text-[20px] font-black leading-none text-emerald-500 my-0.5">
                  95
                </span>
                <span className="text-[6px] font-bold text-slate-500">Performance</span>
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
