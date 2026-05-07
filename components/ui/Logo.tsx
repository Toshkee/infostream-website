export function Logo({
  variant = "color",
  size = "md",
  className = "",
}: {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const isWhite = variant === "white";
  const bar1 = isWhite ? "#FFFFFF" : "#00C9A7";
  const bar2 = isWhite ? "#FFFFFF" : "#1ABFA5";
  const bar3 = isWhite ? "#FFFFFF" : "#E8523A";

  const dims = {
    sm: { icon: 24, text: "text-lg", gap: "gap-2" },
    md: { icon: 36, text: "text-2xl", gap: "gap-2.5" },
    lg: { icon: 44, text: "text-3xl", gap: "gap-3" },
  }[size];

  return (
    <span className={`inline-flex items-center ${dims.gap} ${className}`}>
      <svg
        width={dims.icon}
        height={dims.icon}
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden
      >
        <rect x="2" y="8" width="3" height="12" rx="1" fill={bar1} />
        <rect x="7" y="4" width="3" height="20" rx="1" fill={bar2} />
        <rect x="12" y="10" width="3" height="8" rx="1" fill={bar3} />
        <rect x="17" y="6" width="3" height="16" rx="1" fill={bar1} />
        <rect x="22" y="9" width="3" height="10" rx="1" fill={bar2} />
      </svg>
      <span
        className={`${dims.text} font-semibold lowercase tracking-tight ${
          isWhite ? "text-white" : "text-heading"
        }`}
      >
        infostream
      </span>
    </span>
  );
}
