import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EndorsementCard } from "@/components/endorsements/endorsement-card";
import { endorsements } from "@/lib/data/endorsements";

export function ExpertEndorsements() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Expert Endorsements
            </div>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              専門家からの
              <span className="text-primary">ご推薦</span>
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              中小企業診断士、公認会計士・税理士、海外進出支援のプロフェッショナル、Webマーケティングコンサルタントなど、多様な視点からの推薦をいただいております。
            </p>
          </div>

          <Button variant="outline" className="rounded-full bg-white" asChild>
            <Link href="/case-studies">
              推薦をすべて見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {endorsements.slice(0, 4).map((endorsement) => (
            <EndorsementCard key={endorsement.id} endorsement={endorsement} />
          ))}
        </div>
      </div>
    </section>
  );
}
