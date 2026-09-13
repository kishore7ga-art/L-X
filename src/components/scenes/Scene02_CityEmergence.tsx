import React from 'react';
import { motion } from 'framer-motion';
import { CyberpunkCityCanvas } from '../three/CyberpunkCityCanvas';
import { Building2, Compass, Layers } from 'lucide-react';

interface SceneProps {
  progress: number;
}

export const Scene02_CityEmergence: React.FC<SceneProps> = ({ progress }) => {
  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-[#030308] overflow-hidden">
      {/* 3D Cyberpunk City Canvas in the background */}
      <CyberpunkCityCanvas progress={progress} />

      {/* Floating Holographic Cyber Billboard Overlays */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-8 md:p-16">
        {/* Left Floating Neon Billboard */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="self-start max-w-sm cyber-glass-glow p-5 rounded-2xl border-cyan-500/30 backdrop-blur-xl pointer-events-auto"
        >
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
            <Building2 className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>SECTOR 07 // NEO TOKYO HORIZON</span>
          </div>
          <h2 className="text-2xl font-orbitron font-bold text-white mb-2">
            THE METROPOLIS
          </h2>
          <p className="text-xs text-slate-300 font-light leading-relaxed">
            A sprawling high-density digital ecosystem where enterprise code meets cinematic WebGL shaders. 
          </p>
          <div className="mt-3 flex gap-2">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">
              ELEVATION 450M
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px]">
              DENSITY 100%
            </span>
          </div>
        </motion.div>

        {/* Right Floating Coordinate Data Monitor */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="self-end max-w-xs cyber-glass p-4 rounded-xl border-purple-500/30 text-right pointer-events-auto font-mono"
        >
          <div className="flex items-center justify-end gap-1.5 text-purple-400 text-xs mb-1">
            <span>GRID TELEMETRY</span>
            <Compass className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="text-xl font-orbitron font-semibold text-white">
            0x7F // SECTOR 9
          </div>
          <div className="text-[10px] text-cyan-400/80 mt-1">
            RADAR: VEHICLE APPROACHING
          </div>
          <div className="mt-2 text-[9px] text-slate-400 flex items-center justify-end gap-1">
            <Layers className="w-3 h-3 text-cyan-400" /> 12 ACTIVE SHADER PASSES
          </div>
        </motion.div>
      </div>

      {/* Narrative Bottom Center Overlay */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none">
        <div className="text-xs font-mono tracking-[0.25em] text-cyan-400">
          // ACT II: CITY EMERGENCE
        </div>
        <div className="text-xl md:text-2xl font-orbitron font-bold text-white mt-1">
          AN IMMERSIVE DIGITAL REALM
        </div>
      </div>
    </div>
  );
};
