import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/delivery")({
  component: DeliveryPage,
});

function DeliveryPage() {
  const { i18n } = useTranslation();
  const isTr = i18n.language?.startsWith("tr");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-24 md:py-32 space-y-12">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <h1 className="text-base font-normal tracking-wide uppercase">
            {isTr ? "Teslimat Bilgileri" : "Delivery Information"}
          </h1>
          <p className="text-xs text-muted-foreground">
            {isTr ? "Sipariş süreçleri ve gönderim süreleri hakkında" : "About order processing and shipping times"}
          </p>
        </div>

        <div className="text-xs space-y-8 font-light leading-relaxed text-muted-foreground">
          {isTr ? (
            <>
              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">1. Yurt İçi Gönderim (Türkiye)</h2>
                <p>Türkiye içinden verilen tüm siparişler için tahmini teslimat süresi 5–7 iş günüdür.</p>
                <p>Siparişiniz kargoya verildikten sonra tarafınıza SMS ve e-posta yoluyla bir takip numarası iletilecektir.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">2. Uluslararası Gönderim</h2>
                <p>Uluslararası siparişlerin teslimat süreleri varış ülkesine, gümrük prosedürlerine ve yerel kargo şirketlerine bağlı olarak değişiklik gösterebilir.</p>
                <p>Gümrük muayeneleri, uluslararası kargo kesintileri veya mücbir sebeplerden kaynaklanan gecikmelerden SVAMP sorumlu tutulamaz.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">3. Gümrük ve İthalat Vergileri</h2>
                <p>Uluslararası gönderilerde hedef ülkede oluşabilecek gümrük vergileri, ithalat harçları veya ek işlem ücretleri tamamen alıcının sorumluluğundadır.</p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">1. Domestic Shipping (Türkiye)</h2>
                <p>The estimated delivery time for all orders placed within Türkiye is 5–7 business days.</p>
                <p>Once your order is shipped, a tracking number will be sent to you via SMS and email.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">2. International Shipping</h2>
                <p>Estimated delivery times for international orders may vary depending on the destination country, customs clearance procedures, and local carriers.</p>
                <p>SVAMP cannot be held responsible for delays caused by customs inspections, international shipping disruptions, or force majeure events.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">3. Customs & Import Taxes</h2>
                <p>For international shipments, any customs duties, import taxes, or additional clearance fees levied by the destination country are the sole responsibility of the customer.</p>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
