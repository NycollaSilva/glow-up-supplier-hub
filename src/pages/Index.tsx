import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import OfferSection from "@/components/landing/OfferSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <OfferSection />
      <Footer />
    </div>
  );
};

export default Index;
