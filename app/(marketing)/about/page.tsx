import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Heart, Users, Sparkles, Award, Shield, BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "会社概要 | 社宝",
  description: "社宝を開発・運営するモバイルアプリシステムズ株式会社の会社概要。ミッション・ビジョン・代表者プロフィールをご紹介します。",
};

const values = [
  {
    icon: Target,
    title: "ミッション",
    description: "働く人の健康と幸福を支援し、企業と従業員が共に成長できる社会を実現する。",
  },
  {
    icon: Heart,
    title: "ビジョン",
    description: "すべての企業で、従業員の健康と幸福が当たり前に大切にされる世界を創る。",
  },
  {
    icon: Users,
    title: "バリュー",
    description: "ユーザーファースト、誠実さ、継続的な改善を大切にしています。",
  },
  {
    icon: Sparkles,
    title: "カルチャー",
    description: "多様性を尊重し、オープンなコミュニケーションを大切にするチームです。",
  },
];

const companyInfo = [
  { label: "会社名", value: "モバイルアプリシステムズ株式会社" },
  { label: "英語表記", value: "Mobile App Systems Inc." },
  { label: "設立", value: "2022年8月" },
  { label: "代表取締役", value: "小林 慎吾" },
  { label: "取引銀行", value: "三井住友銀行" },
  { label: "所在地", value: "〒104-0061 東京都中央区銀座1丁目12 N&E BLD. 6F" },
  {
    label: "事業内容",
    value:
      "モバイルアプリ開発（iOS/Android）、Webシステム・SaaS開発、ITコンサルティング、SNS運用管理サービス、CBTシステム開発、健康・ウェルネスサービス（社宝）",
  },
  { label: "営業時間", value: "平日 9:00〜17:00 ／ 土日 11:00〜15:00" },
  {
    label: "コーポレートサイト",
    value: "mobile-app-systems.co.jp",
    href: "https://mobile-app-systems.co.jp/",
  },
];

const certifications = [
  {
    icon: Award,
    title: "健康経営優良法人2026",
    description:
      "経済産業省・日本健康会議が認定する「健康経営優良法人2026（中小規模法人部門）」を取得。認定番号：139686。有効期限：2027年3月31日まで。",
    badge: "中小規模法人部門",
    year: "2026年認定",
  },
  {
    icon: Shield,
    title: "SECURITY ACTION 二つ星",
    description:
      "独立行政法人情報処理推進機構（IPA）のSECURITY ACTION二つ星を宣言。情報セキュリティ基本方針の策定・公開を完了し、PDCAによる継続改善を推進。",
    badge: "IPA認定",
    year: "2025年取得",
  },
  {
    icon: BadgeCheck,
    title: "東京都セキュリティ支援",
    description:
      "東京都の中小企業向けセキュリティ対策支援を活用し、専門家による情報セキュリティ体制の強化を実施。安全なサービス提供基盤を構築しています。",
    badge: "東京都",
    year: "2024年12月",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            会社概要
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            社宝は、モバイルアプリシステムズ株式会社が開発・運営する福利厚生・健康経営プラットフォームです。
            「働く人が毎日使いたくなるアプリ」を目指し、従業員の健康と幸福を、企業の成長につなげます。
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title}>
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <value.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              社宝が生まれた背景
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                モバイルアプリシステムズは2022年8月に創業。iOS・Android・Flutterをはじめとするモバイル技術と、フィンテック・教育・労働分野の実務知見を融合させながら、企業の課題解決に取り組んできました。
              </p>
              <p>
                その中で、企業の健康経営推進において「バラバラなツール・複雑な管理・使われない福利厚生」という共通課題が浮き彫りになりました。
                ストレスチェックは別のシステム、健診管理はExcel、福利厚生は紙の申請——従業員にとっても人事担当者にとっても負担の大きい状況でした。
              </p>
              <p>
                この課題をまるごと解決するため、健診・ストレスチェック管理、福利厚生ポイント、メンタルヘルスケアを一つのアプリに集約した「社宝」を開発しました。
              </p>
              <p>
                私たち自身が健康経営優良法人2026の認定を取得した経験を生かし、認定取得を目指す企業の伴走パートナーとして、実践的なサポートを提供しています。
              </p>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted">
            <img
              src="/モバシス-頑張ってます！.png"
              alt="モバイルアプリシステムズのチーム"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Representative */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">代表者プロフィール</h2>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-muted">
                  <img
                    src="/images/team/ceo-kobayashi.jpg"
                    alt="小林 慎吾"
                    className="h-full w-full object-cover object-[center_22%]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">小林 慎吾</h3>
                  <p className="text-sm text-accent">代表取締役 CEO ／ データサイエンティスト</p>
                  <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      データサイエンティストとして多様な事業開発経験を持ち、東京大学大学院情報理工学系研究科での研究（2026年4月修了予定）と並行して経営を推進。
                    </p>
                    <p>
                      iOS（Swift）・Android（Kotlin）・Flutterなどのモバイル技術に精通するほか、フィンテック・教育・労働法の知識を融合した事業設計を得意とする。
                    </p>
                    <p>
                      AWS Solutions Architect 取得（2020年）、IPA 応用情報技術者 取得（2014年）。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">認定・取得実績</h2>
          <p className="mt-4 text-muted-foreground">
            自社での取り組みを通じて得た知見を、社宝のサービスに反映しています。
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                    <cert.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {cert.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{cert.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{cert.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Info */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">会社情報</h2>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="divide-y divide-border rounded-xl border border-border bg-card">
            {companyInfo.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 p-4 sm:flex-row sm:gap-8">
                <span className="w-36 shrink-0 text-sm font-medium text-muted-foreground">
                  {item.label}
                </span>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-foreground">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto mt-24 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-background sm:text-3xl">
            お気軽にお問い合わせください
          </h2>
          <p className="mt-4 text-background/80">
            社宝の導入についてのご相談、デモのご依頼など、まずはお気軽にご連絡ください。
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/contact">
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
