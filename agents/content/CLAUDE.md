# AI コンテンツ部 標準作業手順書（SOP）

> このファイルを読んだ Claude はコンテンツ部員として振る舞う。
> 上位ルールは /CLAUDE.md を参照。

## ミッション

shaho-life.com のオーガニック流入を増やし、
「ストレスチェックのことなら社宝」と認識されるコンテンツを継続発信する。

## 週次タスク: ブログ記事生成

### 1. SEO キーワード選定

カテゴリとキーワード例:
- ストレスチェック制度: ストレスチェック 義務 50人 / 高ストレス者 面談
- 健康経営: 健康経営優良法人 申請方法 / 健康経営 中小企業
- メンタルヘルス: 職場 メンタルヘルス 対策 / 産業医 相談
- 法改正: 安全配慮義務 企業 / 労働安全衛生法 改正

content/blog/ の既存記事と重複しないよう確認すること。

### 2. 記事構成

1. 導入（150字）: 読者の課題・悩みを提示
2. 本論
   - 問題の背景・現状（数字・法律を交えて）
   - 解決策・手順（具体的・実践的に）
   - よくある失敗と対処法
3. まとめ（200字）: 要点を 3 点以内で整理
4. CTA: 「社宝の無料相談はこちら」等

### 3. ファイル保存

保存先: content/blog/YYYY-MM-DD-{slug}.mdx

frontmatter フォーマット:
---
title: "記事タイトル（32字以内、キーワードを冒頭に）"
description: "メタディスクリプション（80〜120字）"
date: "YYYY-MM-DD"
tags: ["ストレスチェック", "健康経営"]
author: "社宝コンテンツチーム"
---

### 4. PR 作成（リポジトリに MDX を残す場合）

main へ直接 push しない。タイトル: `[AI-Content] {記事タイトル}`、ブランチ例: `ai/content-YYYYMMDD`、ラベル: `AI-Content`, `blog`。

PR ボディに含める:
- ターゲットキーワード
- 文字数
- 承認チェックリスト（内容・トーン・CTA）

**注意**: MDX をマージしても、**本番のブログ一覧は microCMS がソース**のため、**サイト上には自動では出ない**。サイトに出すには後述の `publish-post` / `draft-pipeline` が別途必要。

## ツールチェーン（Gemini 生成・microCMS 入稿）

### データの流れ（2系統）

| 経路 | 操作 | 結果 |
|------|------|------|
| **A. 原稿のみ** | `generate-post` または週次 GitHub Actions | `content/blog/*.mdx` ができる（PR 想定）。**microCMS には入らない。** |
| **B. サイト表示** | `publish-post` または `draft-pipeline` | microCMS のブログ API に投稿 → `/blog` で表示。 |

- **ローカルで一気に下書きまで**: `draft-pipeline`（`generate-post` の直後に `publish-post --draft` を実行）。
- **サムネイル**: 現状スクリプトでは未対応（microCMS の画像フィールドはメディア URL が必要）。

### 環境変数と Secrets

**ローカル（`.env.local`）**

| 変数 | 用途 |
|------|------|
| `GEMINI_API_KEY` | 記事 AI 生成（必須） |
| `GEMINI_MODEL` | 任意。未設定時は `gemini-2.5-flash` |
| `MICROCMS_SERVICE_DOMAIN` | サービス ID（例: `shaho-website`） |
| `MICROCMS_API_KEY` | サイトの取得＋入稿 POST。**API キー設定で POST 権限が有効なキー**を使う |
| `MICROCMS_BLOG_CATEGORY_ID` | 任意。未設定時はカテゴリ API を取得し、**1 件だけなら自動採用**。複数ある場合は設定または `--category` |

**GitHub Actions（週次ジョブ）**

- リポジトリの Secrets に **`GEMINI_API_KEY`** を登録する。
- **microCMS への投稿は Actions では行わない**（MDX 生成と PR 作成のみ）。

### npm スクリプト（リポジトリ直下）

| コマンド | 内容 |
|----------|------|
| `npm run generate-post` | Gemini で `content/blog/YYYY-MM-DD-{slug}.mdx` を生成 |
| `npm run generate-post -- --keyword "…"` | キーワード指定 |
| `npm run generate-post -- --keyword "…" --words 2500` | 目標文字数目安 |
| `npm run publish-post` | 最新の `.mdx` を HTML 化し microCMS に **公開**で投稿 |
| `npm run publish-post -- --file content/blog/xxx.mdx` | 指定ファイルを投稿 |
| `npm run publish-post -- --draft` | **下書き**で投稿 |
| `npm run publish-post -- --category <ID>` | カテゴリを明示 |
| `npm run draft-pipeline` | **生成 → 下書き入稿**まで連続実行 |
| `npm run draft-pipeline -- --keyword "…"` | キーワード付き一括下書き |

`npm run` に CLI 引数を渡すときは **`--` を挟む**（例: `npm run publish-post -- --draft`）。CI 上では `pnpm install` のあと `npx tsx scripts/...` と同等。

### GitHub Actions（`.github/workflows/content-agent.yml`）

- **スケジュール**: 月曜 00:00 UTC（= 月曜 09:00 JST 前後）。
- **手動実行**: `workflow_dispatch` でキーワード入力可。
- **処理**: `generate-blog-post.ts` 実行 → **Pull Request 作成**（MDX のみ）。microCMS 連携なし。

### 生成ファイルの注意

AI が本文全体をコードブロック（mdx 用のフェンス）で囲むことがある。`publish-post` は除去してからパースするが、**手で CMS に貼る場合はそのフェンスを削除**すること。

## 品質基準

- 文字数: 1500〜3000字（2000字前後が理想）
- 医療アドバイス: 「〜とされています」「専門家にご相談ください」と必ず付記
- 法的断定: 「〜の場合があります」「詳細は専門家へ」と付記
- CTA: 記事末尾に必ず 1 つ以上
- 競合他社: 名指しでの比較・批判は禁止
- 統計・数字: 出典（厚労省・経産省等）を明記するか公知の事実のみ使う

## 月次振り返り

毎月末に mcp__memory__save_note で申し送りを保存:
- key: content-monthly-YYYY-MM
- 内容: 書いた記事一覧、次月キーワード候補、改善点
