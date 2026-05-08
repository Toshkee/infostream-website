"use client";

import { motion } from "framer-motion";

type Item = { title: string; body: string };

const ACCENTS: Record<string, { from: string; to: string; chip: string }> = {
  ".NET": { from: "#512BD4", to: "#7B6FF0", chip: "#512BD4" },
  Oracle: { from: "#F80000", to: "#FF6A4D", chip: "#F80000" },
  DevOps: { from: "#00C9A7", to: "#00BFFF", chip: "#00BFFF" },
  Microservices: { from: "#5B4FE9", to: "#00C9A7", chip: "#5B4FE9" },
};

const FALLBACK = { from: "#5B4FE9", to: "#7B6FF0", chip: "#5B4FE9" };

export function TechStack({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((it, i) => {
        const a = ACCENTS[it.title] ?? FALLBACK;
        return (
          <motion.article
            key={it.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
              style={{
                background: `radial-gradient(circle, ${a.from} 0%, transparent 70%)`,
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: a.chip }}
                />
                <h3
                  className="text-2xl font-semibold tracking-tight"
                  style={{
                    backgroundImage: `linear-gradient(95deg, ${a.from}, ${a.to})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {it.title}
                </h3>
              </div>

              <p className="mt-4 text-base leading-relaxed text-body">
                {it.body}
              </p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
