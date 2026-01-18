import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/Typography";
import Image from "next/image"; // <--- Kita Import lagi Image Next.js

const TREATMENTS = [
  {
    title: "Balinese Massage",
    desc: "Pijat tradisional menggunakan minyak esensial untuk melancarkan aliran darah.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000"
  },
  {
    title: "Aromatherapy",
    desc: "Terapi penciuman menggunakan bunga dan rempah alami Bali.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000"
  },
  {
    title: "Facial Treatment",
    desc: "Perawatan wajah organik untuk kulit yang bercahaya dan sehat.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000"
  }
];

export default function SpaPage() {
  return (
    <main>
      <PageHeader 
        title="Wellness & Spa" 
        subtitle="Rejuvenate Your Soul"
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000"
      />

      <section className="py-24 text-center">
          <Container className="max-w-4xl">
               <SectionTitle>Holistic Healing</SectionTitle>
               <p className="text-gray-600 font-light leading-relaxed text-lg mb-16">
                   Terinspirasi dari tradisi penyembuhan Bali kuno, spa kami menawarkan tempat perlindungan untuk memulihkan keseimbangan tubuh dan pikiran.
               </p>
          </Container>
          
          <Container>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TREATMENTS.map((item, index) => (
                      <div key={index} className="bg-[#fafaf9] p-8 rounded-sm hover:shadow-lg transition-shadow">
                          
                          {/* CONTAINER GAMBAR HARUS RELATIVE */}
                          <div className="relative h-64 mb-6 overflow-hidden rounded-sm w-full">
                             
                             {/* KOMPONEN NEXT IMAGE YANG BENAR */}
                             <Image 
                                src={item.image} 
                                alt={item.title}
                                fill // <--- INI SOLUSI ERROR "MISSING WIDTH"
                                className="object-cover hover:scale-110 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 33vw" // Ini agar performa bagus
                                unoptimized={true} // <--- INI AGAR GAMBAR PASTI MUNCUL (Bypass Config)
                             />
                             
                          </div>

                          <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">{item.title}</h3>
                          <p className="text-sm text-gray-500 mb-4">60 Mins / 90 Mins</p>
                          <p className="text-gray-600 font-light text-sm">
                              {item.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </Container>
      </section>
    </main>
  );
}