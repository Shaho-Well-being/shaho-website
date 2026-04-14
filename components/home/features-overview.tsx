import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Gift,
  HeartHandshake,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "STEP 1",
    title: "人事が制度をかんたん設計",
    description:
      "対象者、付与条件、利用期間までまとめて設定。制度ごとにバラバラだった運用を一つの導線に整理します。",
    icon: LayoutDashboard,
    points: ["制度ごとの条件設計", "拠点・雇用形態にも対応", "管理画面で一元運用"],
  },
  {
    step: "STEP 2",
    title: "従業員がアプリで迷わず確認",
    description:
      "従業員は自分に使える制度だけをスマホで確認。福利厚生、健診、ストレスチェックも一つの導線で届きます。",
    icon: Smartphone,
    points: ["制度一覧をわかりやすく表示", "通知で利用を後押し", "健康施策と同じアプリで完結"],
  },
  {
    step: "STEP 3",
    title: "日常の中で自然に使われる",
    description:
      "使われたかどうかまで把握できるので、制度を配るだけで終わりません。利用率を見ながら改善し続けられます。",
    icon: CheckCircle2,
    points: ["利用率を可視化", "施策改善につなげやすい", "公平性のある制度運用"],
  },
];

const menus = [
  "食事補助",
  "育児支援",
  "部活動手当",
  "資格取得補助",
  "健康促進手当",
  "ストレスチェック",
  "健診管理",
  "リモート勤務支援",
  "表彰ポイント",
  "オンボーディング施策",
  "エンゲージメント施策",
  "独自制度の設計",
];

const reasons = [
  {
    icon: Gift,
    title: "制度が使われやすい",
    description: "使い方が直感的で、従業員が日常の中で自然に活用しやすい体験に整えます。",
  },
  {
    icon: HeartHandshake,
    title: "福利厚生と健康経営をつなげられる",
    description: "福利厚生だけでなく、健診やストレスチェックも含めた従業員体験に拡張できます。",
  },
  {
    icon: ClipboardCheck,
    title: "人事の運用負担を減らせる",
    description: "通知、管理、可視化までをまとめて扱えるので、制度ごとの個別対応を減らせます。",
  },
];

export function FeaturesOverview() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fcfb_100%)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Flow
          </div>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            社宝なら、福利厚生を
            <span className="text-primary">3ステップで使われる仕組み</span>
            にできます
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            難しい制度説明よりも、利用される導線づくりが大切です。社宝は人事と従業員の両方にとって
            わかりやすい流れをつくります。
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.step}
              className="rounded-[34px] border border-border/80 bg-white p-7 shadow-[0_25px_70px_-40px_rgba(28,92,95,0.35)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary px-4 py-2 text-xs font-bold tracking-[0.18em] text-primary-foreground">
                  {step.step}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-black tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {step.description}
              </p>
              <ul className="mt-6 space-y-3">
                {step.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[36px] bg-[#6fd6cf] px-6 py-8 text-white shadow-[0_25px_80px_-45px_rgba(28,92,95,0.5)] sm:px-8 sm:py-10">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Menu Ideas
            </div>
            <h3 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
              設計できる福利厚生メニューも、やわらかく自由に
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              既存の制度をデジタル化するだけでなく、採用や定着につながる独自メニューも設計できます。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {menus.map((menu) => (
                <span
                  key={menu}
                  className="rounded-full border border-white/30 bg-white/18 px-4 py-2 text-sm font-medium backdrop-blur"
                >
                  {menu}
                </span>
              ))}
            </div>
            <Button
              variant="secondary"
              className="mt-8 rounded-full bg-white text-foreground hover:bg-white/90"
              asChild
            >
              <Link href="/features">
                できることを詳しく見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-[36px] border border-border/80 bg-white px-6 py-8 shadow-[0_25px_70px_-40px_rgba(28,92,95,0.28)] sm:px-8 sm:py-10">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Why Shaho
            </div>
            <h3 className="mt-4 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              おしゃれに見せるだけでなく、
              <br />
              実務でも使いやすい
            </h3>
            <div className="mt-8 space-y-5">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-[26px] bg-secondary px-5 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                      <reason.icon className="h-5 w-5" />
                    </div>
                    <div className="text-lg font-bold text-foreground">{reason.title}</div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
