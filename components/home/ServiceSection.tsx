"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ServiceSection({
  title,
  body,
  href,
  readMoreLabel,
  imageRight,
  illustration,
  index,
  buildLabel,
  operateLabel,
}: {
  title: string;
  body: string;
  href: string;
  readMoreLabel: string;
  imageRight: boolean;
  illustration: React.ReactNode;
  index?: number;
  buildLabel: string;
  operateLabel: string;
}) {
  const fromX = imageRight ? -40 : 40;
  const isAlt = (index ?? 0) % 2 === 1;

  return (
    <section className={`${isAlt ? "bg-surface" : "bg-[var(--c-bg)]"} py-14 sm:py-20 lg:py-24`}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -fromX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={imageRight ? "md:order-1" : "md:order-2"}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            {String((index ?? 0) + 1).padStart(2, "0")} —{" "}
            {imageRight ? buildLabel : operateLabel}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">{body}</p>
          <Link
            href={href}
            className="group mt-7 inline-flex items-center gap-1.5 text-base font-semibold text-brand-violet hover:text-brand-violet-light"
          >
            {readMoreLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: fromX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${imageRight ? "md:order-2" : "md:order-1"} flex justify-center`}
        >
          {illustration}
        </motion.div>
      </div>
    </section>
  );
}
