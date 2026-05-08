import Image from "next/image";

export function Logo({
  variant = "color",
  size = "md",
  className = "",
}: {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const height = { sm: 22, md: 30, lg: 40 }[size];
  // Original aspect ratio of public/images/infostream.jpg is ~5.6:1
  const width = Math.round(height * 5.6);

  return (
    <Image
      src="/images/infostream.jpg"
      alt="infostream"
      width={width}
      height={height}
      priority
      className={`${className} ${variant === "white" ? "brightness-0 invert" : ""}`}
      style={{ height: `${height}px`, width: `${width}px` }}
    />
  );
}
