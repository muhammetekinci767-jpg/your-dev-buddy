import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import p1 from "@/assets/mens-newin.jpg";
import p2 from "@/assets/mens-tshirt.jpg";
import p3 from "@/assets/mens-sleeveless.jpg";
import p4 from "@/assets/mens-tank.jpg";
import p5 from "@/assets/mens-sweatshirt.jpg";
import p6 from "@/assets/mens-pants.jpg";

export type MensCategoryKey = "new-in" | "tshirt" | "sleeveless" | "tank" | "sweatshirt" | "pants";

export const MENS_CATEGORIES: { key: MensCategoryKey; label: string; handles: string[]; image: string }[] = [
  { key: "new-in", label: "New In", handles: ["new-in-man"], image: p1 },
  { key: "tshirt", label: "T-Shirt", handles: ["t-shirt"], image: p2 },
  { key: "sleeveless", label: "Sleeveless Tee", handles: ["sleeves-tee"], image: p3 },
  { key: "tank", label: "Core Tank", handles: ["core-tank"], image: p4 },
  { key: "sweatshirt", label: "Sweatshirt", handles: ["sweatshirt"], image: p5 },
  { key: "pants", label: "Pants", handles: ["pants-man"], image: p6 },
];

interface Props {
  active?: MensCategoryKey;
}

export default function MensCategoryNav({ active }: Props) {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {MENS_CATEGORIES.map((c) => {
          const isActive = c.key === active;
          const label = t(`mens.categories.${c.key}`, { defaultValue: c.label });
          return (
            <Link
              key={c.key}
              to="/menswear/$category"
              params={{ category: c.key }}
              className={`group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-secondary block ${
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
            </Link>
          );
        })}
      </div>
    </section>
  );
}
