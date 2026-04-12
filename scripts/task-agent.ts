/**
 * AI タスクエージェント
 *
 * Discussion の指示を Gemini に送り、自リポのコードベースを文脈に含めて
 * 調査・分析結果を返す。
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateContentWithRetry } from "./gemini-retry";
import fs from "fs";
import path from "path";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY ?? "";
const GEMINI_MODEL = process.env.GEMINI_MODEL ?? "gemini-2.5-flash";
const DISCUSSION_TITLE = process.env.DISCUSSION_TITLE ?? "";
const DISCUSSION_BODY = process.env.DISCUSSION_BODY ?? "";
const DEPARTMENT = process.env.DEPARTMENT ?? "";
const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/tmp/task-result.md";

if (!GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY が未設定です");
  process.exit(1);
}

function collectFiles(
  dir: string,
  base: string = dir,
  result: string[] = [],
): string[] {
  if (!fs.existsSync(dir)) return result;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(base, full);
    if (
      entry.name.startsWith(".") ||
      entry.name === "node_modules" ||
      entry.name === ".next"
    )
      continue;
    if (entry.isDirectory()) {
      collectFiles(full, base, result);
    } else {
      result.push(rel);
    }
  }
  return result;
}

function readFileSafe(filePath: string, maxLines = 200): string | null {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");
    if (lines.length > maxLines) {
      return (
        lines.slice(0, maxLines).join("\n") +
        `\n... (以降 ${lines.length - maxLines} 行省略)`
      );
    }
    return content;
  } catch {
    return null;
  }
}

function buildRepoContext(): { tree: string; fileContents: string } {
  const root = process.cwd();
  const allFiles = collectFiles(root);
  const tree = allFiles.join("\n");

  const keyFiles = [
    "package.json",
    "CLAUDE.md",
    "agents/content/CLAUDE.md",
    "agents/marketing/CLAUDE.md",
    "agents/engineering/CLAUDE.md",
    "docs/SITEMAP.md",
    "next.config.js",
    "next.config.mjs",
    "next.config.ts",
    "tsconfig.json",
    "app/layout.tsx",
    "app/page.tsx",
    "app/blog/page.tsx",
    "app/blog/[slug]/page.tsx",
  ];

  const fileContents: string[] = [];
  for (const f of keyFiles) {
    const full = path.join(root, f);
    const content = readFileSafe(full);
    if (content) {
      fileContents.push(`### ${f}\n\`\`\`\n${content}\n\`\`\``);
    }
  }

  return { tree, fileContents: fileContents.join("\n\n") };
}

async function main() {
  console.log(`📋 タスク: ${DISCUSSION_TITLE}`);
  console.log(`🏢 部署: ${DEPARTMENT}`);

  const { tree, fileContents } = buildRepoContext();

  const prompt = `あなたは「社宝（Shaho）」という日本の健康経営SaaSの AI ${DEPARTMENT}のエージェントです。

## あなたへの指示（Discussion より）

**タイトル**: ${DISCUSSION_TITLE}

**内容**:
${DISCUSSION_BODY}

## 対象リポジトリ（shaho-website）の構成

\`\`\`
${tree}
\`\`\`

## 主要ファイルの内容

${fileContents}

## 回答ルール

1. Discussion の指示に対して、具体的な調査結果・分析・提案を日本語で返してください。
2. コードの変更が必要な場合は、具体的なコード例を含めてください。
3. ステップバイステップのアクション項目をチェックリスト形式で最後にまとめてください。
4. 不明点や判断が必要な事項は「⚠️ 確認事項」として明記してください。
5. 医療・法律の断定はしない。競合の誹謗はしない。
6. マークダウン形式で出力してください。

回答:`;

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

  console.log("🤖 Gemini に送信中…");
  const result = await generateContentWithRetry(model, prompt);
  const text = result.response.text();

  const output = `## 🤖 AI ${DEPARTMENT} 調査結果

> **タスク**: ${DISCUSSION_TITLE}
> **モデル**: ${GEMINI_MODEL}
> **実行日時**: ${new Date().toISOString()}

---

${text}

---
*この回答は GitHub Actions（task-agent）で自動生成されました。内容に問題があればコメントで指示してください。*`;

  fs.writeFileSync(OUTPUT_PATH, output, "utf-8");
  console.log(`✅ 結果を ${OUTPUT_PATH} に出力しました`);
}

main().catch((e: Error) => {
  console.error("❌ タスク実行に失敗:", e.message ?? e);

  const errorOutput = `## ❌ AI ${DEPARTMENT} タスク実行失敗

> **タスク**: ${DISCUSSION_TITLE}
> **エラー**: ${e.message ?? "不明なエラー"}
> **実行日時**: ${new Date().toISOString()}

Gemini API の呼び出しに失敗しました。管理者は以下を確認してください:
- \`GEMINI_API_KEY\` が Secrets に登録されているか
- API クォータに余裕があるか

---
*この通知は GitHub Actions で自動生成されました。*`;

  fs.writeFileSync(OUTPUT_PATH, errorOutput, "utf-8");
  process.exit(1);
});
