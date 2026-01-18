import Image from "next/image";
import { notFound } from "next/navigation";
import { ROOMS_DATA } from "@/lib/rooms";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Wifi, Wind, Coffee, Tv, Bath, Utensils, Star } from "lucide-react"; 

const getIcon = (amenity: string) => {
    if (amenity.includes("Wifi")) return <Wifi className="w-5 h-5" />;
    if (amenity.includes("Pool") || amenity.includes("Jacuzzi") || amenity.includes("Bath")) return <Bath className="w-5 h-5" />;
    if (amenity.includes("Dining") || amenity.includes("Minibar") || amenity.includes("Kitchen")) return <Utensils className="w-5 h-5" />;
    if (amenity.includes("View") || amenity.includes("Deck")) return <Wind className="w-5 h-5" />;
    if (amenity.includes("TV")) return <Tv className="w-5 h-5" />;
    return <Star className="w-5 h-5" />;
};

// UPDATE 1: Definisi Tipe Params untuk Next.js 15 (Harus Promise)
interface RoomDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

// UPDATE 2: Tambahkan 'async' pada function component
export default async function RoomDetailPage(props: RoomDetailProps) {
  
  // UPDATE 3: Kita harus 'await' params-nya dulu sebelum dipakai
  const params = await props.params;
  
  // Sekarang params.slug sudah aman dibaca
  const room = ROOMS_DATA.find((r) => r.slug === params.slug);

  if (!room) {
    return notFound();
  }

  return (
    <main className="bg-white pb-24">
      {/* HEADER IMAGE */}
      <div className="relative h-[70vh] min-h-[500px] w-full bg-gray-900">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover opacity-90"
          priority
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <Container className="absolute bottom-12 left-0 right-0 z-10 text-white">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl mb-4 leading-tight">
                {room.name}
            </h1>
        </Container>
      </div>

      {/* CONTENT */}
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* KOLOM KIRI */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex gap-8 border-b border-gray-100 pb-8">
                <div>
                    <span className="block text-gray-400 text-[10px] uppercase tracking-widest mb-1">Size</span>
                    <span className="text-lg font-serif">{room.size}</span>
                </div>
                <div>
                    <span className="block text-gray-400 text-[10px] uppercase tracking-widest mb-1">Occupancy</span>
                    <span className="text-lg font-serif">{room.occupancy}</span>
                </div>
            </div>

            <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl mb-6">The Experience</h3>
                <p className="text-gray-600 leading-loose font-light text-lg">
                    {room.description}
                </p>
            </div>

            <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl mb-6">Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {room.amenities.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 border border-gray-100 rounded-sm">
                            <span className="text-[#D4AF37]">{getIcon(item)}</span>
                            <span className="text-gray-600 text-sm uppercase">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div className="relative h-full">
            <div className="sticky top-32 bg-white p-8 border border-gray-200 shadow-xl rounded-sm">
                <div className="text-center mb-8 border-b border-gray-100 pb-8">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Start From</p>
                    <div className="flex items-baseline justify-center gap-2">
                        <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#D4AF37]">
                            {room.price}
                        </span>
                    </div>
                </div>
                <Button className="w-full h-14" variant="primary">
                    Book Now
                </Button>
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}