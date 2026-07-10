import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/menswear")({
  component: Menswear,
});

function Menswear() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <Navbar />

      <main className="flex-1 w-full flex flex-col gap-[2px]">
        
        {/* 1. EN ÜSTTEKİ BÜYÜK BANNER (HERO) */}
        <div className="relative w-full h-[75vh] md:h-[85vh] bg-gray-100 overflow-hidden">
          {/* BURAYA KENDİ FOTOĞRAFINI KOY (src kısmını değiştir) */}
          <img
            src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=2000&auto=format&fit=crop"
            alt="Menswear Hero"
            className="w-full h-full object-cover"
          />
          {/* İstersen sol alta yazı/logo ekleyebilirsin */}
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-sm md:text-base tracking-[0.2em] uppercase font-bold drop-shadow-md">
              MENSWEAR COLLECTION
            </h1>
          </div>
        </div>

        {/* 2. YAN YANA KATEGORİLER (Mobil'de 2'li, PC'de 4'lü yan yana) */}
        <div className="w-full px-[2px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
            
            {/* Kategori 1 */}
            <Link to="/menswear/denim" className="relative group block aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop" alt="Denim" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase font-medium drop-shadow-md">
                Denim
              </div>
            </Link>

            {/* Kategori 2 */}
            <Link to="/menswear/bottoms" className="relative group block aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop" alt="Shorts" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase font-medium drop-shadow-md">
                Shorts
              </div>
            </Link>

            {/* Kategori 3 */}
            <Link to="/menswear/tops" className="relative group block aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop" alt="Tops" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase font-medium drop-shadow-md">
                Tops
              </div>
            </Link>

            {/* Kategori 4 */}
            <Link to="/menswear/new-in" className="relative group block aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=800&auto=format&fit=crop" alt="New In" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase font-medium drop-shadow-md">
                New In
              </div>
            </Link>

          </div>
        </div>

        {/* 3. ORTA BANNER */}
        <div className="relative w-full h-[65vh] md:h-[75vh] bg-gray-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&w=2000&auto=format&fit=crop"
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-widest uppercase drop-shadow-xl opacity-90">
              EUROPA
            </h2>
          </div>
          <div className="absolute bottom-6 right-6 text-white">
            <Link to="/menswear" className="text-sm tracking-widest uppercase font-medium hover:opacity-70 transition-opacity drop-shadow-md">
              Shop Now
            </Link>
          </div>
        </div>

        {/* 4. EN ALT BANNER */}
        <div className="relative w-full h-[65vh] md:h-[75vh] bg-gray-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2000&auto=format&fit=crop"
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 text-white">
            <Link to="/accessories" className="text-sm tracking-widest uppercase font-medium hover:opacity-70 transition-opacity drop-shadow-md">
              Shop Sunglasses
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Menswear;
