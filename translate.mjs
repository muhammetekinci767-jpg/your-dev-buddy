// translate.mjs - DeepL Free API
import fs from "fs";
import https from "https";

const API_KEY = process.env.DEEPL_API_KEY;
if (!API_KEY) {
  console.error("❌ DEEPL_API_KEY set edilmemiş.");
  process.exit(1);
}

const I18N_FILE = "./src/i18n.ts";
const TARGET_LANGS = { en: "EN", de: "DE", fr: "FR" };

function httpsPost(url, headers, body) {
  return new Promise((resolve, reject) => {
    const bodyStr = JSON.stringify(body);
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: "POST",
      headers: {
        ...headers,
        "Content-Length": Buffer.byteLength(bodyStr),
      },
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error("Parse hatası: " + data.slice(0, 200))); }
      });
    });
    req.on("error", reject);
    req.write(bodyStr);
    req.end();
  });
}

async function translateText(text, targetLang) {
  if (!text || text.trim() === "") return text;
  const data = await httpsPost(
    "https://api-free.deepl.com/v2/translate",
    {
      "Authorization": `DeepL-Auth-Key ${API_KEY}`,
      "Content-Type": "application/json",
    },
    { text: [text], source_lang: "TR", target_lang: targetLang }
  );
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
  console.log(`💾 Yedek alındı\n`);

  const translated = {};
  const langNames = { en: "İngilizce", de: "Almanca", fr: "Fransızca" };

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
    ...resources,
    en: { translation: translated.en },
    de: { translation: translated.de },
    fr: { translation: translated.fr },
  };

  const newResourcesStr = "const resources = " + JSON.stringify(newResources, null, 2);
  const newContent = fileContent.replace(
    /const resources\s*=\s*\{[\s\S]+?\};\s*\n(?=const|export)/,
    newResourcesStr + ";\n\n"
  );

  fs.writeFileSync(I18N_FILE, newContent, "utf-8");
  console.log(`\n✨ src/i18n.ts güncellendi!`);
  console.log("🎉 Tamamlandı!\n");
}

main().catch((e) => { console.error("❌ Hata:", e.message); process.exit(1); });
