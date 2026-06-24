import { useState, lazy, Suspense } from "react";
import { Search, ShoppingBag, Menu, Plus, Minus } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useCartStore } from "@/stores/cartStore";
import SearchOverlay from "./SearchOverlay";
import LanguageSwitcher from "./LanguageSwitcher";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { MENS_CATEGORIES } from "./MensCategoryNav";
import { WOMENS_CATEGORIES } from "./WomensCategoryNav";
import Marquee from "./Marquee";

// Lazy load — Three.js ağır, sadece gerektiğinde yüklensin
const Logo3D = lazy(() => import("./Logo3D"));

const Navbar = () => {
  const items = useCartStore((s) => s.items);
  const openCart = useCartStore((s) => s.openCart);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const { t } = useTranslation();
  
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavigate = (path: string, params?: any) => {
    setMenuOpen(false); // Linke tıklandığında menüyü kapat
    navigate({ to: path, params });
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <>
      {/* Kayan Yazı Bileşenimiz - Sabit (sticky) DEĞİL, aşağı inince kaybolur */}
      <Marquee />

      {/* Sadece Navbar (Menü) sticky, aşağı kaydırınca ekranda yapışık kalır */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a] md:bg-[#0a0a0a]/50 backdrop-blur-xl transition-colors duration-300">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
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
            
            {/* Hamburger Menü Butonu */}
            <button
              onClick={() => setMenuOpen(true)}
              className="text-nav-foreground hover:opacity-60 transition-opacity ml-1"
              aria-label={t("nav.menu", "Menü")}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Açılır Sağ Menü (Drawer) */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="right" className="w-full sm:max-w-sm bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10 pt-16">
          <SheetHeader className="hidden">
            <SheetTitle>{t("nav.menu", "Menü")}</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-6 px-2">
            
            {/* Kadın Kategorisi */}
            <div className="border-b border-white/10 pb-4">
              <button 
                className="w-full flex items-center justify-between group"
                onClick={() => toggleAccordion("women")}
              >
                <span className="text-white text-base tracking-[0.2em] uppercase font-medium group-hover:opacity-70 transition-opacity">
                  {t("nav.women")}
                </span>
                {openAccordion === "women" ? (
                  <Minus size={18} strokeWidth={1.5} className="text-white" />
                ) : (
                  <Plus size={18} strokeWidth={1.5} className="text-white" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === "women" ? "max-h-96 mt-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-4 pl-2">
                  <button 
                    onClick={() => handleNavigate("/womenswear")}
                    className="text-left text-white/60 text-xs tracking-wider uppercase hover:text-white transition-colors"
                  >
                    {t("mens.viewAll", "Tümünü Gör")}
                  </button>
                  {WOMENS_CATEGORIES.map(c => (
                    <button 
                      key={c.key}
                      onClick={() => handleNavigate("/womenswear/$category", { category: c.key })}
                      className="text-left text-white/60 text-xs tracking-wider uppercase hover:text-white transition-colors"
                    >
                      {t(`womens.categories.${c.key}`, { defaultValue: c.label })}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Erkek Kategorisi */}
            <div className="border-b border-white/10 pb-4">
              <button 
                className="w-full flex items-center justify-between group"
                onClick={() => toggleAccordion("men")}
              >
                <span className="text-white text-base tracking-[0.2em] uppercase font-medium group-hover:opacity-70 transition-opacity">
                  {t("nav.men")}
                </span>
                {openAccordion === "men" ? (
                  <Minus size={18} strokeWidth={1.5} className="text-white" />
                ) : (
                  <Plus size={18} strokeWidth={1.5} className="text-white" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === "men" ? "max-h-96 mt-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-4 pl-2">
                  <button 
                    onClick={() => handleNavigate("/menswear")}
                    className="text-left text-white/60 text-xs tracking-wider uppercase hover:text-white transition-colors"
                  >
                    {t("mens.viewAll", "Tümünü Gör")}
                  </button>
                  {MENS_CATEGORIES.map(c => (
                    <button 
                      key={c.key}
                      onClick={() => handleNavigate("/menswear/$category", { category: c.key })}
                      className="text-left text-white/60 text-xs tracking-wider uppercase hover:text-white transition-colors"
                    >
                      {t(`mens.categories.${c.key}`, { defaultValue: c.label })}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Unisex Kategorisi */}
            <div className="border-b border-white/10 pb-4">
              <Link 
                to="/unisex"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between group w-full"
              >
                <span className="text-white text-base tracking-[0.2em] uppercase font-medium group-hover:opacity-70 transition-opacity">
                  {t("nav.unisex", "Unisex")}
                </span>
              </Link>
            </div>
            
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
