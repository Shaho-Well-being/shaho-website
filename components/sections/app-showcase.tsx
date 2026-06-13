import { PhoneMockup } from "@/components/ui/phone-mockup";

export function AppShowcase() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            毎日使いたくなるアプリ体験
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            直感的なUIで、従業員が毎日楽しく使えるアプリ
          </p>
        </div>

        <div className="mt-16">
          {/* Dashboard Section */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                ダッシュボード
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground">
                ひと目でわかるホーム画面
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                ポイント残高、健康スコア、お知らせなど、重要な情報を一画面に集約。
                毎日のアプリ起動が楽しみになるデザインです。
              </p>
              <ul className="mt-6 space-y-3">
                {["ポイント残高の確認", "健康スコアの推移", "お得なキャンペーン情報"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="order-1 flex justify-center lg:order-2">
              <PhoneMockup>
                <div className="flex h-full flex-col bg-gradient-to-b from-primary/10 to-background p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">おはようございます</span>
                    <div className="h-8 w-8 rounded-full bg-primary/20" />
                  </div>
                  <div className="rounded-xl bg-primary p-4 text-primary-foreground">
                    <div className="text-sm opacity-90">保有ポイント</div>
                    <div className="text-3xl font-bold">12,500 pt</div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-card p-3 text-center shadow-sm">
                      <div className="text-xs text-muted-foreground">今日の歩数</div>
                      <div className="text-lg font-bold text-foreground">8,234</div>
                    </div>
                    <div className="rounded-lg bg-card p-3 text-center shadow-sm">
                      <div className="text-xs text-muted-foreground">健康スコア</div>
                      <div className="text-lg font-bold text-primary">85</div>
                    </div>
                  </div>
                  <div className="mt-4 flex-1 rounded-xl bg-card p-3 shadow-sm">
                    <div className="text-sm font-medium text-foreground">お知らせ</div>
                    <div className="mt-2 space-y-2 text-xs text-muted-foreground">
                      <div className="rounded bg-muted p-2">新しいギフトが追加されました</div>
                      <div className="rounded bg-muted p-2">健康チャレンジ開催中</div>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center">
              <PhoneMockup>
                <div className="flex h-full flex-col bg-background p-4">
                  <div className="mb-4 text-center">
                    <div className="text-sm font-medium text-foreground">ギフト交換</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "Amazonギフト", pts: "1,000pt" },
                      { name: "スターバックス", pts: "500pt" },
                      { name: "コンビニ券", pts: "300pt" },
                      { name: "書籍購入", pts: "1,500pt" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-border bg-card p-3 text-center"
                      >
                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <span className="text-lg">🎁</span>
                        </div>
                        <div className="text-xs font-medium text-foreground">{item.name}</div>
                        <div className="text-xs text-primary">{item.pts}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl bg-muted p-3">
                    <div className="text-xs font-medium text-foreground">人気のギフト</div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-8 w-8 rounded bg-primary/10" />
                      <div>
                        <div className="text-xs font-medium text-foreground">旅行券</div>
                        <div className="text-xs text-muted-foreground">10,000pt</div>
                      </div>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
            <div>
              <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-strong">
                ギフト交換
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground">
                豊富なラインナップから選べる
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                100種類以上のギフトからお好きなものを選んで交換。
                コンビニからレストラン、旅行まで、幅広いジャンルをご用意しています。
              </p>
              <ul className="mt-6 space-y-3">
                {["即時発行のデジタルギフト", "カテゴリ別の検索機能", "お気に入り登録"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent-strong">
                        <span className="text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
