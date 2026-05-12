"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

type Item = { title: string; body: string };

const TECH_META: Record<string, { image: string; accent: string }> = {
  ".NET":          { image: "/images/dotnet.jpg",  accent: "#512BD4" },
  Oracle:          { image: "/images/oracle.jpg",  accent: "#F80000" },
  DevOps:          { image: "/images/devops.jpg",  accent: "#00C9A7" },
  Microservices:   { image: "/images/ms.jpg",      accent: "#5B4FE9" },
};

const FALLBACK_ACCENT = "#5B4FE9";

export function TechStack({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => {
        const meta = TECH_META[item.title];
        const accent = meta?.accent ?? FALLBACK_ACCENT;
        const imageRight = i % 2 === 0;

        return (
          <div
            key={item.title}
            className={`py-14 sm:py-20 ${i % 2 === 1 ? "bg-surface" : "bg-[var(--c-bg)]"}`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14">

              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, x: imageRight ? -36 : 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: EASE }}
                className={imageRight ? "md:order-1" : "md:order-2"}
              >
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: accent }}
                >
                  {String(i + 1).padStart(2, "0")} — Technology
                </p>
                <h2
                  className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
                  style={{
                    backgroundImage: `linear-gradient(95deg, ${accent} 0%, #7B6FF0 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {item.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-body">
                  {item.body}
                </p>
              </motion.div>

              {/* Image side */}
              {meta && (
                <motion.div
                  initial={{ opacity: 0, x: imageRight ? 36 : -36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                  className={imageRight ? "md:order-2" : "md:order-1"}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative overflow-hidden rounded-2xl"
                  >
                    {/* Glow behind image */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                      style={{
                        background: `radial-gradient(ellipse at center, ${accent} 0%, transparent 70%)`,
                      }}
                    />
                    <Image
                      src={meta.image}
                      alt={item.title}
                      width={600}
                      height={420}
                      sizes="(min-width: 768px) 45vw, 90vw"
                      className="relative h-auto w-full object-contain"
                    />
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
