import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { FeaturesOverview } from "@/components/home/features-overview";
import { Testimonials } from "@/components/home/testimonials";
import { BlogPreview } from "@/components/home/blog-preview";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturesOverview />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  );
}
