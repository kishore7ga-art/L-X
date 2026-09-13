import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { KeyRound, Sparkles, Navigation, Disc3 } from 'lucide-react';
import { sound } from '../../lib/soundFx';

interface SceneProps {
  progress: number;
}

export const Scene03_CarArrival: React.FC<SceneProps> = ({ progress }) => {
  const [doorOpened, setDoorOpened] = useState(false);

  const toggleDoor = () => {
    sound.playIgnition();
    setDoorOpened(!doorOpened);
  };

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-[#030308] overflow-hidden">
      {/* Background Volumetric Glow & Fog */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020206] via-[#050b1a] to-[#020206]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[160px] pointer-events-none" />

      {/* Cyber Road Reflections Grid */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 cyber-grid-cyan opacity-30" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Story & Vehicle Telemetry */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-glass text-cyan-400 font-mono text-xs border border-cyan-500/40">
            <Disc3 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
            <span>HYPERCAR ARRIVAL // PROTOCOL 03</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white leading-tight">
            THE MATTE-BLACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              CYBER HORIZON GT
            </span>
          </h2>

          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed max-w-lg font-light">
            An aerodynamic beast forged in carbon fiber and fiber-optic telemetry. Built for zero-latency execution and high-performance throughput.
          </p>

          {/* Quick Vehicle Specs Grid */}
          <div className="grid grid-cols-3 gap-3 max-w-md font-mono text-xs">
            <div className="cyber-glass p-3 rounded-xl border-cyan-500/20">
              <div className="text-slate-400 text-[10px]">PROPULSION</div>
              <div className="text-cyan-300 font-bold text-sm">DUAL-WARP</div>
            </div>
            <div className="cyber-glass p-3 rounded-xl border-purple-500/20">
              <div className="text-slate-400 text-[10px]">AERODYNAMICS</div>
              <div className="text-purple-300 font-bold text-sm">0.18 Cd</div>
            </div>
            <div className="cyber-glass p-3 rounded-xl border-green-500/20">
              <div className="text-slate-400 text-[10px]">TELEMETRY</div>
              <div className="text-green-300 font-bold text-sm">QUANTUM HUD</div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-2">
            <button
              onClick={toggleDoor}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 hover:shadow-neon-cyan transition-all transform active:scale-95"
            >
              <KeyRound className="w-4 h-4" />
              <span>{doorOpened ? 'DIHEDRAL DOORS OPEN' : 'ACTIVATE VEHICLE ACCESS'}</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Visual Vehicle & Upper-Body Driver Framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex-1 flex justify-center w-full max-w-lg"
        >
          {/* Futuristic Car Display Card */}
          <div className="relative w-full h-80 sm:h-96 rounded-3xl cyber-glass-glow border-cyan-500/30 overflow-hidden group">
            <img
              src="/images/car-arrival.png"
              alt="Futuristic Matte-Black Sports Car"
              className="w-full h-full object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80';
              }}
            />

            {/* Cyan Underglow Lighting simulation */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-500/40 via-cyan-500/10 to-transparent pointer-events-none" />

            {/* Glowing Headlight Beams */}
            <div className="absolute top-1/3 left-0 w-32 h-1 bg-cyan-400 blur-sm shadow-[0_0_20px_#00f0ff] transform -rotate-6" />

            {/* Upper-Body Driver Window Silhouette View (Strictly Upper Torso) */}
            <div className="absolute top-6 right-6 px-3 py-1.5 rounded-lg cyber-glass border-cyan-400/40 font-mono text-[10px] text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>DRIVER SECTOR // UPPER-BODY LOCK</span>
            </div>

            {/* Door Open Indicator Banner */}
            {doorOpened && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-cyan-950/90 border border-cyan-400/80 font-mono text-xs text-cyan-200 text-center shadow-neon-cyan"
              >
                DIHEDRAL DOORS ENGAGED — READY TO BOARD
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
