import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  ShoppingBag,
  BookOpen,
  MessageCircle,
  Sparkles,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "従業員向けモバイルアプリ機能 | 社宝",
  description:
    "毎日使いたくなるアプリで、健康と福利厚生をワンストップ。食事・運動記録、ポイント交換、メンタルケアまで。",
};

const featureCategories = [
  {
    title: "健康管理・フィットネス",
    description: "日々のカラダの変化を記録し、目標に向かって続けられる。",
    icon: Heart,
    items: [
      { label: "食事・ワークアウト記録", detail: "写真やメモで手軽に記録、カロリーや運動量を可視化" },
      { label: "目標設定", detail: "歩数・睡眠・体重など、自分だけの目標を設定して達成感を得る" },
      { label: "グラフ可視化", detail: "週・月単位の推移をグラフで確認し、習慣化をサポート" },
    ],
  },
  {
    title: "福利厚生・ポイント利用",
    description: "貯めたポイントを、欲しいもの・体験にすぐ交換。",
    icon: ShoppingBag,
    items: [
      { label: "ポイント残高の確認", detail: "いつでも残高と付与履歴をチェック" },
      { label: "商品・サブスクとの交換", detail: "ギフトカード、EC、サブスクなど豊富な交換先" },
      { label: "即時利用", detail: "申請の待ち時間なし。欲しいときにすぐ使える" },
    ],
  },
  {
    title: "コンテンツ",
    description: "健康・暮らしに役立つ情報を、いつでも手元で。",
    icon: BookOpen,
    items: [
      { label: "健康に関する記事", detail: "栄養、睡眠、メンタルなど、専門的な情報をわかりやすく" },
      { label: "カタログ閲覧", detail: "福利厚生で選べる商品・体験を一覧で閲覧" },
    ],
  },
  {
    title: "メンタルケア",
    description: "ひとりで抱え込まない。話すだけで、心が軽くなる。",
    icon: MessageCircle,
    items: [
      { label: "AIキャラクターとのチャット", detail: "24時間いつでも、気軽に気持ちを話せる相手がいる" },
      { label: "セルフケアのヒント", detail: "会話に応じて、休息やリフレッシュの提案を受けられる" },
    ],
  },
];

const benefits = [
  {
    title: "「また開きたくなる」体験",
    description: "健康記録やポイント交換が簡単だから、続けやすく、福利厚生の利用率が自然と上がります。",
  },
  {
    title: "健康が続く・見える",
    description: "記録とグラフで自分の変化がわかり、目標を立てやすく。会社の健康施策を自分ごと化できます。",
  },
  {
    title: "心のセーフティネット",
    description: "AIチャットでいつでも話せる窓口があることで、メンタル不調の予防と早期の気づきをサポートします。",
  },
];

export default function EmployeeAppPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium text-accent">従業員向けアプリ</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              毎日使いたくなる、
              <br />
              <span className="text-accent">健康と福利厚生アプリ。</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              記録・ポイント・コンテンツ・メンタルケアまで、従業員の「カラダ」と「ココロ」を
              ひとつのアプリで。シンプルなUIで、忙しい毎日でも無理なく続けられます。
            </p>
            <Button className="mt-8" size="lg" asChild>
              <Link href="/contact?type=demo">
                アプリの画面を無料で体験する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted lg:aspect-[4/3]">
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="h-24 w-24 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </section>

      {/* 機能一覧 Grid */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            アプリでできること
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            健康・福利厚生・コンテンツ・メンタルケアを、ひとつのアプリに集約。
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {featureCategories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <category.icon className="h-6 w-6 text-accent" />
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
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
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
              従業員が喜ぶ、3つの理由
            </h2>
            <p className="mt-4 text-muted-foreground">
              アプリを導入することで、こんな変化が生まれます。
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
            まずは無料デモで、実際の画面をご覧ください
          </h2>
          <p className="mt-4 text-background/80">
            アプリの操作感や機能の流れを、その場でご説明します。
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/contact?type=demo">
              無料デモを予約する
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
