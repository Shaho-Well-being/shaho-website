import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "お役立ち資料・リソース | 社宝",
  description: "福利厚生・健康経営に関する資料や導入事例、ガイドをダウンロード。社宝のサービス概要資料もご用意しています。",
};

export default function ResourcesPage() {
  return (
    <div className="py-16 lg:py-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            お役立ち資料
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            国内の福利厚生実施状況、社宝のサービス概要、導入事例・料金のご案内など、
            人事・経営者の方にお役立ちいただける資料をダウンロードいただけます。
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            資料一覧ページは現在準備中です。公開までの間は下記より資料請求をご利用ください。
          </p>
          <Button className="mt-8" size="lg" asChild>
            <Link href="/contact?type=document">
              資料をダウンロード
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
