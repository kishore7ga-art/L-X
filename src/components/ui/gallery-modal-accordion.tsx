// @ts-nocheck
"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const itemsArr = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80",
    title: "Misty Mountain Majesty",
    description:
      "A breathtaking view of misty mountains shrouded in clouds, creating an ethereal landscape.",
    tags: ["Misty", "Mountains", "Clouds", "Ethereal", "Landscape"],
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
    title: "Winter Wonderland",
    description:
      "A serene winter scene with snow-covered trees and mountains, showcasing nature's pristine beauty.",
    tags: ["Winter", "Snow", "Trees", "Mountains", "Serene"],
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    title: "Autumn Mountain Retreat",
    description:
      "A cozy cabin nestled in the mountains, surrounded by the vibrant colors of autumn foliage.",
    tags: ["Autumn", "Cabin", "Mountains", "Foliage", "Cozy"],
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    title: "Tranquil Lake Reflection",
    description:
      "A calm mountain lake perfectly reflecting the surrounding peaks and sky, creating a mirror-like surface.",
    tags: ["Lake", "Reflection", "Mountains", "Tranquil", "Mirror"],
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    title: "Misty Mountain Peaks",
    description:
      "Majestic mountain peaks emerging from a sea of clouds, showcasing nature's grandeur.",
    tags: ["Misty", "Peaks", "Clouds", "Majestic", "Nature"],
  },
];

export function Gallery({
  items,
  setIndex,
  setOpen,
  index,
}: {
  items: typeof itemsArr;
  setIndex: (index: number) => void;
  setOpen: (open: boolean) => void;
  index: number;
}) {
  return (
    <div className="rounded-md w-fit mx-auto md:gap-3 gap-1.5 flex pb-10 pt-6">
      {items.map((item, i) => {
        return (
          <motion.img
            whileTap={{ scale: 0.95 }}
            className={`rounded-2xl ${
              index === i
                ? "w-[260px]"
                : "xl:w-[70px] md:w-[45px] sm:w-[30px] w-[20px]"
            } h-[220px] shrink-0 object-cover transition-[width] ease-in-out duration-300 shadow-md cursor-pointer`}
            key={item.id}
            onMouseEnter={() => {
              setIndex(i);
            }}
            onMouseLeave={() => {
              setIndex(i);
            }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            src={item?.url}
            layoutId={String(item.id)}
          />
        );
      })}
    </div>
  );
}

export function AccordionModal() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative w-full">
      <Gallery
        items={itemsArr}
        index={index}
        setIndex={setIndex}
        setOpen={setOpen}
      />
      <AnimatePresence>
        {open !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="overlay"
            className="bg-black/60 backdrop-blur-lg fixed inset-0 z-50 top-0 left-0 bottom-0 right-0 w-full h-full grid place-content-center p-4"
            onClick={() => {
              setOpen(false);
            }}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <motion.div
                layoutId={String(itemsArr[index].id)}
                className="w-[90vw] max-w-[500px] h-[450px] rounded-3xl relative cursor-default overflow-hidden shadow-2xl bg-white dark:bg-slate-900"
              >
                <img
                  src={itemsArr[index].url}
                  alt="single-image"
                  className="rounded-3xl h-full w-full object-cover"
                />
                <article className="bg-black/60 backdrop-blur-md text-white absolute bottom-0 left-0 w-full p-6">
                  <motion.h3
                    initial={{ scaleY: 0.2 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0.2 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-xl font-bold mb-1"
                  >
                    {itemsArr[index].title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-sm text-slate-200 dark:text-slate-600 leading-relaxed"
                  >
                    {itemsArr[index].description}
                  </motion.p>
                </article>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccordionModal;
