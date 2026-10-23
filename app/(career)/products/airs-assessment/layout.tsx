import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SA-AIRS Career Risk Audit | Think Sriram",
  description:
    "A structured Rs 1,999 career-risk assessment covering role exposure, market pressure, defensibility, and practical next moves.",
  alternates: { canonical: "/products/airs-assessment" },
};

export default function AirsAssessmentLayout({ children }: { children: ReactNode }) {
  return children;
}
