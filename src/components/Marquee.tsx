import { useTranslation } from "react-i18next";

const Marquee = () => {
  const { t } = useTranslation();
  
  const items = [
    t("marquee.p1"),
    t("marquee.p2"),
    t("marquee.p3"),
    t("marquee.p4"),
  ];

  return (
    <div className="bg-[#8c1c1c] text-white py-2 overflow-hidden flex whitespace-nowrap z-50">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="flex animate-marquee w-max">
        {/* Geniş ekranlarda boşluk kalmaması için listeyi 8 kez kopyalayarak döngüye sokuyoruz */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="mx-6 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
                  {item}
                </span>
                <span className="mx-2 text-[10px] opacity-40">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
