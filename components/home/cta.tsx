import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import {
  MarketingCtaPanel,
  marketingCtaButtonPrimary,
  marketingCtaButtonSecondary,
} from "@/components/marketing/cta-panel";

const trustBadges = [
  "健康経営優良法人2026 認定取得（認定番号：139686）",
  "SECURITY ACTION 二つ星宣言（IPA）",
  "AWS インフラ × エンドツーエンド暗号化",
];

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MarketingCtaPanel
          title={
            <>
              使われない福利厚生を、
              <br />
              使いたくなる制度へ。
            </>
          }
          description="福利厚生・健康経営・ストレスチェックを一つの体験に。日常の健康行動が活動記録として蓄積される仕組みを、企業さま向けにご案内します。"
          footer={
            <div className="flex flex-wrap items-center justify-center gap-3">
              {trustBadges.map((label) => (
                <span
                  key={label}
                  className="inline-flex max-w-full items-center rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-center text-sm font-medium text-muted-foreground shadow-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          }
        >
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button size="lg" className={marketingCtaButtonPrimary} asChild>
              <Link href="/contact">
                お問い合わせ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={marketingCtaButtonSecondary}
              asChild
            >
              <Link href="/contact?type=document">
                <FileText className="h-4 w-4" />
                資料をダウンロード
              </Link>
            </Button>
          </div>
        </MarketingCtaPanel>
      </div>
    </section>
  );
}
