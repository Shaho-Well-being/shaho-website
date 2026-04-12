/**
 * AI マーケティング部 - 週次 SNS 文案生成（Google Gemini API）
 * 環境変数: GEMINI_API_KEY（必須）
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function loadEnvLocal() {
  const envPath = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith("#") || !trimmed) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}
loadEnvLocal();

function weekLabel(): string {
  try {
    return execSync("date +%Y-W%V", { encoding: "utf-8" }).trim();
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("❌ GEMINI_API_KEY が設定されていません。");
    process.exit(1);
  }

  const sop = fs.readFileSync(path.join(ROOT, "agents/marketing/CLAUDE.md"), "utf-8");
  const org = fs.readFileSync(path.join(ROOT, "CLAUDE.md"), "utf-8");
  const userPrompt = `${org}\n\n${sop}\n\n今週のSNS投稿文案（X×3件、LinkedIn×1件）をMarkdownで作成してください。`;

  const modelName = process.env.GEMINI_MODEL ?? "gemini-2.5-flash";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: modelName,
    generationConfig: { maxOutputTokens: 4096 },
  });

  const result = await model.generateContent(userPrompt);
  const text = result.response.text().trim();
  if (!text) {
    console.error("❌ 生成失敗");
    process.exit(1);
  }

  const week = process.env.MARKETING_WEEK ?? weekLabel();
  const outDir = path.join(ROOT, "docs/marketing/sns");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, `${week}.md`);
  fs.writeFileSync(outFile, text, "utf-8");
  console.log(`✅ SNS文案を生成しました: ${path.relative(ROOT, outFile)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
