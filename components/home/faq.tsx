import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "導入までどのくらいかかりますか？",
    answer:
      "最短1週間での全社展開が可能です。従業員リストのCSVアップロードと基本設定を完了後、アプリのダウンロード案内を一斉送付するだけで利用開始できます。",
  },
  {
    question: "料金はどのくらいですか？",
    answer:
      "ポイント付与額で選ぶシンプルな料金体系で、月額500円/人〜ご利用いただけます（プラットフォーム利用料は別途）。人数制限はありません。詳細はお見積りにてご案内します。",
  },
  {
    question: "従業員データのセキュリティは？",
    answer:
      "AWSインフラ上で構築し、通信・保存データともに暗号化しています。SECURITY ACTION二つ星宣言（IPA）を取得済みで、従業員のプライバシーに配慮した設計です。",
  },
  {
    question: "50名未満の事業所でも使えますか？",
    answer:
      "はい、人数制限はありません。ストレスチェックが法的義務となる50名以上の事業所だけでなく、それ以下の事業所でも健康経営の取り組みとして導入いただいています。",
  },
  {
    question: "健康経営優良法人の認定取得もサポートしてもらえますか？",
    answer:
      "はい。日常のアプリ利用ログを申請の証跡として蓄積・出力できるほか、認定取得に向けたサポートもご用意しています。中小企業診断士によるサポートも対応可能です。",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            FAQ
          </div>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            よくある質問
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            導入を検討される際によくいただく質問をまとめました。
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="/pricing#faq">
              料金・導入の詳細を見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
