import Link from "next/link";
import { Award, ArrowRight, ClipboardList, BarChart3, Smartphone } from "lucide-react";
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
            <div className="flex items-center justify-between gap-4 rounded-[24px] bg-secondary px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">健康経営優良法人2026</div>
                  <div className="text-xs text-muted-foreground">社宝も認定を取得しています</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  認定番号
                </div>
                <div className="text-lg font-black text-primary">139686</div>
              </div>
            </div>

            <ol className="mt-7 space-y-5">
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
      </div>
    </section>
  );
}
