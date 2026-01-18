import Image from "next/image";
import Container from "@/components/ui/Container";
import { SectionTitle, SubTitle } from "@/components/ui/Typography";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#fafaf9]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <SubTitle>The Story</SubTitle>
            <SectionTitle>Experience Balinese <br/> Elegance</SectionTitle>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
              <p>
                Terletak di tebing dramatis Nusa Dua, Grand Nusa adalah perpaduan sempurna antara kemewahan modern dan warisan budaya Bali yang tak lekang oleh waktu.
              </p>
              <p>
                Setiap sudut resor kami dirancang untuk menghadirkan ketenangan. Dari suara deburan ombak Samudra Hindia hingga aroma bunga Frangipani di taman tropis kami, nikmati pelarian yang sesungguhnya dari hiruk pikuk dunia.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                    <h4 className="font-[family-name:var(--font-playfair)] text-4xl text-[#D4AF37]">5*</h4>
                    <p className="text-xs uppercase tracking-widest mt-2">Luxury Resort</p>
                </div>
                <div>
                    <h4 className="font-[family-name:var(--font-playfair)] text-4xl text-[#D4AF37]">12</h4>
                    <p className="text-xs uppercase tracking-widest mt-2">Awards Won</p>
                </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
             <div className="relative h-[400px] mt-12 rounded-sm overflow-hidden">
                <Image 
                    src="https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000" 
                    alt="Bali Interior" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
             <div className="relative h-[400px] -mt-12 rounded-sm overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070"
                    alt="Luxury Infinity Pool at Dusk"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
          </div>

        </div>
      </Container>
    </section>
  );
}