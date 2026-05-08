"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ServiceIllustration } from "@/components/services/ServiceIllustration";
import type { ServiceKey } from "@/lib/services";

export function ServiceRow({
  serviceKey,
  title,
  body,
  href,
  readMoreLabel,
  projectsLabel,
  projects,
  imageRight,
  index,
}: {
  serviceKey: ServiceKey;
  title: string;
  body: string;
  href: string;
  readMoreLabel: string;
  projectsLabel: string;
  projects: string[];
  imageRight: boolean;
  index: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 py-14 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-28"
    >
      <div className={`flex justify-center ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
        <ServiceIllustration serviceKey={serviceKey} priority={index === 0} />
      </div>

      <div className={imageRight ? "lg:order-2" : "lg:order-1"}>
        <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-body">{body}</p>

        {projects.length > 0 && (
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
              {projectsLabel}
            </p>
            <ul className="mt-3 divide-y divide-border rounded-2xl border border-border bg-surface">
              {projects.map((p) => (
                <ProjectItem key={p} label={p} />
              ))}
            </ul>
          </div>
        )}

        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-teal-dark"
        >
          {readMoreLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.section>
  );
}

function ProjectItem({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-heading transition-colors hover:bg-[color:var(--c-surface-muted,rgba(0,0,0,0.02))]"
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-body transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
    </li>
  );
}
