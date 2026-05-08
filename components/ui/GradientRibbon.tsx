"use client";

import { motion } from "framer-motion";

/**
 * Stripe-style flowing multi-color gradient ribbon.
 * A skewed band of overlapping animated radial blobs in brand colors.
 */
export function GradientRibbon({
  className = "",
  height = 520,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* skewed clipping band */}
      <div
        className="absolute inset-0"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%)",
        }}
      >
        {/* base wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--hero-wash-1) 0%, var(--hero-wash-2) 35%, var(--hero-wash-3) 70%, var(--hero-wash-4) 100%)",
          }}
        />

        {/* animated color blobs */}
        <motion.div
          className="absolute -left-24 top-0 h-[120%] w-[60%] rounded-full opacity-90 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--hero-blob-teal) 0%, transparent 65%)",
          }}
          animate={{ x: [0, 80, -40, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-0 h-[120%] w-[55%] rounded-full opacity-90 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--hero-blob-violet) 0%, transparent 65%)",
          }}
          animate={{ x: [0, -60, 40, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 top-1/4 h-[80%] w-[45%] rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--hero-blob-purple) 0%, transparent 65%)",
          }}
          animate={{ scale: [1, 1.15, 0.95, 1], x: [0, 40, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 -top-10 h-[70%] w-[40%] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--hero-blob-cyan) 0%, transparent 65%)",
          }}
          animate={{ x: [0, -80, 50, 0], y: [0, 60, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* softness overlay */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--hero-overlay) 0%, transparent 50%)",
          }}
        />
      </div>
    </div>
  );
}
