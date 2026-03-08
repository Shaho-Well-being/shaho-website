import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Quote, Building2 } from "lucide-react";
import { mockCaseStudies, isMicroCMSConfigured, getCaseStudy, getCaseStudies } from "@/lib/microcms";

type Props = {
  params: Promise<{ id: string }>;
};

async function getData(id: string) {
  if (isMicroCMSConfigured()) {
    try {
      return await getCaseStudy(id);
    } catch {
      return mockCaseStudies.find((cs) => cs.id === id);
    }
  }
  return mockCaseStudies.find((cs) => cs.id === id);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = await getData(id);
  
  if (!caseStudy) {
    return { title: "導入事例が見つかりません | 社宝" };
  }

  return {
    title: `${caseStudy.company.name}様の導入事例 | 社宝`,
    description: caseStudy.excerpt,
  };
}

export async function generateStaticParams() {
  if (isMicroCMSConfigured()) {
    try {
      const data = await getCaseStudies({ limit: 100 });
      return data.contents.map((cs) => ({ id: cs.id }));
    } catch {
      return mockCaseStudies.map((cs) => ({ id: cs.id }));
    }
  }
  return mockCaseStudies.map((cs) => ({ id: cs.id }));
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { id } = await params;
  const caseStudy = await getData(id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="py-16 lg:py-24">
      {/* Back Link */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          導入事例一覧に戻る
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Company Info */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted text-2xl font-bold text-muted-foreground">
            {caseStudy.company.name.slice(0, 1)}
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">{caseStudy.company.name}</p>
            <p className="text-muted-foreground">
              {caseStudy.company.industry} / {caseStudy.company.size}
            </p>
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-8 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {caseStudy.title}
        </h1>

        {/* Results Summary */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {caseStudy.results.map((result) => (
            <div
              key={result.metric}
              className="rounded-xl bg-muted/50 p-6 text-center"
            >
              <div className="text-3xl font-bold text-accent">{result.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{result.metric}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Image */}
      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl">
          <div className="flex aspect-[16/9] items-center justify-center bg-muted">
            <Building2 className="h-24 w-24 text-muted-foreground/30" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2>課題</h2>
          <p>{caseStudy.excerpt}</p>

          <h2>導入の決め手</h2>
          <p>
            複数のシステムを比較検討した結果、社宝を選んでいただきました。
            福利厚生、健康管理、健診管理を一つのプラットフォームで実現できる点が
            大きな決め手となりました。
          </p>

          <h2>導入後の変化</h2>
          <p>
            導入後、福利厚生の利用率が大幅に向上。従業員からの問い合わせも減少し、
            人事担当者の業務負担が大きく軽減されました。
          </p>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <Quote className="h-10 w-10 text-muted-foreground/30" />
              <blockquote className="mt-4 text-xl leading-relaxed text-foreground">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div className="mt-6">
                <p className="font-medium text-foreground">{caseStudy.testimonial?.author ?? "—"}</p>
                <p className="text-sm text-muted-foreground">{caseStudy.testimonial?.role ?? ""}</p>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-background">
            貴社でも同じ成果を実現しませんか？
          </h2>
          <p className="mt-3 text-background/80">
            まずは無料デモで、社宝の機能をご体験ください。
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link href="/contact?type=demo">
              無料デモを予約
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
