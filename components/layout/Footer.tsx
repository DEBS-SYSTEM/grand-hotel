import Link from "next/link";
import Container from "@/components/ui/Container";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0a09] text-white border-t border-[#D4AF37]/30">
      
      {/* 1. NEWSLETTER SECTION (Highlight) */}
      <div className="border-b border-white/10">
        <Container className="py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl mb-2">
                Join Our Newsletter
              </h3>
              <p className="text-white/60 font-light text-sm tracking-wide">
                Dapatkan penawaran eksklusif dan inspirasi liburan langsung ke inbox Anda.
              </p>
            </div>
            
            {/* Custom Input Form for Footer */}
            <div className="w-full max-w-md flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 px-6 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors font-light"
              />
              <button className="bg-[#D4AF37] hover:bg-[#b5952f] text-white px-8 py-3 uppercase tracking-widest text-xs font-bold transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-widest block">
                GRAND NUSA
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">
                Bali Resort
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Rasakan ketenangan sejati di mana kemewahan bertemu dengan keindahan alam Bali yang memukau.
            </p>
            <div className="flex gap-4 pt-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all duration-300 group">
                  <Icon className="w-4 h-4 text-white/60 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE LINKS */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-xl mb-6 text-[#D4AF37]">Explore</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              {['Accommodations', 'Dining & Bar', 'Spa & Wellness', 'Weddings', 'Experiences'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white flex items-center gap-2 group transition-colors">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300">
                      <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-xl mb-6 text-[#D4AF37]">Contact</h4>
            <ul className="space-y-6 text-sm font-light text-white/70">
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Jl. Raya Nusa Dua Selatan, Lot III, Sawangan, Nusa Dua, Bali, 80363</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>+62 361 771 000</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>reservations@grandnusa.com</span>
              </li>
            </ul>
          </div>

          {/* AWARDS / BADGE */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-xl mb-6 text-[#D4AF37]">Recognition</h4>
            <div className="grid grid-cols-2 gap-4">
               {/* Dummy Awards Badges */}
               <div className="border border-white/10 p-4 text-center">
                  <span className="block font-serif text-2xl text-[#D4AF37] mb-1">9.8</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/50">Booking.com</span>
               </div>
               <div className="border border-white/10 p-4 text-center">
                  <span className="block font-serif text-2xl text-[#D4AF37] mb-1">5*</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/50">TripAdvisor</span>
               </div>
            </div>
          </div>

        </div>
      </Container>

      {/* 3. COPYRIGHT BAR */}
      <div className="bg-black py-6 border-t border-white/5">
        <Container className="flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-widest font-light gap-4">
          <p>© 2026 Grand Nusa Bali. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </Container>
      </div>

    </footer>
  );
}