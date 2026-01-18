import { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// SECTION TITLE (Judul Besar per halaman)
export function SectionTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#1c1917] mb-6",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

// SUBTITLE (Teks kecil di atas judul)
export function SubTitle({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-4",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}