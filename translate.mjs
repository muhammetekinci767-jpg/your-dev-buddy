// translate.mjs - DeepL Free API ile otomatik çeviri
import fs from "fs";

const API_KEY = process.env.DEEPL_API_KEY;
if (!API_KEY) {
  console.error("❌ DEEPL_API_KEY set edilmemiş.");
  console.error("   export DEEPL_API_KEY=key-buraya");
  process.exit(1);
}

const I18N_FILE = "./src/i18n.ts";
const DEEPL_URL = "https://api-free.deepl.com/v2/translate";

const TARGET_LANGS = { en: "EN", de: "DE", fr: "FR" };

async function translateText(text, targetLang) {
  if (!text || text.trim() === "") return text;

  const params = new URLSearchParams();
  params.append("auth_key", API_KEY);
  params.append("text", text);
  params.append("source_lang", "TR");
  params.append("target_lang", targetLang);

  const res = await fetch(DEEPL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  const data = await res.json();
  if (!data.translations) {
    throw new Error(JSON.stringify(data));
  }
  return data.translations[0].text;
}

async function translateObject(obj, targetLang) {
  if (typeof obj === "string") {
    if (obj.trim() === "") return obj;
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
    process.exit(1);
  }

  console.log(`📖 Okunuyor: ${I18N_FILE}`);
  const fileContent = fs.readFileSync(I18N_FILE, "utf-8");

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

  fs.writeFileSync(I18N_FILE + ".backup", fileContent, "utf-8");
  console.log(`💾 Yedek: ${I18N_FILE}.backup\n`);

  let newContent = fileContent;
  const langNames = { en: "İngilizce", de: "Almanca", fr: "Fransızca" };

  for (const [code, deeplCode] of Object.entries(TARGET_LANGS)) {
    process.stdout.write(`🌐 ${langNames[code]} çeviriliyor `);
    try {
      const translated = await translateObject(trTranslation, deeplCode);
      console.log(" ✅");

      // Dosyadaki dil bloğunu bul ve değiştir
      const translatedJson = JSON.stringify({ translation: translated }, null, 2);
      const escapedCode = code.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const langRegex = new RegExp(
        `(  ${escapedCode}:\\s*\\{)([\\s\\S]*?)(\\n  [},])`,
        "m"
      );

      if (langRegex.test(newContent)) {
        newContent = newContent.replace(langRegex, (match, open, middle, close) => {
          const inner = translatedJson
            .split("\n")
            .slice(1, -1)
            .map(l => "  " + l)
            .join("\n");
          return `${open}\n${inner}\n  }${close.includes(",") ? "," : ""}`;
        });
        console.log(`   📝 ${code} güncellendi`);
      } else {
        console.warn(`   ⚠️  ${code} bloğu bulunamadı`);
      }
    } catch (e) {
      console.log(` ❌`);
      console.error(`   Hata: ${e.message}`);
    }
  }

  fs.writeFileSync(I18N_FILE, newContent, "utf-8");
  console.log(`\n✨ Tamamlandı! Bundan sonra sadece tr bloğunu düzenle ve tekrar çalıştır.\n`);
}

main().catch((e) => {
  console.error("❌ Hata:", e.message);
  process.exit(1);
});
