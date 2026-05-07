import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-teal">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
