import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import WomensCategoryNav, { WOMENS_CATEGORIES, type WomensCategoryKey } from "@/components/WomensCategoryNav";

export const Route = createFileRoute("/womenswear/$category")({
  component: WomenswearCategory,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <Link to="/womenswear" className="underline">Back to Womenswear</Link>
    </div>
  ),
});

function WomenswearCategory() {
  const { t } = useTranslation();
  const { category } = Route.useParams();
  const cat = WOMENS_CATEGORIES.find((c) => c.key === (category as WomensCategoryKey));
  if (!cat) throw notFound();
  const title = t(`womens.categories.${cat.key}`, { defaultValue: cat.label });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <img src={cat.image} alt={String(title)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 px-4 text-center">
            <p className="text-hero-text/80 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3">
              {t("hero.women")}
            </p>
            <h1 className="text-hero-text text-3xl md:text-6xl font-light tracking-[0.18em] uppercase">
              {String(title)}
            </h1>
          </div>
        </section>

        <WomensCategoryNav active={cat.key} />

        <div id="womens-grid">
          <ProductGrid key={cat.key} collectionHandles={cat.handles} title={String(title)} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
