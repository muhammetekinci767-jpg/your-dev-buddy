import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANGS = [
  { code: "en", label: "English" },
  { code: "tr", label: "Türkçe" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
];

const LanguageSwitcher = ({ variant = "nav" }: { variant?: "nav" | "footer" }) => {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = LANGS.find((l) => l.code === i18n.language.split("-")[0]) ?? LANGS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={mounted ? t("lang.label") : "Language"}
        suppressHydrationWarning
        className={
          variant === "nav"
            ? "flex items-center gap-1 text-nav-foreground hover:opacity-60 transition-opacity text-xs uppercase tracking-wider"
            : "flex items-center gap-1 text-footer-foreground hover:opacity-60 transition-opacity text-xs uppercase tracking-wider"
        }
      >
        <Globe size={16} strokeWidth={1.5} />
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => i18n.changeLanguage(l.code)}
            className={l.code === current.code ? "font-semibold" : ""}
          >
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
