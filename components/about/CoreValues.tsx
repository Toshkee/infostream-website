"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb } from "lucide-react";

type Value = { title: string; body: string };

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
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
          {title}{" "}
          <span className="text-gradient-brand">{titleAccent}</span>
        </h2>

        <div className="relative mt-14 sm:mt-20">
          {/* vertical line — desktop only */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-teal/40 via-brand-violet/40 to-brand-violet-light/40 md:block" />

          <ul className="space-y-8 sm:space-y-14">
            {values.map((v, i) => {
              const left = i % 2 === 0;
              const Icon = i === 0 ? Lightbulb : CheckCircle2;
              return (
                <motion.li
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:gap-6"
                >
                  {/* icon — top on mobile, centred col on desktop */}
                  <div className="flex items-center gap-4 md:hidden">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--c-bg)] text-brand-violet shadow-card ring-1 ring-border">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-heading">{v.title}</h3>
                  </div>
                  <p className="pl-16 text-body md:hidden">{v.body}</p>

                  {/* desktop layout */}
                  <div
                    className={`hidden md:block ${
                      left ? "md:order-1 md:pr-16 md:text-right" : "md:order-3 md:pl-16"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-heading">{v.title}</h3>
                    <p className="mt-2 text-body">{v.body}</p>
                  </div>

                  <div className="hidden md:order-2 md:flex md:justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--c-bg)] text-brand-violet shadow-card ring-1 ring-border">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className={`${left ? "md:order-3" : "md:order-1"} hidden md:block`} />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
