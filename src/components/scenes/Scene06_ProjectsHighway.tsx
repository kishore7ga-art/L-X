import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layers, Eye } from 'lucide-react';
import { sound } from '../../lib/soundFx';

interface SceneProps {
  progress: number;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  stats: string;
}

const PROJECTS: Project[] = [
  {
    id: 'aegis-ai',
    title: 'AEGIS // QUANTUM AI PLATFORM',
    category: 'ENTERPRISE AI ARCHITECTURE',
    description: 'Autonomous neural network orchestrator for large-scale real-time LLM agent swarms with custom WebGL graph visualization.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tech: ['Next.js 15', 'Three.js', 'PyTorch API', 'Tailwind', 'WebSockets'],
    liveUrl: '#',
    githubUrl: '#',
    stats: '120k MAU // < 12ms Latency',
  },
  {
    id: 'cyber-hypercar',
    title: 'NEXUS // 3D CAR CONFIGURATOR',
    category: 'CREATIVE 3D WEBGL',
    description: 'Photorealistic WebGL vehicle customizer featuring real-time PBR shaders, dynamic paint reflections, and raymarching ambient occlusion.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    tech: ['React Three Fiber', 'GLSL Shaders', 'GSAP', 'Zustand', 'PostProcessing'],
    liveUrl: '#',
    githubUrl: '#',
    stats: '60 FPS Ultra // 4K Textures',
  },
  {
    id: 'pulse-defi',
    title: 'PULSE // DEFI LIQUIDITY TERMINAL',
    category: 'FINTECH & TRADING',
    description: 'High-frequency liquidity aggregator and orderbook analytics dashboard with millisecond candlestick charting.',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    tech: ['TypeScript', 'GraphQL', 'D3.js', 'Ethers.js', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    stats: '$4.2B Volume Tracked',
  },
];

export const Scene06_ProjectsHighway: React.FC<SceneProps> = ({ progress }) => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-[#030308] overflow-hidden py-16">
      {/* Background Starry Nebula & Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.8)_0%,#030308_80%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 cyber-grid-cyan opacity-20 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-glass text-cyan-400 font-mono text-xs border border-cyan-500/30 mb-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>PROJECT HIGHWAY // FEATURED MISSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white">
            PRODUCTION ARCHIVES
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-mono mt-1">
            SELECTED FLAGSHIP COMMERCIAL & CREATIVE BUILDS
          </p>
        </motion.div>

        {/* 3D Holographic Billboard Projects Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {PROJECTS.map((proj, index) => {
            const isSelected = activeProject === index;

            return (
              <motion.div
                key={proj.id}
                onClick={() => {
                  sound.playClick();
                  setActiveProject(index);
                }}
                onMouseEnter={() => sound.playHover()}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`flex flex-col justify-between rounded-3xl cyber-glass-glow border overflow-hidden transition-all duration-500 group cursor-pointer ${
                  isSelected
                    ? 'border-cyan-400 shadow-neon-cyan bg-slate-900/90'
                    : 'border-white/10 hover:border-cyan-400/40'
                }`}
              >
                {/* Project Image Preview */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full cyber-glass font-mono text-[10px] text-cyan-300 border border-cyan-400/30">
                    {proj.stats}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                      {proj.category}
                    </div>
                    <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed mt-2">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.playHologram();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-cyan-500 text-black font-orbitron font-bold text-xs uppercase hover:bg-cyan-400 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" /> LIVE PORTAL
                      </a>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.playClick();
                        }}
                        className="p-2 rounded-xl cyber-glass text-white hover:text-cyan-400 hover:border-cyan-400 transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
