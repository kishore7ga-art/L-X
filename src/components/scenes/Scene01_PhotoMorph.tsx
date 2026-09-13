import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Sparkles } from 'lucide-react';
import { sound } from '../../lib/soundFx';

interface SceneProps {
  progress: number; // 0.0 to 1.0 within Scene 1
}

export const Scene01_PhotoMorph: React.FC<SceneProps> = ({ progress }) => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [decodedText, setDecodedText] = useState('INITIALIZING...');

  // Morph factor: 0 = 100% Real Photo, 1 = 100% Cyber Holographic Portrait
  const morphFactor = Math.min(1, Math.max(0, (progress - 0.2) / 0.6));

  useEffect(() => {
    const texts = [
      'SYS.BOOT // IDENTIFYING SUBJECT',
      'NEURAL SCAN 98.4%',
      'HOLOGRAPHIC PROJECTION ENGAGED',
      'KISHORE // THE ARCHITECT',
    ];
    const index = Math.min(texts.length - 1, Math.floor(progress * texts.length));
    setDecodedText(texts[index]);
  }, [progress]);

  const triggerManualGlitch = () => {
    sound.playHologram();
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 600);
  };

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-[#030308] overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, rgba(0,240,255,${0.15 + morphFactor * 0.2}) 0%, rgba(157,0,255,0.1) 60%, transparent 80%)`,
        }}
      />

      {/* Cyber Grid Ground Lines */}
      <div className="absolute inset-0 cyber-grid-cyan opacity-25 pointer-events-none" />

      {/* Main Upper-Body Container */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 text-center">
        {/* Terminal Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full cyber-glass text-cyan-400 font-mono text-xs mb-6 border border-cyan-500/30 shadow-neon-cyan"
        >
          <Terminal className="w-3.5 h-3.5 animate-pulse" />
          <span className="tracking-widest">{decodedText}</span>
          <span className="inline-block w-1.5 h-3 bg-cyan-400 animate-pulse ml-1" />
        </motion.div>

        {/* The Morphing Portrait Card — STRICT UPPER BODY ONLY */}
        <div
          onClick={triggerManualGlitch}
          className="relative w-72 h-80 sm:w-88 sm:h-96 rounded-2xl overflow-hidden cursor-pointer group cyber-box-cyan bg-slate-950/80 transition-transform duration-500 hover:scale-105"
        >
          {/* Real Photo (Base Layer) */}
          <div
            className="absolute inset-0 transition-opacity duration-300 overflow-hidden"
            style={{ opacity: 1 - morphFactor }}
          >
            <img
              src="/images/real-photo.png"
              alt="Kishore - Real Portrait"
              className="w-full h-full object-cover object-top filter contrast-110"
              onError={(e) => {
                // Fallback elegant futuristic portrait
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
              }}
            />
            {/* Cinematic rim shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-black/40" />
          </div>

          {/* Futuristic Cyber Holographic Portrait (Overlay Layer) */}
          <div
            className="absolute inset-0 transition-opacity duration-300 overflow-hidden"
            style={{ opacity: morphFactor }}
          >
            <img
              src="/images/cyber-portrait.png"
              alt="Kishore - Cyber Hologram"
              className={`w-full h-full object-cover object-top filter brightness-110 contrast-125 saturate-150 ${
                glitchActive ? 'translate-x-1 filter hue-rotate-90' : ''
              }`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
              }}
            />
            {/* Holographic Cyan Tint & Scanlines */}
            <div className="absolute inset-0 bg-cyan-500/15 mix-blend-color-dodge pointer-events-none" />
            <div className="absolute inset-0 scanlines-overlay opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-cyan-500/20" />
          </div>

          {/* Biometric Scanning Laser line */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]"
          />

          {/* Hologram Reticle Corner Accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400" />

          {/* Biometric Stats Float */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg cyber-glass text-[10px] font-mono text-cyan-300">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-cyan-400" /> MATCH: 99.8%
            </span>
            <span className="flex items-center gap-1 text-purple-300">
              <Sparkles className="w-3 h-3 text-purple-400" /> SYNC: READY
            </span>
          </div>
        </div>

        {/* Title and Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 space-y-3"
        >
          <div className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">
            // ACT I: THE AWAKENING
          </div>
          <h1 className="text-4xl sm:text-6xl font-orbitron font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-400">
            KISHORE <span className="text-cyan-400 text-glow">//</span> ARCHITECT
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300 font-sans font-light leading-relaxed">
            Welcome to the digital frontier. Transforming bold creative visions into hyper-speed, immersive 3D digital realities.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => sound.playWarp()}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-orbitron font-bold text-xs tracking-wider uppercase hover:shadow-neon-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 fill-black" /> Engage Propulsion
              </span>
            </button>
            <div className="flex items-center px-4 py-2 rounded-lg cyber-glass text-xs font-mono text-cyan-400">
              SCROLL DOWN TO ADVANCE TIMELINE ▼
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
