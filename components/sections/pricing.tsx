import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "従業員数に応じた柔軟な料金体系",
  "初期費用を抑えたプラン",
  "必要な機能だけを選択可能",
  "導入後のサポート込み",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
                シンプルな料金体系
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                企業規模や導入内容に応じて最適なプランをご提案します
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  料金に含まれるもの
                </h3>
                <ul className="mt-6 space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-primary/5 p-8 text-center">
                <div className="text-sm font-medium text-primary">まずは無料相談</div>
                <div className="mt-2 text-3xl font-bold text-foreground">
                  お見積もりは無料
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  貴社の規模・ニーズに合わせた最適なプランをご提案いたします
                </p>
                <Button size="lg" className="mt-6">
                  料金について相談する
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
