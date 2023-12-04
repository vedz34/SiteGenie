import "./style/globals.css";
import HeroSection from "./components/heroSection";
import CTA from "./components/cta-section";
import FaqSection from "./components/faqs";
import FooterSection from "./components/footer";
import FeaturesSection from "./components/features";
import PricingSection from "./components/pricing";
//import Icon from "./components/svgSection";
import LogoCloud from "./components/logoClouds";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <CTA />
      <FooterSection />
    </>
  );
}
