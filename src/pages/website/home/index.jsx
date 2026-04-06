
import HeroSection from "./features/HeroSection"
import FeaturesHeader from "./features/FeaturesHeader"
import HowItWorksSteps from "./features/HowItWorksSteps"
import Pricing from "./features/Pricing"
import Testimonials from "./features/Testimonials"

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesHeader />
      <HowItWorksSteps />
      <Pricing/>
      <Testimonials/>
      
    </>
  );
};

export default HomePage;
