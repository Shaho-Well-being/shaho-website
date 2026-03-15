import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 sm:px-12 sm:py-24 lg:px-24">
          {/* Background pattern */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              使われない福利厚生に、さようなら。
            </h2>
            <p className="mt-4 text-lg text-background/80">
              電子マネー特化で全員が使える福利厚生、ストレスチェック・健診の一元管理、AIメンタルケア——
              最短1週間で全社展開できます。まずは無料デモで、社宝が貴社の課題にどう答えるかをご確認ください。
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="w-full bg-background text-foreground hover:bg-background/90 sm:w-auto"
                asChild
              >
                <Link href="/contact?type=demo">
                  <Calendar className="mr-2 h-4 w-4" />
                  無料デモを予約
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-background/30 bg-transparent text-background hover:bg-background/10 sm:w-auto"
                asChild
              >
                <Link href="/contact?type=document">
                  <FileText className="mr-2 h-4 w-4" />
                  資料をダウンロード
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-background/20 pt-8">
            <div className="flex items-center gap-2 text-sm text-background/70">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              健康経営優良法人2026 認定取得（認定番号：139686）
            </div>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              SECURITY ACTION 二つ星宣言（IPA）
            </div>
            <div className="flex items-center gap-2 text-sm text-background/70">
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
