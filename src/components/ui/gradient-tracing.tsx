"use client";

import React from "react";
import { motion } from "motion/react";

/* ==================================================================== */
/*  Shared props                                                         */
/* ==================================================================== */

interface TracingCore {
  /** Gradient stops: [head (fades in), body (solid), tail (fades out)] */
  gradientColors?: [string, string, string];
  /** Seconds for one sweep */
  animationDuration?: number;
  /** Seconds before the sweep starts — stagger several lines with this */
  delay?: number;
  strokeWidth?: number;
  /** Keep the stroke crisp inside a stretched viewBox */
  nonScalingStroke?: boolean;
}

export interface GradientTracingProps extends TracingCore {
  width: number;
  height: number;
  baseColor?: string;
  baseOpacity?: number;
  path?: string;
  className?: string;
}

/* ==================================================================== */
/*  GradientTracingPath                                                  */
/*                                                                       */
/*  The tracing effect as SVG children, so it can be dropped into a       */
/*  parent <svg> that already owns its own viewBox and sizing.           */
/* ==================================================================== */

export interface GradientTracingPathProps extends TracingCore {
  /** SVG path data */
  path: string;
  /** Sweep distance in user units — normally the parent viewBox width */
  width: number;
  /** Static track drawn under the sweep. Pass showBase={false} to omit. */
  showBase?: boolean;
  baseColor?: string;
  baseOpacity?: number;
}

export const GradientTracingPath: React.FC<GradientTracingPathProps> = ({
  path,
  width,
  showBase = true,
  baseColor = "black",
  baseOpacity = 0.2,
  gradientColors = ["#2EB9DF", "#2EB9DF", "#9E00FF"],
  animationDuration = 2,
  delay = 0,
  strokeWidth = 2,
  nonScalingStroke = false,
}) => {
  /* useId keeps the gradient reference stable across re-renders */
  const gradientId = `gradient-tracing-${React.useId().replace(/:/g, "")}`;
  const vectorEffect = nonScalingStroke ? "non-scaling-stroke" : undefined;

  return (
    <>
      {showBase && (
        <path
          d={path}
          fill="none"
          stroke={baseColor}
          strokeOpacity={baseOpacity}
          strokeWidth={strokeWidth}
          vectorEffect={vectorEffect}
        />
      )}
      <path
        d={path}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        vectorEffect={vectorEffect}
      />
      <defs>
        <motion.linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          animate={{
            x1: [0, width * 2],
            x2: [0, width],
          }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            ease: "linear",
            delay,
          }}
        >
          <stop stopColor={gradientColors[0]} stopOpacity="0" />
          <stop stopColor={gradientColors[1]} />
          <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </>
  );
};

/* ==================================================================== */
/*  GradientTracing — standalone, fixed-size                             */
/* ==================================================================== */

export const GradientTracing: React.FC<GradientTracingProps> = ({
  width,
  height,
  baseColor = "black",
  baseOpacity = 0.2,
  gradientColors = ["#2EB9DF", "#2EB9DF", "#9E00FF"],
  animationDuration = 2,
  delay = 0,
  strokeWidth = 2,
  nonScalingStroke = false,
  path = `M0,${height / 2} L${width},${height / 2}`,
  className,
}) => (
  <div className={className ?? "relative"} style={{ width, height }}>
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <GradientTracingPath
        path={path}
        width={width}
        baseColor={baseColor}
        baseOpacity={baseOpacity}
        gradientColors={gradientColors}
        animationDuration={animationDuration}
        delay={delay}
        strokeWidth={strokeWidth}
        nonScalingStroke={nonScalingStroke}
      />
    </svg>
  </div>
);
