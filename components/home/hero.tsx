import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto max-w-3xl text-center lg:text-left">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500" />
            <span className="text-muted-foreground">2024年 健康経営優良法人認定サポート実績 No.1</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            福利厚生と健康管理を、
            <br />
            <span className="text-accent">これひとつで。</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            社宝は、福利厚生、健康診断、ストレスチェック、健康管理を一つのプラットフォームに統合。
            人事・総務の業務負担を軽減しながら、従業員の健康と幸福を支援します。
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/contact?type=demo">
                無料デモを予約する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/about">
                <Play className="mr-2 h-4 w-4" />
                製品紹介を見る
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16">
            <p className="text-sm text-muted-foreground">導入企業</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {["企業A", "企業B", "企業C", "企業D", "企業E"].map((company, i) => (
                <div
                  key={i}
                  className="text-lg font-semibold text-muted-foreground/60"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero image: public/images/hero-office-1.jpg を配置すると表示されます */}
        <div className="relative mt-12 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted lg:mt-0 lg:aspect-auto lg:min-h-[360px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-office-1.jpg"
            alt="オフィスイメージ"
            className="h-full w-full object-cover"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
