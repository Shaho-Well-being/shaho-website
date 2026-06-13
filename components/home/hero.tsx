import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  { label: "ストレスチェック", bg: "bg-sky-50", text: "text-sky-900", dot: "bg-sky-700" },
  { label: "セルフヘルスケア × 認定支援", bg: "bg-emerald-50", text: "text-emerald-900", dot: "bg-emerald-700" },
  { label: "ポイント福利厚生", bg: "bg-yellow-50", text: "text-yellow-900", dot: "bg-yellow-600" },
];

const textShadow = '0 0 24px rgba(255,255,255,1), 0 0 8px rgba(255,255,255,1), -1px 0 0 rgba(255,255,255,0.9), 1px 0 0 rgba(255,255,255,0.9), 0 -1px 0 rgba(255,255,255,0.9), 0 1px 0 rgba(255,255,255,0.9)';

export function Hero() {
  return (
    <section className="relative bg-background">

      {/* ── 写真 ────────────────────────────────
          モバイル: 上部に固定高さで表示（テキストは下に流れる）
          デスクトップ: absolute で全面背景        */}
      <div className="relative h-[56vw] max-h-[420px] min-h-[240px] lg:absolute lg:inset-0 lg:h-auto lg:max-h-none lg:min-h-0">
        <Image
          src="/Home-hero.png"
          alt="オフィスで社宝アプリを紹介するビジネスパーソン"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover object-[72%_20%] lg:object-[72%_center]"
          priority
        />
        {/* モバイル: 下端を背景色にフェード */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent lg:hidden" />

        {/* 緊急バッジ：モバイルのみ写真の下端に配置 */}
        <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/95 px-3.5 py-1.5 text-xs font-semibold text-amber-800 shadow-sm backdrop-blur-sm sm:bottom-5 sm:left-6 sm:px-5 sm:py-2 sm:text-sm lg:hidden">
          <span className="inline-block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-amber-500" />
          2028年4月 ストレスチェックが全事業場で義務化へ
        </div>
      </div>

      {/* ── テキストコンテンツ ──────────────────
          モバイル: relative で写真の下に流れる
          デスクトップ: absolute で写真に重ねる   */}
      <div className="relative px-4 pb-12 pt-6 sm:px-6 lg:absolute lg:inset-0 lg:flex lg:items-center lg:px-8 lg:pb-20 lg:pt-0">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-xl lg:max-w-2xl">

            {/* 緊急バッジ：デスクトップのみ H1 の上に表示 */}
            <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-semibold text-amber-800 shadow-sm">
              <span className="inline-block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-amber-500" />
              2028年4月 ストレスチェックが全事業場で義務化へ
            </div>

            {/* キャッチコピー */}
            <h1
              className="mt-5 text-[2.4rem] font-black tracking-tight text-foreground leading-[1.18] sm:text-5xl sm:leading-[1.15] lg:text-[3.5rem] lg:leading-[1.15]"
              style={{ textShadow }}
            >
              <span className="block">福利厚生も。</span>
              <span className="block">法定義務も。</span>
              <span className="block">ひとつのアプリで。</span>
              <span className="block">働きやすいを実現する。</span>
            </h1>

            {/* サブライン */}
            <p
              className="mt-2 text-base font-bold text-primary sm:text-lg lg:text-xl"
              style={{ textShadow: '0 0 16px rgba(255,255,255,1)' }}
            >
              中小企業のための福利厚生・健康経営支援 SaaS「社宝」
            </p>

            {/* 3本柱ピル */}
            <div className="mt-5 flex flex-wrap gap-2">
              {pillars.map((p) => (
                <span
                  key={p.label}
                  className={`inline-flex items-center gap-1.5 rounded-full ${p.bg} px-3 py-1.5 text-xs font-semibold ${p.text}`}
                >
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${p.dot}`} />
                  {p.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-13 rounded-full px-8 text-base shadow-sm sm:h-14 sm:px-10" asChild>
                <Link href="/contact">
                  無料デモ・相談
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-13 rounded-full border-primary/20 bg-white/90 px-8 text-base shadow-sm sm:h-14 sm:px-10"
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
      </div>

      {/* デスクトップ: セクション全体の高さを確保 */}
      <div className="hidden lg:block lg:h-[calc(100vh-72px)] lg:min-h-[640px] lg:max-h-[920px]" />

    </section>
  );
}
