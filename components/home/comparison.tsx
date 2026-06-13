import { Check, Minus } from "lucide-react";

type Cell = "yes" | "partial" | "no";

const columns = [
  { key: "shaho", label: "社宝", highlight: true },
  { key: "welfare", label: "福利厚生代行サービス", highlight: false },
  { key: "healthcare", label: "ヘルスケアアプリ単体", highlight: false },
];

const rows: { axis: string; note: string; cells: Record<string, Cell> }[] = [
  {
    axis: "福利厚生",
    note: "制度設計から利用までを一つの導線で",
    cells: { shaho: "yes", welfare: "yes", healthcare: "no" },
  },
  {
    axis: "ヘルスケア連携",
    note: "ストレスチェックや健康施策まで同じアプリで",
    cells: { shaho: "yes", welfare: "partial", healthcare: "yes" },
  },
  {
    axis: "使いやすさ",
    note: "従業員がスマホで迷わず使える体験",
    cells: { shaho: "yes", welfare: "partial", healthcare: "yes" },
  },
  {
    axis: "健康経営優良法人の証跡",
    note: "日常の活動記録をダッシュボードで可視化",
    cells: { shaho: "yes", welfare: "no", healthcare: "no" },
  },
];

function CellMark({ value }: { value: Cell }) {
  if (value === "yes") {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary">
        <Minus className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground/50">
      <Minus className="h-4 w-4" />
    </span>
  );
}

export function Comparison() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Comparison
          </div>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            タイプ別に見る、社宝の立ち位置
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            福利厚生の代行も、ヘルスケアの単体アプリも、それぞれに強みがあります。
            社宝は、その両方を一つにまとめ、さらに認定に向けた活動記録をダッシュボードで残せることが特長です。
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[680px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="w-2/5 px-4 pb-4 text-left align-bottom" />
                {columns.map((col) => (
                  <th key={col.key} className="px-4 pb-4 text-center align-bottom">
                    <div
                      className={
                        col.highlight
                          ? "rounded-2xl bg-primary px-4 py-3 text-base font-black text-primary-foreground shadow-sm"
                          : "px-4 py-3 text-base font-bold text-muted-foreground"
                      }
                    >
                      {col.label}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={row.axis}>
                  <td
                    className={`px-4 py-5 align-top ${
                      rowIndex !== rows.length - 1 ? "border-b border-border/70" : ""
                    }`}
                  >
                    <div className="text-base font-bold text-foreground">{row.axis}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{row.note}</div>
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`px-4 py-5 text-center align-middle ${
                        rowIndex !== rows.length - 1 ? "border-b border-border/70" : ""
                      } ${col.highlight ? "bg-secondary/40" : ""}`}
                    >
                      <div className="flex justify-center">
                        <CellMark value={row.cells[col.key]} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          ※ サービスのタイプによる一般的な傾向を整理したものです。各社の機能は提供内容により異なります。
        </p>
      </div>
    </section>
  );
}
