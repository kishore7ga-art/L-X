import React, { useEffect, useState } from 'react';
import { Shield, Cpu, Activity, Radio, Wifi } from 'lucide-react';

interface HUDProps {
  currentScene: number;
  scrollProgress: number;
}

export const CyberHUDOverlay: React.FC<HUDProps> = ({ currentScene, scrollProgress }) => {
  const [timeStr, setTimeStr] = useState<string>('');
  const [fps, setFps] = useState<number>(60);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(
        `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${Math.floor(now.getMilliseconds() / 10).toString().padStart(2, '0')}`
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const loop = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden font-mono text-[11px] select-none">
      {/* Subtle CRT Scanlines */}
      <div className="absolute inset-0 scanlines-overlay opacity-30 pointer-events-none" />

      {/* Screen Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />

      {/* Top Left Biometric Bracket */}
      <div className="absolute top-6 left-6 flex items-start gap-3 text-cyan-400">
        <div className="border-l-2 border-t-2 border-cyan-400 w-6 h-6" />
        <div className="flex flex-col gap-0.5 tracking-wider">
          <div className="flex items-center gap-1.5 font-orbitron font-semibold text-xs text-white">
            <Shield className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            SYS.ACTIVE // KISHORE-OS v4.9
          </div>
          <div className="text-[10px] text-cyan-400/70">
            LAT: 13.0827° N // LON: 80.2707° E
          </div>
          <div className="text-[10px] text-purple-400/80">
            SCENE: {currentScene.toString().padStart(2, '0')} / 10 — PROTOCOL ONLINE
          </div>
        </div>
      </div>

      {/* Top Right System Telemetry */}
      <div className="absolute top-6 right-6 flex items-start gap-3 text-cyan-400">
        <div className="flex flex-col items-end gap-0.5 tracking-wider">
          <div className="flex items-center gap-2 font-orbitron font-semibold text-xs text-white">
            <span>{timeStr || '00:00:00.00'}</span>
            <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          </div>
          <div className="flex items-center gap-2 text-[10px] text-cyan-400/80">
            <Activity className="w-3 h-3 text-green-400" />
            <span>RENDER: {fps} FPS // 60Hz LOCK</span>
          </div>
          <div className="text-[10px] text-cyan-400/60">
            BUFFER: 100% PRELOADED
          </div>
        </div>
        <div className="border-r-2 border-t-2 border-cyan-400 w-6 h-6" />
      </div>

      {/* Bottom Left System Health & Sensors */}
      <div className="absolute bottom-6 left-6 flex items-end gap-3 text-cyan-400">
        <div className="border-l-2 border-b-2 border-cyan-400 w-6 h-6" />
        <div className="flex flex-col gap-1 tracking-wider">
          <div className="flex items-center gap-2 text-white/90">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold text-xs">WARP ENGINE STATUS</span>
          </div>
          {/* Mini progress bars */}
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-cyan-400/70 w-8">FLUX</span>
            <div className="w-20 h-1.5 bg-slate-800 rounded-sm overflow-hidden flex">
              <div
                className="h-full bg-cyan-400 transition-all duration-300"
                style={{ width: `${Math.min(100, Math.max(20, scrollProgress * 100))}%` }}
              />
            </div>
            <span className="text-[9px] text-cyan-300">{Math.round(scrollProgress * 100)}%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-purple-400/70 w-8">NEURAL</span>
            <div className="w-20 h-1.5 bg-slate-800 rounded-sm overflow-hidden flex">
              <div className="h-full bg-purple-500 w-[94%]" />
            </div>
            <span className="text-[9px] text-purple-300">94%</span>
          </div>
        </div>
      </div>

      {/* Bottom Right Reticle & Scroll Indicator */}
      <div className="absolute bottom-6 right-6 flex items-end gap-3 text-cyan-400">
        <div className="flex flex-col items-end gap-1 tracking-wider">
          <div className="flex items-center gap-1.5 text-white/80">
            <Wifi className="w-3.5 h-3.5 text-green-400 animate-pulse" />
            <span className="font-semibold text-xs">QUANTUM LINK: SECURE</span>
          </div>
          <div className="text-[10px] text-cyan-400/70">
            TRAVEL DISTANCE: {(scrollProgress * 42.5).toFixed(1)} KM
          </div>
          <div className="text-[9px] text-purple-400/60">
            SCROLL TO ENGAGE PROPULSION ▼
          </div>
        </div>
        <div className="border-r-2 border-b-2 border-cyan-400 w-6 h-6" />
      </div>

      {/* Center Reticle Crosshair (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-cyan-400" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-cyan-400" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 w-2 bg-cyan-400" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-0.5 w-2 bg-cyan-400" />
      </div>
    </div>
  );
};
