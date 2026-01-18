import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import { SectionTitle, SubTitle } from "@/components/ui/Typography";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function DiningPage() {
  return (
    <main>
      <PageHeader 
        title="Culinary Journey" 
        subtitle="Taste of Bali"
        image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974" // Gambar Fine Dining
      />

      <section className="py-24">
        <Container>
          {/* Restaurant 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
             <div className="relative h-[500px] rounded-sm overflow-hidden">
                 <Image 
                     src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
                     alt="The Cliff Restaurant"
                     fill
                     className="object-cover"
                 />
             </div>
             <div>
                 <SubTitle>Signature Restaurant</SubTitle>
                 <SectionTitle>The Cliff Edge</SectionTitle>
                 <p className="text-gray-600 font-light leading-relaxed mb-8">
                     Menawarkan pengalaman bersantap fine dining dengan pemandangan laut 180 derajat. Menu kami berfokus pada hidangan laut segar lokal yang diolah dengan teknik kuliner Eropa modern.
                 </p>
                 <Button variant="outline" className="text-[#1c1917] border-[#1c1917] hover:bg-[#1c1917] hover:text-white">
                    View Menu
                 </Button>
             </div>
          </div>

           {/* Restaurant 2 (Reverse Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                 <SubTitle>Casual Dining & Bar</SubTitle>
                 <SectionTitle>Sunset Cabana</SectionTitle>
                 <p className="text-gray-600 font-light leading-relaxed mb-8">
                     Tempat sempurna untuk menikmati koktail tropis dan hidangan ringan sambil menyaksikan matahari terbenam. Suasana santai di tepi kolam renang utama.
                 </p>
                  <Button variant="outline" className="text-[#1c1917] border-[#1c1917] hover:bg-[#1c1917] hover:text-white">
                    View Menu
                 </Button>
             </div>
            {/* GANTI BAGIAN SUNSET CABANA DENGAN INI */}
<div className="relative h-[500px] rounded-sm overflow-hidden order-1 lg:order-2 shadow-xl">
    <Image 
        // Saya ganti ke URL gambar lain yang servernya lebih stabil
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7wUxoITPUfT1KyYCShLRdkkw0kzqpFhLHQ&s" 
        alt="Sunset Cabana Bar Atmosphere"
        fill
        className="object-cover hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Tambahkan ini agar browser lebih pintar load gambarnya
        priority // Tambahkan ini supaya diprioritaskan load-nya
    />
</div>
          </div>
        </Container>
      </section>
    </main>
  );
}