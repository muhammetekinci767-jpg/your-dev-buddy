import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WomensCategoryNav from "@/components/WomensCategoryNav";
import heroWomen from "@/assets/hero-women.jpg";

export const Route = createFileRoute("/womenswear")({
  component: Womenswear,
});

function Womenswear() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative w-full h-[70vh] md:h-[88vh] overflow-hidden">
          <img src={heroWomen} alt={t("hero.women")} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-4 text-center">
            <p className="text-hero-text/80 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3">
              {t("womens.heroTagline")}
            </p>
            <h1 className="text-hero-text text-4xl md:text-7xl font-light tracking-[0.18em] uppercase mb-6">
              {t("hero.women")}
            </h1>
          </div>
        </section>

        <WomensCategoryNav />
      </main>
      <Footer />
    </div>
  );
}
