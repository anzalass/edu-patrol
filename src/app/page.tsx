import BenefitsSection from "@/components/benefit";
import EfficiencySection from "@/components/efisiensi";
import FeaturesSlider from "@/components/fitur-unggulan";
import FiturUtama from "@/components/fitur-utama";
import Footer from "@/components/footer";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";
import TestimonialsSection from "@/components/testimonial";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Jumbotron />
      <FiturUtama />
      <FeaturesSlider />
      <BenefitsSection />
      <EfficiencySection />
      <TestimonialsSection />
      <Footer />
      {/* Hero Section */}
    </div>
  );
}
