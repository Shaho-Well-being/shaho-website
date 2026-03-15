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
    name: "ライト",
    description: "ポイント制福利厚生を手軽に始めたい企業向け",
    price: "500",
    unit: "円/人/月のポイント付与",
    minUsers: "人数制限なし",
    features: [
      "電子マネー交換（PayPay・Amazon・QUOカードPay）",
      "健康行動ポイント付与",
      "従業員向けiOS/Androidアプリ",
      "管理者ダッシュボード",
      "メールサポート",
    ],
    cta: "お問い合わせ",
    highlighted: false,
  },
  {
    name: "スタンダード",
    description: "健康管理もまとめて対応したい成長企業向け",
    price: "1,000",
    unit: "円/人/月のポイント付与",
    minUsers: "人数制限なし",
    features: [
      "ライトの全機能",
      "57設問ストレスチェック実施・集団分析",
      "健診受診管理・OCR取込",
      "Apple Health / Google Fit 連携",
      "AIメンタルケアチャット",
      "法定報告書自動生成",
      "優先サポート",
    ],
    cta: "無料デモを予約",
    highlighted: true,
  },
  {
    name: "プレミアム",
    description: "健康経営優良法人の認定取得・大規模展開向け",
    price: "5,000",
    unit: "円/人/月のポイント付与",
    minUsers: "人数制限なし",
    features: [
      "スタンダードの全機能",
      "健康経営優良法人 認定サポート",
      "専任カスタマーサクセスマネージャー",
      "カスタムポイント付与ルール設定",
      "複数拠点・グループ企業対応",
      "API連携・データエクスポート",
      "導入支援・社員説明会サポート",
    ],
    cta: "お問い合わせ",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "導入までどのくらいかかりますか？",
    answer: "最短1週間での全社展開が可能です。従業員リストのCSVアップロードと基本設定を完了後、アプリのダウンロード案内を一斉送付するだけで利用開始できます。",
  },
  {
    question: "ポイントと利用料金の関係は？",
    answer: "各プランに記載の「円/人/月」は従業員に付与するポイント相当額です。プラットフォームの利用料（システム費用）は別途発生します。詳細はお見積りにてご案内します。",
  },
  {
    question: "従業員データのセキュリティは？",
    answer: "AWSインフラ上で構築し、通信・保存データともに暗号化しています。健診データは端末内保存が基本で、クラウドには従業員の同意なくアップロードされません。SECURITY ACTION二つ星宣言（IPA）取得済みです。",
  },
  {
    question: "ストレスチェックのみ利用できますか？",
    answer: "はい、ストレスチェック単体のご利用も承っています。将来的に福利厚生・健診管理機能を追加することも、プランを変更するだけで対応できます。",
  },
  {
    question: "50名未満の事業所でも使えますか？",
    answer: "はい、人数制限はありません。ストレスチェックが法的義務となる50名以上の事業所だけでなく、それ以下の事業所でも健康経営の取り組みとして導入いただいています。",
  },
  {
    question: "IT導入補助金は使えますか？",
    answer: "IT導入補助金のITツール登録を申請中です。登録完了後は補助金を活用した導入が可能になります。詳細は最新情報をお問い合わせください。中小企業診断士によるサポートも対応可能です。",
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
            プランはポイント付与額で選ぶシンプル設計。人数制限なし・最短1週間で導入できます。
            まずは無料デモで、社宝の実際の機能をご体験ください。
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">💡 IT導入補助金の対象ツール登録申請中。</span>
            補助金活用のご相談はお問い合わせください。
          </div>
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
