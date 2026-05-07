export type ServiceKey =
  | "financialSoftware"
  | "registers"
  | "digitalTransformation"
  | "itInfrastructure"
  | "consulting"
  | "cybersecurity"
  | "paymentSystems";

export const SERVICE_SLUGS: Record<ServiceKey, string> = {
  financialSoftware: "financial-software",
  registers: "registers",
  digitalTransformation: "digital-transformation",
  itInfrastructure: "it-infrastructure",
  consulting: "consulting",
  cybersecurity: "cybersecurity",
  paymentSystems: "payment-systems",
};

export const SERVICES_ORDER: ServiceKey[] = [
  "financialSoftware",
  "registers",
  "digitalTransformation",
  "itInfrastructure",
  "consulting",
  "cybersecurity",
];

export const slugToKey = (slug: string): ServiceKey | null => {
  const entry = (Object.entries(SERVICE_SLUGS) as [ServiceKey, string][]).find(
    ([, s]) => s === slug,
  );
  return entry ? entry[0] : null;
};
