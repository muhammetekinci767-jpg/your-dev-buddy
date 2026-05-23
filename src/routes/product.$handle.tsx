import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Heart, Loader2, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { useShopifyProduct } from "@/hooks/useShopifyProducts";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/shopify";

export const Route = createFileRoute("/product/$handle")({
  component: ProductDetail,
});

const SIZES = ["S/M", "L/XL"];
const MENS_HANDLES = ["erkek", "new-in-man", "pants-man", "sleeves-tee", "core-tank", "sweatshirt"];
const WOMENS_HANDLES = ["kadin", "new-in-women", "pants-women", "crop-top", "baby-tee"];

function ProductDetail() {
  const { handle } = Route.useParams();
  const { product, loading } = useShopifyProduct(handle);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const [variantIdx, setVariantIdx] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [imgIdx, setImgIdx] = useState(0);
  const [descOpen, setDescOpen] = useState(false);

  const variant = product?.variants.edges[variantIdx]?.node;
  const productNode = useMemo(() => (product ? { node: product } : null), [product]);

  const collectionHandles: string[] = ((product as unknown as { collections?: { edges: { node: { handle: string } }[] } } | null)?.collections?.edges ?? []).map((e) => e.node.handle);
  const isWomens = collectionHandles.some((h) => WOMENS_HANDLES.includes(h));
  const isMens = collectionHandles.some((h) => MENS_HANDLES.includes(h));
  const relatedHandle = isWomens ? "kadin" : isMens ? "erkek" : null;
  const relatedTitle = isWomens ? "Kadın için diğer ürünler" : "Erkek için diğer ürünler";
  const images = product?.images.edges ?? [];
  const currentImage = images[imgIdx]?.node;

  const prev = () => setImgIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setImgIdx((i) => (i + 1) % images.length);

  const hasMultipleVariants = (product?.variants.edges.length ?? 0) > 1;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {loading ? (
          <div className="flex justify-center py-32">
            <Loader2 className="animate-spin" />
          </div>
        ) : !product ? (
          <p className="text-center text-muted-foreground py-32">Ürün bulunamadı.</p>
        ) : (
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative bg-secondary aspect-square lg:aspect-auto lg:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
              {currentImage && (
                <img
                  src={currentImage.url}
                  alt={currentImage.altText ?? product.title}
                  className="w-full h-full object-cover"
                />
              )}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Önceki"
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:opacity-60 transition-opacity"
                  >
                    <ChevronLeft size={28} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Sonraki"
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:opacity-60 transition-opacity"
                  >
                    <ChevronRight size={28} strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>

            {/* Info */}
            <div className="flex items-center justify-center px-6 lg:px-16 py-12 lg:py-0">
              <div className="w-full max-w-md space-y-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <h1 className="text-base font-normal tracking-wide">{product.title}</h1>
                    {variant && (
                      <p className="text-base">
                        {formatPrice(variant.price.amount, variant.price.currencyCode)}
                      </p>
                    )}
                  </div>
                  <button aria-label="Favorilere ekle" className="hover:opacity-60 transition-opacity">
                    <Heart size={20} strokeWidth={1.5} />
                  </button>
                </div>

                {hasMultipleVariants && (
                  <div className="space-y-4 pt-2">
                    <p className="text-sm">Renk:</p>
                    <div className="flex flex-wrap gap-6">
                      {product.variants.edges.map((v, i) => (
                        <button
                          key={v.node.id}
                          onClick={() => setVariantIdx(i)}
                          disabled={!v.node.availableForSale}
                          className={`text-sm pb-1 transition-all ${
                            i === variantIdx
                              ? "border-b border-foreground font-medium"
                              : "border-b border-transparent hover:border-foreground/40"
                          } ${!v.node.availableForSale ? "line-through opacity-40" : ""}`}
                        >
                          {v.node.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Beden:</p>
                    {/* YENİ SEKMEDE AÇILAN BEDEN REHBERİ LİNKİ */}
                    <Link 
                      to="/size-guide" 
                      target="_blank" 
                      className="text-sm underline underline-offset-4 hover:opacity-60"
                    >
                      Beden Rehberi
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    {SIZES.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`text-sm pb-1 transition-all ${
                          size === s
                            ? "border-b border-foreground font-medium"
                            : "border-b border-transparent hover:border-foreground/40"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {size && <p className="text-xs text-muted-foreground pt-1">Stokta var.</p>}
                </div>

                <button
                  disabled={!variant || !variant.availableForSale || isLoading || !size}
                  onClick={() => {
                    if (!variant || !productNode || !size) return;
                    addItem({
                      product: productNode as never,
                      variantId: variant.id,
                      variantTitle: `${variant.title} • ${size}`,
                      price: variant.price,
                      quantity: 1,
                      selectedOptions: [
                        ...(variant.selectedOptions || []),
                        { name: "Beden", value: size },
                      ],
                    });
                  }}
                  className="w-full bg-foreground text-background py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : !size ? (
                    "Beden Seç"
                  ) : variant?.availableForSale ? (
                    "Sepete Ekle"
                  ) : (
                    "Tükendi"
                  )}
                </button>

                {product.description && (
                  <div className="pt-2 border-t border-border">
                    <button
                      onClick={() => setDescOpen((o) => !o)}
                      className="w-full flex items-center justify-between py-4 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity"
                      aria-expanded={descOpen}
                    >
                      <span>Açıklama</span>
                      {descOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                    </button>
                    {descOpen && (
                      <p className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed pb-6">
                        {product.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {product && relatedHandle && (
          <ProductGrid collectionHandles={[relatedHandle]} title={relatedTitle} />
        )}
      </main>
      <Footer />
    </div>
  );
}
