import { useTranslation } from "react-i18next";
import p1 from "@/assets/mens-newin.jpg";
import p2 from "@/assets/mens-tshirt.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";

export type MensCategoryKey = "new-in" | "tshirt" | "sleeveless" | "tank" | "sweatpants" | "pants";

export const MENS_CATEGORIES: { key: MensCategoryKey; label: string; handles: string[]; image: string }[] = [
  { key: "new-in", label: "New In", handles: ["yeni", "new-in", "new", "yeni-gelenler", "mens-new-in"], image: p1 },
  { key: "tshirt", label: "T-Shirt", handles: ["erkek-tshirt", "tshirt", "t-shirt", "tisort", "mens-tshirt"], image: p2 },
  { key: "sleeveless", label: "Sleeveless Tee", handles: ["sleeveless", "sleeveless-tee", "kolsuz", "mens-sleeveless"], image: p3 },
  { key: "tank", label: "Core Tank", handles: ["tank", "core-tank", "atlet", "mens-tank"], image: p4 },
  { key: "sweatpants", label: "Sweatpants", handles: ["sweatpants", "esofman", "esofman-alti", "mens-sweatpants"], image: p5 },
  { key: "pants", label: "Pants", handles: ["pants", "pantolon", "erkek-pantolon", "mens-pants"], image: p6 },
];

interface Props {
  active: MensCategoryKey;
  onChange: (key: MensCategoryKey) => void;
}

export default function MensCategoryNav({ active, onChange }: Props) {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {MENS_CATEGORIES.map((c) => {
          const isActive = c.key === active;
          const label = t(`mens.categories.${c.key}`, { defaultValue: c.label });
          return (
            <button
              key={c.key}
              onClick={() => {
                onChange(c.key);
                document.getElementById("mens-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
