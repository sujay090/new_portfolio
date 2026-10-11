import React from "react";
import { ArrowUpRight } from "lucide-react";
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-[13px] text-[9px] uppercase tracking-[.2em] text-[#49a8ff]">
      {children}
    </p>
  );
}
export function Button({
  children,
  href = "#contact",
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
}) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded px-4 py-3 text-[11px] font-bold transition ${variant === "primary" ? "bg-[#42adf4] text-[#171205] hover:bg-[#4aa5f6]" : "border border-[rgba(181,206,203,.13)]"}`}
      href={href}
    >
      {children}
      {variant === "primary" ? <ArrowUpRight size={16} /> : null}
    </a>
  );
}
