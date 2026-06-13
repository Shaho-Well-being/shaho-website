import Link from "next/link";
import { Award, ArrowRight, ClipboardList, BarChart3, Smartphone, X, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const flow = [
  {
    icon: Smartphone,
    title: "使う",
    description: "従業員が普段どおりアプリで福利厚生や健康施策を利用します。",
  },
  {
    icon: ClipboardList,
    title: "貯まる",
    description: "その利用が、申請に必要な活動記録としてそのまま蓄積されます。",
  },
  {
    icon: BarChart3,
    title: "確認する",
    description: "ストレスチェック実施率・歩数目標達成率など、活動記録をダッシュボードで確認できます。",
  },
];

export function KenkoKeiei() {
  return (
    <section className="bg-[linear-gradient(180deg,#f7fcfb_0%,#eef9f7_100%)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <Award className="h-4 w-4" />
              健康経営優良法人サポート
            </div>

            <h2 className="mt-6 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.12]">
              認定申請の
              <span className="text-primary">「証跡づくり」</span>
              を、
              <br className="hidden sm:block" />
              日常業務の中で。
            </h2>

            <p className="mt-6 text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              健康経営優良法人の申請でつまずくのは、施策そのものより「やった証拠を集めること」。
              社宝なら、従業員が普段アプリを使うだけで、ストレスチェック実施率や歩数目標達成率などの活動記録が蓄積されます。
              中小企業が無理なく認定を狙える状態をつくります。
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-14 rounded-full px-8 text-base" asChild>
                <Link href="/solutions/health-management">
                  サポート内容を見る
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-full border-primary/20 bg-white px-8 text-base"
                asChild
              >
                <Link href="/contact">認定取得を相談する</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[36px] border border-border/70 bg-white p-7 shadow-[0_30px_90px_-50px_rgba(28,92,95,0.45)] sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How it works
            </p>
            <p className="mt-2 text-lg font-black text-foreground">
              アプリを使うだけで、証跡が自動で積み上がる
            </p>

            <ol className="mt-6 space-y-5">
              {flow.map((item, index) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold tracking-[0.18em] text-primary">
                        STEP {index + 1}
                      </span>
                      <span className="text-lg font-black text-foreground">{item.title}</span>
                    </div>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* バラバラ vs 社宝1本 comparison */}
        <div className="mt-16 overflow-hidden rounded-[36px] border border-border/60 bg-white shadow-[0_30px_80px_-40px_rgba(28,92,95,0.22)]">
          <div className="grid lg:grid-cols-2">
            {/* Left: without Shaho */}
            <div className="border-b border-border/60 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-red-600">
                Before
              </div>
              <h3 className="mt-4 text-xl font-black text-foreground">
                3つのツールをバラバラに使う場合
              </h3>
              <ul className="mt-6 space-y-3">
                {[
                  "ストレスチェック・健康アプリ・福利厚生で管理画面が3つ",
                  "ツール間でデータが連携されず、集計・転記に工数がかかる",
                  "ベンダーごとに契約・請求・サポート窓口が異なる",
                  "全体の利用状況が把握できず、施策改善につながらない",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: with Shaho */}
            <div className="bg-[linear-gradient(135deg,#f7fcfb_0%,#eef9f7_100%)] p-8 lg:p-10">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                社宝1本
              </div>
              <h3 className="mt-4 text-xl font-black text-foreground">
                ひとつのプラットフォームに統合
              </h3>
              <ul className="mt-6 space-y-3">
                {[
                  "ストレスチェック・ヘルスケア・福利厚生がひとつの管理画面",
                  "データが自動で連携。集計・証跡がそのまま活用できる",
                  "契約・請求・サポートの窓口が社宝に一本化",
                  "全機能の利用状況をダッシュボードで一元把握",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
