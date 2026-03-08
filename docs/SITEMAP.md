# 社宝サイト サイトマップ・骨組み

最終更新: 2025年3月（SAAS_STRATEGY に基づく構造）

---

## 1. ルート構造（App Router）

```
app/
├── layout.tsx                 # ルートレイアウト（フォント、metadata、Analytics）
├── globals.css
└── (marketing)/               # マーケティング用レイアウトグループ
    ├── layout.tsx             # SiteHeader + main + SiteFooter
    ├── page.tsx               # トップページ /
    ├── about/
    │   └── page.tsx           # 会社概要 /about
    ├── blog/
    │   ├── page.tsx           # ブログ一覧 /blog
    │   └── [id]/
    │       └── page.tsx       # ブログ記事詳細 /blog/:id
    ├── case-studies/
    │   ├── page.tsx           # 導入事例一覧 /case-studies
    │   └── [id]/
    │       └── page.tsx       # 導入事例詳細 /case-studies/:id
    ├── contact/
    │   └── page.tsx           # お問い合わせ /contact
    ├── features/
    │   ├── page.tsx           # 機能一覧 /features
    │   ├── admin-web/
    │   │   └── page.tsx       # 人事・管理者向け機能 /features/admin-web
    │   └── employee-app/
    │       └── page.tsx       # 従業員向けアプリ /features/employee-app
    ├── pricing/
    │   └── page.tsx           # 料金 /pricing
    ├── resources/
    │   └── page.tsx           # お役立ち資料 /resources
    └── solutions/             # 課題別訴求
        ├── stress-check/
        │   └── page.tsx       # ストレスチェック・法令対応 /solutions/stress-check
        ├── engagement/
        │   └── page.tsx       # 福利厚生・従業員満足度 /solutions/engagement
        └── health-management/
            └── page.tsx       # 健康経営優良法人認定 /solutions/health-management
```

---

## 2. URL 一覧（実装済み）

| URL | ページ名 | ファイル |
|-----|----------|----------|
| `/` | トップ | `app/(marketing)/page.tsx` |
| `/about` | 会社概要 | `app/(marketing)/about/page.tsx` |
| `/blog` | ブログ一覧 | `app/(marketing)/blog/page.tsx` |
| `/blog/[id]` | ブログ記事詳細 | `app/(marketing)/blog/[id]/page.tsx` |
| `/case-studies` | 導入事例一覧 | `app/(marketing)/case-studies/page.tsx` |
| `/case-studies/[id]` | 導入事例詳細 | `app/(marketing)/case-studies/[id]/page.tsx` |
| `/contact` | お問い合わせ | `app/(marketing)/contact/page.tsx` |
| `/features` | 機能一覧 | `app/(marketing)/features/page.tsx` |
| `/features/admin-web` | 人事・管理者向け機能 | `app/(marketing)/features/admin-web/page.tsx` |
| `/features/employee-app` | 従業員向けアプリ | `app/(marketing)/features/employee-app/page.tsx` |
| `/pricing` | 料金 | `app/(marketing)/pricing/page.tsx` |
| `/resources` | お役立ち資料 | `app/(marketing)/resources/page.tsx` |
| `/solutions/stress-check` | ストレスチェック・法令対応 | `app/(marketing)/solutions/stress-check/page.tsx` |
| `/solutions/engagement` | 福利厚生・従業員満足度 | `app/(marketing)/solutions/engagement/page.tsx` |
| `/solutions/health-management` | 健康経営優良法人認定 | `app/(marketing)/solutions/health-management/page.tsx` |

---

## 3. リンク先のみ（未実装ページ）

| URL | 想定ページ名 | リンク元 |
|-----|----------------|----------|
| `/careers` | 採用情報 | 会社概要、フッター |
| `/terms` | 利用規約 | フッター |
| `/privacy` | プライバシーポリシー | フッター |
| `/security` | セキュリティ | フッター |
| `/legal` | 特定商取引法に基づく表記 | フッター |

---

## 4. トップページ（/）の構成

- **Hero** … キャッチコピー、CTA（無料デモ・製品紹介）、導入企業
- **Stats** … 数値・実績
- **FeaturesOverview** … 機能4つの概要 → `/features` 等へ
- **Testimonials** … お客様の声（導入事例へのリンク）
- **BlogPreview** … ブログ記事 3 件（microCMS またはモック）
- **CTA** … 無料デモ・資料請求

---

## 5. 共通レイアウト（SAAS_STRATEGY 準拠）

- **SiteHeader**
  - ロゴ → `/`
  - ナビ: 課題別 `/solutions/stress-check`、機能 `/features`、お役立ち `/resources`、導入事例 `/case-studies`、ブログ `/blog`、料金 `/pricing`、会社概要 `/about`
  - お問い合わせ、無料デモを予約 → `/contact`, `/contact?type=demo`
- **SiteFooter**
  - 課題別・機能: ストレスチェック、従業員満足度、健康経営認定、機能一覧、管理画面、従業員アプリ、料金
  - リソース: お役立ち資料 `/resources`、導入事例、ブログ
  - 会社情報: 会社概要、採用情報、お問い合わせ
  - 法的情報: 利用規約、プライバシーポリシー、セキュリティ、特定商取引法表記

---

## 6. データソース（microCMS）

| エンドポイント | 用途 |
|----------------|------|
| `blog` | ブログ一覧・記事詳細 |
| `categories` | ブログカテゴリ（ブログから参照） |
| `case-studies` | 導入事例一覧・詳細 |

未設定時は `lib/microcms.ts` の `mockBlogPosts` / `mockCaseStudies` を使用。

---

## 7. 更新時のチェックリスト

- [ ] 新規ページを追加したら、この SITEMAP の「実装済み」に追加
- [ ] ヘッダー・フッターのリンク先を変えたら、`site-header.tsx` / `site-footer.tsx` とこの SITEMAP を同期
- [ ] microCMS の API を増やしたら「データソース」を更新
