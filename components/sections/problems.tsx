import { AlertCircle, HeartPulse, Smile, Users } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "福利厚生があまり使われていない",
    description: "せっかくの制度が従業員に活用されず、投資対効果が見えにくい",
  },
  {
    icon: HeartPulse,
    title: "健康管理や健診対応が煩雑",
    description: "紙ベースの管理や複数システムの併用で業務負担が大きい",
  },
  {
    icon: Smile,
    title: "従業員満足度を上げたい",
    description: "エンゲージメント向上のための効果的な施策が見つからない",
  },
  {
    icon: Users,
    title: "若手社員に魅力的な制度が必要",
    description: "採用競争力を高めるための福利厚生の差別化が課題",
  },
];

export function Problems() {
  return (
    <section className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            こんなお悩みありませんか？
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            多くの企業が福利厚生と健康管理に関する課題を抱えています
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
