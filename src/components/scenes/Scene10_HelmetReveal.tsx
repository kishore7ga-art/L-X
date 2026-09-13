import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Send,
  Mail,
  Github,
  Linkedin,
  Twitter,
  FileText,
  Sparkles,
  ShieldAlert,
  CheckCircle,
  Award,
} from 'lucide-react';
import { sound } from '../../lib/soundFx';

interface SceneProps {
  progress: number;
}

export const Scene10_HelmetReveal: React.FC<SceneProps> = ({ progress }) => {
  const [helmetOff, setHelmetOff] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleToggleHelmet = () => {
    sound.playHologram();
    setHelmetOff(!helmetOff);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#9D00FF', '#FF007A', '#FFFFFF'],
    });
  };

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center bg-[#030308] overflow-hidden py-20 px-6">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020206] via-[#080d24] to-[#020206]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/15 blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-glass text-cyan-400 font-mono text-xs border border-cyan-500/30 mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACT X // THE FINAL REVEAL & DIRECT CONNECTION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-orbitron font-extrabold text-white">
            READY TO ARCHITECT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              THE NEXT FRONTIER?
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-mono mt-2 max-w-lg mx-auto">
            AVAILABLE FOR HIGH-IMPACT ROLES, CONSULTING & FREELANCE COMMISSIONS WORLDWIDE.
          </p>
        </motion.div>

        {/* 2-Column Grid: Left (Helmet Reveal Avatar) & Right (Interactive Contact Terminal) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">
          {/* Left Column: Interactive Helmet Avatar (Strict Upper Body) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center"
          >
            <div
              onClick={handleToggleHelmet}
              onMouseEnter={() => sound.playHover()}
              className="relative w-72 h-88 sm:w-80 sm:h-96 rounded-3xl overflow-hidden cyber-box-cyan group cursor-pointer shadow-neon-cyan transition-transform duration-500 hover:scale-105"
            >
              {/* Helmet Portrait */}
              <div
                className="absolute inset-0 transition-opacity duration-700 overflow-hidden"
                style={{ opacity: helmetOff ? 0 : 1 }}
              >
                <img
                  src="/images/helmet-portrait.png"
                  alt="Cyber Helmet Armor Upper Body"
                  className="w-full h-full object-cover object-top filter contrast-125"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-cyan-500/10" />
              </div>

              {/* Revealed Face Portrait */}
              <div
                className="absolute inset-0 transition-opacity duration-700 overflow-hidden"
                style={{ opacity: helmetOff ? 1 : 0 }}
              >
                <img
                  src="/images/cyber-portrait.png"
                  alt="Kishore Revealed Face"
                  className="w-full h-full object-cover object-top filter contrast-125 brightness-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-transparent" />
              </div>

              {/* Laser scanline */}
              <div className="absolute inset-0 scanlines-overlay opacity-40" />

              {/* Bottom Interactive Prompt Tag */}
              <div className="absolute bottom-4 inset-x-4 py-2 px-3 rounded-xl cyber-glass border-cyan-400/40 text-center font-mono text-xs text-cyan-300 shadow-neon-cyan">
                {helmetOff ? 'HELMET DEACTIVATED // FACE REVEALED' : 'CLICK TO REMOVE HELMET ▼'}
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-3 rounded-xl cyber-glass border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-3 rounded-xl cyber-glass border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-3 rounded-xl cyber-glass border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="/resume.pdf"
                download
                onClick={() => sound.playHologram()}
                className="flex items-center gap-2 px-4 py-3 rounded-xl cyber-glass border-cyan-400/30 text-cyan-300 font-mono text-xs hover:border-cyan-400 transition-all hover:scale-105"
              >
                <FileText className="w-4 h-4" /> RESUME.PDF
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Glassmorphism Contact Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full cyber-glass-glow p-8 sm:p-10 rounded-3xl border-cyan-500/40 relative shadow-neon-cyan"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs">
              <span className="text-cyan-400 flex items-center gap-2">
                <Mail className="w-4 h-4" /> QUANTUM TRANSMISSION TERMINAL
              </span>
              <span className="text-green-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" /> ONLINE
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 shadow-neon-cyan">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-white">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light">
                  Your signal has been encrypted and routed directly to my neural inbox. I will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono text-xs hover:bg-cyan-500 hover:text-black transition-colors"
                >
                  TRANSMIT ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    AGENT IDENTIFIER (NAME)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    SECURE FREQUENCY (EMAIL)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. elena@metropolis.ai"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    MISSION PARAMETERS (MESSAGE)
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe project requirements, timeline, and architectural objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-black font-orbitron font-bold text-xs uppercase tracking-wider hover:shadow-neon-cyan transition-all transform active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 fill-black" /> TRANSMIT DATA PACKET
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
