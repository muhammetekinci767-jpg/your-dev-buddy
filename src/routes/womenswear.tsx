import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/womenswear")({
  component: Womenswear,
});

function Womenswear() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <Navbar />

      <main className="flex-1 w-full flex flex-col gap-[2px]">
        
        {/* 1. EN ÜSTTEKİ BÜYÜK BANNER (HERO) */}
        <div className="relative w-full h-[75vh] md:h-[85vh] bg-gray-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop"
            alt="Womenswear Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-sm md:text-base tracking-[0.2em] uppercase font-bold drop-shadow-md">
              WOMENSWEAR COLLECTION
            </h1>
          </div>
        </div>

        {/* 2. YAN YANA KATEGORİLER */}
        <div className="w-full px-[2px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
            
            <Link to="/womenswear/denim" className="relative group block aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop" alt="Denim" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase font-medium drop-shadow-md">
                Denim
              </div>
            </Link>

            <Link to="/womenswear/bottoms" className="relative group block aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1509631179647-0c115c382f6e?q=80&w=800&auto=format&fit=crop" alt="Bottoms" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase font-medium drop-shadow-md">
                Bottoms
              </div>
            </Link>

            <Link to="/womenswear/tops" className="relative group block aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop" alt="Tops" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase font-medium drop-shadow-md">
                Tops
              </div>
            </Link>

            <Link to="/womenswear/new-in" className="relative group block aspect-[3/4] bg-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1485230895905-ef6443c7b808?q=80&w=800&auto=format&fit=crop" alt="New In" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase font-medium drop-shadow-md">
                New In
              </div>
            </Link>

          </div>
        </div>

        {/* 3. ORTA BANNER */}
        <div className="relative w-full h-[65vh] md:h-[75vh] bg-gray-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop"
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 text-white">
            <Link to="/womenswear" className="text-sm tracking-widest uppercase font-medium hover:opacity-70 transition-opacity drop-shadow-md">
              Shop Collection
            </Link>
          </div>
        </div>

        {/* 4. EN ALT BANNER */}
        <div className="relative w-full h-[65vh] md:h-[75vh] bg-gray-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2000&auto=format&fit=crop"
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 text-white">
            <Link to="/accessories" className="text-sm tracking-widest uppercase font-medium hover:opacity-70 transition-opacity drop-shadow-md">
              Discover More
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Womenswear;
