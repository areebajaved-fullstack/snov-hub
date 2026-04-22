import React, { useState } from "react";
import WelcomeComponent from "./features/WelcomeComponent";
import AnalyticsStats from "./features/AnalyticsStats";
import CustomerQuestionsCard from "./features/CustomerQuestionsCard";
import SentimentCard from "./features/sentimentCard";


const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden no-scrollbar">
      <div className="space-y-4 max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-12 space-y-4 ">
            <div className="w-full rounded-[1.5rem]">
              <WelcomeComponent onNewAgentClick={() => setIsModalOpen(true)} />
            </div>

            {/* Analytics Stats Cards */}
            <AnalyticsStats />

            {/* Analytics Dashboard */}
            <div className="w-[1136px] flex flex-col lg:flex-row gap-6 justify-center">
              <CustomerQuestionsCard />
              <SentimentCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
