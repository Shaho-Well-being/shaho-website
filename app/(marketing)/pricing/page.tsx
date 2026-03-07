import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "料金プラン | 社宝",
  description: "社宝の料金プランをご紹介。企業規模やニーズに合わせた柔軟なプランをご用意しています。",
};

const plans = [
  {
    name: "スターター",
    description: "小規模チームに最適",
    price: "300",
    unit: "円/人/月",
    minUsers: "50名〜",
    features: [
      "福利厚生ポイント機能",
      "基本的な健康管理",
      "メールサポート",
      "基本レポート",
    ],
    cta: "お問い合わせ",
    highlighted: false,
  },
  {
    name: "プロフェッショナル",
    description: "成長企業におすすめ",
    price: "500",
    unit: "円/人/月",
    minUsers: "100名〜",
    features: [
      "スターターの全機能",
      "健診・ストレスチェック管理",
      "高度な分析・レポート",
      "API連携",
      "優先サポート",
      "専任カスタマーサクセス",
    ],
    cta: "無料デモを予約",
    highlighted: true,
  },
  {
    name: "エンタープライズ",
    description: "大規模組織向け",
    price: "要相談",
    unit: "",
    minUsers: "500名〜",
    features: [
      "プロフェッショナルの全機能",
      "カスタマイズ対応",
      "SLA保証",
      "オンプレミス対応可",
      "24/7サポート",
      "導入支援サービス",
    ],
    cta: "お問い合わせ",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "最低契約期間はありますか？",
    answer: "基本的に1年間の契約となります。ただし、ご契約内容によっては月額契約も可能です。詳しくはお問い合わせください。",
  },
  {
    question: "途中でプランを変更できますか？",
    answer: "はい、可能です。利用状況や企業規模の変化に合わせて、いつでもプランをアップグレードいただけます。",
  },
  {
    question: "導入にかかる費用は？",
    answer: "プランによって異なりますが、初期費用として導入支援費用が発生する場合があります。詳細はお見積りにてご案内いたします。",
  },
  {
    question: "無料トライアルはありますか？",
    answer: "はい、すべてのプランで14日間の無料トライアルをご利用いただけます。本番環境と同等の機能をお試しいただけます。",
  },
  {
    question: "支払い方法は？",
    answer: "請求書払い（銀行振込）またはクレジットカード払いに対応しています。年払いの場合は割引が適用されます。",
  },
];

export default function PricingPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            シンプルで分かりやすい料金体系
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            企業規模やニーズに合わせた柔軟なプランをご用意。
            まずは無料デモで、社宝の価値をご体験ください。
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.highlighted
                  ? "border-foreground shadow-lg ring-1 ring-foreground"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-4 py-1 text-sm font-medium text-background">
                  人気
                </div>
              )}
              <CardHeader className="pb-0">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.unit && (
                    <span className="text-muted-foreground">{plan.unit}</span>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">{plan.minUsers}</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col pt-6">
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.highlighted ? "/contact?type=demo" : "/contact"}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">すべてのプランに含まれる機能</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "SSLによる通信暗号化",
            "データバックアップ",
            "稼働率99.9%保証",
            "日本語サポート",
            "従業員向けアプリ",
            "管理者ダッシュボード",
            "マニュアル・ヘルプセンター",
            "定期的なアップデート",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <Check className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-24 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HelpCircle className="mx-auto h-10 w-10 text-muted-foreground" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">よくある質問</h2>
        </div>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-background sm:text-3xl">
            まずは無料デモをお試しください
          </h2>
          <p className="mt-4 text-background/80">
            14日間の無料トライアルで、社宝のすべての機能をご体験いただけます。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="w-full bg-background text-foreground hover:bg-background/90 sm:w-auto"
              asChild
            >
              <Link href="/contact?type=demo">
                無料デモを予約
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-background/30 bg-transparent text-background hover:bg-background/10 sm:w-auto"
              asChild
            >
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
