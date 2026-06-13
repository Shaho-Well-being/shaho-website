import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  "人数制限なし",
  "最短1週間で全社展開",
  "ポイント付与額で選ぶシンプル設計",
];

export function PricingTeaser() {
  return (
    <section className="bg-[linear-gradient(180deg,#eef9f7_0%,#ffffff_100%)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-border/70 bg-white px-6 py-12 shadow-[0_30px_100px_-50px_rgba(28,92,95,0.35)] sm:px-12 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Pricing
              </div>
              <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                ポイント付与
                <span className="ml-2 align-baseline text-primary">
                  月額500円
                </span>
                <span className="text-xl font-bold text-foreground">/人〜</span>
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                福利厚生から始めて、健康経営・ストレスチェックまで段階的に拡張できます。
                プラットフォーム利用料は別途。詳細はお見積りでご案内します。
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" className="h-14 rounded-full px-8 text-base" asChild>
                <Link href="/pricing">
                  料金プランを見る
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-full border-primary/20 px-8 text-base"
                asChild
              >
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
