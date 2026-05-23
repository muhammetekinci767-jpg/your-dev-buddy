import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/returns")({
  component: ReturnsPage,
});

function ReturnsPage() {
  const { i18n } = useTranslation();
  const isTr = i18n.language?.startsWith("tr");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-24 md:py-32 space-y-12">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <h1 className="text-base font-normal tracking-wide uppercase">
            {isTr ? "İade ve Geri Ödeme" : "Returns & Refunds"}
          </h1>
          <p className="text-xs text-muted-foreground">
            {isTr ? "İade politikamız ve süreçlerimiz hakkında bilgi" : "Information about our return policy and procedures"}
          </p>
        </div>

        <div className="text-xs space-y-8 font-light leading-relaxed text-muted-foreground">
          {isTr ? (
            <>
              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">1. İade Süreleri</h2>
                <p><strong>Türkiye Siparişleri:</strong> İadeler teslimat tarihinden itibaren 14 gün içinde talep edilebilir.</p>
                <p><strong>Uluslararası Siparişler:</strong> İadeler teslimat tarihinden itibaren 30 gün içinde talep edilebilir.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">2. İade Koşulları</h2>
                <p>İade edilmek istenen ürünlerin kesinlikle kullanılmamış, giyilmemiş, deforme olmamış, orijinal durumunda ve tüm etiketleri ile ambalajı eksiksiz şekilde gönderilmesi zorunludur. Bu koşulları karşılamayan iadeler reddedilecektir.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">3. Kargo Ücretleri ve Gümrük</h2>
                <p>Kusurlu veya yanlış gönderilen ürünler haricindeki tüm iadelerde kargo ücretleri müşteriye aittir. Uluslararası iadelerde gümrük vergileri ve ithalat harçları yasal bir zorunluluk olmadıkça geri ödenmez.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">4. İletişim</h2>
                <p>İade sürecini başlatmak veya destek almak için lütfen sipariş numaranızla birlikte <strong>svamp.info@gmail.com</strong> adresi üzerinden bizimle iletişime geçin.</p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">1. Return Window</h2>
                <p><strong>Türkiye Orders:</strong> Returns may be requested within 14 days of delivery.</p>
                <p><strong>International Orders:</strong> Returns may be requested within 30 days of delivery.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">2. Return Conditions</h2>
                <p>Returned items must be unused, unworn, unwashed, and in their original condition with all tags and original packaging intact. SVAMP reserves the right to refuse returns that do not meet these criteria.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">3. Shipping & Customs Fees</h2>
                <p>Return shipping costs are the responsibility of the customer, unless the item received is faulty or incorrect. For international returns, shipping costs, customs duties, and import taxes are non-refundable.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-foreground font-medium uppercase tracking-wider">4. Contact Us</h2>
                <p>To initiate a return or for any inquiries, please contact us at <strong>svamp.info@gmail.com</strong> with your order number.</p>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
