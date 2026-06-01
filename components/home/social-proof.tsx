import { Award, ShieldCheck } from "lucide-react";

const industries = [
  "製造・小売",
  "情報通信",
  "サービス",
  "金融・保険",
  "医療・福祉",
  "建設",
];

export function SocialProof() {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-primary/10">
              <Award className="h-4 w-4 text-primary" />
              健康経営優良法人2026 認定取得
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-primary/10">
              <ShieldCheck className="h-4 w-4 text-primary" />
              SECURITY ACTION 二つ星宣言（IPA）
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-end">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              幅広い業種で導入が進んでいます
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 lg:justify-end">
              {industries.map((industry) => (
                <span key={industry} className="text-sm font-medium text-foreground/70">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
