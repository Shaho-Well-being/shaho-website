import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  BarChart3,
  Users,
  Clock,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "ストレスチェック・法令対応 | 社宝",
  description:
    "労働安全衛生法に基づく57設問のストレスチェックを社宝でワンストップ実施。50名未満も対応。集団分析・労基署提出書類の自動生成まで完結します。",
};

const risks = [
  {
    icon: AlertTriangle,
    title: "未実施は法令違反・是正勧告の対象",
    description:
      "50名以上の事業所でのストレスチェック未実施は、労働安全衛生法違反として労働基準監督署の是正勧告を受けるリスクがあります。",
  },
  {
    icon: FileText,
    title: "集団分析の提出義務（努力義務）",
    description:
      "実施結果を集計・分析し、職場環境の改善に活かすことが求められます。適切な記録がなければ、法定要件を満たしたとみなされない場合も。",
  },
  {
    icon: Users,
    title: "高ストレス者へのフォロー義務",
    description:
      "高ストレスと判定された従業員には、医師による面接指導の機会提供が義務づけられています。未対応の場合、安全配慮義務違反になりえます。",
  },
  {
    icon: Clock,
    title: "毎年の実施サイクルが重い",
    description:
      "年1回の実施が義務ですが、設問設定・配信・集計・分析・提出書類作成まで、人事担当者の工数が大幅にかかるのが実態です。",
  },
];

const features = [
  {
    title: "厚労省推奨 57設問フォーマット完全準拠",
    description:
      "国が定める職業性ストレス簡易調査票（57設問）に完全対応。独自設問の追加も可能で、業種・職種に合わせたカスタマイズができます。",
  },
  {
    title: "Web・アプリ両対応の回答収集",
    description:
      "パソコン・スマートフォン・タブレットどこからでも回答可能。現場職・在宅勤務者・非正規雇用者を問わず、全員をカバーできます。",
  },
  {
    title: "リアルタイム回答率モニタリング",
    description:
      "管理画面で回答状況を部署・所属別にリアルタイム確認。未回答者へのプッシュ通知リマインドを一括送信し、高い回答率を維持します。",
  },
  {
    title: "集団分析レポートの自動生成",
    description:
      "部署別・職種別・年代別のストレス傾向を自動集計。高ストレス割合・仕事のコントロール・職場支援度などの分析グラフをPDFで出力できます。",
  },
  {
    title: "労働基準監督署提出書類を自動作成",
    description:
      "法定様式に従った報告書類を自動生成。電子申請にも対応しており、担当者の書類作成工数をほぼゼロにします。",
  },
  {
    title: "高ストレス者フォローの仕組み化",
    description:
      "高ストレス判定者へのアラート通知・面接指導申し出フォームを自動連携。対応状況を記録し、安全配慮義務の履行を証跡として残せます。",
  },
];

const steps = [
  {
    step: "01",
    title: "設問・配信設定",
    description: "57設問（または独自設問）を設定し、対象者リストをCSVまたは管理画面から登録。配信日時をスケジュール設定するだけで完了です。",
  },
  {
    step: "02",
    title: "従業員が回答",
    description: "従業員はスマホアプリまたはWebブラウザから回答。匿名性が守られているため、正直に回答しやすい設計です。",
  },
  {
    step: "03",
    title: "集計・分析・個別通知",
    description: "回答が集まり次第、自動で集計・分析。高ストレス者への通知と面接指導案内を自動送付します。",
  },
  {
    step: "04",
    title: "書類提出・記録保管",
    description: "労基署提出用の集団分析結果と報告書を自動生成。5年間の記録保管義務にもクラウド上で対応します。",
  },
];

const faqs = [
  {
    question: "50名未満の事業所でも利用できますか？",
    answer:
      "はい、対応しています。50名未満の事業所にはストレスチェックの義務はありませんが、実施することで健康経営優良法人の認定要件を満たせます。社宝は規模を問わず利用可能です。",
  },
  {
    question: "既存のストレスチェックシステムからの乗り換えはできますか？",
    answer:
      "可能です。過去のデータはCSVでインポートでき、経年比較分析にも対応しています。乗り換え時の設定サポートも無料で提供します。",
  },
  {
    question: "個人の結果が会社に漏れることはありませんか？",
    answer:
      "個人の回答結果は、本人の同意なく企業が閲覧することは一切できません。集団分析は10名以上の集団単位でのみ提供され、個人が特定できない形式に限定されます。",
  },
  {
    question: "集団分析の結果は労基署に提出しなければなりませんか？",
    answer:
      "集団分析結果の労基署提出は努力義務（義務ではない）ですが、提出することで健康経営優良法人の評価ポイントになります。社宝では提出用書類を自動生成するため、対応コストはほぼゼロです。",
  },
  {
    question: "ストレスチェックのみ社宝を使うことはできますか？",
    answer:
      "可能です。ストレスチェック単体でのご契約も承っています。将来的に健診管理・福利厚生機能を追加することも柔軟に対応できます。",
  },
];

export default function StressCheckPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            ストレスチェック・法令対応
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            57設問・法令完全対応の
            <br className="hidden sm:block" />
            ストレスチェックを、社宝だけで。
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            設問設定から回答収集・集団分析・労基署提出書類まで、法令対応のすべてがワンプラットフォームで完結。
            50名未満の事業所にも対応し、年1回の義務を最小工数でクリアできます。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/contact?type=demo">
                無料デモを予約する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact?type=document">資料をダウンロード</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Risk section */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            「なんとなく実施している」では、法令リスクが残ります
          </h2>
          <p className="mt-4 text-muted-foreground">
            ストレスチェック制度は実施するだけでなく、正しい手順と記録が求められます。
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {risks.map((risk) => (
            <Card key={risk.title} className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <risk.icon className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{risk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {risk.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            社宝のストレスチェック機能
          </h2>
          <p className="mt-4 text-muted-foreground">
            法令要件をすべてカバーしながら、担当者の負担を最小化します。
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data visualization callout */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                「点」ではなく「傾向」で<br />職場のリスクを把握する
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                年1回のスナップショットでは見えないものがあります。社宝は複数年のストレスチェック結果を
                時系列で比較し、部署・チーム・個人レベルでのストレストレンドを可視化。
                「なぜあの部署の離職率が高いのか」が、データで見えるようになります。
              </p>
              <div className="mt-6 flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  経年比較グラフ・部署別ヒートマップ・個人推移グラフ を自動生成
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "設問フォーマット", value: "57設問", sub: "厚労省推奨準拠" },
                { label: "報告書類", value: "自動生成", sub: "労基署提出対応" },
                { label: "対象規模", value: "制限なし", sub: "50名未満も対応" },
                { label: "データ保管", value: "5年間", sub: "クラウド安全保管" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-background p-4 text-center"
                >
                  <div className="text-2xl font-bold text-foreground">{item.value}</div>
                  <div className="mt-1 text-xs text-accent">{item.sub}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            実施から報告まで、4ステップで完了
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="rounded-xl border border-border bg-card p-6">
              <span className="text-4xl font-bold text-muted-foreground/30">{step.step}</span>
              <h3 className="mt-3 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-24 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">よくある質問</h2>
        </div>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-background sm:text-3xl">
            今年のストレスチェック、社宝でまるごと対応しませんか
          </h2>
          <p className="mt-4 text-background/80">
            設問設定・配信・集計・書類提出まで、担当者1名でも運用できる仕組みを提供します。
            まずは無料デモで、実際の管理画面をご覧ください。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link href="/contact?type=demo">
                無料デモを予約する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-background hover:bg-background/10 hover:text-background"
              asChild
            >
              <Link href="/solutions/health-management">健康経営優良法人との関係を見る</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
