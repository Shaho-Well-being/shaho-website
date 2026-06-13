import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  AlertCircle,
  Award,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "健康経営優良法人の認定サポート | 社宝",
  description:
    "健康経営優良法人認定に必要な全要件を社宝が一元サポート。ストレスチェック・健診管理・健康増進プログラムを一つのプラットフォームで実現し、認定取得を最短ルートで支援します。",
};

const benefits = [
  {
    icon: Users,
    title: "採用力の強化",
    description:
      "認定ロゴを採用ページや求人票に掲載することで、健康に配慮した企業としての魅力を発信。求職者の安心感を高め、優秀な人材の獲得に貢献します。",
  },
  {
    icon: TrendingUp,
    title: "生産性の向上",
    description:
      "従業員の健康状態が改善することで、プレゼンティーズム（健康問題による業務パフォーマンス低下）が解消。組織全体の生産性と業績が向上します。",
  },
  {
    icon: Shield,
    title: "リスク管理の強化",
    description:
      "過重労働・メンタルヘルス不調・感染症などのリスクを早期に把握し対策を講じることで、予防型の人事管理を実現します。安全配慮義務の履行にもつながります。",
  },
  {
    icon: Award,
    title: "ブランド価値の向上",
    description:
      "経済産業省・日本健康会議が認定する権威ある認証。取引先・金融機関・投資家への信頼性アピールにも活用でき、企業価値の向上に直結します。",
  },
];

type Coverage = "full" | "support" | "none";

interface ChecklistItem {
  title: string;
  description: string;
  coverage: Coverage;
  note: string;
}

interface ChecklistSection {
  category: string;
  items: ChecklistItem[];
}

const checklist: ChecklistSection[] = [
  {
    category: "大項目1：経営理念・方針",
    items: [
      {
        title: "健康経営の方針公表・宣言",
        description:
          "経営者自らが健康経営に取り組む旨の宣言を社内外に公表する",
        coverage: "support",
        note: "社宝の管理画面から健康宣言文テンプレートを活用し、社内ポータルへの掲載をサポートします。宣言内容の雛形提供から公表まで、担当者を伴走支援します。",
      },
    ],
  },
  {
    category: "大項目2：組織体制",
    items: [
      {
        title: "健康経営推進担当者の設置",
        description:
          "健康経営を推進する担当者（産業医・保健師または人事担当者）を配置する",
        coverage: "support",
        note: "社宝の管理者権限設定で担当者を明確化し、操作権限の付与・管理をスムーズに行えます。担当者が変わっても継続的に運用できる体制づくりをサポートします。",
      },
    ],
  },
  {
    category: "大項目3：制度・施策実行（必須項目）",
    items: [
      {
        title: "定期健診受診率100%の管理",
        description:
          "全従業員の定期健康診断を実施し、受診率100%を目指す取り組みを行う",
        coverage: "full",
        note: "健診受診状況を管理画面で一元管理。未受診者への自動プッシュ通知リマインドで受診率を向上させます。健診機関との連携・結果のデジタル取り込みにも対応。",
      },
      {
        title: "ストレスチェックの実施",
        description:
          "年1回のストレスチェックを実施し、集団分析・高ストレス者フォローを行う（50名未満企業にも対応）",
        coverage: "full",
        note: "50人未満の事業場にも対応したストレスチェック機能を搭載。回答・集計・集団分析レポートの作成から労基署提出書類の自動出力まで、すべてが社宝だけで完結します。",
      },
      {
        title: "健診・SCデータの活用（課題把握）",
        description:
          "健診・ストレスチェック結果を分析し、職場の健康課題を把握・改善策を立案する",
        coverage: "full",
        note: "部署別・属性別の集計レポートを自動生成。ダッシュボードで健康リスクを可視化し、どの部署・どの層に対して優先的に施策を打つべきかを明確にします。",
      },
      {
        title: "具体的な目標・計画の設定",
        description:
          "健康増進に向けた数値目標（受診率・運動実施率等）を設定し、年間計画を策定する",
        coverage: "support",
        note: "ダッシュボードで目標値と実績値を並べて表示し、進捗を可視化。PDCAサイクルの「P（計画）→ D（実施）→ C（確認）→ A（改善）」を継続しやすい環境を整えます。",
      },
    ],
  },
  {
    category: "大項目3：制度・施策実行（選択項目）",
    items: [
      {
        title: "運動習慣の促進",
        description:
          "従業員が運動を継続できる環境・機会・インセンティブを提供する",
        coverage: "full",
        note: "従業員アプリで歩数・ワークアウトを記録し、目標達成でポイントを付与。ランキング機能やチャレンジ企画でゲーミフィケーションし、継続率を高めます。",
      },
      {
        title: "食生活の改善",
        description:
          "栄養バランスの改善に向けた情報提供や食環境整備を行う",
        coverage: "full",
        note: "アプリ内の食事記録機能と専門家監修の健康コンテンツ（栄養・食習慣に関する記事）で、日常的な食生活改善をサポートします。",
      },
      {
        title: "禁煙対策",
        description:
          "望まない受動喫煙を防止するための職場環境整備・禁煙支援を実施する",
        coverage: "none",
        note: "施設整備・就業規則の改定が必要です。社宝では禁煙チャレンジ記録の提供と禁煙啓発コンテンツの配信で間接的にサポートします。",
      },
      {
        title: "メンタルヘルス対策",
        description:
          "相談窓口の設置、セルフケア・ラインケアの推進、早期発見・介入体制の整備",
        coverage: "full",
        note: "24時間対応のAIチャットによるメンタルケア機能、ストレスチェック結果に基づく個別フォローで、従業員が相談しやすい環境を常時構築します。",
      },
      {
        title: "感染症予防の推進",
        description:
          "インフルエンザ等の予防接種促進、感染予防に関する情報提供を行う",
        coverage: "support",
        note: "プッシュ通知・アプリコンテンツで予防接種啓発や感染症対策情報を従業員に一斉配信。季節ごとのタイミングに合わせた配信スケジュール管理ができます。",
      },
      {
        title: "過重労働・長時間労働対策",
        description:
          "時間外労働の上限設定、有給休暇取得促進など長時間労働を防止する施策を実施する",
        coverage: "none",
        note: "勤怠管理システムとの連携が必要です。ただし、休日・休暇促進の通知配信や健康コンテンツの発信で、従業員の意識向上をサポートします。",
      },
      {
        title: "女性の健康保護",
        description:
          "女性特有の健康課題（更年期・月経等）に関する情報提供・検診補助・環境整備を行う",
        coverage: "support",
        note: "女性向け健康コンテンツの配信・婦人科系健診受診の管理・勧奨通知で対応。検診費用補助は社内制度として別途設定が必要ですが、実施状況の管理は社宝で行えます。",
      },
      {
        title: "治療と仕事の両立支援",
        description:
          "疾病を抱える従業員が働き続けられる社内制度（休職・復職ルール等）を整備する",
        coverage: "none",
        note: "社内制度・就業規則の整備が必要です。社宝では健康状態の継続的な記録・面談記録の管理機能で情報の一元化と引き継ぎをサポートします。",
      },
    ],
  },
  {
    category: "大項目4：評価・改善",
    items: [
      {
        title: "健康経営の取り組み評価・改善",
        description:
          "実施した施策の効果を測定し、PDCAサイクルを回して継続改善する仕組みを持つ",
        coverage: "full",
        note: "年次・月次の健康レポートで施策効果を定量的に測定。受診率・ストレスレベル・ポイント利用率などKPIを自動集計し、申請書類の数値データとしてそのまま活用できます。",
      },
    ],
  },
  {
    category: "大項目5：法令遵守・リスクマネジメント",
    items: [
      {
        title: "定期健診の確実な実施",
        description:
          "労働安全衛生法に基づく定期健康診断を全員に実施する（事業主の義務）",
        coverage: "full",
        note: "健診機関との連携・受診予約管理・結果のデジタル取り込みにより、法定義務の確実な履行を支援します。健診データは5年間クラウドで安全に保管されます。",
      },
      {
        title: "労働安全衛生法令の遵守",
        description:
          "ストレスチェック義務（50名以上）、安全配慮義務等の法令を遵守する体制を整備する",
        coverage: "full",
        note: "法改正に対応した最新のストレスチェック実施・集団分析・労基署提出書類を提供。コンプライアンス対応を自動化し、担当者の法的リスクを低減します。",
      },
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "健康経営宣言・担当者設置",
    description:
      "代表者が健康経営宣言を公表し、推進担当者を設置します。社宝の管理者機能で推進体制をすぐに整備できます。",
  },
  {
    step: "02",
    title: "社宝導入・基盤構築",
    description:
      "社宝を導入し、健診管理・ストレスチェック・健康増進プログラムをセットアップ。従業員がアプリを利用開始します。",
  },
  {
    step: "03",
    title: "施策実行・データ収集",
    description:
      "各施策を実行しながら社宝でデータを蓄積。ダッシュボードで受診率・ストレス状況・健康行動を継続的に可視化します。",
  },
  {
    step: "04",
    title: "申請・認定取得",
    description:
      "社宝のレポート機能で申請書類に必要なデータを整理。経済産業省への申請をスムーズに行えます。",
  },
];

const coverageLabels: Record<Coverage, { label: string; className: string }> = {
  full: { label: "社宝で対応", className: "bg-green-500/10 text-green-700" },
  support: { label: "社宝でサポート", className: "bg-yellow-500/10 text-yellow-700" },
  none: { label: "要別途対応", className: "bg-muted text-muted-foreground" },
};

const coverageIcons: Record<Coverage, React.ReactNode> = {
  full: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  support: <Circle className="h-5 w-5 text-yellow-500" />,
  none: <AlertCircle className="h-5 w-5 text-muted-foreground" />,
};

export default function HealthManagementPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            健康経営優良法人 認定サポート
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            健康経営優良法人の認定を、
            <br className="hidden sm:block" />
            社宝で実現する
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            経済産業省が認定する「健康経営優良法人」。認定に必要な要件のほとんどを、社宝一つでカバーできます。
            煩雑な書類管理や複数システムの運用から解放され、本質的な健康経営に集中できる環境を提供します。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact?type=document">認定サポート資料を請求</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company achievement banner */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <Award className="h-7 w-7 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-accent">運営会社・実績</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                社宝の開発元であるモバイルアプリシステムズ株式会社が、健康経営優良法人2026（中小規模法人部門）を取得しました。
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                認定番号：139686　／　有効期限：2027年3月31日まで
                <br />
                自社での認定取得プロセスで得たリアルな知見が、社宝のサービス設計に直接反映されています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            健康経営優良法人に認定されるメリット
          </h2>
          <p className="mt-4 text-muted-foreground">
            認定取得は目標ではなく、企業と従業員双方にとっての健康経営実践の証明です。
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <benefit.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            認定要件と社宝の対応状況
          </h2>
          <p className="mt-4 text-muted-foreground">
            健康経営優良法人（中小規模法人部門）の全評価項目について、社宝での対応可否を示します。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              社宝で完全対応
            </span>
            <span className="flex items-center gap-2">
              <Circle className="h-5 w-5 text-yellow-500" />
              社宝でサポート（会社の取り組みも必要）
            </span>
            <span className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-muted-foreground" />
              要別途対応（社宝で補完サポート）
            </span>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {checklist.map((section) => (
            <div key={section.category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {section.category}
              </h3>
              <div className="divide-y divide-border rounded-xl border border-border bg-card">
                {section.items.map((item) => (
                  <div key={item.title} className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 shrink-0">{coverageIcons[item.coverage]}</div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${coverageLabels[item.coverage].className}`}
                          >
                            {coverageLabels[item.coverage].label}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                        <p className="mt-2 rounded-lg bg-muted/50 px-3 py-2 text-sm text-foreground">
                          💡 {item.note}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            社宝で認定取得するまでの流れ
          </h2>
          <p className="mt-4 text-muted-foreground">
            ステップに沿って進めることで、最短1年間の取り組みで認定申請が可能です。
          </p>
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

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-background sm:text-3xl">
            健康経営優良法人の認定取得を
            <br className="hidden sm:block" />
            一緒に進めましょう
          </h2>
          <p className="mt-4 text-background/80">
            社宝の導入から認定申請まで、専任のカスタマーサクセスがサポートします。
            導入のご相談はお気軽にお問い合わせください。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link href="/contact">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-background hover:bg-background/10 hover:text-background"
              asChild
            >
              <Link href="/contact?type=document">資料をダウンロード</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
