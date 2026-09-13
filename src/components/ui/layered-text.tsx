"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface LayeredTextProps {
  lines?: Array<{ top: string; bottom: string }>;
  fontSize?: string;
  fontSizeMd?: string;
  lineHeight?: number;
  lineHeightMd?: number;
  /** Horizontal step between stacked lines — scale this with the font size */
  offset?: number;
  offsetMd?: number;
  className?: string;
}

export function LayeredText({
  lines = [
    { top: " ", bottom: "INFINITE" },
    { top: "INFINITE", bottom: "PROGRESS" },
    { top: "PROGRESS", bottom: "INNOVATION" },
    { top: "INNOVATION", bottom: "FUTURE" },
    { top: "FUTURE", bottom: "DREAMS" },
    { top: "DREAMS", bottom: "ACHIEVEMENT" },
    { top: "ACHIEVEMENT", bottom: " " },
  ],
  fontSize = "72px",
  fontSizeMd = "36px",
  lineHeight = 60,
  lineHeightMd = 35,
  offset = 35,
  offsetMd = 20,
  className = "",
}: LayeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  /* The md props only mean something if the component knows the viewport */
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const activeFontSize = isDesktop ? fontSize : fontSizeMd;
  const activeLineHeight = isDesktop ? lineHeight : lineHeightMd;
  const activeOffset = isDesktop ? offset : offsetMd;

  const translateX = (index: number) =>
    (index - Math.floor(lines.length / 2)) * activeOffset;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const paragraphs = container.querySelectorAll("p");

    timelineRef.current = gsap.timeline({ paused: true });
    timelineRef.current.to(paragraphs, {
      y: -activeLineHeight,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08,
    });

    const play = () => timelineRef.current?.play();
    const reverse = () => timelineRef.current?.reverse();
    /* Touch devices have no hover — let a tap roll it through */
    const toggle = () => {
      const tl = timelineRef.current;
      if (!tl) return;
      if (tl.progress() > 0 && !tl.reversed()) tl.reverse();
      else tl.play();
    };

    container.addEventListener("mouseenter", play);
    container.addEventListener("mouseleave", reverse);
    container.addEventListener("focus", play);
    container.addEventListener("blur", reverse);
    container.addEventListener("click", toggle);

    return () => {
      container.removeEventListener("mouseenter", play);
      container.removeEventListener("mouseleave", reverse);
      container.removeEventListener("focus", play);
      container.removeEventListener("blur", reverse);
      container.removeEventListener("click", toggle);
      timelineRef.current?.kill();
    };
  }, [lines, activeLineHeight]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={`mx-auto cursor-pointer py-24 font-sans font-black uppercase tracking-[-2px] text-black antialiased focus:outline-none dark:text-white ${className}`}
      style={{ fontSize: activeFontSize }}
    >
      <ul className="m-0 flex list-none flex-col items-center p-0">
        {lines.map((line, index) => {
          const skew = index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg";
          const scaleY = index % 2 === 0 ? 0.66667 : 1.33333;

          return (
            <li
              key={index}
              className="relative overflow-hidden"
              style={{
                height: `${activeLineHeight}px`,
                transform: `translateX(${translateX(index)}px) skew(${skew}) scaleY(${scaleY})`,
              }}
            >
              {[line.top, line.bottom].map((word, i) => (
                <p
                  key={i}
                  className="m-0 whitespace-nowrap px-[15px] align-top"
                  style={{
                    height: `${activeLineHeight}px`,
                    lineHeight: `${activeLineHeight - 5}px`,
                  }}
                >
                  {word}
                </p>
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LayeredText;
