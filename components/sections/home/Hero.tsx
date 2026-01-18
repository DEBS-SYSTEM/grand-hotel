import Image from "next/image";
import Link from "next/link"; // <--- Jangan lupa import ini
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070" // Dummy Unsplash
          alt="Grand Nusa Pool"
          fill
          className="object-cover brightness-75" // Gelapkan sedikit
          priority
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white mt-20">
        <p className="animate-fade-in-up text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6 text-[#D4AF37]">
          Welcome to Paradise
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl mb-8 leading-none">
          The Ultimate <br /> Sanctuary
        </h1>
        
        {/* BUTTON ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          
          {/* Tombol Explore Suites -> lari ke /rooms */}
          <Link href="/rooms">
            <Button size="lg" variant="primary">Explore Suites</Button>
          </Link>

          {/* Tombol View Gallery -> lari ke /gallery */}
          <Link href="/gallery">
            <Button size="lg" variant="outline">View Gallery</Button>
          </Link>
          
        </div>
      </Container>
    </section>
  );
}