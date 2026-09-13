import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button-group";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SIGN_IN_URL, SIGN_UP_URL } from "@/env";

interface NavItem {
  label: string;
  target: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", target: "hero" },
  { label: "Compare", target: "compare" },
  { label: "Showcase", target: "showcase" },
  { label: "Design", target: "design" },
  { label: "Discover", target: "discoverability" },
  { label: "Experience", target: "experience" },
  { label: "FAQ", target: "faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight whichever section currently owns the viewport.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.target)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`w-full border-b bg-white/85 backdrop-blur-xl transition-all duration-300 dark:bg-[#0A0A0C] ${
          isScrolled
            ? "border-slate-200 shadow-[0_6px_24px_rgba(15,23,42,0.08)] dark:border-white/10 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "border-slate-200/70 shadow-none dark:border-white/[0.07]"
        }`}
      >
        <div className="flex h-20 items-center justify-between gap-6 px-6 sm:px-10 lg:px-14">
          {/* LEFT: Brand mark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="group flex shrink-0 select-none items-center gap-2.5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-[22px] w-[22px] text-slate-900 transition-transform duration-500 group-hover:rotate-180 dark:text-white"
            >
              <path d="M12 3a9 9 0 1 0 9 9" />
              <path d="M12 7a5 5 0 1 1-5 5" />
            </svg>
            <span className="font-['Outfit',sans-serif] text-[20px] font-bold tracking-[-0.02em] text-slate-900 dark:text-white">
              WebXite
            </span>
          </a>

          {/* CENTER: Section navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex xl:gap-9">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.target;
              return (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={`relative cursor-pointer text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* RIGHT: CTA + mobile toggle */}
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
            <ThemeToggle />

            {/*
              The editor lives on its own host now. These used to be in-page
              anchors — `#get-started`, which matches no element on this page —
              back when the apex served the sign-in screen itself.
            */}
            <a
              href={SIGN_IN_URL}
              className="hidden text-[15px] font-medium tracking-[-0.01em] text-slate-500 transition-colors duration-200 hover:text-slate-900 dark:text-white/60 dark:hover:text-white sm:inline-flex"
            >
              Sign in
            </a>

            <GradientButton
              variant="solid"
              href={SIGN_UP_URL}
              className="hidden px-5 py-2.5 text-[15px] sm:inline-flex"
            >
              Get Started
            </GradientButton>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="rounded-full border border-slate-200 bg-slate-100 p-2.5 text-slate-900 transition-colors hover:bg-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 px-6 py-3 dark:border-white/10 sm:px-10 lg:hidden">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.target;
              return (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={`flex w-full items-center rounded-xl px-3 py-3 text-left transition-colors ${
                    isActive
                      ? "bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
                  }`}
                >
                  <span className="text-[15px] font-medium">{item.label}</span>
                </button>
              );
            })}

            <a
              href={SIGN_IN_URL}
              className="mt-1 flex w-full items-center rounded-xl px-3 py-3 text-[15px] font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white sm:hidden"
            >
              Sign in
            </a>

            <GradientButton
              variant="solid"
              href={SIGN_UP_URL}
              className="mt-2 w-full py-3 text-[15px] sm:hidden"
            >
              Get Started
            </GradientButton>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
