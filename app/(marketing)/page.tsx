import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { FeaturesOverview } from "@/components/home/features-overview";
import { Testimonials } from "@/components/home/testimonials";
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
      <Stats />
      <FeaturesOverview />
      <Testimonials />
      <BlogPreview posts={blogPosts} />
      <CTA />
    </>
  );
}
