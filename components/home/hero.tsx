import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const usagePoints = [
  "利用率が上がる制度設計",
  "拠点差を抑えるデジタル運用",
  "健康施策まで一つに統合",
];

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-72px)] min-h-[640px] max-h-[920px] overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home-hero.png"
          alt="オフィスで社宝アプリを紹介するビジネスパーソン"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover object-[72%_center]"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pb-16 pt-10 sm:pb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-5 py-2.5 text-base font-medium text-foreground shadow-sm">
              <Sparkles className="h-5 w-5 text-primary" />
              使われる福利厚生をつくる、やさしいSaaS
            </div>

            <h1 className="mt-7 text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.08]">
              福利厚生を
              <br />
              <span className="text-primary">使いたくなる体験に。</span>
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-xl leading-9 text-white drop-shadow-md sm:text-2xl">
              社宝は、福利厚生、健康経営、健診、ストレスチェックを一つにつなぐプラットフォーム。
              制度を配るだけで終わらず、従業員にきちんと使われる仕組みまで設計できます。
            </p>

            <div className="mt-9 flex flex-wrap gap-3.5">
              {usagePoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-base font-medium text-foreground shadow-sm ring-1 ring-primary/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-11 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-16 rounded-full px-10 text-lg shadow-sm" asChild>
                <Link href="/contact?type=demo">
                  デモを相談する
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 rounded-full border-primary/20 bg-white/80 px-10 text-lg shadow-sm"
                asChild
              >
                <Link href="/contact?type=document">
                  <FileText className="h-5 w-5" />
                  資料をダウンロード
                </Link>
              </Button>
            </div>

        </div>
      </div>
    </section>
  );
}
