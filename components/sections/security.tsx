import { Shield, Lock, UserCheck } from "lucide-react";

const securityPoints = [
  {
    icon: Shield,
    title: "個人情報への配慮",
    description:
      "ISMS認証を取得し、個人情報保護に関する法令を遵守した運用を行っています。",
  },
  {
    icon: Lock,
    title: "健康データの適切な管理",
    description:
      "健康情報は厳格なセキュリティ基準のもと、安全に保管・管理されています。",
  },
  {
    icon: UserCheck,
    title: "企業と従業員双方に配慮した設計",
    description:
      "プライバシーに配慮しつつ、企業の健康経営をサポートする設計です。",
  },
];

export function Security() {
  return (
    <section id="security" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            安心して導入できる設計
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            セキュリティと個人情報保護を最優先に設計されています
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {securityPoints.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <point.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {point.title}
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
