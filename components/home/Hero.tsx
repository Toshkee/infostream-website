"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { GradientRibbon } from "@/components/ui/GradientRibbon";
import { EASE } from "@/lib/motion";

type Slide = {
  title: string;
  tagOne: string;
  tagTwo?: string;
  body: string;
  variant: "single" | "bitdefender" | "devices";
};

export function Hero({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[index];
  const parts = slide.title.trim().split(" ");
  const lastWord = parts.pop() ?? "";
  const head = parts.join(" ");

  return (
    <section className="relative overflow-hidden bg-[var(--c-bg)] pt-20 pb-16 sm:pb-24 lg:pt-24 lg:pb-40">
      <GradientRibbon height={620} />

      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:-translate-y-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--hero-fg-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
              {slide.tagOne}
              {slide.tagTwo ? ` · ${slide.tagTwo}` : ""}
            </p>

            <h1 className="text-[clamp(2rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[color:var(--hero-fg)]">
              {head}{" "}
              <span className="text-gradient-brand">{lastWord}</span>
              <span className="text-brand-teal">.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--hero-fg-soft)] sm:text-xl sm:mt-8">
              {slide.body}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="relative h-[260px] sm:h-[360px] lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`media-mobile-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="absolute inset-0 flex items-end justify-center"
            >
              <SlideMedia variant={slide.variant} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative hidden lg:block h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`media-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="absolute inset-0 flex items-end justify-center"
            >
              <motion.div
                className="relative w-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -14, scale: 1.01 }}
              >
                <SlideMedia variant={slide.variant} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3 sm:right-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-[color:var(--hero-fg)] scale-125"
                  : "bg-[color:var(--hero-fg-muted)] opacity-50 hover:opacity-80"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function SlideMedia({ variant }: { variant: Slide["variant"] }) {
  if (variant === "bitdefender") {
    return (
      <Image
        src="/images/Bitdef.jpg"
        alt="Bitdefender protection"
        width={1160}
        height={950}
        priority
        className="mx-auto h-[480px] w-auto max-w-full translate-y-8 object-contain"
      />
    );
  }

  if (variant === "devices") {
    return (
      <div className="relative flex items-end justify-center gap-4 -translate-y-10">
        <Image
          src="/images/laptop.jpg"
          alt="Laptop mockup"
          width={900}
          height={600}
          className="h-auto w-[78%]"
        />
        <Image
          src="/images/iphone.jpg"
          alt="iPhone mockup"
          width={260}
          height={520}
          className="absolute -bottom-2 right-0 h-auto w-[26%]"
        />
      </div>
    );
  }

  return (
    <Image
      src="/images/pic0.jpg"
      alt="Infostream dashboard application mockup"
      width={1160}
      height={950}
      priority
      className="mx-auto h-[480px] w-auto max-w-full translate-y-8 object-contain"
    />
  );
}
