/**
 * 記事生成（Gemini）→ microCMS ブログに下書き投稿 までを連続実行する。
 *
 *   npm run draft-pipeline
 *   npm run draft-pipeline -- --keyword "ストレスチェック 義務"
 *   npm run draft-pipeline -- --keyword "..." --words 2500
 *
 * 1) scripts/generate-blog-post.ts
 * 2) scripts/publish-blog-to-microcms.ts --draft（直前に生成された最新の .mdx）
 */
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function run(label: string, args: string[]): number {
  console.log(`\n── ${label} ──\n`);
  const r = spawnSync("npx", ["tsx", ...args], {
    cwd: ROOT,
    stdio: "inherit",
    shell: false,
    env: { ...process.env },
  });
  return r.status ?? 1;
}

const passthrough = process.argv.slice(2);
const genArgs = ["scripts/generate-blog-post.ts", ...passthrough];

const code1 = run("Step 1: 記事 MDX 生成", genArgs);
if (code1 !== 0) process.exit(code1);

const code2 = run("Step 2: microCMS に下書き投稿", [
  "scripts/publish-blog-to-microcms.ts",
  "--draft",
]);
process.exit(code2);
