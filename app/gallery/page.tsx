"use client";

import { useState } from "react";
import Image from "next/image"; // <--- Import Next Image
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import { X } from "lucide-react";

const GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200", 
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200", 
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200", 
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200", 
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200", 
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200", 
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200", 
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200", 
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200", 
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main>
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Visual Journey"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000" 
      />

      <section className="py-24">
        <Container>
            {/* GRID GALLERY */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {GALLERY_IMAGES.map((src, index) => (
                    <div 
                        key={index} 
                        // Parent wajib relative dan punya tinggi (aspect-ratio) agar 'fill' bekerja
                        className="relative aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer bg-gray-100"
                        onClick={() => setSelectedImage(src)}
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill // Otomatis mengikuti ukuran parent
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            unoptimized={true} // Bypass config error
                        />
                        
                        {/* Overlay effect + Icon Zoom */}
                        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                            <span className="text-white text-xs uppercase tracking-widest border border-white px-4 py-2 bg-black/20 backdrop-blur-sm">View</span>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
      </section>

      {/* MODAL / LIGHTBOX POP-UP */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
                onClick={() => setSelectedImage(null)}
            >
                <X size={40} />
            </button>

            {/* Container Gambar Besar */}
            {/* Kita butuh container dengan ukuran pasti agar 'fill' bekerja */}
            <div className="relative w-full max-w-5xl h-[80vh]">
                <Image 
                    src={selectedImage} 
                    alt="Enlarged view" 
                    fill // Mengisi container h-80vh
                    className="object-contain" // Gambar tidak akan terpotong (fit)
                    unoptimized={true} // Bypass config error
                    priority // Load prioritas tinggi
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
      )}

    </main>
  );
}