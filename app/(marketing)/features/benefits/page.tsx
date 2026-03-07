import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Gift, ShoppingBag, Users, TrendingUp, Smartphone, Globe, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "福利厚生 | 社宝",
  description: "ポイント制福利厚生で従業員一人ひとりに合わせた柔軟な制度設計。10,000以上のギフト・体験から選択可能。",
};

const highlights = [
  {
    icon: Gift,
    title: "10,000以上の選択肢",
    description: "グルメ、旅行、エンタメ、日用品まで幅広いカテゴリから選択可能。",
  },
  {
    icon: Users,
    title: "家族利用対応",
    description: "従業員だけでなく、ご家族も一緒に福利厚生を利用できます。",
  },
  {
    icon: Smartphone,
    title: "スマホで簡単",
    description: "アプリからポイント確認、ギフト交換がいつでもどこでも。",
  },
  {
    icon: TrendingUp,
    title: "利用率の向上",
    description: "従来の福利厚生と比べ、平均利用率が3倍以上に向上。",
  },
];

const categories = [
  { name: "グルメ・食事", count: 2500 },
  { name: "旅行・宿泊", count: 1800 },
  { name: "エンタメ・レジャー", count: 1500 },
  { name: "日用品・家電", count: 2000 },
  { name: "健康・ビューティー", count: 1200 },
  { name: "体験・アクティビティ", count: 800 },
];

const features = [
  "ポイント付与ルールのカスタマイズ",
  "勤続年数・役職に応じた自動付与",
  "有効期限の柔軟な設定",
  "部署・グループ別の管理",
  "利用履歴のリアルタイム確認",
  "予算管理・消化率レポート",
];

export default function BenefitsFeaturePage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm">
              <Gift className="h-4 w-4" />
              福利厚生
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              従業員が本当に
              <br />
              喜ぶ福利厚生を
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              画一的な福利厚生から、一人ひとりのニーズに合わせた柔軟な制度へ。
              ポイント制の導入で、利用率と従業員満足度を大幅に向上させます。
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
                  <ShoppingBag className="h-32 w-32 text-muted-foreground/20" />
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

      {/* Categories */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            10,000以上の豊富なラインナップ
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            多様なカテゴリから、従業員一人ひとりに合ったギフトを
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
            >
              <span className="font-medium text-foreground">{category.name}</span>
              <span className="text-sm text-muted-foreground">{category.count.toLocaleString()}件</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              管理者のための<br />充実した機能
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ポイント付与から利用状況の把握まで、福利厚生運用に必要な機能を完備。
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
                <Globe className="h-24 w-24 text-muted-foreground/20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12 lg:px-24">
          <h2 className="text-2xl font-bold tracking-tight text-background sm:text-3xl">
            福利厚生の効果を最大化しませんか？
          </h2>
          <p className="mt-4 text-lg text-background/80">
            まずは無料デモで、社宝の福利厚生機能をご体験ください。
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
