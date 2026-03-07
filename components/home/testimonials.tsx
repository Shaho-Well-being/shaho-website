import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "社宝の導入で、福利厚生の管理工数が月40時間から5時間に削減。従業員満足度も過去最高を記録しました。",
    author: "鈴木 一郎",
    role: "人事部長",
    company: "株式会社テックイノベーション",
    industry: "IT・通信",
    caseStudyId: "1",
  },
  {
    quote: "健診データの一元管理により、ハイリスク者への早期介入が可能に。休職者が前年比50%減少しました。",
    author: "山田 花子",
    role: "健康経営推進室 室長",
    company: "グローバルマニュファクチャリング株式会社",
    industry: "製造業",
    caseStudyId: "2",
  },
  {
    quote: "ストレスチェックの分析レポートが秀逸。部署ごとの課題が可視化され、的確な組織改善ができています。",
    author: "中村 健一",
    role: "産業医",
    company: "フィナンシャルサービス株式会社",
    industry: "金融・保険",
    caseStudyId: "3",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              導入企業の声
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              社宝を導入いただいた企業様からの評価
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/case-studies">
              すべての事例を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-muted-foreground/30" />
                <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                    {testimonial.author.slice(0, 1)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                <Link
                  href={`/case-studies/${testimonial.caseStudyId}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  事例を読む
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
