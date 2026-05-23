import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  component: TermsAndPrivacy,
});

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

// Şık ve Minimal Akordiyon Bileşeni
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
  // Hangi sözleşmenin gösterileceğini tutan state ('terms' veya 'privacy')
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-24 md:py-32">
        
        {/* TAB SEÇENEKLERİ (TERMS / PRIVACY) */}
        <div className="flex space-x-8 border-b border-white/10 mb-12">
          <button
            onClick={() => setActiveTab("terms")}
            className={`pb-4 text-xs tracking-[0.2em] uppercase font-medium transition-all ${
              activeTab === "terms"
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`pb-4 text-xs tracking-[0.2em] uppercase font-medium transition-all ${
              activeTab === "privacy"
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Privacy Policy
          </button>
        </div>

        {/* ----------------- TERMS & CONDITIONS BÖLÜMÜ ----------------- */}
        {activeTab === "terms" && (
          <div className="space-y-6">
            <div className="space-y-2 mb-8">
              <h1 className="text-base font-normal tracking-wide uppercase">SVAMP – Terms & Conditions</h1>
              <p className="text-xs text-muted-foreground">Last Updated: May 20, 2026</p>
              <p className="text-xs text-muted-foreground pt-4 max-w-2xl leading-relaxed">
                Welcome to SVAMP. By accessing or using our website, Svampstudios.com, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our services.
              </p>
            </div>

            <div className="border-t border-white/10">
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
                <p><strong>Türkiye Orders:</strong><br />Returns may be requested within 14 days of delivery.</p>
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
            </div>
          </div>
        )}

        {/* ----------------- PRIVACY POLICY BÖLÜMÜ ----------------- */}
        {activeTab === "privacy" && (
          <div className="space-y-6">
            <div className="space-y-2 mb-8">
              <h1 className="text-base font-normal tracking-wide uppercase">SVAMP – Privacy Policy</h1>
              <p className="text-xs text-muted-foreground">Last Updated: May 20, 2026</p>
              <p className="text-xs text-muted-foreground pt-4 max-w-2xl leading-relaxed">
                At SVAMP, we value your privacy. This Privacy Policy explains how we collect, use, protect, and process your personal information when you visit or use Svampstudios.com. By using our website, you agree to the practices described in this Privacy Policy.
              </p>
            </div>

            <div className="border-t border-white/10">
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
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
