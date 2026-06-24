// translate.mjs - DeepL Free API
import fs from "fs";
import fetch from "node-fetch";

const API_KEY = process.env.DEEPL_API_KEY;
if (!API_KEY) {
  console.error("❌ DEEPL_API_KEY set edilmemiş.");
  process.exit(1);
}

const I18N_FILE = "./src/i18n.ts";
const TARGET_LANGS = { en: "EN", de: "DE", fr: "FR" };
const langNames = { en: "İngilizce", de: "Almanca", fr: "Fransızca" };

async function translateText(text, targetLang) {
  if (!text || text.trim() === "") return text;

  const res = await fetch("https://api-free.deepl.com/v2/translate", {
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
  if (!data.translations) throw new Error(JSON.stringify(data));
  return data.translations[0].text;
}

async function translateObject(obj, targetLang) {
  if (typeof obj === "string") {
    if (obj.trim() === "") return obj;
    return await translateText(obj, targetLang);
  }
  if (Array.isArray(obj)) {
    const result = [];
    for (const item of obj) result.push(await translateObject(item, targetLang));
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
    process.exit(1);
  }

  const fileContent = fs.readFileSync(I18N_FILE, "utf-8");
  const resourcesMatch = fileContent.match(/const resources\s*=\s*(\{[\s\S]+?\});\s*\n(?:const|export)/);
  if (!resourcesMatch) { console.error("❌ resources bloğu bulunamadı."); process.exit(1); }

  let resources;
  try { resources = Function(`"use strict"; return (${resourcesMatch[1]})`)(); }
  catch (e) { console.error("❌ Parse hatası:", e.message); process.exit(1); }

  const trTranslation = resources?.tr?.translation;
  if (!trTranslation) { console.error("❌ tr bloğu bulunamadı."); process.exit(1); }

  console.log("🇹🇷 Türkçe kaynak bulundu.\n");
  fs.writeFileSync(I18N_FILE + ".backup", fileContent, "utf-8");
  console.log("💾 Yedek alındı\n");

  const translated = {};

  for (const [code, deeplCode] of Object.entries(TARGET_LANGS)) {
    process.stdout.write(`🌐 ${langNames[code]} çeviriliyor `);
    try {
      translated[code] = await translateObject(trTranslation, deeplCode);
      console.log(" ✅");
    } catch (e) {
      console.log(` ❌\n   Hata: ${e.message}`);
      translated[code] = resources[code]?.translation || {};
    }
  }

  const newResources = {
    en: { translation: translated.en },
    tr: resources.tr,
    de: { translation: translated.de },
    fr: { translation: translated.fr },
  };

  const newResourcesStr = "const resources = " + JSON.stringify(newResources, null, 2) + ";";
  const newContent = fileContent.replace(
    /const resources\s*=\s*\{[\s\S]+?\};(\s*\n(?:const|export))/,
    newResourcesStr + "$1"
  );

  fs.writeFileSync(I18N_FILE, newContent, "utf-8");
  console.log(`\n✨ src/i18n.ts güncellendi!`);
  console.log("🎉 Tamamlandı! Bundan sonra sadece tr bloğunu düzenle ve tekrar çalıştır.\n");
}

main().catch((e) => { console.error("❌ Hata:", e.message); process.exit(1); });
