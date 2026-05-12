import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface InfoPageProps {
  titleKey: string;
  bodyKey: string;
}

export default function InfoPage({ titleKey, bodyKey }: InfoPageProps) {
  const { t } = useTranslation();
  const body = t(bodyKey, { returnObjects: true }) as string[] | string;
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-light tracking-[0.15em] uppercase mb-10 text-foreground">
          {t(titleKey)}
        </h1>
        <div className="space-y-5 text-foreground/80 text-sm md:text-base leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
