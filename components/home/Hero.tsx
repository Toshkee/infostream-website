"use client";

import { motion } from "framer-motion";
import { GradientRibbon } from "@/components/ui/GradientRibbon";

export function Hero({
  title,
  tagOne,
  tagTwo,
  body,
}: {
  title: string;
  tagOne: string;
  tagTwo: string;
  body: string;
}) {
  // Highlight last word with brand gradient
  const parts = title.trim().split(" ");
  const lastWord = parts.pop() ?? "";
  const head = parts.join(" ");

  return (
    <section className="relative overflow-hidden bg-[var(--c-bg)] pt-32 pb-32 lg:pt-44 lg:pb-40">
      <GradientRibbon height={620} />

      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-16 px-6 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-heading/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
            {tagOne} · {tagTwo}
          </p>

          <h1 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-heading">
            {head}{" "}
            <span className="text-gradient-brand">{lastWord}</span>
            <span className="text-brand-violet">.</span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-body">
            {body}
          </p>
        </motion.div>

        <FloatingMockup />
      </div>
    </section>
  );
}

/* ---------- mockup ---------- */

function FloatingMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative hidden lg:block"
    >
      <motion.div
        className="relative"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ y: -14, scale: 1.01 }}
      >
        {/* card */}
        <div
          className="relative overflow-hidden rounded-2xl border border-border bg-[var(--c-bg)] p-1.5"
          style={{
            boxShadow:
              "0 50px 100px -20px rgba(50, 50, 93, 0.18), 0 30px 60px -30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="rounded-xl bg-surface">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <div className="ml-3 h-5 w-40 rounded-md bg-[var(--c-bg)]" />
            </div>

            {/* body */}
            <div className="grid grid-cols-12 gap-3 p-5">
              <div className="col-span-3 space-y-2">
                <div className="h-2.5 w-3/4 rounded bg-border" />
                <div className="h-2.5 w-2/3 rounded bg-border" />
                <div className="h-2.5 w-1/2 rounded bg-border" />
                <div className="mt-3 h-2.5 w-3/4 rounded bg-brand-violet/40" />
                <div className="h-2.5 w-2/3 rounded bg-border" />
              </div>
              <div className="col-span-9 space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <Stat from="#00C9A7" />
                  <Stat from="#5B4FE9" />
                  <Stat from="#7B6FF0" />
                </div>
                <div className="relative h-32 overflow-hidden rounded-lg bg-[var(--c-bg)] ring-1 ring-border">
                  <SparkChart />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-14 rounded-lg bg-[var(--c-bg)] ring-1 ring-border" />
                  <div className="h-14 rounded-lg bg-[var(--c-bg)] ring-1 ring-border" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

function Stat({ from }: { from: string }) {
  return (
    <div
      className="h-14 rounded-lg ring-1 ring-border"
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}33 0%, ${from}0a 100%)`,
      }}
    />
  );
}

function SparkChart() {
  return (
    <svg viewBox="0 0 300 120" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#5B4FE9" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#5B4FE9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sparkLine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#00C9A7" />
          <stop offset="100%" stopColor="#5B4FE9" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,90 C30,70 60,80 90,55 C120,30 150,70 180,50 C210,30 240,40 270,20 L300,15 L300,120 L0,120 Z"
        fill="url(#sparkFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.path
        d="M0,90 C30,70 60,80 90,55 C120,30 150,70 180,50 C210,30 240,40 270,20 L300,15"
        fill="none"
        stroke="url(#sparkLine)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
      />
    </svg>
  );
}
