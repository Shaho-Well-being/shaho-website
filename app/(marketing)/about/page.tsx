import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Heart, Users, Sparkles } from "lucide-react";
import { TeamAvatar } from "@/components/about/team-avatar";

export const metadata: Metadata = {
  title: "会社概要 | 社宝",
  description: "社宝を運営する株式会社社宝の会社概要、ミッション、チームについてご紹介します。",
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

const team = [
  {
    name: "田中 太郎",
    role: "代表取締役CEO",
    bio: "大手人材会社にて人事コンサルティングを経験後、社宝を創業。",
    image: "/images/team/ceo.jpg",
  },
  {
    name: "佐藤 花子",
    role: "取締役CTO",
    bio: "外資系IT企業にてエンジニアリングリードを経験。",
    image: "/images/team/cto.jpg",
  },
  {
    name: "山田 一郎",
    role: "取締役COO",
    bio: "コンサルティングファームにて事業戦略を担当。",
    image: "/images/team/coo.jpg",
  },
  {
    name: "鈴木 美咲",
    role: "執行役員 プロダクト責任者",
    bio: "HR SaaSスタートアップにてプロダクトマネジメントを経験。",
    image: "/images/team/product.jpg",
  },
];

const companyInfo = [
  { label: "会社名", value: "株式会社社宝" },
  { label: "設立", value: "2020年4月" },
  { label: "代表取締役", value: "田中 太郎" },
  { label: "所在地", value: "東京都渋谷区渋谷1-1-1 渋谷ビル5F" },
  { label: "事業内容", value: "福利厚生・健康管理プラットフォームの開発・運営" },
  { label: "従業員数", value: "50名（2024年4月現在）" },
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
            社宝は、働く人の健康と幸福を支援するプラットフォームを開発・運営しています。
            福利厚生と健康管理を統合し、企業と従業員の双方に価値を提供します。
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
              私たちのストーリー
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                社宝は2020年、「働く人の健康と幸福をテクノロジーで支援したい」という想いから生まれました。
              </p>
              <p>
                創業者は、大手企業での人事経験を通じて、福利厚生と健康管理がバラバラに運用されている
                現状に課題を感じていました。従業員にとっては使いづらく、人事担当者にとっては
                管理が煩雑。双方にとって最適とは言えない状況でした。
              </p>
              <p>
                この課題を解決するため、福利厚生、健康管理、健診・ストレスチェックを
                一つのプラットフォームに統合した「社宝」を開発しました。
              </p>
              <p>
                現在、500社以上の企業様にご利用いただき、50万人以上の従業員の方々の
                健康と幸福の支援に貢献しています。
              </p>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted">
            {/* public/images/hero-office-1.jpg を表示。別画像を使う場合は about-story.jpg を public/images/ に置き、以下を src="/images/about-story.jpg" に変更 */}
            <img
              src="/images/hero-office-1.jpg"
              alt="私たちのストーリー"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">経営チーム</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            多様なバックグラウンドを持つメンバーが、社宝の成長を牽引しています。
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name}>
              <CardContent className="p-6 text-center">
                <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-muted">
                  {member.image ? (
                    <TeamAvatar src={member.image} name={member.name} />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-2xl font-semibold text-muted-foreground">
                      {member.name.slice(0, 1)}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
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
                <span className="w-32 shrink-0 text-sm font-medium text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-muted/50 px-6 py-16 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-foreground">一緒に働きませんか？</h2>
          <p className="mt-4 text-muted-foreground">
            社宝では、ミッションに共感し、共に成長できる仲間を募集しています。
          </p>
          <Button className="mt-8" asChild>
            <Link href="/careers">
              採用情報を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto mt-24 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-16 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-background sm:text-3xl">
            お気軽にお問い合わせください
          </h2>
          <p className="mt-4 text-background/80">
            製品についてのご質問、導入のご相談など、お気軽にご連絡ください。
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
