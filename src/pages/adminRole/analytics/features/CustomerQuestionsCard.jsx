import React from "react";
import TopQuestionsGraph from "../../../../components/nomadReusable/Graph";

const CustomerQuestionsCard = () => {
  // 🔥 Data yahan rakho (dynamic / API se bhi aa sakta hai)
  const data = [
    { label: "Reset password?", value: 360 },
    { label: "Pricing plans?", value: 270 },
    { label: "Cancel subscription?", value: 180 },
    { label: "Refund policy?", value: 150 },
    { label: "Slack integration?", value: 120 },
  ];

  return (
    <div className="w-full max-w-[560px] h-[297px] bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col gap-6">
      
      {/* Title */}
      <h3 className="text-sm font-medium text-gray-900">
        Top Customer Questions
      </h3>

      {/* Chart */}
      <TopQuestionsGraph data={data} />

    </div>
  );
};

export default CustomerQuestionsCard;