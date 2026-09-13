import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Gauge, Zap } from 'lucide-react';
import { sound } from '../../lib/soundFx';

interface SceneProps {
  progress: number;
}

export const Scene08_CarAcceleration: React.FC<SceneProps> = ({ progress }) => {
  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-[#030308] overflow-hidden">
      {/* High-speed motion blur lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scaleX: [1, 2.5, 1],
              opacity: [0.2, 0.8, 0.2],
              x: ['-50%', '50%'],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.05,
              ease: 'easeInOut',
            }}
            className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: `${(i / 16) * 100}%` }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl cyber-glass-glow border-cyan-500/40 relative shadow-neon-cyan max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass text-cyan-400 font-mono text-xs border border-cyan-500/30 mb-4">
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>HYPERDRIVE OVERCLOCK // ENGAGED</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-400">
            WARP SPEED
          </h2>

          <p className="text-slate-300 text-sm font-mono mt-3 leading-relaxed">
            ACCELERATING THROUGH THE DIGITAL MATRIX TOWARDS THE FINAL DESTINATION.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => {
                sound.playIgnition();
                sound.playWarp();
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:shadow-neon-cyan active:scale-95 transition-all"
            >
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 fill-black" /> MAXIMUM OVERDRIVE
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
