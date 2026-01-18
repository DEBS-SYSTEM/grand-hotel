import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            // Style: No border top/left/right, only Bottom. Transparent BG.
            "w-full bg-transparent border-b border-gray-300 py-3 text-[#1c1917] placeholder:text-gray-400 focus:border-[#D4AF37] focus:outline-none transition-colors",
            "font-serif text-lg", // Font Serif agar input user terlihat elegan
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;