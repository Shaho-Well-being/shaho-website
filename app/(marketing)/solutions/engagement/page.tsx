import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "福利厚生の利用率・従業員満足度 | 社宝",
  description: "利用率40%の課題を解決。ポイント制福利厚生と使いやすいアプリで、従業員満足度とエンゲージメントを向上。",
};

export default function EngagementPage() {
  return (
    <div className="py-16 lg:py-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            福利厚生の利用率・従業員満足度
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            福利厚生の利用率は40%とも言われています。社宝は、シンプルなUIと即時利用可能なポイントで
            利用率を高め、従業員の満足度とエンゲージメント向上を実現します。
          </p>
          <Button className="mt-8" size="lg" asChild>
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
