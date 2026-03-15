import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background h-[calc(100vh-4rem)] min-h-[600px] max-h-[900px]">
      {/* Background Image Area */}
      {/* Using the image provided by the user. If the file is hero.png, it can be changed to /hero.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero-image.png"
          alt="Modern Corporate Benefits Platform"
          fill
          className="object-cover object-[70%_center]"
          priority
        />
      </div>

      {/* 
        Gradient Overlay (Left to Right) 
        This makes the white text readable on the left, while fading out on the right to show the woman.
      */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/60 sm:to-transparent dark:from-slate-950/95 dark:via-slate-950/80 dark:to-transparent w-full md:w-3/4 lg:w-2/3" />

      {/* Content Area */}
      <div className="relative z-10 flex h-full items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl pt-10 pb-20">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-white/60 dark:bg-slate-900/60 px-5 py-2 text-sm backdrop-blur-md shadow-sm transition-transform hover:scale-105">
            <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-semibold text-slate-800 dark:text-slate-200 tracking-wide">健康経営優良法人2026 認定取得済み（運営会社）</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl lg:leading-[1.15]">
            福利厚生と健康管理を、
            <br />
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">これひとつで完結。</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl max-w-lg font-medium">
            ポイントはPayPay・Amazonギフト券など電子マネーに即交換。ストレスチェック・健診管理・AIメンタルケアまで、使いやすさとスピードで選ばれるプラットフォームです。
          </p>

          {/* Checkmarks */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm font-bold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
              <span>スタートアップから大手まで導入実績</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
              <span>最短1週間で全社展開</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-1 text-base w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/contact?type=demo">
                無料デモを予約する
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-300 dark:border-slate-700 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all text-base w-full sm:w-auto text-slate-900 dark:text-white" asChild>
              <Link href="/about">
                <Play className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                製品紹介を見る
              </Link>
            </Button>
          </div>

        </div>
      </div>

      {/* Trust bar - Floating at the bottom */}
      <div className="absolute bottom-0 w-full border-t border-slate-200/50 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md py-4 z-10 hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-x-8 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold tracking-wider">信頼の根拠:</span>
            <div className="flex flex-wrap gap-x-10 gap-y-1">
              {[
                "健康経営優良法人2026 認定（認定番号：139686）",
                "SECURITY ACTION 二つ星宣言（IPA）",
                "AWS インフラ × エンドツーエンド暗号化",
                "厚労省推奨 57設問 完全準拠",
              ].map((item, i) => (
                <span key={i} className="font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
