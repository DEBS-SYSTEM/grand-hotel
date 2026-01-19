"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Menu, X } from "lucide-react"; // Pastikan install: npm install lucide-react

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk Mobile Menu

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu Link Items
  const navLinks = [
    { name: "Rooms", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "Wellness", href: "/spa" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent",
          scrolled || isOpen
            ? "bg-white py-4 text-[#1c1917] shadow-sm"
            : "bg-transparent py-6 text-white border-white/10"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative z-50">
            <span className={cn("font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-widest transition-colors uppercase", isOpen ? "text-[#1c1917]" : "")}>
              Elysium Estate
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            {navLinks.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-[#D4AF37] transition-colors">
                {item.name}
              </Link>
            ))}
            <Button variant={scrolled ? "primary" : "outline"} size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={cn("md:hidden z-50 p-2 transition-colors", isOpen ? "text-[#1c1917]" : "text-current")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Container>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {/* Menggunakan fixed inset-0 untuk full screen menu */}
      <div className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden",
          isOpen ? "translate-y-0" : "-translate-y-full" // Animasi Slide Down
      )}>
         <div className="flex flex-col gap-8 text-center">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)} // Tutup menu saat diklik
                className="font-[family-name:var(--font-playfair)] text-3xl text-[#1c1917] hover:text-[#D4AF37] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-8">
              <Button onClick={() => setIsOpen(false)}>Check Availability</Button>
            </div>
         </div>
      </div>
    </>
  );
}