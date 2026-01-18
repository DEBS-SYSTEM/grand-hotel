import Container from "@/components/ui/Container";
import { SectionTitle, SubTitle } from "@/components/ui/Typography";
import { Utensils, Waves, Flower2, Wine, Wifi, Car } from "lucide-react"; // Icon Library

const FACILITIES = [
    { icon: Waves, title: "Infinity Pool", desc: "Menghadap langsung ke samudra." },
    { icon: Utensils, title: "Fine Dining", desc: "Cita rasa lokal & internasional." },
    { icon: Flower2, title: "Royal Spa", desc: "Peremajaan tubuh dan jiwa." },
    { icon: Wine, title: "Sunset Bar", desc: "Cocktail signature di tepi tebing." },
    { icon: Wifi, title: "High-Speed Wifi", desc: "Koneksi cepat di seluruh area." },
    { icon: Car, title: "Private Transfer", desc: "Layanan antar-jemput bandara." },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
            <SubTitle>Our Facilities</SubTitle>
            <SectionTitle>World Class Amenities</SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {FACILITIES.map((item, idx) => (
                <div key={idx} className="flex gap-6 group cursor-pointer">
                    <div className="w-12 h-12 shrink-0 bg-[#fafaf9] flex items-center justify-center rounded-full group-hover:bg-[#D4AF37] transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-[#1c1917] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <h4 className="font-[family-name:var(--font-playfair)] text-xl mb-2 group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </Container>
    </section>
  );
}