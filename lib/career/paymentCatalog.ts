import { BUNDLE_SECTIONS } from "@/lib/career/bundlesCatalog";
import { guideSalesContent } from "@/lib/career/guideSalesContent";

export type PaymentProduct = { name: string; amount: number };

const fixedProducts: PaymentProduct[] = [
  { name: "AI Risk Rankings India 2026", amount: 999 },
  { name: "Career Intelligence Report - Pro", amount: 999 },
  { name: "Career Intelligence Report - Pro Edition", amount: 999 },
  { name: "Why Expertise Becomes a Trap - SA Intelligence Report", amount: 499 },
  { name: "State of QA Careers India 2026 - Premium Report", amount: 799 },
  { name: "AI Futures 2026 - Premium Report", amount: 799 },
  { name: "AI Risk Rankings India 2026 - Top 25 High-Risk Careers Report", amount: 999 },
  { name: "AI Delivery Field Notes", amount: 499 },
  { name: "Career Positioning Audit - Service", amount: 999 },
  { name: "SA-AIRS Career Risk Audit", amount: 1999 },
];

const guideProducts = Object.values(guideSalesContent).map(({ productName }) => ({
  name: productName,
  amount: 499,
}));

const bundleProducts = BUNDLE_SECTIONS.flatMap(({ bundles }) =>
  bundles.map(({ name, price }) => ({ name, amount: price })),
);

const products = new Map(
  [...fixedProducts, ...guideProducts, ...bundleProducts].map(product => [product.name, product] as const),
);

export function getPaymentProduct(name: unknown): PaymentProduct | undefined {
  return typeof name === "string" ? products.get(name.trim()) : undefined;
}
