改善したい点（できていない・弱いところ）

1. 責務の分離：ページに「取得・表示・UI」が同居
   データ取得（getData() + try/catch + mock）が ブログ・事例の各ページに同じパターンで重複している。
   一覧カードの見た目（ブログカード・事例カード）が ページの JSX に直書きで、BlogPreview とブログ一覧で似た構造が 2 回出てきている。
   「どこでデータを取るか」「どのコンポーネントが表示を担当するか」がページに集中しており、表示専用の薄いコンポーネント層がほとんどない。
   提案:

データ取得層を共通化する（例: lib/data/blog.ts で getBlogPageData() のような「ページ用の取得＋フォールバック」を 1 つにまとめる）。
表示用コンポーネントを切る:
components/blog/blog-card.tsx（一覧・トップ共通）
components/case-studies/case-study-card.tsx
ページは「データ取得を呼ぶ → カードに props を渡す」だけにし、見た目やレイアウトの詳細はコンポーネントに寄せる。

2. 重複コード：formatDate が 3 箇所
   formatDate が app/(marketing)/blog/page.tsx、app/(marketing)/blog/[id]/page.tsx、components/home/blog-preview.tsx に同じ実装で存在している。
   提案:
   lib/format.ts（または lib/utils.ts）に 1 つだけ定義し、3 箇所から import する。

3. エラー・ローディングの未整備
   loading.tsx が無く、初回表示時のローディング UI がない。
   error.tsx が無く、ランタイムエラー時に Next のエラー境界でフォールバックできない。
   microCMS 失敗時は mock に落としているだけで、ユーザー向けの「取得に失敗した」表示や notFound() の使い分けはしていない。
   提案:

app/(marketing)/loading.tsx でスケルトンやスピナーを出す。
app/(marketing)/error.tsx で「エラーが発生しました」＋リトライやトップへのリンクを出す。
（任意）「本番では mock にフォールバックせず、エラー or notFound にしたい」など方針を決め、getData() 内で分岐する。4. ビルド・本番運用まわりの設定
next.config.mjs の typescript: { ignoreBuildErrors: true } は型エラーを無視するため、本番では外した方がよい。
images.unoptimized: true は Vercel 等では通常不要。画像最適化を有効にしたうえで、必要な場合だけ unoptimized を使う形が望ましい。

5. お問い合わせフォーム
   送信処理が未実装（handleSubmit 内はコメントで「ここで送る」とあるだけ）。
   実際の送信先（API Route、Formspree、microCMS など）を決め、送信・エラー・二重送信防止を実装すると、責務としても「フォーム UI」と「送信・状態」が分かれて整理しやすい。
6. スタイル・グローバル CSS
   app/globals.css と styles/globals.css の 2 つがあり、実際に使われているのは app/globals.css のみ。
   運用を単純にするなら、参照されていない styles/globals.css を整理（削除 or 役割を明確化）するとよい。7. 共通コンポーネントの粒度
   components/sections/ に hero / pricing / faq などがあるが、ページからの直接利用が少ないという報告がある。
   トップ・ランディング・料金などで「同じセクション」が繰り返し使われるなら、sections を「ページから import して並べる」形にすると、レイアウトの責務がページに集中しすぎずに済む。

まとめ
観点 評価 補足
モダンさ・技術選定 ◎ App Router, RSC, shadcn, Tailwind v4, microCMS の集約
最速構築 ◎ ルートグループ、mock、ISR で開発〜公開まで短い
責務の分離 △ データ層は良いが、ページに「取得＋表示」が集中。カード等の共通コンポーネント不足
保守性・DRY △ formatDate 重複、getData パターン重複、カード UI 重複
堅牢性・UX △ loading/error 未実装、TypeScript 無視、フォーム送信未実装
「技術の理解」という意味では、Next.js App Router / RSC / microCMS の役割分担はよく理解したうえで組まれており、V0＋Cursor×Claude でモダンに速く作るという目的にはかなり合っています。
ここから 表示コンポーネントの抽出 と formatDate / getData の共通化、loading・error・フォーム送信 を足すと、責務に沿った「モダンで最速」な構成にさらに近づきます。
