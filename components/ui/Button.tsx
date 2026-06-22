import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",
  secondary: "bg-secondary text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20",
  ghost: "border border-slate-200 bg-white text-ink hover:border-primary hover:text-primary"
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
