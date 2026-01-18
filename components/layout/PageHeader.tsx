import Image from "next/image";
import Container from "@/components/ui/Container";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image Wrapper */}
      {/* Tambahkan bg-gray-900 agar jika gambar loading, backgroundnya tetap gelap elegan */}
      <div className="absolute inset-0 z-0 bg-stone-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-50" // Gelapkan gambar 50%
          priority // Load paling awal
          unoptimized={true} // <--- JURUS ANTI GAGAL (Supaya gambar pasti muncul)
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white mt-10">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4 text-[#D4AF37]">
          {subtitle}
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl leading-tight">
          {title}
        </h1>
      </Container>
    </section>
  );
}