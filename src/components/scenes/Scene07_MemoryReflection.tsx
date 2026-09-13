import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Clock, Milestone, Sparkles } from 'lucide-react';
import { sound } from '../../lib/soundFx';

interface SceneProps {
  progress: number;
}

const TIMELINE = [
  {
    year: '2024 — PRESENT',
    role: 'STAFF CREATIVE ARCHITECT',
    company: 'HYPERDRIVE STUDIOS',
    description: 'Leading Next.js 15, WebGL 3D pipelines, and high-frequency real-time web applications for global tier-1 enterprises.',
  },
  {
    year: '2022 — 2024',
    role: 'SENIOR FULL-STACK & 3D ENGINEER',
    company: 'CYBERPUNK LABS',
    description: 'Spearheaded immersive GSAP and Three.js scrollytelling experiences viewed by over 2.5 million unique visitors.',
  },
  {
    year: '2020 — 2022',
    role: 'FRONTEND ARCHITECT',
    company: 'QUANTUM SYSTEMS',
    description: 'Architected design systems, micro-frontends, and performance optimizations achieving sub-100ms LCP times.',
  },
];

export const Scene07_MemoryReflection: React.FC<SceneProps> = ({ progress }) => {
  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-[#030308] overflow-hidden py-16">
      {/* Melancholic Rain & Reflective Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040612] via-[#02030a] to-[#040612]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-glass text-purple-400 font-mono text-xs border border-purple-500/30 mb-2">
            <Droplets className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
            <span>ACT VII // RAIN ON GLASS & MEMORY SHARDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white">
            THE MEMORY ARCHIVES
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-mono mt-1">
            MILESTONES FORGED THROUGH CODE AND VISION
          </p>
        </motion.div>

        {/* Milestones Timeline */}
        <div className="w-full space-y-6">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              onMouseEnter={() => sound.playHover()}
              className="p-6 rounded-2xl cyber-glass-glow border border-white/10 hover:border-cyan-400/50 transition-all duration-300 relative group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="font-orbitron font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs self-start md:self-auto">
                  {item.year}
                </div>
              </div>

              <div className="text-xs font-mono text-purple-400 mb-2">
                @ {item.company}
              </div>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
