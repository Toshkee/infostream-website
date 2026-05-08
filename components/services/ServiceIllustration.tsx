import Image from "next/image";
import type { ServiceKey } from "@/lib/services";

const palettes: Record<ServiceKey, [string, string, string]> = {
  financialSoftware: ["#A8FFE7", "#C7BBFF", "#FFB7D5"],
  registers: ["#C7E8FF", "#C7BBFF", "#A8FFE7"],
  digitalTransformation: ["#C7BBFF", "#A8FFE7", "#FFD89B"],
  itInfrastructure: ["#A8FFE7", "#C7E8FF", "#C7BBFF"],
  consulting: ["#C7BBFF", "#FFB7D5", "#FFD89B"],
  cybersecurity: ["#0A2540", "#5B4FE9", "#A8FFE7"],
  paymentSystems: ["#A8FFE7", "#5B4FE9", "#FFB7D5"],
};

const images: Record<ServiceKey, { src: string; alt: string }> = {
  financialSoftware: { src: "/images/pic2.jpg", alt: "Financial software development illustration" },
  registers: { src: "/images/pic3.jpg", alt: "Registers illustration" },
  digitalTransformation: { src: "/images/pic4.jpg", alt: "Digital transformation illustration" },
  itInfrastructure: { src: "/images/pic5.jpg", alt: "IT infrastructure illustration" },
  consulting: { src: "/images/pic6.jpg", alt: "Consulting illustration" },
  cybersecurity: { src: "/images/pic7.jpg", alt: "Cybersecurity illustration" },
  paymentSystems: { src: "/images/pic2.jpg", alt: "Payment systems illustration" },
};

export function ServiceIllustration({ serviceKey, priority }: { serviceKey: ServiceKey; priority?: boolean }) {
  const [a, b, c] = palettes[serviceKey];
  const { src, alt } = images[serviceKey];
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border"
      style={{
        boxShadow:
          "0 30px 60px -20px rgba(50, 50, 93, 0.18), 0 18px 36px -18px rgba(0, 0, 0, 0.18)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${a} 0%, ${b} 50%, ${c} 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.6) 0%, transparent 50%)",
        }}
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="relative z-10 object-contain p-8"
        priority={priority}
      />
    </div>
  );
}
