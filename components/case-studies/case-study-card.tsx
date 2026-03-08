import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { CaseStudy } from "@/lib/microcms";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.id}`} className="group">
      <Card className="h-full transition-all hover:border-foreground/20 hover:shadow-lg">
        <CardContent className="p-0">
          <div className="flex aspect-[16/9] items-center justify-center bg-muted">
            <Building2 className="h-16 w-16 text-muted-foreground/30" />
          </div>

          <div className="p-6">
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

            <h2 className="mt-4 text-xl font-semibold leading-snug text-foreground group-hover:text-accent">
              {caseStudy.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {caseStudy.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {caseStudy.results.map((result) => (
                <div key={result.metric} className="rounded-lg bg-muted px-3 py-2 text-center">
                  <div className="text-lg font-bold text-accent">{result.value}</div>
                  <div className="text-xs text-muted-foreground">{result.metric}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center text-sm font-medium text-accent">
              詳しく読む
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
