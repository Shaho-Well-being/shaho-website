import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  { label: "ストレスチェック", bg: "bg-sky-50", text: "text-sky-900", dot: "bg-sky-700" },
  { label: "セルフヘルスケア × 認定支援", bg: "bg-emerald-50", text: "text-emerald-900", dot: "bg-emerald-700" },
  { label: "ポイント福利厚生", bg: "bg-yellow-50", text: "text-yellow-900", dot: "bg-yellow-600" },
];

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-72px)] min-h-[640px] max-h-[920px] overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home-hero.png"
          alt="オフィスで社宝アプリを紹介するビジネスパーソン"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover object-[72%_center]"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl pb-16 pt-10 sm:pb-20">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-semibold text-amber-800 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            2028年4月 ストレスチェックが全事業場で義務化へ
          </div>

          <h1
            className="mt-6 text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.08]"
            style={{ textShadow: '0 0 24px rgba(255,255,255,1), 0 0 8px rgba(255,255,255,1), -1px 0 0 rgba(255,255,255,0.9), 1px 0 0 rgba(255,255,255,0.9), 0 -1px 0 rgba(255,255,255,0.9), 0 1px 0 rgba(255,255,255,0.9)' }}
          >
            ストレスチェックも、
            <br />
            健康経営も、
            <br />
            福利厚生も。
          </h1>
          <p className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
            3つの課題を、社宝ひとつで。
          </p>

          <p
            className="mt-6 max-w-xl text-pretty text-lg leading-8 text-foreground/90"
            style={{ textShadow: '0 0 16px rgba(255,255,255,1), 0 0 6px rgba(255,255,255,1)' }}
          >
            法定対応から健康経営認定支援まで、ひとつのアプリで整えます。
          </p>

          {/* 3 pillar pills */}
          <div className="mt-7 flex flex-wrap gap-2">
            {pillars.map((p) => (
              <span
                key={p.label}
                className={`inline-flex items-center gap-1.5 rounded-full ${p.bg} px-3.5 py-1.5 text-xs font-semibold ${p.text}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />
                {p.label}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="h-14 rounded-full px-10 text-base shadow-sm" asChild>
              <Link href="/contact">
                無料デモ・相談
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-primary/20 bg-white/90 px-10 text-base shadow-sm"
              asChild
            >
              <Link href="/contact?type=document">
                <FileText className="h-5 w-5" />
                資料をダウンロード
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
