import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NeonTunnel } from '../three/NeonTunnel';
import { Code2, Server, Box, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { sound } from '../../lib/soundFx';

interface SceneProps {
  progress: number;
}

interface SkillCategory {
  id: string;
  title: string;
  category: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  color: string;
}

const SKILLS: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'FRONTEND ARCHITECTURE',
    category: 'CORE SUITE',
    level: 98,
    icon: Code2,
    tags: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand'],
    color: '#00F0FF',
  },
  {
    id: 'webgl',
    title: '3D & CREATIVE WEBGL',
    category: 'GRAPHICS ENGINE',
    level: 95,
    icon: Box,
    tags: ['Three.js', 'React Three Fiber', 'GSAP ScrollTrigger', 'GLSL Shaders', 'Framer Motion'],
    color: '#9D00FF',
  },
  {
    id: 'backend',
    title: 'DISTRIBUTED BACKEND',
    category: 'CLOUD & API',
    level: 92,
    icon: Server,
    tags: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Docker'],
    color: '#00FF66',
  },
  {
    id: 'performance',
    title: 'HYPER PERFORMANCE',
    category: 'OPTIMIZATION',
    level: 99,
    icon: Flame,
    tags: ['60 FPS WebGL', 'Web Workers', 'Asset Preloading', 'Lighthouse 100', 'Edge Compute'],
    color: '#FF007A',
  },
];

export const Scene05_SkillsTunnel: React.FC<SceneProps> = ({ progress }) => {
  const [selectedSkill, setSelectedSkill] = useState<string>('frontend');

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-[#030308] overflow-hidden py-12">
      {/* 3D React Three Fiber Neon Tunnel in the Background */}
      <NeonTunnel speed={1.2} neonColor="#00F0FF" />

      {/* Foreground Holographic Skills Interface */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass text-cyan-400 font-mono text-xs border border-cyan-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>WARP TUNNEL // NEURAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white">
            THE SKILLS MATRIX
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-mono mt-1">
            WARP SPEED EXECUTION ACROSS MODERN ENGINEERING STACKS
          </p>
        </motion.div>

        {/* 3D Interactive Floating Hologram Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {SKILLS.map((skill) => {
            const isSelected = selectedSkill === skill.id;
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedSkill(skill.id);
                }}
                onMouseEnter={() => sound.playHover()}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`p-6 rounded-2xl cyber-glass-glow cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                  isSelected
                    ? 'border-cyan-400 shadow-neon-cyan bg-slate-900/90'
                    : 'border-white/10 hover:border-cyan-400/50'
                }`}
              >
                {/* Glow accent top bar */}
                <div
                  className="absolute top-0 inset-x-0 h-1 transition-all"
                  style={{ background: skill.color }}
                />

                <div className="flex items-center justify-between mb-4">
                  <div
                    className="p-3 rounded-xl border border-white/10"
                    style={{ background: `${skill.color}15`, color: skill.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-[10px] text-slate-400 block">{skill.category}</span>
                    <span className="text-sm font-bold" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-orbitron font-bold text-white mb-3">
                  {skill.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 group-hover:border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mastery Level Bar */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" /> PRODUCTION READY
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
