# 社宝サイト サイトマップ・導線

最終更新: 2026年6月

---

## 1. ルート構造（App Router）

```
app/
├── layout.tsx
├── globals.css
└── (marketing)/
    ├── layout.tsx              # SiteHeader + main + SiteFooter
    ├── page.tsx                # トップ /
    ├── about/page.tsx          # 会社概要
    ├── blog/
    │   ├── page.tsx            # ブログ一覧
    │   └── [id]/page.tsx       # 記事詳細
    ├── case-studies/page.tsx   # 専門家の推薦（旧・導入事例パス）
    ├── contact/page.tsx        # お問い合わせ
    ├── faq/page.tsx            # よくある質問
    ├── features/
    │   ├── page.tsx            # 機能一覧
    │   ├── admin-web/page.tsx  # 管理画面
    │   └── employee-app/page.tsx
    ├── legal/page.tsx          # 特定商取引法
    ├── pricing/page.tsx
    ├── privacy/page.tsx
    ├── resources/page.tsx      # お役立ち資料（一覧は今後実装）
    ├── terms/page.tsx
    └── solutions/
        ├── page.tsx            # 課題別一覧
        ├── stress-check/page.tsx
        ├── engagement/page.tsx
        └── health-management/page.tsx  # 健康経営優良法人（証跡訴求も含む統合LP）
```

### リダイレクト（`next.config.mjs`）

| 旧URL | 新URL | 理由 |
|-------|-------|------|
| `/health-management-support` | `/solutions/health-management` | 健康経営LPの重複解消（301） |

---

## 2. URL 一覧

| URL | ページ名 | 導線の主な入口 |
|-----|----------|----------------|
| `/` | トップ | ロゴ |
| `/features` | 機能一覧 | ヘッダー、フッター、TOP |
| `/features/admin-web` | 管理画面 | フッター、`/features` |
| `/features/employee-app` | 従業員アプリ | フッター、`/features` |
| `/solutions` | 課題別一覧 | ヘッダー、フッター |
| `/solutions/stress-check` | ストレスチェック | フッター、`/solutions`、`/features` |
| `/solutions/engagement` | 福利厚生・満足度 | フッター、`/solutions`、`/features` |
| `/solutions/health-management` | 健康経営優良法人 | フッター、`/solutions`、`/features`、TOP（kenko-keiei） |
| `/pricing` | 料金 | ヘッダー、フッター、TOP |
| `/resources` | お役立ち資料 | **フッターのみ**（資料一覧は今後実装） |
| `/case-studies` | 専門家の推薦 | ヘッダー、フッター、TOP |
| `/blog` | ブログ | ヘッダー、フッター、TOP |
| `/blog/[id]` | ブログ記事 | `/blog`、TOP |
| `/about` | 会社概要 | ヘッダー、フッター |
| `/contact` | お問い合わせ | ヘッダー、フッター、各LPのCTA |
| `/faq` | よくある質問 | フッター、TOPのFAQ欄 |
| `/terms` | 利用規約 | フッター |
| `/privacy` | プライバシーポリシー | フッター、お問い合わせフォーム |
| `/legal` | 特定商取引法 | フッター |

### 意図的にリンクしていないもの

| URL | 備考 |
|-----|------|
| `/careers` | 未実装。フッターからリンク削除済み |
| `/help` | 未実装。お問い合わせからリンク削除済み |

---

## 3. グローバルナビ

### ヘッダー（`site-header.tsx`）

| ラベル | href |
|--------|------|
| 機能 | `/features` |
| 課題別 | `/solutions` |
| ブログ | `/blog` |
| 専門家の推薦 | `/case-studies` |
| 料金 | `/pricing` |
| 会社概要 | `/about` |
| お問い合わせ（CTA） | `/contact` |

※ `/resources` は資料一覧実装までヘッダー非掲載（フッターからのみ）

### フッター（`site-footer.tsx`）

- **課題別・機能:** `/solutions`、3課題、`/features`、管理画面、従業員アプリ、`/pricing`
- **リソース:** `/resources`、`/case-studies`、`/blog`
- **会社情報:** `/about`、`/contact`
- **法的情報:** `/terms`、`/privacy`、セキュリティ（外部）、反社（外部）、`/faq`、`/legal`

---

## 4. トップページ（/）の構成

| セクション | 主なリンク先 |
|------------|--------------|
| Hero | `/contact`、資料請求 |
| SocialProof / Stats | — |
| FeaturesOverview | `/features` |
| KenkoKeiei（健康経営） | `/solutions/health-management`、`/contact` |
| Comparison | — |
| ExpertEndorsements | `/case-studies` |
| PricingTeaser | `/pricing`、`/contact` |
| FAQ | `/faq` |
| BlogPreview | `/blog` |
| CTA | `/contact` |

---

## 5. データソース（microCMS）

| エンドポイント | 用途 |
|----------------|------|
| `blog` | ブログ一覧・記事詳細 |
| `categories` | ブログカテゴリ |

未設定時は `lib/microcms.ts` のモックデータを使用。

---

## 6. 更新時のチェックリスト

- [ ] 新規ページ追加 → この SITEMAP の URL 一覧に追記
- [ ] ヘッダー・フッター変更 → `site-header.tsx` / `site-footer.tsx` と同期
- [ ] ページ統合・削除 → `next.config.mjs` の `redirects` を更新
- [ ] 404 リンクがないか `rg 'href="/'` で全件 grep
