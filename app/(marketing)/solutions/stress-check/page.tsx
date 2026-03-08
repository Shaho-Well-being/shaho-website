import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ストレスチェック・法令対応 | 社宝",
  description: "労働安全衛生法に基づくストレスチェックの実施から集計・報告まで、社宝でワンストップ対応。法令遵守を確実に。",
};

export default function StressCheckPage() {
  return (
    <div className="py-16 lg:py-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            ストレスチェック・法令対応
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            労働安全衛生法に基づくストレスチェックの実施から集計・報告まで、社宝でワンストップ対応。
            50人以下事業所の義務化にも対応し、労働基準監督署への電子帳票提出までサポートします。
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
