import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, Scan, Sparkles } from 'lucide-react';
import { sound } from '../../lib/soundFx';

interface SceneProps {
  progress: number;
}

export const Scene09_FaceCloseup: React.FC<SceneProps> = ({ progress }) => {
  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-[#030308] overflow-hidden">
      {/* Cinematic Dual Split Lighting Background */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/20 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-pink-500/20 blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center text-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-glass text-cyan-400 font-mono text-xs border border-cyan-500/30 mb-6"
        >
          <Scan className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>ACT IX // NEURAL LOCK & OCULAR FOCUS</span>
        </motion.div>

        {/* Cinematic Close-Up Card (Strict Upper Body) */}
        <div className="relative w-80 h-96 sm:w-96 sm:h-[420px] rounded-3xl overflow-hidden cyber-box-cyan group shadow-neon-cyan">
          <img
            src="/images/cyber-portrait.png"
            alt="Cinematic Extreme Close-Up Portrait"
            className="w-full h-full object-cover object-top filter contrast-125 brightness-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
            }}
          />

          {/* Cyan / Magenta Split Lighting Shadow Gradients */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-cyan-500/30 to-transparent pointer-events-none mix-blend-screen" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-pink-500/30 to-transparent pointer-events-none mix-blend-screen" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030308] to-transparent pointer-events-none" />

          {/* Ocular Reticle Targeting HUD */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-cyan-400/50 rounded-full flex items-center justify-center animate-spin pointer-events-none">
            <div className="w-20 h-20 border border-purple-400/50 rounded-full border-dashed" />
          </div>

          <div className="absolute bottom-4 inset-x-4 flex items-center justify-between px-3 py-1.5 rounded-xl cyber-glass font-mono text-[10px] text-cyan-300">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-cyan-400" /> FOCUS: LOCKED
            </span>
            <span className="text-pink-300">CALM CONFIDENCE</span>
          </div>
        </div>

        {/* Narrative text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <h2 className="text-2xl sm:text-3xl font-orbitron font-bold text-white">
            DIRECT OCULAR TELEMETRY
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-mono mt-1">
            ALL SYSTEMS CONVERGING TOWARDS THE REVEAL
          </p>
        </motion.div>
      </div>
    </div>
  );
};
