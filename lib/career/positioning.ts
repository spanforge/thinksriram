import copy from "@/content/career/site-v21.json";
export { copy };
export const siteIdentity = {
  name: "Sriram Advisory", founder: "Sriram Srinivasan", email: "sriram@sriramadvisory.com",
  origin: "https://thinksriram.com", tagline: "Product and market advisory.",
  description: "Helping you assess product ideas, market demand, distribution and adoption. Work directly with Sriram on your next product decision.",
  // Existing portrait reuse approved by owner on 11 October 2026; null enables text-only fallback.
  portrait: "/sriram.png" as string | null,
  linkedin: "https://www.linkedin.com/in/sriramadvisory/",
};
export const interestLabels = {
  idea: "Idea", market: "Market", distribution: "Distribution", adoption: "Adoption", unsure: "Unsure",
  general: "A business or technology challenge", sprint: "Problem-Solving Sprint",
  implementation: "Implementation support", workshop: "Team workshop",
  "health-check": "Delivery Health Check", career: "Career question",
} as const;
export type Interest = keyof typeof interestLabels;
export const services = copy.services;
export const healthCheckEnabled = true;
export function isInterest(value: unknown): value is Interest {
  return typeof value === "string" && Object.hasOwn(interestLabels, value);
}
export function enabledInterests(): Interest[] {
  return (Object.keys(interestLabels) as Interest[]).filter(interest => {
    if (interest === "health-check") return healthCheckEnabled;
    const service = services.find(item => item.interest === interest);
    return !service || service.enabled;
  });
}
export const navigation = [
  { label: "How I Help", href: "/contact" },
  { label: "Products", href: "/products" },
  { label: "Research & Insights", href: "/writing" }, { label: "About", href: "/about" },
  { label: "Request a Review", href: "/contact" },
];
export function enquiryHref(interest: Interest) { return `/contact?interest=${interest}`; }



