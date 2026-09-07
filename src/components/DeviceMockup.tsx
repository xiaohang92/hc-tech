"use client";

import { useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

const DeviceMockup = () => {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -9, y: x * 11 });
  };

  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto w-full max-w-lg"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-5 shadow-2xl transition-[rotate,translate] duration-200 ease-out sm:p-6"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="mb-4 flex items-center justify-between text-indigo-100">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            Live product preview
          </p>
          <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-[11px] font-semibold text-emerald-200">
            99.9% uptime
          </span>
        </div>

        <div className="relative min-h-[18rem] sm:min-h-[22rem]">
          <div className="absolute inset-x-2 top-6 animate-float rounded-xl border border-white/10 bg-slate-950/80 p-3 shadow-xl sm:inset-x-6">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 h-5 flex-1 rounded bg-white/10" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 rounded-lg bg-indigo-500/20 p-3">
                <p className="text-[11px] text-indigo-200">Monthly revenue</p>
                <p className="text-lg font-bold text-white">RM 48.2k</p>
                <div className="mt-3 flex h-16 items-end gap-1">
                  {[40, 55, 38, 72, 64, 88, 76].map((height) => (
                    <span
                      key={height}
                      className="flex-1 rounded-t bg-indigo-400/80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-[11px] text-indigo-200">LCP</p>
                  <p className="text-base font-bold text-white">1.4s</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-[11px] text-indigo-200">Conv.</p>
                  <p className="text-base font-bold text-emerald-300">+41%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-1 bottom-0 w-[38%] animate-float-delayed rounded-[1.4rem] border border-white/20 bg-slate-950 p-2 shadow-2xl sm:-right-4">
            <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-white/20" />
            <div className="space-y-2 rounded-xl bg-slate-900 p-2">
              <div className="h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500" />
              <div className="h-2 rounded bg-white/20" />
              <div className="h-2 w-3/4 rounded bg-white/10" />
              <div className="rounded-md bg-indigo-500 py-1.5 text-center text-[10px] font-semibold text-white">
                Get quote
              </div>
            </div>
          </div>

          <div className="absolute -left-1 bottom-8 hidden w-28 rotate-[-8deg] rounded-xl border border-white/15 bg-white/10 p-2 backdrop-blur-sm sm:block">
            <p className="text-[10px] font-semibold text-indigo-100">Tablet ops</p>
            <div className="mt-2 h-10 rounded bg-indigo-400/30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceMockup;
