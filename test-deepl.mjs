import https from "https";

const API_KEY = process.env.DEEPL_API_KEY;

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
        console.log("Status:", res.statusCode);
        console.log("Raw response:", data);
      });
    });
    req.on("error", reject);
    req.write(bodyStr);
    req.end();
  });
}

httpsPost(
  "https://api-free.deepl.com/v2/translate",
  {
    "Authorization": `DeepL-Auth-Key ${API_KEY}`,
    "Content-Type": "application/json",
  },
  { text: ["Merhaba"], source_lang: "TR", target_lang: "EN" }
);
