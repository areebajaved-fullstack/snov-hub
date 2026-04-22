import React, { useState } from "react";
import WelcomeComponent from "./features/WelcomeComponent";


// import AgentsTable from "./features/tabledata";
// import CreateAgentModal from "../commonpages/CreateAgentModal";

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

            
            
          </div>
        </div>
      </div>

      {/* <CreateAgentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </div>
  );
};

export default AdminDashboard;
