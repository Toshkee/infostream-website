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

export function ServiceIllustration({ serviceKey }: { serviceKey: ServiceKey }) {
  const [a, b, c] = palettes[serviceKey];
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
      <div className="absolute inset-0 grid grid-cols-3 gap-3 p-6">
        <div className="col-span-2 rounded-xl bg-white/40 backdrop-blur-sm ring-1 ring-white/30" />
        <div className="rounded-xl bg-white/30 backdrop-blur-sm ring-1 ring-white/20" />
        <div className="rounded-xl bg-white/30 backdrop-blur-sm ring-1 ring-white/20" />
        <div className="rounded-xl bg-white/40 backdrop-blur-sm ring-1 ring-white/30" />
        <div className="rounded-xl bg-white/30 backdrop-blur-sm ring-1 ring-white/20" />
      </div>
    </div>
  );
}
