import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ClipboardCheck, Calendar, FileText, Brain, Shield, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "健診・ストレスチェック | 社宝",
  description: "健康診断の予約から結果管理、ストレスチェックまで、法令遵守をワンストップで対応。",
};

const highlights = [
  {
    icon: Calendar,
    title: "オンライン予約",
    description: "従業員が自分で健診日時を予約。リマインダーで受診率向上。",
  },
  {
    icon: FileText,
    title: "結果の自動取込",
    description: "健診機関からのデータを自動で取り込み、手入力の手間を削減。",
  },
  {
    icon: Brain,
    title: "ストレスチェック",
    description: "法定のストレスチェックをオンラインで実施。集団分析も自動化。",
  },
  {
    icon: Shield,
    title: "法令対応",
    description: "労働安全衛生法に準拠した報告書を自動生成。",
  },
];

const workflow = [
  {
    step: "01",
    title: "健診予約",
    description: "従業員がオンラインで空き状況を確認し、都合の良い日時を予約。",
  },
  {
    step: "02",
    title: "リマインド",
    description: "予約日前に自動でリマインダーを送信。受診忘れを防止。",
  },
  {
    step: "03",
    title: "結果取込",
    description: "健診機関からのデータを自動取込。手入力不要で正確。",
  },
  {
    step: "04",
    title: "フォロー",
    description: "要精密検査者への自動通知と受診勧奨。",
  },
];

const features = [
  "健診予約管理",
  "複数健診機関対応",
  "結果データ自動取込",
  "要精密検査者管理",
  "ストレスチェック実施",
  "高ストレス者面談管理",
  "集団分析レポート",
  "労基署報告書出力",
];

export default function CheckupFeaturePage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm">
              <ClipboardCheck className="h-4 w-4" />
              健診・ストレスチェック
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              法令遵守を
              <br />
              ワンストップで
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              健康診断の予約から結果管理、ストレスチェックの実施まで。
              煩雑な法定業務をデジタル化し、人事・総務の負担を大幅に軽減します。
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact?type=demo">
                  無料デモを予約
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">導入事例を見る</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex aspect-[4/3] items-center justify-center bg-muted/50">
                  <ClipboardCheck className="h-32 w-32 text-muted-foreground/20" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Card key={item.title}>
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <item.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            健診業務をシンプルに
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            予約から結果管理、フォローアップまで一気通貫
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {workflow.map((item, index) => (
            <div key={item.step} className="relative">
              {index < workflow.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-xl font-bold text-background">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              煩雑な業務を<br />すべて自動化
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              手作業で行っていた健診・ストレスチェック業務をデジタル化。
              担当者の負担を大幅に軽減します。
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-foreground">
                  <Check className="h-5 w-5 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex aspect-[4/3] items-center justify-center bg-muted/50">
                <FileText className="h-24 w-24 text-muted-foreground/20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12 lg:px-24">
          <h2 className="text-2xl font-bold tracking-tight text-background sm:text-3xl">
            健診業務の効率化を始めませんか？
          </h2>
          <p className="mt-4 text-lg text-background/80">
            まずは無料デモで、社宝の健診管理機能をご体験ください。
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/contact?type=demo">
              無料デモを予約
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
