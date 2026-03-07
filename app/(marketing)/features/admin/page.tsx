import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Users, FileText, Lock, Zap, Database, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "管理者機能 | 社宝",
  description: "人事・総務担当者のための管理ダッシュボード。データ分析から報告書作成まで一元管理。",
};

const highlights = [
  {
    icon: BarChart3,
    title: "リアルタイム分析",
    description: "福利厚生利用状況、健康指標をリアルタイムで把握。",
  },
  {
    icon: FileText,
    title: "自動レポート",
    description: "月次・年次レポートを自動生成。経営層への報告も簡単に。",
  },
  {
    icon: Lock,
    title: "権限管理",
    description: "部署・役職に応じた柔軟な閲覧・編集権限の設定。",
  },
  {
    icon: Zap,
    title: "API連携",
    description: "人事システム、勤怠システムとのシームレスな連携。",
  },
];

const features = [
  "リアルタイムダッシュボード",
  "カスタムレポート作成",
  "定期レポート自動送信",
  "部署・グループ別分析",
  "目標設定・進捗管理",
  "ロール・権限管理",
  "API・Webhook連携",
  "監査ログ・履歴管理",
  "SSO（シングルサインオン）",
  "多要素認証（MFA）",
  "IP制限",
  "データエクスポート",
];

const integrations = [
  { name: "SmartHR", category: "人事システム" },
  { name: "freee人事労務", category: "人事システム" },
  { name: "KING OF TIME", category: "勤怠管理" },
  { name: "AKASHI", category: "勤怠管理" },
  { name: "Slack", category: "コミュニケーション" },
  { name: "Microsoft Teams", category: "コミュニケーション" },
];

export default function AdminFeaturePage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm">
              <BarChart3 className="h-4 w-4" />
              管理者機能
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              データで導く
              <br />
              健康経営
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              人事・総務担当者のための強力な管理ツール。
              リアルタイムのデータ分析で、効果的な施策立案をサポートします。
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
                  <BarChart3 className="h-32 w-32 text-muted-foreground/20" />
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
            すべてを一目で把握
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            直感的なダッシュボードで、組織の健康状態とコストを可視化
          </p>
        </div>
        <div className="mt-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex aspect-[16/9] items-center justify-center bg-muted/50">
                <Users className="h-32 w-32 text-muted-foreground/20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            管理者に必要な機能をすべて
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            データ分析、レポート作成、セキュリティ管理まで
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <Check className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              既存システムと<br />シームレスに連携
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              人事システム、勤怠システム、コミュニケーションツールと連携し、
              業務効率をさらに向上させます。
            </p>
            <Button className="mt-8" variant="outline" asChild>
              <Link href="/docs">
                <Database className="mr-2 h-4 w-4" />
                API ドキュメントを見る
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="rounded-lg border border-border bg-card p-4"
              >
                <span className="text-xs text-muted-foreground">{integration.category}</span>
                <p className="mt-1 font-medium text-foreground">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12 lg:px-24">
          <h2 className="text-2xl font-bold tracking-tight text-background sm:text-3xl">
            管理業務を効率化しませんか？
          </h2>
          <p className="mt-4 text-lg text-background/80">
            まずは無料デモで、社宝の管理者機能をご体験ください。
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
