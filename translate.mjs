// translate.mjs - DeepL Free API ile otomatik çeviri
// Kullanım: node translate.mjs
// Önce: export DEEPL_API_KEY=your-key-here

import fs from "fs";

const API_KEY = process.env.DEEPL_API_KEY;
if (!API_KEY) {
  console.error("❌ DEEPL_API_KEY set edilmemiş.");
  console.error("   Önce terminalde şunu çalıştır: export DEEPL_API_KEY=senin-key-buraya");
  process.exit(1);
}

const I18N_FILE = "./src/i18n.ts";

// DeepL dil kodları
const TARGET_LANGS = {
  en: "EN",
  de: "DE",
  fr: "FR",
};

// DeepL Free API endpoint (free key :free ile biter)
const DEEPL_URL = "https://api-free.deepl.com/v2/translate";

async function translateText(text, targetLang) {
  // Boşluk olan stringleri atla
  if (!text || text.trim() === "") return text;

  const res = await fetch(DEEPL_URL, {
    method: "POST",
    headers: {
      "Authorization": `DeepL-Auth-Key ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: [text],
      source_lang: "TR",
      target_lang: targetLang,
    }),
  });

  const data = await res.json();
  if (data.message) throw new Error(data.message);
  return data.translations[0].text;
}

// Objeyi recursive olarak çevir
async function translateObject(obj, targetLang) {
  if (typeof obj === "string") {
    if (obj.trim() === "") return obj; // boşlukları koru
    return await translateText(obj, targetLang);
  }
  if (Array.isArray(obj)) {
    const result = [];
    for (const item of obj) {
      result.push(await translateObject(item, targetLang));
    }
    return result;
  }
  if (typeof obj === "object" && obj !== null) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      process.stdout.write(".");
      result[key] = await translateObject(value, targetLang);
    }
    return result;
  }
  return obj;
}

async function main() {
  if (!fs.existsSync(I18N_FILE)) {
    console.error(`❌ Dosya bulunamadı: ${I18N_FILE}`);
    console.error("   Script'i projenin root klasöründen çalıştır (package.json'ın olduğu yer)");
    process.exit(1);
  }

  console.log(`📖 Okunuyor: ${I18N_FILE}`);
  const fileContent = fs.readFileSync(I18N_FILE, "utf-8");

  // resources objesini parse et
  const resourcesMatch = fileContent.match(/const resources\s*=\s*(\{[\s\S]+?\});\s*\n(?:const|export)/);
  if (!resourcesMatch) {
    console.error("❌ 'const resources' bloğu bulunamadı.");
    process.exit(1);
  }

  let resources;
  try {
    resources = Function(`"use strict"; return (${resourcesMatch[1]})`)();
  } catch (e) {
    console.error("❌ Parse hatası:", e.message);
    process.exit(1);
  }

  const trTranslation = resources?.tr?.translation;
  if (!trTranslation) {
    console.error("❌ Türkçe (tr) bloğu bulunamadı.");
    process.exit(1);
  }

  console.log("🇹🇷 Türkçe kaynak bulundu.\n");

  // Backup al
  fs.writeFileSync(I18N_FILE + ".backup", fileContent, "utf-8");
  console.log(`💾 Yedek alındı: ${I18N_FILE}.backup\n`);

  // Her dil için çevir ve dosyaya yaz
  let newContent = fileContent;

  for (const [code, deeplCode] of Object.entries(TARGET_LANGS)) {
    const langNames = { en: "İngilizce", de: "Almanca", fr: "Fransızca" };
    process.stdout.write(`🌐 ${langNames[code]} çeviriliyor `);

    try {
      const translated = await translateObject(trTranslation, deeplCode);
      console.log(" ✅");

      // Dosyadaki ilgili dil bloğunu güncelle
      // "en: {\n    translation: {" ile başlayan bloğu bul
      const escapedCode = code.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const langRegex = new RegExp(
        `(${escapedCode}:\\s*\\{[\\s\\S]*?translation:\\s*)\\{[\\s\\S]*?\\}(\\s*,?\\s*\\n\\s*\\},)`,
        "m"
      );

      const translatedStr = JSON.stringify(translated, null, 6)
        .split("\n")
        .map((line, i) => (i === 0 ? line : "      " + line))
        .join("\n");

      if (langRegex.test(newContent)) {
        newContent = newContent.replace(langRegex, `$1${translatedStr}$2`);
        console.log(`   📝 ${code} bloğu güncellendi`);
      } else {
        console.warn(`   ⚠️  ${code} bloğu bulunamadı`);
      }
    } catch (e) {
      console.log(` ❌`);
      console.error(`   Hata: ${e.message}`);
    }
  }

  fs.writeFileSync(I18N_FILE, newContent, "utf-8");
  console.log(`\n✨ ${I18N_FILE} güncellendi!`);
  console.log("🎉 Tamamlandı! Bundan sonra sadece tr bloğunu düzenle ve tekrar çalıştır.\n");
}

main().catch((e) => {
  console.error("❌ Hata:", e.message);
  process.exit(1);
});
