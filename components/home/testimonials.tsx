import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "健康経営優良法人の認定取得を支援する中で、社宝は申請に必要なデータを一元管理できる数少ないツールです。ストレスチェックから健診受診率まで、証跡書類をすぐに揃えられるのが実務上とても助かります。",
    author: "経営コンサルタント",
    role: "中小企業診断士",
    company: "健康経営支援の専門家として",
    industry: "コンサルティング",
    caseStudyId: "1",
  },
  {
    quote: "外国籍スタッフも多い職場で、これまで福利厚生が「使えない」という声がありました。社宝はPayPayや電子マネー交換に対応しているので、国籍・雇用形態を問わず全員が公平に恩恵を受けられます。",
    author: "グローバル企業人事担当",
    role: "HR Manager",
    company: "多国籍スタッフを抱える事業会社",
    industry: "IT・サービス業",
    caseStudyId: "2",
  },
  {
    quote: "福利厚生は要件を満たせば経費として処理できますが、使われない制度は税制上のメリットも活かせません。社宝の電子マネー特化は利用率が上がるため、税務的にも無駄のない制度設計に直結します。",
    author: "税務アドバイザー",
    role: "公認会計士・税理士",
    company: "中小企業の財務・税務支援",
    industry: "会計・税務",
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
              専門家からの評価
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              中小企業診断士・税理士・HRの専門家が語る、社宝を選ぶ理由
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
