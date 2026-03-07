import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { ValueProposition } from "@/components/sections/value-proposition";
import { Features } from "@/components/sections/features";
import { AppShowcase } from "@/components/sections/app-showcase";
import { Benefits } from "@/components/sections/benefits";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Security } from "@/components/sections/security";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problems />
        <ValueProposition />
        <Features />
        <AppShowcase />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
