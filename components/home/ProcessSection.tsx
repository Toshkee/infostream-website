"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Hammer, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = { title: string; body: string };

const ICONS: LucideIcon[] = [Compass, PenTool, Hammer, LineChart];

export function ProcessSection({
  eyebrow,
  title,
  titleAccent,
  steps,
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  steps: Step[];
}) {
  return (
    <section className="relative overflow-hidden bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            {eyebrow}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            {title} <span className="text-gradient-brand">{titleAccent}</span>
          </h2>
        </div>

        <div className="relative mt-20">
          {/* connector line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent md:block"
          />

          <ol className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = ICONS[i] ?? Compass;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--c-bg)] text-brand-violet shadow-card ring-1 ring-border">
                    <Icon className="h-7 w-7" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-heading text-[11px] font-semibold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-heading">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {s.body}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
