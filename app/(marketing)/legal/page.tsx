import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | 社宝",
  description:
    "福利厚生・健康経営プラットフォーム「社宝」に関する特定商取引法に基づく表記。販売事業者情報、料金、支払方法等を掲載しています。",
};

const legalItems = [
  {
    label: "販売事業者",
    value: "モバイルアプリシステムズ株式会社",
  },
  {
    label: "代表者",
    value: "代表取締役　小林 慎吾",
  },
  {
    label: "所在地",
    value: "〒104-0061 東京都中央区銀座1丁目12番4号 N&E BLD. 6F",
  },
  {
    label: "連絡先",
    value: (
      <>
        お問い合わせは
        <Link href="/contact" className="mx-1 text-primary underline underline-offset-4 hover:text-primary/80">
          お問い合わせフォーム
        </Link>
        よりご連絡ください。
        <br />
        メール：
        <a
          href="mailto:contact@shaho-life.com"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          contact@shaho-life.com
        </a>
        <br />
        <span className="text-muted-foreground">
          ※ お電話でのお問い合わせをご希望の場合は、フォームよりご連絡ください。
        </span>
      </>
    ),
  },
  {
    label: "販売価格",
    value: (
      <>
        各プランの料金は
        <Link href="/pricing" className="mx-1 text-primary underline underline-offset-4 hover:text-primary/80">
          料金ページ
        </Link>
        をご確認ください。表示価格は税抜または税込のいずれかを明記し、個別のお見積りが必要な場合があります。
      </>
    ),
  },
  {
    label: "商品代金以外の必要料金",
    value: "インターネット接続に必要な通信料、端末費用等はお客様のご負担となります。",
  },
  {
    label: "代金の支払時期および方法",
    value:
      "契約内容に応じて、請求書払い（銀行振込）等の方法でお支払いいただきます。支払時期は個別契約に定めるとおりです。",
  },
  {
    label: "役務の提供時期",
    value:
      "契約締結および初期設定完了後、速やかに本サービスの利用を開始いただけます。導入スケジュールは個別にご案内します。",
  },
  {
    label: "返品・キャンセル",
    value:
      "本サービスは法人向けSaaSのため、契約内容および解約条件は個別の利用契約に従います。詳細はお問い合わせください。",
  },
  {
    label: "動作環境",
    value:
      "本サービスの利用には、対応するWebブラウザまたはモバイル端末（iOS / Android）が必要です。推奨環境は導入時にご案内します。",
  },
];

export default function LegalPage() {
  return (
    <div className="py-16 lg:py-24">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            特定商取引法に基づく表記
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            福利厚生・健康経営プラットフォーム「社宝」に関する表示事項です。
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <dl className="divide-y divide-border">
            {legalItems.map((item) => (
              <div key={item.label} className="grid gap-3 px-5 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-foreground">{item.label}</dt>
                <dd className="text-sm leading-7 text-muted-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            関連する方針・ポリシーについては、以下もあわせてご確認ください。
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link
                href="/privacy"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link
                href="https://mobile-app-systems.co.jp/security-policy/"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                セキュリティポリシー
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-primary underline underline-offset-4 hover:text-primary/80">
                利用規約
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
