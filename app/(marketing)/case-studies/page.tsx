import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2 } from "lucide-react";
import { mockCaseStudies, isMicroCMSConfigured, getCaseStudies } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "導入事例 | 社宝",
  description: "社宝を導入いただいた企業様の声と成果をご紹介します。",
};

async function getData() {
  if (isMicroCMSConfigured()) {
    try {
      const data = await getCaseStudies({ limit: 20 });
      return data.contents;
    } catch {
      return mockCaseStudies;
    }
  }
  return mockCaseStudies;
}

export default async function CaseStudiesPage() {
  const caseStudies = await getData();

  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            導入事例
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            社宝を導入いただいた企業様の声と、実際に得られた成果をご紹介します。
            業界・規模を問わず、多くの企業様で成果を実感いただいています。
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-2xl bg-muted/50 p-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">500+</div>
            <div className="mt-1 text-sm text-muted-foreground">導入企業数</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">98%</div>
            <div className="mt-1 text-sm text-muted-foreground">顧客満足度</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">50万</div>
            <div className="mt-1 text-sm text-muted-foreground">利用ユーザー数</div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`} className="group">
              <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-lg">
                <CardContent className="p-0">
                  {/* Thumbnail */}
                  <div className="flex aspect-[16/9] items-center justify-center bg-muted">
                    <Building2 className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Company Info */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-muted-foreground">
                        {caseStudy.company.name.slice(0, 1)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{caseStudy.company.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {caseStudy.company.industry} / {caseStudy.company.size}
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 text-xl font-semibold leading-snug text-foreground group-hover:text-accent">
                      {caseStudy.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {caseStudy.excerpt}
                    </p>

                    {/* Results */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {caseStudy.results.map((result) => (
                        <div
                          key={result.metric}
                          className="rounded-lg bg-muted px-3 py-2 text-center"
                        >
                          <div className="text-lg font-bold text-accent">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="mt-6 flex items-center text-sm font-medium text-accent">
                      詳しく読む
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
