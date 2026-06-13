import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  ClipboardCheck,
  Gift,
  BarChart3,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "人事・管理者向け機能（管理画面） | 社宝",
  description:
    "人事・総務の業務を一本化。組織管理、ストレスチェック、ポイント付与、ダッシュボード分析まで、社宝の管理画面で効率化。",
};

const featureCategories = [
  {
    title: "組織・従業員管理",
    description: "従業員情報の登録から権限設定まで、運用に合わせて柔軟にカスタマイズ。",
    icon: Users,
    items: [
      { label: "従業員マスタのCRUD", detail: "一覧・登録・編集・CSV一括取込" },
      { label: "権限・ロール管理", detail: "管理者／部門責任者／一般など役割に応じたアクセス制御" },
    ],
  },
  {
    title: "ストレスチェック",
    description: "実施から集計・報告まで、法令対応をワンストップで。",
    icon: ClipboardCheck,
    items: [
      { label: "配信・回答管理", detail: "アプリ／Webで配信、回答状況のリアルタイム確認" },
      { label: "集団分析", detail: "部署・属性別の集計と高ストレス者へのフォロー管理" },
      { label: "労基署用エクスポート", detail: "法定様式に沿ったデータ出力で提出業務を簡素化" },
    ],
  },
  {
    title: "ポイント・通知管理",
    description: "健康行動へのインセンティブと、従業員への確実な情報到達。",
    icon: Gift,
    items: [
      { label: "健康行動へのポイント付与", detail: "歩数・健診受診などに連動した自動付与ルール設定" },
      { label: "プッシュ通知配信", detail: "リマインダーやお知らせを一括・条件別に配信" },
    ],
  },
  {
    title: "分析・設定",
    description: "利用状況の可視化と、契約・規約の一元管理。",
    icon: BarChart3,
    items: [
      { label: "ダッシュボード分析", detail: "利用率・ポイント残高・健診受診率などをグラフで把握" },
      { label: "サブスク管理", detail: "プラン・契約人数・更新日の管理" },
      { label: "利用規約・設定", detail: "社内規程やアプリ表示設定の一元管理" },
    ],
  },
];

const benefits = [
  {
    title: "人事・総務の工数削減",
    description: "福利厚生・健診・ストレスチェックが一つの画面に集約され、問い合わせ対応や手作業の集計が大幅に減ります。",
  },
  {
    title: "法令対応の確実さ",
    description: "ストレスチェックの実施から労働基準監督署への報告まで、漏れのないフローで運用できます。",
  },
  {
    title: "データに基づく施策設計",
    description: "ダッシュボードで利用率や傾向を把握し、次の福利厚生・健康施策の意思決定に活かせます。",
  },
];

export default function AdminWebPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium text-accent-strong">管理者・人事向け Web</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              人事業務を、
              <br />
              <span className="text-accent-strong">ひとつの画面に。</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              組織管理、ストレスチェック、ポイント付与、通知、分析——バラバラだった業務を社宝の管理画面に集約。
              権限管理とダッシュボードで、効率とコンプライアンスを両立します。
            </p>
            <Button className="mt-8" size="lg" asChild>
              <Link href="/contact">
                管理画面を無料で体験する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-muted/30 lg:aspect-[4/3]">
            <img
              src="/kanri_gamen.png"
              alt="社宝の管理画面ダッシュボード"
              className="h-full w-full object-contain object-center p-2"
            />
          </div>
        </div>
      </section>

      {/* 機能一覧 Grid */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            管理画面でできること
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            人事・総務担当者に必要な機能を、カテゴリ別に整理しています。
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {featureCategories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <category.icon className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {category.items.map((item) => (
                        <li
                          key={item.label}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />
                          <span>
                            <span className="font-medium text-foreground">
                              {item.label}
                            </span>
                            <span className="text-muted-foreground">
                              {" "}
                              — {item.detail}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 導入メリット */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-muted/30 px-6 py-16 sm:px-12 lg:px-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              導入するメリット
            </h2>
            <p className="mt-4 text-muted-foreground">
              管理画面の活用で、人事・総務の業務がこう変わります。
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl bg-background p-6 shadow-sm"
              >
                <h3 className="font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12">
          <h2 className="text-2xl font-bold tracking-tight text-background sm:text-3xl">
            導入のご相談はお気軽にお問い合わせください
          </h2>
          <p className="mt-4 text-background/80">
            管理画面の操作感やストレスチェックの流れを、その場でご説明します。
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/contact">
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
