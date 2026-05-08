"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GradientRibbon } from "@/components/ui/GradientRibbon";

export function PageHero({
  title,
  eyebrow,
  body,
  image,
  imageRotate = 0,
}: {
  title: string;
  eyebrow?: string;
  body?: string;
  /** kept for backwards compat — no longer styles differently */
  variant?: "wwd" | "about";
  image?: { src: string; alt: string };
  imageRotate?: number;
}) {
  const hasImage = !!image;

  return (
    <section className="relative overflow-hidden bg-[var(--c-bg)] pt-20 pb-16 sm:pb-24 lg:pt-24 lg:pb-40 min-h-[480px] sm:min-h-[560px] lg:min-h-[760px]">
      <GradientRibbon height={620} />

      <div
        className={
          hasImage
            ? "relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-12"
            : "relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center"
        }
      >
        <div className={hasImage ? "" : ""}>
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--hero-fg-muted)]"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[color:var(--hero-fg)]"
          >
            {title}
          </motion.h1>
          {body && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={
                hasImage
                  ? "mt-6 max-w-xl text-xl leading-relaxed text-[color:var(--hero-fg-soft)]"
                  : "mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[color:var(--hero-fg-soft)]"
              }
            >
              {body}
            </motion.p>
          )}
        </div>

        {hasImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -14, scale: 1.01 }}
              className="overflow-hidden rounded-[2rem]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={860}
                height={500}
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="h-auto w-full"
                style={{ transform: `scale(1.01)${imageRotate ? ` rotate(${imageRotate}deg)` : ""}` }}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
