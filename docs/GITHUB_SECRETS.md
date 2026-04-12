# GitHub Secrets（shaho-website）

**値はリポジトリにコミットしない。** 次の手順で [Repository secrets](https://github.com/Shaho-Well-being/shaho-website/settings/secrets/actions) に登録する。

## 必須（AI ブログ・SNS ワークフロー）

| Secret 名 | 用途 |
|-----------|------|
| `GEMINI_API_KEY` | `generate-blog-post.ts` / `generate-marketing-sns.ts`（Google AI Studio で発行） |

## 週次ブログで microCMS に下書き入稿する場合（推奨）

`content-agent.yml` が記事生成のあと `publish-blog-to-microcms.ts --draft` を実行する。

| Secret 名 | 用途 |
|-----------|------|
| `MICROCMS_SERVICE_DOMAIN` | サービス ID（例: `shaho-website`、`.microcms.io` は含めない） |
| `MICROCMS_API_KEY` | コンテンツ API キー。**ブログ API に対して POST が有効**なキーを使う |
| `MICROCMS_BLOG_CATEGORY_ID` | **任意**。未設定のときカテゴリ API で 1 件なら自動。複数カテゴリがある場合は **必ず設定** |

### セキュリティ

- キーは **Environment secrets** や **Organization secrets** に寄せることも可能（Org ポリシーに合わせる）。
- **Fork からの PR では Secrets が渡らない**（意図された動作）。スケジュール／`main` 直プッシュ相当の実行でのみ有効。
- ローテーション時は microCMS 管理画面でキーを再発行し、GitHub の Secret を更新する。

## CLI で登録する例（ローカル）

```bash
gh secret set GEMINI_API_KEY --repo Shaho-Well-being/shaho-website
# プロンプトに貼り付け、または
printf '%s' 'your-key' | gh secret set GEMINI_API_KEY --repo Shaho-Well-being/shaho-website
```

`MICROCMS_*` も同様に `gh secret set` で登録できる。

## CI と `pnpm-lock.yaml`

GitHub Actions（`content-agent.yml` / `marketing-agent.yml`）は **`pnpm install`** を使う（frozen lockfile）。

`package.json` の依存を変えたら、**ローカルで `pnpm install` を実行し、更新された `pnpm-lock.yaml` をコミット**してください。未更新だと `ERR_PNPM_OUTDATED_LOCKFILE` で CI が失敗します。

npm のみ使う場合でも、上記ワークフロー用に **pnpm で lock を更新**するか、CI を `npm ci` に切り替える必要があります（現状は pnpm 前提）。
