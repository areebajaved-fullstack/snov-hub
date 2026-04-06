import React from 'react';
import PricingHeroSection from './feauture/PricingHeroSection';
import PricingPlans from './feauture/PricingPlans';
import FAQs from './feauture/FAQs';

const PricingPage = () => {
  return (
    <div>
      <PricingHeroSection />
      <PricingPlans />
      <FAQs />
    </div>
  );
};

export default PricingPage;