import React, { useState } from "react";
import WelcomeComponent from "./features/WelcomeComponent";
import DashboardCardsContainer from "./features/dashboardCard";
import AgentsTable from "./features/tabledata";
import AddSourceModal from "./features/AddSourceModal";
import SourceDetailsModal from "./features/SourceDetailsModal";

const KnowledgeBase = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedSource, setSelectedSource] = useState(null);

  const handleOpenDetails = (source) => {
    setSelectedSource(source);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F8F8] overflow-x-auto scrollbar-hide hover:scrollbar-auto">
      <div className="space-y-2 max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-12 space-y-4 ">
            <div className="w-full rounded-[1.5rem]">
              <WelcomeComponent onNewAgentClick={() => setIsAddModalOpen(true)} />
            </div>

            <div className="rounded-[1.5rem]">
              <DashboardCardsContainer />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-3">
              <AgentsTable onResync={handleOpenDetails} />
            </div>
          </div>
        </div>
      </div>

      <AddSourceModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />

      <SourceDetailsModal 
        isOpen={isDetailsModalOpen} 
        onClose={() => setIsDetailsModalOpen(false)} 
        sourceData={selectedSource}
      />
    </div>
  );
};

export default KnowledgeBase;
