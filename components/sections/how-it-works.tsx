import { MessageSquare, Users, Settings, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "お問い合わせ",
    description: "まずはお気軽にお問い合わせください",
  },
  {
    icon: Users,
    title: "ヒアリング",
    description: "貴社の課題や要望をお伺いします",
  },
  {
    icon: Settings,
    title: "導入設定",
    description: "貴社に合わせた設定を行います",
  },
  {
    icon: Rocket,
    title: "利用開始",
    description: "従業員の皆様がすぐに利用開始",
  },
  {
    icon: HeadphonesIcon,
    title: "運用サポート",
    description: "導入後も継続的にサポートします",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            導入の流れ
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            シンプルな5ステップで、スムーズに導入いただけます
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-0 right-0 top-[3.5rem] hidden h-0.5 bg-border lg:block" />
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative mx-auto mb-4 flex h-28 w-28 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-primary/10" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-md ring-4 ring-background">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
