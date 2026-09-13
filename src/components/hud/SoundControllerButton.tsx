import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../../lib/soundFx';

export const SoundControllerButton: React.FC = () => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());

  const handleToggle = () => {
    const nextMute = sound.toggleMute();
    setIsMuted(nextMute);
    if (!nextMute) {
      sound.playHologram();
    }
  };

  return (
    <button
      onClick={handleToggle}
      onMouseEnter={() => sound.playHover()}
      aria-label="Toggle Sci-Fi Audio FX"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2 rounded-full cyber-glass-glow text-xs font-mono tracking-widest text-cyan-400 hover:text-white hover:border-cyan-400/80 transition-all duration-300 shadow-neon-cyan active:scale-95 group"
    >
      <div className="relative flex items-center justify-center">
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-red-400" />
        ) : (
          <Volume2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
        )}
        {!isMuted && (
          <span className="absolute -inset-1 rounded-full bg-cyan-400/20 animate-ping" />
        )}
      </div>
      <span className="font-orbitron font-medium">
        AUDIO // {isMuted ? 'MUTED' : 'CYBER SYNTH ON'}
      </span>
      {!isMuted && (
        <div className="flex items-end gap-0.5 h-3">
          <span className="w-0.5 h-2 bg-cyan-400 animate-pulse" />
          <span className="w-0.5 h-3 bg-cyan-400 animate-pulse delay-75" />
          <span className="w-0.5 h-1.5 bg-cyan-400 animate-pulse delay-150" />
        </div>
      )}
    </button>
  );
};
