"use client";

import { motion } from "framer-motion";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Lightbulb, Star, Shield, Zap } from "lucide-react";

type Value = { title: string; body: string };

const ICONS = [Lightbulb, Star, Shield, Zap];

export function CoreValues({
  title,
  titleAccent,
  values,
}: {
  title: string;
  titleAccent: string;
  values: Value[];
}) {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
          {title}{" "}
          <span className="text-gradient-brand">{titleAccent}</span>
        </h2>

        {/* mobile: vertical list */}
        <ul className="mt-12 space-y-6 md:hidden">
          {values.map((v, i) => {
            const Icon = ICONS[i] ?? Lightbulb;
            return (
              <motion.li
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-violet/10 text-brand-violet ring-1 ring-brand-violet/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading">{v.title}</h3>
                  <p className="mt-1 text-sm text-body">{v.body}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>

        {/* desktop: horizontal steps */}
        <div className="relative mt-16 hidden md:block">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-brand-teal/40 via-brand-violet/40 to-brand-violet/20"
            style={{ left: "calc(12.5%)", right: "calc(12.5%)" }}
          />

          <ul className="grid grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = ICONS[i] ?? Lightbulb;
              return (
                <motion.li
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--c-bg)] text-brand-violet shadow-card ring-1 ring-border">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-heading leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-body leading-relaxed">{v.body}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
