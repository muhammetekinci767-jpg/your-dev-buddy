import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CategoryKey = 'tshirt' | 'sweatshirt' | 'sweatpant' | 'sleeveless';

interface SizeRows {
  cm: string[][];
  inch: string[][];
}

// Senin verdiğin ölçülerle güncellenmiş değerler (En/Bel = 1. index, Boy = 2. index)
const SIZE_ROWS: Record<CategoryKey, SizeRows> = {
  tshirt: {
    cm: [["S/M", "60-61 cm", "64-65 cm"], ["L/XL", "63-64 cm", "68-69 cm"]],
    inch: [["S/M", "23.6-24.0\"", "25.2-25.6\""], ["L/XL", "24.8-25.2\"", "26.8-27.2\""]]
  },
  sleeveless: {
    cm: [["S/M", "60-61 cm", "64-65 cm"], ["L/XL", "63-64 cm", "68-69 cm"]],
    inch: [["S/M", "23.6-24.0\"", "25.2-25.6\""], ["L/XL", "24.8-25.2\"", "26.8-27.2\""]]
  },
  sweatshirt: {
    cm: [["STANDART", "63-64 cm", "64-65 cm"]],
    inch: [["STANDART", "24.8-25.2\"", "25.2-25.6\""]]
  },
  sweatpant: {
    cm: [["S/M", "42 cm", "96 cm"], ["L/XL", "46 cm", "102 cm"]],
    inch: [["S/M", "16.5\"", "37.8\""], ["L/XL", "18.1\"", "40.2\""]]
  }
};

const CATEGORY_KEYS: CategoryKey[] = ['tshirt', 'sleeveless', 'sweatshirt', 'sweatpant'];

const SizeGuideComponent = () => {
  const { t } = useTranslation();
  const [activeGender, setActiveGender] = useState<'women' | 'men' | 'unisex'>('unisex');
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('tshirt');
  const [unit, setUnit] = useState<'cm' | 'inch'>('cm');

  const currentRows = SIZE_ROWS[activeCategory];
  const headers = t(`sizeGuide.${activeCategory}.headers`, { returnObjects: true }) as string[];
  const notes = t(`sizeGuide.${activeCategory}.notes`);

  return (
    <div className="w-full text-black font-sans min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-24 w-full">
        {/* Gender tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-8">
          {(['women', 'men', 'unisex'] as const).map((gender) => (
            <button
              key={gender}
              onClick={() => setActiveGender(gender)}
              className={`px-8 py-3 text-sm font-semibold uppercase tracking-widest border-b-2 transition-all duration-300 -mb-[2px] ${
                activeGender === gender
                  ? 'border-black text-black font-bold'
                  : 'border-transparent text-gray-400 hover:text-black'
              }`}
            >
              {t(`sizeGuide.${gender}`)}
            </button>
          ))}
        </div>

        {/* Title + CM/INCH toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold uppercase tracking-wider">
            {t('sizeGuide.title')}
          </h1>
          <div className="flex border border-black rounded p-[2px] bg-white text-[11px] font-bold tracking-wider">
            <button
              onClick={() => setUnit('cm')}
              className={`px-4 py-1.5 rounded transition-all duration-200 uppercase ${unit === 'cm' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
            >CM</button>
            <button
              onClick={() => setUnit('inch')}
              className={`px-4 py-1.5 rounded transition-all duration-200 uppercase ${unit === 'inch' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
            >IN</button>
          </div>
        </div>

        {/* Category buttons */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORY_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider rounded-full border transition-all duration-300 whitespace-nowrap ${
                activeCategory === key
                  ? 'bg-black border-black text-white shadow-sm'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-black hover:text-black'
              }`}
            >
              {t(`sizeGuide.${key}.title`)}
            </button>
          ))}
        </div>

        {/* Table */}
        <div
          key={`${activeGender}-${activeCategory}-${unit}`}
          className="overflow-x-auto mb-8 border border-gray-100 rounded-lg shadow-sm bg-white animate-[fadeIn_0.3s_ease-in-out]"
        >
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-200">
                {headers.map((header, i) => (
                  <th key={i} className="p-4 font-semibold uppercase tracking-wider text-[11px] text-gray-500">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows[unit].map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/40 transition-colors duration-150">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className={`p-4 text-gray-900 ${cellIndex === 0 ? 'font-bold text-xs tracking-wide' : 'font-medium'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="bg-gray-50/80 p-5 rounded-lg border-l-2 border-black text-xs text-gray-600 leading-relaxed shadow-inner">
          <span className="font-bold block mb-1.5 text-black uppercase tracking-wider text-[10px]">{t('sizeGuide.importantNotes')}</span>
          {notes}
        </div>
      </main>

      {/* Footer Bileşeni Eklendi */}
      <Footer />
    </div>
  );
};

export const Route = createFileRoute("/size-guide")({
  component: SizeGuideComponent,
});
