import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Zap, Activity, Cpu, ShieldCheck } from 'lucide-react';
import { sound } from '../../lib/soundFx';

interface SceneProps {
  progress: number;
}

export const Scene04_CockpitHUD: React.FC<SceneProps> = ({ progress }) => {
  const [speedVal, setSpeedVal] = useState(140);
  const [rpmVal, setRpmVal] = useState(6800);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeedVal(180 + Math.floor(Math.sin(Date.now() / 600) * 35));
      setRpmVal(7200 + Math.floor(Math.cos(Date.now() / 400) * 800));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-[#030308] overflow-hidden">
      {/* Background Cockpit View */}
      <div className="absolute inset-0">
        <img
          src="/images/cockpit-view.png"
          alt="Hypercar Cockpit View"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-125"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-[#030308]/70" />
        <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color-dodge" />
      </div>

      {/* Cockpit HUD Holographic Digital Gauges Overlay */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center justify-center">
        {/* Main Central HUD Cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full cyber-glass-glow rounded-3xl p-6 sm:p-10 border-cyan-500/40 relative shadow-neon-cyan"
        >
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-4 mb-6">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
              <ShieldCheck className="w-4 h-4 text-green-400 animate-pulse" />
              <span>NEURAL DRIVE TELEMETRY // ACTIVE</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
              <span className="text-purple-400">WARP CORE: NOMINAL</span>
              <span className="text-cyan-400">G-FORCE: 2.4G</span>
            </div>
          </div>

          {/* Gauges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
            {/* Left Gauge: RPM & Power */}
            <div className="p-4 rounded-2xl cyber-glass border-purple-500/30 flex flex-col items-center">
              <div className="text-[10px] font-mono text-purple-400 mb-1 flex items-center gap-1">
                <Cpu className="w-3 h-3" /> FLUX ENGINE RPM
              </div>
              <div className="text-4xl font-orbitron font-extrabold text-white text-glow">
                {rpmVal.toLocaleString()}
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150"
                  style={{ width: `${(rpmVal / 9000) * 100}%` }}
                />
              </div>
            </div>

            {/* Center Gauge: Main Digital Speedometer */}
            <div className="p-6 rounded-2xl cyber-box-cyan bg-slate-950/60 flex flex-col items-center relative">
              <div className="text-xs font-mono text-cyan-400 mb-1 flex items-center gap-1">
                <Gauge className="w-4 h-4 text-cyan-400 animate-spin" /> VELOCITY
              </div>
              <div className="text-6xl sm:text-7xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-cyan-400 cyber-glow-cyan">
                {speedVal}
              </div>
              <div className="text-xs font-mono text-cyan-300 font-bold tracking-widest mt-1">
                KM/H // MACH DRIVE
              </div>
            </div>

            {/* Right Gauge: Neural Sync & Output */}
            <div className="p-4 rounded-2xl cyber-glass border-cyan-500/30 flex flex-col items-center">
              <div className="text-[10px] font-mono text-cyan-400 mb-1 flex items-center gap-1">
                <Activity className="w-3 h-3 text-cyan-400" /> NEURAL SYNC
              </div>
              <div className="text-4xl font-orbitron font-extrabold text-white text-glow">
                99.9%
              </div>
              {/* Animated waveform bars */}
              <div className="flex items-end justify-center gap-1.5 h-6 mt-3">
                {[40, 80, 60, 100, 70, 90, 50, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.5}%`] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1.5 bg-cyan-400 rounded-sm"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer Cockpit CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-cyan-500/20">
            <div className="text-xs font-mono text-slate-400">
              UPPER-BODY DRIVER SYNC: <span className="text-cyan-400 font-bold">100% CALIBRATED</span>
            </div>
            <button
              onClick={() => sound.playWarp()}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-orbitron font-bold text-xs uppercase tracking-wider hover:shadow-neon-cyan transition-all"
            >
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" /> ENTER SKILLS HYPERSPACE
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
