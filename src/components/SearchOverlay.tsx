import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SUGGESTIONS = [
  { label: "Womenswear", path: "/womenswear" },
  { label: "Menswear", path: "/menswear" },
];

const SearchOverlay = ({ open, onClose }: Props) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const filtered = query
    ? SUGGESTIONS.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()))
    : SUGGESTIONS;

  const go = (path: string) => {
    onClose();
    setQuery("");
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 pt-6">
        <div className="flex items-center gap-3 border-b border-white/20 pb-3">
          <Search size={20} className="text-white" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ara..."
            className="flex-1 bg-transparent text-white text-lg placeholder:text-white/50 outline-none"
          />
          <button onClick={onClose} aria-label="Kapat" className="text-white">
            <X size={20} />
          </button>
        </div>

        <div className="mt-6">
          <p className="text-white/60 text-xs uppercase tracking-wider mb-3">
            Öneriler
          </p>
          <ul className="space-y-2">
            {filtered.map((s) => (
              <li key={s.path}>
                <button
                  onClick={() => go(s.path)}
                  className="text-white/90 hover:text-white text-base"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
