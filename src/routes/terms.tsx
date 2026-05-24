import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  component: TermsAndPrivacy,
});

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {isOpen ? (
          <Minus size={16} strokeWidth={1.5} className="text-muted-foreground" />
        ) : (
          <Plus size={16} strokeWidth={1.5} className="text-muted-foreground" />
        )}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-xs text-muted-foreground leading-relaxed space-y-4 max-w-2xl whitespace-pre-line font-light">
          {children}
        </div>
      </div>
    </div>
  );
}

function TermsAndPrivacy() {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<"terms" | "privacy" | "cookies">("terms");
  const isTr = i18n.language?.startsWith("tr");

  const TabButton = ({ id, label }: { id: typeof activeTab; label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`pb-4 text-xs tracking-[0.2em] uppercase font-medium transition-all ${
        activeTab === id ? "border-b-2 border-foreground text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-24 md:py-32">
        {/* TAB SEÇENEKLERİ */}
        <div className="flex space-x-8 border-b border-white/10 mb-12">
          <TabButton id="terms" label={isTr ? "Kullanım Şartları" : "Terms & Conditions"} />
          <TabButton id="privacy" label={isTr ? "Gizlilik Politikası" : "Privacy Policy"} />
          <TabButton id="cookies" label={isTr ? "Çerez Politikası" : "Cookie Policy"} />
        </div>

        {/* CONTENT */}
        {activeTab === "terms" && (
           <div className="space-y-6">
             <h1 className="text-base font-normal tracking-wide uppercase">SVAMP – {isTr ? "Kullanım Şartları" : "Terms & Conditions"}</h1>
             {/* Buraya mevcut Terms içeriğini yapıştırabilirsin */}
           </div>
        )}

        {activeTab === "privacy" && (
           <div className="space-y-6">
             <h1 className="text-base font-normal tracking-wide uppercase">SVAMP – {isTr ? "Gizlilik Politikası" : "Privacy Policy"}</h1>
             {/* Buraya mevcut Privacy içeriğini yapıştırabilirsin */}
           </div>
        )}

        {activeTab === "cookies" && (
          <div className="space-y-6">
            <h1 className="text-base font-normal tracking-wide uppercase">SVAMP – {isTr ? "Çerez Politikası" : "Cookie Policy"}</h1>
            <div className="border-t border-white/10">
              <AccordionItem title={isTr ? "1. Çerez Nedir?" : "1. What is a Cookie?"}>
                {isTr 
                  ? "Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınız, akıllı telefonunuz veya tabletiniz gibi cihazlarınıza yerleştirilen küçük metin dosyalarıdır. Çerezler, web sitesinin daha verimli çalışmasını sağlar."
                  : "Cookies are small text files placed on your devices, such as computers, smartphones, or tablets, when you visit a website. Cookies enable the website to function more efficiently."}
              </AccordionItem>
              <AccordionItem title={isTr ? "2. Web Sitemizde Kullanılan Çerez Türleri" : "2. Types of Cookies Used on Our Website"}>
                {isTr ? (
                  <>
                    <p><strong>2.1. Kesinlikle Gerekli / Teknik Çerezler:</strong> Sitenin temel fonksiyonları için zorunludur.</p>
                    <p><strong>2.2. Performans ve Analitik Çerezler:</strong> Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur (Örn: Google Analytics).</p>
                    <p><strong>2.3. Fonksiyonel Çerezler:</strong> Dil seçimi gibi tercihlerinizi hatırlar.</p>
                    <p><strong>2.4. Hedefleme ve Pazarlama Çerezleri:</strong> İlgi alanlarınıza göre reklam sunar (Örn: Meta Pixel, Google Ads).</p>
                  </>
                ) : (
                  <>
                    <p><strong>2.1. Strictly Necessary / Technical Cookies:</strong> Essential for basic functions.</p>
                    <p><strong>2.2. Performance and Analytical Cookies:</strong> Help us understand how visitors use the site (e.g., Google Analytics).</p>
                    <p><strong>2.3. Functional Cookies:</strong> Remember your preferences like language selection.</p>
                    <p><strong>2.4. Targeting and Marketing Cookies:</strong> Deliver customized ads based on your interests (e.g., Meta Pixel, Google Ads).</p>
                  </>
                )}
              </AccordionItem>
              <AccordionItem title={isTr ? "3. Çerez Kullanım Amaçları" : "3. Purposes of Using Cookies"}>
                {isTr 
                  ? "Çerezleri kullanıcı deneyimini en üst düzeyde tutmak, site performansını ölçmek ve sizlere daha kişiselleştirilmiş hizmetler sunmak amacıyla kullanıyoruz."
                  : "We use cookies to maintain the user experience at the highest level, measure site performance, and provide you with more personalized services."}
              </AccordionItem>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
