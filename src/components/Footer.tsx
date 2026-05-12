import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.9a4.85 4.85 0 0 1-1.84-.21z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      key: "customerService",
      title: t("footer.customerService"),
      links: [
        { label: t("footer.links.contact"), to: "/contact" },
        { label: t("footer.links.delivery"), to: "/delivery" },
        { label: t("footer.links.returns"), to: "/returns" },
        { label: t("footer.links.sizeGuide"), to: "/size-guide" },
        { label: t("footer.links.faq"), to: "/faq" },
      ],
    },
  ];

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1 space-y-2 md:space-y-6">
            {sections.map((section) => (
              <div key={section.key} className="border-b border-footer-border md:border-0 pb-2 md:pb-0">
                <button
                  className="flex items-center justify-between w-full py-2 md:py-0 md:cursor-default"
                  onClick={() =>
                    setOpenSection(openSection === section.key ? null : section.key)
                  }
                >
                  <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-footer-foreground">
                    {section.title}
                  </h3>
                  <Plus
                    size={14}
                    className={`text-footer-foreground md:hidden transition-transform ${
                      openSection === section.key ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <ul
                  className={`mt-2 space-y-2 ${
                    openSection === section.key ? "block" : "hidden"
                  } md:block`}
                >
                  {section.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-footer-muted text-xs hover:text-footer-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-footer-foreground mb-6">
              {t("footer.followUs")}
            </h3>
            <div className="flex items-center gap-5">
              <a href="https://www.instagram.com/svamp.studios/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-footer-foreground hover:opacity-60 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@svamp.studio" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-footer-foreground hover:opacity-60 transition-opacity">
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-footer-foreground mb-6">
              {t("lang.label")}
            </h3>
            <LanguageSwitcher variant="footer" />
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-footer-foreground mb-6">
              {t("footer.stayPosted")}
            </h3>
            <p className="text-footer-muted text-xs mb-4">
              {t("footer.newsletter")}
            </p>
            <div className="flex border border-footer-border">
              <input
                type="email"
                placeholder={t("footer.email")}
                className="flex-1 bg-transparent text-footer-foreground text-xs px-3 py-2.5 placeholder:text-footer-muted outline-none"
              />
              <button className="text-footer-foreground text-xs tracking-[0.1em] uppercase font-medium px-4 hover:opacity-60 transition-opacity">
                {t("footer.submit")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-footer-border px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-footer-muted text-[10px] tracking-wide">
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
