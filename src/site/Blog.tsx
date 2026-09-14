"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

import { CONTAINER } from "./tokens";
import { SIGN_UP_URL } from "@/env";

const POSTS = [
  {
    image: "/showcase/blog-layout.jpg",
    category: "WEB DESIGN",
    date: "APR 25, 2024",
    title: "How to easily start a Blog and monetize it in 2023",
    excerpt:
      "If you're wondering how to create a blog, you've come to the right place. As a blogger myself, I can [...]",
    featured: true,
  },
  {
    image: "/showcase/blog-ai.jpg",
    category: "UPDATES",
    date: "APR 15, 2024",
    title: "FindFriday with power of AI",
    excerpt:
      "Almost every conversation in technology these days is about AI. And like ChatGPT [...]",
    featured: false,
  },
  {
    image: "/showcase/blog-speed.jpg",
    category: "WEB DESIGN",
    date: "MAR 27, 2024",
    title: "Why Page Speed is the key to your website's speed optimization (and how to improve it)",
    excerpt:
      "If there's one place first impressions are absolutely critical, it's your website�and we're not just [...]",
    featured: false,
  },
  {
    image: "/showcase/blog-font.jpg",
    category: "INSPIRATION",
    date: "MAR 19, 2024",
    title: "100 Best free fonts for Designers in 2023",
    excerpt:
      "Typography is currently playing a central role in web design, with progressive improvements [...]",
    featured: false,
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative z-30 w-full bg-white py-20 sm:py-28 overflow-hidden border-t border-slate-100">
      <div className={CONTAINER}>
        {/* -- Header ------------------------------------------------------ */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-2">
              RESOURCES, INSPIRATION AND TIPS
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-slate-900">
              FindFriday{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-600">
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

        {/* -- 4-Card Grid -------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {POSTS.map((post, idx) => (
            <article
              key={idx}
              className="group flex flex-col justify-between rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Card thumbnail */}
                <div className="aspect-[16/11] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category & Date */}
                <div className="mt-4 flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
                  <span>{post.category}</span>
                  <span>/</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-2 text-[14.5px] font-extrabold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-2 text-[12px] leading-relaxed text-slate-500 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              {/* Continue button */}
              <div className="mt-5">
                <a
                  href={SIGN_UP_URL}
                  className={
                    "inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all duration-300 " +
                    (post.featured
                      ? "bg-slate-900 text-white hover:bg-slate-800 shadow"
                      : "border border-slate-200 text-slate-700 hover:bg-slate-100")
                  }
                >
                  Continue
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
