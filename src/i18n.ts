import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: { women: "Women", men: "Men", denim: "Denim", newIn: "New In", search: "Search", cart: "Cart", menu: "Menu" },
      hero: { women: "Womenwear", men: "Menwear" },
      page: { comingSoon: "New collection coming soon." },
      announcement: "FREE SHIPPING ON ORDERS OVER $150. TAXES & DUTIES INCLUDED",
      mens: {
        heroTagline: "The new drop is here",
        heroCta: "Shop the collection",
        shopByCategory: "Shop by category",
        categories: { tops: "Tops", bottoms: "Bottoms", outerwear: "Outerwear", denim: "Denim", accessories: "Accessories", all: "Shop all" },
        featured: "Featured",
        newArrivals: "New arrivals",
        viewAll: "View all",
        editorialTitle: "Built for the night",
        editorialText: "Bold silhouettes, raw textures and statement pieces designed to be lived in.",
        editorialCta: "Explore"
      },
      womens: {
        heroTagline: "The new drop is here",
        heroCta: "Shop the collection",
        editorialTitle: "Effortless femininity",
        editorialText: "Soft tailoring, fluid silhouettes and refined details designed to move with you."
      },
      search: { placeholder: "Search...", suggestions: "Suggestions", close: "Close" },
      cart: { title: "Cart", empty: "Your cart is empty.", total: "Total", checkout: "Checkout with Shopify", remove: "Remove", increase: "Increase", decrease: "Decrease" },
      product: {
        notFound: "Product not found.",
        noProductsFound: "No products found",
        prev: "Previous",
        next: "Next",
        addToWishlist: "Add to wishlist",
        color: "Color",
        size: "Size",
        sizeGuide: "Size Guide",
        inStock: "In stock.",
        selectSize: "Select Size",
        addToCart: "Add to Cart",
        soldOut: "Sold Out",
        description: "Description",
        relatedWomens: "More for Women",
        relatedMens: "More for Men"
      },
      footer: {
        customerService: "Customer Service",
        brand: "Brand",
        followUs: "Follow Us",
        stayPosted: "Stay Posted",
        newsletter: "Sign up to our Newsletter for latest news, offers and updates.",
        email: "Email",
        submit: "Submit",
        rights: "© 2025 All rights reserved.",
        links: {
          contact: "Contact Us", delivery: "Delivery", returns: "Returns", sizeGuide: "Size Guide", faq: "FAQ", terms: "Terms & Conditions"
        }
      },
      info: {
        contact: [
          "We'd love to hear from you. For any questions about orders, products or collaborations, reach out to our team.",
          "Email: svampstudios.com@svampstudios.com",
          "Instagram: @svamp.studios",
          "We aim to reply within 1–2 business days."
        ],
        delivery: [
          "We ship worldwide from our studio. Orders are processed within 1–3 business days.",
          "Standard delivery: 3–7 business days.",
          "Express delivery: 1–3 business days.",
          "Shipping costs are calculated at checkout based on destination."
        ],
        returns: [
          "We offer returns within 14 days of delivery on unworn items in original condition with tags attached.",
          "To start a return, contact us at svampstudios.com@svampstudios.com with your order number.",
          "Refunds are processed within 7 business days after we receive your return.",
          "Sale items and accessories are final sale."
        ],
        sizeGuide: [
          "■ T-SHIRT & SLEEVELESS TEE",
          "Our products are produced in two double size options as S/M and L/XL in accordance with TR / EU standards.",
          "• S/M Size -> Width: 59-60 cm | Length: 62-63 cm",
          "• L/XL Size -> Width: 63-64 cm | Length: 66-67 cm",
          "Important Notes: There is an average of 4-5 cm difference between TR / EU sizes. Due to manual measurements, a variation of ±1-2 cm may be observed.",
          " ",
          "■ SWEATSHIRT",
          "Our product is produced with STANDARD (One Size) option in accordance with TR / EU standards.",
          "• STANDARD Size -> Width: 60-61 cm | Length: 63-64 cm",
          "Important Notes: Our standard size design is molded to fit different body types. Due to manual measurements, a variation of ±1-2 cm may be observed.",
          " ",
          "■ SWEATPANT",
          "Our products are produced in two double size options as S/M and L/XL in accordance with TR / EU standards.",
          "• S/M Size -> Waist: 36-37 cm | Length: 100 cm",
          "• L/XL Size -> Waist: 40-41 cm | Length: 100-102 cm",
          "Important Notes: The product features elastic cuffs and an adjustable drawcord at the waist; you can easily optimize the fit for yourself. There is an average of 2-3 cm difference between TR / EU sizes. Due to manual measurements, a variation of ±1-2 cm may be observed."
        ],
        faq: [
          "Where are your pieces made? — Designed in our studio and produced in small batches with trusted partners.",
          "What payment methods do you accept? — All major credit cards and digital wallets.",
          "Can I change or cancel my order? — Contact us within 12 hours of placing your order.",
          "Do you restock sold-out items? — Some pieces are restocked, follow us on Instagram for updates."
        ]
      },
      sizeGuide: {
        title: "Size Guide",
        importantNotes: "Important Notes:",
        women: "Women",
        men: "Men",
        unisex: "Unisex",
        tshirt: { title: "T-Shirt", notes: "Our product is produced in accordance with TR / EU standards. There is an average 4-5 cm difference between TR / EU sizes. A variation of ±1–2 cm may be observed due to manual measurements.", headers: ["Size", "Width", "Length"] },
        sleeveless: { title: "Sleeveless Tee", notes: "Our sleeveless tee is produced in accordance with TR / EU standards. There is an average 4-5 cm difference between TR / EU sizes. A variation of ±1–2 cm may be observed due to manual measurements.", headers: ["Size", "Width", "Length"] },
        sweatshirt: { title: "Sweatshirt", notes: "Our product is produced with STANDARD (One Size) option. It is molded to fit different body types. A variation of ±1–2 cm may be observed due to manual measurements.", headers: ["Size", "Width", "Length"] },
        sweatpant: { title: "Sweatpant", notes: "The product features elastic cuffs and an adjustable drawcord at the waist. There is an average 2-3 cm difference between TR / EU sizes. A variation of ±1–2 cm may be observed due to manual measurements.", headers: ["Size", "Waist", "Length"] }
      },
      delivery: {
        title: "Delivery Information",
        subtitle: "About order processing and shipping times",
        domestic: { heading: "1. Domestic Shipping (Türkiye)", p1: "The estimated delivery time for all orders placed within Türkiye is 5–7 business days.", p2: "Once your order is shipped, a tracking number will be sent to you via SMS and email." },
        international: { heading: "2. International Shipping", p1: "Estimated delivery times for international orders may vary depending on the destination country, customs clearance procedures, and local carriers.", p2: "SVAMP cannot be held responsible for delays caused by customs inspections, international shipping disruptions, or force majeure events." },
        customs: { heading: "3. Customs & Import Taxes", p1: "For international shipments, any customs duties, import taxes, or additional clearance fees levied by the destination country are the sole responsibility of the customer." }
      },
      returns: {
        title: "Returns & Refunds",
        subtitle: "Information about our return policy and procedures",
        window: { heading: "1. Return Window", tr: "Türkiye Orders:", trText: "Returns may be requested within 14 days of delivery.", intl: "International Orders:", intlText: "Returns may be requested within 30 days of delivery." },
        conditions: { heading: "2. Return Conditions", p1: "Returned items must be unused, unworn, unwashed, and in their original condition with all tags and original packaging intact. SVAMP reserves the right to refuse returns that do not meet these criteria." },
        shipping: { heading: "3. Shipping & Customs Fees", p1: "Return shipping costs are the responsibility of the customer, unless the item received is faulty or incorrect. For international returns, shipping costs, customs duties, and import taxes are non-refundable." },
        contact: { heading: "4. Contact Us", p1: "To initiate a return or for any inquiries, please contact us at", email: "svamp.info@gmail.com", p2: "with your order number." }
      },
      terms: {
        tabs: { terms: "Terms & Conditions", privacy: "Privacy Policy", cookies: "Cookie Policy" },
        lastUpdated: "Last Updated: May 20, 2026"
      },
      cookie: {
        banner: "We use cookies to improve your experience on our website. For detailed information, please review our",
        policyLink: "cookie policy",
        settings: "Settings",
        rejectAll: "Reject All",
        acceptAll: "Accept All",
        settingsTitle: "Cookie Settings",
        savePreferences: "Save Preferences",
        necessary: { label: "Necessary", desc: "Required for core site functionality. Cannot be disabled." },
        analytics: { label: "Analytics", desc: "Used to measure site performance via Google Analytics." },
        marketing: { label: "Marketing", desc: "Used for targeted ads via Meta Pixel and TikTok Pixel." }
      },
      lang: { label: "Language" }
    },
  },
  tr: {
    translation: {
      nav: { women: "Kadın", men: "Erkek", denim: "Denim", newIn: "Yeni Gelenler", search: "Ara", cart: "Sepet", menu: "Menü" },
      hero: { women: "Womenwear", men: "Menwear" },
      page: { comingSoon: "Yeni koleksiyon yakında burada." },
      announcement: "150$ ÜZERİ SİPARİŞLERDE ÜCRETSİZ KARGO. VERGİ VE GÜMRÜK DAHİL",
      mens: {
        heroTagline: "Yeni koleksiyon burada",
        heroCta: "Koleksiyonu keşfet",
        shopByCategory: "Kategoriye göre alışveriş",
        categories: { tops: "Üst Giyim", bottoms: "Alt Giyim", outerwear: "Dış Giyim", denim: "Denim", accessories: "Aksesuar", all: "Tümünü gör" },
        featured: "Öne Çıkanlar",
        newArrivals: "Yeni gelenler",
        viewAll: "Tümünü gör",
        editorialTitle: "Gece için tasarlandı",
        editorialText: "Cesur siluetler, ham dokular ve giyilmek için tasarlanmış iddialı parçalar.",
        editorialCta: "Keşfet"
      },
      womens: {
        heroTagline: "Yeni koleksiyon burada",
        heroCta: "Koleksiyonu keşfet",
        editorialTitle: "Zahmetsiz feminenlik",
        editorialText: "Yumuşak kesimler, akıcı siluetler ve seninle birlikte hareket eden zarif detaylar."
      },
      search: { placeholder: "Ara...", suggestions: "Öneriler", close: "Kapat" },
      cart: { title: "Sepet", empty: "Sepetin boş.", total: "Toplam", checkout: "Shopify ile Ödemeye Geç", remove: "Kaldır", increase: "Arttır", decrease: "Azalt" },
      product: {
        notFound: "Ürün bulunamadı.",
        noProductsFound: "Ürün bulunamadı",
        prev: "Önceki",
        next: "Sonraki",
        addToWishlist: "Favorilere ekle",
        color: "Renk",
        size: "Beden",
        sizeGuide: "Beden Rehberi",
        inStock: "Stokta var.",
        selectSize: "Beden Seç",
        addToCart: "Sepete Ekle",
        soldOut: "Tükendi",
        description: "Açıklama",
        relatedWomens: "Kadın için diğer ürünler",
        relatedMens: "Erkek için diğer ürünler"
      },
      footer: {
        customerService: "Müşteri Hizmetleri",
        brand: "Marka",
        followUs: "Bizi Takip Et",
        stayPosted: "Haberdar Ol",
        newsletter: "En son haberler, fırsatlar ve güncellemeler için bültenimize abone ol.",
        email: "E-posta",
        submit: "Gönder",
        rights: "© 2025 Tüm hakları saklıdır.",
        links: {
          contact: "İletişim", delivery: "Teslimat", returns: "İadeler", sizeGuide: "Beden Rehberi", faq: "SSS", terms: "Şartlar & Koşullar"
        }
      },
      info: {
        contact: [
          "Sizden haber almak isteriz. Sipariş, ürün veya iş birlikleri hakkındaki sorularınız için bize ulaşın.",
          "E-posta: svampstudios.com@svampstudios.com",
          "Instagram: @svamp.studios",
          "Yanıt süremiz 1–2 iş günüdür."
        ],
        delivery: [
          "Tüm dünyaya stüdyomuzdan kargolama yapıyoruz. Siparişler 1–3 iş günü içinde hazırlanır.",
          "Standart teslimat: 3–7 iş günü.",
          "Hızlı teslimat: 1–3 iş günü.",
          "Kargo ücretleri ödeme adımında varış noktasına göre hesaplanır."
        ],
        returns: [
          "Etiketleri üzerinde, kullanılmamış ürünler için teslimat tarihinden itibaren 14 gün içinde iade kabul ediyoruz.",
          "İade başlatmak için sipariş numaranızla svampstudios.com@svampstudios.com adresine yazın.",
          "İade ürünü tarafımıza ulaştıktan sonra para iadeniz 7 iş günü içinde yapılır.",
          "İndirimli ürünler ve aksesuarlar iade edilemez."
        ],
        sizeGuide: [
          "■ T-SHIRT & SLEEVELESS TEE (SIFIR KOL)",
          "Ürünümüz TR / EU standartlarına uygun olarak S/M ve L/XL olmak üzere iki çiftli beden seçeneğiyle üretilmiştir.",
          "• S/M Beden -> En: 59-60 cm | Boy: 62-63 cm",
          "• L/XL Beden -> En: 63-64 cm | Boy: 66-67 cm",
          "Önemli Notlar: TR / EU beden ölçüleri arasında ortalama 4-5 cm fark bulunmaktadır. El ile yapılan manuel ölçümler nedeniyle, belirtilen ölçülerde ±1–2 cm değişiklik görülebilir.",
          " ",
          "■ SWEATSHIRT",
          "Ürünümüz TR / EU standartlarına uygun olarak STANDART (Tek Beden) seçeneğiyle üretilmiştir.",
          "• STANDART Beden -> En: 60-61 cm | Boy: 63-64 cm",
          "Önemli Notlar: Standart beden tasarımımız farklı vücut tiplerine uyum sağlayacak şekilde kalıplanmıştır. El ile yapılan manuel ölçümler nedeniyle, belirtilen ölçülerde ±1–2 cm değişiklik görülebilir.",
          " ",
          "■ SWEATPANT (EŞOFMAN)",
          "Ürünümüz TR / EU standartlarına uygun olarak S/M ve L/XL olmak üzere iki çiftli beden seçeneğiyle üretilmiştir.",
          "• S/M Beden -> Bel: 36-37 cm | Boy: 100 cm",
          "• L/XL Beden -> Bel: 40-41 cm | Boy: 100-102 cm",
          "Önemli Notlar: Ürünün paçasında lastik, belinde ise ayarlanabilir kordon (ip) bulunmaktadır; kalıbı kendinize göre rahatça optimize edebilirsiniz. TR / EU beden ölçüleri arasında ortalama 2-3 cm fark bulunmaktadır. El ile yapılan manuel ölçümler nedeniyle, belirtilen ölçülerde ±1–2 cm değişiklik görülebilir."
        ],
        faq: [
          "Ürünlerinizi nerede üretiliyor? — Stüdyomuzda tasarlanır, güvendiğimiz iş ortaklarıyla küçük partiler halinde üretilir.",
          "Hangi ödeme yöntemlerini kabul ediyorsunuz? — Tüm büyük kredi kartları ve dijital cüzdanlar.",
          "Siparişimi değiştirebilir veya iptal edebilir miyim? — Sipariş verdikten sonraki 12 saat içinde bize ulaşın.",
          "Tükenen ürünler tekrar gelir mi? — Bazı parçalar tekrar gelir, güncellemeler için Instagram'dan bizi takip edin."
        ]
      },
      sizeGuide: {
        title: "Beden Rehberi",
        importantNotes: "Önemli Notlar:",
        women: "Kadın",
        men: "Erkek",
        unisex: "Unisex",
        tshirt: { title: "T-Shirt", notes: "Ürünümüz TR / EU standartlarına uygun olarak üretilmiştir. TR / EU beden ölçüleri arasında ortalama 4-5 cm fark bulunmaktadır. Manuel ölçümler nedeniyle ±1–2 cm değişiklik görülebilir.", headers: ["Beden (Size)", "En (Width)", "Boy (Length)"] },
        sleeveless: { title: "Sleeveless Tee", notes: "Sıfır kol ürünümüz TR / EU standartlarına uygun olarak üretilmiştir. TR / EU beden ölçüleri arasında ortalama 4-5 cm fark bulunmaktadır. Manuel ölçümler nedeniyle ±1–2 cm değişiklik görülebilir.", headers: ["Beden (Size)", "En (Width)", "Boy (Length)"] },
        sweatshirt: { title: "Sweatshirt", notes: "Ürünümüz STANDART (Tek Beden) seçeneğiyle üretilmiştir. Farklı vücut tiplerine uyum sağlayacak şekilde kalıplanmıştır. Manuel ölçümler nedeniyle ±1–2 cm değişiklik görülebilir.", headers: ["Beden (Size)", "En (Width)", "Boy (Length)"] },
        sweatpant: { title: "Sweatpant", notes: "Ürünün paçasında lastik, belinde ise ayarlanabilir kordon (ip) bulunmaktadır. TR / EU beden ölçüleri arasında ortalama 2-3 cm fark bulunmaktadır. Manuel ölçümler nedeniyle ±1–2 cm değişiklik görülebilir.", headers: ["Beden (Size)", "Bel (Waist)", "Boy (Length)"] }
      },
      delivery: {
        title: "Teslimat Bilgileri",
        subtitle: "Sipariş süreçleri ve gönderim süreleri hakkında",
        domestic: { heading: "1. Yurt İçi Gönderim (Türkiye)", p1: "Türkiye içinden verilen tüm siparişler için tahmini teslimat süresi 5–7 iş günüdür.", p2: "Siparişiniz kargoya verildikten sonra tarafınıza SMS ve e-posta yoluyla bir takip numarası iletilecektir." },
        international: { heading: "2. Uluslararası Gönderim", p1: "Uluslararası siparişlerin teslimat süreleri varış ülkesine, gümrük prosedürlerine ve yerel kargo şirketlerine bağlı olarak değişiklik gösterebilir.", p2: "Gümrük muayeneleri, uluslararası kargo kesintileri, müşteri tarafından yanlış kargo bilgisi girilmesi veya mücbir sebeplerden kaynaklanan gecikmelerden SVAMP sorumlu değildir." },
        customs: { heading: "3. Gümrük ve İthalat Vergileri", p1: "Uluslararası gönderilerde hedef ülkede oluşabilecek gümrük vergileri, ithalat harçları veya ek işlem ücretleri tamamen alıcının sorumluluğundadır." }
      },
      returns: {
        title: "İade ve Geri Ödeme",
        subtitle: "İade politikamız ve süreçlerimiz hakkında bilgi",
        window: { heading: "1. İade Süreleri", tr: "Türkiye Siparişleri:", trText: "İadeler teslimat tarihinden itibaren 14 gün içinde talep edilebilir.", intl: "Uluslararası Siparişler:", intlText: "İadeler teslimat tarihinden itibaren 30 gün içinde talep edilebilir." },
        conditions: { heading: "2. İade Koşulları", p1: "İade edilmek istenen ürünlerin kesinlikle kullanılmamış, giyilmemiş, deforme olmamış, orijinal durumunda ve tüm etiketleri ile ambalajı eksiksiz şekilde gönderilmesi zorunludur. Bu koşulları karşılamayan iadeler reddedilecektir." },
        shipping: { heading: "3. Kargo Ücretleri ve Gümrük", p1: "Kusurlu veya yanlış gönderilen ürünler haricindeki tüm iadelerde kargo ücretleri müşteriye aittir. Uluslararası iadelerde gümrük vergileri ve ithalat harçları yasal bir zorunluluk olmadıkça geri ödenmez." },
        contact: { heading: "4. İletişim", p1: "İade sürecini başlatmak veya destek almak için lütfen sipariş numaranızla birlikte", email: "svamp.info@gmail.com", p2: "adresi üzerinden bizimle iletişime geçin." }
      },
      terms: {
        tabs: { terms: "Kullanım Şartları", privacy: "Gizlilik Politikası", cookies: "Çerez Politikası" },
        lastUpdated: "Son Güncelleme: 20 Mayıs 2026"
      },
      cookie: {
        banner: "Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. Detaylı bilgi için",
        policyLink: "çerez politikamızı",
        settings: "Ayarlar",
        rejectAll: "Reddet",
        acceptAll: "Kabul Et",
        settingsTitle: "Çerez Ayarları",
        savePreferences: "Tercihleri Kaydet",
        necessary: { label: "Zorunlu", desc: "Site temel işlevleri için gereklidir. Devre dışı bırakılamaz." },
        analytics: { label: "Analitik", desc: "Site performansını ölçmek için Google Analytics kullanılır." },
        marketing: { label: "Pazarlama", desc: "Meta Pixel ve TikTok Pixel ile hedefli reklamlar için kullanılır." }
      },
      lang: { label: "Dil" }
    },
  },
  de: {
    translation: {
      nav: { women: "Damen", men: "Herren", denim: "Denim", newIn: "Neuheiten", search: "Suche", cart: "Warenkorb", menu: "Menü" },
      hero: { women: "Womenwear", men: "Menwear" },
      page: { comingSoon: "Neue Kollektion bald verfügbar." },
      announcement: "KOSTENLOSER VERSAND AB $150 BESTELLWERT. STEUERN & ZÖLLE INKLUSIVE",
      mens: {
        heroTagline: "Die neue Kollektion ist da",
        heroCta: "Kollektion entdecken",
        shopByCategory: "Nach Kategorie shoppen",
        categories: { tops: "Oberteile", bottoms: "Hosen", outerwear: "Jacken", denim: "Denim", accessories: "Accessoires", all: "Alles anzeigen" },
        featured: "Highlights",
        newArrivals: "Neuheiten",
        viewAll: "Alle ansehen",
        editorialTitle: "Gemacht für die Nacht",
        editorialText: "Mutige Silhouetten, rohe Texturen und Statement-Pieces zum Tragen.",
        editorialCta: "Entdecken"
      },
      womens: {
        heroTagline: "Die neue Kollektion ist da",
        heroCta: "Kollektion entdecken",
        editorialTitle: "Mühelose Weiblichkeit",
        editorialText: "Weiche Schnitte, fließende Silhouetten und feine Details, die sich mit dir bewegen."
      },
      search: { placeholder: "Suchen...", suggestions: "Vorschläge", close: "Schließen" },
      cart: { title: "Warenkorb", empty: "Dein Warenkorb ist leer.", total: "Gesamt", checkout: "Mit Shopify bezahlen", remove: "Entfernen", increase: "Erhöhen", decrease: "Verringern" },
      product: {
        notFound: "Produkt nicht gefunden.",
        noProductsFound: "Keine Produkte gefunden",
        prev: "Zurück",
        next: "Weiter",
        addToWishlist: "Zur Wunschliste",
        color: "Farbe",
        size: "Größe",
        sizeGuide: "Größentabelle",
        inStock: "Auf Lager.",
        selectSize: "Größe wählen",
        addToCart: "In den Warenkorb",
        soldOut: "Ausverkauft",
        description: "Beschreibung",
        relatedWomens: "Mehr für Damen",
        relatedMens: "Mehr für Herren"
      },
      footer: {
        customerService: "Kundenservice",
        brand: "Marke",
        followUs: "Folge uns",
        stayPosted: "Bleib informiert",
        newsletter: "Melde dich für unseren Newsletter an: Neuigkeiten, Angebote und Updates.",
        email: "E-Mail",
        submit: "Absenden",
        rights: "© 2025 Alle Rechte vorbehalten.",
        links: {
          contact: "Kontakt", delivery: "Lieferung", returns: "Rücksendungen", sizeGuide: "Größentabelle", faq: "FAQ", terms: "AGB & Konditionen"
        }
      },
      info: {
        contact: [
          "Wir freuen uns, von dir zu hören. Bei Fragen zu Bestellungen, Produkten oder Kooperationen melde dich gerne.",
          "E-Mail: svampstudios.com@svampstudios.com",
          "Instagram: @svamp.studios",
          "Wir antworten in der Regel innerhalb von 1–2 Werktagen."
        ],
        delivery: [
          "Wir versenden weltweit aus unserem Studio. Bestellungen werden innerhalb von 1–3 Werktagen bearbeitet.",
          "Standardversand: 3–7 Werktage.",
          "Expressversand: 1–3 Werktage.",
          "Versandkosten werden an der Kasse je nach Zielort berechnet."
        ],
        returns: [
          "Rücksendungen sind innerhalb von 14 Tagen nach Erhalt möglich, sofern die Artikel ungetragen und mit Etikett sind.",
          "Für eine Rücksendung kontaktiere uns unter svampstudios.com@svampstudios.com mit deiner Bestellnummer.",
          "Rückerstattungen erfolgen innerhalb von 7 Werktagen nach Eingang der Rücksendung.",
          "Sale-Artikel und Accessoires sind vom Umtausch ausgeschlossen."
        ],
        sizeGuide: [
          "■ T-SHIRT & ÄRMELLOSES T-SHIRT",
          "Unsere Produkte werden in zwei Doppelgrößen als S/M und L/XL in Übereinstimmung mit TR / EU-Standards hergestellt.",
          "• Größe S/M -> Breite: 59-60 cm | Länge: 62-63 cm",
          "• Größe L/XL -> Breite: 63-64 cm | Länge: 66-67 cm",
          "Wichtige Hinweise: Es gibt einen durchschnittlichen Unterschied von 4-5 cm zwischen TR / EU-Größen. Aufgrund manueller Messungen kann eine Abweichung von ±1-2 cm auftreten.",
          " ",
          "■ SWEATSHIRT",
          "Unser Produkt wird mit der Option STANDARD (Einheitsgröße) in Übereinstimmung mit TR / EU-Standards hergestellt.",
          "• STANDARD Größe -> Breite: 60-61 cm | Länge: 63-64 cm",
          "Wichtige Hinweise: Unser Standardgrößen-Design ist so geformt, dass es sich verschiedenen Körpertypen anpasst. Aufgrund manueller Messungen kann eine Abweichung von ±1-2 cm auftreten.",
          " ",
          "■ SWEATPANT (JOGGINGHOSE)",
          "Unsere Produkte werden in zwei Doppelgrößen als S/M und L/XL in Übereinstimmung mit TR / EU-Standards hergestellt.",
          "• Größe S/M -> Taille: 36-37 cm | Länge: 100 cm",
          "• Größe L/XL -> Taille: 40-41 cm | Länge: 100-102 cm",
          "Wichtige Hinweise: Das Produkt verfügt über elastische Bündchen und einen verstellbaren Kordelzug am Bund. Es gibt einen durchschnittlichen Unterschied von 2-3 cm zwischen TR / EU-Größen. Aufgrund manueller Messungen kann eine Abweichung von ±1-2 cm auftreten."
        ],
        faq: [
          "Wo werden eure Stücke produziert? — Designt in unserem Studio und in kleinen Chargen mit vertrauten Partnern produziert.",
          "Welche Zahlungsmethoden akzeptiert ihr? — Alle gängigen Kreditkarten und digitalen Wallets.",
          "Kann ich meine Bestellung ändern oder stornieren? — Melde dich innerhalb von 12 Stunden nach der Bestellung.",
          "Werden ausverkaufte Artikel nachproduziert? — Einige Stücke ja, folge uns auf Instagram für Updates."
        ]
      },
      sizeGuide: {
        title: "Größentabelle",
        importantNotes: "Wichtige Hinweise:",
        women: "Damen",
        men: "Herren",
        unisex: "Unisex",
        tshirt: { title: "T-Shirt", notes: "Unser Produkt wird in Übereinstimmung mit TR / EU-Standards hergestellt. Es gibt einen durchschnittlichen Unterschied von 4-5 cm. Aufgrund manueller Messungen kann eine Abweichung von ±1-2 cm auftreten.", headers: ["Größe", "Breite", "Länge"] },
        sleeveless: { title: "Ärmelloses Tee", notes: "Unser ärmelloses Produkt wird in Übereinstimmung mit TR / EU-Standards hergestellt. Es gibt einen durchschnittlichen Unterschied von 4-5 cm. Aufgrund manueller Messungen kann eine Abweichung von ±1-2 cm auftreten.", headers: ["Größe", "Breite", "Länge"] },
        sweatshirt: { title: "Sweatshirt", notes: "Unser Produkt wird mit der STANDARD (Einheitsgröße) Option hergestellt. Es ist so geformt, dass es sich verschiedenen Körpertypen anpasst. Aufgrund manueller Messungen kann eine Abweichung von ±1-2 cm auftreten.", headers: ["Größe", "Breite", "Länge"] },
        sweatpant: { title: "Sweatpant", notes: "Das Produkt verfügt über elastische Bündchen und einen verstellbaren Kordelzug. Es gibt einen durchschnittlichen Unterschied von 2-3 cm zwischen TR / EU-Größen. Aufgrund manueller Messungen kann eine Abweichung von ±1-2 cm auftreten.", headers: ["Größe", "Taille", "Länge"] }
      },
      delivery: {
        title: "Lieferinformationen",
        subtitle: "Über Bestellabwicklung und Lieferzeiten",
        domestic: { heading: "1. Inlandsversand (Türkiye)", p1: "Die geschätzte Lieferzeit für alle Bestellungen innerhalb der Türkiye beträgt 5–7 Werktage.", p2: "Sobald deine Bestellung versandt wurde, erhältst du eine Sendungsverfolgungsnummer per SMS und E-Mail." },
        international: { heading: "2. Internationaler Versand", p1: "Die geschätzten Lieferzeiten für internationale Bestellungen können je nach Zielland, Zollabfertigungsverfahren und lokalen Transportunternehmen variieren.", p2: "SVAMP haftet nicht für Verzögerungen durch Zollprüfungen, internationale Versandunterbrechungen oder höhere Gewalt." },
        customs: { heading: "3. Zoll & Einfuhrsteuern", p1: "Bei internationalen Sendungen liegen Zollgebühren, Einfuhrsteuern oder zusätzliche Abfertigungsgebühren im Zielland in der alleinigen Verantwortung des Kunden." }
      },
      returns: {
        title: "Rücksendungen & Erstattungen",
        subtitle: "Informationen zu unserer Rückgaberichtlinie",
        window: { heading: "1. Rückgabefrist", tr: "Türkiye-Bestellungen:", trText: "Rücksendungen können innerhalb von 14 Tagen nach Lieferung beantragt werden.", intl: "Internationale Bestellungen:", intlText: "Rücksendungen können innerhalb von 30 Tagen nach Lieferung beantragt werden." },
        conditions: { heading: "2. Rückgabebedingungen", p1: "Zurückgesandte Artikel müssen unbenutzt, ungetragen, ungewaschen und in ihrem Originalzustand mit allen Etiketten und Originalverpackungen sein. SVAMP behält sich das Recht vor, Rücksendungen abzulehnen." },
        shipping: { heading: "3. Versand- & Zollgebühren", p1: "Die Versandkosten für Rücksendungen trägt der Kunde, es sei denn, der Artikel ist fehlerhaft oder falsch. Für internationale Rücksendungen sind Versandkosten, Zollgebühren und Einfuhrsteuern nicht erstattungsfähig." },
        contact: { heading: "4. Kontakt", p1: "Um eine Rücksendung einzuleiten, kontaktiere uns bitte unter", email: "svamp.info@gmail.com", p2: "mit deiner Bestellnummer." }
      },
      terms: {
        tabs: { terms: "AGB", privacy: "Datenschutz", cookies: "Cookie-Richtlinie" },
        lastUpdated: "Zuletzt aktualisiert: 20. Mai 2026"
      },
      cookie: {
        banner: "Wir verwenden Cookies, um dein Erlebnis auf unserer Website zu verbessern. Weitere Informationen findest du in unserer",
        policyLink: "Cookie-Richtlinie",
        settings: "Einstellungen",
        rejectAll: "Alle ablehnen",
        acceptAll: "Alle akzeptieren",
        settingsTitle: "Cookie-Einstellungen",
        savePreferences: "Einstellungen speichern",
        necessary: { label: "Notwendig", desc: "Für grundlegende Website-Funktionen erforderlich. Kann nicht deaktiviert werden." },
        analytics: { label: "Analytisch", desc: "Zur Messung der Website-Leistung via Google Analytics." },
        marketing: { label: "Marketing", desc: "Für zielgerichtete Werbung via Meta Pixel und TikTok Pixel." }
      },
      lang: { label: "Sprache" }
    },
  },
  fr: {
    translation: {
      nav: { women: "Femme", men: "Homme", denim: "Denim", newIn: "Nouveautés", search: "Rechercher", cart: "Panier", menu: "Menu" },
      hero: { women: "Womenwear", men: "Menwear" },
      page: { comingSoon: "Nouvelle collection bientôt disponible." },
      announcement: "LIVRAISON GRATUITE DÈS $150 D'ACHAT. TAXES ET DROITS INCLUS",
      mens: {
        heroTagline: "La nouvelle collection est arrivée",
        heroCta: "Découvrir la collection",
        shopByCategory: "Shopper par catégorie",
        categories: { tops: "Hauts", bottoms: "Bas", outerwear: "Vestes", denim: "Denim", accessories: "Accessoires", all: "Tout voir" },
        featured: "À la une",
        newArrivals: "Nouveautés",
        viewAll: "Tout voir",
        editorialTitle: "Conçu pour la nuit",
        editorialText: "Silhouettes audacieuses, textures brutes et pièces fortes à vivre.",
        editorialCta: "Explorer"
      },
      womens: {
        heroTagline: "La nouvelle collection est arrivée",
        heroCta: "Découvrir la collection",
        editorialTitle: "Féminité sans effort",
        editorialText: "Coupes douces, silhouettes fluides et détails raffinés qui bougent avec vous."
      },
      search: { placeholder: "Rechercher...", suggestions: "Suggestions", close: "Fermer" },
      cart: { title: "Panier", empty: "Votre panier est vide.", total: "Total", checkout: "Payer avec Shopify", remove: "Supprimer", increase: "Augmenter", decrease: "Diminuer" },
      product: {
        notFound: "Produit introuvable.",
        noProductsFound: "Aucun produit trouvé",
        prev: "Précédent",
        next: "Suivant",
        addToWishlist: "Ajouter aux favoris",
        color: "Couleur",
        size: "Taille",
        sizeGuide: "Guide des tailles",
        inStock: "En stock.",
        selectSize: "Choisir une taille",
        addToCart: "Ajouter au panier",
        soldOut: "Épuisé",
        description: "Description",
        relatedWomens: "Plus pour Femmes",
        relatedMens: "Plus pour Hommes"
      },
      footer: {
        customerService: "Service Client",
        brand: "Marque",
        followUs: "Suivez-nous",
        stayPosted: "Restez informé",
        newsletter: "Inscrivez-vous à notre newsletter pour les actualités, offres et mises à jour.",
        email: "E-mail",
        submit: "Envoyer",
        rights: "© 2025 Tous droits réservés.",
        links: {
          contact: "Contact", delivery: "Livraison", returns: "Retours", sizeGuide: "Guide des tailles", faq: "FAQ", terms: "CGV & Conditions"
        }
      },
      info: {
        contact: [
          "Nous serions ravis de vous lire. Pour toute question sur les commandes, les produits ou les collaborations, contactez notre équipe.",
          "E-mail : svampstudios.com@svampstudios.com",
          "Instagram : @svamp.studios",
          "Nous répondons sous 1 à 2 jours ouvrés."
        ],
        delivery: [
          "Nous expédions dans le monde entier depuis notre studio. Les commandes sont traitées sous 1 à 3 jours ouvrés.",
          "Livraison standard : 3 à 7 jours ouvrés.",
          "Livraison express : 1 à 3 jours ouvrés.",
          "Les frais de port sont calculés au paiement selon la destination."
        ],
        returns: [
          "Les retours sont acceptés sous 14 jours après réception, pour les articles non portés avec étiquettes.",
          "Pour initier un retour, contactez svampstudios.com@svampstudios.com avec votre numéro de commande.",
          "Les remboursements sont effectués sous 7 jours ouvrés après réception du retour.",
          "Les articles soldés et accessoires ne sont ni repris ni échangés."
        ],
        sizeGuide: [
          "■ T-SHIRT & T-SHIRT SANS MANCHES",
          "Nos produits sont fabriqués en deux options de double taille S/M et L/XL conformément aux normes TR / UE.",
          "• Taille S/M -> Largeur: 59-60 cm | Longueur: 62-63 cm",
          "• Taille L/XL -> Largeur: 63-64 cm | Longueur: 66-67 cm",
          "Notes importantes: Il y a une différence moyenne de 4-5 cm entre les tailles TR / UE. En raison des mesures manuelles, une variation de ±1-2 cm peut être observée.",
          " ",
          "■ SWEATSHIRT",
          "Notre produit est fabriqué avec l'option STANDARD (Taille Unique) conformément aux normes TR / UE.",
          "• Taille STANDARD -> Largeur: 60-61 cm | Longueur: 63-64 cm",
          "Notes importantes: Notre conception de taille standard est moulée pour s'adapter à différents types de corps. En raison des mesures manuelles, une variation de ±1-2 cm peut être observée.",
          " ",
          "■ SWEATPANT (PANTALON DE JOGGING)",
          "Nos produits sont fabriqués en deux options de double taille S/M et L/XL conformément aux normes TR / UE.",
          "• Taille S/M -> Taille: 36-37 cm | Longueur: 100 cm",
          "• Taille L/XL -> Taille: 40-41 cm | Longueur: 100-102 cm",
          "Notes importantes: Le produit est doté de chevilles élastiques et d'un cordon de serrage réglable. Il y a une différence moyenne de 2-3 cm entre les tailles TR / UE. En raison des mesures manuelles, une variation de ±1-2 cm peut être observée."
        ],
        faq: [
          "Où sont fabriquées vos pièces ? — Dessinées dans notre studio et produites en petites séries avec des partenaires de confiance.",
          "Quels moyens de paiement acceptez-vous ? — Tous les cartes principales et portefeuilles numériques.",
          "Puis-je modifier ou annuler ma commande ? — Contactez-nous dans les 12 heures suivant la commande.",
          "Réapprovisionnez-vous les articles épuisés ? — Certaines pièces oui, suivez-nous sur Instagram."
        ]
      },
      sizeGuide: {
        title: "Guide des tailles",
        importantNotes: "Notes importantes :",
        women: "Femme",
        men: "Homme",
        unisex: "Unisexe",
        tshirt: { title: "T-Shirt", notes: "Nos produits sont fabriqués conformément aux normes TR / UE. Il y a une différence moyenne de 4-5 cm entre les tailles TR / UE. Une variation de ±1-2 cm peut être observée en raison de mesures manuelles.", headers: ["Taille", "Largeur", "Longueur"] },
        sleeveless: { title: "T-shirt sans manches", notes: "Notre produit sans manches est fabriqué conformément aux normes TR / UE. Il y a une différence moyenne de 4-5 cm entre les tailles. Une variation de ±1-2 cm peut être observée.", headers: ["Taille", "Largeur", "Longueur"] },
        sweatshirt: { title: "Sweatshirt", notes: "Notre produit est fabriqué avec l'option STANDARD (Taille unique). Il est conçu pour s'adapter à différents types de corps. Une variation de ±1-2 cm peut être observée.", headers: ["Taille", "Largeur", "Longueur"] },
        sweatpant: { title: "Sweatpant", notes: "Le produit est doté de chevilles élastiques et d'un cordon de serrage réglable. Il y a une différence moyenne de 2-3 cm entre les tailles TR / UE. Une variation de ±1-2 cm peut être observée.", headers: ["Taille", "Tour de taille", "Longueur"] }
      },
      delivery: {
        title: "Informations de livraison",
        subtitle: "À propos du traitement des commandes et des délais d'expédition",
        domestic: { heading: "1. Livraison nationale (Türkiye)", p1: "Le délai de livraison estimé pour toutes les commandes passées en Türkiye est de 5 à 7 jours ouvrés.", p2: "Une fois votre commande expédiée, un numéro de suivi vous sera envoyé par SMS et e-mail." },
        international: { heading: "2. Livraison internationale", p1: "Les délais de livraison estimés pour les commandes internationales peuvent varier selon le pays de destination, les procédures douanières et les transporteurs locaux.", p2: "SVAMP ne peut être tenu responsable des retards causés par des inspections douanières, des perturbations d'expédition ou des cas de force majeure." },
        customs: { heading: "3. Douanes & Taxes d'importation", p1: "Pour les expéditions internationales, les droits de douane, taxes d'importation ou frais de dédouanement supplémentaires dans le pays de destination sont à la charge exclusive du client." }
      },
      returns: {
        title: "Retours & Remboursements",
        subtitle: "Informations sur notre politique de retour",
        window: { heading: "1. Délai de retour", tr: "Commandes Türkiye :", trText: "Les retours peuvent être demandés dans les 14 jours suivant la livraison.", intl: "Commandes internationales :", intlText: "Les retours peuvent être demandés dans les 30 jours suivant la livraison." },
        conditions: { heading: "2. Conditions de retour", p1: "Les articles retournés doivent être non utilisés, non portés, non lavés et dans leur état d'origine avec toutes les étiquettes et l'emballage d'origine. SVAMP se réserve le droit de refuser les retours ne répondant pas à ces critères." },
        shipping: { heading: "3. Frais d'expédition & de douane", p1: "Les frais de retour sont à la charge du client, sauf si l'article reçu est défectueux ou incorrect. Pour les retours internationaux, les frais d'expédition, droits de douane et taxes d'importation ne sont pas remboursables." },
        contact: { heading: "4. Nous contacter", p1: "Pour initier un retour, veuillez nous contacter à", email: "svamp.info@gmail.com", p2: "avec votre numéro de commande." }
      },
      terms: {
        tabs: { terms: "CGV", privacy: "Politique de confidentialité", cookies: "Politique de cookies" },
        lastUpdated: "Dernière mise à jour : 20 mai 2026"
      },
      cookie: {
        banner: "Nous utilisons des cookies pour améliorer votre expérience sur notre site. Pour plus d'informations, consultez notre",
        policyLink: "politique de cookies",
        settings: "Paramètres",
        rejectAll: "Tout refuser",
        acceptAll: "Tout accepter",
        settingsTitle: "Paramètres des cookies",
        savePreferences: "Enregistrer les préférences",
        necessary: { label: "Nécessaires", desc: "Requis pour le bon fonctionnement du site. Ne peut pas être désactivé." },
        analytics: { label: "Analytiques", desc: "Utilisés pour mesurer les performances du site via Google Analytics." },
        marketing: { label: "Marketing", desc: "Utilisés pour les publicités ciblées via Meta Pixel et TikTok Pixel." }
      },
      lang: { label: "Langue" }
    },
  },
};

const isBrowser = typeof window !== "undefined";

const chain = isBrowser ? i18n.use(LanguageDetector) : i18n;
chain.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  supportedLngs: ["en", "tr", "de", "fr"],
  lng: isBrowser ? undefined : "en",
  interpolation: { escapeValue: false },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});
