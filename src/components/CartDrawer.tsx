import { useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ExternalLink, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/shopify";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    isLoading,
    isSyncing,
    syncCart,
    getCheckoutUrl,
  } = useCartStore();

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const count = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode ?? "";

  const handleCheckout = () => {
    const url = getCheckoutUrl();
    if (url) {
      window.open(url, "_blank");
      closeCart();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && closeCart()}>
      <SheetContent className="flex flex-col w-full sm:max-w-md bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50 border-white/10 text-nav-foreground">
        <SheetHeader>
          <SheetTitle>Sepet ({count})</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-12">Sepetin boş.</p>
          ) : (
            items.map((item) => {
              const image = item.product.node.images?.edges?.[0]?.node;
              return (
                <div key={item.variantId} className="flex gap-3 border-b border-white/10 pb-4">
                  {image && (
                    <img src={image.url} alt={item.product.node.title} className="h-20 w-16 object-cover" />
                  )}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">{item.product.node.title}</p>
                        <p className="text-xs opacity-70">
                          {item.selectedOptions.map((o) => o.value).join(" • ")}
                        </p>
                      </div>
                      <button onClick={() => removeItem(item.variantId)} aria-label="Kaldır">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-white/20">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="p-1.5"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="p-1.5"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        {formatPrice(
                          (parseFloat(item.price.amount) * item.quantity).toString(),
                          item.price.currencyCode
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t border-white/10 pt-4">
            <div className="w-full space-y-3">
              <div className="flex justify-between font-medium">
                <span>Toplam</span>
                <span>{formatPrice(total.toString(), currency)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full"
                size="lg"
                disabled={isLoading || isSyncing}
              >
                {isLoading || isSyncing ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <ExternalLink className="w-4 h-4 mr-2" /> Shopify ile Ödemeye Geç
                  </>
                )}
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
