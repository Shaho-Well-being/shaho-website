import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Zap, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "福利厚生の利用率・従業員満足度 | 社宝",
  description:
    "福利厚生利用率40%の課題を、電子マネー特化のポイント制度で解決。PayPay・Amazonギフト券・QUOカードPayに即交換。全員が使える設計で満足度とエンゲージメントを向上。",
};

const problems = [
  {
    label: "業界平均の福利厚生利用率",
    value: "38%",
    description: "半数以上の従業員が福利厚生を「使っていない」現実",
  },
  {
    label: "利用されない主な理由",
    value: "3位",
    description: "「自分に合う選択肢がない」が不満の上位を占める",
  },
  {
    label: "未使用の福利厚生予算の割合",
    value: "〜60%",
    description: "企業が用意した予算の多くが毎年使われずに終わる",
  },
];

const reasons = [
  {
    icon: Globe,
    title: "カタログが多すぎて選べない",
    description:
      "数千〜数万点のカタログは「選択肢が多い」ように見えて、逆に選ぶ気力が失われます。結果として「また今度」となり、利用率が下がります。",
  },
  {
    icon: Zap,
    title: "使えるまでに時間がかかる",
    description:
      "申請→審査→配送まで数週間かかる制度では、「もらった実感」が薄くなります。インセンティブとしての即効性がありません。",
  },
  {
    icon: Users,
    title: "全員に合う選択肢がない",
    description:
      "正社員向けに設計された制度では、パート・派遣・外国籍・高齢の従業員には使いづらいものが多く、制度の公平性が損なわれます。",
  },
];

const emoney = [
  { name: "PayPay", description: "日本最大のQRコード決済。コンビニ・飲食・ネット通販すべてで使用可" },
  { name: "Amazonギフト券", description: "書籍・日用品・家電まで。生活のあらゆる場面で使える万能ギフト" },
  { name: "QUOカードPay", description: "全国のコンビニ・書店・ファミレスで使えるデジタルギフトカード" },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "利用率70%超を実現",
    description:
      "電子マネー特化により「何に使えるか」が明確。受け取ったその日から使えるため、従業員が「もらった実感」を持てます。",
  },
  {
    icon: Users,
    title: "全員が公平に使える",
    description:
      "正社員・パートタイム・外国籍・高齢者など、雇用形態・国籍・年齢を問わず全員が同じ手順で利用できます。制度の公平性を担保します。",
  },
  {
    icon: Zap,
    title: "管理工数はほぼゼロ",
    description:
      "在庫なし・配送なし・問い合わせなし。ポイント付与から交換まですべてデジタルで完結するため、人事担当者の負担が大幅に減ります。",
  },
];

const healthPoints = [
  { action: "毎日の歩数目標達成（8,000歩）", point: "+10pt" },
  { action: "定期健康診断の受診完了", point: "+100pt" },
  { action: "ストレスチェックへの回答", point: "+50pt" },
  { action: "体重・食事記録の継続（7日間）", point: "+30pt" },
  { action: "誕生日月のボーナスポイント", point: "+200pt" },
  { action: "会社設定のイベント達成", point: "カスタム" },
];

export default function EngagementPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-strong">
            福利厚生の利用率・従業員満足度
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            使われない福利厚生に、
            <br className="hidden sm:block" />
            さようなら。
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            ポイントをPayPay・Amazonギフト券・QUOカードPayなどに即交換できる電子マネー特化の設計で、
            業界平均38%の利用率を70%超へ。全員が使える福利厚生を、最短1週間で導入できます。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact?type=document">資料をダウンロード</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem numbers */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            福利厚生は「用意するだけ」では意味がない
          </h2>
          <p className="mt-4 text-muted-foreground">
            多くの企業が予算をかけながら、使われない福利厚生に悩んでいます。
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="text-5xl font-bold text-foreground">{p.value}</div>
              <div className="mt-2 text-sm font-medium text-accent-strong">{p.label}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why it fails */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            なぜ「カタログ型」は使われないのか
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {reasons.map((r) => (
            <Card key={r.title}>
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <r.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* E-money solution */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              社宝の答え：電子マネー特化
            </h2>
            <p className="mt-4 text-muted-foreground">
              「何でも使える」電子マネーに絞ることで、誰もが使う・使いやすい制度を実現します。
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {emoney.map((e) => (
              <div
                key={e.name}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-xl font-bold text-foreground">{e.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            ※ 対応電子マネーは順次拡大予定。詳細はお問い合わせください。
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            電子マネー特化が生み出す3つの変化
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title}>
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <b.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Health behavior × points */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              健康行動が、ポイントになる
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              歩数・健診受診・ストレスチェック回答など、健康につながる行動にポイントを付与できます。
              「健康になるとお得になる」仕組みで、従業員の健康行動を自然に促進します。
              ポイントは電子マネーに即交換できるため、モチベーションが持続します。
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              ポイント付与条件は企業ごとにカスタマイズ可能。健康経営優良法人の認定要件「運動習慣の促進」
              「定期健診受診率向上」などにも直結します。
            </p>
          </div>
          <div className="divide-y divide-border rounded-xl border border-border bg-card">
            {healthPoints.map((hp) => (
              <div key={hp.action} className="flex items-center justify-between p-4">
                <span className="text-sm text-foreground">{hp.action}</span>
                <span className="rounded-full bg-accent/10 px-3 py-0.5 text-sm font-bold text-accent-strong">
                  {hp.point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-background sm:text-3xl">
            福利厚生予算を、ちゃんと使われる仕組みに変えませんか
          </h2>
          <p className="mt-4 text-background/80">
            電子マネー特化の設計と、健康行動とポイントを紐づける仕組みをデモでご体験ください。
            最短1週間で全社展開が可能です。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link href="/contact">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-background hover:bg-background/10 hover:text-background"
              asChild
            >
              <Link href="/pricing">料金を確認する</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
