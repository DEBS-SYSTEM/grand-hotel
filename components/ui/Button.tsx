import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base Styles: Font sans, Uppercase, Tracking lebar, Transisi halus
          "inline-flex items-center justify-center font-sans font-bold uppercase tracking-[0.15em] transition-all duration-300 disabled:opacity-50",
          // Variants
          variant === "primary" && "bg-[#D4AF37] text-white hover:bg-[#c4a02e]",
          variant === "outline" && "border border-white text-white hover:bg-white hover:text-[#1c1917]",
          variant === "ghost" && "bg-transparent text-[#1c1917] hover:text-[#D4AF37]",
          // Sizes
          size === "sm" && "h-10 px-6 text-xs",
          size === "md" && "h-12 px-8 text-sm", // Standard Hotel Button
          size === "lg" && "h-14 px-10 text-base",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;