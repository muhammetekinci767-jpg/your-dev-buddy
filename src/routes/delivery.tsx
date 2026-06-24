import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/delivery")({
  component: DeliveryPage,
});

function DeliveryPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-24 md:py-32 space-y-12">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <h1 className="text-base font-normal tracking-wide uppercase">
            {t("delivery.title")}
          </h1>
          <p className="text-xs text-muted-foreground">
            {t("delivery.subtitle")}
          </p>
        </div>

        <div className="text-xs space-y-8 font-light leading-relaxed text-muted-foreground">
          <div className="space-y-2">
            <h2 className="text-foreground font-medium uppercase tracking-wider">{t("delivery.domestic.heading")}</h2>
            <p>{t("delivery.domestic.p1")}</p>
            <p>{t("delivery.domestic.p2")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-foreground font-medium uppercase tracking-wider">{t("delivery.international.heading")}</h2>
            <p>{t("delivery.international.p1")}</p>
            <p>{t("delivery.international.p2")}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-foreground font-medium uppercase tracking-wider">{t("delivery.customs.heading")}</h2>
            <p>{t("delivery.customs.p1")}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
