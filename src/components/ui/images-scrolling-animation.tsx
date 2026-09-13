"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import ReactLenis from "lenis/react";
import { useRef } from "react";

const projects = [
  {
    title: "Project 1",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Project 2",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Project 3",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Project 4",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Project 5",
    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1400&auto=format&fit=crop",
  },
];

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 15 + 200}px)`,
        }}
        className="relative -top-1/4 flex h-[200px] w-[280px] origin-top flex-col
                   overflow-hidden rounded-2xl sm:h-[240px] sm:w-[360px]
                   sm:rounded-3xl md:h-[280px] md:w-[420px]
                   lg:h-[300px] lg:w-[500px]"
      >
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

const ImagesScrollingAnimation = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center
                   pb-[50vh] pt-[5vh] sm:pb-[60vh] sm:pt-[8vh]
                   lg:pb-[70vh] lg:pt-[10vh]"
      >
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.6,
            1 - (projects.length - i - 1) * 0.08,
          );
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.2, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { ImagesScrollingAnimation, StickyCard_001 };
