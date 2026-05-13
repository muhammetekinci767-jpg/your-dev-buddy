import { useTranslation } from "react-i18next";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";

export type WomensCategoryKey = "new-in" | "tshirt" | "crop-top" | "sweatpants" | "pants";

export const WOMENS_CATEGORIES: { key: WomensCategoryKey; label: string; handles: string[]; image: string }[] = [
  { key: "new-in", label: "New In", handles: ["yeni-kadin", "new-in-women", "womens-new-in", "yeni", "new-in"], image: p1 },
  { key: "tshirt", label: "T-Shirt", handles: ["kadin-tshirt", "womens-tshirt", "tshirt", "tisort"], image: p2 },
  { key: "crop-top", label: "Crop Top", handles: ["crop-top", "crop", "kadin-crop", "womens-crop"], image: p3 },
  { key: "sweatpants", label: "Sweatpants", handles: ["kadin-sweatpants", "womens-sweatpants", "esofman-kadin", "sweatpants"], image: p4 },
  { key: "pants", label: "Pants", handles: ["kadin-pantolon", "womens-pants", "pants", "pantolon"], image: p5 },
];

interface Props {
  active: WomensCategoryKey;
  onChange: (key: WomensCategoryKey) => void;
}

export default function WomensCategoryNav({ active, onChange }: Props) {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {WOMENS_CATEGORIES.map((c) => {
          const isActive = c.key === active;
          const label = t(`womens.categories.${c.key}`, { defaultValue: c.label });
          return (
            <button
              key={c.key}
              onClick={() => {
                onChange(c.key);
                document.getElementById("womens-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-secondary ${
                isActive ? "ring-2 ring-foreground" : ""
              }`}
            >
              <img
                src={c.image}
                alt={String(label)}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-sm md:text-lg tracking-[0.3em] uppercase font-light">
                  {String(label)}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
