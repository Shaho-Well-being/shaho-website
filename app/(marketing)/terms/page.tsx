import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | 社宝",
  description:
    "福利厚生・健康経営プラットフォーム「社宝」のサービス利用規約。モバイルアプリシステムズ株式会社が提供する本サービスのご利用条件について定めています。",
};

const sections = [
  {
    title: "第1条（適用）",
    body: [
      "本利用規約（以下「本規約」）は、モバイルアプリシステムズ株式会社（以下「当社」）が提供する福利厚生・健康経営プラットフォーム「社宝」（以下「本サービス」）の利用条件を定めるものです。",
      "本サービスを利用する法人（以下「契約企業」）および契約企業の従業員（以下「利用者」）は、本規約に同意のうえ本サービスを利用するものとします。",
    ],
  },
  {
    title: "第2条（定義）",
    body: [
      "本規約において使用する用語の定義は、次のとおりとします。",
      "（1）「本サービス」とは、当社が提供する福利厚生、健康管理、ストレスチェック等に関するWebサービス、管理画面、モバイルアプリケーションおよび関連する付帯サービスをいいます。",
      "（2）「契約企業」とは、当社と本サービスの利用契約を締結した法人をいいます。",
      "（3）「利用者」とは、契約企業の従業員等で、本サービスを利用する者をいいます。",
    ],
  },
  {
    title: "第3条（アカウントおよび利用登録）",
    body: [
      "契約企業は、当社所定の方法により利用登録を行うものとします。",
      "契約企業は、利用者アカウントの発行・管理について適切な権限管理を行い、利用者による本サービスの利用を監督する責任を負います。",
      "利用者は、自己のアカウント情報を適切に管理し、第三者に利用させてはなりません。",
    ],
  },
  {
    title: "第4条（禁止事項）",
    body: [
      "利用者および契約企業は、本サービスの利用にあたり、次の行為をしてはなりません。",
      "（1）法令または公序良俗に反する行為",
      "（2）当社、他の利用者または第三者の権利・利益を侵害する行為",
      "（3）本サービスの運営を妨害する行為、または不正アクセス等の行為",
      "（4）虚偽の情報を登録・送信する行為",
      "（5）その他、当社が不適切と判断する行為",
    ],
  },
  {
    title: "第5条（知的財産権）",
    body: [
      "本サービスに関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。",
      "契約企業および利用者は、本規約に基づく利用の範囲内でのみ本サービスを利用できるものとします。",
    ],
  },
  {
    title: "第6条（免責事項）",
    body: [
      "当社は、本サービスが利用者の特定の目的に適合すること、期待する機能・正確性・有用性を有すること、ならびに不具合が生じないことを保証するものではありません。",
      "当社は、本サービスの利用または利用不能により生じた損害について、当社の故意または重過失による場合を除き、責任を負いません。",
      "健康に関する情報の提供は一般的な参考情報であり、医療行為または医学的助言に代わるものではありません。",
    ],
  },
  {
    title: "第7条（サービスの変更・中断・終了）",
    body: [
      "当社は、利用者への事前通知または本サービス上での告知により、本サービスの内容を変更し、または提供を中断・終了することができます。",
      "当社は、保守、障害、天災その他やむを得ない事由により、本サービスの全部または一部の提供を一時的に中断することができます。",
    ],
  },
  {
    title: "第8条（契約の解約）",
    body: [
      "契約企業は、当社所定の方法により本サービスの利用契約を解約することができます。",
      "契約企業または利用者が本規約に違反した場合、当社は事前通知のうえ利用停止または契約解除を行うことができます。",
    ],
  },
  {
    title: "第9条（個人情報の取扱い）",
    body: [
      "当社は、本サービスにおいて取得した個人情報を、当社のプライバシーポリシーに従い適切に取り扱います。",
      <>
        プライバシーポリシーは
        <Link
          href="/privacy"
          className="mx-1 text-primary underline underline-offset-4 hover:text-primary/80"
        >
          こちら
        </Link>
        をご確認ください。
      </>,
    ],
  },
  {
    title: "第10条（規約の変更）",
    body: [
      "当社は、必要に応じて本規約を変更することができます。変更後の規約は、本サービス上に掲示した時点から効力を生じます。",
      "変更後も本サービスの利用を継続した場合、変更後の規約に同意したものとみなします。",
    ],
  },
  {
    title: "第11条（準拠法・管轄）",
    body: [
      "本規約の解釈および適用は、日本法に準拠します。",
      "本サービスに関して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            利用規約
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            福利厚生・健康経営プラットフォーム「社宝」のご利用条件について定めています。
          </p>
        </div>

        <dl className="mt-10 space-y-1 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <dt className="font-medium text-foreground">制定日</dt>
            <dd>2026年6月13日</dd>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <dt className="font-medium text-foreground">運営事業者</dt>
            <dd>モバイルアプリシステムズ株式会社</dd>
          </div>
        </dl>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                {section.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
          本規約に関するお問い合わせは、
          <Link href="/contact" className="mx-1 text-primary underline underline-offset-4 hover:text-primary/80">
            お問い合わせページ
          </Link>
          よりご連絡ください。
        </p>
      </section>
    </div>
  );
}
