
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import QuickAccessSection from "@/components/QuickAccessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      <AnimatedBackground />
      <HeroSection />
      <FeaturesSection />
      <QuickAccessSection />
      <Footer />
    </div>
  );
};

export default Index;
