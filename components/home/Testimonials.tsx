"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: [string, string];
};

export function Testimonials({
  title,
  titleAccent,
  items,
}: {
  title: string;
  titleAccent: string;
  items: Testimonial[];
}) {
  return (
    <section className="relative bg-[var(--c-bg)] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            Testimonials
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            {title} <span className="text-gradient-brand">{titleAccent}</span>
          </h2>
        </div>

        <ul className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-2xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <Quote className="h-7 w-7 text-brand-violet/30" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-body">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-heading"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${t.accent[0]} 0%, ${t.accent[1]} 100%)`,
                  }}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-heading">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
