import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      marquee: { announcement: "Free delivery on $70 dollars worth of purchases" },
      nav: { women: "Women", men: "Men", denim: "Denim", newIn: "New In", search: "Search", cart: "Cart", menu: "Menu", unisex: "Unisex" },
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
          about: "About Us", contact: "Contact Us", delivery: "Delivery", returns: "Returns", sizeGuide: "Size Guide", faq: "FAQ", terms: "Terms & Conditions"
        }
      },
      about: {
        title: "About Us",
        p1: "Svamp is a clothing brand fueled by the aesthetics of darkness and the uncompromising stance of underground culture. For us, clothing is not just a necessity; it is one of the most powerful ways to express identity, transformation, and belonging.",
        p2: "At the core of our brand lies the idea of rebirth. Powerful symbols like the bat, night, and blood represent experiences, change, and the strength born from darkness. Every collection is designed as a wearable manifesto that tells this story in its own language.",
        p3: "Extra-baggy fits, boxy silhouettes, and bold details are made for individuals who do not fit into molds and pave their own paths. Svamp exists not for those who want to be seen, but for those who make their presence felt.",
        p4: "Instead of following trends, we are creating our own universe. Because Svamp is not just a brand; it is the common language of those who find their place in the night."
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
          "Important Notes: There is an average of 4-5 cm difference between TR / EU sizes. Due to manual measurements, a variation of ±1-2 cm may be observed."
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
      marquee: { announcement: "70$ VE ÜZERİ SİPARİŞLERDE ÜCRETSİZ KARGO" },
      nav: { women: "Kadın", men: "Erkek", denim: "Denim", newIn: "Yeni Gelenler", search: "Ara", cart: "Sepet", menu: "Menü", unisex: "Unisex" },
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
          about: "Biz Kimiz?", contact: "İletişim", delivery: "Teslimat", returns: "İadeler", sizeGuide: "Beden Rehberi", faq: "SSS", terms: "Şartlar & Koşullar"
        }
      },
      about: {
        title: "Biz Kimiz?",
        p1: "Svamp, karanlığın estetiğinden ve yeraltı kültürünün tavizsiz duruşundan beslenen bir giyim markasıdır. Bizim için giyim yalnızca bir ihtiyaç değil; kimliği, dönüşümü ve aidiyeti ifade etmenin en güçlü yollarından biridir.",
        p2: "Markamızın temelinde yeniden doğuş fikri yer alır. Yarasa, gece ve kan gibi güçlü semboller; yaşanmışlıkları, değişimi ve karanlığın içinden doğan gücü temsil eder. Her koleksiyon, bu hikâyeyi kendi diliyle anlatan giyilebilir bir manifesto olarak tasarlanır.",
        p3: "Extra-baggy kesimler, boxy silüetler ve cesur detaylar; kalıplara sığmayan, kendi yolunu çizen bireyler için üretilir. Svamp, görünmek isteyenler için değil, varlığını hissettirenler için vardır.",
        p4: "Trendlerin peşinden gitmek yerine kendi evrenimizi yaratıyoruz. Çünkü Svamp bir marka değil; gecenin içinde kendine ait bir yer bulanların ortak dili."
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
          "Ürünümüz TR / EU standartlarına uygun olarak S/M ve L/XL olmak üzere iki çiftli beden seçeneğiyle üretilmiştir."
        ],
        faq: [
          "Ürünlerinizi nerede üretiliyor? — Stüdyomuzda tasarlanır, güvendiğimiz iş ortaklarıyla küçük partiler halinde üretilir.",
          "Hangi ödeme yöntemlerini kabul ediyorsunuz? — Tüm büyük kredi kartları ve dijital cüzdanlar."
        ]
      },
      sizeGuide: {
        title: "Beden Rehberi",
        importantNotes: "Önemli Notlar:",
        women: "Kadın",
        men: "Erkek",
        unisex: "Unisex",
        tshirt: { title: "T-Shirt", notes: "Ürünümüz TR / EU standartlarına uygun olarak üretilmiştir.", headers: ["Beden (Size)", "En (Width)", "Boy (Length)"] },
        sleeveless: { title: "Sleeveless Tee", notes: "Sıfır kol ürünümüz TR / EU standartlarına uygun olarak üretilmiştir.", headers: ["Beden (Size)", "En (Width)", "Boy (Length)"] },
        sweatshirt: { title: "Sweatshirt", notes: "Ürünümüz STANDART (Tek Beden) seçeneğiyle üretilmiştir.", headers: ["Beden (Size)", "En (Width)", "Boy (Length)"] },
        sweatpant: { title: "Sweatpant", notes: "Ürünün paçasında lastik, belinde ise ayarlanabilir kordon (ip) bulunmaktadır.", headers: ["Beden (Size)", "Bel (Waist)", "Boy (Length)"] }
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
        banner: "Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz.",
        policyLink: "çerez politikamızı",
        settings: "Ayarlar",
        rejectAll: "Reddet",
        acceptAll: "Kabul Et",
        settingsTitle: "Çerez Ayarları",
        savePreferences: "Tercihleri Kaydet",
        necessary: { label: "Zorunlu", desc: "Site temel işlevleri için gereklidir." },
        analytics: { label: "Analitik", desc: "Site performansını ölçmek için Google Analytics kullanılır." },
        marketing: { label: "Pazarlama", desc: "Meta Pixel ve TikTok Pixel ile reklamlar için kullanılır." }
      },
      lang: { label: "Dil" }
    },
  },
  de: {
    translation: {
      marquee: { announcement: "KOSTENLOSER VERSAND AB 70$ BESTELLWERT" },
      nav: { women: "Damen", men: "Herren", denim: "Denim", newIn: "Neuheiten", search: "Suche", cart: "Warenkorb", menu: "Menü", unisex: "Unisex" },
      hero: { women: "Womenwear", men: "Menwear" },
      page: { comingSoon: "Neue Kollektion bald verfügbar." },
      announcement: "KOSTENLOSER VERSAND AB $150 BESTELLWERT.",
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
        editorialText: "Weiche Schnitte, fließende Silhouetten und feine Details."
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
        newsletter: "Melde dich für unseren Newsletter an.",
        email: "E-Mail",
        submit: "Absenden",
        rights: "© 2025 Alle Rechte vorbehalten.",
        links: {
          about: "Über Uns", contact: "Kontakt", delivery: "Lieferung", returns: "Rücksendungen", sizeGuide: "Größentabelle", faq: "FAQ", terms: "AGB & Konditionen"
        }
      },
      about: {
        title: "Über Uns",
        p1: "Svamp ist eine Bekleidungsmarke, die von der Ästhetik der Dunkelheit und der kompromisslosen Haltung der Underground-Kultur angetrieben wird. Für uns ist Kleidung nicht nur ein Bedürfnis, sondern einer der stärksten Wege, Identität, Transformation und Zugehörigkeit auszudrücken.",
        p2: "Im Kern unserer Marke steht die Idee der Wiedergeburt. Starke Symbole wie die Fledermaus, die Nacht und das Blut stehen für Erfahrungen, Veränderung und die Kraft, die aus der Dunkelheit entsteht. Jede Kollektion wird als tragbares Manifest entworfen, das diese Geschichte in ihrer eigenen Sprache erzählt.",
        p3: "Extra-baggy Schnitte, boxy Silhouetten und mutige Details werden für Individuen gemacht, die in keine Schublade passen und ihren eigenen Weg gehen. Svamp existiert nicht für diejenigen, die gesehen werden wollen, sondern für diejenigen, die ihre Präsenz spürbar machen.",
        p4: "Anstatt Trends zu folgen, erschaffen wir unser eigenes Universum. Denn Svamp ist nicht nur eine Marke; es ist die gemeinsame Sprache derer, die ihren Platz in der Nacht finden."
      },
      info: {
        contact: [
          "Wir freuen uns, von dir zu hören.",
          "E-Mail: svampstudios.com@svampstudios.com"
        ],
        delivery: [
          "Wir versenden weltweit aus unserem Studio."
        ],
        returns: [
          "Rücksendungen sind innerhalb von 14 Tagen möglich."
        ],
        sizeGuide: [
          "■ T-SHIRT & ÄRMELLOSES T-SHIRT"
        ],
        faq: [
          "Wo werden eure Stücke produziert? — Designt in unserem Studio."
        ]
      },
      sizeGuide: {
        title: "Größentabelle",
        importantNotes: "Wichtige Hinweise:",
        women: "Damen",
        men: "Herren",
        unisex: "Unisex",
        tshirt: { title: "T-Shirt", notes: "Unser Produkt wird in Übereinstimmung mit TR / EU-Standards hergestellt.", headers: ["Größe", "Breite", "Länge"] },
        sleeveless: { title: "Ärmelloses Tee", notes: "Unser ärmelloses Produkt wird in Übereinstimmung mit TR / EU-Standards hergestellt.", headers: ["Größe", "Breite", "Länge"] },
        sweatshirt: { title: "Sweatshirt", notes: "Unser Produkt wird mit der STANDARD Option hergestellt.", headers: ["Größe", "Breite", "Länge"] },
        sweatpant: { title: "Sweatpant", notes: "Das Produkt verfügt über elastische Bündchen.", headers: ["Größe", "Taille", "Länge"] }
      },
      delivery: {
        title: "Lieferinformationen",
        subtitle: "Über Bestellabwicklung und Lieferzeiten",
        domestic: { heading: "1. Inlandsversand (Türkiye)", p1: "Die geschätzte Lieferzeit beträgt 5–7 Werktage.", p2: "Trackingnummer kommt per SMS." },
        international: { heading: "2. Internationaler Versand", p1: "Die Lieferzeiten variieren.", p2: "SVAMP haftet nicht für Zoll-Verzögerungen." },
        customs: { heading: "3. Zoll & Einfuhrsteuern", p1: "Kunde zahlt Steuern." }
      },
      returns: {
        title: "Rücksendungen",
        subtitle: "Rückgaberichtlinie",
        window: { heading: "1. Rückgabefrist", tr: "Türkiye:", trText: "14 Tage.", intl: "Internationale:", intlText: "30 Tage." },
        conditions: { heading: "2. Bedingungen", p1: "Ungetragen und original verpackt." },
        shipping: { heading: "3. Versand", p1: "Kunde zahlt Rückversand." },
        contact: { heading: "4. Kontakt", p1: "Bitte kontaktiere uns:", email: "svamp.info@gmail.com", p2: "mit Bestellnummer." }
      },
      terms: {
        tabs: { terms: "AGB", privacy: "Datenschutz", cookies: "Cookie-Richtlinie" },
        lastUpdated: "Zuletzt aktualisiert: 20. Mai 2026"
      },
      cookie: {
        banner: "Wir verwenden Cookies.",
        policyLink: "Cookie-Richtlinie",
        settings: "Einstellungen",
        rejectAll: "Alle ablehnen",
        acceptAll: "Alle akzeptieren",
        settingsTitle: "Cookie-Einstellungen",
        savePreferences: "Speichern",
        necessary: { label: "Notwendig", desc: "Erforderlich." },
        analytics: { label: "Analytisch", desc: "Leistungsmessung." },
        marketing: { label: "Marketing", desc: "Werbung." }
      },
      lang: { label: "Sprache" }
    },
  },
  fr: {
    translation: {
      marquee: { announcement: "LIVRAISON GRATUITE DÈS 70$ D'ACHAT" },
      nav: { women: "Femme", men: "Homme", denim: "Denim", newIn: "Nouveautés", search: "Rechercher", cart: "Panier", menu: "Menu", unisex: "Unisexe" },
      hero: { women: "Womenwear", men: "Menwear" },
      page: { comingSoon: "Nouvelle collection bientôt disponible." },
      announcement: "LIVRAISON GRATUITE DÈS $150 D'ACHAT.",
      mens: {
        heroTagline: "La nouvelle collection est arrivée",
        heroCta: "Découvrir la collection",
        shopByCategory: "Shopper par catégorie",
        categories: { tops: "Hauts", bottoms: "Bas", outerwear: "Vestes", denim: "Denim", accessories: "Accessoires", all: "Tout voir" },
        featured: "À la une",
        newArrivals: "Nouveautés",
        viewAll: "Tout voir",
        editorialTitle: "Conçu pour la nuit",
        editorialText: "Silhouettes audacieuses.",
        editorialCta: "Explorer"
      },
      womens: {
        heroTagline: "La nouvelle collection est arrivée",
        heroCta: "Découvrir la collection",
        editorialTitle: "Féminité sans effort",
        editorialText: "Coupes douces."
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
        newsletter: "Inscrivez-vous à notre newsletter.",
        email: "E-mail",
        submit: "Envoyer",
        rights: "© 2025 Tous droits réservés.",
        links: {
          about: "Qui Sommes-Nous ?", contact: "Contact", delivery: "Livraison", returns: "Retours", sizeGuide: "Guide des tailles", faq: "FAQ", terms: "CGV & Conditions"
        }
      },
      about: {
        title: "Qui Sommes-Nous ?",
        p1: "Svamp est une marque de vêtements nourrie par l'esthétique de l'obscurité et la position intransigeante de la culture underground. Pour nous, le vêtement n'est pas seulement un besoin ; c'est l'un des moyens les plus puissants d'exprimer son identité, sa transformation et son appartenance.",
        p2: "Au cœur de notre marque se trouve l'idée de renaissance. Des symboles forts comme la chauve-souris, la nuit et le sang représentent les expériences, le changement et la force née des ténèbres. Chaque collection est conçue comme un manifeste portable qui raconte cette histoire dans sa propre langue.",
        p3: "Les coupes extra-baggy, les silhouettes boxy et les détails audacieux sont créés pour les individus qui ne rentrent pas dans les moules et tracent leur propre voie. Svamp n'existe pas pour ceux qui veulent être vus, mais pour ceux qui font sentir leur présence.",
        p4: "Au lieu de suivre les tendances, nous créons notre propre univers. Parce que Svamp n'est pas seulement une marque ; c'est le langage commun de ceux qui trouvent leur place dans la nuit."
      },
      info: {
        contact: [
          "Nous serions ravis de vous lire.",
          "E-mail : svampstudios.com@svampstudios.com"
        ],
        delivery: [
          "Nous expédions dans le monde entier."
        ],
        returns: [
          "Les retours sont acceptés sous 14 jours."
        ],
        sizeGuide: [
          "■ T-SHIRT & T-SHIRT SANS MANCHES"
        ],
        faq: [
          "Où sont fabriquées vos pièces ? — Dessinées dans notre studio."
        ]
      },
      sizeGuide: {
        title: "Guide des tailles",
        importantNotes: "Notes importantes :",
        women: "Femme",
        men: "Homme",
        unisex: "Unisexe",
        tshirt: { title: "T-Shirt", notes: "Nos produits sont fabriqués conformément aux normes.", headers: ["Taille", "Largeur", "Longueur"] },
        sleeveless: { title: "T-shirt sans manches", notes: "Notre produit est fabriqué conformément aux normes.", headers: ["Taille", "Largeur", "Longueur"] },
        sweatshirt: { title: "Sweatshirt", notes: "Notre produit est fabriqué avec l'option STANDARD.", headers: ["Taille", "Largeur", "Longueur"] },
        sweatpant: { title: "Sweatpant", notes: "Le produit est doté de chevilles élastiques.", headers: ["Taille", "Tour de taille", "Longueur"] }
      },
      delivery: {
        title: "Informations de livraison",
        subtitle: "Délais d'expédition",
        domestic: { heading: "1. Livraison nationale (Türkiye)", p1: "5 à 7 jours ouvrés.", p2: "Suivi par SMS." },
        international: { heading: "2. Livraison internationale", p1: "Délais variables.", p2: "SVAMP non responsable des douanes." },
        customs: { heading: "3. Douanes & Taxes", p1: "Taxes à la charge du client." }
      },
      returns: {
        title: "Retours & Remboursements",
        subtitle: "Politique de retour",
        window: { heading: "1. Délai de retour", tr: "Türkiye :", trText: "14 jours.", intl: "International :", intlText: "30 jours." },
        conditions: { heading: "2. Conditions", p1: "Non utilisé, non porté." },
        shipping: { heading: "3. Frais", p1: "Frais à la charge du client." },
        contact: { heading: "4. Contact", p1: "Contactez-nous à", email: "svamp.info@gmail.com", p2: "avec le numéro de commande." }
      },
      terms: {
        tabs: { terms: "CGV", privacy: "Confidentialité", cookies: "Cookies" },
        lastUpdated: "Dernière mise à jour : 20 mai 2026"
      },
      cookie: {
        banner: "Nous utilisons des cookies.",
        policyLink: "politique de cookies",
        settings: "Paramètres",
        rejectAll: "Refuser",
        acceptAll: "Accepter",
        settingsTitle: "Paramètres",
        savePreferences: "Enregistrer",
        necessary: { label: "Nécessaires", desc: "Requis." },
        analytics: { label: "Analytiques", desc: "Performances." },
        marketing: { label: "Marketing", desc: "Publicités." }
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

export default i18n;
