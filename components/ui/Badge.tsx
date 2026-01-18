import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "gold" | "dark" | "light";
}

export default function Badge({ className, variant = "gold", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-widest",
        variant === "gold" && "bg-[#D4AF37]/10 text-[#D4AF37]",
        variant === "dark" && "bg-[#1c1917] text-white",
        variant === "light" && "bg-white/90 text-[#1c1917] backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}