import { Hero } from "@/components/home/hero";
import { SocialProof } from "@/components/home/social-proof";
import { Stats } from "@/components/home/stats";
import { FeaturesOverview } from "@/components/home/features-overview";
import { KenkoKeiei } from "@/components/home/kenko-keiei";
import { Comparison } from "@/components/home/comparison";
import { ExpertEndorsements } from "@/components/home/expert-endorsements";
import { PricingTeaser } from "@/components/home/pricing-teaser";
import { FAQ } from "@/components/home/faq";
import { BlogPreview } from "@/components/home/blog-preview";
import { CTA } from "@/components/home/cta";
import { isMicroCMSConfigured, getBlogPosts } from "@/lib/microcms";

export default async function HomePage() {
  let blogPosts: Awaited<ReturnType<typeof getBlogPosts>>["contents"] | undefined;
  if (isMicroCMSConfigured()) {
    try {
      const data = await getBlogPosts({ limit: 3 });
      blogPosts = data.contents;
    } catch {
      blogPosts = undefined;
    }
  }

  return (
    <>
      <Hero />
      <SocialProof />
      <Stats />
      <FeaturesOverview />
      <KenkoKeiei />
      <Comparison />
      <ExpertEndorsements />
      <PricingTeaser />
      <FAQ />
      <BlogPreview posts={blogPosts} />
      <CTA />
    </>
  );
}
