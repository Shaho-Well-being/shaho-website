import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExpertAvatar } from "@/components/endorsements/expert-avatar";
import { endorsements } from "@/lib/data/endorsements";

export function ExpertEndorsements() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ヘッダー */}
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Expert Endorsements
          </div>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            専門家からの<span className="text-primary">ご推薦</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            中小企業診断士・公認会計士・マーケティングコンサルタントなど各分野の専門家から推薦をいただいています。
          </p>
        </div>

        {/* コンパクト一覧 */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {endorsements.map((e) => (
            <div
              key={e.id}
              className="grid grid-rows-[auto_auto_1fr] items-start gap-0 rounded-2xl border border-border/40 bg-white px-3 py-5 text-center shadow-sm"
            >
              {/* Row 1: アバター（高さ固定） */}
              <div className="flex justify-center">
                <ExpertAvatar
                  src={e.photo}
                  name={e.name}
                  objectPosition={e.photoPosition}
                  sizeClassName="h-14 w-14"
                />
              </div>

              {/* Row 2: 名前・肩書き・所属（最低高さ固定で揃える） */}
              <div className="mt-3 min-h-[64px]">
                <p className="text-xs font-bold leading-snug text-foreground">{e.name}</p>
                <p className="mt-0.5 text-[11px] text-primary">{e.title}</p>
                <p className="mt-0.5 min-h-[14px] text-[10px] text-muted-foreground">
                  {e.organization ?? ""}
                </p>
              </div>

              {/* Row 3: 見出し（上揃え・2行クランプ） */}
              <p className="mt-2 line-clamp-2 text-[11px] leading-4 text-muted-foreground">
                {e.heading}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <Button variant="outline" className="rounded-full bg-white" asChild>
            <Link href="/case-studies">
              推薦コメントをすべて読む
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
