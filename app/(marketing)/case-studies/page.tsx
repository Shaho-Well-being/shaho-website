import { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { fetchCaseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "導入事例 | 社宝",
  description: "社宝を導入いただいた企業様の声と成果をご紹介します。",
};

export default async function CaseStudiesPage() {
  const caseStudies = await fetchCaseStudies(20);

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
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </section>
    </div>
  );
}
