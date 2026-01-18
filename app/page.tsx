import Hero from "@/components/sections/home/Hero"
import BookingBar from "@/components/sections/home/BookingBar"
import RoomCard from "@/components/sections/home/RoomCard"
import AboutSection from "@/components/sections/home/AboutSection"
import Facilities from "@/components/sections/home/Facilities"; 
import CTA from "@/components/sections/home/CTA"
import Container from "@/components/ui/Container";
import { SectionTitle, SubTitle } from "@/components/ui/Typography";

const FEATURED_ROOMS = [
  {
    id: 1,
    name: "Oceanfront Cliff Suite",
    price: "IDR 3.500.000",
    slug: "ocean-suite",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",
    description: "Nikmati pemandangan Samudra Hindia langsung dari balkon pribadi Anda. Dilengkapi dengan private jacuzzi.",
  },
  {
    id: 2,
    name: "Sanctuary Jungle Villa",
    price: "IDR 5.200.000",
    slug: "jungle-villa",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
    description: "Vila tersembunyi di tengah rimbunnya hutan Ubud. Privasi total dengan kolam renang infinity pribadi.",
  },
  {
    id: 3,
    name: "The Royal Residence",
    price: "IDR 12.000.000",
    slug: "royal-residence",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070",
    description: "Kemewahan tertinggi untuk keluarga. Dua kamar tidur luas dengan ruang tamu terpisah dan akses langsung ke pantai.",
  },
];

export default function Home() {
  return (
    <main>
      
      {/* 1. HERO (Full Screen) */}
      <Hero />

      {/* 2. BOOKING BAR (Floating) */}
      <BookingBar />

      {/* 3. ABOUT SECTION (New Storytelling) */}
      <AboutSection />

      {/* 4. ROOMS SECTION (Grid System) */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <SubTitle>The Accommodation</SubTitle>
            <SectionTitle>Rooms & Suites</SectionTitle>
            <p className="text-gray-500 font-light">
              Temukan kenyamanan istirahat di kamar-kamar kami yang didesain elegan dengan sentuhan material alami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_ROOMS.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                price={room.price}
                image={room.image}
                description={room.description}
                slug={room.slug}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. FACILITIES (New Icons Grid) */}
      <Facilities />

      {/* 6. CTA (New Final Push) */}
      <CTA />

    </main>
  );
}