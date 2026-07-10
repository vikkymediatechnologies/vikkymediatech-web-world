import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { TechStack } from "@/components/sections/tech-stack";
import { AcademyPreview } from "@/components/sections/academy-preview";
import { Internship } from "@/components/sections/internship";
import { CommunityImpact } from "@/components/sections/community-impact";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <Process />
      <FeaturedProjects />
      <TechStack />
      <AcademyPreview />
      <Internship />
      <CommunityImpact />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
