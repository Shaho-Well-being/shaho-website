import { Gift, Heart, Settings } from "lucide-react";

const values = [
  {
    icon: Gift,
    title: "使われる福利厚生",
    description:
      "ポイントを使ったシンプルな仕組みで、従業員が日常的に利用しやすい福利厚生を実現します。",
  },
  {
    icon: Heart,
    title: "健康管理の習慣化",
    description:
      "スマホアプリで健康情報を確認し、日々のセルフケアをサポートします。",
  },
  {
    icon: Settings,
    title: "企業の運用負担を軽減",
    description:
      "福利厚生・健康管理・ストレスチェックをまとめて管理できます。",
  },
];

export function ValueProposition() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            社宝が、福利厚生を
            <span className="text-primary">"使われる仕組み"</span>
            に変えます
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                {value.title}
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
