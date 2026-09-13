import React from 'react';
import { sound } from '../../lib/soundFx';

interface ChapterNavProps {
  currentScene: number;
  onSelectScene?: (index: number) => void;
}

const CHAPTERS = [
  { id: 1, label: 'AWAKENING', sub: 'Photo Transformation' },
  { id: 2, label: 'NEON METROPOLIS', sub: 'Cyberpunk Skyline' },
  { id: 3, label: 'THE VEHICLE', sub: 'Arrival & Entry' },
  { id: 4, label: 'COCKPIT HUD', sub: 'Neural Dashboard' },
  { id: 5, label: 'SKILLS TUNNEL', sub: '3D Tech Matrix' },
  { id: 6, label: 'PROJECTS HIGHWAY', sub: 'Holographic Portals' },
  { id: 7, label: 'MEMORY REFLECTION', sub: 'Vision & History' },
  { id: 8, label: 'ACCELERATION', sub: 'Hyperdrive Warp' },
  { id: 9, label: 'NEURAL LINK', sub: 'Cinematic Close-Up' },
  { id: 10, label: 'HELMET REVEAL', sub: 'Direct Connection' },
];

export const ScrollHUDNav: React.FC<ChapterNavProps> = ({ currentScene, onSelectScene }) => {
  return (
    <nav aria-label="Timeline Navigation" className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 font-mono text-[10px]">
      <div className="flex flex-col gap-2.5 items-end">
        {CHAPTERS.map((ch) => {
          const isActive = currentScene === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => {
                sound.playClick();
                if (onSelectScene) onSelectScene(ch.id);
              }}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2.5 group cursor-pointer text-right"
            >
              {/* Tooltip Label */}
              <div
                className={`transition-all duration-300 transform ${
                  isActive
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                <div className="text-white font-orbitron font-semibold text-[11px] leading-tight">
                  {ch.label}
                </div>
                <div className="text-cyan-400/70 text-[9px]">{ch.sub}</div>
              </div>

              {/* Indicator Dot / Bar */}
              <div className="flex items-center justify-center w-5 h-5">
                <div
                  className={`transition-all duration-300 rounded-sm ${
                    isActive
                      ? 'w-3 h-3 bg-cyan-400 shadow-neon-cyan rotate-45'
                      : 'w-1.5 h-1.5 bg-slate-600 group-hover:bg-cyan-300 group-hover:scale-125'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
