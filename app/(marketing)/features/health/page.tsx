import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Activity, LineChart, Watch, Brain, Bell, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "健康管理 | 社宝",
  description: "従業員の健康データを一元管理。予防医療の推進と健康リスクの早期発見をサポートします。",
};

const highlights = [
  {
    icon: Activity,
    title: "データの一元管理",
    description: "健診結果、ストレスチェック、日々のバイタルを統合管理。",
  },
  {
    icon: Watch,
    title: "ウェアラブル連携",
    description: "Apple Watch、Fitbitなど主要デバイスとシームレスに連携。",
  },
  {
    icon: LineChart,
    title: "健康スコアリング",
    description: "独自のアルゴリズムで健康リスクを数値化し可視化。",
  },
  {
    icon: Brain,
    title: "AIによる分析",
    description: "機械学習で健康リスクを予測し、早期介入を支援。",
  },
];

const features = [
  "健康データダッシュボード",
  "個人別健康トレンド分析",
  "部署・組織単位の健康レポート",
  "健康増進プログラム管理",
  "服薬・通院リマインダー",
  "健康相談予約機能",
  "産業医・保健師向けツール",
  "健康経営度調査対応",
];

export default function HealthFeaturePage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm">
              <Heart className="h-4 w-4" />
              健康管理
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              データで支える
              <br />
              従業員の健康
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              健診結果、ストレスチェック、日々のバイタルデータを一元管理。
              予防医療の推進と健康リスクの早期発見で、健康経営を実現します。
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
                  <Activity className="h-32 w-32 text-muted-foreground/20" />
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

      {/* Dashboard Preview */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            健康データを可視化
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            直感的なダッシュボードで、組織全体の健康状態を一目で把握
          </p>
        </div>
        <div className="mt-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex aspect-[16/9] items-center justify-center bg-muted/50">
                <LineChart className="h-32 w-32 text-muted-foreground/20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Card className="overflow-hidden lg:order-2">
            <CardContent className="p-0">
              <div className="flex aspect-[4/3] items-center justify-center bg-muted/50">
                <Bell className="h-24 w-24 text-muted-foreground/20" />
              </div>
            </CardContent>
          </Card>
          <div className="lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              健康経営に必要な<br />すべての機能
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              従業員の健康データ管理から、健康経営優良法人認定の取得支援まで。
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
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12 lg:px-24">
          <h2 className="text-2xl font-bold tracking-tight text-background sm:text-3xl">
            健康経営の実現をサポートします
          </h2>
          <p className="mt-4 text-lg text-background/80">
            まずは無料デモで、社宝の健康管理機能をご体験ください。
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
