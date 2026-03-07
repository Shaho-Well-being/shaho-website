import { Check, Gift, Heart, ClipboardList, Users } from "lucide-react";

const featureGroups = [
  {
    icon: Gift,
    title: "福利厚生機能",
    features: ["ポイント付与", "ギフト交換", "即時利用", "利用履歴"],
    color: "bg-primary",
  },
  {
    icon: Heart,
    title: "健康管理機能",
    features: ["ヘルスケア連携", "健康情報可視化", "セルフチェック"],
    color: "bg-accent",
  },
  {
    icon: ClipboardList,
    title: "健診・ストレスチェック",
    features: ["健診結果管理", "ストレスチェック対応", "提出支援"],
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "管理者機能",
    features: ["従業員管理", "利用状況確認", "レポート"],
    color: "bg-accent",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            社宝でできること
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            福利厚生から健康管理まで、必要な機能をすべて搭載
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureGroups.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${group.color} text-primary-foreground`}
              >
                <group.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
