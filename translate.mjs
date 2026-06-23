// translate.mjs
// Kullanım: node translate.mjs
// Türkçeyi referans alarak EN, DE, FR dillerini otomatik çevirir.
// Önce: export ANTHROPIC_API_KEY=sk-ant-...

import fs from "fs";

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error("❌ ANTHROPIC_API_KEY set edilmemiş.");
  console.error("   Önce terminalde şunu çalıştır: export ANTHROPIC_API_KEY=sk-ant-...");
  process.exit(1);
}

// ─── Dosya yolu ─────────────────────────────────────────────────────────────
const I18N_FILE = "./src/i18n.ts";
// ────────────────────────────────────────────────────────────────────────────

const TARGET_LANGS = {
  en: "English",
  de: "German",
  fr: "French",
};

async function callClaude(prompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 8000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.content[0].text;
}

async function translateToLang(trObj, langName) {
  const prompt = `You are a professional translator for a fashion e-commerce website called "Svamp Studios".

Translate the following JavaScript/JSON object's VALUES from Turkish to ${langName}.

STRICT RULES:
- Keep all object KEYS exactly as-is (do not translate keys)
- Translate only string VALUES
- Keep these EXACTLY as-is (do not translate): brand names, email addresses, Instagram handles (@svamp.studios), measurement values (cm), symbols (■, •, ©, ±), numbers, "Womenwear", "Menwear", "Denim", "FAQ", "S/M", "L/XL", "STANDARD", "One Size", "TR / EU"
- Strings that are just " " (a single space) must stay as " "
- Arrays: translate each string element individually
- Return ONLY valid JSON — no explanation, no markdown backticks, no preamble

Turkish source object:
${JSON.stringify(trObj, null, 2)}`;

  const raw = await callClaude(prompt);
  const cleaned = raw.replace(/^```json?\s*/m, "").replace(/\s*```$/m, "").trim();
  return JSON.parse(cleaned);
}

async function main() {
  if (!fs.existsSync(I18N_FILE)) {
    console.error(`❌ Dosya bulunamadı: ${I18N_FILE}`);
    console.error("   Script'i projenin root klasöründen çalıştırdığından emin ol.");
    process.exit(1);
  }

  console.log(`📖 Okunuyor: ${I18N_FILE}`);
  const fileContent = fs.readFileSync(I18N_FILE, "utf-8");

  // tr bloğunun translation objesini çıkar
  // "tr: { translation: { ... } }" bloğunu bul
  // Güvenli yaklaşım: resources objesini dynamic import ile değil, regex+Function ile al
  const resourcesMatch = fileContent.match(/const resources\s*=\s*(\{[\s\S]+?\});\s*\n(?:const|export)/);
  if (!resourcesMatch) {
    console.error("❌ 'const resources' bloğu bulunamadı. Dosya yapısı beklenenden farklı.");
    process.exit(1);
  }

  let resources;
  try {
    resources = Function(`"use strict"; return (${resourcesMatch[1]})`)();
  } catch (e) {
    console.error("❌ resources parse edilemedi:", e.message);
    process.exit(1);
  }

  const trTranslation = resources?.tr?.translation;
  if (!trTranslation) {
    console.error("❌ Türkçe (tr) translation bloğu bulunamadı.");
    process.exit(1);
  }

  console.log("🇹🇷 Türkçe kaynak bulundu.\n");

  // Her dil için çevir
  const translatedMap = {};
  for (const [code, name] of Object.entries(TARGET_LANGS)) {
    process.stdout.write(`🌐 ${name} (${code}) çeviriliyor... `);
    try {
      translatedMap[code] = await translateToLang(trTranslation, name);
      console.log("✅");
    } catch (e) {
      console.log("❌");
      console.error(`   Hata: ${e.message}`);
    }
  }

  // Dosyada her dil bloğunu değiştir
  let newContent = fileContent;

  for (const [code, translated] of Object.entries(translatedMap)) {
    // Her dil için "  en: {" → "  }," arasındaki bloğu bul ve değiştir
    const langBlockRegex = new RegExp(
      `(  ${code}:\\s*\\{\\s*\\n\\s*translation:\\s*)\\{[\\s\\S]*?\\}(,?\\s*\\n  \\})`,
      "m"
    );

    const newBlock = `  ${code}: {\n    translation: ${JSON.stringify(translated, null, 6)
      .split("\n")
      .map((line, i) => (i === 0 ? line : "    " + line))
      .join("\n")}`;

    if (langBlockRegex.test(newContent)) {
      newContent = newContent.replace(langBlockRegex, (match, p1, p2) => {
        return `${p1}${JSON.stringify(translated, null, 6)
          .split("\n")
          .map((line, i) => (i === 0 ? line : "      " + line))
          .join("\n")}${p2}`;
      });
      console.log(`   📝 ${code} bloğu güncellendi.`);
    } else {
      console.warn(`   ⚠️  ${code} bloğu dosyada bulunamadı, atlandı.`);
    }
  }

  // Backup al
  fs.writeFileSync(I18N_FILE + ".backup", fileContent, "utf-8");
  console.log(`\n💾 Yedek: ${I18N_FILE}.backup`);

  fs.writeFileSync(I18N_FILE, newContent, "utf-8");
  console.log(`✨ ${I18N_FILE} güncellendi!`);
  console.log("\n🎉 Tamamlandı! Artık sadece tr bloğunu düzenlemen yeterli.");
}

main().catch((e) => {
  console.error("❌ Beklenmedik hata:", e.message);
  process.exit(1);
});
