import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import MensCategoryNav, { MENS_CATEGORIES, type MensCategoryKey } from "@/components/MensCategoryNav";
import heroMen from "@/assets/hero-men.jpg";

export const Route = createFileRoute("/menswear")({
  component: Menswear,
});

function Menswear() {
  const { t } = useTranslation();
  const [active, setActive] = useState<MensCategoryKey>("new-in");
  const handles = MENS_CATEGORIES.find((c) => c.key === active)?.handles ?? [];
  const title = t(`mens.categories.${active}`, { defaultValue: t("hero.men") });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative w-full h-[70vh] md:h-[88vh] overflow-hidden">
          <img src={heroMen} alt={t("hero.men")} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-4 text-center">
            <p className="text-hero-text/80 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3">
              {t("mens.heroTagline")}
            </p>
            <h1 className="text-hero-text text-4xl md:text-7xl font-light tracking-[0.18em] uppercase mb-6">
              {t("hero.men")}
            </h1>
            <Link
              to="/menswear"
              className="inline-block border border-hero-text/80 text-hero-text text-[11px] tracking-[0.25em] uppercase px-8 py-3 hover:bg-hero-text hover:text-foreground transition-colors duration-300"
            >
              {t("mens.heroCta")}
            </Link>
          </div>
        </section>

        <MensCategoryNav active={active} onChange={setActive} />

        <div id="mens-grid">
          <ProductGrid key={active} collectionHandles={handles} title={String(title)} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
