SAAS_STRATEGY.md

# 社宝 SaaSサイト構築要件（SAAS_STRATEGY）

## 1. プロジェクト概要

LP（shaho-life.com）から、高機能なSaaSプラットフォーム「社宝」のサービスサイトへ移行する。
ターゲットは「人事・経営者（管理者）」と「従業員（エンドユーザー）」の両方。

## 2. 技術スタック

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Language: TypeScript

## 3. 構築すべきサイトマップ（ディレクトリ構造）

現在の `app/(marketing)/` 配下に、以下の構造を構築すること。
※すでに存在するページは上書きせず、不足しているディレクトリと `page.tsx` を新規作成する。

app/(marketing)/
├── solutions/ # 課題別の訴求ページ
│ ├── stress-check/page.tsx # ストレスチェック・法令対応
│ ├── engagement/page.tsx # 福利厚生の利用率・従業員満足度
│ └── health-management/page.tsx # 健康経営優良法人の認定
│
├── features/ # 機能詳細ページ
│ ├── page.tsx # 機能の全体像（既存）
│ ├── admin-web/page.tsx # 人事・管理者向け機能
│ └── employee-app/page.tsx # 従業員向けモバイルアプリ機能
│
└── resources/ # リード獲得（お役立ち資料）
└── page.tsx

## 4. 実装のルール（Claudeへの指示）

- **プレースホルダーの作成:** 新規作成する `page.tsx` には、複雑なUIはまだ不要。各ページの役割がわかるように、Heroセクション風の簡素なUI（Tailwindでスタイリングした `<h1>` タイトルと `<p>` の説明文、仮のボタン等）を実装すること。
- **ナビゲーションの更新:** 新しく作ったページへ遷移できるように、`components/` 配下にあるヘッダー（SiteHeader等）とフッター（SiteFooter等）のリンクをこのサイトマップに合わせて適切に書き換えること。
