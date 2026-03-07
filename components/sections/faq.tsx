"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "導入にはどれくらいの期間がかかりますか？",
    answer:
      "企業規模や導入内容により異なりますが、通常2〜4週間程度で利用開始いただけます。専任のサポートチームが導入をサポートします。",
  },
  {
    question: "従業員数が少なくても利用できますか？",
    answer:
      "はい、10名規模の企業様から導入いただいています。従業員数に応じた柔軟な料金プランをご用意しています。",
  },
  {
    question: "既存のシステムとの連携は可能ですか？",
    answer:
      "はい、主要な人事システムやヘルスケアアプリとの連携が可能です。詳細はお問い合わせください。",
  },
  {
    question: "セキュリティ対策はどうなっていますか？",
    answer:
      "ISMS認証を取得し、SSL/TLS暗号化、データの定期バックアップ、24時間監視など、万全のセキュリティ対策を講じています。",
  },
  {
    question: "従業員への説明会は実施してもらえますか？",
    answer:
      "はい、導入時に従業員の皆様向けの説明会を実施いたします。オンライン・オフラインどちらも対応可能です。",
  },
  {
    question: "解約時のデータはどうなりますか？",
    answer:
      "解約時には、ご希望に応じてデータのエクスポートが可能です。解約後は規定の期間を経てデータを完全に削除いたします。",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            よくある質問
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            導入を検討される際によくいただく質問をまとめました
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
