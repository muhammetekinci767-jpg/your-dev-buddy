import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import p1 from "@/assets/womens-newin.jpg";
import p2 from "@/assets/womens-tshirt.jpg";
import p3 from "@/assets/womens-crop.jpg";
import p4 from "@/assets/womens-babytee.jpg";
import p5 from "@/assets/womens-pants.jpg";

export type WomensCategoryKey = "new-in" | "tshirt" | "crop-top" | "sweatpants" | "pants";

export const WOMENS_CATEGORIES: { key: WomensCategoryKey; label: string; handles: string[]; image: string }[] = [
  { key: "new-in", label: "New In", handles: ["new-in-women"], image: p1 },
  { key: "tshirt", label: "T-Shirt", handles: ["t-shirt"], image: p2 },
  { key: "crop-top", label: "Crop Top", handles: ["crop-top"], image: p3 },
  { key: "sweatpants", label: "Baby Tee", handles: ["baby-tee"], image: p4 },
  { key: "pants", label: "Pants", handles: ["pants-women"], image: p5 },
];

interface Props {
  active?: WomensCategoryKey;
}

export default function WomensCategoryNav({ active }: Props) {
  const { t } = useTranslation();
  return (
    <section className="px-2 md:px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {WOMENS_CATEGORIES.map((c) => {
          const isActive = c.key === active;
          const label = t(`womens.categories.${c.key}`, { defaultValue: c.label });
          return (
            <Link
              key={c.key}
              to="/womenswear/$category"
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
