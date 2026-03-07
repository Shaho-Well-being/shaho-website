import { User, Briefcase, Building } from "lucide-react";

const benefitGroups = [
  {
    icon: User,
    role: "従業員",
    benefits: [
      {
        title: "福利厚生が使いやすくなる",
        description: "スマホで簡単にポイントを使って、好きなギフトに交換できます。",
      },
      {
        title: "健康管理が身近になる",
        description: "毎日の歩数や健康データを可視化し、セルフケアを習慣化。",
      },
    ],
  },
  {
    icon: Briefcase,
    role: "人事・総務",
    benefits: [
      {
        title: "福利厚生の利用促進",
        description: "利用状況をリアルタイムで把握し、効果的な施策を立案。",
      },
      {
        title: "健康施策の管理が簡単",
        description: "健診やストレスチェックを一元管理し、業務負担を軽減。",
      },
    ],
  },
  {
    icon: Building,
    role: "経営者",
    benefits: [
      {
        title: "従業員満足度向上",
        description: "使いやすい福利厚生で、従業員エンゲージメントを高めます。",
      },
      {
        title: "採用・定着の強化",
        description: "魅力的な福利厚生制度で、優秀な人材の獲得と定着を実現。",
      },
    ],
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            導入メリット
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            従業員から経営者まで、すべてのステークホルダーにメリットを
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {benefitGroups.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <group.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{group.role}</h3>
              </div>
              <div className="space-y-6">
                {group.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex}>
                    <h4 className="font-semibold text-card-foreground">{benefit.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
