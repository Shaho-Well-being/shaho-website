import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    company: "株式会社K・ライズホールディングス",
    industry: "製造・小売",
    size: "186名",
    title: "拠点差のある福利厚生を、全社員が使いやすい制度へ",
    result: "利用率 90%超を目指せる運用へ",
    summary:
      "拠点ごとに制度の届け方が違っていた状態から、全社員に公平に伝わるデジタル運用へ。福利厚生と健康施策を同じ導線で案内できるようになりました。",
    image: "/images/features/features-benefits.jpg",
    href: "/case-studies/1",
  },
  {
    company: "株式会社ProVision",
    industry: "情報通信",
    size: "900名",
    title: "出社したくなる制度づくりで、体験価値をアップ",
    result: "制度の見え方と満足度を改善",
    summary:
      "福利厚生を単なる補助ではなく、組織文化の一部として設計。制度の見つけやすさと利用のしやすさを高めることで、従業員への浸透を後押しします。",
    image: "/images/features/features-admin.jpg",
    href: "/case-studies/2",
  },
  {
    company: "ヘルスケア連携企業",
    industry: "サービス",
    size: "300名",
    title: "福利厚生と健康経営を一つの体験に統合",
    result: "人事の管理導線をすっきり一元化",
    summary:
      "福利厚生の訴求と健診・ストレスチェックの導線が分断されていた課題を、従業員目線のアプリ体験に統合。人事側の説明コストも減らせます。",
    image: "/images/features/features-health.jpg",
    href: "/case-studies/3",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Case Studies
            </div>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              導入後の変化が、
              <span className="text-primary">ひと目で伝わる事例</span>
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              企業規模や業種が違っても、共通するのは「制度がきちんと使われる状態」をつくれていることです。
            </p>
          </div>

          <Button variant="outline" className="rounded-full bg-white" asChild>
            <Link href="/case-studies">
              すべての事例を見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              key={item.company}
              className="overflow-hidden rounded-[34px] border border-border/80 bg-white shadow-[0_25px_80px_-45px_rgba(28,92,95,0.35)]"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
                <div className="absolute left-5 right-5 top-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground">
                    企業規模 {item.size}
                  </span>
                  <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {item.industry}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {item.result}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm font-semibold text-primary">{item.company}</div>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {item.summary}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  詳しく見る
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
