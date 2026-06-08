import { Hero } from "@/components/sections/hero";
import {
  StatsStrip,
  ServicesOverview,
  AvenuesSection,
  WhyUpward,
  CorporateHighlight,
  Testimonials,
  CtaBanner,
} from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesOverview />
      <AvenuesSection />
      <WhyUpward />
      <CorporateHighlight />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
