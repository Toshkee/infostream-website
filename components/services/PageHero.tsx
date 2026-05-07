"use client";

import { motion } from "framer-motion";
import { GradientRibbon } from "@/components/ui/GradientRibbon";

export function PageHero({
  title,
  eyebrow,
  body,
}: {
  title: string;
  eyebrow?: string;
  body?: string;
  /** kept for backwards compat — no longer styles differently */
  variant?: "wwd" | "about";
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--c-bg)] pt-32 pb-20 lg:pt-40 lg:pb-24">
      <GradientRibbon height={420} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-heading"
        >
          {title}
        </motion.h1>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-body"
          >
            {body}
          </motion.p>
        )}
      </div>
    </section>
  );
}
