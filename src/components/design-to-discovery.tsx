"use client";
import React from "react";
import { motion } from "motion/react";
import { LayeredText } from "@/components/ui/layered-text";

/** Bridges the design section into the discoverability section. */
const LINES = [
  { top: " ", bottom: "DESIGNED" },
  { top: "DESIGNED", bottom: "BUILT" },
  { top: "BUILT", bottom: "STRUCTURED" },
  { top: "STRUCTURED", bottom: "INDEXED" },
  { top: "INDEXED", bottom: "ANSWERED" },
  { top: "ANSWERED", bottom: "DISCOVERED" },
  { top: "DISCOVERED", bottom: " " },
];

export function DesignToDiscovery() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 sm:px-6 lg:px-8"
      >
        <LayeredText
          lines={LINES}
          fontSize="104px"
          fontSizeMd="42px"
          lineHeight={86}
          lineHeightMd={38}
          offset={56}
          offsetMd={24}
        />
      </motion.div>
    </section>
  );
}

export default DesignToDiscovery;
