import React from "react";
import {
  ScrollPortraitWall,
  type Speaker,
} from "@/components/ui/scroll-portrait-wall";

// Speakers with high quality portrait avatars
const speakers: Speaker[] = [
  { name: "Naomi Adeyemi", role: "Keynote · Design Systems" },
  { name: "Hugo Marchetti", role: "Principal Engineer, Vercel" },
  { name: "Priya Nair", role: "Head of AI, Loomstack" },
  { name: "Sebastian Cole", role: "Creative Director" },
  { name: "Mei-Ling Zhao", role: "Staff Designer, Linear" },
  { name: "Idris Calloway", role: "Founder, Northwind" },
  { name: "Clara Boström", role: "VP Product, Figma" },
  { name: "Rafael Ortega", role: "Motion Lead" },
  { name: "Hannah Whitfield", role: "DX Engineer, Stripe" },
  { name: "Yusuf Demir", role: "Research, DeepMind" },
].map((s, i) => ({
  ...s,
  src: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
  ][i % 10],
}));

export function ScrollPortraitWallDemo() {
  return (
    <ScrollPortraitWall
      title="The Lineup"
      hint="scroll to meet the lineup"
      date="Sep 18, 2026"
      speakers={speakers}
      showCaptions={false}
    />
  );
}

export default ScrollPortraitWallDemo;
