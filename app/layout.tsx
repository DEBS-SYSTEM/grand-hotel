import type { Metadata } from "next";
// 1. Import Font dari Google
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
// 2. Import Komponen Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// 3. Konfigurasi Font (Variable CSS)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // Nama variabel ini penting!
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grand Nusa Hotel | Luxury Bali Resort",
  description: "Experience the ultimate luxury in Nusa Dua, Bali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 4. Inject Variable Font ke HTML tag
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased bg-[#fafaf9] text-[#1c1917]">
        
        {/* Navbar akan selalu ada di atas */}
        <Navbar />
        
        {/* Main Content (Isi halaman berubah-ubah di sini) */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer akan selalu ada di bawah */}
        <Footer />
        
      </body>
    </html>
  );
}