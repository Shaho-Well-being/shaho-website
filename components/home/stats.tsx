const problems = [
  "用意したのに使われない福利厚生",
  "バラバラで運用が重い健康施策と法定対応",
  "「ちゃんと効いているか」が見えない",
];

const outcomes = [
  { value: "01", label: "人事は制度をまとめて設計" },
  { value: "02", label: "従業員はアプリで迷わず利用" },
  { value: "03", label: "利用状況まで見える化" },
];

export function Stats() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-[linear-gradient(180deg,#e9faf7_0%,#dff5f1_100%)] px-6 py-12 shadow-[0_30px_100px_-40px_rgba(28,92,95,0.35)] sm:px-10 lg:px-14 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Issues
            </div>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              こんなお悩み、ありませんか？
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              福利厚生は用意しているのに使われない。健康施策はあるのに分断している。
              そんな状態を、社宝はやさしく整理します。
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem}
                className="rounded-[24px] border border-white/70 bg-white/90 px-5 py-5 text-center text-sm font-semibold text-foreground shadow-sm backdrop-blur sm:text-base"
              >
                {problem}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[32px] bg-white/90 px-6 py-8 shadow-sm backdrop-blur sm:px-8">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Solution
              </div>
              <p className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                社宝は、この3つを
                <span className="text-primary">「使われて・回って・記録に残る」</span>
                状態に変えます。
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {outcomes.map((outcome) => (
                <div key={outcome.value} className="rounded-[24px] bg-secondary px-5 py-5 text-center">
                  <div className="text-3xl font-black text-primary">{outcome.value}</div>
                  <div className="mt-2 text-sm font-medium leading-6 text-foreground sm:text-base">
                    {outcome.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
