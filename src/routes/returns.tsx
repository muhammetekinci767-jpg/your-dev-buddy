import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/returns")({
  component: ReturnsPage,
});

function ReturnsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-24 md:py-32 space-y-12">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <h1 className="text-base font-normal tracking-wide uppercase">
            {t("returns.title")}
          </h1>
          <p className="text-xs text-muted-foreground">
            {t("returns.subtitle")}
          </p>
        </div>

        <div className="text-xs space-y-8 font-light leading-relaxed text-muted-foreground">
          <div className="space-y-2">
            <h2 className="text-foreground font-medium uppercase tracking-wider">{t("returns.window.heading")}</h2>
            <p><strong>{t("returns.window.tr")}</strong> {t("returns.window.trText")}</p>
            <p><strong>{t("returns.window.intl")}</strong> {t("returns.window.intlText")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-foreground font-medium uppercase tracking-wider">{t("returns.conditions.heading")}</h2>
            <p>{t("returns.conditions.p1")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-foreground font-medium uppercase tracking-wider">{t("returns.shipping.heading")}</h2>
            <p>{t("returns.shipping.p1")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-foreground font-medium uppercase tracking-wider">{t("returns.contact.heading")}</h2>
            <p>
              {t("returns.contact.p1")}{" "}
              <strong>{t("returns.contact.email")}</strong>{" "}
              {t("returns.contact.p2")}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
