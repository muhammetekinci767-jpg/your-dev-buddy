import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import heroWomen from "@/assets/hero-women.jpg";
import heroMen from "@/assets/hero-men.jpg";

const HeroSplit = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col md:flex-row w-full md:h-[90vh]">
      <Link
        to="/womenswear"
        className="relative flex-1 overflow-hidden group cursor-pointer h-[50vh] md:h-auto"
      >
        <img
          src={heroWomen}
          alt={t("hero.women")}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          width={960}
          height={1200}
        />
        <div className="absolute inset-0 bg-hero-overlay/20 group-hover:bg-hero-overlay/30 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <h2 className="text-hero-text text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
            {t("hero.women")}
          </h2>
        </div>
      </Link>
      <Link
        to="/menswear"
        className="relative flex-1 overflow-hidden group cursor-pointer h-[50vh] md:h-auto"
      >
        <img
          src={heroMen}
          alt={t("hero.men")}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          width={960}
          height={1200}
        />
        <div className="absolute inset-0 bg-hero-overlay/20 group-hover:bg-hero-overlay/30 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <h2 className="text-hero-text text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
            {t("hero.men")}
          </h2>
        </div>
      </Link>
    </section>
  );
};

export default HeroSplit;
