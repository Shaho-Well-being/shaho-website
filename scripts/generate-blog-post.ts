#!/usr/bin/env npx tsx
/**
 * AIコンテンツ部 - ブログ記事手動生成スクリプト（Google Gemini API）
 * 使い方:
 *   npm run generate-post
 *   npm run generate-post -- --keyword "ストレスチェック 義務"
 *   npm run generate-post -- --keyword "健康経営優良法人" --words 2500
 *
 * 環境変数: GEMINI_API_KEY（必須）。任意で GEMINI_MODEL（既定: gemini-2.5-flash／AI Studio の上限表示と揃える）
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateContentWithRetry } from "./gemini-retry";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

/** Next.js と同様、ローカルでは `.env.local` にシークレットを置く（tsx 単体実行用） */
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

const args = process.argv.slice(2);
const getArg = (flag: string) => {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : undefined;
};
const keyword = getArg("--keyword");
const wordCount = parseInt(getArg("--words") ?? "2000", 10);

const contentSop = fs.readFileSync(path.join(ROOT, "agents/content/CLAUDE.md"), "utf-8");
const orgCharter = fs.readFileSync(path.join(ROOT, "CLAUDE.md"), "utf-8");
const blogDir = path.join(ROOT, "content/blog");
const existingPosts = fs.existsSync(blogDir)
  ? fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx")).join("\n")
  : "(まだ記事なし)";

const prompt = `
あなたは Shaho の AI コンテンツ部員です。
以下の組織憲章と SOP に従い、ブログ記事を 1 本生成してください。

# 組織憲章
${orgCharter}

# コンテンツ部 SOP
${contentSop}

# 既存記事（重複禁止）
${existingPosts}

# 生成条件
- ターゲットキーワード: ${keyword ?? "SOP のカテゴリから最適なものを選んでください"}
- 目標文字数: ${wordCount} 字前後
- 出力形式: frontmatter 付きの MDX 形式のみ。他のテキストは不要です。
- date フィールド: ${new Date().toISOString().split("T")[0]}
`;

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error(
      "❌ GEMINI_API_KEY が設定されていません。.env.local または環境変数で設定してください。"
    );
    process.exit(1);
  }

  const modelName = process.env.GEMINI_MODEL ?? "gemini-2.5-flash";
  console.log(`🤖 AI コンテンツ部: 記事を生成中…（${modelName}）`);

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: modelName,
    generationConfig: { maxOutputTokens: 8192 },
  });

  const result = await generateContentWithRetry(model, prompt);
  const response = result.response;
  const content = response.text().trim();
  if (!content) {
    console.error("❌ 生成失敗");
    process.exit(1);
  }

  const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  const title = titleMatch ? titleMatch[1] : "weekly-blog";
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 50);
  const date = new Date().toISOString().split("T")[0];
  const filename = `${date}-${slug}.mdx`;

  if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });
  fs.writeFileSync(path.join(blogDir, filename), content, "utf-8");

  const u = response.usageMetadata;
  const tin = u?.promptTokenCount ?? "?";
  const tout = u?.candidatesTokenCount ?? "?";

  console.log(`\n✅ 記事を生成: content/blog/${filename}`);
  console.log(`📝 タイトル: ${title}`);
  console.log(`📊 トークン: ${tin} in / ${tout} out`);
  console.log(`\n次のステップ:`);
  console.log(`  git add content/blog/${filename}`);
  console.log(`  git commit -m "[AI-Content] ${title}"`);
  console.log(`  gh pr create --title "[AI-Content] ${title}" --base main`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
