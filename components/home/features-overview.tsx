import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Gift, Heart, ClipboardCheck, BarChart3, Smartphone } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "電子マネー福利厚生",
    description: "ポイントをPayPay・Amazonギフト券・QUOカードPayなどの電子マネーに即交換。カタログ不要で全員が使える制度設計。",
    href: "/features",
    highlights: ["PayPay・Amazon即交換", "正社員・パート・外国籍対応", "在庫ゼロ・管理工数ゼロ"],
  },
  {
    icon: Heart,
    title: "スマートフォン健康連携",
    description: "iPhoneのヘルスケアアプリ・Google Fitと連携。入力不要で歩数・睡眠・体重データが自動集積されます。",
    href: "/features",
    highlights: ["Apple Health連携", "Google Fit対応", "パッシブデータ収集"],
  },
  {
    icon: ClipboardCheck,
    title: "健診・ストレスチェック",
    description: "厚労省推奨の57設問フォーマット完全準拠。健診結果はOCRで自動取込・端末内保存でセキュアに管理。",
    href: "/features",
    highlights: ["57設問完全対応", "OCR健診結果取込", "労基署提出書類自動生成"],
  },
  {
    icon: BarChart3,
    title: "人事・管理者向け（Web）",
    description: "受診率・ストレス状況・ポイント利用状況をひとつの画面で把握。法定帳票もワンクリックで出力。",
    href: "/features/admin-web",
    highlights: ["健康経営ダッシュボード", "集団分析レポート", "部署別リスク可視化"],
  },
  {
    icon: Smartphone,
    title: "従業員向け（アプリ）",
    description: "健康記録・ポイント交換・AIメンタルケアを1アプリに集約。毎日開きたくなるシンプルなUX。",
    href: "/features/employee-app",
    highlights: ["AIチャット24時間対応", "電子マネー即時交換", "iOSおよびAndroid対応"],
  },
];

export function FeaturesOverview() {
  return (
    <section className="border-t border-border bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            すべてが、ひとつに
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            福利厚生・健診・ストレスチェック・AIメンタルケアがひとつのアプリに。
            人事の管理工数を削減しながら、従業員の使いやすさを両立します。
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href} className="group">
              <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <feature.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {feature.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
