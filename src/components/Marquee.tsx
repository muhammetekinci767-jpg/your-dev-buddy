import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Marquee = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    t("marquee.p1"),
    t("marquee.p2"),
    t("marquee.p3"),
    t("marquee.p4"),
  ];

  useEffect(() => {
    // 3.5 saniyede bir sonraki yazıya geçer
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3500); 
    
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="bg-[#8c1c1c] text-white relative flex justify-center items-center h-9 overflow-hidden z-50">
      {items.map((item, index) => {
        // Slayt geçiş mantığı
        let positionClass = "translate-x-full opacity-0"; // Sağda bekleyen (yeni gelecek olan)
        
        if (index === currentIndex) {
          positionClass = "translate-x-0 opacity-100"; // Ortada duran (aktif olan)
        } else if (
          index === currentIndex - 1 || 
          (currentIndex === 0 && index === items.length - 1)
        ) {
          positionClass = "-translate-x-full opacity-0"; // Sola kayıp çıkan (eski olan)
        }

        return (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out w-full ${positionClass}`}
          >
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-center px-4">
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Marquee;
