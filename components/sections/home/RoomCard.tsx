import Image from "next/image";
import Link from "next/link"; // Jangan lupa import Link
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

interface RoomProps {
  name: string;
  price: string;
  image: string;
  description: string;
  slug: string; // Pastikan ini ada
}

export default function RoomCard({ name, price, image, description, slug }: RoomProps) {
  return (
    <div className="group bg-white rounded-sm overflow-hidden border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      {/* Image Wrapper */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized={true} // Gunakan ini agar aman dari error config
        />
        <div className="absolute top-4 right-4">
            <Badge variant="light">{price}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 text-center space-y-4 flex flex-col grow">
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1c1917] group-hover:text-[#D4AF37] transition-colors">
          {name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>
        
        <div className="pt-4 mt-auto">
            {/* LINK KE HALAMAN DINAMIS */}
            <Link href={`/rooms/${slug}`}>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#1c1917] border-b border-gray-300 pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer">
                    View Details
                </span>
            </Link>
        </div>
      </div>
    </div>
  );
}