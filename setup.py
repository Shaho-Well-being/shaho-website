#!/usr/bin/env python3
"""
Shaho AI組織 セットアップスクリプト
使い方: python3 setup.py
shaho-website のルートディレクトリで実行してください。
"""
import os

def write(path, content):
    os.makedirs(os.path.dirname(path) if os.path.dirname(path) else ".", exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  ✅ {path}")

print("🤖 Shaho AI組織 セットアップ開始...\n")

# ── ディレクトリ作成 ──────────────────────────────────────
for d in [
    "agents/content", "agents/marketing",
    "content/blog", "docs/marketing/sns",
    ".github/workflows", "scripts",
]:
    os.makedirs(d, exist_ok=True)

open("content/blog/.gitkeep", "w").close()
open("docs/marketing/sns/.gitkeep", "w").close()
print("📁 ディレクトリを作成しました\n")

# ── CLAUDE.md（組織憲章）────────────────────────────────
write("CLAUDE.md", """\
# Shaho AI組織 憲章

> このファイルを読んだ Claude は AI CEO として振る舞う。

## 組織構造

取締役会（人間）→ GitHub PR を Approve するだけ
AI CEO（このファイル）
  ├── agents/content/CLAUDE.md   → AI コンテンツ部
  └── agents/marketing/CLAUDE.md → AI マーケティング部

## 全部署共通ルール

1. 成果物はすべて GitHub PR で提出。main に直接 push しない。
2. PR タイトル形式: [AI-部署名] 内容の要約
3. 重要判断（予算・外部連携・方針変更）は単独で行わない。Issue に起票して承認を待つ。
4. 作業後は memory-mcp に申し送りを保存する（mcp__memory__save_note）。

## このサービスについて

- サービス名: 社宝（Shaho）
- ドメイン: shaho-life.com
- ターゲット: 従業員 50 名以上の日本企業（人事・総務・産業医）
- 強み: ストレスチェック（法定義務）× 健康経営 × 福利厚生の統合
- 競合: Benefit One、Relo Club、SmartHR
- 差別化: 法定義務対応＋健康経営認定支援を一体で提供できる唯一のプラットフォーム

## コンテンツトーン

- 文体: 専門的・誠実・読みやすい日本語
- 読者: 人事担当者・総務担当者
- 禁止: 医療断定、法的断定、競合誹謗、根拠のない統計

## 週次サイクル

毎週月曜 09:00 JST: ブログ記事 1 本を生成し PR 作成（コンテンツ部）
毎週月曜 09:30 JST: SNS 投稿文案 + LP 改善提案を作成し PR/Issue 化（マーケティング部）

## AI CEO のセッション開始時チェック

1. 未承認の AI-generated PR がないか確認
2. 取締役会からの指示 Issue（ラベル: ceo-task）がないか確認
3. memory-mcp から前回の申し送りを取得（mcp__memory__search_memory）
4. 作業完了後は mcp__memory__save_note で申し送りを保存
""")

# ── agents/content/CLAUDE.md ──────────────────────────
write("agents/content/CLAUDE.md", """\
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

### 4. PR 作成

タイトル: [AI-Content] {記事タイトル}
ブランチ: ai/content-YYYYMMDD
ラベル: AI-Content, blog

PR ボディに含める:
- ターゲットキーワード
- 文字数
- 承認チェックリスト（内容確認・トーン確認・CTA確認）

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
""")

# ── agents/marketing/CLAUDE.md ────────────────────────
write("agents/marketing/CLAUDE.md", """\
# AI マーケティング部 標準作業手順書（SOP）

> このファイルを読んだ Claude はマーケティング部員として振る舞う。
> 上位ルールは /CLAUDE.md を参照。

## ミッション

shaho-life.com への問い合わせ数・資料 DL 数を増やし、リード獲得を最大化する。

## 週次タスク

### 1. SNS 投稿文案（毎週月曜）

X（旧 Twitter）3件・LinkedIn 1件の投稿文案を作成し、
docs/marketing/sns/YYYY-WW.md に保存して PR を作成する。

X 投稿パターン（140字以内）:

【知識提供型】
{数字}つのポイント | {テーマ}
・{ポイント1}
・{ポイント2}
・{ポイント3}
#健康経営 #ストレスチェック #従業員wellbeing

【問いかけ型】
「{担当者が感じる課題}」、こんな悩みありませんか?
実は{解決策}だけで解決できます。
詳しくは → shaho-life.com
#ストレスチェック #人事担当者

【数字・統計型】
知っていましたか？
{驚きの統計・数字}
社宝なら{どう解決できるか}
shaho-life.com
#健康経営優良法人

LinkedIn（400〜600字）:
- ターゲット読者の課題から入る
- 業界の現状・背景を 2〜3 文で説明
- 解決策を箇条書きで 3 点
- 締めのメッセージ + CTA
- ハッシュタグ: #健康経営 #ストレスチェック #HR #ウェルビーイング

### 2. LP 改善提案（毎月第 1 週）

shaho-life.com の LP を評価し、GitHub Issue に起票する。
ラベル: marketing, enhancement

評価観点:
- ファーストビュー（キャッチコピー・CTA の明確さ）
- 社会的証明（導入企業数・事例・口コミ）
- 価値提案（競合との差別化）
- CTA 設計（フォーム入力項目・ボタン配置）
- モバイル対応

### 3. メルマガ文面草案（毎月第 2 週）

docs/marketing/newsletter/YYYY-MM.md に保存して PR を作成する。

## 品質基準

- エビデンス: 主張には根拠を。出典のない統計は使わない
- トーン: 専門的だが親しみやすい
- CTA: 必ず 1 つ以上、具体的なアクションを入れる

## 月次振り返り

mcp__memory__save_note で申し送りを保存:
- key: marketing-monthly-YYYY-MM
- 内容: 実施施策・次月計画
""")

# ── scripts/generate-blog-post.ts ─────────────────────
write("scripts/generate-blog-post.ts", r"""#!/usr/bin/env npx tsx
/**
 * AIコンテンツ部 - ブログ記事手動生成スクリプト
 * 使い方:
 *   pnpm generate-post
 *   pnpm generate-post -- --keyword "ストレスチェック 義務"
 *   pnpm generate-post -- --keyword "健康経営優良法人" --words 2500
 */
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const getArg = (flag: string) => {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : undefined;
};
const keyword  = getArg("--keyword");
const wordCount = parseInt(getArg("--words") ?? "2000", 10);

const contentSop  = fs.readFileSync(path.join(ROOT, "agents/content/CLAUDE.md"), "utf-8");
const orgCharter  = fs.readFileSync(path.join(ROOT, "CLAUDE.md"), "utf-8");
const blogDir     = path.join(ROOT, "content/blog");
const existingPosts = fs.existsSync(blogDir)
  ? fs.readdirSync(blogDir).filter(f => f.endsWith(".mdx")).join("\n")
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

console.log("🤖 AI コンテンツ部: 記事を生成中...");
const client = new Anthropic();
const response = await client.messages.create({
  model: "claude-opus-4-6",
  max_tokens: 6000,
  messages: [{ role: "user", content: prompt }],
});

const content = response.content[0].type === "text" ? response.content[0].text.trim() : "";
if (!content) { console.error("❌ 生成失敗"); process.exit(1); }

const titleMatch = content.match(/^title:\s*["']?(.+?)["']?\s*$/m);
const title      = titleMatch ? titleMatch[1] : "weekly-blog";
const slug       = title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").slice(0, 50);
const date       = new Date().toISOString().split("T")[0];
const filename   = `${date}-${slug}.mdx`;

if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });
fs.writeFileSync(path.join(blogDir, filename), content, "utf-8");

console.log(`\n✅ 記事を生成: content/blog/${filename}`);
console.log(`📝 タイトル: ${title}`);
console.log(`📊 トークン: ${response.usage.input_tokens} in / ${response.usage.output_tokens} out`);
console.log(`\n次のステップ:`);
console.log(`  git add content/blog/${filename}`);
console.log(`  git commit -m "[AI-Content] ${title}"`);
console.log(`  gh pr create --title "[AI-Content] ${title}" --base main`);
""")

# ── .github/workflows/content-agent.yml ───────────────
write(".github/workflows/content-agent.yml", """\
name: "AI Content Agent"

on:
  schedule:
    - cron: "0 0 * * 1"
  workflow_dispatch:
    inputs:
      keyword:
        description: "ターゲットキーワード（省略時はAIが選定）"
        required: false
        default: ""

jobs:
  generate-blog-post:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "22"
      - uses: pnpm/action-setup@v4
        with:
          version: latest
      - run: pnpm install
      - name: Generate blog post
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          KEYWORD="${{ github.event.inputs.keyword }}"
          if [ -n "$KEYWORD" ]; then
            npx tsx scripts/generate-blog-post.ts --keyword "$KEYWORD"
          else
            npx tsx scripts/generate-blog-post.ts
          fi
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v6
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          commit-message: "feat(blog): AI週次ブログ記事を追加"
          title: "[AI-Content] 週次ブログ記事 ${{ github.run_number }}"
          body: |
            ## AI コンテンツ部 週次ブログ記事

            - [ ] 内容・事実確認
            - [ ] トーン確認
            - [ ] CTA リンク確認

            *承認してマージすると Vercel が自動デプロイします。*
          branch: "ai/content-${{ github.run_number }}"
          base: main
          labels: "AI-Content,blog"
""")

# ── .github/workflows/marketing-agent.yml ─────────────
write(".github/workflows/marketing-agent.yml", """\
name: "AI Marketing Agent"

on:
  schedule:
    - cron: "30 0 * * 1"
  workflow_dispatch:

jobs:
  generate-marketing:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "22"
      - uses: pnpm/action-setup@v4
        with:
          version: latest
      - run: pnpm install
      - name: Get week
        id: week
        run: echo "week=$(date +%Y-W%V)" >> $GITHUB_OUTPUT
      - name: Generate SNS posts
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          mkdir -p docs/marketing/sns
          npx tsx -e "
          import Anthropic from '@anthropic-ai/sdk';
          import fs from 'fs';
          const sop = fs.readFileSync('agents/marketing/CLAUDE.md','utf-8');
          const org = fs.readFileSync('CLAUDE.md','utf-8');
          const client = new Anthropic();
          const res = await client.messages.create({
            model:'claude-opus-4-6', max_tokens:3000,
            messages:[{role:'user',content:org+'\\n\\n'+sop+'\\n\\n今週のSNS投稿文案（X×3件、LinkedIn×1件）をMarkdownで作成してください。'}]
          });
          const text = res.content[0].type==='text'?res.content[0].text:'';
          fs.writeFileSync('docs/marketing/sns/${{ steps.week.outputs.week }}.md', text);
          console.log('✅ SNS文案を生成しました');
          "
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v6
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          commit-message: "docs(marketing): ${{ steps.week.outputs.week }} SNS投稿文案"
          title: "[AI-Marketing] ${{ steps.week.outputs.week }} SNS投稿文案"
          body: |
            ## AI マーケティング部 週次 SNS 投稿文案

            - [ ] トーン・内容確認
            - [ ] ハッシュタグ確認
            - [ ] 競合言及がないか確認
          branch: "ai/marketing-${{ github.run_number }}"
          base: main
          labels: "AI-Marketing,sns"
""")

print("\n🎉 セットアップ完了！\n")
print("次のステップ:")
print("  1. pnpm を追加: npm install -g pnpm")
print("  2. 依存をインストール: pnpm add @anthropic-ai/sdk && pnpm add -D tsx")
print("  3. package.json の scripts に追加:")
print('       "generate-post": "npx tsx scripts/generate-blog-post.ts"')
print("  4. GitHub Secrets に ANTHROPIC_API_KEY を設定")
print("  5. 動作確認: ANTHROPIC_API_KEY=sk-ant-... pnpm generate-post")
