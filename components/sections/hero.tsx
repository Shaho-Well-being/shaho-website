import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { PhoneMockup } from "@/components/ui/phone-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary" />
              企業の福利厚生をもっとシンプルに
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              福利厚生と健康管理を、
              <span className="text-primary">これひとつで。</span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              社宝は、福利厚生、健康管理、健診、ストレスチェックを
              一つにまとめた企業向けプラットフォームです。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                資料請求
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" />
                デモを見る
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">導入企業</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50万+</div>
                <div className="text-sm text-muted-foreground">利用者数</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">満足度</div>
              </div>
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <PhoneMockup className="relative z-10 -rotate-6 transform">
                <div className="flex h-full flex-col bg-gradient-to-b from-primary/10 to-background p-4">
                  <div className="mb-4 text-center">
                    <div className="text-sm text-muted-foreground">保有ポイント</div>
                    <div className="text-3xl font-bold text-primary">12,500 pt</div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="rounded-xl bg-card p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <span className="text-lg">🎁</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-card-foreground">ギフト交換</div>
                          <div className="text-xs text-muted-foreground">100種類以上</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-card p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                          <span className="text-lg">❤️</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-card-foreground">ヘルスケア</div>
                          <div className="text-xs text-muted-foreground">歩数: 8,234歩</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-card p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                          <span className="text-lg">📊</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-card-foreground">健診結果</div>
                          <div className="text-xs text-muted-foreground">最新の結果を確認</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
              <PhoneMockup className="absolute -right-16 top-8 z-20 rotate-6 transform">
                <div className="flex h-full flex-col bg-gradient-to-b from-accent/10 to-background p-4">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground">今週の健康スコア</div>
                    <div className="mt-2 flex items-end gap-1">
                      {[60, 75, 80, 65, 90, 85, 70].map((h, i) => (
                        <div
                          key={i}
                          className="w-6 rounded-t bg-primary/80"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                      <span>月</span>
                      <span>日</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-card p-2 shadow-sm">
                      <span className="text-sm text-card-foreground">睡眠</span>
                      <span className="text-sm font-medium text-primary">7.5h</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-card p-2 shadow-sm">
                      <span className="text-sm text-card-foreground">運動</span>
                      <span className="text-sm font-medium text-primary">45min</span>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
