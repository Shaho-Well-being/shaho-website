import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "健康経営優良法人の認定 | 社宝",
  description: "健康経営優良法人認定に必要な健康診断・ストレスチェック・データ管理を社宝で一元化。認定取得をサポート。",
};

export default function HealthManagementPage() {
  return (
    <div className="py-16 lg:py-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            健康経営優良法人の認定
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            経済産業省が認定する「健康経営優良法人」。社宝では、健診結果の管理、ストレスチェック、
            健康増進プログラムなど、認定に必要な取り組みを一つのプラットフォームでサポートします。
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
