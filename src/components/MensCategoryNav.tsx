import { useState } from "react";
import { useTranslation } from "react-i18next";

export type MensCategoryKey = "all" | "tops" | "bottoms" | "shorts" | "outerwear" | "denim" | "accessories";

export const MENS_CATEGORIES: { key: MensCategoryKey; handles: string[] }[] = [
  { key: "all", handles: ["erkek", "erkek-giyim", "men", "menswear", "mens"] },
  { key: "tops", handles: ["erkek-tops", "erkek-ust", "tops", "t-shirts", "tisort", "mens-tops"] },
  { key: "bottoms", handles: ["erkek-alt", "pantolon", "trousers", "bottoms", "mens-bottoms"] },
  { key: "shorts", handles: ["sort", "shorts", "erkek-sort", "mens-shorts"] },
  { key: "outerwear", handles: ["erkek-dis-giyim", "mont", "outerwear", "jackets", "mens-outerwear"] },
  { key: "denim", handles: ["kot", "denim", "erkek-kot", "mens-denim"] },
  { key: "accessories", handles: ["aksesuar", "accessories", "mens-accessories"] },
];

interface Props {
  active: MensCategoryKey;
  onChange: (key: MensCategoryKey) => void;
}

export default function MensCategoryNav({ active, onChange }: Props) {
  const { t } = useTranslation();
  return (
    <nav className="border-y border-border bg-background sticky top-[52px] z-40">
      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex items-center justify-center gap-2 md:gap-1 px-4 py-3 min-w-max md:min-w-0 mx-auto">
          {MENS_CATEGORIES.map((c) => {
            const isActive = c.key === active;
            return (
              <li key={c.key}>
                <button
                  onClick={() => onChange(c.key)}
                  className={`whitespace-nowrap px-4 py-2 text-[11px] tracking-[0.2em] uppercase transition-colors ${
                    isActive
                      ? "bg-foreground text-background"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {t(`mens.categories.${c.key}`, { defaultValue: c.key })}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
