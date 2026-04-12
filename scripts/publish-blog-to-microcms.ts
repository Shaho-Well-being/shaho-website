/**
 * content/blog の MDX を microCMS の「ブログ」APIに新規投稿する。
 *
 * 必要な環境変数（.env.local 可）:
 * - MICROCMS_SERVICE_DOMAIN
 * - MICROCMS_API_KEY … 管理画面「APIキー」で対象APIに POST 権限が有効なキー（読み取り専用だと 403 になります）
 * - MICROCMS_BLOG_CATEGORY_ID … 省略可。省略時はカテゴリAPIを取得し、1件だけならそのIDを使う。複数ある場合は一覧を表示して終了するので、IDを設定するか --category で指定。
 *
 * 使い方:
 *   npm run publish-post -- --file content/blog/2026-04-12-50.mdx
 *   npm run publish-post   … content/blog 内で名前が最新の .mdx を投稿
 *   npm run publish-post -- --draft … 下書きで作成（?status=draft）
 *   npm run publish-post -- --category 0nflaz8zomb
 */
import { marked } from "marked";
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

const args = process.argv.slice(2);
const getArg = (flag: string) => {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : undefined;
};
const fileArg = getArg("--file");
const categoryArg = getArg("--category");
const draft = args.includes("--draft");

type CategoryRow = { id: string; name?: string };

async function fetchCategories(
  domain: string,
  apiKey: string
): Promise<CategoryRow[]> {
  const url = `https://${domain}.microcms.io/api/v1/categories?limit=100`;
  const res = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": apiKey },
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`カテゴリ取得失敗 HTTP ${res.status}: ${t}`);
  }
  const data = (await res.json()) as { contents?: CategoryRow[] };
  return data.contents ?? [];
}

async function resolveCategoryId(
  domain: string,
  apiKey: string
): Promise<string> {
  if (categoryArg) return categoryArg;
  const fromEnv = process.env.MICROCMS_BLOG_CATEGORY_ID;
  if (fromEnv) return fromEnv;

  console.log("ℹ️ MICROCMS_BLOG_CATEGORY_ID 未設定のため、カテゴリAPIから取得します…");
  const list = await fetchCategories(domain, apiKey);
  if (list.length === 0) {
    console.error(
      "❌ カテゴリが0件です。microCMS でカテゴリを作成してから再実行してください。"
    );
    process.exit(1);
  }
  if (list.length === 1) {
    const c = list[0];
    console.log(
      `ℹ️ カテゴリが1件のため自動選択: ${c.name ?? "(無名)"} (${c.id})`
    );
    return c.id;
  }
  console.error("❌ カテゴリが複数あります。次のいずれかを .env.local に設定するか、--category で指定してください。\n");
  for (const c of list) {
    console.error(`   ${c.id}  … ${c.name ?? ""}`);
  }
  process.exit(1);
}

function stripOuterCodeFence(raw: string): string {
  let s = raw.trim();
  if (!s.startsWith("```")) return s;
  const firstLineEnd = s.indexOf("\n");
  if (firstLineEnd === -1) return s;
  s = s.slice(firstLineEnd + 1);
  if (s.trimEnd().endsWith("```")) {
    const li = s.lastIndexOf("```");
    s = s.slice(0, li).trimEnd();
  }
  return s;
}

function parseFrontmatter(bodyAfterStrip: string): {
  title: string;
  description: string;
  markdown: string;
} {
  if (!bodyAfterStrip.startsWith("---")) {
    throw new Error("YAML frontmatter（先頭の ---）が見つかりません");
  }
  const end = bodyAfterStrip.indexOf("\n---", 3);
  if (end === -1) throw new Error("frontmatter の終わり（---）が見つかりません");
  const yamlBlock = bodyAfterStrip.slice(3, end).trim();
  const markdown = bodyAfterStrip.slice(end + 4).trim();

  const title =
    yamlBlock.match(/^title:\s*["'](.+)["']\s*$/m)?.[1] ??
    yamlBlock.match(/^title:\s*(.+)\s*$/m)?.[1]?.replace(/^["']|["']$/g, "") ??
    "";
  const description =
    yamlBlock.match(/^description:\s*["'](.+)["']\s*$/m)?.[1] ??
    yamlBlock.match(/^description:\s*(.+)\s*$/m)?.[1]?.replace(/^["']|["']$/g, "") ??
    "";

  return { title, description, markdown };
}

function pickLatestMdx(): string {
  const dir = path.join(ROOT, "content/blog");
  if (!fs.existsSync(dir)) throw new Error("content/blog が存在しません");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ f, t: fs.statSync(path.join(dir, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t);
  if (files.length === 0) throw new Error("content/blog に .mdx がありません");
  return path.join(dir, files[0].f);
}

async function main() {
  const domain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!domain || !apiKey) {
    console.error("❌ MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください。");
    process.exit(1);
  }

  const categoryId = await resolveCategoryId(domain, apiKey);

  const mdxPath = fileArg ? path.resolve(ROOT, fileArg) : pickLatestMdx();
  if (!fs.existsSync(mdxPath)) {
    console.error(`❌ ファイルがありません: ${mdxPath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(mdxPath, "utf-8");
  const stripped = stripOuterCodeFence(raw);
  const { title, description, markdown } = parseFrontmatter(stripped);

  if (!title) {
    console.error("❌ frontmatter から title を取得できませんでした。");
    process.exit(1);
  }

  const contentHtml = await marked.parse(markdown, { gfm: true });
  const excerpt =
    description ||
    markdown.replace(/^#+\s+/gm, "").replace(/\n+/g, " ").slice(0, 200).trim();

  const url = new URL(`https://${domain}.microcms.io/api/v1/blog`);
  if (draft) url.searchParams.set("status", "draft");

  const res = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": apiKey,
    },
    body: JSON.stringify({
      title,
      content: contentHtml,
      excerpt,
      category: categoryId,
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error(`❌ microCMS エラー HTTP ${res.status}`);
    console.error(text);
    process.exit(1);
  }

  let id: string | undefined;
  try {
    id = JSON.parse(text).id as string | undefined;
  } catch {
    /* ignore */
  }
  console.log(`✅ microCMS に投稿しました（${draft ? "下書き" : "公開"}）`);
  console.log(`   ファイル: ${path.relative(ROOT, mdxPath)}`);
  if (id) console.log(`   コンテンツID: ${id}`);
  console.log(`   管理画面: https://${domain}.microcms.io/apis/blog`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
