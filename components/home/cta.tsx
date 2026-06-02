import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[44px] bg-[linear-gradient(135deg,#204753_0%,#2e6774_45%,#4f98a0_100%)] px-6 py-16 shadow-[0_35px_120px_-50px_rgba(24,61,73,0.65)] sm:px-12 sm:py-24 lg:px-24">
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
          <div className="absolute -right-16 top-8 -z-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-black tracking-tight text-background sm:text-4xl lg:text-5xl">
              使われない福利厚生を、
              <br />
              使いたくなる制度へ。
            </h2>
            <p className="mt-5 text-lg leading-8 text-background/80">
              福利厚生・健康経営・ストレスチェックを切り分けず、
              日常の利用が申請の証跡として残る——そんな体験を整えたい企業さま向けに、社宝の設計思想と画面イメージをご案内します。
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 w-full rounded-full bg-background px-8 text-base text-foreground hover:bg-background/90 sm:w-auto"
                asChild
              >
                <Link href="/contact?type=demo">
                  <Calendar className="h-4 w-4" />
                  無料デモを予約
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-full border-background/30 bg-transparent px-8 text-base text-background hover:bg-background/10 sm:w-auto"
                asChild
              >
                <Link href="/contact?type=document">
                  <FileText className="h-4 w-4" />
                  資料をダウンロード
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 border-t border-background/20 pt-8">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-background/80 backdrop-blur">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              健康経営優良法人2026 認定取得（認定番号：139686）
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-background/80 backdrop-blur">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              SECURITY ACTION 二つ星宣言（IPA）
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-background/80 backdrop-blur">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              AWS インフラ × エンドツーエンド暗号化
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
