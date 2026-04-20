import React from "react";
import WelcomeComponent from "./features/WelcomeComponent";
import Chat from "./features/chat";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen overflow-x-hidden no-scrollbar">
      <div className="space-y-4 max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-12 space-y-4 ">
            <div className="w-full rounded-[1.5rem]">
              <WelcomeComponent />
            </div>
            <div className="w-full rounded-[1.5rem]">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
