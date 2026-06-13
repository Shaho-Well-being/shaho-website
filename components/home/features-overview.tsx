import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, Activity, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    id: "01",
    label: "ストレスチェック",
    tagline: "法定義務を、法令に沿って\n実施・報告まで支援。",
    description:
      "年1回の義務対応を確実にサポート。実施から集計、産業医との面接調整、労働基準監督署への報告用データ出力まで、ひとつの管理画面で完結します。",
    features: [
      "Web・紙・マークシート、形式を問わず実施可能",
      "集団分析レポートを自動生成（10名未満の非開示処理も対応）",
      "産業医面接フローをシステム内で一元管理",
      "改正労働安全衛生法への継続的な対応",
    ],
    panelBg: "bg-sky-50",
    panelText: "text-sky-900",
    panelMuted: "text-sky-700/80",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-700",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-800",
    icon: ClipboardCheck,
    href: "/solutions/stress-check",
  },
  {
    id: "02",
    label: "セルフヘルスケア × 認定支援",
    tagline: "従業員の日常行動が\n健康経営スコアに直結。",
    description:
      "歩数・活動・ストレスチェック実施率を日常のアプリ利用でそのまま記録。健康経営優良法人（大規模・中小規模）認定申請に必要な証跡を、特別な作業なしに積み上げます。",
    features: [
      "Apple Health / Google Fit 連携（端末内保存設計）",
      "ストレスチェック実施率・歩数目標達成率をダッシュボードで可視化",
      "健康経営優良法人の認定申請を伴走支援",
      "社宝自身も健康経営優良法人2026認定取得（認定番号139686）",
    ],
    panelBg: "bg-emerald-50",
    panelText: "text-emerald-900",
    panelMuted: "text-emerald-700/80",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-800",
    icon: Activity,
    href: "/solutions/health-management",
  },
  {
    id: "03",
    label: "ポイント制福利厚生",
    tagline: "役職・拠点・雇用形態によらず\n全員に同じ機会を。",
    description:
      "健康行動でポイントを獲得し、電子マネーやギフトに交換。人事が条件・上限を設計するため、役職や拠点による不公平感がありません。制度が実際に使われる状態をつくります。",
    features: [
      "電子マネー・ギフト券・外部サービスと交換可能",
      "付与条件・上限を人事が自由に設計",
      "利用率をダッシュボードでリアルタイム確認",
      "通知で従業員の利用を自然に後押し",
    ],
    panelBg: "bg-yellow-50",
    panelText: "text-yellow-900",
    panelMuted: "text-yellow-700/80",
    badgeBg: "bg-yellow-100",
    badgeText: "text-yellow-700",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-800",
    icon: Gift,
    href: "/solutions/engagement",
  },
];

export function FeaturesOverview() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fcfb_100%)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Three Pillars
          </div>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            「やらなければいけないこと」に、
            <br className="hidden sm:block" />
            <span className="text-primary">「使いたくなる体験」</span>を。
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            法定義務から健康経営認定、ポイント福利厚生まで。
            3つの柱が重なることで、社宝にしかできない価値が生まれます。
          </p>
        </div>

        {/* Pillar cards */}
        <div className="mt-16 space-y-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="overflow-hidden rounded-[36px] border border-border/40 bg-white shadow-[0_30px_90px_-40px_rgba(28,92,95,0.18)] transition-shadow duration-300 hover:shadow-[0_40px_100px_-40px_rgba(28,92,95,0.28)]"
            >
              <div className="grid lg:grid-cols-[300px_1fr]">
                {/* Left: colored identity panel */}
                <div className={`${pillar.panelBg} flex flex-col justify-between p-8 lg:p-10`}>
                  <div>
                    <span className={`inline-block rounded-full ${pillar.badgeBg} px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${pillar.badgeText}`}>
                      Pillar {pillar.id}
                    </span>
                    <div className={`mt-6 flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.iconBg}`}>
                      <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
                    </div>
                    <h3 className={`mt-5 text-xl font-black leading-tight ${pillar.panelText}`}>
                      {pillar.label}
                    </h3>
                  </div>
                  <p className={`mt-8 whitespace-pre-line text-sm leading-7 ${pillar.panelMuted}`}>
                    {pillar.tagline}
                  </p>
                </div>

                {/* Right: content */}
                <div className="p-8 lg:p-10">
                  <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                    {pillar.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {pillar.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-8 rounded-full border-border/70 hover:border-primary/40"
                    asChild
                  >
                    <Link href={pillar.href}>
                      詳しく見る
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
