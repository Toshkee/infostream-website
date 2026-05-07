"use client";

import { motion } from "framer-motion";

const techs = [
  { label: "Angular", color: "#DD0031" },
  { label: ".NET", color: "#512BD4" },
  { label: "Oracle", color: "#F80000" },
  { label: "Docker", color: "#2496ED" },
  { label: "GitHub", color: "#181717" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "RxJS", color: "#B7178C" },
  { label: "React", color: "#61DAFB" },
];

export function TechCircle() {
  const radius = 180;
  return (
    <div className="relative mx-auto h-[440px] w-[440px] max-w-full">
      <svg
        viewBox="-220 -220 440 440"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="orbit" x1="0" x2="1">
            <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#5B4FE9" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <circle
          cx="0"
          cy="0"
          r={radius}
          fill="none"
          stroke="url(#orbit)"
          strokeDasharray="3 8"
          strokeWidth="1.5"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[var(--c-bg)] shadow-card ring-1 ring-border">
          <span className="text-sm font-semibold lowercase tracking-tight text-heading">
            infostream
          </span>
        </div>
      </div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {techs.map((t, i) => {
          const angle = (i / techs.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.div
              key={t.label}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xs font-semibold shadow-card ring-1 ring-border"
                style={{ color: t.color }}
              >
                {t.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
