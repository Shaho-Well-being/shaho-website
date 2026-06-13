import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Award,
  ArrowRight,
  ClipboardList,
  BarChart3,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "健康経営優良法人サポート | 社宝",
  description:
    "健康経営優良法人の認定申請でつまずく「証跡集め」を、日常のアプリ利用だけで蓄積・可視化。中小企業が無理なく認定を狙える状態をつくります。",
};

const steps = [
  {
    icon: Smartphone,
    step: "STEP 1",
    title: "使う",
    description:
      "従業員は普段どおり、社宝アプリで福利厚生や健康施策を利用するだけ。新しい作業は増えません。",
  },
  {
    icon: ClipboardList,
    step: "STEP 2",
    title: "貯まる",
    description:
      "アプリの利用が、申請に必要な活動記録として自動で蓄積されます。「やった証拠」が後から探さずに残ります。",
  },
  {
    icon: BarChart3,
    step: "STEP 3",
    title: "確認する",
    description:
      "蓄積された活動記録をダッシュボードや申請ガイドで確認・整理。申請準備の負担を大きく減らせます。",
  },
];

const painPoints = [
  "施策はやっているのに、申請用の「証拠」が残っていない",
  "活動記録を後から集める作業に時間がかかる",
  "何をどこまでやれば認定基準を満たすのか分かりにくい",
  "専任の担当者を置く余裕がない",
];

export default function HealthManagementSupportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[linear-gradient(180deg,#f7fcfb_0%,#eef9f7_100%)] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <Award className="h-4 w-4" />
            健康経営優良法人サポート
          </div>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:leading-[1.12]">
            認定申請の<span className="text-primary">「証跡づくり」</span>を、
            <br className="hidden sm:block" />
            日常業務の中で。
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            健康経営優良法人の申請でつまずくのは、施策そのものより「やった証拠を集めること」。
            社宝なら、従業員が普段アプリを使うだけで、ストレスチェック実施率や歩数目標達成率などの活動記録がダッシュボードに蓄積されます。
            中小企業が無理なく認定を狙える状態をつくります。
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 rounded-full px-8 text-base" asChild>
              <Link href="/contact">
                認定取得を相談する
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-primary/20 bg-white px-8 text-base"
              asChild
            >
              <Link href="/contact?type=document">資料をダウンロード</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              認定申請、こんなところでつまずいていませんか？
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point}
                className="rounded-[24px] border border-border/70 bg-white px-6 py-5 text-base font-medium text-foreground shadow-sm"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fcfb_100%)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              How it works
            </div>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              使うだけで、証跡が貯まって、ダッシュボードで確認できる
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-[32px] border border-border/80 bg-white p-7 shadow-[0_25px_70px_-40px_rgba(28,92,95,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="mt-6 text-xs font-bold tracking-[0.18em] text-primary">
                  {item.step}
                </div>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / badge */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-[36px] border border-border/70 bg-white p-8 shadow-[0_30px_90px_-50px_rgba(28,92,95,0.4)] sm:p-12 lg:grid-cols-[auto_1fr]">
            <div className="flex items-center gap-4 rounded-[24px] bg-secondary px-6 py-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">健康経営優良法人2026</div>
                <div className="text-xs text-muted-foreground">認定番号：139686</div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                社宝自身も、認定を取得しています
              </h2>
              <p className="mt-3 text-base leading-8 text-muted-foreground">
                認定取得を経験したからこそ、申請準備で本当に大変なポイントを理解しています。
                導入支援・ご相談に対応し、認定を目指す企業さまをサポートします。
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "活動記録をダッシュボードで可視化・整理",
                  "認定基準に沿った施策の整理",
                  "導入時のご相談・導入支援",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] bg-[linear-gradient(135deg,#204753_0%,#2e6774_50%,#4f98a0_100%)] px-6 py-14 text-center shadow-[0_35px_120px_-50px_rgba(24,61,73,0.65)] sm:px-12">
            <h2 className="text-balance text-3xl font-black tracking-tight text-background sm:text-4xl">
              認定取得を、無理なく目指しませんか？
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-background/80">
              現状の取り組みを伺い、認定に向けて何が必要かを一緒に整理します。
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 rounded-full bg-background px-8 text-base text-foreground hover:bg-background/90"
                asChild
              >
                <Link href="/contact">
                  お問い合わせ
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-background/30 bg-transparent px-8 text-base text-background hover:bg-background/10"
                asChild
              >
                <Link href="/contact?type=document">資料をダウンロード</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
