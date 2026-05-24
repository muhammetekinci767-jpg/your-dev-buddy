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

  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");

  

  // Aktif dil Türkçe mi kontrolü

  const isTr = i18n.language?.startsWith("tr");



  return (

    <div className="min-h-screen flex flex-col bg-background text-foreground">

      <Navbar />

      

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-24 md:py-32">

        

        {/* TAB SEÇENEKLERİ */}

        <div className="flex space-x-8 border-b border-white/10 mb-12">

          <button

            onClick={() => setActiveTab("terms")}

            className={`pb-4 text-xs tracking-[0.2em] uppercase font-medium transition-all ${

              activeTab === "terms"

                ? "border-b-2 border-foreground text-foreground"

                : "text-muted-foreground hover:text-foreground"

            }`}

          >

            {isTr ? "Kullanım Şartları" : "Terms & Conditions"}

          </button>

          <button

            onClick={() => setActiveTab("privacy")}

            className={`pb-4 text-xs tracking-[0.2em] uppercase font-medium transition-all ${

              activeTab === "privacy"

                ? "border-b-2 border-foreground text-foreground"

                : "text-muted-foreground hover:text-foreground"

            }`}

          >

            {isTr ? "Gizlilik Politikası" : "Privacy Policy"}

          </button>

        </div>



        {/* ----------------- TERMS & CONDITIONS BÖLÜMÜ ----------------- */}

        {activeTab === "terms" && (

          <div className="space-y-6">

            <div className="space-y-2 mb-8">

              <h1 className="text-base font-normal tracking-wide uppercase">

                SVAMP – {isTr ? "Kullanım Şartları" : "Terms & Conditions"}

              </h1>

              <p className="text-xs text-muted-foreground">{isTr ? "Son Güncelleme: 20 Mayıs 2026" : "Last Updated: May 20, 2026"}</p>

              <p className="text-xs text-muted-foreground pt-4 max-w-2xl leading-relaxed">

                {isTr 

                  ? "SVAMP'a hoş geldiniz. Web sitemiz Svampstudios.com'a erişerek veya kullanarak, aşağıdaki Kullanım Şartları'na uymayı ve bunlarla bağlı kalmayı kabul etmiş olursunuz. Lütfen hizmetlerimizi kullanmadan önce bunları dikkatlice okuyun."

                  : "Welcome to SVAMP. By accessing or using our website, Svampstudios.com, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our services."}

              </p>

            </div>



            <div className="border-t border-white/10">

              {isTr ? (

                <>

                  <AccordionItem title="1. Genel Bilgiler">

                    <p>Bu web sitesi Türkiye merkezli SVAMP tarafından işletilmektedir. Site genelinde geçen “biz”, “bize” ve “bizim” ifadeleri SVAMP'ı temsil eder.</p>

                    <p>Web sitemizi ziyaret ederek ve/veya bizden bir şey satın alarak “Hizmetimize” dahil olur ve burada atıfta bulunulan tüm ek politikalar dahil olmak üzere bu Kullanım Şartları'na bağlı kalmayı kabul edersiniz.</p>

                    <p>Bu Şartların herhangi bir bölümünü önceden bildirimde bulunmaksızın güncelleme, değiştirme veya yenisiyle değiştirme hakkını saklı tutarız.</p>

                  </AccordionItem>



                  <AccordionItem title="2. Uygunluk">

                    <p>Bu web sitesini kullanarak şunları onaylamış olursunuz:</p>

                    <p>• Ülkenizde veya bölgenizde yasal reşit olma yaşındasınız veya</p>

                    <p>• Bu web sitesini kullanmak için bir ebeveyn veya yasal vasinin iznine sahipsiniz.</p>

                    <p>Ürünlerimizi veya hizmetlerimizi herhangi bir yasa dışı veya yetkisiz amaç için kullanamazsınız.</p>

                  </AccordionItem>



                  <AccordionItem title="3. Ürünler & Hizmetler">

                    <p>SVAMP, Shopify aracılığıyla dünya çapında fiziksel giyim ve moda odaklı ürünler satmaktadır.</p>

                    <p>Ürünlerimizi mümkün olduğunca doğru göstermek için her türlü çabayı gösteriyoruz. Ancak renkler, dokular ve detaylar ekran ayarlarınıza ve üretim farklılıklarına bağlı olarak biraz değişiklik gösterebilir.</p>

                    <p>Tüm ürünler stok durumuna tabidir.</p>

                    <p>Herhangi bir ürün veya hizmetin miktarlarını sınırlama, ürünleri dilediğimiz zaman yayından kaldırma, herhangi bir nedenle herhangi birine hizmet vermeyi reddetme ve siparişleri kendi takdirimize bağlı olarak iptal etme veya reddetme hakkını saklı tutarız.</p>

                  </AccordionItem>



                  <AccordionItem title="4. Fiyatlandırma & Ödeme">

                    <p>Web sitesinde görüntülenen tüm fiyatlar önceden bildirilmeksizin değiştirilebilir.</p>

                    <p>SVAMP; fiyatlandırma, indirimler, promosyonlar ve ürün stok durumunu dilediği zaman değiştirme hakkını saklı tutar.</p>

                    <p>Ödemeler, PayTR ve Shopify destekli ödeme sistemleri aracılığıyla güvenli bir şekilde işlenir.</p>

                    <p>Ek banka ücretleri, para birimi dönüştürme ücretleri, gümrük vergileri, ithalat vergileri veya uluslararası işlem ücretlerinden sorumlu değiliz.</p>

                  </AccordionItem>



                  <AccordionItem title="5. Kargo & Teslimat">

                    <p><strong>Yurt İçi Kargo (Türkiye):</strong><br />Tahmini teslimat süresi: 5–7 iş günü.</p>

                    <p><strong>Uluslararası Kargo:</strong><br />Tahmini teslimat süreleri varış ülkesine, gümrük işlemlerine ve yerel kargo şirketlerine bağlı olarak değişiklik gösterebilir.</p>

                    <p>Gümrük muayeneleri, uluslararası kargo kesintileri, müşteri tarafından yanlış kargo bilgisi girilmesi veya mücbir sebeplerden kaynaklanan gecikmelerden SVAMP sorumlu değildir. Kargo bilgilerinin doğruluğundan müşteriler sorumludur.</p>

                  </AccordionItem>



                  <AccordionItem title="6. İade & Geri Ödeme">

                    <p><strong>Türkiye Siparişleri:</strong><br />İadeler teslimat tarihinden itibaren 14 gün içinde talep edilebilir. Kusurlu ürünler haricinde iade kargo ücreti alıcıya aittir.</p>

                    <p><strong>Uluslararası Siparişler:</strong><br />İadeler teslimat tarihinden itibaren 30 gün içinde talep edilebilir.</p>

                    <p>İade edilen ürünler kullanılmamış, giyilmemiş, orijinal durumunda olmalı, orijinal ambalajı ve etiketlerini içermelidir. SVAMP, bu koşulları karşılamayan iadeleri reddetme hakkını saklı tutar. Kargo ücretleri, gümrük vergileri ve ithalat vergileri yasal bir zorunluluk olmadıkça iade edilmez.</p>

                  </AccordionItem>



                  <AccordionItem title="7. Ön Sipariş (Pre-Order) Ürünler">

                    <p>Bazı koleksiyonlar veya ürünler ön sipariş (pre-order) olarak sunulabilir.</p>

                    <p>Bir ön sipariş ürünü satın alarak, üretim ve kargo sürelerinin standart siparişlerden daha uzun olabileceğini, tahmini teslimat tarihlerinin garanti edilmediğini ve üretim veya lojistik koşullar nedeniyle gecikmeler yaşanabileceğini kabul etmiş olursunuz.</p>

                    <p>SVAMP, gerektiğinde ön sipariş sürecini değiştirme veya erteleme hakkını saklı tutar. Üretim başladıktan sonra ön sipariş iptalleri veya iadeleri sınırlandırılabilir.</p>

                  </AccordionItem>



                  <AccordionItem title="8. Fikrî Mülkiyet">

                    <p>Logolar, grafikler, tasarımlar, ürün görselleri, markalama, metinler, çizimler ve medya dahil ancak bunlarla sınırlı olmamak üzere bu web sitesindeki tüm içerik SVAMP'ın mülkiyetindedir ve geçerli fikri mülkiyet ve telif hakkı yasalarıyla korunmaktadır.</p>

                    <p>Web sitesi içeriğinin yetkisiz olarak kopyalanması, çoğaltılması, dağıtılması, yeniden satılması veya ticari amaçla kullanılması kesinlikle yasaktır.</p>

                  </AccordionItem>



                  <AccordionItem title="9. Yasaklı Kullanım">

                    <p>Web sitesini yasa dışı amaçlar için kullanmamayı, web sitesi güvenliğine müdahale etmeye çalışmamayı, web sitesi içeriğini kopyalamamayı veya kötüye kullanmamayı, kötü amaçlı kod veya zararlı yazılım yüklememeyi, web sitesi aracılığıyla başkalarını taciz etmemeyi veya zarar vermemeyi kabul edersiniz.</p>

                    <p>Bu şartların ihlali, hizmetlerimize erişiminizin sonlandırılmasına neden olabilir.</p>

                  </AccordionItem>



                  <AccordionItem title="10. Sorumluluğun Sınırlandırılması">

                    <p>SVAMP; dolaylı veya neticede ortaya çıkan zararlardan, kar kayıplarından, kargo gecikmelerinden, üçüncü taraf hizmet kesintilerinden veya ürünlerin yanlış kullanımından kaynaklanan sorunlardan sorumlu tutulamaz.</p>

                    <p>Tüm ürünler ve hizmetler "olduğu gibi" ve "mevcut olduğu sürece" sunulmaktadır.</p>

                  </AccordionItem>



                  <AccordionItem title="11. Üçüncü Taraf Hizmetleri">

                    <p>Web sitemiz, Shopify ve ödeme sağlayıcıları dahil olmak üzere üçüncü taraf platformlara bağlantılar veya entegrasyonlar içerebilir.</p>

                    <p>Üçüncü taraf web sitelerinden, hizmetlerinden, politikalarından veya içeriklerinden sorumlu değiliz.</p>

                  </AccordionItem>



                  <AccordionItem title="12. Şartlarda Değişiklik">

                    <p>Bu Kullanım Şartları'nı dilediğimiz zaman güncelleme veya değiştirme hakkını saklı tutarız. Herhangi bir değişikliğin ardından web sitesini kullanmaya devam etmeniz, bu değişiklikleri kabul ettiğiniz anlamına gelir.</p>

                  </AccordionItem>



                  <AccordionItem title="13. İletişim Bilgileri">

                    <p>Bu Kullanım Şartları ile ilgili sorularınız için lütfen bizimle iletişime geçin:</p>

                    <p>SVAMP<br />Türkiye<br />E-posta: svamp.info@gmail.com</p>

                  </AccordionItem>

                </>

              ) : (

                <>

                  <AccordionItem title="1. General Information">

                    <p>This website is operated by SVAMP, based in Türkiye. Throughout the site, the terms “we,” “us,” and “our” refer to SVAMP.</p>

                    <p>By visiting our website and/or purchasing something from us, you engage in our “Service” and agree to be bound by these Terms & Conditions, including all additional policies referenced herein.</p>

                    <p>We reserve the right to update, modify, or replace any part of these Terms at any time without prior notice.</p>

                  </AccordionItem>



                  <AccordionItem title="2. Eligibility">

                    <p>By using this website, you confirm that:</p>

                    <p>• You are at least the age of majority in your country or region, or</p>

                    <p>• You have permission from a parent or legal guardian to use this website.</p>

                    <p>You may not use our products or services for any illegal or unauthorized purpose.</p>

                  </AccordionItem>



                  <AccordionItem title="3. Products & Services">

                    <p>SVAMP sells physical apparel and fashion-related products worldwide through Shopify.</p>

                    <p>We make every effort to display our products as accurately as possible. However, colors, textures, and details may vary slightly depending on screen settings and production differences.</p>

                    <p>All products are subject to availability.</p>

                    <p>We reserve the right to: limit quantities of any products or services, discontinue products at any time, refuse service to anyone for any reason, and cancel or reject orders at our sole discretion.</p>

                  </AccordionItem>



                  <AccordionItem title="4. Pricing & Payment">

                    <p>All prices displayed on the website are subject to change without notice.</p>

                    <p>SVAMP reserves the right to modify pricing, discounts, promotions, and product availability at any time.</p>

                    <p>Payments are securely processed through PayTR and Shopify-supported payment systems.</p>

                    <p>We are not responsible for any additional bank fees, currency conversion fees, customs duties, import taxes, or international transaction charges.</p>

                  </AccordionItem>



                  <AccordionItem title="5. Shipping & Delivery">

                    <p><strong>Domestic Shipping (Türkiye):</strong><br />Estimated delivery time: 5–7 business days</p>

                    <p><strong>International Shipping:</strong><br />Estimated delivery times may vary depending on the destination country, customs procedures, and local shipping carriers.</p>

                    <p>SVAMP is not responsible for delays caused by customs inspections, international shipping disruptions, incorrect shipping information provided by the customer, or force majeure events. Customers are responsible for ensuring their shipping information is accurate.</p>

                  </AccordionItem>



                  <AccordionItem title="6. Returns & Refunds">

                    <p><strong>Türkiye Orders:</strong><br />Returns may be requested within 14 days of delivery. Return shipping costs are born by the customer unless the product is faulty.</p>

                    <p><strong>International Orders:</strong><br />Returns may be requested within 30 days of delivery.</p>

                    <p>Returned items must be unused and unworn, in original condition, and include original packaging and tags. SVAMP reserves the right to refuse returns that do not meet these conditions.</p>

                    <p>Shipping costs, customs fees, and import taxes are non-refundable unless otherwise required by law.</p>

                  </AccordionItem>



                  <AccordionItem title="7. Pre-Order Products">

                    <p>Some collections or products may be offered as pre-orders.</p>

                    <p>By purchasing a pre-order item, you acknowledge that production and shipping times may be longer than standard orders, estimated delivery dates are not guaranteed, and delays may occur due to manufacturing or logistical circumstances.</p>

                    <p>SVAMP reserves the right to modify or delay pre-order fulfillment when necessary. Pre-order cancellations or refunds may be limited once production has started.</p>

                  </AccordionItem>



                  <AccordionItem title="8. Intellectual Property">

                    <p>All content on this website, including but not limited to: logos, graphics, designs, product visuals, branding, text, artwork, and media, is the property of SVAMP and protected by applicable intellectual property and copyright laws.</p>

                    <p>Unauthorized copying, reproduction, distribution, resale, or commercial use of any website content is strictly prohibited.</p>

                  </AccordionItem>



                  <AccordionItem title="9. Prohibited Use">

                    <p>You agree not to: use the website for unlawful purposes, attempt to interfere with website security, copy or exploit website content, upload malicious code or harmful software, or harass, abuse, or harm others through the website.</p>

                    <p>Violation of these Terms may result in termination of access to our services.</p>

                  </AccordionItem>



                  <AccordionItem title="10. Limitation of Liability">

                    <p>SVAMP shall not be held liable for: indirect or consequential damages, lost profits, shipping delays, third-party service interruptions, or issues arising from misuse of products.</p>

                    <p>All products and services are provided “as is” and “as available.”</p>

                  </AccordionItem>



                  <AccordionItem title="11. Third-Party Services">

                    <p>Our website may contain links or integrations with third-party platforms, including Shopify and payment providers.</p>

                    <p>We are not responsible for third-party websites, services, policies, or content.</p>

                  </AccordionItem>



                  <AccordionItem title="12. Changes to Terms">

                    <p>We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the website following any changes constitutes acceptance of those changes.</p>

                  </AccordionItem>



                  <AccordionItem title="13. Contact Information">

                    <p>For questions regarding these Terms & Conditions, please contact:</p>

                    <p>SVAMP<br />Türkiye<br />Email: svamp.info@gmail.com</p>

                  </AccordionItem>

                </>

              )}

            </div>

          </div>

        )}



        {/* ----------------- PRIVACY POLICY BÖLÜMÜ ----------------- */}

        {activeTab === "privacy" && (

          <div className="space-y-6">

            <div className="space-y-2 mb-8">

              <h1 className="text-base font-normal tracking-wide uppercase">

                SVAMP – {isTr ? "Gizlilik Politikası" : "Privacy Policy"}

              </h1>

              <p className="text-xs text-muted-foreground">{isTr ? "Son Güncelleme: 20 Mayıs 2026" : "Last Updated: May 20, 2026"}</p>

              <p className="text-xs text-muted-foreground pt-4 max-w-2xl leading-relaxed">

                {isTr

                  ? "SVAMP'ta gizliliğinize değer veriyoruz. Bu Gizlilik Politikası, Svampstudios.com adresini ziyaret ettiğinizde veya kullandığınızda kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı, koruduğumuzu ve işlediğimizi açıklar. Web sitemizi kullanarak bu Gizlilik Politikası'nda açıklanan uygulamaları kabul etmiş olursunuz."

                  : "At SVAMP, we value your privacy. This Privacy Policy explains how we collect, use, protect, and process your personal information when you visit or use Svampstudios.com. By using our website, you agree to the practices described in this Privacy Policy."}

              </p>

            </div>



            <div className="border-t border-white/10">

              {isTr ? (

                <>

                  <AccordionItem title="1. Topladığımız Bilgiler">

                    <p>SVAMP aşağıdaki kişisel bilgileri toplayabilir:</p>

                    <p><strong>Kişisel & İletişim Bilgileri:</strong> Tam ad, e-posta adresi, telefon numarası, teslimat ve fatura adresi.</p>

                    <p><strong>Sipariş & Ödeme Bilgileri:</strong> Sipariş detayları, satın alma geçmişi, ödeme yöntemi bilgileri. Ödemeler üçüncü taraf sağlayıcılar aracılığıyla güvenli bir şekilde işlenir. SVAMP, kredi kartı bilgilerinizi doğrudan saklamaz veya bu bilgilere erişemez.</p>

                    <p><strong>Teknik Bilgiler:</strong> IP adresi, tarayıcı bilgileri, cihaz türü, çerez verileri, web sitesi kullanım etkinliği.</p>

                  </AccordionItem>



                  <AccordionItem title="2. Bilgilerinizi Nasıl Kullanıyoruz">

                    <p>Toplanan bilgiler aşağıdaki amaçlar için kullanılabilir:</p>

                    <p>Siparişlerin işlenmesi ve teslim edilmesi, müşteri desteği sağlanması, müşteri hesaplarının oluşturulması ve yönetilmesi, sipariş güncellemeleri ve bildirimlerinin gönderilmesi, pazarlama ve promosyon e-postalarının gönderilmesi, web sitesi performansının ve kullanıcı deneyiminin iyileştirilmesi, dolandırıcılığın önlenmesi ve web sitesi güvenliğinin sağlanması.</p>

                  </AccordionItem>



                  <AccordionItem title="3. Analitik & Reklam Araçları">

                    <p>SVAMP şu analitik ve reklam araçlarını kullanabilir: Google Analytics, Meta Pixel, TikTok Pixel, Shopify analitik araçları ve e-posta pazarlama hizmetleri.</p>

                    <p>Bu araçlar, hizmetlerimizi ve pazarlama faaliyetlerimizi geliştirmek amacıyla kullanıcı davranışı, web sitesi etkileşimleri ve reklam performansıyla ilgili veriler toplayabilir.</p>

                  </AccordionItem>



                  <AccordionItem title="4. Çerezler (Cookies)">

                    <p>Web sitemiz, kullanıcı deneyimini ve web sitesi işlevselliğini geliştirmek için çerezleri kullanır.</p>

                    <p>Çerezler şu amaçlarla kullanılabilir: Oturum yönetimi, alışveriş sepeti işlevselliği, web sitesi performans analizi, reklam ve yeniden pazarlama, kullanıcı tercihlerinin hatırlanması. Daha fazla bilgi için lütfen Çerez Politikamızı inceleyin.</p>

                  </AccordionItem>



                  <AccordionItem title="5. Bilgilerin Paylaşılması">

                    <p>SVAMP kişisel bilgilerinizi satmaz veya kiralamaz.</p>

                    <p>Ancak bilgileriniz, gerektiğinde aşağıdakiler dahil olmak üzere güvenilir üçüncü taraf hizmet sağlayıcılarıyla paylaşılabilir: Shopify, PayTR, kargo ve lojistik sağlayıcıları, analitik ve reklam hizmeti sağlayıcıları. Bilgiler yalnızca operasyonel ve hizmetle ilgili amaçlar doğrultusunda paylaşılır.</p>

                  </AccordionItem>



                  <AccordionItem title="6. Veri Güvenliği">

                    <p>SVAMP, kişisel bilgilerinizi korumak için makul teknik ve kurumsal güvenlik önlemleri uygular. Ancak, internet üzerinden yapılan hiçbir veri iletim yönteminin tamamen güvenli olduğu garanti edilemez.</p>

                  </AccordionItem>



                  <AccordionItem title="7. Uluslararası Veri Transferleri">

                    <p>Web sitemizi kullanarak, bilgileriniz üçüncü taraf hizmetler veya altyapı sağlayıcıları aracılığıyla Türkiye dışında işlenebilir veya saklanabilir. Bu sağlayıcılar kendi veri koruma standartlarını uygulayabilirler.</p>

                  </AccordionItem>



                  <AccordionItem title="8. Haklarınız">

                    <p>Geçerli yasalara bağlı olarak, kullanıcılar şu haklara sahip olabilir: Kişisel bilgilerine erişme, düzeltme talep etme, verilerinin silinmesini talep etme ve pazarlama iletişimlerinden ayrılma. Bu haklardan herhangi birini kullanmak için lütfen bizimle iletişime geçin.</p>

                  </AccordionItem>



                  <AccordionItem title="9. Çocukların Gizliliği">

                    <p>SVAMP, 13 yaşın altındaki bireylerden bilerek kişisel bilgi toplamaz. Bu tür bilgilerin tespit edilmesi durumunda sistemlerimizden kaldırılabilir.</p>

                  </AccordionItem>



                  <AccordionItem title="10. Gizlilik Politikasındaki Değişiklikler">

                    <p>SVAMP, bu Gizlilik Politikası'nı dilediği zaman güncelleme veya değiştirme hakkını saklı tutar. Herhangi bir güncelleme, web sitesinde yayınlandığı andan itibaren derhal yürürlüğe girer.</p>

                  </AccordionItem>



                  <AccordionItem title="11. İletişim Bilgileri">

                    <p>Bu Gizlilik Politikası ile ilgili sorularınız için lütfen bizimle iletişime geçin:</p>

                    <p>SVAMP<br />Türkiye<br />E-posta: svamp.info@gmail.com</p>

                  </AccordionItem>

                </>

              ) : (

                <>

                  <AccordionItem title="1. Information We Collect">

                    <p>SVAMP may collect the following personal information:</p>

                    <p><strong>Personal & Contact Information:</strong> Full name, email address, phone number, shipping and billing address.</p>

                    <p><strong>Order & Payment Information:</strong> Order details, purchase history, payment method information. Payments are securely processed through third-party providers. SVAMP does not directly store or access your credit card information.</p>

                    <p><strong>Technical Information:</strong> IP address, browser information, device type, cookie data, website usage activity.</p>

                  </AccordionItem>



                  <AccordionItem title="2. How We Use Your Information">

                    <p>The collected information may be used for the following purposes:</p>

                    <p>Processing and delivering orders, providing customer support, creating and managing customer accounts, sending order updates and notifications, sending marketing and promotional emails, improving website performance and user experience, and preventing fraud or maintaining website security.</p>

                  </AccordionItem>



                  <AccordionItem title="3. Analytics & Advertising Tools">

                    <p>SVAMP may use the following analytics and advertising tools: Google Analytics, Meta Pixel, TikTok Pixel, Shopify analytics tools, and email marketing services.</p>

                    <p>These tools may collect data related to user behavior, website interactions, and advertising performance in order to improve our services and marketing activities.</p>

                  </AccordionItem>



                  <AccordionItem title="4. Cookies">

                    <p>Our website uses cookies to improve user experience and website functionality.</p>

                    <p>Cookies may be used for: session management, shopping cart functionality, website performance analysis, advertising and remarketing, and remembering user preferences. For more information, please review our Cookie Policy.</p>

                  </AccordionItem>



                  <AccordionItem title="5. Sharing of Information">

                    <p>SVAMP does not sell or rent your personal information.</p>

                    <p>However, your information may be shared with trusted third-party service providers when necessary, including: Shopify, PayTR, shipping and logistics providers, and analytics or advertising service providers. Information is shared only for operational and service-related purposes.</p>

                  </AccordionItem>



                  <AccordionItem title="6. Data Security">

                    <p>SVAMP implements reasonable technical and organizational security measures to protect your personal information.</p>

                    <p>However, no method of data transmission over the internet can be guaranteed to be completely secure.</p>

                  </AccordionItem>



                  <AccordionItem title="7. International Data Transfers">

                    <p>By using our website, your information may be processed or stored outside of Türkiye through third-party services or infrastructure providers. These providers may apply their own data protection standards and practices.</p>

                  </AccordionItem>



                  <AccordionItem title="8. Your Rights">

                    <p>Depending on applicable laws, users may have the right to: access their personal information, request corrections, request deletion of their data, and opt out of marketing communications. To exercise any of these rights, please contact us.</p>

                  </AccordionItem>



                  <AccordionItem title="9. Children’s Privacy">

                    <p>SVAMP does not knowingly collect personal information from individuals under the age of 13. If such information is identified, it may be removed from our systems.</p>

                  </AccordionItem>



                  <AccordionItem title="10. Changes to This Privacy Policy">

                    <p>SVAMP reserves the right to update or modify this Privacy Policy at any time. Any updates become effective immediately upon publication on the website.</p>

                  </AccordionItem>



                  <AccordionItem title="11. Contact Information">

                    <p>For questions regarding this Privacy Policy, please contact:</p>

                    <p>SVAMP<br />Türkiye<br />Email: svamp.info@gmail.com</p>

                  </AccordionItem>

                  {activeTab === "cookies" && (
          <div className="space-y-6">
            <h1 className="text-base font-normal tracking-wide uppercase">SVAMP – {isTr ? "Çerez Politikası" : "Cookie Policy"}</h1>
            <div className="border-t border-white/10">
              <AccordionItem title={isTr ? "1. Çerez Nedir?" : "1. What is a Cookie?"}>
                {isTr ? "Çerezler, siteyi ziyaret ettiğinizde cihazınıza yerleştirilen küçük dosyalardır." : "Cookies are small text files placed on your devices when you visit a website."}
              </AccordionItem>
              <AccordionItem title={isTr ? "2. Çerez Türleri" : "2. Types of Cookies"}>
                {isTr ? (
                  <>
                    <p><strong>2.1. Teknik Çerezler:</strong> Temel fonksiyonlar için gereklidir.</p>
                    <p><strong>2.2. Analitik Çerezler:</strong> Google Analytics gibi araçlarla performans ölçer.</p>
                    <p><strong>2.3. Fonksiyonel Çerezler:</strong> Tercihlerinizi hatırlar.</p>
                    <p><strong>2.4. Pazarlama Çerezleri:</strong> Meta Pixel gibi araçlarla ilgi alanına göre reklam sunar.</p>
                  </>
                ) : (
                  <>
                    <p><strong>2.1. Technical Cookies:</strong> Essential for basic functions.</p>
                    <p><strong>2.2. Analytical Cookies:</strong> Measure performance (e.g., Google Analytics).</p>
                    <p><strong>2.3. Functional Cookies:</strong> Remember your preferences.</p>
                    <p><strong>2.4. Marketing Cookies:</strong> Interest-based advertising (e.g., Meta Pixel).</p>
                  </>
                )}
              </AccordionItem>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
