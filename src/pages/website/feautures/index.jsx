import React from "react";
import PowerfulAIFeaturesSection from "./feauture/PowerfulAIFeaturesSection";
import FeaturesShowcaseSection from "./feauture/FeaturesShowcaseSection";
import PerformanceSection from "./feauture/PerformanceSection";
const WebsiteFeaturesPage = () => {
  return (
    <main>
      {/* Matches the standalone section block from the design */}
      <PowerfulAIFeaturesSection />
      <FeaturesShowcaseSection />
      <PerformanceSection />
    </main>
  );
};

export default WebsiteFeaturesPage;
