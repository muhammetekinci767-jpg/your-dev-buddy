import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  storefrontApiRequest,
  PRODUCTS_QUERY,
  PRODUCT_BY_HANDLE_QUERY,
  COLLECTION_PRODUCTS_QUERY,
  ShopifyProduct,
} from "@/lib/shopify";

export function useShopifyCollection(handles: string[], first = 40) {
  const { i18n } = useTranslation();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const key = handles.join("|");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      for (const handle of handles) {
        try {
          const data = await storefrontApiRequest(COLLECTION_PRODUCTS_QUERY, { handle, first }, i18n.language);
          const edges = data?.data?.collection?.products?.edges;
          if (edges && edges.length > 0) {
            if (!cancelled) {
              setProducts(edges);
              setLoading(false);
            }
            return;
          }
        } catch {}
      }
      if (!cancelled) {
        setProducts([]);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [key, first, i18n.language]);

  return { products, loading };
}

export function useShopifyProducts(query?: string, first = 20, enabled = true) {
  const { i18n } = useTranslation();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    storefrontApiRequest(PRODUCTS_QUERY, { first, query: query ?? null }, i18n.language)
      .then((data) => {
        if (cancelled) return;
        setProducts(data?.data?.products?.edges ?? []);
      })
      .catch((e) => !cancelled && setError(e.message))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [query, first, enabled, i18n.language]);

  return { products, loading, error };
}

export function useShopifyProduct(handle: string | undefined) {
  const { i18n } = useTranslation();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!handle) return;
    let cancelled = false;
    setLoading(true);
    storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle }, i18n.language)
      .then((data) => {
        if (cancelled) return;
        setProduct(data?.data?.product ?? null);
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [handle, i18n.language]);

  return { product, loading };
}
