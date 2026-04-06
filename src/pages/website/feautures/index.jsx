import React from "react";
import PowerfulAIFeaturesSection from "./feauture/PowerfulAIFeaturesSection";
import FeaturesShowcaseSection from "./feauture/FeaturesShowcaseSection";

const WebsiteFeaturesPage = () => {
  return (
    <main>
      {/* Matches the standalone section block from the design */}
      <PowerfulAIFeaturesSection />
      <FeaturesShowcaseSection />
    </main>
  );
};

export default WebsiteFeaturesPage;
