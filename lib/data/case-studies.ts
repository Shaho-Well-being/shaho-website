import { getCaseStudies, getCaseStudy, mockCaseStudies, isMicroCMSConfigured } from "@/lib/microcms";
import type { CaseStudy } from "@/lib/microcms";

export async function fetchCaseStudies(limit = 20): Promise<CaseStudy[]> {
  if (isMicroCMSConfigured()) {
    try {
      return (await getCaseStudies({ limit })).contents;
    } catch {
      return mockCaseStudies;
    }
  }
  return mockCaseStudies;
}

export async function fetchCaseStudy(id: string): Promise<CaseStudy | undefined> {
  if (isMicroCMSConfigured()) {
    try {
      return await getCaseStudy(id);
    } catch {
      return mockCaseStudies.find((cs) => cs.id === id);
    }
  }
  return mockCaseStudies.find((cs) => cs.id === id);
}

export async function fetchCaseStudyStaticParams(): Promise<{ id: string }[]> {
  const studies = await fetchCaseStudies(100);
  return studies.map((cs) => ({ id: cs.id }));
}
