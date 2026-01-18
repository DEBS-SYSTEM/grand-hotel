import Image from "next/image";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Dark & Image */}
        <div className="absolute inset-0 z-0">
             <Image 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070" // Gambar Spa/Relax
                alt="Relax"
                fill
                className="object-cover brightness-50"
             />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl text-white mb-6">
                Ready to experience paradise?
            </h2>
            <p className="text-gray-200 text-lg mb-10 font-light">
                Dapatkan penawaran eksklusif diskon 20% untuk pemesanan langsung melalui website kami.
            </p>
            <Button size="lg" className="bg-white text-[#1c1917] hover:bg-[#D4AF37] hover:text-white">
                Book Your Stay Now
            </Button>
        </div>
    </section>
  );
}