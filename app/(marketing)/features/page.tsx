import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Gift, Heart, ClipboardCheck, BarChart3, Smartphone, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "機能紹介 | 社宝",
  description: "社宝の主要機能をご紹介。福利厚生、健康管理、健診・ストレスチェック、管理者機能など。",
};

const features = [
  {
    icon: Gift,
    title: "福利厚生",
    description: "ポイント制福利厚生で、従業員一人ひとりに合わせた柔軟な制度設計が可能に。10,000以上のギフト・体験から自由に選択できます。",
    href: "/features/benefits",
    image: "/images/features/features-benefits.jpg",
    features: [
      "ポイント付与・管理機能",
      "10,000以上のギフト・体験カタログ",
      "家族利用オプション",
      "カフェテリアプラン対応",
      "利用状況レポート",
    ],
  },
  {
    icon: Heart,
    title: "健康管理",
    description: "従業員の健康データを一元管理。予防医療の推進と健康リスクの早期発見をサポートします。",
    href: "/features/health",
    image: "/images/features/features-health.jpg",
    features: [
      "健康データダッシュボード",
      "ウェアラブル連携",
      "健康スコアリング",
      "個別健康アドバイス",
      "健康増進プログラム",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "健診・ストレスチェック",
    description: "健康診断の予約から結果管理、ストレスチェックまで、法令遵守をワンストップで対応。",
    href: "/features/checkup",
    image: "/images/features/features-checkup.jpg",
    features: [
      "オンライン健診予約",
      "健診結果の自動取込",
      "ストレスチェック実施",
      "集団分析レポート",
      "法定報告書出力",
    ],
  },
  {
    icon: BarChart3,
    title: "人事・管理者向け（Web）",
    description: "人事・総務担当者のための管理ダッシュボード。組織管理、ストレスチェック、ポイント・通知、分析を一元管理。",
    href: "/features/admin-web",
    image: "/images/features/features-admin.jpg",
    features: [
      "組織・従業員・権限管理",
      "ストレスチェック配信・集計・労基署提出",
      "ポイント付与・プッシュ通知",
      "ダッシュボード・サブスク管理",
    ],
  },
  {
    icon: Smartphone,
    title: "従業員向け（アプリ）",
    description: "健康記録、ポイント交換、コンテンツ、メンタルケアまで。毎日使いたくなるひとつのアプリで。",
    href: "/features/employee-app",
    image: "/images/features/features-health.jpg",
    features: [
      "健康管理・フィットネス記録",
      "福利厚生ポイントで商品・サブスク交換",
      "健康記事・カタログ閲覧",
      "AIチャットによるメンタルケア",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            すべての機能を、ひとつに
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            社宝は、福利厚生、健康管理、健診・ストレスチェックを統合したオールインワンプラットフォーム。
            バラバラだったシステムを一つにまとめ、管理工数を大幅に削減します。
          </p>
        </div>
      </section>

      {/* 導線: 管理者向け / 従業員向け */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
          <p className="text-center text-sm font-medium text-muted-foreground">
            社宝は「管理者向けWeb」と「従業員向けアプリ」の2つで構成されています
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/features/admin-web"
              className="group flex items-center justify-between rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent hover:bg-accent/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">人事・管理者向け（Web）</p>
                  <p className="text-sm text-muted-foreground">管理画面の機能を見る</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/features/employee-app"
              className="group flex items-center justify-between rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent hover:bg-accent/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">従業員向け（アプリ）</p>
                  <p className="text-sm text-muted-foreground">アプリの機能を見る</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:gap-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Feature Content */}
              <div className="flex-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                  <feature.icon className="h-7 w-7 text-foreground" />
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                  {feature.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <ul className="mt-8 flex flex-col gap-3">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <Check className="h-5 w-5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="mt-8" asChild>
                  <Link href={feature.href}>
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Feature Visual */}
              <div className="flex-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/50">
                      {feature.image ? (
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <feature.icon className="h-24 w-24 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-muted/50 px-6 py-16 text-center sm:px-12 lg:px-24">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            すべての機能を体験する
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            無料デモで社宝の全機能をご確認いただけます。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact?type=demo">
                無料デモを予約
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">料金を見る</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
