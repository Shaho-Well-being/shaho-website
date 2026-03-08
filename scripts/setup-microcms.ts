/**
 * microCMS API スキーマ自動生成スクリプト
 *
 * lib/microcms.ts の型定義（BlogPost, CaseStudy, Category）に基づき、
 * 管理画面の「APIスキーマ ファイルインポート」で使える JSON を生成します。
 *
 * 【重要】microCMS のマネジメントAPI には「APIを新規作成する」POST エンドポイントは
 * 提供されていません。そのため本スクリプトは「インポート用 JSON の生成」を行い、
 * 作成されたファイルを管理画面で手動インポートしていただく運用です。
 *
 * 実行手順:
 * 1. .env.local に MICROCMS_SERVICE_DOMAIN と MICROCMS_MANAGEMENT_API_KEY を設定
 * 2. npm run setup:cms を実行
 * 3. scripts/output/ に出力された JSON を、microCMS 管理画面で各 API 作成時にインポート
 */

const fs = require("fs");
const path = require("path");

// .env.local を読み込む（Node 単体実行用）
function loadEnvLocal() {
  const envPath = path.resolve(process.cwd(), ".env.local");
  if (!fs.existsSync(envPath)) {
    console.warn("警告: .env.local が見つかりません。スキーマ生成は続行します。");
    return;
  }
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

const OUTPUT_DIR = path.resolve(process.cwd(), "scripts", "output");

/** ユニークな idValue を生成（カスタムフィールド内のフィールド用） */
function idValue(prefix: string, i: number): string {
  return `${prefix}-${i}-${Math.random().toString(36).slice(2, 10)}`;
}

/** カスタムフィールド用のタイムスタンプ（インポート用に固定で持たせる） */
function isoNow(): string {
  return new Date().toISOString();
}

// ========== 型マッピング: TypeScript 型 → microCMS kind ==========
// text, textArea, richEditorV2, media, mediaList, date, boolean, select, number, relation, custom, repeat

/** categories API のスキーマ（Category 型に基づく） */
function buildCategoriesSchema(): MicroCMSApiSchema {
  return {
    apiFields: [
      { fieldId: "name", name: "カテゴリ名", kind: "text", required: true },
    ],
    customFields: [],
  };
}

/** blog API のスキーマ（BlogPost 型に基づく） */
function buildBlogSchema(): MicroCMSApiSchema {
  const authorFieldId = "author_detail";
  const authorCreatedAt = isoNow();
  const authorUpdatedAt = isoNow();

  const nameId = idValue("author-name", 0);
  const avatarId = idValue("author-avatar", 1);

  return {
    apiFields: [
      { fieldId: "title", name: "タイトル", kind: "text", required: true },
      { fieldId: "content", name: "本文", kind: "richEditorV2", required: true },
      { fieldId: "excerpt", name: "抜粋", kind: "textArea", required: false },
      {
        fieldId: "category",
        name: "カテゴリ",
        kind: "relation",
        required: true,
        referencedApiEndpoint: "categories",
      },
      { fieldId: "thumbnail", name: "サムネイル画像", kind: "media", required: false },
      {
        fieldId: "author",
        name: "著者",
        kind: "custom",
        required: true,
        customFieldCreatedAt: authorCreatedAt,
      },
    ],
    customFields: [
      {
        fieldId: authorFieldId,
        name: "著者",
        createdAt: authorCreatedAt,
        updatedAt: authorUpdatedAt,
        fields: [
          { idValue: nameId, fieldId: "name", name: "著者名", kind: "text", required: true },
          { idValue: avatarId, fieldId: "avatar", name: "著者画像", kind: "media", required: false },
        ],
        position: [[nameId, avatarId]],
      },
    ],
  };
}

/** case-studies API のスキーマ（CaseStudy 型に基づく） */
function buildCaseStudiesSchema(): MicroCMSApiSchema {
  const companyFieldId = "company_detail";
  const resultsItemFieldId = "results_item";
  const testimonialFieldId = "testimonial_detail";

  const companyCreatedAt = isoNow();
  const companyUpdatedAt = isoNow();
  const resultsItemCreatedAt = isoNow();
  const resultsItemUpdatedAt = isoNow();
  const testimonialCreatedAt = isoNow();
  const testimonialUpdatedAt = isoNow();

  const companyNameId = idValue("company-name", 0);
  const companyIndustryId = idValue("company-industry", 1);
  const companySizeId = idValue("company-size", 2);
  const companyLogoId = idValue("company-logo", 3);

  const metricId = idValue("results-metric", 0);
  const valueId = idValue("results-value", 1);

  const quoteId = idValue("testimonial-quote", 0);
  const authorId = idValue("testimonial-author", 1);
  const roleId = idValue("testimonial-role", 2);

  return {
    apiFields: [
      { fieldId: "title", name: "タイトル", kind: "text", required: true },
      { fieldId: "content", name: "本文", kind: "richEditorV2", required: true },
      { fieldId: "excerpt", name: "抜粋", kind: "textArea", required: false },
      {
        fieldId: "company",
        name: "企業情報",
        kind: "custom",
        required: true,
        customFieldCreatedAt: companyCreatedAt,
      },
      {
        fieldId: "results",
        name: "実績指標",
        kind: "repeat",
        required: false,
        repeatCustomFieldIds: [resultsItemFieldId],
      },
      { fieldId: "thumbnail", name: "サムネイル画像", kind: "media", required: false },
      {
        fieldId: "testimonial",
        name: "お客様の声",
        kind: "custom",
        required: false,
        customFieldCreatedAt: testimonialCreatedAt,
      },
    ],
    customFields: [
      {
        fieldId: companyFieldId,
        name: "企業情報",
        createdAt: companyCreatedAt,
        updatedAt: companyUpdatedAt,
        fields: [
          { idValue: companyNameId, fieldId: "name", name: "企業名", kind: "text", required: true },
          { idValue: companyIndustryId, fieldId: "industry", name: "業種", kind: "text", required: true },
          { idValue: companySizeId, fieldId: "size", name: "規模", kind: "text", required: true },
          { idValue: companyLogoId, fieldId: "logo", name: "企業ロゴ", kind: "media", required: false },
        ],
        position: [[companyNameId], [companyIndustryId], [companySizeId], [companyLogoId]],
      },
      {
        fieldId: resultsItemFieldId,
        name: "実績指標（1件）",
        createdAt: resultsItemCreatedAt,
        updatedAt: resultsItemUpdatedAt,
        fields: [
          { idValue: metricId, fieldId: "metric", name: "指標名", kind: "text", required: true },
          { idValue: valueId, fieldId: "value", name: "数値・結果", kind: "text", required: true },
        ],
        position: [[metricId, valueId]],
      },
      {
        fieldId: testimonialFieldId,
        name: "お客様の声",
        createdAt: testimonialCreatedAt,
        updatedAt: testimonialUpdatedAt,
        fields: [
          { idValue: quoteId, fieldId: "quote", name: "引用文", kind: "textArea", required: false },
          { idValue: authorId, fieldId: "author", name: "発言者名・役職", kind: "text", required: false },
          { idValue: roleId, fieldId: "role", name: "会社名", kind: "text", required: false },
        ],
        position: [[quoteId], [authorId], [roleId]],
      },
    ],
  };
}

// ========== 型定義（Management API GET /apis/{endpoint} と互換） ==========
interface MicroCMSApiSchema {
  apiFields: MicroCMSApiField[];
  customFields: MicroCMSCustomField[];
}

interface MicroCMSApiField {
  fieldId: string;
  name: string;
  kind: "text" | "textArea" | "richEditorV2" | "media" | "mediaList" | "date" | "boolean" | "select" | "number" | "relation" | "custom" | "repeat";
  required: boolean;
  referencedApiEndpoint?: string;
  customFieldCreatedAt?: string;
  repeatCustomFieldIds?: string[];
  [key: string]: unknown;
}

interface MicroCMSCustomField {
  fieldId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  fields: { idValue: string; fieldId: string; name: string; kind: string; required: boolean }[];
  position: string[][];
}

// ========== Management API で接続確認（任意） ==========
async function verifyManagementApi(): Promise<boolean> {
  const domain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_MANAGEMENT_API_KEY;

  if (!domain || !apiKey) {
    console.log(
      "（任意）MICROCMS_MANAGEMENT_API_KEY が未設定のため、Management API の確認をスキップしました。\n" +
        "  ※ スキーマJSONの生成は正常に完了しています。\n" +
        "  ※ 管理画面で「APIキー」→ マネジメントAPI用キーを発行し、.env.local に MICROCMS_MANAGEMENT_API_KEY として追加すると、次回から接続確認が行われます。"
    );
    return false;
  }

  const url = `https://${domain}.microcms-management.io/api/v1/apis`;
  try {
    const res = await fetch(url, {
      headers: { "X-MICROCMS-API-KEY": apiKey },
    });
    if (!res.ok) {
      console.warn(`Management API 接続失敗: ${res.status} ${res.statusText}`);
      return false;
    }
    const data = (await res.json()) as { apis?: { endpoint: string; name: string }[] };
    console.log("Management API 接続成功。既存API一覧:", (data.apis ?? []).map((a) => a.endpoint).join(", ") || "（なし）");
    return true;
  } catch (e) {
    console.warn("Management API 接続エラー:", e instanceof Error ? e.message : e);
    return false;
  }
}

// ========== メイン: スキーマ生成とファイル出力 ==========
async function main() {
  console.log("=== microCMS スキーマ生成（lib/microcms.ts の型定義に基づく） ===\n");

  await verifyManagementApi();
  console.log("");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const schemas: { name: string; endpoint: string; type: "list" | "object"; schema: MicroCMSApiSchema }[] = [
    { name: "カテゴリ", endpoint: "categories", type: "list", schema: buildCategoriesSchema() },
    { name: "ブログ", endpoint: "blog", type: "list", schema: buildBlogSchema() },
    { name: "導入事例", endpoint: "case-studies", type: "list", schema: buildCaseStudiesSchema() },
  ];

  for (const { name, endpoint, schema } of schemas) {
    const filename = `${endpoint}-schema.json`;
    const filepath = path.join(OUTPUT_DIR, filename);
    fs.writeFileSync(filepath, JSON.stringify(schema, null, 2), "utf-8");
    console.log(`出力: ${filepath} (${name})`);
  }

  console.log(`
完了。次の手順で microCMS に反映してください。

1. カテゴリ API
   - 管理画面で「新しいAPIを作成」→ 自分で決める
   - API名: カテゴリ / エンドポイント: categories / 型: リスト形式
   - 「APIスキーマを定義」で「ファイルインポート」→ scripts/output/categories-schema.json を選択

2. ブログ API
   - 同様に API名: ブログ / エンドポイント: blog / 型: リスト形式
   - ファイルインポート → scripts/output/blog-schema.json
   - 作成後、フィールド「カテゴリ」の参照先を「categories」に手動設定（未設定の場合）

3. 導入事例 API
   - API名: 導入事例 / エンドポイント: case-studies / 型: リスト形式
   - ファイルインポート → scripts/output/case-studies-schema.json
`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
