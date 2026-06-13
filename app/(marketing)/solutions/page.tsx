import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ClipboardCheck, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "課題別ソリューション | 社宝",
  description:
    "ストレスチェック・法令対応、福利厚生の利用率・従業員満足度、健康経営優良法人認定。課題に合わせた社宝のソリューションをご紹介。",
};

const solutions = [
  {
    icon: ClipboardCheck,
    title: "ストレスチェック・法令対応",
    description:
      "労働安全衛生法に基づくストレスチェックの実施から集計・報告までワンストップ。50人以下事業所の義務化にも対応し、労基署への電子帳票提出までサポートします。",
    href: "/solutions/stress-check",
  },
  {
    icon: Users,
    title: "福利厚生・従業員満足度",
    description:
      "福利厚生の利用率は40%とも言われています。社宝はシンプルなUIと即時利用可能なポイントで利用率を高め、従業員の満足度とエンゲージメント向上を実現します。",
    href: "/solutions/engagement",
  },
  {
    icon: Award,
    title: "健康経営優良法人認定",
    description:
      "経済産業省が認定する「健康経営優良法人」。健診結果の管理、ストレスチェック、健康増進プログラムなど、認定に必要な取り組みを一つのプラットフォームでサポートします。",
    href: "/solutions/health-management",
  },
];

export default function SolutionsPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            課題別ソリューション
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            人事・経営者が抱える「ストレスチェック」「福利厚生の利用率」「健康経営認定」といった
            課題に、社宝がどう応えるかをご紹介します。
          </p>
        </div>
      </section>

      {/* 一覧 */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link key={solution.href} href={solution.href} className="group">
              <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <solution.icon className="h-6 w-6 text-accent-strong" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-foreground group-hover:text-accent-strong">
                    {solution.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-accent-strong">
                    詳しく見る
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-muted/50 px-6 py-12 text-center sm:px-12">
          <p className="text-lg text-muted-foreground">
            どの課題からでも、お気軽にお問い合わせください。
          </p>
          <Button className="mt-6" size="lg" asChild>
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
