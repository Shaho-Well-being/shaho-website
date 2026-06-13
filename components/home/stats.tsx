import { CalendarClock, FolderX, Users } from "lucide-react";

const problems = [
  {
    icon: Users,
    keyword: "使う人と使わない人の差",
    description: "福利厚生を導入しても、利用率にばらつきが出て「制度を作っただけ」になってしまう。",
    iconColor: "text-yellow-700",
    iconBg: "bg-yellow-100",
    border: "border-l-yellow-400",
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
    icon: CalendarClock,
    keyword: "毎年追われるストレスチェック",
    description: "集計・産業医連携・報告書提出まで、年1回の法定対応なのに工数がかかりすぎる。",
    iconColor: "text-sky-800",
    iconBg: "bg-sky-100",
    border: "border-l-sky-400",
  },
];

const outcomes = [
  {
    label: "ポイント福利厚生",
    sub: "役職・拠点に関わらず全員が同じ機会を得られる仕組みを設計できます。",
    bg: "bg-yellow-50",
    text: "text-yellow-900",
    sub_text: "text-yellow-700/80",
  },
  {
    label: "セルフヘルスケア × 認定支援",
    sub: "普段のアプリ利用がそのまま証跡として蓄積され、申請を支援します。",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    sub_text: "text-emerald-700/80",
  },
  {
    label: "ストレスチェック",
    sub: "実施から労基署への報告まで、ひとつの管理画面で完結します。",
    bg: "bg-sky-50",
    text: "text-sky-900",
    sub_text: "text-sky-700/80",
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

          {/* Problem cards ── モバイル: 3列コンパクト / デスクトップ: 詳細カード */}
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
            {problems.map((p) => (
              <div
                key={p.keyword}
                className={`rounded-2xl border-l-4 ${p.border} bg-white px-3 py-4 shadow-sm sm:rounded-[20px] sm:px-6 sm:py-6`}
              >
                <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${p.iconBg} sm:h-11 sm:w-11 sm:rounded-2xl`}>
                  <p.icon className={`h-4 w-4 ${p.iconColor} sm:h-5 sm:w-5`} />
                </div>
                <p className="mt-3 text-xs font-black leading-snug text-foreground sm:text-base">
                  {p.keyword}
                </p>
                <p className="mt-1 hidden text-sm leading-6 text-muted-foreground sm:block">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          {/* Solution ── モバイル: 3列コンパクト / デスクトップ: 詳細カード */}
          <div className="mt-4 rounded-[24px] bg-white/90 px-4 py-5 shadow-sm backdrop-blur sm:mt-10 sm:rounded-[32px] sm:px-8 sm:py-8">
            <p className="text-center text-sm font-black tracking-tight text-foreground sm:text-xl">
              社宝の<span className="text-primary">3本柱</span>が、3つの課題に直接応えます。
            </p>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
              {outcomes.map((o) => (
                <div
                  key={o.label}
                  className={`${o.bg} rounded-xl px-3 py-3 sm:rounded-[20px] sm:px-5 sm:py-5`}
                >
                  <p className={`text-xs font-black leading-snug ${o.text} sm:text-sm`}>{o.label}</p>
                  <p className={`mt-1 hidden text-sm leading-6 ${o.sub_text} sm:block`}>{o.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
