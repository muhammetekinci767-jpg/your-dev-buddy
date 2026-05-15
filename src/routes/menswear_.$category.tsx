import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { MENS_CATEGORIES, type MensCategoryKey } from "@/components/MensCategoryNav";

export const Route = createFileRoute("/menswear_/$category")({
  component: MenswearCategory,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <Link to="/menswear" className="underline">Back to Menswear</Link>
    </div>
  ),
});

function MenswearCategory() {
  const { t } = useTranslation();
  const { category } = Route.useParams();
  const cat = MENS_CATEGORIES.find((c) => c.key === (category as MensCategoryKey));
  if (!cat) throw notFound();
  const title = t(`mens.categories.${cat.key}`, { defaultValue: cat.label });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="px-4 md:px-6 pt-8 pb-2">
          <nav className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/menswear" className="hover:text-foreground">{t("hero.men")}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{String(title)}</span>
          </nav>
          <h1 className="text-foreground text-2xl md:text-3xl font-light tracking-[0.18em] uppercase">
            {String(title)}
          </h1>
        </div>

        <ProductGrid key={cat.key} collectionHandles={cat.handles} title={String(title)} />
      </main>
      <Footer />
    </div>
  );
}
