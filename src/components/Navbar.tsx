import { useState, lazy, Suspense } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useCartStore } from "@/stores/cartStore";
import SearchOverlay from "./SearchOverlay";
import LanguageSwitcher from "./LanguageSwitcher";

// Lazy load — Three.js ağır, sadece gerektiğinde yüklensin
const Logo3D = lazy(() => import("./Logo3D"));

const Navbar = () => {
  const items = useCartStore((s) => s.items);
  const openCart = useCartStore((s) => s.openCart);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const { t } = useTranslation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Arkadan sızıntıyı engelleyen sabit blok */}
      <div className="absolute top-0 left-0 w-full h-[65px] bg-[#0a0a0a] z-40 pointer-events-none" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50">
        <div className="flex items-center justify-between px-4 py-3">

          {/* Logo — 3D model, yüklenene kadar boş alan göster */}
          <Link to="/" className="flex items-center" aria-label="Home">
            <Suspense
              fallback={
                <div className="h-10 w-10 rounded-sm bg-white/5 animate-pulse" />
              }
            >
              <Logo3D />
            </Suspense>
          </Link>

          <div className="hidden md:flex items-center gap-8" />

          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setSearchOpen(true)}
              className="text-nav-foreground hover:opacity-60 transition-opacity"
              aria-label={t("nav.search")}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={openCart}
              className="text-nav-foreground hover:opacity-60 transition-opacity relative"
              aria-label={t("nav.cart")}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[9px] min-w-3.5 h-3.5 px-1 flex items-center justify-center rounded-full">
                {count}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;
