import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 md:py-32">
        <div className="max-w-2xl w-full space-y-12">
          <h1 className="text-xl md:text-2xl font-normal tracking-[0.3em] uppercase text-center text-foreground">
            {t("about.title")}
          </h1>
          
          <div className="space-y-8 text-sm leading-loose text-muted-foreground font-light text-justify">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <p>{t("about.p4")}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
