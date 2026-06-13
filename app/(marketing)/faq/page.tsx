import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "よくある質問 | 社宝",
  description:
    "社宝の導入・料金・セキュリティなど、よくある質問をまとめています。",
};

export default function FaqPage() {
  return (
    <div className="py-16 lg:py-24">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            よくある質問
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            導入を検討される際によくいただく質問をまとめました。
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
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

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            その他のご質問はお気軽にお問い合わせください。
          </p>
          <Button className="mt-4 rounded-full" asChild>
            <Link href="/contact">
              お問い合わせ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
