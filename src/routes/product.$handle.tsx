import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useShopifyProduct } from "@/hooks/useShopifyProducts";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/shopify";

export const Route = createFileRoute("/product/$handle")({
  component: ProductDetail,
});

function ProductDetail() {
  const { handle } = Route.useParams();
  const { product, loading } = useShopifyProduct(handle);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const [variantIdx, setVariantIdx] = useState(0);

  const variant = product?.variants.edges[variantIdx]?.node;
  const productNode = useMemo(() => (product ? { node: product } : null), [product]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin" />
          </div>
        ) : !product ? (
          <p className="text-center text-muted-foreground">Ürün bulunamadı.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-3">
              {product.images.edges.map((img, i) => (
                <img
                  key={i}
                  src={img.node.url}
                  alt={img.node.altText ?? product.title}
                  className="w-full aspect-[3/4] object-cover bg-secondary"
                />
              ))}
            </div>
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-light tracking-wide">{product.title}</h1>
              {variant && (
                <p className="text-xl">{formatPrice(variant.price.amount, variant.price.currencyCode)}</p>
              )}
              <p className="text-sm text-muted-foreground whitespace-pre-line">{product.description}</p>
              {product.variants.edges.length > 1 && (
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wider">Seçenek</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.edges.map((v, i) => (
                      <button
                        key={v.node.id}
                        onClick={() => setVariantIdx(i)}
                        className={`px-3 py-2 text-xs border ${
                          i === variantIdx
                            ? "border-foreground bg-foreground text-background"
                            : "border-border"
                        }`}
                      >
                        {v.node.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <Button
                size="lg"
                disabled={!variant || !variant.availableForSale || isLoading}
                onClick={() => {
                  if (!variant || !productNode) return;
                  addItem({
                    product: productNode as never,
                    variantId: variant.id,
                    variantTitle: variant.title,
                    price: variant.price,
                    quantity: 1,
                    selectedOptions: variant.selectedOptions || [],
                  });
                }}
                className="w-full"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : variant?.availableForSale ? "Sepete Ekle" : "Tükendi"}
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
