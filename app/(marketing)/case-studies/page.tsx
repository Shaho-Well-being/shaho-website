import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EndorsementCard } from "@/components/endorsements/endorsement-card";
import { endorsements } from "@/lib/data/endorsements";

export const metadata: Metadata = {
  title: "専門家からのご推薦 | 社宝",
  description:
    "中小企業診断士、公認会計士・税理士、海外進出支援やWebマーケティングのプロフェッショナルなど、各分野の専門家から社宝に寄せられた推薦の声をご紹介します。",
};

export default function EndorsementsPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Expert Endorsements
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            専門家からの
            <span className="text-primary">ご推薦</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            中小企業診断士、公認会計士・税理士、海外進出支援のプロフェッショナル、
            Webマーケティングコンサルタントなど、多様な視点からの推薦をいただいております。
          </p>
        </div>
      </section>

      {/* Endorsements Grid */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {endorsements.map((endorsement) => (
            <EndorsementCard
              key={endorsement.id}
              endorsement={endorsement}
              showCredentials
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] bg-primary px-8 py-14 text-center shadow-[0_25px_80px_-45px_rgba(28,92,95,0.5)] sm:px-16">
          <h2 className="text-balance text-2xl font-black tracking-tight text-primary-foreground sm:text-3xl">
            専門家も認める仕組みを、貴社でも。
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-7 text-primary-foreground/85 sm:text-base">
            福利厚生・健康経営・法定対応を一つに。まずは無料デモで、社宝の体験価値をお確かめください。
          </p>
          <Button
            variant="secondary"
            className="mt-8 rounded-full bg-white text-foreground hover:bg-white/90"
            asChild
          >
            <Link href="/contact?type=demo">
              無料デモを予約する
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
