import { Link } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { useShopifyProducts, useShopifyCollection } from "@/hooks/useShopifyProducts";
import { formatPrice } from "@/lib/shopify";

interface ProductGridProps {
  query?: string;
  collectionHandles?: string[];
  title?: string;
}

const ProductGrid = ({ query, collectionHandles, title = "Trending Now" }: ProductGridProps) => {
  const byQuery = useShopifyProducts(query, 20, !collectionHandles);
  const byCollection = useShopifyCollection(collectionHandles ?? []);
  const products = collectionHandles ? byCollection.products : byQuery.products;
  const loading = collectionHandles ? byCollection.loading : byQuery.loading;
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  return (
    <section className="px-4 py-16">
      <h2 className="text-foreground text-center text-xs tracking-[0.3em] uppercase font-medium mb-12">
        {title}
      </h2>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin" />
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-muted-foreground text-sm">No products found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8">
          {products.map((p) => {
            const variant = p.node.variants.edges[0]?.node;
            const image = p.node.images.edges[0]?.node;
            return (
              <div key={p.node.id} className="group">
                <Link
                  to="/product/$handle" params={{ handle: p.node.handle }}
                  className="relative overflow-hidden mb-3 aspect-[3/4] bg-secondary block"
                >
                  {image && (
                    <img
                      src={image.url}
                      alt={image.altText ?? p.node.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (!variant) return;
                      addItem({
                        product: p,
                        variantId: variant.id,
                        variantTitle: variant.title,
                        price: variant.price,
                        quantity: 1,
                        selectedOptions: variant.selectedOptions || [],
                      });
                    }}
                    disabled={!variant || isLoading}
                    className="absolute bottom-0 left-0 right-0 bg-foreground text-background text-[10px] tracking-[0.2em] uppercase py-3 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
                  >
                    Sepete Ekle
                  </button>
                </Link>
                <Link to="/product/$handle" params={{ handle: p.node.handle }}>
                  <p className="text-foreground text-xs font-medium tracking-wide leading-tight">
                    {p.node.title}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {formatPrice(
                      p.node.priceRange.minVariantPrice.amount,
                      p.node.priceRange.minVariantPrice.currencyCode
                    )}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
