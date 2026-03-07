import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Gift, Heart, ClipboardCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "福利厚生",
    description: "ポイント制福利厚生で、従業員一人ひとりに合わせた柔軟な制度設計が可能に。",
    href: "/features/benefits",
    highlights: ["ポイント付与・交換", "10,000以上のギフト・体験", "公平な制度運用"],
  },
  {
    icon: Heart,
    title: "健康管理",
    description: "従業員の健康データを一元管理。予防医療の推進と健康リスクの早期発見をサポート。",
    href: "/features/health",
    highlights: ["健康データ統合", "リスク分析・予測", "個別健康アドバイス"],
  },
  {
    icon: ClipboardCheck,
    title: "健診・ストレスチェック",
    description: "健康診断の予約から結果管理、ストレスチェックまで、法令遵守をワンストップで。",
    href: "/features/checkup",
    highlights: ["オンライン予約", "結果の自動取込", "法令対応レポート"],
  },
  {
    icon: BarChart3,
    title: "管理者機能",
    description: "人事・総務担当者のための管理ダッシュボード。データ分析から報告書作成まで。",
    href: "/features/admin",
    highlights: ["リアルタイム分析", "自動レポート生成", "権限管理"],
  },
];

export function FeaturesOverview() {
  return (
    <section className="border-t border-border bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            すべてが、ひとつに
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            バラバラだった福利厚生と健康管理の仕組みを、社宝が一つに統合します。
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href} className="group">
              <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <feature.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {feature.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
