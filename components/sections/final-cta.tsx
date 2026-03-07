import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          福利厚生と健康管理を、
          <br />
          もっとシンプルに。
        </h2>
        <p className="mt-6 text-pretty text-lg text-primary-foreground/80">
          社宝で、従業員も企業も満足できる福利厚生を実現しませんか？
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 bg-background text-foreground hover:bg-background/90"
          >
            資料請求
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            お問い合わせ
          </Button>
        </div>
      </div>
    </section>
  );
}
