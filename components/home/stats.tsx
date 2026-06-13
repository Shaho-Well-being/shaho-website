import { CalendarClock, FolderX, Users } from "lucide-react";

const problems = [
  {
    icon: CalendarClock,
    keyword: "毎年追われるストレスチェック",
    description: "集計・産業医連携・報告書提出まで、年1回の法定対応なのに工数がかかりすぎる。",
    iconColor: "text-sky-800",
    iconBg: "bg-sky-100",
    border: "border-l-sky-400",
  },
  {
    icon: FolderX,
    keyword: "証跡集めで挫折する認定申請",
    description: "健康経営優良法人を取りたいのに、「やった証拠」を別途かき集める作業で断念してしまう。",
    iconColor: "text-emerald-800",
    iconBg: "bg-emerald-100",
    border: "border-l-emerald-400",
  },
  {
    icon: Users,
    keyword: "使う人と使わない人の差",
    description: "福利厚生を導入しても、利用率にばらつきが出て「制度を作っただけ」になってしまう。",
    iconColor: "text-yellow-700",
    iconBg: "bg-yellow-100",
    border: "border-l-yellow-400",
  },
];

const outcomes = [
  {
    label: "ストレスチェック",
    sub: "実施から労基署への報告まで、ひとつの管理画面で完結します。",
    bg: "bg-sky-50",
    text: "text-sky-900",
    sub_text: "text-sky-700/80",
  },
  {
    label: "セルフヘルスケア × 認定支援",
    sub: "普段のアプリ利用がそのまま証跡として蓄積され、申請を支援します。",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    sub_text: "text-emerald-700/80",
  },
  {
    label: "ポイント福利厚生",
    sub: "役職・拠点に関わらず全員が同じ機会を得られる仕組みを設計できます。",
    bg: "bg-yellow-50",
    text: "text-yellow-900",
    sub_text: "text-yellow-700/80",
  },
];

export function Stats() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-[linear-gradient(180deg,#e9faf7_0%,#dff5f1_100%)] px-6 py-12 shadow-[0_30px_100px_-40px_rgba(28,92,95,0.35)] sm:px-10 lg:px-14 lg:py-16">

          {/* Header */}
          <div className="mx-auto max-w-xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Issues
            </div>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              こんなお悩み、ありませんか？
            </h2>
          </div>

          {/* Problem cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p.keyword}
                className={`rounded-[20px] border-l-4 ${p.border} bg-white px-6 py-6 shadow-sm`}
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${p.iconBg}`}>
                  <p.icon className={`h-5 w-5 ${p.iconColor}`} />
                </div>
                <p className="mt-4 text-base font-black leading-snug text-foreground">
                  {p.keyword}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          {/* Solution */}
          <div className="mt-10 rounded-[32px] bg-white/90 px-6 py-8 shadow-sm backdrop-blur sm:px-8">
            <p className="text-center text-lg font-black tracking-tight text-foreground sm:text-xl">
              社宝の<span className="text-primary">3本柱</span>が、3つの課題に直接応えます。
            </p>

            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {outcomes.map((o) => (
                <div
                  key={o.label}
                  className={`${o.bg} rounded-[20px] px-5 py-5`}
                >
                  <p className={`text-sm font-black ${o.text}`}>{o.label}</p>
                  <p className={`mt-2 text-sm leading-6 ${o.sub_text}`}>{o.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
