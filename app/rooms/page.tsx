import { ROOMS_DATA } from "@/lib/rooms"; // Mengambil data dari pusat data
import Hero from "@/components/sections/home/Hero";
import BookingBar from "@/components/sections/home/BookingBar";
import RoomCard from "@/components/sections/home/RoomCard"
import AboutSection from "@/components/sections/home/AboutSection"
import Facilities from "@/components/sections/home/Facilities"
import CTA from "@/components/sections/home/CTA"
import Container from "@/components/ui/Container";
import { SectionTitle, SubTitle } from "@/components/ui/Typography";

export default function Home() {
  // Kita ambil 3 kamar pertama saja untuk ditampilkan di Homepage sebagai "Featured"
  const featuredRooms = ROOMS_DATA.slice(0, 3);

  return (
    <main>
      
      {/* 1. HERO SECTION (Layar Penuh & Tombol Aksi) */}
      <Hero />

      {/* 2. BOOKING BAR (Form Mengambang Sticky) */}
      <BookingBar />

      {/* 3. ABOUT SECTION (Cerita & Filosofi Hotel) */}
      <AboutSection />

      {/* 4. ROOMS SECTION (Daftar Kamar Unggulan) */}
      <section className="py-24 bg-white">
        <Container>
          {/* Header Judul */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <SubTitle>The Accommodation</SubTitle>
            <SectionTitle>Rooms & Suites</SectionTitle>
            <p className="text-gray-500 font-light leading-relaxed">
              Temukan kenyamanan istirahat di kamar-kamar kami yang didesain elegan dengan sentuhan material alami, memadukan kemewahan modern dan ketenangan budaya Bali.
            </p>
          </div>

          {/* Grid Layout Kamar */}
          {/* Menggunakan data dinamis dari ROOMS_DATA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                price={room.price}
                image={room.image}
                description={room.description}
                slug={room.slug} // Penting: Ini kunci agar link "View Details" bekerja
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. FACILITIES SECTION (Icon Grid) */}
      <Facilities />

      {/* 6. CTA SECTION (Ajakan Booking Terakhir) */}
      <CTA />

    </main>
  );
}