import { useTranslation } from "react-i18next";

const Marquee = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#8c1c1c] text-white py-2 overflow-hidden flex whitespace-nowrap z-50 relative">
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
        {/* Yazının kesilmemesi için yan yana kopyalıyoruz */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-6 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              {t("marquee.announcement")}
            </span>
            <span className="mx-2 text-[10px] opacity-40">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
