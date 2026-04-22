import React from "react";
import SentimentPieChart from "../../../../components/nomadReusable/sentimentChart";

const data = [
  { label: "Positive", value: 62, color: "#3FA284" },
  { label: "Neutral", value: 28, color: "#B7BCC8" },
  { label: "Negative", value: 10, color: "#EF4343" },
];
const SentimentCard = () => {
  return (
    <div className="w-[560px] p-5 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-gray-200 flex flex-col gap-5">
      
      {/* Title */}
      <h3 className="text-slate-900 text-sm font-medium font-[Poppins]">
        Sentiment Analysis
      </h3>

      {/* Chart */}
      <div className="flex justify-center items-center">
        <SentimentPieChart data={data} />
      </div>

     
    </div>
  );
};

export default SentimentCard;