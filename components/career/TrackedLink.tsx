"use client";

import Link from "next/link";
import { track } from "@/lib/career/analytics";
import type { CSSProperties, ReactNode } from "react";

type TrackedLinkProps = {
  href: string;
  eventName: string;
  eventProperties?: Record<string, string | number | boolean | null>;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
};

export default function TrackedLink({
  href,
  eventName,
  eventProperties,
  children,
  className,
  style,
  ariaLabel,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={() => track(eventName, { href, ...eventProperties })}
    >
      {children}
    </Link>
  );
}
