import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";

// ─── Types ───────────────────────────────────────────────────────────────────

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

type ConsentDecision = "accepted" | "rejected" | "custom" | null;

const STORAGE_KEY = "svamp_cookie_consent";

// ─── Settings Panel ───────────────────────────────────────────────────────────

function SettingsPanel({
  onSave,
  onClose,
  isTr,
}: {
  onSave: (consent: CookieConsent) => void;
  onClose: () => void;
  isTr: boolean;
}) {
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const toggle = (key: keyof Omit<CookieConsent, "necessary">) => {
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const Row = ({
    label,
    description,
    checked,
    disabled,
    onToggle,
  }: {
    label: string;
    description: string;
    checked: boolean;
    disabled?: boolean;
    onToggle?: () => void;
  }) => (
    <div className="flex items-start justify-between gap-6 py-5 border-b border-white/10 last:border-0">
      <div className="space-y-1">
        <p className="text-xs tracking-[0.15em] uppercase font-medium text-foreground">
          {label}
        </p>
        <p className="text-[11px] text-muted-foreground leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
      <button
        type="button"
        onClick={disabled ? undefined : onToggle}
        aria-pressed={checked}
        className={`relative flex-shrink-0 mt-0.5 w-9 h-5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${
          checked ? "bg-foreground" : "bg-white/15"
        } ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-transform duration-200 ${
            checked ? "translate-x-4 bg-background" : "translate-x-0 bg-white/50"
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-background border border-white/10 rounded-none shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="text-xs tracking-[0.2em] uppercase font-medium">
            {isTr ? "Çerez Ayarları" : "Cookie Settings"}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>

        {/* Rows */}
        <div className="px-6">
          <Row
            label={isTr ? "Zorunlu" : "Necessary"}
            description={
              isTr
                ? "Site temel işlevleri için gereklidir. Devre dışı bırakılamaz."
                : "Required for core site functionality. Cannot be disabled."
            }
            checked={true}
            disabled
          />
          <Row
            label={isTr ? "Analitik" : "Analytics"}
            description={
              isTr
                ? "Site performansını ölçmek için Google Analytics kullanılır."
                : "Used to measure site performance via Google Analytics."
            }
            checked={consent.analytics}
            onToggle={() => toggle("analytics")}
          />
          <Row
            label={isTr ? "Pazarlama" : "Marketing"}
            description={
              isTr
                ? "Meta Pixel ve TikTok Pixel ile hedefli reklamlar için kullanılır."
                : "Used for targeted ads via Meta Pixel and TikTok Pixel."
            }
            checked={consent.marketing}
            onToggle={() => toggle("marketing")}
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-white/10">
          <button
            onClick={() => onSave(consent)}
            className="w-full py-3 text-xs tracking-[0.2em] uppercase font-medium bg-foreground text-background hover:opacity-80 transition-opacity"
          >
            {isTr ? "Tercihleri Kaydet" : "Save Preferences"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Banner ──────────────────────────────────────────────────────────────

export function CookieBanner() {
  const { i18n } = useTranslation();
  const isTr = i18n.language?.startsWith("tr");

  const [decision, setDecision] = useState<ConsentDecision>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setDecision(JSON.parse(stored).decision);
      } else {
        // Kısa gecikmeyle göster — sayfa yüklenirken çakışmasın
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const saveDecision = (d: ConsentDecision, consent?: CookieConsent) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          decision: d,
          consent: consent ?? {
            necessary: true,
            analytics: d === "accepted",
            marketing: d === "accepted",
          },
          timestamp: Date.now(),
        })
      );
    } catch {
      // localStorage erişilemiyorsa sessizce geç
    }
    setDecision(d);
    setVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => saveDecision("accepted");
  const handleRejectAll = () => saveDecision("rejected");
  const handleSaveCustom = (consent: CookieConsent) =>
    saveDecision("custom", consent);

  // Karar verilmişse hiçbir şey render etme
  if (decision !== null) return null;

  return (
    <>
      {/* Settings modal */}
      {showSettings && (
        <SettingsPanel
          onSave={handleSaveCustom}
          onClose={() => setShowSettings(false)}
          isTr={isTr}
        />
      )}

      {/* Banner */}
      <div
        role="dialog"
        aria-label={isTr ? "Çerez bildirimi" : "Cookie notice"}
        aria-live="polite"
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Subtle top border glow */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="bg-background/95 backdrop-blur-md border-t border-white/10 px-6 py-5">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            {/* Text */}
            <p className="text-[11px] text-muted-foreground leading-relaxed flex-1">
              {isTr ? (
                <>
                  Web sitemizde deneyiminizi geliştirmek için çerezler
                  kullanıyoruz. Detaylı bilgi için{" "}
                  <Link
                    to="/terms"
                    search={{ tab: "cookies" } as never}
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                    onClick={() => setVisible(false)}
                  >
                    çerez politikamızı
                  </Link>{" "}
                  inceleyebilirsiniz.
                </>
              ) : (
                <>
                  We use cookies to improve your experience on our website. For
                  detailed information, please review our{" "}
                  <Link
                    to="/terms"
                    search={{ tab: "cookies" } as never}
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                    onClick={() => setVisible(false)}
                  >
                    cookie policy
                  </Link>
                  .
                </>
              )}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground border border-white/15 hover:border-white/30 hover:text-foreground transition-all"
              >
                {isTr ? "Ayarlar" : "Settings"}
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground border border-white/15 hover:border-white/30 hover:text-foreground transition-all"
              >
                {isTr ? "Reddet" : "Reject All"}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-medium bg-foreground text-background hover:opacity-80 transition-opacity"
              >
                {isTr ? "Kabul Et" : "Accept All"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
