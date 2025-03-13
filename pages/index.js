import Stats from "@/components/sections/stats";
import HeroSection from "@/components/sections/heroSection";
import ServiceSection from "@/components/sections/serviceSection";
import TestimonialSection from "@/components/sections/testimonialSection";
import FAQ from "@/components/sections/faqSection";
import Contact from "@/components/sections/contact";
import TapeCarousel from "@/components/sections/tape";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <TapeCarousel />
      <ServiceSection />
      <TestimonialSection />
      <Stats />
      <FAQ />
      <Contact />
    </section>
  )
}