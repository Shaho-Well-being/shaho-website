const stats = [
  { value: "500+", label: "導入企業数" },
  { value: "50万", label: "利用ユーザー数" },
  { value: "98%", label: "継続利用率" },
  { value: "4.8", label: "顧客満足度" },
];

export function Stats() {
  return (
    <section className="border-y border-border py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
